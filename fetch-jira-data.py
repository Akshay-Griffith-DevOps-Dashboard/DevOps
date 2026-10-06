#!/usr/bin/env python3
"""
fetch-jira-data.py
──────────────────
Fetches Jira issues from the SOPS project and writes them into js/data.js
as a JIRA_DATA constant, ready for the QA tab.

Usage:
    python3 fetch-jira-data.py \
        --url  "https://griffith.atlassian.net" \
        --email "akshay.kumar@griffith.edu.au" \
        --token "YOUR_API_TOKEN" \
        --project "SOPS"

Environment variables (used by GitHub Actions):
    JIRA_BASE_URL, JIRA_EMAIL, JIRA_API_TOKEN, JIRA_PROJECT
"""
import argparse, base64, json, os, re, sys, urllib.request, urllib.error, urllib.parse
from datetime import datetime, timezone

# ── HTTP helper ──────────────────────────────────────────────────────────────
def jira(email, token, url):
    creds = base64.b64encode(f"{email}:{token}".encode()).decode()
    req = urllib.request.Request(url, headers={
        "Authorization": f"Basic {creds}",
        "Accept":        "application/json",
    })
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        print(f"  HTTP {e.code} for {url}: {body[:200]}")
        return {}
    except Exception as e:
        print(f"  Error fetching {url}: {e}")
        return {}

# ── Fetch all issues (paginated) ─────────────────────────────────────────────
def fetch_issues(base, email, token, project):
    issues = []
    start  = 0
    batch  = 100
    jql    = f"project = {project} ORDER BY updated DESC"

    while True:
        url = (f"{base}/rest/api/3/search"
               f"?jql={urllib.parse.quote(jql)}"
               f"&startAt={start}&maxResults={batch}"
               f"&fields=summary,status,issuetype,priority,assignee,"
               f"reporter,created,updated,labels,fixVersions,"
               f"customfield_10016,customfield_10014,comment")
        data = jira(email, token, url)
        batch_issues = data.get("issues", [])
        if not batch_issues:
            break
        issues.extend(batch_issues)
        total = data.get("total", 0)
        start += len(batch_issues)
        print(f"    fetched {start}/{total} issues...")
        if start >= total:
            break

    return issues

# ── Fetch project metadata (statuses, issue types) ───────────────────────────
def fetch_meta(base, email, token, project):
    url  = f"{base}/rest/api/3/project/{project}/statuses"
    data = jira(email, token, url)
    statuses = []
    types    = []
    for itype in (data if isinstance(data, list) else []):
        types.append(itype.get("name",""))
        for s in itype.get("statuses", []):
            statuses.append(s.get("name",""))
    return list(set(types)), list(set(statuses))

# ── Fetch sprints (if board exists) ─────────────────────────────────────────
def fetch_sprints(base, email, token, project):
    # Find board for project
    url   = f"{base}/rest/agile/1.0/board?projectKeyOrId={project}"
    data  = jira(email, token, url)
    boards = data.get("values", [])
    if not boards:
        return []
    board_id = boards[0]["id"]
    sprint_url = f"{base}/rest/agile/1.0/board/{board_id}/sprint?state=active,closed&maxResults=5"
    sdata = jira(email, token, sprint_url)
    sprints = []
    for s in sdata.get("values", []):
        sprints.append({
            "id":        s.get("id"),
            "name":      s.get("name",""),
            "state":     s.get("state",""),
            "startDate": (s.get("startDate","") or "")[:10],
            "endDate":   (s.get("endDate","")   or "")[:10],
            "goal":      s.get("goal",""),
        })
    return sprints

# ── Normalise raw issue ───────────────────────────────────────────────────────
def normalise(issue):
    f  = issue.get("fields", {})
    key = issue.get("key","")

    assignee = f.get("assignee") or {}
    reporter = f.get("reporter") or {}
    priority = f.get("priority") or {}
    status   = f.get("status")   or {}
    itype    = f.get("issuetype") or {}
    fix_vers = [v.get("name","") for v in (f.get("fixVersions") or [])]
    labels   = f.get("labels") or []

    # story points — common custom fields
    sp = f.get("customfield_10016") or f.get("customfield_10028") or None

    return {
        "key":         key,
        "summary":     (f.get("summary","") or "")[:120],
        "type":        itype.get("name",""),
        "status":      status.get("name",""),
        "statusCat":   (status.get("statusCategory") or {}).get("name",""),
        "priority":    priority.get("name",""),
        "assignee":    assignee.get("displayName","Unassigned"),
        "reporter":    reporter.get("displayName",""),
        "created":     (f.get("created","") or "")[:10],
        "updated":     (f.get("updated","") or "")[:10],
        "labels":      labels,
        "fixVersions": fix_vers,
        "storyPoints": sp,
    }

# ── Write JIRA_DATA into data.js ──────────────────────────────────────────────
def write_data_js(issues, sprints, meta_types, meta_statuses,
                  base_url, project, fetched_at):
    path = "js/data.js"
    try:
        with open(path) as fh:
            content = fh.read()
    except FileNotFoundError:
        sys.exit(f"Cannot find {path}. Run from the dashboard root directory.")

    new_block = f"""// ── Jira live data (fetched {fetched_at}) ────────────────────────────
const JIRA_DATA = {{
  project:   '{project}',
  baseUrl:   '{base_url}',
  fetchedAt: '{fetched_at}',

  sprints: {json.dumps(sprints, indent=4)},

  issueTypes: {json.dumps(sorted(meta_types), indent=4)},

  statuses: {json.dumps(sorted(meta_statuses), indent=4)},

  issues: {json.dumps(issues, indent=4)},
}};"""

    if "const JIRA_DATA" in content:
        content = re.sub(
            r'// ── Jira live data.*?^};',
            new_block,
            content, flags=re.DOTALL | re.MULTILINE
        )
    else:
        # Insert before LIVE_DATA or at top
        if "const LIVE_DATA" in content:
            content = content.replace("// ── Live SIT", new_block + "\n\n// ── Live SIT", 1)
        else:
            content = new_block + "\n\n" + content

    with open(path, "w") as fh:
        fh.write(content)
    print(f"  ✅ Written {len(issues)} issues to {path}")

# ── Main ─────────────────────────────────────────────────────────────────────
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url",     default=os.environ.get("JIRA_BASE_URL",""))
    ap.add_argument("--email",   default=os.environ.get("JIRA_EMAIL",""))
    ap.add_argument("--token",   default=os.environ.get("JIRA_API_TOKEN",""))
    ap.add_argument("--project", default=os.environ.get("JIRA_PROJECT","SOPS"))
    args = ap.parse_args()

    if not all([args.url, args.email, args.token]):
        sys.exit("Must provide --url, --email, --token (or JIRA_BASE_URL / JIRA_EMAIL / JIRA_API_TOKEN env vars)")

    base    = args.url.rstrip("/")
    project = args.project.upper()

    print(f"\nFetching Jira data: {base} / {project}")

    print("  → Fetching issues...")
    raw     = fetch_issues(base, args.email, args.token, project)
    issues  = [normalise(i) for i in raw]

    print("  → Fetching sprints...")
    sprints = fetch_sprints(base, args.email, args.token, project)

    print("  → Fetching project metadata...")
    meta_types, meta_statuses = fetch_meta(base, args.email, args.token, project)

    print(f"  Issues: {len(issues)}, Sprints: {len(sprints)}")

    fetched_at = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")
    write_data_js(issues, sprints, meta_types, meta_statuses,
                  base, project, fetched_at)

    print(f"\n✅ Done — {len(issues)} Jira issues written to js/data.js")

if __name__ == "__main__":
    main()
