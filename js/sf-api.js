/**
 * sf-api.js — Salesforce Connected App OAuth 2.0 + REST API
 *
 * Flow: OAuth 2.0 Web Server Flow
 *   1. User clicks "Connect Salesforce" → opens Salesforce login in popup
 *   2. Salesforce redirects to callback.html with ?code=...
 *   3. callback.html posts the code back to opener via postMessage
 *   4. sfApi.exchangeCode() swaps the code for an access token
 *   5. Token stored in sessionStorage; subsequent calls use Bearer token
 *
 * SETUP (GitHub Pages):
 *   - Create a Salesforce Connected App with OAuth enabled
 *   - Set Callback URL to: https://<your-github-username>.github.io/<repo-name>/callback.html
 *   - Enable scopes: api, refresh_token, offline_access
 *   - Copy Consumer Key (Client ID) into the dashboard connect form
 */

const sfApi = (() => {

  const SESSION_KEY = 'gu_sf_session';

  /* ── Session helpers ──────────────────────────────── */
  function saveSession(data) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  }

  function loadSession() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY));
    } catch { return null; }
  }

  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function isConnected() {
    const s = loadSession();
    return !!(s && s.accessToken);
  }

  function getSession() {
    return loadSession();
  }

  /* ── OAuth: initiate flow ─────────────────────────── */
  function initiateOAuth(instanceUrl, clientId, redirectUri) {
    // Store params so callback.html can read them
    sessionStorage.setItem('gu_sf_oauth_params', JSON.stringify({ instanceUrl, clientId, redirectUri }));

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: 'api refresh_token offline_access',
      prompt: 'login',
    });

    const authUrl = `${instanceUrl}/services/oauth2/authorize?${params.toString()}`;

    // Open OAuth popup
    const popup = window.open(authUrl, 'sf_oauth', 'width=600,height=700,scrollbars=yes');

    return new Promise((resolve, reject) => {
      const handler = (event) => {
        if (event.data && event.data.type === 'SF_OAUTH_CODE') {
          window.removeEventListener('message', handler);
          if (popup) popup.close();
          resolve(event.data.code);
        }
        if (event.data && event.data.type === 'SF_OAUTH_ERROR') {
          window.removeEventListener('message', handler);
          if (popup) popup.close();
          reject(new Error(event.data.error));
        }
      };
      window.addEventListener('message', handler);

      // Timeout after 5 minutes
      setTimeout(() => {
        window.removeEventListener('message', handler);
        reject(new Error('OAuth flow timed out. Please try again.'));
      }, 5 * 60 * 1000);
    });
  }

  /**
   * Exchange authorisation code for access token.
   *
   * NOTE: Salesforce's token endpoint requires a client_secret for the
   * Web Server flow. Since this dashboard runs client-side only on GitHub
   * Pages, we use a proxy-less approach:
   *
   * Option A (recommended for production): Route through a lightweight
   *   backend (Cloudflare Worker, Azure Function, or Heroku dyno) that
   *   holds the client_secret and exchanges the code.
   *
   * Option B (development/internal use only): Enable "Relax IP restrictions"
   *   and use a Named Credential or direct CORS-enabled endpoint.
   *
   * For this dashboard we attempt a direct exchange. If your org does not
   * allow CORS on the token endpoint, deploy the included azure-function/
   * token-proxy to handle the exchange server-side.
   */
  async function exchangeCode(code) {
    const params = JSON.parse(sessionStorage.getItem('gu_sf_oauth_params') || '{}');
    const { instanceUrl, clientId, redirectUri } = params;

    if (!instanceUrl || !clientId) throw new Error('Missing OAuth parameters');

    // For pure client-side: use PKCE or an org that allows the implicit grant.
    // Here we attempt the token exchange and surface a useful error if it fails.
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      client_id: clientId,
      redirect_uri: redirectUri,
    });

    const res = await fetch(`${instanceUrl}/services/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error_description || `Token exchange failed: ${res.status}`);
    }

    const data = await res.json();
    saveSession({
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      instanceUrl: data.instance_url || instanceUrl,
      orgId: data.id?.split('/').slice(-2, -1)[0],
      issuedAt: data.issued_at,
    });

    return data;
  }

  /* ── API request helper ───────────────────────────── */
  async function request(path) {
    const session = loadSession();
    if (!session?.accessToken) throw new Error('Not authenticated');

    const res = await fetch(`${session.instanceUrl}${path}`, {
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (res.status === 401) {
      clearSession();
      throw new Error('Session expired. Please reconnect.');
    }

    if (!res.ok) throw new Error(`Salesforce API error: ${res.status}`);
    return res.json();
  }

  /* ── Fetch org limits ─────────────────────────────── */
  async function fetchOrgLimits() {
    return request('/services/data/v60.0/limits');
  }

  /* ── Fetch recent deployments ─────────────────────── */
  async function fetchDeployments() {
    // Query Tooling API for recent DeployRequest records
    const soql = encodeURIComponent(
      `SELECT Id, Status, StartDate, CompletedDate, CreatedBy.Name,
              CheckOnly, NumberComponentsDeployed, NumberComponentErrors,
              ErrorMessage
       FROM DeployRequest
       ORDER BY StartDate DESC
       LIMIT 50`
    );
    return request(`/services/data/v60.0/tooling/query?q=${soql}`);
  }

  /**
   * Fetch active users in the last 30 days via UserLogin sobject
   */
  async function fetchActiveUsers() {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 3600 * 1000)
      .toISOString().split('.')[0] + 'Z';
    const soql = encodeURIComponent(
      `SELECT COUNT(Id) activeCount
       FROM User
       WHERE LastLoginDate >= ${thirtyDaysAgo} AND IsActive = true`
    );
    return request(`/services/data/v60.0/query?q=${soql}`);
  }

  /* ── Fetch user licence info ──────────────────────── */
  async function fetchUserLicences() {
    return request('/services/data/v60.0/query?q=' +
      encodeURIComponent(
        'SELECT Name, TotalLicenses, UsedLicenses FROM UserLicense ORDER BY Name'
      )
    );
  }

  /* ── Full health pull ─────────────────────────────── */
  async function fetchOrgHealth() {
    const [limits, deployments, activeUsers, licences] = await Promise.all([
      fetchOrgLimits(),
      fetchDeployments().catch(() => null),
      fetchActiveUsers().catch(() => null),
      fetchUserLicences().catch(() => null),
    ]);

    return { limits, deployments, activeUsers, licences };
  }

  /* ── Public API ───────────────────────────────────── */
  return {
    isConnected,
    getSession,
    clearSession,
    initiateOAuth,
    exchangeCode,
    fetchOrgHealth,
    fetchOrgLimits,
    fetchDeployments,
    fetchActiveUsers,
    fetchUserLicences,
  };
})();
