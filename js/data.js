/**
 * data.js — Mock/sample data for Griffith DevOps Dashboard
 *
 * Replace MOCK_DATA sections with real API calls (sf-api.js + azure-api.js)
 * once credentials are configured.
 */

const MOCK_DATA = {

  /* ── Salesforce Org Health ─────────────────────────── */
  sfOrgHealth: {
    instanceUrl: 'https://griffith.my.salesforce.com',
    orgName: 'Griffith University Production',
    apiLimits: {
      DailyApiRequests:           { Max: 5000000,  Remaining: 4927570 },
      DailyBulkApiRequests:       { Max: 10000,    Remaining: 9847 },
      DailyStreamingApiEvents:    { Max: 1000000,  Remaining: 998200 },
      DailyAsyncApexExecutions:   { Max: 250000,   Remaining: 218500 },
      ConcurrentLongRunningApex:  { Max: 10,       Remaining: 8 },
      DataStorageMB:              { Max: 10240,    Remaining: 5939 },    // 10GB / ~5.8GB remaining
      FileStorageMB:              { Max: 20480,    Remaining: 19379 },   // 20GB / ~1.1GB used
    },
    storageGB: {
      data: { used: 4.2,  total: 10  },
      file: { used: 1.1,  total: 20  },
      bigObjects: { used: 0.3, total: 10 },
    },
    apexGovernor: {
      soqlQueries:  { used: 78,   max: 100  },
      cpuTimePct:   32,
      heapSizePct:  12,
    },
    userLicences: [
      { type: 'Salesforce',             total: 250,   used: 218 },
      { type: 'Salesforce Platform',    total: 50,    used: 48  },
      { type: 'Communities (External)', total: 1000,  used: 412 },
      { type: 'API Only',               total: 10,    used: 6   },
    ],
    activeUsers30d: 183,
  },

  /* ── Salesforce Deployments ────────────────────────── */
  sfDeployments: [
    { component: 'AccountTrigger',         type: 'ApexTrigger',  deployedBy: 'j.smith',    env: 'Production', durationSec: 187, status: 'Succeeded', ts: new Date(Date.now() - 2*3600*1000) },
    { component: 'OpportunityFlow',        type: 'Flow',         deployedBy: 'a.jones',    env: 'Production', durationSec: 64,  status: 'Succeeded', ts: new Date(Date.now() - 5*3600*1000) },
    { component: 'LeadConvertPage',        type: 'LWC',          deployedBy: 'j.smith',    env: 'Production', durationSec: 312, status: 'Failed',    ts: new Date(Date.now() - 8*3600*1000) },
    { component: 'PricingCalc',            type: 'ApexClass',    deployedBy: 'm.chen',     env: 'Production', durationSec: 98,  status: 'Succeeded', ts: new Date(Date.now() - 24*3600*1000) },
    { component: 'CaseEmailHandler',       type: 'ApexClass',    deployedBy: 'm.chen',     env: 'Staging',    durationSec: 105, status: 'Succeeded', ts: new Date(Date.now() - 26*3600*1000) },
    { component: 'StudentEnrolmentFlow',   type: 'Flow',         deployedBy: 'a.jones',    env: 'Production', durationSec: 78,  status: 'Succeeded', ts: new Date(Date.now() - 30*3600*1000) },
    { component: 'ContactMergeBatch',      type: 'ApexClass',    deployedBy: 'l.nguyen',   env: 'Production', durationSec: 220, status: 'Succeeded', ts: new Date(Date.now() - 36*3600*1000) },
    { component: 'EnrolmentPageLayout',    type: 'Layout',       deployedBy: 'j.smith',    env: 'Production', durationSec: 22,  status: 'Succeeded', ts: new Date(Date.now() - 44*3600*1000) },
    { component: 'FeeCalculatorTest',      type: 'ApexClass',    deployedBy: 'm.chen',     env: 'Staging',    durationSec: 150, status: 'Failed',    ts: new Date(Date.now() - 48*3600*1000) },
    { component: 'ScholarshipProcess',     type: 'Flow',         deployedBy: 'a.jones',    env: 'Production', durationSec: 89,  status: 'Succeeded', ts: new Date(Date.now() - 54*3600*1000) },
    { component: 'AccountContactRole',     type: 'ApexTrigger',  deployedBy: 'l.nguyen',   env: 'Production', durationSec: 176, status: 'Succeeded', ts: new Date(Date.now() - 60*3600*1000) },
    { component: 'LibraryAccessBatch',     type: 'ApexClass',    deployedBy: 'j.smith',    env: 'Staging',    durationSec: 410, status: 'Failed',    ts: new Date(Date.now() - 72*3600*1000) },
  ],

  /* ── Azure DevOps Pipelines ────────────────────────── */
  azurePipelines: [
    { name: 'sf-deploy-prod',       branch: 'main',    triggeredBy: 'CI',       durationSec: 840,  status: 'succeeded', started: new Date(Date.now() - 14*60*1000) },
    { name: 'sf-validate-staging',  branch: 'develop', triggeredBy: 'j.smith',  durationSec: 1860, status: 'succeeded', started: new Date(Date.now() - 31*60*1000) },
    { name: 'sf-apex-tests',        branch: 'feature/case-handler', triggeredBy: 'm.chen', durationSec: null, status: 'running', started: new Date(Date.now() - 8*60*1000) },
    { name: 'integration-checks',   branch: 'develop', triggeredBy: 'CI',       durationSec: 540,  status: 'failed',    started: new Date(Date.now() - 2*3600*1000) },
    { name: 'sf-deploy-prod',       branch: 'main',    triggeredBy: 'a.jones',  durationSec: 780,  status: 'succeeded', started: new Date(Date.now() - 4*3600*1000) },
    { name: 'sf-apex-tests',        branch: 'develop', triggeredBy: 'CI',       durationSec: 1020, status: 'succeeded', started: new Date(Date.now() - 5*3600*1000) },
    { name: 'sf-package-build',     branch: 'main',    triggeredBy: 'l.nguyen', durationSec: 360,  status: 'succeeded', started: new Date(Date.now() - 6*3600*1000) },
    { name: 'sf-validate-staging',  branch: 'feature/enrolment', triggeredBy: 'CI', durationSec: 2100, status: 'succeeded', started: new Date(Date.now() - 8*3600*1000) },
    { name: 'integration-checks',   branch: 'develop', triggeredBy: 'CI',       durationSec: 600,  status: 'succeeded', started: new Date(Date.now() - 10*3600*1000) },
    { name: 'sf-deploy-prod',       branch: 'main',    triggeredBy: 'a.jones',  durationSec: 900,  status: 'succeeded', started: new Date(Date.now() - 12*3600*1000) },
    { name: 'sf-apex-tests',        branch: 'develop', triggeredBy: 'CI',       durationSec: 980,  status: 'failed',    started: new Date(Date.now() - 14*3600*1000) },
    { name: 'sf-package-build',     branch: 'feature/fees', triggeredBy: 'm.chen', durationSec: 400, status: 'succeeded', started: new Date(Date.now() - 16*3600*1000) },
  ],

  azureFailures: [
    { pipeline: 'integration-checks', reason: 'Connection timeout to Middleware API', when: '2h ago' },
    { pipeline: 'sf-apex-tests',      reason: 'Test class AssertionError: FeeCalcTest line 47', when: '14h ago' },
    { pipeline: 'LibraryAccessBatch', reason: 'SOQL 101 limit exceeded in batch context', when: '3d ago' },
  ],
};

/**
 * Compute pass rates per unique pipeline name
 */
function computePipelinePassRates(runs) {
  const map = {};
  runs.forEach(r => {
    if (!map[r.name]) map[r.name] = { passed: 0, total: 0 };
    map[r.name].total++;
    if (r.status === 'succeeded') map[r.name].passed++;
  });
  return Object.entries(map).map(([name, d]) => ({
    name,
    pct: Math.round((d.passed / d.total) * 100),
  })).sort((a, b) => a.pct - b.pct);
}
