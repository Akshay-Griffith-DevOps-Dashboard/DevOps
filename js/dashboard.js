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

  /* ── Hide clock (data pulled timestamp replaces it) ── */
  const clockEl = document.getElementById('topbar-time');
  if (clockEl) clockEl.style.display = 'none';

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

    // ── Check 1: Daily API usage (max 20pts) ─────────────
    const apiUsed = limits.DailyApiRequests.Max - limits.DailyApiRequests.Remaining;
    const apiPct  = pctOf(apiUsed, limits.DailyApiRequests.Max);
    if      (apiPct < 50) { score += 20; breakdown.push({ cls: 'green', text: `API usage ${apiPct.toFixed(2)}% — well within limit (+20)` }); }
    else if (apiPct < 80) { score += 10; breakdown.push({ cls: 'amber', text: `API usage ${apiPct.toFixed(1)}% — monitor closely (+10)` }); }
    else                  {              breakdown.push({ cls: 'red',   text: `API usage ${apiPct.toFixed(1)}% — critical, near limit (0)` }); }

    // ── Check 2: Data storage (max 15pts) ───────────────
    const dataMBUsed = limits.DataStorageMB.Max - limits.DataStorageMB.Remaining;
    const dataPct    = pctOf(dataMBUsed, limits.DataStorageMB.Max);
    if      (dataPct < 50) { score += 15; breakdown.push({ cls: 'green', text: `Data storage ${dataPct.toFixed(1)}% used — healthy (+15)` }); }
    else if (dataPct < 80) { score += 8;  breakdown.push({ cls: 'amber', text: `Data storage ${dataPct.toFixed(1)}% used — approaching limit (+8)` }); }
    else                   {              breakdown.push({ cls: 'red',   text: `Data storage ${dataPct.toFixed(1)}% used — critical (0)` }); }

    // ── Check 3: File storage (max 10pts) ───────────────
    const fileMBUsed = limits.FileStorageMB.Max - limits.FileStorageMB.Remaining;
    const filePct    = pctOf(fileMBUsed, limits.FileStorageMB.Max);
    if      (filePct < 50) { score += 10; breakdown.push({ cls: 'green', text: `File storage ${filePct.toFixed(1)}% used (+10)` }); }
    else if (filePct < 80) { score += 5;  breakdown.push({ cls: 'amber', text: `File storage ${filePct.toFixed(1)}% used (+5)` }); }
    else                   {              breakdown.push({ cls: 'red',   text: `File storage ${filePct.toFixed(1)}% used — critical (0)` }); }

    // ── Check 4: Scheduled jobs health (max 10pts) ──────
    const waiting = ld.scheduledJobs.waiting;
    const jobsPct = waiting / (ld.scheduledJobs.total || 1) * 100;
    if      (jobsPct >= 70) { score += 10; breakdown.push({ cls: 'green', text: `${waiting}/${ld.scheduledJobs.total} scheduled jobs WAITING (+10)` }); }
    else if (jobsPct >= 40) { score += 5;  breakdown.push({ cls: 'amber', text: `Only ${waiting}/${ld.scheduledJobs.total} jobs in WAITING state (+5)` }); }
    else                    {              breakdown.push({ cls: 'red',   text: `${waiting}/${ld.scheduledJobs.total} jobs healthy — many stuck/failed (0)` }); }

    // ── Check 5: Async Apex usage (max 10pts) ───────────
    const asyncUsed = limits.DailyAsyncApexExecutions.Max - limits.DailyAsyncApexExecutions.Remaining;
    const asyncPct  = pctOf(asyncUsed, limits.DailyAsyncApexExecutions.Max);
    if      (asyncPct < 50) { score += 10; breakdown.push({ cls: 'green', text: `Async Apex ${asyncPct.toFixed(1)}% used (+10)` }); }
    else if (asyncPct < 80) { score += 5;  breakdown.push({ cls: 'amber', text: `Async Apex ${asyncPct.toFixed(1)}% used — elevated (+5)` }); }
    else                    {              breakdown.push({ cls: 'red',   text: `Async Apex ${asyncPct.toFixed(1)}% used — near limit (0)` }); }

    // ── Check 6: Active flows (max 15pts) ───────────────
    const flows = ld.metadata.activeFlows;
    if   (flows > 0) { score += 15; breakdown.push({ cls: 'green', text: `${fmt(flows)} active flows in use (+15)` }); }
    else             {              breakdown.push({ cls: 'amber', text: 'No active flows found (0)' }); }

    // ── Check 7: Apex triggers (max 10pts) ──────────────
    // Griffith uses flow-first; triggers indicate legacy/risk
    const triggers = ld.metadata.activeApexTriggers;
    if      (triggers === 0)   { score += 10; breakdown.push({ cls: 'green', text: 'No Apex triggers — clean flow-first architecture (+10)' }); }
    else if (triggers <= 50)   { score += 7;  breakdown.push({ cls: 'green', text: `${triggers} Apex triggers — moderate, manageable (+7)` }); }
    else if (triggers <= 150)  { score += 3;  breakdown.push({ cls: 'amber', text: `${triggers} Apex triggers — high count, review recommended (+3)` }); }
    else                       {              breakdown.push({ cls: 'red',   text: `${triggers} Apex triggers — very high, technical debt risk (0)` }); }

    // ── Check 8: Test coverage (max 10pts) ──────────────
    // No coverage data available from API snapshot
    if (ld.metadata.apexTestCoverage != null) {
      const cov = ld.metadata.apexTestCoverage;
      if      (cov >= 85) { score += 10; breakdown.push({ cls: 'green', text: `Apex test coverage ${cov}% (+10)` }); }
      else if (cov >= 75) { score += 5;  breakdown.push({ cls: 'amber', text: `Apex test coverage ${cov}% — below recommended 85% (+5)` }); }
      else                {              breakdown.push({ cls: 'red',   text: `Apex test coverage ${cov}% — too low, deployments may fail (0)` }); }
    } else {
      breakdown.push({ cls: 'amber', text: 'Apex test coverage — not available in snapshot (0)' });
    }

    // Clamp to 100
    score = Math.min(100, score);

    // Update DOM
    const verdict    = score >= 85 ? 'Healthy' : score >= 60 ? 'Fair' : score >= 40 ? 'Needs Attention' : 'Critical';
    // Score colour: green > 70, amber 50-70, red < 50
    const scoreColor = score > 70 ? 'var(--green)' : score >= 50 ? 'var(--amber)' : 'var(--red)';
    setText('score-number', score);
    setText('score-value-large', score);
    setText('score-verdict', verdict);
    // Apply colour to both the large display number and the donut center number
    const largEl   = document.getElementById('score-value-large');
    const centerEl = document.getElementById('score-number');
    if (largEl)   largEl.style.color   = scoreColor;
    if (centerEl) centerEl.style.color = scoreColor;

    // Donut — three FIXED colour bands always visible; score needle shows position
    // Green band:  0–70% of ring  (score 0–70)
    // Amber band: 70–85% of ring  (score 70–85)
    // Red band:   85–100% of ring (score 85–100)
    // A white/dark dot marker sits at the score's position on the ring.
    (function drawDonut(score) {
      const svg = document.getElementById('donut-svg');
      if (!svg) return;
      const cx = 55, cy = 55, r = 46;
      const GAP = 2.5; // gap in degrees between bands

      function polarToXY(deg) {
        const rad = (deg - 90) * Math.PI / 180;
        return { x: +(cx + r * Math.cos(rad)).toFixed(3),
                 y: +(cy + r * Math.sin(rad)).toFixed(3) };
      }

      function makePath(startDeg, endDeg, color, width) {
        if (endDeg - startDeg < 0.1) return null;
        const s = polarToXY(startDeg), e = polarToXY(endDeg);
        const large = (endDeg - startDeg) > 180 ? 1 : 0;
        const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        p.setAttribute('d', `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`);
        p.setAttribute('fill', 'none');
        p.setAttribute('stroke', color);
        p.setAttribute('stroke-width', width || '10');
        p.setAttribute('stroke-linecap', 'round');
        return p;
      }

      // Clear previous dynamic elements
      svg.querySelectorAll('.donut-band, .donut-needle, .donut-needle-dot').forEach(el => el.remove());

      // Fixed zone boundaries (degrees)
      const G_START =   0 + GAP;      // green starts
      const G_END   = 252 - GAP;      // 70% of 360
      const A_START = 252 + GAP;      // amber starts
      const A_END   = 306 - GAP;      // 85% of 360
      const R_START = 306 + GAP;      // red starts
      const R_END   = 359.5;          // red ends just before 12 o'clock

      // Draw green band (always full — this is the healthy zone)
      const gp = makePath(G_START, G_END, '#1A7F4B');
      if (gp) { gp.classList.add('donut-band'); svg.appendChild(gp); }

      // Draw amber band (always full)
      const ap = makePath(A_START, A_END, '#E8A317');
      if (ap) { ap.classList.add('donut-band'); svg.appendChild(ap); }

      // Draw red band (always full)
      const rp = makePath(R_START, R_END, '#C0392B');
      if (rp) { rp.classList.add('donut-band'); svg.appendChild(rp); }

      // Score needle — white circle on the ring at the score's position
      const scoreDeg  = score * 3.6;  // 0–360
      const needlePos = polarToXY(scoreDeg);
      const needle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      needle.setAttribute('cx', needlePos.x);
      needle.setAttribute('cy', needlePos.y);
      needle.setAttribute('r', '6');
      needle.setAttribute('fill', '#FFFFFF');
      needle.setAttribute('stroke', score >= 85 ? '#C0392B' : score >= 70 ? '#E8A317' : '#1A7F4B');
      needle.setAttribute('stroke-width', '2.5');
      needle.classList.add('donut-needle-dot');
      svg.appendChild(needle);
    })(score);

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

  /* ── User licence cards + usage grid ─────────────── */
  function renderUserLicences() {
    const licences = (LIVE_DATA.userLicences || []).filter(l => l.total > 0);
    if (!licences.length) return;

    // Summary stats
    const totalAllocated = licences.reduce((s, l) => s + l.total, 0);
    const totalUsed      = licences.reduce((s, l) => s + l.used,  0);
    const atRisk         = licences.filter(l => {
      const pct = l.total > 0 ? (l.used / l.total) * 100 : 0;
      return pct >= 90;
    }).length;
    const usedPct = totalAllocated > 0 ? Math.round((totalUsed / totalAllocated) * 100) : 0;

    setText('lic-total-allocated', fmt(totalAllocated));
    setText('lic-total-used',      fmt(totalUsed));
    setText('lic-used-pct',        `${usedPct}% utilisation`);
    setText('lic-at-risk',         atRisk);

    // Usage grid — one card per licence type
    const grid = document.getElementById('lic-usage-grid');
    if (!grid) return;

    grid.innerHTML = licences.map(l => {
      const pct     = l.total > 0 ? Math.round((l.used / l.total) * 100) : 0;
      const avail   = l.total - l.used;
      const barCls  = pct >= 90 ? 'red' : pct >= 70 ? 'amber' : 'teal';
      const availCls= avail === 0 ? 'red' : avail <= 5 ? 'amber' : 'green';
      const statusLabel = pct >= 90 ? 'Critical' : pct >= 70 ? 'Warning' : 'OK';
      const statusCls   = pct >= 90 ? 'red' : pct >= 70 ? 'amber' : 'green';
      return `
        <div class="lic-card">
          <div class="lic-card-header">
            <span class="lic-card-name">${escHtml(l.type)}</span>
            <span class="badge ${statusCls}" style="font-size:10px">${statusLabel}</span>
          </div>
          <div class="lic-card-numbers">
            <span class="lic-used">${fmt(l.used)}</span>
            <span class="lic-sep">/</span>
            <span class="lic-total">${fmt(l.total)}</span>
            <span class="lic-pct">${pct}%</span>
          </div>
          <div class="lic-bar-wrap">
            <div class="lic-bar">
              <div class="lic-bar-fill ${barCls}" style="width:${Math.min(pct,100)}%"></div>
            </div>
          </div>
          <div class="lic-footer">
            <span class="${availCls === 'red' ? 'text-red' : availCls === 'amber' ? 'text-amber' : 'text-green'}">${fmt(avail)} available</span>
          </div>
        </div>`;
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

  /* ── Azure DevOps — Branches + Pull Requests ─────── */
  function renderAzure() {
    const az = typeof AZURE_DATA !== 'undefined' ? AZURE_DATA : null;
    const hasData = az && (az.pullRequests.length > 0 || az.branches.length > 0);

    const banner = document.getElementById('az-no-data-banner');
    if (banner) banner.classList.toggle('hidden', hasData);

    if (!hasData) {
      setText('az-repo-count',      '—');
      setText('az-pr-open',         '—');
      setText('az-pr-merged',       '—');
      setText('az-pr-abandoned',    '—');
      const pTbody = document.getElementById('az-pr-tbody');
      if (pTbody) pTbody.innerHTML = '<tr><td colspan="7" class="empty-row">No data yet — add AZURE_DEVOPS_PAT secret in GitHub Actions</td></tr>';
      const cTbody = document.getElementById('az-commit-tbody');
      if (cTbody) cTbody.innerHTML = '<tr><td colspan="6" class="empty-row">No data yet</td></tr>';
      const tTbody = document.getElementById('az-tag-tbody');
      if (tTbody) tTbody.innerHTML = '<tr><td colspan="5" class="empty-row">No data yet</td></tr>';
      return;
    }

    // Fetch date
    const fetchDateEl = document.getElementById('az-fetch-date');
    if (fetchDateEl && az.fetchedAt) fetchDateEl.textContent = `Fetched: ${az.fetchedAt}`;

    // Summary stats
    const openPRs      = az.pullRequests.filter(p => p.status === 'active');
    const mergedPRs    = az.pullRequests.filter(p => p.status === 'completed');
    const abandonedPRs = az.pullRequests.filter(p => p.status === 'abandoned');
    setText('az-repo-count',       az.repos.length);
    setText('az-pr-open',          openPRs.length);
    setText('az-pr-merged',        mergedPRs.length);
    setText('az-pr-abandoned',     abandonedPRs.length);
    setText('az-pr-sub',           openPRs.length === 1 ? '1 awaiting review' : `${openPRs.length} awaiting review`);
    setText('az-pr-merged-sub',    `${mergedPRs.length} completed`);
    setText('az-pr-abandoned-sub', `${abandonedPRs.length} closed without merge`);

    // Populate repo + target branch filter dropdowns for PRs
    const repoNames   = [...new Set(az.repos.map(r => r.name))].sort();
    const targetBranches = [...new Set(az.pullRequests.map(p => p.targetBranch).filter(Boolean))].sort();

    function populateSelect(id, values, currentVal) {
      const sel = document.getElementById(id);
      if (!sel) return;
      while (sel.options.length > 1) sel.remove(1);
      values.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v; opt.textContent = v;
        sel.appendChild(opt);
      });
      if (currentVal) sel.value = currentVal;
    }
    populateSelect('az-pr-repo-filter',    repoNames,     null);
    populateSelect('az-pr-target-filter',  targetBranches, null);
    populateSelect('az-commit-repo-filter', repoNames,    null);
    populateSelect('az-tag-repo-filter',   repoNames,     null);

    renderPRTable();
    renderCommitTable();
    renderTagTable();
  }

  function renderPRTable() {
    const az = typeof AZURE_DATA !== 'undefined' ? AZURE_DATA : null;
    if (!az) return;
    const tbody = document.getElementById('az-pr-tbody');
    if (!tbody) return;

    const statusFilter = document.getElementById('az-pr-status-filter')?.value || 'all';
    const targetFilter = document.getElementById('az-pr-target-filter')?.value || 'all';
    const repoFilter   = document.getElementById('az-pr-repo-filter')?.value   || 'all';

    let prs = az.pullRequests;
    if (statusFilter !== 'all') prs = prs.filter(p => p.status       === statusFilter);
    if (targetFilter !== 'all') prs = prs.filter(p => p.targetBranch === targetFilter);
    if (repoFilter   !== 'all') prs = prs.filter(p => p.repo         === repoFilter);

    // Sort: open first, then by created date desc
    prs = [...prs].sort((a, b) => {
      const order = { active: 0, completed: 1, abandoned: 2 };
      const oa = order[a.status] ?? 9, ob = order[b.status] ?? 9;
      if (oa !== ob) return oa - ob;
      return (b.createdDate || '').localeCompare(a.createdDate || '');
    });

    if (!prs.length) {
      tbody.innerHTML = '<tr><td colspan="7" class="empty-row">No pull requests match the filter</td></tr>';
      return;
    }

    const statusMap = { active: ['amber','Open'], completed: ['teal','Merged'], abandoned: ['muted','Abandoned'] };
    tbody.innerHTML = prs.map(pr => {
      const [sCls, sLabel] = statusMap[pr.status] || ['muted', pr.status];
      const draftBadge = pr.isDraft ? '<span class="badge muted" style="font-size:10px;margin-right:4px">Draft</span>' : '';
      const approvedEl = pr.approved ? ' <span class="badge teal" style="font-size:10px">✓ Approved</span>' : '';
      return `<tr>
        <td class="mono" style="font-size:12px;font-weight:600">#${pr.id}</td>
        <td style="max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${escHtml(pr.title)}">${draftBadge}${escHtml(pr.title)}${approvedEl}</td>
        <td class="mono" style="font-size:11px;color:var(--text-secondary)">${escHtml(pr.sourceBranch)}</td>
        <td class="mono" style="font-size:11px"><span class="branch-target">${escHtml(pr.targetBranch)}</span></td>
        <td style="font-size:12px">${escHtml(pr.createdBy)}</td>
        <td class="mono" style="font-size:11px;color:var(--text-muted)">${pr.createdDate || '—'}</td>
        <td><span class="badge ${sCls}">${sLabel}</span></td>
      </tr>`;
    }).join('');
  }

  function renderCommitTable() {
    const az = typeof AZURE_DATA !== 'undefined' ? AZURE_DATA : null;
    if (!az) return;
    const tbody = document.getElementById('az-commit-tbody');
    if (!tbody) return;

    const repoFilter = document.getElementById('az-commit-repo-filter')?.value || 'all';
    let commits = az.commits || [];
    if (repoFilter !== 'all') commits = commits.filter(c => c.repo === repoFilter);

    // Sort by date desc, limit to 50
    commits = [...commits].sort((a, b) => (b.date || '').localeCompare(a.date || '')).slice(0, 50);

    if (!commits.length) {
      tbody.innerHTML = '<tr><td colspan="6" class="empty-row">No commit data — will populate on next GitHub Actions run</td></tr>';
      return;
    }

    tbody.innerHTML = commits.map(c => `<tr>
      <td class="mono" style="font-size:11px;color:var(--text-muted)">${escHtml(c.commitId)}</td>
      <td style="max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${escHtml(c.comment)}">${escHtml(c.comment || '—')}</td>
      <td class="mono" style="font-size:11px">${escHtml(c.repo)}</td>
      <td class="mono" style="font-size:11px;color:var(--text-secondary)">${escHtml(c.branch || '—')}</td>
      <td style="font-size:12px">${escHtml(c.author || '—')}</td>
      <td class="mono" style="font-size:11px;color:var(--text-muted)">${c.date || '—'}</td>
    </tr>`).join('');
  }

  function renderTagTable() {
    const az = typeof AZURE_DATA !== 'undefined' ? AZURE_DATA : null;
    if (!az) return;
    const tbody = document.getElementById('az-tag-tbody');
    if (!tbody) return;

    const repoFilter = document.getElementById('az-tag-repo-filter')?.value || 'all';
    let tags = az.tags || [];
    if (repoFilter !== 'all') tags = tags.filter(t => t.repo === repoFilter);
    tags = [...tags].sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    if (!tags.length) {
      tbody.innerHTML = '<tr><td colspan="5" class="empty-row">No tags found — will populate on next GitHub Actions run</td></tr>';
      return;
    }

    tbody.innerHTML = tags.map(t => `<tr>
      <td style="font-size:12px;font-weight:600">${escHtml(t.name)}</td>
      <td class="mono" style="font-size:11px">${escHtml(t.repo)}</td>
      <td class="mono" style="font-size:11px;color:var(--text-muted)">${escHtml(t.commitId)}</td>
      <td style="font-size:12px">${escHtml(t.author || '—')}</td>
      <td class="mono" style="font-size:11px;color:var(--text-muted)">${t.date || '—'}</td>
    </tr>`).join('');
  }

  function escHtml(s) {
    return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // Wire up Azure filter dropdowns
  document.getElementById('az-pr-status-filter')?.addEventListener('change', renderPRTable);
  document.getElementById('az-pr-target-filter')?.addEventListener('change', renderPRTable);
  document.getElementById('az-pr-repo-filter')?.addEventListener('change', renderPRTable);
  document.getElementById('az-commit-repo-filter')?.addEventListener('change', renderCommitTable);
  document.getElementById('az-tag-repo-filter')?.addEventListener('change', renderTagTable);

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
     QA / JIRA
  ═══════════════════════════════════════════════════ */
  function renderQA() {
    const jd = typeof JIRA_DATA !== 'undefined' ? JIRA_DATA : null;
    const hasData = jd && jd.issues && jd.issues.length > 0;

    const banner = document.getElementById('jira-no-data-banner');
    if (banner) banner.classList.toggle('hidden', hasData);

    const fetchEl = document.getElementById('jira-fetch-date');
    if (fetchEl && jd && jd.fetchedAt) fetchEl.textContent = `Fetched: ${jd.fetchedAt}`;

    if (!hasData) {
      setText('qa-open',       '—');
      setText('qa-bugs',       '—');
      setText('qa-in-testing', '—');
      setText('qa-done',       '—');
      const tbody = document.getElementById('qa-issues-tbody');
      if (tbody) tbody.innerHTML = '<tr><td colspan="8" class="empty-row">No Jira data yet — add JIRA_API_TOKEN secret in GitHub Actions</td></tr>';
      renderQAPriorityBars([]);
      renderQASprint(null);
      return;
    }

    const issues    = jd.issues;
    const thisMonth = new Date().toISOString().slice(0,7); // YYYY-MM

    // Status categories — Jira uses "To Do", "In Progress", "Done" as categories
    const openIssues    = issues.filter(i => i.statusCat !== 'Done');
    const bugs          = issues.filter(i => i.type === 'Bug' && i.statusCat !== 'Done');
    const inTesting     = issues.filter(i => /test|qa|review/i.test(i.status) && i.statusCat !== 'Done');
    const doneThisMonth = issues.filter(i => i.statusCat === 'Done' && i.updated.startsWith(thisMonth));

    setText('qa-open',           openIssues.length);
    setText('qa-bugs',           bugs.length);
    setText('qa-in-testing',     inTesting.length);
    setText('qa-done',           doneThisMonth.length);
    setText('qa-open-sub',       `${openIssues.length} open issues`);
    setText('qa-bugs-sub',       bugs.length === 1 ? '1 open bug' : `${bugs.length} open bugs`);
    setText('qa-in-testing-sub', inTesting.length === 1 ? '1 in testing' : `${inTesting.length} in testing`);
    setText('qa-done-sub',       `resolved in ${thisMonth}`);

    // Populate dynamic filter options from real data
    const allStatuses   = [...new Set(issues.map(i => i.status))].sort();
    const allTypes      = [...new Set(issues.map(i => i.type))].filter(Boolean).sort();
    const allAssignees  = [...new Set(issues.map(i => i.assignee||'Unassigned'))].sort();
    function populateDynamicFilter(id, values) {
      const sel = document.getElementById(id);
      if (!sel) return;
      const cur = sel.value;
      while (sel.options.length > 1) sel.remove(1);
      values.forEach(v => {
        const o = document.createElement('option');
        o.value = v; o.textContent = v;
        sel.appendChild(o);
      });
      sel.value = (values.includes(cur)) ? cur : 'all';
    }
    populateDynamicFilter('qa-status-filter',   allStatuses);
    populateDynamicFilter('qa-type-filter',     allTypes);
    populateDynamicFilter('qa-assignee-filter', allAssignees);

    renderQAPriorityBars(openIssues);
    renderQASprint(jd.sprints);
    renderQATable();
  }

  function renderQAPriorityBars(openIssues) {
    const el = document.getElementById('qa-priority-bars');
    if (!el) return;
    if (!openIssues.length) {
      el.innerHTML = '<div class="empty-row" style="padding:20px 0;text-align:center;color:var(--text-muted)">No open issues</div>';
      return;
    }
    const order  = ['Highest','High','Medium','Low','Lowest'];
    const colors = { Highest:'red', High:'amber', Medium:'blue', Low:'teal', Lowest:'muted' };
    const counts = {};
    openIssues.forEach(i => { counts[i.priority] = (counts[i.priority]||0)+1; });
    const max = Math.max(...Object.values(counts), 1);

    el.innerHTML = order.filter(p => counts[p]).map(p => {
      const pct = Math.round((counts[p]/max)*100);
      const cls = colors[p] || 'teal';
      return `<div class="qa-priority-row">
        <span class="qa-priority-label">${p}</span>
        <div class="qa-priority-bar-wrap">
          <div class="qa-priority-bar">
            <div class="qa-priority-bar-fill ${cls}" style="width:${pct}%"></div>
          </div>
          <span class="qa-priority-count">${counts[p]}</span>
        </div>
      </div>`;
    }).join('');
  }

  function renderQASprint(sprints) {
    const el = document.getElementById('qa-sprint-info');
    if (!el) return;
    const active = (sprints || []).find(s => s.state === 'active');
    if (!active) {
      el.innerHTML = '<div class="empty-row" style="padding:24px 0;text-align:center;color:var(--text-muted)">No active sprint data</div>';
      return;
    }
    el.innerHTML = `
      <div class="qa-sprint-name">${escHtml(active.name)}</div>
      <div class="qa-sprint-dates">${active.startDate} → ${active.endDate}</div>
      ${active.goal ? `<div class="qa-sprint-goal">${escHtml(active.goal)}</div>` : ''}
    `;
  }

  // Track active board tab
  let _qaActiveTab = 'sprint';

  function renderQATable() {
    const jd     = typeof JIRA_DATA !== 'undefined' ? JIRA_DATA : null;
    if (!jd) return;
    const tbody  = document.getElementById('qa-issues-tbody');
    const countEl= document.getElementById('qa-issues-count');
    const titleEl= document.getElementById('qa-table-title');
    if (!tbody) return;

    const typeFilter     = document.getElementById('qa-type-filter')?.value     || 'all';
    const statusFilter   = document.getElementById('qa-status-filter')?.value   || 'all';
    const priorityFilter = document.getElementById('qa-priority-filter')?.value || 'all';
    const assigneeFilter = document.getElementById('qa-assignee-filter')?.value || 'all';
    const searchVal      = (document.getElementById('qa-search')?.value || '').toLowerCase().trim();

    // Determine active sprint issue keys
    const activeSprint = (jd.sprints || []).find(s => s.state === 'active');

    // Build Azure branch lookup
    const branchMap = {};
    if (typeof AZURE_DATA !== 'undefined') {
      AZURE_DATA.branches.forEach(b => {
        const m = b.name.match(/SOPS[_-](\d+)/i);
        if (m) {
          const key = `SOPS-${m[1]}`;
          if (!branchMap[key]) branchMap[key] = [];
          branchMap[key].push(b.name);
        }
      });
    }

    // Filter by tab: active sprint = open issues in current sprint (by sprint name match or non-done);
    // backlog = issues not in active sprint or done
    let issues = jd.issues;
    if (_qaActiveTab === 'sprint') {
      // Show non-done issues (active sprint view)
      issues = issues.filter(i => i.statusCat !== 'Done');
      if (titleEl) titleEl.textContent = activeSprint ? `${activeSprint.name} Issues` : 'Active Sprint Issues';
    } else {
      // Backlog: to-do issues (not in progress/testing/done)
      issues = issues.filter(i => i.statusCat === 'To Do');
      if (titleEl) titleEl.textContent = 'Backlog';
    }

    if (typeFilter     !== 'all') issues = issues.filter(i => i.type     === typeFilter);
    if (statusFilter   !== 'all') issues = issues.filter(i => i.status   === statusFilter);
    if (priorityFilter !== 'all') issues = issues.filter(i => i.priority === priorityFilter);
    if (assigneeFilter !== 'all') issues = issues.filter(i => (i.assignee||'Unassigned') === assigneeFilter);
    if (searchVal) issues = issues.filter(i =>
      i.key.toLowerCase().includes(searchVal) ||
      i.summary.toLowerCase().includes(searchVal) ||
      (i.assignee||'').toLowerCase().includes(searchVal)
    );

    // Sort by updated desc
    issues = [...issues].sort((a, b) =>
      (b.updated||'').localeCompare(a.updated||'')
    );

    if (countEl) countEl.textContent = `${issues.length} issue${issues.length !== 1 ? 's' : ''}`;

    if (!issues.length) {
      tbody.innerHTML = '<tr><td colspan="8" class="empty-row">No issues match the filter</td></tr>';
      return;
    }

    const priorityIcon = { Highest:'🔴', High:'🟠', Medium:'🟡', Low:'🔵', Lowest:'⚪' };
    const typeColors   = { Bug:'red', Story:'blue', Task:'teal', 'Sub-task':'muted' };

    const statusCls = (s, cat) => {
      if (cat === 'Done') return 'green';
      if (/test|qa/i.test(s))    return 'teal';
      if (/progress/i.test(s))   return 'amber';
      return 'muted';
    };

    tbody.innerHTML = issues.map(issue => {
      const branches  = branchMap[issue.key] || [];
      const branchEl  = branches.length
        ? `<span class="badge teal" style="font-size:10px" title="${escHtml(branches.join(', '))}">✓ ${branches.length}</span>`
        : '<span style="color:var(--text-muted);font-size:11px">—</span>';
      const jiraUrl   = `${jd.baseUrl}/browse/${issue.key}`;
      const sCls      = statusCls(issue.status, issue.statusCat);
      const tCls      = typeColors[issue.type] || 'muted';
      const icon      = priorityIcon[issue.priority] || '•';

      return `<tr>
        <td><a href="${jiraUrl}" target="_blank" rel="noopener" class="jira-key">${escHtml(issue.key)}</a></td>
        <td style="max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${escHtml(issue.summary)}">${escHtml(issue.summary)}</td>
        <td><span class="badge ${tCls}" style="font-size:10px">${escHtml(issue.type)}</span></td>
        <td><span class="badge ${sCls}" style="font-size:10px">${escHtml(issue.status)}</span></td>
        <td style="font-size:12px">${icon} ${escHtml(issue.priority||'—')}</td>
        <td style="font-size:12px">${escHtml(issue.assignee||'Unassigned')}</td>
        <td class="mono" style="font-size:11px;color:var(--text-muted)">${issue.updated||'—'}</td>
        <td style="text-align:center">${branchEl}</td>
      </tr>`;
    }).join('');
  }

  // Wire QA filters
  ['qa-type-filter','qa-status-filter','qa-priority-filter','qa-assignee-filter'].forEach(id => {
    document.getElementById(id)?.addEventListener('change', renderQATable);
  });
  document.getElementById('qa-search')?.addEventListener('input', renderQATable);

  // Wire QA board tabs
  document.querySelectorAll('.qa-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.qa-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _qaActiveTab = btn.dataset.tab;
      renderQATable();
    });
  });

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

    // Azure — from AZURE_DATA (populated by fetch-azure-data.py / GitHub Actions)
    renderAzure();

    // Jira QA — from JIRA_DATA (populated by fetch-jira-data.py / GitHub Actions)
    renderQA();
  }

  renderAll();

})();
