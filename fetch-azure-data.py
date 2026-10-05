#!/usr/bin/env python3
"""
fetch-azure-data.py
───────────────────
Run this locally to pull Azure DevOps Branches + Pull Requests
and write the result into js/data.js (AZURE_DATA section).

Usage:
    python3 fetch-azure-data.py --pat "YOUR_PAT" --org "your-org" --project "your-project"

Or with auto-discovery (finds org/project from PAT):
    python3 fetch-azure-data.py --pat "YOUR_PAT"
"""
import argparse, json, sys, base64, urllib.request, urllib.error
from datetime import datetime, timezone

def az(pat, url):
    b64 = base64.b64encode(f":{pat}".encode()).decode()
    req = urllib.request.Request(url, headers={
        "Authorization": f"Basic {b64}",
        "Content-Type": "application/json",
    })
    try:
        with urllib.request.urlopen(req, timeout=15) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        print(f"  HTTP {e.code} for {url}")
        return {}

def discover(pat):
    """Auto-discover org and project names from the PAT."""
    data = az(pat, "https://app.vssps.visualstudio.com/_apis/accounts?api-version=7.1")
    accounts = data.get("value", [])
    if not accounts:
        sys.exit("Could not discover accounts. Check your PAT has Account (read) scope.")
    org = accounts[0]["accountName"]
    print(f"  Found org: {org}")
    data2 = az(pat, f"https://dev.azure.com/{org}/_apis/projects?api-version=7.1")
    projects = data2.get("value", [])
    if not projects:
        sys.exit("No projects found.")
    project = projects[0]["name"]
    print(f"  Found project: {project}")
    return org, project

def fetch_all(pat, org, project):
    base = f"https://dev.azure.com/{org}/{project}/_apis"

    # Repos
    print("  → Fetching repos...")
    repos_raw = az(pat, f"{base}/git/repositories?api-version=7.1").get("value", [])
    repos = [{"id": r["id"], "name": r["name"],
               "defaultBranch": r.get("defaultBranch","").replace("refs/heads/",""),
               "remoteUrl": r.get("remoteUrl","")} for r in repos_raw]

    # Branches (per repo)
    print("  → Fetching branches...")
    branches = []
    for repo in repos_raw:
        rid, rname = repo["id"], repo["name"]
        data = az(pat, f"{base}/git/repositories/{rid}/stats/branches?api-version=7.1")
        for b in data.get("value", []):
            commit = b.get("commit", {})
            branches.append({
                "repo":         rname,
                "name":         b.get("name", ""),
                "isDefault":    b.get("isBaseVersion", False),
                "aheadCount":   b.get("aheadCount", 0),
                "behindCount":  b.get("behindCount", 0),
                "commitId":     commit.get("commitId","")[:8],
                "author":       commit.get("author",{}).get("name",""),
                "date":         (commit.get("author",{}).get("date","") or "")[:10],
                "comment":      (commit.get("comment","") or "")[:80],
            })

    # Pull Requests (all statuses, last 50)
    print("  → Fetching pull requests...")
    prs_raw = az(pat,
        f"{base}/git/pullrequests?searchCriteria.status=all&$top=50&api-version=7.1"
    ).get("value", [])
    prs = []
    for pr in prs_raw:
        reviewers = pr.get("reviewers", [])
        required  = [r for r in reviewers if r.get("isRequired")]
        approved  = all(r.get("vote", 0) >= 10 for r in required) if required else False
        prs.append({
            "id":           pr.get("pullRequestId"),
            "title":        pr.get("title",""),
            "status":       pr.get("status",""),
            "repo":         pr.get("repository",{}).get("name",""),
            "sourceBranch": pr.get("sourceRefName","").replace("refs/heads/",""),
            "targetBranch": pr.get("targetRefName","").replace("refs/heads/",""),
            "createdBy":    pr.get("createdBy",{}).get("displayName",""),
            "createdDate":  (pr.get("creationDate","") or "")[:10],
            "closedDate":   (pr.get("closedDate","") or "")[:10] or None,
            "reviewers":    [r.get("displayName","") for r in reviewers],
            "isDraft":      pr.get("isDraft", False),
            "mergeStatus":  pr.get("mergeStatus",""),
            "approved":     approved,
        })

    return repos, branches, prs

def write_data_js(repos, branches, prs, org, project, fetched_at):
    """Read data.js, replace the AZURE_DATA block, write back."""
    path = "js/data.js"
    try:
        with open(path) as f:
            content = f.read()
    except FileNotFoundError:
        sys.exit(f"Cannot find {path}. Run this script from the dashboard root directory.")

    new_block = f"""// ── Azure DevOps live data (fetched {fetched_at}) ─────────────────────
const AZURE_DATA = {{
  org:     '{org}',
  project: '{project}',
  fetchedAt: '{fetched_at}',

  repos: {json.dumps(repos, indent=4)},

  branches: {json.dumps(branches, indent=4)},

  pullRequests: {json.dumps(prs, indent=4)},
}};"""

    # Replace existing AZURE_DATA block or append before MOCK_DATA
    if "const AZURE_DATA" in content:
        import re
        content = re.sub(
            r'// ── Azure DevOps live data.*?^};',
            new_block,
            content, flags=re.DOTALL | re.MULTILINE
        )
    else:
        # Insert before MOCK_DATA or at end
        if "const MOCK_DATA" in content:
            content = content.replace("const MOCK_DATA", new_block + "\n\nconst MOCK_DATA")
        else:
            content += "\n\n" + new_block

    with open(path, "w") as f:
        f.write(content)
    print(f"  ✅ Written to {path}")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--pat",     required=True)
    ap.add_argument("--org",     default=None)
    ap.add_argument("--project", default=None)
    args = ap.parse_args()

    pat = args.pat
    if args.org and args.project:
        org, project = args.org, args.project
    else:
        print("Auto-discovering org and project...")
        org, project = discover(pat)

    print(f"\nFetching Azure DevOps data: {org} / {project}")
    repos, branches, prs = fetch_all(pat, org, project)
    print(f"  Repos: {len(repos)}, Branches: {len(branches)}, PRs: {len(prs)}")

    fetched_at = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    write_data_js(repos, branches, prs, org, project, fetched_at)
    print(f"\n✅ Done! {len(branches)} branches, {len(prs)} PRs written to js/data.js")
    print("   Now run: git add js/data.js && git commit -m 'chore: refresh Azure data' && git push")

if __name__ == "__main__":
    main()
