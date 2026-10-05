#!/bin/bash
# ============================================================
# fetch-azure.sh  —  Fetch Azure DevOps Branch + PR data
# Run this locally (not in CI) to refresh data.js with live data
# Usage:  bash fetch-azure.sh <ORG> <PROJECT> <PAT>
# Example: bash fetch-azure.sh griffith-university Salesforce-CRM "YOUR_PAT"
# ============================================================
set -e

ORG="${1:?Usage: bash fetch-azure.sh <ORG> <PROJECT> <PAT>}"
PROJECT="${2:?Usage: bash fetch-azure.sh <ORG> <PROJECT> <PAT>}"
PAT="${3:?Usage: bash fetch-azure.sh <ORG> <PROJECT> <PAT>}"

B64=$(printf ":%s" "$PAT" | base64)
AUTH="Authorization: Basic $B64"
BASE="https://dev.azure.com/${ORG}/${PROJECT}/_apis"
DATE=$(date +%Y-%m-%d)

echo "Fetching from: $BASE"
echo ""

# ── Repositories ─────────────────────────────────────────────
echo "→ Repos..."
REPOS=$(curl -sf -H "$AUTH" "${BASE}/git/repositories?api-version=7.1" | python3 -c "
import json,sys
data=json.load(sys.stdin)
repos=data.get('value',[])
print(json.dumps(repos))
")
echo "  Found $(echo "$REPOS" | python3 -c "import json,sys; print(len(json.load(sys.stdin)))" 2>/dev/null) repos"

# ── Branches (all repos) ─────────────────────────────────────
echo "→ Branches..."
BRANCHES=$(echo "$REPOS" | python3 -c "
import json,sys,subprocess,urllib.parse
repos=json.load(sys.stdin)
all_branches=[]
for repo in repos:
    rid=repo['id']
    rname=repo['name']
    url=f'https://dev.azure.com/${ORG}/${PROJECT}/_apis/git/repositories/{rid}/stats/branches?api-version=7.1'
    result=subprocess.run(['curl','-sf','-H','$AUTH',url],capture_output=True,text=True)
    try:
        data=json.loads(result.stdout)
        for b in data.get('value',[]):
            all_branches.append({
                'repo': rname,
                'name': b.get('name',''),
                'aheadCount': b.get('aheadCount',0),
                'behindCount': b.get('behindCount',0),
                'isBaseVersion': b.get('isBaseVersion',False),
                'commit': b.get('commit',{}).get('commitId','')[:8],
                'author': b.get('commit',{}).get('author',{}).get('name',''),
                'date': b.get('commit',{}).get('author',{}).get('date','')[:10],
                'comment': b.get('commit',{}).get('comment','')[:80],
            })
    except: pass
print(json.dumps(all_branches))
" 2>/dev/null)
echo "  Found $(echo "$BRANCHES" | python3 -c "import json,sys; print(len(json.load(sys.stdin)))" 2>/dev/null) branches"

# ── Pull Requests ─────────────────────────────────────────────
echo "→ Pull Requests..."
PRS=$(curl -sf -H "$AUTH" \
  "${BASE}/git/pullrequests?searchCriteria.status=all&\$top=50&api-version=7.1" \
  | python3 -c "
import json,sys
data=json.load(sys.stdin)
prs=[]
for pr in data.get('value',[]):
    prs.append({
        'id': pr.get('pullRequestId'),
        'title': pr.get('title',''),
        'status': pr.get('status',''),
        'repo': pr.get('repository',{}).get('name',''),
        'sourceBranch': pr.get('sourceRefName','').replace('refs/heads/',''),
        'targetBranch': pr.get('targetRefName','').replace('refs/heads/',''),
        'createdBy': pr.get('createdBy',{}).get('displayName',''),
        'createdDate': pr.get('creationDate','')[:10],
        'closedDate': pr.get('closedDate','')[:10] if pr.get('closedDate') else None,
        'reviewers': [r.get('displayName','') for r in pr.get('reviewers',[])],
        'isDraft': pr.get('isDraft',False),
        'mergeStatus': pr.get('mergeStatus',''),
        'voteStatus': 'approved' if all(r.get('vote',0)>=10 for r in pr.get('reviewers',[]) if r.get('isRequired',False)) else 'pending',
    })
print(json.dumps(prs))
")
echo "  Found $(echo "$PRS" | python3 -c "import json,sys; print(len(json.load(sys.stdin)))" 2>/dev/null) pull requests"

# ── Write data snippet ────────────────────────────────────────
echo ""
echo "→ Writing azure-data-snippet.js ..."
python3 << PYEOF
import json

repos_raw = '''$REPOS'''
branches_raw = '''$BRANCHES'''
prs_raw = '''$PRS'''

try:
    repos = json.loads(repos_raw)
    branches = json.loads(branches_raw)
    prs = json.loads(prs_raw)
except Exception as e:
    print(f"JSON parse error: {e}")
    exit(1)

snippet = f"""
  // ── Azure DevOps — fetched {date_val} ──────────────────────
  azureRepos: {json.dumps([{{'id':r['id'],'name':r['name'],'defaultBranch':r.get('defaultBranch','').replace('refs/heads/',''),'remoteUrl':r.get('remoteUrl','')}} for r in repos], indent=4)},

  azureBranches: {json.dumps(branches, indent=4)},

  azurePullRequests: {json.dumps(prs, indent=4)},
"""

with open('azure-data-snippet.js', 'w') as f:
    f.write(snippet)

print(f"  Repos:    {len(repos)}")
print(f"  Branches: {len(branches)}")
print(f"  PRs:      {len(prs)}")
print("")
print("✅ Done! Paste the contents of azure-data-snippet.js into LIVE_DATA in data.js")
PYEOF
date_val="$DATE"
