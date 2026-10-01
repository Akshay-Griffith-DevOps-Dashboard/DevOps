# Griffith DevOps Dashboard

A dark-themed DevOps monitoring dashboard for **Griffith University's Salesforce org** and **Azure DevOps pipelines**, hosted on GitHub Pages.

## Live URL

`https://akshay-griffith-devops-dashboard.github.io/DevOps/`

---

## Features

- **Salesforce Org Health** — API limits, governor limits, storage, user licences
- **Salesforce Deployments** — deployment history with status, type, and duration filters
- **Azure DevOps Pipelines** — pipeline run history, pass rates, recent failures
- **OAuth 2.0** — connects to your Salesforce org via a Connected App (no passwords stored)
- **Auto-refresh** — live data refreshes every 5 minutes when connected

---

## Setup

### 1. Enable GitHub Pages

1. Go to **Settings → Pages** in this repository
2. Set **Source** to `GitHub Actions`
3. Push to `main` — the workflow auto-deploys on every push

### 2. Create a Salesforce Connected App

1. In Salesforce Setup, go to **App Manager → New Connected App**
2. Enable **OAuth Settings**
3. Set **Callback URL** to:
   ```
   https://akshay-griffith-devops-dashboard.github.io/DevOps/callback.html
   ```
4. Add OAuth scopes: `api`, `refresh_token`, `offline_access`
5. Save and copy the **Consumer Key** (Client ID)

### 3. Connect the Dashboard

1. Open the live dashboard
2. Click **Connect Salesforce** in the sidebar
3. Enter your org URL (e.g. `https://griffith.my.salesforce.com`) and Consumer Key
4. Authorise in the popup

> **Note on client-side OAuth:** Salesforce's token exchange endpoint requires CORS to be enabled. If your org blocks CORS on the token endpoint, deploy the included `azure-function/token-proxy/` as a lightweight middleman (see that folder's README).

---

## Azure DevOps Integration

Azure pipeline data currently uses mock/sample data. To wire up live Azure DevOps:

1. Generate a Personal Access Token (PAT) in Azure DevOps with **Read** scope on **Build**
2. Add `js/azure-api.js` (coming in v2) with your organisation and project name
3. Calls go to: `https://dev.azure.com/{org}/{project}/_apis/build/builds`

> Azure DevOps REST API does not support CORS for browser-based calls without a proxy. An Azure Function token proxy for this is planned.

---

## Project Structure

```
.
├── index.html                  # Main dashboard
├── callback.html               # Salesforce OAuth callback
├── css/
│   └── style.css               # All styles
├── js/
│   ├── data.js                 # Mock/sample data
│   ├── sf-api.js               # Salesforce OAuth + REST API module
│   └── dashboard.js            # UI controller
└── .github/
    └── workflows/
        └── deploy.yml          # GitHub Pages deploy workflow
```

---

## Development

No build step required — plain HTML/CSS/JS. Open `index.html` directly in a browser, or use a local server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

---

## Security Notes

- Access tokens are stored in **`sessionStorage`** only — they are cleared when the browser tab closes
- No credentials are ever committed to this repository
- The Connected App Consumer Key is entered at runtime by the user
