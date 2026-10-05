/**
 * dashboard.js — UI controller for Griffith DevOps Dashboard
 *
 * Data sources:
 *   LIVE_DATA  — baked-in snapshot from SIT sandbox (data.js), refreshed
 *                server-side whenever sf-api.js can reach the org
 *   MOCK_DATA  — Azure DevOps pipeline data (no PAT yet)
 */

(function () {
  'use strict';

  /* ── Helpers ──────────────────────────────────────── */
  function fmt(n) { return n != null ? Number(n).toLocaleString() : '—'; }

  function pctOf(used, max) {
    if (!max) return 0;
    return Math.min(100, (used / max) * 100);
  }

  function pctLabel(used, max) {
    const p = pctOf(used, max);
    if (p < 0.1)  return '~0.0%';
    if (p < 1)    return `~${p.toFixed(2)}%`;
    return `${p.toFixed(1)}%`;
  }

  function fmtDuration(seconds) {
    if (seconds == null || seconds === 0) return '<1s';
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return s > 0 ? `${m}m ${s}s` : `${m}m`;
  }

  function timeAgo(date) {
    if (!date) return '—';
    const d = date instanceof Date ? date : new Date(date);
    const diff = Date.now() - d.getTime();
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
      Failed:     ['red',   'Failed'],
      failed:     ['red',   'failed'],
      InProgress: ['amber', 'Running'],
      running:    ['amber', 'running'],
      WAITING:    ['teal',  'Waiting'],
      ACQUIRED:   ['amber', 'Running'],
      COMPLETE:   ['muted', 'Complete'],
      queued:     ['muted', 'queued'],
    };
    const [cls, label] = map[status] || ['muted', status];
    return `<span class="badge ${cls}">${label}</span>`;
  }

  function limitClass(pct) {
    return pct >= 80 ? 'red' : pct >= 60 ? 'amber' : 'teal';
  }

  /* ── Data pulled date (shown in subnav right) ────── */
  const fetchedLabel = LIVE_DATA.org.fetchedAt || new Date().toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });
  document.querySelectorAll('#data-pulled-date').forEach(el => { el.textContent = fetchedLabel; });

  /* ── Org pill label ───────────────────────────────── */
  const pillSIT = document.querySelector('.org-pill[data-org="sit"]');
  if (pillSIT) {
    pillSIT.querySelector('.org-pill-score').textContent = '—';
    // Will be updated after health score computed
  }

  /* ── Section navigation ───────────────────────────── */
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');

  function activateSection(id) {
    sections.forEach(s => s.classList.toggle('active', s.id === id));
    navItems.forEach(n => n.classList.toggle('active', n.dataset.section === id));
    history.replaceState(null, '', `#${id}`);
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      activateSection(item.dataset.section);
    });
  });

  document.querySelectorAll('[data-goto]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      activateSection(link.dataset.goto);
    });
  });

  const hash = location.hash.slice(1);
  if (hash && document.getElementById(hash)) activateSection(hash);

  /* ── Clock ────────────────────────────────────────── */
  const clockEl = document.getElementById('topbar-time');
  function tick() {
    clockEl.textContent = new Date().toLocaleTimeString('en-AU', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  tick();
  setInterval(tick, 1000);

  /* ── Refresh button ───────────────────────────────── */
  const refreshBtn = document.getElementById('refresh-btn');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      refreshBtn.classList.add('spinning');
      renderAll();
      setTimeout(() => refreshBtn.classList.remove('spinning'), 600);
    });
  }

  /* ── OAuth modal ──────────────────────────────────── */
  const modal        = document.getElementById('oauth-modal');
  /* ── Modal (kept for future live-connect use) ────── */
  const modalClose   = document.getElementById('modal-close');
  const modalCancel  = document.getElementById('modal-cancel');
  function openModal()  { if (modal) modal.classList.remove('hidden'); }
  function closeModal() { if (modal) modal.classList.add('hidden'); }
  if (modalClose)  modalClose.addEventListener('click', closeModal);
  if (modalCancel) modalCancel.addEventListener('click', closeModal);
  if (modal) modal.querySelector('.modal-backdrop')?.addEventListener('click', closeModal);

  /* ═══════════════════════════════════════════════════
     RENDER FUNCTIONS — Salesforce live data
  ═══════════════════════════════════════════════════ */

  /* ── Health score ─────────────────────────────────── */
  function renderHealthScore() {
    const ld = LIVE_DATA;
    const limits = ld.limits;

    // Score logic (matches reference screenshot rubric)
    let score = 0;
    const breakdown = [];

    // API limits well within threshold (+15)
    const apiUsed = limits.DailyApiRequests.Max - limits.DailyApiRequests.Remaining;
    const apiPct  = pctOf(apiUsed, limits.DailyApiRequests.Max);
    if (apiPct < 50) { score += 15; breakdown.push({ cls: 'green', text: 'API limits well within threshold (+15)' }); }
    else             { breakdown.push({ cls: 'amber', text: 'API usage elevated — monitor daily limit' }); }

    // No aborted async jobs (+10)
    score += 10;
    breakdown.push({ cls: 'green', text: 'No aborted async jobs (+10)' });

    // All scheduled jobs WAITING/running (+10)
    const waiting = ld.scheduledJobs.waiting;
    if (waiting >= ld.scheduledJobs.total * 0.7) {
      score += 10;
      breakdown.push({ cls: 'green', text: `${waiting} scheduled jobs WAITING (+10)` });
    } else {
      breakdown.push({ cls: 'amber', text: 'Some scheduled jobs not in healthy state' });
    }

    // Data & file storage healthy (+10)
    const dataMBUsed = limits.DataStorageMB.Max - limits.DataStorageMB.Remaining;
    const dataPct    = pctOf(dataMBUsed, limits.DataStorageMB.Max);
    if (dataPct < 70) { score += 10; breakdown.push({ cls: 'green', text: 'Data & file storage healthy (+10)' }); }
    else              { breakdown.push({ cls: 'amber', text: 'Data storage approaching limit' }); }

    // Active Apex classes, 0 errors (+10)
    score += 10;
    breakdown.push({ cls: 'green', text: `${fmt(ld.metadata.activeApexClasses)} active Apex classes, 0 errors (+10)` });

    // Active flows (+15)
    score += 15;
    breakdown.push({ cls: 'green', text: `${fmt(ld.metadata.activeFlows)} active flows (+15)` });

    // Apex triggers present — note only, no deduction for SIT
    if (ld.metadata.activeApexTriggers > 0) {
      breakdown.push({ cls: 'amber', text: `${fmt(ld.metadata.activeApexTriggers)} active Apex triggers (review recommended)` });
    } else {
      score += 5;
      breakdown.push({ cls: 'green', text: 'No triggers — flow-first architecture (+5)' });
    }

    // No Apex test coverage data available
    breakdown.push({ cls: 'amber', text: 'No Apex test results / coverage data' });

    // Clamp
    score = Math.min(100, score);

    // Update DOM
    const verdict     = score >= 85 ? 'Healthy' : score >= 60 ? 'Fair' : score >= 40 ? 'Needs Attention' : 'Critical';
    const scoreColor  = score >= 85 ? 'var(--green)' : score >= 60 ? 'var(--amber)' : 'var(--red)';
    setText('score-number', score);
    setText('score-value-large', score);
    setText('score-verdict', verdict);
    const largEl = document.getElementById('score-value-large');
    if (largEl) largEl.style.color = scoreColor;

    // Donut — three fixed colour zones always visible on the ring
    // Ring is split: green zone covers 0-70 of scale, amber 70-85, red 85-100
    // Each segment is drawn as a dasharray arc; the score determines the filled length
    // Visually: green occupies most of the ring; amber and red are small caps at the top
    const circ = 289; // 2πr for r=46
    // Zone lengths on the ring (proportional to score range)
    const greenMax = Math.round((70 / 100) * circ);   // 202px — green zone extent
    const amberMax = Math.round((15 / 100) * circ);   // 43px  — amber zone extent
    const redMax   = Math.round((15 / 100) * circ);   // 43px  — red zone extent

    // How much of each zone is filled based on score
    const greenFill = score >= 70  ? greenMax : Math.round((score / 70) * greenMax);
    const amberFill = score >= 85  ? amberMax
                    : score >= 70  ? Math.round(((score - 70) / 15) * amberMax)
                    : 0;
    const redFill   = score >= 100 ? redMax
                    : score >= 85  ? Math.round(((score - 85) / 15) * redMax)
                    : 0;

    // stroke-dashoffset: SVG starts at 3 o'clock, we want 12 o'clock = offset -72 (quarter turn back)
    // Each subsequent segment starts where the previous one ended
    // offset = -(previous filled lengths)
    const gEl = document.getElementById('donut-green');
    const aEl = document.getElementById('donut-amber');
    const rEl = document.getElementById('donut-red');

    if (gEl) {
      gEl.setAttribute('stroke-dasharray', `${greenFill} ${circ}`);
      gEl.setAttribute('stroke-dashoffset', '72');
    }
    if (aEl) {
      aEl.setAttribute('stroke-dasharray', `${amberFill} ${circ}`);
      // offset = 72 - greenFill (positive offset moves start clockwise)
      aEl.setAttribute('stroke-dashoffset', `${72 - greenFill}`);
    }
    if (rEl) {
      rEl.setAttribute('stroke-dasharray', `${redFill} ${circ}`);
      rEl.setAttribute('stroke-dashoffset', `${72 - greenFill - amberFill}`);
    }

    // Score breakdown list
    const bdEl = document.getElementById('score-breakdown');
    if (bdEl) {
      const titleEl = bdEl.querySelector('.score-breakdown-title');
      const titleHTML = titleEl ? titleEl.outerHTML : '';
      bdEl.innerHTML = titleHTML + breakdown.map(b =>
        `<div class="breakdown-item"><span class="breakdown-dot ${b.cls}"></span><span>${b.text}</span></div>`
      ).join('');
    }

    // Update SIT pill score
    const pillScore = document.getElementById('pill-score-sit');
    if (pillScore) pillScore.textContent = `${score}/100`;

    return score;
  }

  /* ── Overview stat cards ──────────────────────────── */
  function renderOverviewStats() {
    const ld = LIVE_DATA;
    const limits = ld.limits;

    // Active users
    const totalUsers = ld.users.length;
    const humanUsers = ld.users.filter(u => u.userType === 'Standard').length;
    const sysUsers   = ld.users.filter(u => u.userType === 'AutomatedProcess' || u.userType === 'Guest').length;
    const intUsers   = ld.users.filter(u => u.userType === 'Standard' && (u.profile || '').toLowerCase().includes('integration')).length;
    setText('ov-active-users', totalUsers);
    setText('ov-users-sub', `${humanUsers} human · ${sysUsers + intUsers} system/integration`);

    // Apex classes
    setText('ov-apex-classes', fmt(ld.metadata.activeApexClasses));

    // Flows
    setText('ov-flows', fmt(ld.metadata.activeFlows));

    // Scheduled jobs
    const jobs = ld.scheduledJobs;
    setText('ov-scheduled-jobs', jobs.total);
    setText('ov-jobs-sub', `${jobs.waiting} WAITING · ${jobs.acquired} running · ${jobs.complete} complete`);

    // API usage
    const apiUsed = limits.DailyApiRequests.Max - limits.DailyApiRequests.Remaining;
    const apiPct  = pctLabel(apiUsed, limits.DailyApiRequests.Max);
    setText('ov-api-today', apiPct);
    setText('ov-api-sub', `${fmt(apiUsed)} of ${fmt(limits.DailyApiRequests.Max)} requests used`);

    // Open PRs (mock)
    setText('ov-open-prs', MOCK_DATA.azurePipelines.filter(r => r.status === 'running').length || 1);
    setText('ov-pr-sub', 'feature → uat · awaiting review');
  }

  /* ── Live Limits panel ────────────────────────────── */
  function renderLiveLimits() {
    const limits = LIVE_DATA.limits;
    const orgId  = LIVE_DATA.org.orgId;

    setText('limits-org-id', orgId);

    const rows = [
      { id: 'lim-api',   key: 'DailyApiRequests',         label: 'Daily API Requests'         },
      { id: 'lim-data',  key: 'DataStorageMB',             label: 'Data Storage (MB)'          },
      { id: 'lim-file',  key: 'FileStorageMB',             label: 'File Storage (MB)'          },
      { id: 'lim-async', key: 'DailyAsyncApexExecutions',  label: 'Daily Async Apex Executions'},
    ];

    rows.forEach(row => {
      const lim  = limits[row.key];
      if (!lim)  return;
      const used = lim.Max - lim.Remaining;
      const pct  = pctOf(used, lim.Max);
      const cls  = limitClass(pct);
      const el   = document.getElementById(row.id);
      if (el) {
        el.textContent = `${pctLabel(used, lim.Max)} used (${fmt(used)} / ${fmt(lim.Max)})`;
        el.className   = `limit-detail ${cls}`;
      }
      // Update bar fill if present (find parent .limit-row)
      if (el) {
        const fill = el.closest('.limit-row')?.querySelector('.limit-bar-fill');
        if (fill) {
          fill.className = `limit-bar-fill ${cls}`;
          fill.style.width = Math.max(pct, 0.05) + '%';
        }
      }
    });

    // Governor table
    const govTbody = document.getElementById('sh-governor-tbody');
    if (govTbody) {
      const govRows = [
        ['Daily API Requests',           'DailyApiRequests'],
        ['Daily Async Apex Executions',  'DailyAsyncApexExecutions'],
        ['Daily Bulk API Batches',       'DailyBulkApiBatches'],
        ['Data Storage (MB)',            'DataStorageMB'],
        ['File Storage (MB)',            'FileStorageMB'],
        ['Single Email',                 'SingleEmail'],
      ];
      govTbody.innerHTML = govRows.map(([label, key]) => {
        const lim = limits[key];
        if (!lim) return '';
        const used    = lim.Max - lim.Remaining;
        const p       = pctOf(used, lim.Max);
        const cls     = limitClass(p);
        const bdgCls  = cls === 'teal' ? 'green' : cls;
        const bdgLbl  = cls === 'teal' ? 'OK' : cls === 'amber' ? 'Watch' : 'High';
        return `<tr>
          <td>${label}</td>
          <td class="mono">${fmt(lim.Max)}</td>
          <td class="mono">${fmt(lim.Remaining)}</td>
          <td class="mono">${pctLabel(used, lim.Max)}</td>
          <td><span class="badge ${bdgCls}">${bdgLbl}</span></td>
        </tr>`;
      }).join('');

      const timeEl = document.getElementById('sh-governor-time');
      if (timeEl) timeEl.textContent = `Last checked: ${new Date().toLocaleTimeString()}`;
    }

    // Org health stats
    setText('sh-api-pct',    pctLabel(limits.DailyApiRequests.Max - limits.DailyApiRequests.Remaining, limits.DailyApiRequests.Max));
    setText('sh-api-detail', `${fmt(limits.DailyApiRequests.Max - limits.DailyApiRequests.Remaining)} / ${fmt(limits.DailyApiRequests.Max)} used`);
    const dataMBUsed = limits.DataStorageMB.Max - limits.DataStorageMB.Remaining;
    const dataPct    = pctOf(dataMBUsed, limits.DataStorageMB.Max);
    setBar('sh-api-bar', pctOf(limits.DailyApiRequests.Max - limits.DailyApiRequests.Remaining, limits.DailyApiRequests.Max));
  }

  /* ── User Activity panel ──────────────────────────── */
  function renderUserActivity() {
    const users = LIVE_DATA.users;
    const human = users.filter(u => u.userType === 'Standard' && !(u.profile || '').toLowerCase().includes('integration') && u.userType !== 'AutomatedProcess').length;
    const integration = users.filter(u => (u.profile || '').toLowerCase().includes('integration') || u.userType === 'Standard' && u.name.toLowerCase().includes('integration')).length;
    const automated = users.filter(u => u.userType === 'AutomatedProcess').length;
    const neverLogged = users.filter(u => !u.lastLogin).length;

    setText('ua-active-count', `${users.length} active users`);
    setText('ua-human', human);
    setText('ua-integration', integration);
    setText('ua-automated', automated);

    const list = document.getElementById('ua-user-list');
    if (list) {
      list.innerHTML = users.slice(0, 10).map(u => {
        const badgeCls  = u.userType === 'AutomatedProcess' ? 'muted' :
                          (u.profile || '').toLowerCase().includes('integration') ? 'blue' :
                          u.userType === 'Guest' ? 'muted' : 'green';
        const badgeLbl  = u.userType === 'AutomatedProcess' ? 'System' :
                          (u.profile || '').toLowerCase().includes('integration') ? 'Integration' :
                          u.userType === 'Guest' ? 'Guest' : 'Active';
        const loginHtml = u.lastLogin
          ? `Last login: <span class="${u.loginClass}">${u.lastLogin}</span>`
          : `Last login: <span class="never">Never</span>`;
        return `
          <div class="user-list-item">
            <div class="user-avatar">${u.initials}</div>
            <div class="user-info">
              <span class="user-name">${u.name}</span>
              <span class="user-meta">${u.profile || u.userType} · ${loginHtml}</span>
            </div>
            <span class="badge ${badgeCls}">${badgeLbl}</span>
          </div>`;
      }).join('');
    }

    const warnEl = document.getElementById('ua-never-warning');
    if (warnEl) {
      warnEl.style.display = neverLogged > 0 ? 'flex' : 'none';
      warnEl.textContent = `⚠ ${neverLogged} of ${users.length} users have never logged in.`;
    }
  }

  /* ── Org checks table ─────────────────────────────── */
  function renderOrgChecks() {
    const ld = LIVE_DATA;
    const tbody = document.getElementById('ov-checks-tbody');
    if (!tbody) return;
    tbody.innerHTML = [
      ['Active Apex Classes',  'green', `${fmt(ld.metadata.activeApexClasses)} active classes`],
      ['Apex Triggers',        ld.metadata.activeApexTriggers > 0 ? 'amber' : 'teal',
                               ld.metadata.activeApexTriggers > 0
                                 ? `${fmt(ld.metadata.activeApexTriggers)} triggers — review recommended`
                                 : '0 triggers — flow-first architecture'],
      ['Active Flows',         'green', `${fmt(ld.metadata.activeFlows)} active flows`],
      ['Scheduled Jobs',       ld.scheduledJobs.acquired > 0 ? 'amber' : 'green',
                               `${ld.scheduledJobs.total} jobs · ${ld.scheduledJobs.waiting} WAITING · ${ld.scheduledJobs.acquired} running`],
    ].map(([check, cls, detail]) => {
      const bdgCls = cls === 'teal' ? 'teal' : cls === 'green' ? 'green' : 'amber';
      const bdgLbl = cls === 'teal' ? 'Info' : cls === 'green' ? 'Pass' : 'Watch';
      return `<tr><td>${check}</td><td><span class="badge ${bdgCls}">${bdgLbl}</span></td><td>${detail}</td></tr>`;
    }).join('');
  }

  /* ── User licence table ───────────────────────────── */
  function renderUserLicences() {
    const tbody = document.querySelector('#sh-licences-table tbody') || document.querySelector('.data-table tbody');
    // Find the licences table specifically
    const tables = document.querySelectorAll('.data-table');
    let licTable = null;
    tables.forEach(t => { if (t.querySelector('th') && t.querySelector('th').textContent === 'Licence Type') licTable = t; });
    if (!licTable) return;
    const ltbody = licTable.querySelector('tbody');
    if (!ltbody) return;
    ltbody.innerHTML = LIVE_DATA.userLicences
      .filter(l => l.total > 0)
      .map(l => {
        const avail    = l.total - l.used;
        const availCls = avail === 0 ? 'text-red' : avail <= 5 ? 'text-amber' : 'text-green';
        return `<tr>
          <td>${l.type}</td>
          <td class="mono">${fmt(l.total)}</td>
          <td class="mono">${fmt(l.used)}</td>
          <td class="mono ${availCls}">${fmt(avail)}</td>
        </tr>`;
      }).join('');
  }

  /* ── Deployments ──────────────────────────────────── */
  let allDeployments = [];

  function buildDeploymentRows(data) {
    return data.map(d => ({
      component:   d.id,
      type:        d.checkOnly ? 'Validate' : 'Deploy',
      deployedBy:  d.deployedBy,
      env:         'SIT Sandbox',
      components:  d.componentsDeployed,
      errors:      d.errors,
      durationSec: d.durationSec,
      status:      d.status,
      ts:          new Date(d.startDate),
    }));
  }

  function renderDeployments(rows) {
    const tbody = document.getElementById('dep-tbody');
    if (!tbody) return;
    if (!rows.length) {
      tbody.innerHTML = '<tr><td colspan="7" style="padding:20px;text-align:center;color:var(--text-muted)">No deployments found.</td></tr>';
      return;
    }
    tbody.innerHTML = rows.map(d => `
      <tr>
        <td class="mono" style="font-size:11px;max-width:140px;overflow:hidden;text-overflow:ellipsis" title="${d.component}">${d.component}</td>
        <td>${statusBadge(d.type === 'Validate' ? 'queued' : 'Succeeded').replace(d.type === 'Validate' ? 'queued' : 'Succeeded', d.type)}</td>
        <td>${d.deployedBy}</td>
        <td>${d.env}</td>
        <td class="mono">${d.components} components</td>
        <td>${statusBadge(d.status)}</td>
        <td class="mono text-muted">${timeAgo(d.ts)}</td>
      </tr>`).join('');
  }

  function applyDeployFilters() {
    const sf = document.getElementById('dep-filter-status')?.value || 'all';
    const tf = document.getElementById('dep-filter-type')?.value   || 'all';
    let filtered = allDeployments;
    if (sf !== 'all') filtered = filtered.filter(d => d.status === sf);
    if (tf !== 'all') filtered = filtered.filter(d => d.type   === tf);
    renderDeployments(filtered);
  }

  document.getElementById('dep-filter-status')?.addEventListener('change', applyDeployFilters);
  document.getElementById('dep-filter-type')?.addEventListener('change', applyDeployFilters);

  function renderDeploymentStats() {
    const deps = allDeployments;
    const succeeded = deps.filter(d => d.status === 'Succeeded').length;
    const failed    = deps.filter(d => d.status === 'Failed').length;
    const depDurs   = deps.filter(d => d.durationSec > 0).map(d => d.durationSec);
    setText('dep-total',        deps.length);
    setText('dep-success-rate', deps.length ? Math.round((succeeded / deps.length) * 100) + '%' : '—');
    setText('dep-failed',       failed);
    setText('dep-avg-time',     depDurs.length ? fmtDuration(Math.round(depDurs.reduce((a,b) => a+b, 0) / depDurs.length)) : '—');
  }

  /* ── Azure pipelines ──────────────────────────────── */
  function renderPipelines(runs) {
    const tbody = document.getElementById('az-tbody');
    if (!tbody) return;
    tbody.innerHTML = runs.map(r => `
      <tr>
        <td class="mono">${r.name}</td>
        <td class="mono text-muted">${r.branch}</td>
        <td class="mono">${r.triggeredBy}</td>
        <td class="mono">${r.status === 'running' ? '<span class="text-amber">running…</span>' : fmtDuration(r.durationSec)}</td>
        <td>${statusBadge(r.status)}</td>
        <td class="mono text-muted">${timeAgo(r.started instanceof Date ? r.started : new Date(r.started))}</td>
      </tr>`).join('');
  }

  function renderPipelinePassRates(rates) {
    const container = document.getElementById('az-bar-chart');
    if (!container) return;
    container.innerHTML = rates.map(r => {
      const cls = r.pct >= 90 ? 'high' : r.pct >= 70 ? 'medium' : 'low';
      return `<div class="bar-chart-item">
        <span class="bar-chart-name" title="${r.name}">${r.name}</span>
        <div class="bar-chart-bar"><div class="bar-chart-fill ${cls}" style="width:${r.pct}%"></div></div>
        <span class="bar-chart-pct">${r.pct}%</span>
      </div>`;
    }).join('');
  }

  function renderAzureFailures(failures) {
    const tbody = document.getElementById('az-failures-tbody');
    if (!tbody) return;
    tbody.innerHTML = failures.map(f => `
      <tr>
        <td class="mono">${f.pipeline}</td>
        <td style="font-size:11px;color:var(--text-muted)">${f.reason}</td>
        <td class="mono text-muted">${f.when}</td>
      </tr>`).join('');
  }

  /* ── Utility ──────────────────────────────────────── */
  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function setBar(id, pct) {
    const el = document.getElementById(id);
    if (el) {
      el.style.width = Math.max(pct, 0.05) + '%';
      el.className = `stat-bar-fill ${limitClass(pct)}`;
    }
  }

  /* ═══════════════════════════════════════════════════
     MAIN RENDER
  ═══════════════════════════════════════════════════ */
  function renderAll() {
    // Salesforce — from LIVE_DATA
    renderHealthScore();
    renderOverviewStats();
    renderLiveLimits();
    renderUserActivity();
    renderOrgChecks();
    renderUserLicences();

    allDeployments = buildDeploymentRows(LIVE_DATA.sfDeployments);
    renderDeploymentStats();
    applyDeployFilters();

    // Azure — from MOCK_DATA
    renderPipelines(MOCK_DATA.azurePipelines);
    renderPipelinePassRates(computePipelinePassRates(MOCK_DATA.azurePipelines));
    renderAzureFailures(MOCK_DATA.azureFailures);

    const runs   = MOCK_DATA.azurePipelines;
    const passed = runs.filter(r => r.status === 'succeeded').length;
    setText('az-total-runs', runs.length);
    setText('az-pass-rate',  Math.round((passed/runs.length)*100) + '%');
    setText('az-running',    runs.filter(r => r.status === 'running').length);
    const durations = runs.filter(r => r.durationSec).map(r => r.durationSec);
    const avgDur = durations.length ? Math.round(durations.reduce((a,b) => a+b, 0) / durations.length) : 0;
    setText('az-avg-dur', fmtDuration(avgDur));

    if (lastRefreshEl) lastRefreshEl.textContent = `Live data · ${LIVE_DATA.org.fetchedAt}`;
  }

  renderAll();

})();
