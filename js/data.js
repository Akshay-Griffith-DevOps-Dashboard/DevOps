/**
 * data.js — Data for Griffith DevOps Dashboard
 *
 * LIVE_DATA: fetched 2026-10-05 from griffith--sit.sandbox.my.salesforce.com
 *            via Client Credentials OAuth flow (client_credentials grant).
 *            sf-api.js refreshes this at runtime when the org is reachable;
 *            these values are the last-known snapshot used as initial state.
 *
 * MOCK_DATA: Azure DevOps data (no PAT configured yet).
 */

// ── Live SIT Sandbox data (fetched 2026-10-05) ────────────────────────────
const LIVE_DATA = {
  org: {
    name: 'Griffith SIT',
    instanceUrl: 'https://griffith--sit.sandbox.my.salesforce.com',
    orgId: '00DOg000003NRdi',
    environment: 'SIT Sandbox',
    fetchedAt: '2026-10-05',
  },

  /* Org limits — from /services/data/v60.0/limits */
  limits: {
    DailyApiRequests:         { Max: 5000000,  Remaining: 4999886 },  // 114 used = 0.002%
    DailyAsyncApexExecutions: { Max: 250000,   Remaining: 249986  },  // 14 used
    DailyBulkApiBatches:      { Max: 15000,    Remaining: 15000   },
    DataStorageMB:            { Max: 5120,     Remaining: 3987    },  // 1133 MB used = 22%
    FileStorageMB:            { Max: 332440,   Remaining: 331374  },  // 1066 MB used = 0.3%
    SingleEmail:              { Max: 5000,     Remaining: 5000    },
    HourlyTimeBasedWorkflow:  { Max: 1000,     Remaining: 1000    },
  },

  /* Metadata counts */
  metadata: {
    activeApexClasses:   4224,
    activeApexTriggers:  158,
    activeFlows:         217,   // FlowDefinitionView WHERE ActiveVersionId != null
  },

  /* Scheduled jobs summary */
  scheduledJobs: {
    total:    20,
    waiting:  16,   // 16 in WAITING state (healthy)
    complete: 3,
    acquired: 1,    // BatchDocgenProcessingCronJob — ACQUIRED (running)
    jobs: [
      { name: 'BatchDocgenProcessingCronJob',                        state: 'ACQUIRED',  next: '2026-09-30T02:51:00Z' },
      { name: 'DC.TELEMETRY',                                        state: 'WAITING',   next: '2026-10-05T06:44:00Z' },
      { name: 'Privacy Center Audit',                                state: 'WAITING',   next: '2026-10-05T07:00:00Z' },
      { name: 'Metalytics Dataflow Runner',                          state: 'WAITING',   next: '2026-10-05T07:09:00Z' },
      { name: 'MciDashboardUpdateJobType',                           state: 'WAITING',   next: '2026-10-05T07:30:00Z' },
      { name: 'After_Create_Update_Person_Employment_Schedule_Flow', state: 'WAITING',   next: '2026-10-05T20:00:00Z' },
      { name: 'After_Create_Update_Constituent_Role_Schedule_Flow',  state: 'WAITING',   next: '2026-10-05T21:00:00Z' },
      { name: 'DC.LICENSE',                                          state: 'WAITING',   next: '2026-10-06T00:00:00Z' },
      { name: 'CommIncrementalSitemapJob (ascend Portal)',            state: 'WAITING',   next: '2026-10-06T00:45:00Z' },
      { name: 'SmartDigestJob',                                      state: 'WAITING',   next: '2026-10-05T17:00:00Z' },
    ],
  },

  /* User licences */
  userLicences: [
    { type: 'Salesforce',                      total: 140,  used: 133 },
    { type: 'Cloud Integration User',          total: 1,    used: 1   },
    { type: 'Salesforce Integration',          total: 5,    used: 2   },
    { type: 'Guest User License',              total: 25,   used: 4   },
    { type: 'Analytics Cloud Integration',     total: 2,    used: 2   },
    { type: 'Sales Insights Integration',      total: 1,    used: 1   },
    { type: 'Chatter Free',                    total: 5000, used: 0   },
    { type: 'Identity',                        total: 170,  used: 0   },
  ],

  /* Active users (top 20, sorted by LastLoginDate DESC) */
  users: [
    { initials: 'DU', name: 'Dashboard User',          username: 'akshay.kumar@griffith.edu.au.dashboard', userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-10-05', loginClass: 'recent' },
    { initials: 'KU', name: 'Kaviya UC',                username: 'k.uc@griffith.edu.au.sit',               userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-10-05', loginClass: 'recent' },
    { initials: 'AK', name: 'Akshay Kumar',             username: 'akshay.kumar@griffith.edu.au.sit',       userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-10-05', loginClass: 'recent' },
    { initials: 'SD', name: 'Sagar Dey',                username: 's.dey@griffith.edu.au.sit',              userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-10-02', loginClass: 'recent' },
    { initials: 'DU', name: 'Deployment User',          username: 'deploymentuser@griffith.edu.au.sit',     userType: 'Standard',         profile: 'Gearset Integration Administrator', lastLogin: '2026-10-01', loginClass: 'recent' },
    { initials: 'RA', name: 'Rahul Ahuja',              username: 'r.ahuja@griffith.edu.au.sit',            userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-10-01', loginClass: 'recent' },
    { initials: 'SH', name: 'Sudaif Haider',            username: 's.haider@griffith.edu.au.sit',           userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-09-28', loginClass: 'recent' },
    { initials: 'AS', name: 'Amit Sood',                username: 'a.sood@griffith.edu.au.sit',             userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-09-22', loginClass: 'recent' },
    { initials: 'JF', name: 'Jeremy Fahey',             username: 'j.fahey@griffith.edu.au.sit',            userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-09-22', loginClass: 'recent' },
    { initials: 'HM', name: 'Heidi McKellar',           username: 'h.mckellar@griffith.edu.au.sit',         userType: 'Standard',         profile: 'System Administrator',           lastLogin: '2026-09-22', loginClass: 'recent' },
    { initials: 'GI', name: 'Gearset Integration User', username: 'gearset@griffith.edu.au.sit',            userType: 'Standard',         profile: 'System Administrator',           lastLogin: null,         loginClass: 'never'  },
    { initials: 'GU', name: 'ascend Portal Guest',      username: 'ascend_portal@...force.com.sit',         userType: 'Guest',            profile: 'ascend Portal Profile',          lastLogin: null,         loginClass: 'never'  },
    { initials: 'PV', name: 'Patricia Villalva',        username: 'p.villalva@griffith.edu.au.sit',         userType: 'Standard',         profile: 'System Administrator',           lastLogin: null,         loginClass: 'never'  },
    { initials: 'DM', name: 'Data Migration User',      username: 'datamigration@griffith.edu.au.sit',      userType: 'Standard',         profile: 'GU Integration',                 lastLogin: null,         loginClass: 'never'  },
    { initials: 'SY', name: 'System',                   username: 'automatedcase@...ext',                   userType: 'AutomatedProcess', profile: null,                             lastLogin: null,         loginClass: 'never'  },
    { initials: 'II', name: 'Insights Integration',     username: 'insightsintegration@...ext',             userType: 'Standard',         profile: 'Sales Insights Integration User', lastLogin: null,        loginClass: 'never'  },
    { initials: 'AI', name: 'Azure Integration User',   username: 'azureintegration@griffith.edu.au.sit',   userType: 'Standard',         profile: 'GU Integration',                 lastLogin: null,         loginClass: 'never'  },
    { initials: 'DL', name: 'Damon McLellan',           username: 'd.mclellan@griffith.edu.au.sit',         userType: 'Standard',         profile: 'GU Base Profile',                lastLogin: null,         loginClass: 'never'  },
    { initials: 'SU', name: 'Security User',            username: 'insightssecurity@...com',                userType: 'Standard',         profile: 'Analytics Cloud Security User',   lastLogin: null,         loginClass: 'never'  },
    { initials: 'IU', name: 'Integration User',         username: 'integration@...com',                     userType: 'Standard',         profile: 'Analytics Cloud Integration User', lastLogin: null,        loginClass: 'never'  },
  ],

  /* Recent deployments from Tooling API */
  sfDeployments: [
    { id: '0AfOg000006bf8nKAA', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 0, errors: 0, status: 'Succeeded', startDate: '2026-10-01T14:30:50Z', durationSec: 0  },
    { id: '0AfOg000006bM1KKAU', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 0, errors: 0, status: 'Succeeded', startDate: '2026-10-01T07:47:19Z', durationSec: 0  },
    { id: '0AfOg000006aNSVKA2', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 1, errors: 0, status: 'Succeeded', startDate: '2026-09-30T07:34:28Z', durationSec: 2  },
    { id: '0AfOg000006aCiLKAU', deployedBy: 'Deployment User', checkOnly: false, componentsDeployed: 5, errors: 0, status: 'Succeeded', startDate: '2026-09-30T01:23:12Z', durationSec: 63 },
    { id: '0AfOg000006a7QvKAI', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 5, errors: 0, status: 'Succeeded', startDate: '2026-09-29T13:31:34Z', durationSec: 48 },
    { id: '0AfOg000006a5grKAA', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 3, errors: 0, status: 'Succeeded', startDate: '2026-09-29T11:21:43Z', durationSec: 3  },
    { id: '0AfOg000006a4rFKAQ', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 0, errors: 0, status: 'Succeeded', startDate: '2026-09-29T10:13:09Z', durationSec: 1  },
    { id: '0AfOg000006ZynRKAS', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 3, errors: 0, status: 'Succeeded', startDate: '2026-09-29T05:08:29Z', durationSec: 50 },
    { id: '0AfOg000006ZVDZKA4', deployedBy: 'Deployment User', checkOnly: false, componentsDeployed: 1, errors: 0, status: 'Succeeded', startDate: '2026-09-25T12:44:35Z', durationSec: 6  },
    { id: '0AfOg000006ZTAAKA4', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 1, errors: 0, status: 'Succeeded', startDate: '2026-09-25T09:13:46Z', durationSec: 7  },
    { id: '0AfOg000006ZQXFKA4', deployedBy: 'Deployment User', checkOnly: false, componentsDeployed: 1, errors: 0, status: 'Succeeded', startDate: '2026-09-25T07:18:40Z', durationSec: 16 },
    { id: '0AfOg000006ZQDtKAO', deployedBy: 'Deployment User', checkOnly: false, componentsDeployed: 1, errors: 0, status: 'Succeeded', startDate: '2026-09-25T07:15:20Z', durationSec: 3  },
    { id: '0AfOg000006ZF8nKAG', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 1, errors: 0, status: 'Succeeded', startDate: '2026-09-24T13:20:51Z', durationSec: 5  },
    { id: '0AfOg000006ZEW6KAO', deployedBy: 'Deployment User', checkOnly: true,  componentsDeployed: 1, errors: 0, status: 'Succeeded', startDate: '2026-09-24T11:31:59Z', durationSec: 23 },
    { id: '0AfOg000006Z0RVKA0', deployedBy: 'Deployment User', checkOnly: false, componentsDeployed: 6, errors: 0, status: 'Succeeded', startDate: '2026-09-24T01:53:06Z', durationSec: 30 },
  ],
};


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

// ── Azure DevOps live data (fetched 2026-10-05) ─────────────────────
const AZURE_DATA = {
  org:     'griffith-SalesforceCRM',
  project: 'RSDF-SalesforcePlatform',
  fetchedAt: '2026-10-05',

  repos: [
    {
        "id": "1d29a928-aee1-4b76-8e1b-d53000307df3",
        "name": "RSDF-SalesforcePlatform",
        "defaultBranch": "main",
        "remoteUrl": "https://griffith-SalesforceCRM@dev.azure.com/griffith-SalesforceCRM/RSDF-SalesforcePlatform/_git/RSDF-SalesforcePlatform"
    }
],

  branches: [],

  pullRequests: [
    {
        "id": 9347,
        "title": "SOPS-156",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-156_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-05",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9346,
        "title": "bugFix-SOPS-195",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/bugFix-SOPS-195_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-05",
        "closedDate": null,
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9345,
        "title": "Feature-SOPS-73_2",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_2_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-01",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9344,
        "title": "Feature-SOPS-73_2",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_2_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-01",
        "closedDate": "2026-10-01",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9343,
        "title": "Feature-SOPS-73_2",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-73_2",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-01",
        "closedDate": "2026-10-01",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9342,
        "title": "Feature-SOPS-73_2",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_2_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-01",
        "closedDate": null,
        "reviewers": [
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9341,
        "title": "Feature-SOPS-73_2",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-73_2",
        "targetBranch": "main",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-01",
        "closedDate": "2026-10-01",
        "reviewers": [
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9340,
        "title": "SOPS-73-Defect-209",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_1_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-01",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9339,
        "title": "SOPS-73-Defect-209",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_1_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-01",
        "closedDate": "2026-10-01",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9338,
        "title": "SOPS-73-Defect-209",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-73_1",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-01",
        "closedDate": "2026-10-01",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9337,
        "title": "Sync: SOPS 96",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-01",
        "closedDate": null,
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9336,
        "title": "feature-sops-104",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-sops-104_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-30",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "conflicts",
        "approved": false
    },
    {
        "id": 9335,
        "title": "Update designation sharing rules for DevMerge deploy",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-30",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9334,
        "title": "Update designation sharing rules for DevMerge deploy",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-73",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-09-30",
        "closedDate": "2026-09-30",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9333,
        "title": "feature-sops-104",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-sops-104_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-30",
        "closedDate": "2026-09-30",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9331,
        "title": "SOPS 199",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-199",
        "targetBranch": "gs-pipeline/SOPS-199_-_sit",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9330,
        "title": "SOPS-156",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-156_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-29",
        "closedDate": "2026-10-05",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9329,
        "title": "Remove view roles from 3 PS",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-156_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9328,
        "title": "Remove view roles from 3 PS",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-156",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9327,
        "title": "Update ucinn_ascendv2__Designation__c.sharingRules-meta.xml",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-29",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9326,
        "title": "Update ucinn_ascendv2__Designation__c.sharingRules-meta.xml",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9325,
        "title": "Update ucinn_ascendv2__Designation__c.sharingRules-meta.xml",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-73",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9324,
        "title": "Commit: SOPS-199, added new list view and updated nebula logger error handling",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-199_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9323,
        "title": "Commit: SOPS-199, added new list view and updated nebula logger error handling",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-199",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9322,
        "title": "Commit: SOPS-199 GU_PTAT_Alert_Email__mdt page layout",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-199_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9321,
        "title": "Commit: SOPS-199 GU_PTAT_Alert_Email__mdt page layout",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-199",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9320,
        "title": "SOPS 199",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-199_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-30",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9319,
        "title": "SOPS 199",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-199_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9318,
        "title": "SOPS 199",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-199",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-29",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9317,
        "title": "SOPS 140",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-28",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9316,
        "title": "SOPS 140",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS140",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-28",
        "closedDate": "2026-09-28",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9315,
        "title": "SOPS 140",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-28",
        "closedDate": "2026-09-28",
        "reviewers": [
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9314,
        "title": "SOPS 140",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS140",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-28",
        "closedDate": "2026-09-28",
        "reviewers": [
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9313,
        "title": "SOPS 199",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-199_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-28",
        "closedDate": "2026-09-29",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9312,
        "title": "SOPS 199",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-199",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-28",
        "closedDate": "2026-09-28",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9311,
        "title": "Updates for SOPS-199",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-199_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-28",
        "closedDate": "2026-09-28",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9310,
        "title": "Updates for SOPS-199",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-199",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-28",
        "closedDate": "2026-09-28",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9309,
        "title": "Commit: Fix for City, State, Ascend Id",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-25",
        "closedDate": "2026-09-25",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9308,
        "title": "Commit: Fix for City, State, Ascend Id",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-25",
        "closedDate": "2026-09-25",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9307,
        "title": "Commit: Fix for City, State, Ascend Id",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-96",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-25",
        "closedDate": "2026-09-25",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9306,
        "title": "SOPS-155_154",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-155_154_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9305,
        "title": "SOPS_103",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-103_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9304,
        "title": "feature-SOPS-89",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-89_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9303,
        "title": "feature-SOPS-33PermissionSet",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-33PermissionSet_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9302,
        "title": "SOPS-33",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-33New_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9301,
        "title": "feature-SOPS-35",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-35_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9300,
        "title": "feature-SOPS-28",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-28_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9299,
        "title": "feature-SOPS-37",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-37_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9298,
        "title": "Feature-SOPS-101",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-101_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9297,
        "title": "feature-SOPS-159",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-159_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-25",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    }
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
