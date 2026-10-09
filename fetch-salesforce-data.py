#!/usr/bin/env python3
"""
fetch-salesforce-data.py
────────────────────────
Authenticates to Salesforce via OAuth2 client_credentials (Connected App),
fetches org limits, metadata counts, users, licences, scheduled jobs,
and deployments, then writes them into js/data.js as LIVE_DATA.

Usage:
    python3 fetch-salesforce-data.py \
        --instance-url "https://griffith--sit.sandbox.my.salesforce.com" \
        --client-id    "YOUR_CONSUMER_KEY" \
        --client-secret "YOUR_CONSUMER_SECRET"

Environment variables (used by GitHub Actions):
    SF_INSTANCE_URL, SF_CLIENT_ID, SF_CLIENT_SECRET
"""
import argparse, json, os, re, sys, urllib.request, urllib.error, urllib.parse
from datetime import datetime, timezone

API_VERSION = "v60.0"

# ── HTTP helpers ──────────────────────────────────────────────────────────────
def sf_get(instance_url, access_token, path):
    url = f"{instance_url}/services/data/{API_VERSION}/{path}"
    req = urllib.request.Request(url, headers={
        "Authorization": f"Bearer {access_token}",
        "Accept":        "application/json",
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        print(f"  HTTP {e.code} for {path}: {body[:300]}")
        return None
    except Exception as e:
        print(f"  Error fetching {path}: {e}")
        return None

def sf_query(instance_url, access_token, soql):
    encoded = urllib.parse.quote(soql)
    data = sf_get(instance_url, access_token, f"query/?q={encoded}")
    records = data.get("records", []) if data else []
    # Handle pagination
    while data and not data.get("done", True):
        next_url = data.get("nextRecordsUrl", "")
        if not next_url:
            break
        req = urllib.request.Request(
            f"{instance_url}{next_url}",
            headers={"Authorization": f"Bearer {access_token}", "Accept": "application/json"}
        )
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                data = json.loads(r.read())
                records.extend(data.get("records", []))
        except Exception:
            break
    return records

# ── OAuth2 client_credentials ─────────────────────────────────────────────────
def get_access_token(instance_url, client_id, client_secret):
    token_url = f"{instance_url}/services/oauth2/token"
    body = urllib.parse.urlencode({
        "grant_type":    "client_credentials",
        "client_id":     client_id,
        "client_secret": client_secret,
    }).encode()
    req = urllib.request.Request(token_url, data=body, method="POST", headers={
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept":       "application/json",
    })
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            resp = json.loads(r.read())
            token = resp.get("access_token")
            if token:
                print("  ✅ OAuth2 token obtained")
                return token
            print(f"  ⚠️  No access_token in response: {resp}")
            return None
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        print(f"  HTTP {e.code} getting token: {body[:400]}")
        return None
    except Exception as e:
        print(f"  Error getting token: {e}")
        return None

# ── Fetch all Salesforce data ─────────────────────────────────────────────────
def fetch_all(instance_url, access_token):
    print("  → Fetching org limits...")
    limits_raw = sf_get(instance_url, access_token, "limits/") or {}
    limits = {}
    wanted = ["DailyApiRequests", "DailyAsyncApexExecutions", "DailyBulkApiBatches",
              "DataStorageMB", "FileStorageMB", "SingleEmail", "HourlyTimeBasedWorkflow"]
    for k in wanted:
        if k in limits_raw:
            limits[k] = {"Max": limits_raw[k]["Max"], "Remaining": limits_raw[k]["Remaining"]}

    print("  → Fetching org info...")
    org_info = sf_query(instance_url, access_token,
        "SELECT Id, Name, OrganizationType FROM Organization LIMIT 1")
    org_id   = org_info[0]["Id"]   if org_info else ""
    org_name = org_info[0]["Name"] if org_info else "Griffith SIT"

    print("  → Fetching metadata counts...")
    apex_classes = sf_query(instance_url, access_token,
        "SELECT COUNT() FROM ApexClass WHERE Status='Active'")
    apex_triggers = sf_query(instance_url, access_token,
        "SELECT COUNT() FROM ApexTrigger WHERE Status='Active'")
    flows = sf_query(instance_url, access_token,
        "SELECT COUNT() FROM FlowDefinitionView WHERE ActiveVersionId != null AND ProcessType != 'Flow'")
    # COUNT() returns a single record with 'expr0'
    meta = {
        "activeApexClasses":  (apex_classes[0].get("expr0", 0)  if apex_classes  else 0),
        "activeApexTriggers": (apex_triggers[0].get("expr0", 0) if apex_triggers else 0),
        "activeFlows":        (flows[0].get("expr0", 0)         if flows         else 0),
    }

    print("  → Fetching scheduled jobs...")
    job_records = sf_query(instance_url, access_token,
        "SELECT Id, CronJobDetail.Name, State, NextFireTime FROM CronTrigger ORDER BY NextFireTime ASC LIMIT 50")
    jobs = []
    job_states = {}
    for j in job_records:
        name  = (j.get("CronJobDetail") or {}).get("Name", "Unknown")
        state = j.get("State", "")
        nft   = (j.get("NextFireTime") or "")[:19] + "Z" if j.get("NextFireTime") else None
        jobs.append({"name": name, "state": state, "next": nft})
        job_states[state] = job_states.get(state, 0) + 1
    scheduled_jobs = {
        "total":    len(jobs),
        "waiting":  job_states.get("WAITING", 0),
        "complete": job_states.get("COMPLETE", 0),
        "acquired": job_states.get("ACQUIRED", 0),
        "jobs":     jobs[:10],
    }

    print("  → Fetching user licences...")
    lic_records = sf_query(instance_url, access_token,
        "SELECT Name, TotalLicenses, UsedLicenses FROM UserLicense ORDER BY TotalLicenses DESC LIMIT 20")
    user_licences = [
        {"type": r["Name"], "total": r["TotalLicenses"], "used": r["UsedLicenses"]}
        for r in lic_records if r["TotalLicenses"] > 0
    ]

    print("  → Fetching active users...")
    user_records = sf_query(instance_url, access_token,
        "SELECT Id, Name, Username, UserType, Profile.Name, LastLoginDate, IsActive "
        "FROM User WHERE IsActive=true ORDER BY LastLoginDate DESC NULLS LAST LIMIT 20")
    users = []
    for u in user_records:
        name       = u.get("Name", "")
        initials   = "".join(p[0].upper() for p in name.split()[:2]) if name else "?"
        last_login = (u.get("LastLoginDate") or "")[:10] or None
        profile    = (u.get("Profile") or {}).get("Name")
        login_cls  = "recent" if last_login and last_login >= "2026-09-01" else ("never" if not last_login else "stale")
        users.append({
            "initials":   initials,
            "name":       name,
            "username":   u.get("Username", ""),
            "userType":   u.get("UserType", "Standard"),
            "profile":    profile,
            "lastLogin":  last_login,
            "loginClass": login_cls,
        })

    print("  → Fetching recent deployments...")
    deploy_records = sf_query(instance_url, access_token,
        "SELECT Id, CreatedBy.Name, CheckOnly, NumberComponentsDeployed, NumberComponentsTotal, "
        "NumberComponentErrors, Status, StartDate, CompletedDate, StateDetail "
        "FROM DeployRequest ORDER BY StartDate DESC LIMIT 20")

    deployments = []
    for r in deploy_records:
        dep_id     = r["Id"]
        start_str  = r.get("StartDate", "") or ""
        end_str    = r.get("CompletedDate", "") or ""
        dur_sec    = 0
        if start_str and end_str:
            try:
                from datetime import datetime as _dt
                fmt = "%Y-%m-%dT%H:%M:%S.%f%z" if "." in start_str else "%Y-%m-%dT%H:%M:%S%z"
                s = _dt.fromisoformat(start_str.replace("Z", "+00:00"))
                e = _dt.fromisoformat(end_str.replace("Z", "+00:00"))
                dur_sec = max(0, int((e - s).total_seconds()))
            except Exception:
                pass

        # Fetch component details via checkDeployStatus REST endpoint
        components = []
        try:
            detail_url = (f"{instance_url}/services/data/{API_VERSION}/"
                          f"metadata/deployRequest/{dep_id}?includeDetails=true")
            req = urllib.request.Request(detail_url, headers={
                "Authorization": f"Bearer {access_token}",
                "Accept":        "application/json",
            })
            with urllib.request.urlopen(req, timeout=15) as resp:
                detail = json.loads(resp.read())
            details = (detail.get("deployResult") or {}).get("details") or {}
            successes = details.get("componentSuccesses") or []
            failures  = details.get("componentFailures")  or []
            # componentSuccesses/Failures may be a dict (single) or list
            if isinstance(successes, dict): successes = [successes]
            if isinstance(failures,  dict): failures  = [failures]
            for c in successes:
                name = c.get("fullName", "")
                ctype = c.get("componentType", "")
                if name and name != "package.xml":
                    components.append({"name": name, "type": ctype, "success": True})
            for c in failures:
                name = c.get("fullName", "")
                ctype = c.get("componentType", "")
                problem = c.get("problem", "")
                if name:
                    components.append({"name": name, "type": ctype, "success": False, "problem": problem})
        except Exception as ex:
            print(f"    ⚠ Could not fetch details for {dep_id}: {ex}")

        deployments.append({
            "id":                   dep_id,
            "deployedBy":           (r.get("CreatedBy") or {}).get("Name", "Unknown"),
            "checkOnly":            r.get("CheckOnly", False),
            "componentsDeployed":   r.get("NumberComponentsDeployed", 0),
            "componentsTotal":      r.get("NumberComponentsTotal", 0),
            "errors":               r.get("NumberComponentErrors", 0),
            "status":               r.get("Status", ""),
            "startDate":            start_str,
            "completedDate":        end_str,
            "durationSec":          dur_sec,
            "stateDetail":          r.get("StateDetail", "") or "",
            "components":           components,
        })
    print(f"  ✅ Fetched details for {len(deployments)} deployments")

    return {
        "org_id":         org_id,
        "org_name":       org_name,
        "limits":         limits,
        "metadata":       meta,
        "scheduled_jobs": scheduled_jobs,
        "user_licences":  user_licences,
        "users":          users,
        "deployments":    deployments,
    }

# ── Write LIVE_DATA into data.js ──────────────────────────────────────────────
def write_data_js(data, instance_url, fetched_at):
    path = "js/data.js"
    try:
        with open(path) as fh:
            content = fh.read()
    except FileNotFoundError:
        sys.exit(f"Cannot find {path}. Run from the dashboard root directory.")

    d = data
    limits_js      = json.dumps(d["limits"],         indent=4)
    meta_js        = json.dumps(d["metadata"],        indent=4)
    sched_js       = json.dumps(d["scheduled_jobs"],  indent=4)
    licences_js    = json.dumps(d["user_licences"],   indent=4)
    users_js       = json.dumps(d["users"],           indent=4)
    deployments_js = json.dumps(d["deployments"],     indent=4)

    new_block = f"""// ── Live SIT Sandbox data (fetched {fetched_at}) ────────────────────────────
const LIVE_DATA = {{
  org: {{
    name:        '{d["org_name"]}',
    instanceUrl: '{instance_url}',
    orgId:       '{d["org_id"]}',
    environment: 'SIT Sandbox',
    fetchedAt:   '{fetched_at}',
  }},

  /* Org limits */
  limits: {limits_js},

  /* Metadata counts */
  metadata: {meta_js},

  /* Scheduled jobs summary */
  scheduledJobs: {sched_js},

  /* User licences */
  userLicences: {licences_js},

  /* Active users */
  users: {users_js},

  /* Recent deployments */
  sfDeployments: {deployments_js}
}};"""

    # Find the start of the LIVE_DATA block (including optional comment line)
    comment_marker = '// ── Live SIT Sandbox data'
    const_marker   = 'const LIVE_DATA'
    start_idx = content.find(comment_marker)
    if start_idx == -1:
        start_idx = content.find(const_marker)

    if start_idx != -1:
        # Find the closing }; of LIVE_DATA by scanning for \n}; after the opening {
        open_brace = content.find('{', start_idx)
        # Walk forward counting braces to find the matching close
        depth = 0
        end_idx = open_brace
        for i, ch in enumerate(content[open_brace:], start=open_brace):
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    # consume the trailing ;
                    end_idx = i + 1
                    if end_idx < len(content) and content[end_idx] == ';':
                        end_idx += 1
                    break
        updated = content[:start_idx] + new_block + content[end_idx:]
        print(f"  Replaced LIVE_DATA block (chars {start_idx}–{end_idx})")
    else:
        print("  ⚠️  Could not find LIVE_DATA block — appending")
        updated = content + "\n\n" + new_block

    with open(path, "w") as fh:
        fh.write(updated)
    print(f"  ✅ LIVE_DATA written to {path}")

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--instance-url",   default=os.environ.get("SF_INSTANCE_URL", ""))
    ap.add_argument("--client-id",      default=os.environ.get("SF_CLIENT_ID", ""))
    ap.add_argument("--client-secret",  default=os.environ.get("SF_CLIENT_SECRET", ""))
    args = ap.parse_args()

    if not all([args.instance_url, args.client_id, args.client_secret]):
        sys.exit("Must provide --instance-url, --client-id, --client-secret "
                 "(or SF_INSTANCE_URL / SF_CLIENT_ID / SF_CLIENT_SECRET env vars)")

    instance_url = args.instance_url.rstrip("/")
    print(f"\nFetching Salesforce data: {instance_url}")

    print("  → Authenticating...")
    token = get_access_token(instance_url, args.client_id, args.client_secret)
    if not token:
        sys.exit("❌ Could not obtain Salesforce access token")

    data = fetch_all(instance_url, token)
    fetched_at = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    write_data_js(data, instance_url, fetched_at)
    print(f"\n✅ Done — Salesforce data written to js/data.js ({fetched_at})")

if __name__ == "__main__":
    main()
