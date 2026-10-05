/**
 * dashboard.js — UI controller for Griffith DevOps Dashboard
 *
 * Responsibilities:
 *   - Section navigation
 *   - Rendering mock data (falls back to MOCK_DATA when not connected to SF)
 *   - Rendering live Salesforce data when sfApi.isConnected()
 *   - Deployment table with filters
 *   - Azure pipelines table and bar chart
 *   - OAuth modal wiring
 *   - Clock + refresh
 */

(function () {
  'use strict';

  /* ── Helpers ──────────────────────────────────────── */
  function fmt(n) { return n != null ? n.toLocaleString() : '—'; }

  function pct(used, max) {
    if (!max) return 0;
    return Math.min(100, Math.round((used / max) * 100 * 10) / 10);
  }

  function fmtDuration(seconds) {
    if (seconds == null) return '—';
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }

  function timeAgo(date) {
    const diff = Date.now() - date.getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1)   return 'just now';
    if (mins < 60)  return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24)   return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  }

  function statusBadge(status) {
    const map = {
      Succeeded:  ['green', 'Success'],
      succeeded:  ['green', 'passed'],
      passed:     ['green', 'passed'],
      Failed:     ['red',   'Failed'],
      failed:     ['red',   'failed'],
      InProgress: ['amber', 'Running'],
      running:    ['amber', 'running'],
      queued:     ['muted', 'queued'],
    };
    const [cls, label] = map[status] || ['muted', status];
    return `<span class="badge ${cls}">${label}</span>`;
  }

  /* ── Data pulled date ─────────────────────────────── */
  const datePulledEl = document.getElementById('data-pulled-date');
  if (datePulledEl) {
    datePulledEl.textContent = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  /* ── Section navigation ───────────────────────────── */
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');
  const pageTitle = document.getElementById('page-title');

  const sectionTitles = {
    overview:          'Overview',
    'sf-health':       'Org Health',
    'sf-deployments':  'Deployments',
    'azure-pipelines': 'Pipelines',
  };

  function activateSection(id) {
    sections.forEach(s => s.classList.toggle('active', s.id === id));
    navItems.forEach(n => n.classList.toggle('active', n.dataset.section === id));
    if (pageTitle) pageTitle.textContent = sectionTitles[id] || id;
    history.replaceState(null, '', `#${id}`);
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      activateSection(item.dataset.section);
    });
  });

  // Panel "View all" / "data-goto" links
  document.querySelectorAll('[data-goto]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activateSection(link.dataset.goto);
    });
  });

  // Honour hash on load
  const hash = location.hash.slice(1);
  if (hash && document.getElementById(hash)) activateSection(hash);

  /* ── Clock ────────────────────────────────────────── */
  const clockEl = document.getElementById('topbar-time');
  function tick() {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  tick();
  setInterval(tick, 1000);

  /* ── Refresh button ───────────────────────────────── */
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', () => {
    refreshBtn.classList.add('spinning');
    loadDashboard().finally(() => {
      refreshBtn.classList.remove('spinning');
    });
  });

  /* ── OAuth modal ──────────────────────────────────── */
  const modal          = document.getElementById('oauth-modal');
  const connectBtn     = document.getElementById('connect-btn');
  const bannerBtn      = document.getElementById('auth-banner-btn');
  const modalClose     = document.getElementById('modal-close');
  const modalCancel    = document.getElementById('modal-cancel');
  const modalConnect   = document.getElementById('modal-connect');
  const redirectInput  = document.getElementById('sf-redirect-uri');

  // Auto-fill redirect URI with current origin
  redirectInput.value = `${location.origin}${location.pathname.replace(/\/?[^/]*$/, '/')  }callback.html`;

  function openModal() { modal.classList.remove('hidden'); }
  function closeModal() { modal.classList.add('hidden'); }

  connectBtn.addEventListener('click', openModal);
  if (bannerBtn) bannerBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modalCancel.addEventListener('click', closeModal);
  modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  modalConnect.addEventListener('click', async () => {
    const instanceUrl = document.getElementById('sf-instance-url').value.trim().replace(/\/$/, '');
    const clientId    = document.getElementById('sf-client-id').value.trim();
    const redirectUri = redirectInput.value.trim();

    if (!instanceUrl) { alert('Please enter your Salesforce instance URL.'); return; }
    if (!clientId)    { alert('Please enter your Connected App Client ID.'); return; }

    closeModal();

    try {
      const code = await sfApi.initiateOAuth(instanceUrl, clientId, redirectUri);
      await sfApi.exchangeCode(code);
      setConnected(true);
      await loadDashboard();
    } catch (err) {
      console.error('OAuth error:', err);
      alert(`Connection failed: ${err.message}`);
      setConnected(false);
    }
  });

  /* ── Connection state ─────────────────────────────── */
  const connIndicator = document.getElementById('connection-status');
  const connLabel     = connIndicator ? connIndicator.querySelector('.conn-label') : null;
  const authBanner    = document.getElementById('auth-banner');
  const lastRefreshEl = document.getElementById('last-refresh');

  function setConnected(connected, orgName) {
    if (connIndicator) connIndicator.className = `conn-indicator ${connected ? 'connected' : 'disconnected'}`;
    if (connLabel)     connLabel.textContent   = connected ? (orgName || 'Connected') : 'Not connected';
    if (authBanner)    authBanner.classList.toggle('hidden', connected);
    // Update data-pulled date
    const datePulledEl2 = document.getElementById('data-pulled-date');
    if (datePulledEl2 && connected) {
      datePulledEl2.textContent = new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
    }
    if (connected) {
      connectBtn.textContent = 'Disconnect';
      connectBtn.onclick = () => {
        sfApi.clearSession();
        setConnected(false);
        loadDashboard();
        connectBtn.textContent = 'Connect Salesforce';
        connectBtn.onclick = openModal;
      };
    }
  }

  // Restore session on page load
  if (sfApi.isConnected()) {
    const s = sfApi.getSession();
    setConnected(true, s.instanceUrl?.replace('https://', '').split('.')[0] + ' (Production)');
  }

  /* ── Deployment table ─────────────────────────────── */
  let allDeployments = [];

  function renderDeployments(rows) {
    const tbody = document.getElementById('dep-tbody');
    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-muted" style="padding:20px;text-align:center">No deployments found.</td></tr>';
      return;
    }
    tbody.innerHTML = rows.map(d => `
      <tr>
        <td class="mono">${d.component || d.fullName || '—'}</td>
        <td>${d.type || '—'}</td>
        <td class="mono">${d.deployedBy || d.createdByName || '—'}</td>
        <td>${d.env || 'Production'}</td>
        <td class="mono">${fmtDuration(d.durationSec)}</td>
        <td>${statusBadge(d.status)}</td>
        <td class="mono text-muted">${timeAgo(d.ts instanceof Date ? d.ts : new Date(d.ts))}</td>
      </tr>
    `).join('');
  }

  function applyDeployFilters() {
    const statusFilter = document.getElementById('dep-filter-status').value;
    const typeFilter   = document.getElementById('dep-filter-type').value;
    let filtered = allDeployments;
    if (statusFilter !== 'all') filtered = filtered.filter(d => d.status === statusFilter);
    if (typeFilter   !== 'all') filtered = filtered.filter(d => d.type   === typeFilter);
    renderDeployments(filtered);
  }

  document.getElementById('dep-filter-status').addEventListener('change', applyDeployFilters);
  document.getElementById('dep-filter-type').addEventListener('change', applyDeployFilters);

  /* ── Azure pipeline tables ────────────────────────── */
  function renderPipelines(runs) {
    const tbody = document.getElementById('az-tbody');
    tbody.innerHTML = runs.map(r => `
      <tr>
        <td class="mono">${r.name}</td>
        <td class="mono text-muted">${r.branch}</td>
        <td class="mono">${r.triggeredBy}</td>
        <td class="mono">${r.status === 'running' ? '<span class="amber-text">running…</span>' : fmtDuration(r.durationSec)}</td>
        <td>${statusBadge(r.status)}</td>
        <td class="mono text-muted">${timeAgo(r.started instanceof Date ? r.started : new Date(r.started))}</td>
      </tr>
    `).join('');
  }

  function renderPipelinePassRates(rates) {
    const container = document.getElementById('az-bar-chart');
    container.innerHTML = rates.map(r => {
      const cls = r.pct >= 90 ? 'high' : r.pct >= 70 ? 'medium' : 'low';
      return `
        <div class="bar-chart-item">
          <span class="bar-chart-name" title="${r.name}">${r.name}</span>
          <div class="bar-chart-bar"><div class="bar-chart-fill ${cls}" style="width:${r.pct}%"></div></div>
          <span class="bar-chart-pct">${r.pct}%</span>
        </div>
      `;
    }).join('');
  }

  function renderAzureFailures(failures) {
    const tbody = document.getElementById('az-failures-tbody');
    tbody.innerHTML = failures.map(f => `
      <tr>
        <td class="mono">${f.pipeline}</td>
        <td class="text-muted" style="font-size:11px">${f.reason}</td>
        <td class="mono text-muted">${f.when}</td>
      </tr>
    `).join('');
  }

  /* ── Live Salesforce data rendering ──────────────── */
  function renderLiveOrgHealth(data) {
    const { limits } = data;
    if (!limits) return;

    const apiReq = limits.DailyApiRequests;
    if (apiReq) {
      const used = apiReq.Max - apiReq.Remaining;
      const usedPct = pct(used, apiReq.Max);
      document.getElementById('ov-api-used').textContent   = fmt(used);
      document.getElementById('ov-api-limit').textContent  = fmt(apiReq.Max);
      document.getElementById('ov-api-bar').style.width    = usedPct + '%';
      document.getElementById('ov-api-bar').className      = `stat-bar-fill ${usedPct > 80 ? 'red' : usedPct > 60 ? 'amber' : 'green'}`;
      document.getElementById('sh-api-pct').textContent    = usedPct + '%';
      document.getElementById('sh-api-detail').textContent = `${fmt(used)} / ${fmt(apiReq.Max)} used`;
      document.getElementById('sh-api-bar').style.width    = usedPct + '%';
    }

    // Governor table — rebuild from live limits
    const govTbody = document.querySelector('#sh-governor-table tbody');
    const limitRows = [
      ['Daily API Requests',            'DailyApiRequests'],
      ['Daily Bulk API Requests',       'DailyBulkApiRequests'],
      ['Daily Streaming API Events',    'DailyStreamingApiEvents'],
      ['Daily Async Apex Executions',   'DailyAsyncApexExecutions'],
      ['Concurrent Long-Running Apex',  'ConcurrentLongRunningApex'],
    ];
    govTbody.innerHTML = limitRows.map(([label, key]) => {
      const lim = limits[key];
      if (!lim) return '';
      const used    = lim.Max - lim.Remaining;
      const usedPct = pct(used, lim.Max);
      const status  = usedPct > 80 ? 'red' : usedPct > 60 ? 'amber' : 'green';
      return `
        <tr>
          <td>${label}</td>
          <td class="mono">${fmt(lim.Max)}</td>
          <td class="mono">${fmt(lim.Remaining)}</td>
          <td class="mono">${usedPct}%</td>
          <td>${statusBadge(status === 'green' ? 'Succeeded' : status === 'amber' ? 'InProgress' : 'Failed')
               .replace('>Success<', '>OK<').replace('>Running<', '>Watch<').replace('>Failed<', '>High<')}</td>
        </tr>
      `;
    }).join('');

    document.getElementById('sh-governor-time').textContent = `Last checked: ${new Date().toLocaleTimeString()}`;
  }

  function renderLiveDeployments(data) {
    if (!data?.records) return;
    const mapped = data.records.map(r => ({
      component:   r.Id,
      type:        r.CheckOnly ? 'Validate' : 'Deploy',
      deployedBy:  r.CreatedBy?.Name || '—',
      env:         'Production',
      durationSec: r.CompletedDate && r.StartDate
        ? Math.round((new Date(r.CompletedDate) - new Date(r.StartDate)) / 1000)
        : null,
      status:      r.Status,
      ts:          new Date(r.StartDate),
    }));
    allDeployments = mapped;
    applyDeployFilters();
  }

  /* ── Main load function ───────────────────────────── */
  async function loadDashboard() {
    // Always render mock/sample data first for Azure (no live API yet)
    renderPipelines(MOCK_DATA.azurePipelines);
    renderPipelinePassRates(computePipelinePassRates(MOCK_DATA.azurePipelines));
    renderAzureFailures(MOCK_DATA.azureFailures);

    // Stats — Azure
    const runs   = MOCK_DATA.azurePipelines;
    const passed = runs.filter(r => r.status === 'succeeded').length;
    document.getElementById('az-total-runs').textContent = runs.length;
    document.getElementById('az-pass-rate').textContent  = Math.round((passed/runs.length)*100) + '%';
    document.getElementById('az-running').textContent    = runs.filter(r => r.status === 'running').length;
    const durations = runs.filter(r => r.durationSec).map(r => r.durationSec);
    const avgDur = durations.length ? Math.round(durations.reduce((a,b) => a+b, 0) / durations.length) : 0;
    document.getElementById('az-avg-dur').textContent = fmtDuration(avgDur);

    if (sfApi.isConnected()) {
      try {
        const healthData = await sfApi.fetchOrgHealth();
        renderLiveOrgHealth(healthData);
        if (healthData.deployments) renderLiveDeployments(healthData.deployments);
        lastRefreshEl.textContent = `Updated ${new Date().toLocaleTimeString()}`;
      } catch (err) {
        console.warn('Live data fetch failed, using mock data:', err);
        fallbackToMockSf();
      }
    } else {
      fallbackToMockSf();
    }
  }

  function fallbackToMockSf() {
    allDeployments = MOCK_DATA.sfDeployments;
    applyDeployFilters();
    lastRefreshEl.textContent = `Mock data · ${new Date().toLocaleTimeString()}`;

    // Overview mini deploy table already has static HTML
    // Deployment stats
    const deps = MOCK_DATA.sfDeployments;
    const succeeded = deps.filter(d => d.status === 'Succeeded').length;
    const failed    = deps.filter(d => d.status === 'Failed').length;
    document.getElementById('dep-total').textContent        = deps.length;
    document.getElementById('dep-success-rate').textContent = Math.round((succeeded/deps.length)*100) + '%';
    document.getElementById('dep-failed').textContent       = failed;
    const depDurs = deps.filter(d => d.durationSec).map(d => d.durationSec);
    document.getElementById('dep-avg-time').textContent     = fmtDuration(
      depDurs.length ? Math.round(depDurs.reduce((a,b)=>a+b,0)/depDurs.length) : 0
    );
  }

  /* ── Init ─────────────────────────────────────────── */
  loadDashboard();

  // Auto-refresh every 5 minutes
  setInterval(() => {
    if (sfApi.isConnected()) {
      loadDashboard();
    }
  }, 5 * 60 * 1000);

})();
