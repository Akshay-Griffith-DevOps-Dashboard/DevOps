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

// ── Jira live data (fetched 2026-10-07 00:23 UTC) ────────────────────────────
const JIRA_DATA = {
  project:   'SOPS',
  baseUrl:   'https://griffith.atlassian.net',
  fetchedAt: '2026-10-07 00:23 UTC',

  sprints: [
    {
        "id": 9717,
        "name": "SOPS Sprint 1",
        "state": "closed",
        "startDate": "2026-08-02",
        "endDate": "2026-08-16",
        "goal": ""
    },
    {
        "id": 9758,
        "name": "SOPS Sprint 2",
        "state": "closed",
        "startDate": "2026-08-16",
        "endDate": "2026-08-30",
        "goal": ""
    },
    {
        "id": 9759,
        "name": "SOPS Sprint 3",
        "state": "closed",
        "startDate": "2026-08-30",
        "endDate": "2026-09-13",
        "goal": ""
    },
    {
        "id": 9810,
        "name": "SOPS Sprint 4",
        "state": "closed",
        "startDate": "2026-09-14",
        "endDate": "2026-09-27",
        "goal": ""
    },
    {
        "id": 9811,
        "name": "SOPS Sprint 5",
        "state": "active",
        "startDate": "2026-10-05",
        "endDate": "2026-10-11",
        "goal": ""
    }
],

  issueTypes: [
    "Bug",
    "Epic",
    "Story",
    "Sub-task",
    "Task"
],

  statuses: [
    "ASSUMPTIONS",
    "BLOCKED (Env Alignment)",
    "Blocked",
    "DECISIONS",
    "DEPENDENCIES",
    "Discovery & Refinement",
    "Done",
    "IN QA",
    "IN SIT",
    "IN UAT",
    "ISSUES",
    "In DEV",
    "In Progress",
    "MERGE",
    "Monitor",
    "NOT REQUIRED",
    "READY FOR RELEASE",
    "READY FOR SIT",
    "READY FOR UAT",
    "Ready For Merge",
    "Ready for DEV",
    "Ready for QA",
    "Review & Approval",
    "Risks",
    "To Do"
],

  issues: [
    {
        "key": "SOPS-186",
        "summary": "Regression Test Suite : Future Student Module",
        "type": "Story",
        "status": "Blocked",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-18",
        "updated": "2026-10-07",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-234",
        "summary": "'GU_Base_Ascend' permission set is configured with 'Salesforce' license",
        "type": "Bug",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Kaviya UC",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [
            "RAC:Coding/Logic_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-209",
        "summary": "Sharing Rule of Designation & Constituent Role Objs are still shared with Advancement Operations Group in SIT ",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "High",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-29",
        "updated": "2026-10-06",
        "labels": [
            "RAC:Deployment_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-202",
        "summary": "[UAT|SIT] Automation/ Batch process is not triggering and updating the status as 'Reviewed', when Payment Amount = Gift ",
        "type": "Bug",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "High",
        "assignee": "Sudaif Haider",
        "reporter": "Kaviya UC",
        "created": "2026-09-28",
        "updated": "2026-10-06",
        "labels": [
            "RAC:Coding/Logic_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-197",
        "summary": "'Ascend ID', 'Mailing State' and 'Mailing City' fields are mapped incorrectly in the Account Search Layout ",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-25",
        "updated": "2026-10-06",
        "labels": [
            "RAC:Coding/Logic_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-108",
        "summary": "[SIT| Org Refresh| Smoke Testing] EDO is not able to create New Organisation (Account)/ Person Account Record",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-10",
        "updated": "2026-10-06",
        "labels": [
            "RAC:Config_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-192",
        "summary": "[SIT - Fund Raising Activity] EDO is not able to create 'Organisation Account' with multiple modal steps to collect the ",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "High",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-21",
        "updated": "2026-10-06",
        "labels": [
            "RAC:Config_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-193",
        "summary": "'Deployment user' is assigned with incorrect profile and permission sets.",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-22",
        "updated": "2026-10-06",
        "labels": [
            "RAC:Config_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-195",
        "summary": "Ascend Portal Profile : Incorrect FLS for the below mentioned object",
        "type": "Bug",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "High",
        "assignee": "Sudaif Haider",
        "reporter": "Kaviya UC",
        "created": "2026-09-22",
        "updated": "2026-10-06",
        "labels": [
            "RAC:Config_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-160",
        "summary": "Permission Set Remediation : Rationalise redundant GU_ascend permission sets",
        "type": "Story",
        "status": "IN SIT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-156",
        "summary": "Permission Set Remediation : Remove view role hierarchy from listed permission sets",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-233",
        "summary": "QA: Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-214",
        "summary": "QA: Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-30",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-104",
        "summary": "Permission Set Remediation : Make API-enabled permission sets API Only",
        "type": "Story",
        "status": "IN SIT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Amit Sood",
        "created": "2026-09-10",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-96",
        "summary": "Enable person/alumni search by additional identifiers (email, GU ID etc .) in Global Search Layout",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Asra Khan",
        "created": "2026-09-03",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-87",
        "summary": "Sharing Rules Remediation - Include Student Recruitment Opportunity in the Advancement sharing rule",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-01",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-90",
        "summary": "Sharing Rules Remediation - Review Advancement Ops sharing rule on Person Education",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-01",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-149",
        "summary": "OWD Remediation :  Restrict Internal OWD on STG Staging Objects from Public Read to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sagar Dey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-143",
        "summary": "OWD Remediation :  Change Account OWD from Public Read to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-231",
        "summary": "Remediation Scope",
        "type": "Task",
        "status": "Risks",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Frank Nigro",
        "reporter": "Frank Nigro",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-232",
        "summary": "CO Approval",
        "type": "Task",
        "status": "Risks",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Frank Nigro",
        "reporter": "Frank Nigro",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-77",
        "summary": "Monitor - Identification of Regression Testing Scope",
        "type": "Task",
        "status": "Monitor",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Frank Nigro",
        "created": "2026-08-28",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-63",
        "summary": "DAP Connection",
        "type": "Task",
        "status": "DEPENDENCIES",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Frank Nigro",
        "created": "2026-08-25",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-204",
        "summary": "DS Guidance on Strategic Integration & Data Architecture",
        "type": "Task",
        "status": "ISSUES",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Frank Nigro",
        "created": "2026-09-29",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-99",
        "summary": "Monitor - GU BAU Team",
        "type": "Task",
        "status": "Monitor",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Frank Nigro",
        "created": "2026-09-04",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-205",
        "summary": "Cost Model \\ Projections (D360)",
        "type": "Task",
        "status": "Risks",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Frank Nigro",
        "created": "2026-09-29",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-79",
        "summary": "Issue - Single point contact slowing down information being provided",
        "type": "Task",
        "status": "Monitor",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Frank Nigro",
        "created": "2026-08-28",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-100",
        "summary": "Risk - Release Cadence for the DAP Project",
        "type": "Task",
        "status": "Monitor",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Frank Nigro",
        "created": "2026-09-07",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-207",
        "summary": "Alumni constituent role for Advancement education records",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-09-29",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-213",
        "summary": "Manage VIP / Key Stakeholder identification and event lists (Not required)",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-09-30",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-212",
        "summary": "Provide role-specific Person Account pages for Fundraising and Alumni Engagement",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-09-30",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-208",
        "summary": "Constituent Roles field lists only current roles",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-09-29",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-230",
        "summary": "Advancement future stories unprioritized backlog",
        "type": "Epic",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Frank Nigro",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-162",
        "summary": "Profile Remediation : Restrict System Administrator profile in production",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Vandana Bettens",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-228",
        "summary": "Gift-processing spike: batch-size regression and a size for bulk approval",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-229",
        "summary": "Gift processing: Generate and send end-of-day gift receipts from GEMS",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-224",
        "summary": "Bulk close and approve auto-matched payroll sessions by rule",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-05",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-155",
        "summary": "Permission Set Remediation : Remove Run Reports from GU Integration",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-154",
        "summary": "Permission Set Remediation : Remove Customize Dashboards and Customize Reports from GU Integration",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-220",
        "summary": "Student email keeps the alumnus personal address",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-05",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-227",
        "summary": "HomePages: Donor and Prospect Officers workspace and pipeline dashboards",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-222",
        "summary": "HomePages: Gift-administration workspace and pipeline dashboards",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-05",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-37",
        "summary": "Role Hierarchy Remediation - Realign 'Supervisor' and 'Agent' roles",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Amit Sood",
        "created": "2026-08-12",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-141",
        "summary": "OWD Remediation :  Change Individual Object OWD from ReadWrite to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-142",
        "summary": "OWD Remediation :  Change Messaging Session and Messaging End User OWD from ReadWrite to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-144",
        "summary": "OWD Remediation :  Change Case OWD from Public Read to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-146",
        "summary": "OWD Remediation :  Change Contact OWD from Public Read to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-145",
        "summary": "OWD Remediation :  Change Lead OWD from ReadWriteTransfer to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-226",
        "summary": "VIP Modelling and Design",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-06",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-140",
        "summary": "OWD Remediation :  Audit and Restrict Access to Dupcheck and OB_Archiver Objects via Permission Sets",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-139",
        "summary": "OWD Remediation :  Restrict External & Internal OWD on Contact Point Social to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-148",
        "summary": "OWD Remediation :  Audit and Enforce Private/Unlisted Type on Sensitive Chatter Groups",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sagar Dey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-163",
        "summary": "Profile Remediation : Delete unused custom profiles in production",
        "type": "Story",
        "status": "In DEV",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-06",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-225",
        "summary": "Linkdein Sales navigator on the person account record",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-05",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-150",
        "summary": "OWD Remediation :  Restrict Learner Program OWD to Private",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sagar Dey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-42",
        "summary": "Staging application records fail PTAT lookup \u2014 missing ProgramTermApplnTimeline",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Asra Khan",
        "created": "2026-08-17",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-23",
        "summary": "Data Archival and Retention Policies Configuration",
        "type": "Story",
        "status": "Review & Approval",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Giles Bill",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-10",
        "summary": "Session Settings Remediation",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-165",
        "summary": "Profile Remediation : Make API-enabled profiles API Only",
        "type": "Story",
        "status": "Review & Approval",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Benjamin Bates",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-159",
        "summary": "Permission Set Remediation : Review Splunk customize application access",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-158",
        "summary": "Permission Set Remediation : Reduce Modify All and View All on GU Integration",
        "type": "Story",
        "status": "Review & Approval",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-153",
        "summary": "Permission Set Remediation : Remove Bypass MFA For UI Logins from GU Integration",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sagar Dey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-14",
        "summary": "Platform Digital Certificate Upgrade",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-38",
        "summary": "Role Hierarchy Remediation - Realign 'Advancement Data Loader' role and access strategy",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-08-12",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-164",
        "summary": "Profile Remediation : Assign users to minimum access standard profiles",
        "type": "Story",
        "status": "Review & Approval",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-152",
        "summary": "Permission Set Remediation : Merge CICDPermissions and GUCICD",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sagar Dey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-101",
        "summary": "Sharing Rules Remediation - Restrict Customer Portal User write access on Account and Case",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-08",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-102",
        "summary": "Sharing Rules Remediation - Ascend portal user Read access on Account Object",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-08",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-181",
        "summary": "SIT Org Refresh - Smoke Testing",
        "type": "Story",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-18",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-21",
        "summary": "Copado Delivery Standardization",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-88",
        "summary": "Sharing Rules Remediation - Remediate the Read_Only_All_Opportunities sharing rule",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Amit Sood",
        "created": "2026-09-01",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-35",
        "summary": "Sharing Rules Remediation - Remove Ineffective Community_User_Access Sharing Rules",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Asra Khan",
        "created": "2026-08-07",
        "updated": "2026-10-05",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-9",
        "summary": "Role Hierarchy Remediation - Remove Redundant Roles",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [
            "Not_Required"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-170",
        "summary": "Salesforce Administrative Remediation \u2013 Lapsed Platform Actions",
        "type": "Epic",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Jeremy Fahey",
        "created": "2026-09-15",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-20",
        "summary": "Redundant Sandboxes Decommissioning",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-89",
        "summary": "Sharing Rules Remediation - Remove/replace the ineffective Campaign community sharing rule",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Amit Sood",
        "created": "2026-09-01",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-19",
        "summary": "Sandbox Obfuscation Scripts",
        "type": "Story",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-106",
        "summary": "Regression Test Suite : Advancement Module",
        "type": "Story",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-10",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-34",
        "summary": "Remediate ODIDataMigration Connected App Security Configuration",
        "type": "Story",
        "status": "Blocked",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Amit Sood",
        "created": "2026-08-06",
        "updated": "2026-10-05",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-28",
        "summary": "Sharing Rules Remediation -  Ascend Portal Guest User Profile Permissions and FLS",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Amit Sood",
        "created": "2026-08-04",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-86",
        "summary": "Gearset to ADO - Options paper with justifications",
        "type": "Story",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Giles Bill",
        "reporter": "Giles Bill",
        "created": "2026-09-01",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-166",
        "summary": "Profile Remediation : Configure IP range restrictions on internal user profiles",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-32",
        "summary": "Remediate Ascend Salesforce API Connected App Security Configuration",
        "type": "Story",
        "status": "Blocked",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Amit Sood",
        "created": "2026-08-06",
        "updated": "2026-10-05",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-103",
        "summary": "Sharing Rules Remediation - Delete unused Advancement_Public_Group",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Benjamin Bates",
        "reporter": "Amit Sood",
        "created": "2026-09-09",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-33",
        "summary": "Remediate Gearset Deploy Connected App Access Controls",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Amit Sood",
        "created": "2026-08-06",
        "updated": "2026-10-05",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-83",
        "summary": "Document Developer ways of working",
        "type": "Story",
        "status": "Review & Approval",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Giles Bill",
        "reporter": "Giles Bill",
        "created": "2026-08-31",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-24",
        "summary": "Advising on Archival Strategy",
        "type": "Story",
        "status": "Review & Approval",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Giles Bill",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-15",
        "summary": "Remediate Azure Integration App Connected App Security Configuration",
        "type": "Story",
        "status": "Blocked",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-05",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-73",
        "summary": "Sharing Rules Remediation - Replace Single-Member Public Group Sharing with Direct Role Sharing",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-08-27",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-157",
        "summary": "Permission Set Remediation : Reduce Modify All and View All on CICDPermissions and GUCICD",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-57",
        "summary": "CRM Data Storage Remediation",
        "type": "Story",
        "status": "Review & Approval",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Frank Nigro",
        "reporter": "Giles Bill",
        "created": "2026-08-21",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-31",
        "summary": "Migrate Legacy Plauti Named Credentials & Remove High-Risk Package Assets",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Amit Sood",
        "created": "2026-08-04",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-210",
        "summary": "QA: Test Scripts & Test Execition",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-29",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-223",
        "summary": "Update Global Search columns for Constituent Name and Organisation Name",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-05",
        "updated": "2026-10-05",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-69",
        "summary": "STG_application has errors: Duplicate PreferenceID detected in the same transaction",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Asra Khan",
        "reporter": "Mani Maran Mani",
        "created": "2026-08-26",
        "updated": "2026-10-02",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-36",
        "summary": "CRM QSES <-> SF Campaign ID mapping remediation",
        "type": "Story",
        "status": "Discovery & Refinement",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Giles Bill",
        "created": "2026-08-12",
        "updated": "2026-10-02",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-199",
        "summary": "Notify the PTAT load owner when a new Learning Program is created",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Asra Khan",
        "created": "2026-09-28",
        "updated": "2026-10-02",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-219",
        "summary": "QA : Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-01",
        "updated": "2026-10-01",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-217",
        "summary": "QA : Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-30",
        "updated": "2026-10-01",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-218",
        "summary": "Create Griffith DevOps Dashboard",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Akshay Kumar",
        "created": "2026-10-01",
        "updated": "2026-10-01",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    }
]
};

// ── Live SIT Sandbox data (fetched 2026-10-05) ────────────────────────────
const LIVE_DATA = {
  org: {
    name: 'Griffith SIT',
    instanceUrl: 'https://griffith--sit.sandbox.my.salesforce.com',
    orgId: '00DOg000003NRdi',
    environment: 'SIT Sandbox',
    fetchedAt: '2026-10-05 01:57:21 pm',
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

// ── Azure DevOps live data (fetched 2026-10-07 00:23 UTC) ─────────────────────
const AZURE_DATA = {
  org:     'griffith-SalesforceCRM',
  project: 'RSDF-SalesforcePlatform',
  fetchedAt: '2026-10-07 00:23 UTC',

  repos: [
    {
        "id": "1d29a928-aee1-4b76-8e1b-d53000307df3",
        "name": "RSDF-SalesforcePlatform",
        "defaultBranch": "main",
        "remoteUrl": "https://griffith-SalesforceCRM@dev.azure.com/griffith-SalesforceCRM/RSDF-SalesforcePlatform/_git/RSDF-SalesforcePlatform"
    }
],

  branches: [
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-101",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "91ebd2ab",
        "author": "Sagar Dey",
        "date": "2026-09-15",
        "comment": "Remove Designation sharing rules from Feature-SOPS-101."
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-102",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "b9886a3c",
        "author": "Sagar Dey",
        "date": "2026-09-23",
        "comment": "Feature-SOPS-102"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-103",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "cdb37a3e",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-24",
        "comment": "Delete Advancement_Public_Group.group-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-155_154",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "b479b45b",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-24",
        "comment": "Update GU_Integration.permissionset-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-156",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "79ee729c",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-29",
        "comment": "Remove view roles from 3 PS"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-73",
        "isDefault": false,
        "aheadCount": 4,
        "behindCount": 0,
        "commitId": "9cbceb6a",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-30",
        "comment": "Update designation sharing rules for DevMerge deploy"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-73_1",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "aab39cbc",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-01",
        "comment": "SOPS-73-Defect-209"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-73_2",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "d99a6493",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-01",
        "comment": "Feature-SOPS-73_2"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Main-State-1st-Sept-2026",
        "isDefault": true,
        "aheadCount": 0,
        "behindCount": 0,
        "commitId": "4eead63e",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-18",
        "comment": "Retrieved latest metadata from production and committing to main branch to sync "
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Merge-Backup-01st-Sept",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "a575c2d4",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "Metadata changes retrieved from Merge on 1st Sept 2026."
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "SIT-Backup-01st-Sept",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "32d32a84",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "SIT back up 1st Sept 2026, raise pull request to master branch back up to see ex"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "SIT-Backup-1-Sept-26",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "07704bdc",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "SIT back up before refreshing the sandbox"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "SOPS-73",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "3001f3a5",
        "author": "Sagar Dey",
        "date": "2026-09-10",
        "comment": "SOPS-73"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "SOPS-87",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "7b1009a5",
        "author": "Sagar Dey",
        "date": "2026-09-08",
        "comment": "SOPS 87(it has changes from SOPS 73)"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "SOPS-96",
        "isDefault": false,
        "aheadCount": 4,
        "behindCount": 0,
        "commitId": "f76afe1d",
        "author": "Rahul Ahuja",
        "date": "2026-09-25",
        "comment": "Commit: Fix for City, State, Ascend Id"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "SOPS-test",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "54fba640",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "Test validation and deployment"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Test-backup/merge-pre-refresh-27-08-26",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "831eb6c7",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-27",
        "comment": "Merge backup commit 27 Aug 2026"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "UAT-Backup-01st-Sept",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "ac5258ac",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "Metadata changes retrieved from UAT on 1st Sept 2026."
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "bugFix-SOPS-195",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "d4efffa3",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-05",
        "comment": "Bug Fix SOPS-195"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "compare/translation/Prod-main",
        "isDefault": true,
        "aheadCount": 0,
        "behindCount": 0,
        "commitId": "4eead63e",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-18",
        "comment": "Retrieved latest metadata from production and committing to main branch to sync "
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "devmerge",
        "isDefault": false,
        "aheadCount": 89,
        "behindCount": 0,
        "commitId": "0d36c1c5",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "comment": "Merged PR 9346: bugFix-SOPS-195"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-159",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "ef1829fb",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-18",
        "comment": "changes for SOPS-159"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-160",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "9c06edb3",
        "author": "Sudaif",
        "date": "2026-09-17",
        "comment": "SOPS-160 changes"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-28",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "e1c1bc74",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-02",
        "comment": "Ascend Portal Profile Update"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-33",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "7c6e2a0c",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "addded full profile"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-33-Profile",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "b6c9c300",
        "author": "Sudaif",
        "date": "2026-09-03",
        "comment": "Update Gearset Integration Administrator.profile-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-33New",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "2afe9910",
        "author": "Sudaif",
        "date": "2026-09-03",
        "comment": "SOPS-33"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-33PermissionSet",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "a99f8fd8",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-04",
        "comment": "SOPS-33 permission set"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-35",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "31a330de",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-02",
        "comment": "SOPS-35 changes"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-37",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "1e2d4329",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-02",
        "comment": "SOPS-27 and SOPS 38"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-38",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "3b32cbf4",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-02",
        "comment": "SOPS-37 and SOPS-38"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-38N",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "e31bff61",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-02",
        "comment": "changes for SOPS-37 and SOPS-38"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-88",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "f67d8f7c",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-08",
        "comment": "changes for SOPS-88"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-89",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "65a41b6b",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-08",
        "comment": "changes for SOPS-89"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-90",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "87029325",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-11",
        "comment": "Changes for SOPS-90"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS140",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "ff54d5c1",
        "author": "Sudaif",
        "date": "2026-09-28",
        "comment": "SOPS 140"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-sops-104",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "e71468fe",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-30",
        "comment": "changes for SOPS 104"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-test-Deploy-in-NewMerge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "5fc84d88",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-31",
        "comment": "test validation and deployment in newMerge sandbox"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/Akshay",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "1a1bcc5b",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-19",
        "comment": "test pipeline"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/SOPS-33",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "d7df1077",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-25",
        "comment": "sops 33 changes"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/TestFirstDeployment",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "a181981a",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-26",
        "comment": "test my first deployment in merge org"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/TestSecondDeploy",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "1e218d24",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-31",
        "comment": "test automated deployment with updated hooks in Azure DevOps"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/VSCodeValidation",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "c645bcd0",
        "author": "Akshay Kumar",
        "date": "2026-09-01",
        "comment": "test validation through IDE"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/check-prod-master-diff",
        "isDefault": true,
        "aheadCount": 0,
        "behindCount": 0,
        "commitId": "4eead63e",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-18",
        "comment": "Retrieved latest metadata from production and committing to main branch to sync "
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/dashboard",
        "isDefault": false,
        "aheadCount": 8,
        "behindCount": 0,
        "commitId": "4b54a4b3",
        "author": "Akshay Kumar",
        "date": "2026-09-29",
        "comment": "Updated griffith_template.html"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/sync-main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "9dd7eeca",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-09-04",
        "comment": "tets"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/test2",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "90d5a2a5",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-21",
        "comment": "mandatory message to test"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/testDeploy2",
        "isDefault": true,
        "aheadCount": 0,
        "behindCount": 0,
        "commitId": "4eead63e",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-18",
        "comment": "Retrieved latest metadata from production and committing to main branch to sync "
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/testdeploy",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "bf2c0280",
        "author": "Akshay Kumar",
        "date": "2026-08-25",
        "comment": "my first validation"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/testdeploy3",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "92c34841",
        "author": "Akshay Kumar",
        "date": "2026-08-25",
        "comment": "test validation inmerge"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/testinMerge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "ec6158ce",
        "author": "Akshay Kumar",
        "date": "2026-08-25",
        "comment": "test validation"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/testinSIT",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "03d25281",
        "author": "Akshay Kumar",
        "date": "2026-08-20",
        "comment": "test"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature/testinmerge2",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "0c422570",
        "author": "Akshay Kumar",
        "date": "2026-08-25",
        "comment": "Updated CustomLabels.labels-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-101_-_main",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "91ebd2ab",
        "author": "Sagar Dey",
        "date": "2026-09-15",
        "comment": "Remove Designation sharing rules from Feature-SOPS-101."
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-102_-_devmerge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "b9886a3c",
        "author": "Sagar Dey",
        "date": "2026-09-23",
        "comment": "Feature-SOPS-102"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-103_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "cdb37a3e",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-24",
        "comment": "Delete Advancement_Public_Group.group-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-155_154_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "b479b45b",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-24",
        "comment": "Update GU_Integration.permissionset-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-156_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "79ee729c",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-29",
        "comment": "Remove view roles from 3 PS"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-73_-_devmerge",
        "isDefault": false,
        "aheadCount": 4,
        "behindCount": 0,
        "commitId": "9cbceb6a",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-30",
        "comment": "Update designation sharing rules for DevMerge deploy"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-73_-_sit",
        "isDefault": false,
        "aheadCount": 3,
        "behindCount": 0,
        "commitId": "1ae8e375",
        "author": "Sagar-GitHub-18",
        "date": "2026-09-29",
        "comment": "Update ucinn_ascendv2__Designation__c.sharingRules-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-73_-_uat",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "483a768d",
        "author": "Sagar Dey",
        "date": "2026-09-11",
        "comment": "Feature-SOPS-73"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-73_1_-_sit",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "aab39cbc",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-01",
        "comment": "SOPS-73-Defect-209"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-73_2_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "d99a6493",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-01",
        "comment": "Feature-SOPS-73_2"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-73_2_-_sit",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "d99a6493",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-01",
        "comment": "Feature-SOPS-73_2"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/SOPS-73_-_devmerge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "3001f3a5",
        "author": "Sagar Dey",
        "date": "2026-09-10",
        "comment": "SOPS-73"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/SOPS-87_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "7b1009a5",
        "author": "Sagar Dey",
        "date": "2026-09-08",
        "comment": "SOPS 87(it has changes from SOPS 73)"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/SOPS-96_-_uat",
        "isDefault": false,
        "aheadCount": 4,
        "behindCount": 0,
        "commitId": "f76afe1d",
        "author": "Rahul Ahuja",
        "date": "2026-09-25",
        "comment": "Commit: Fix for City, State, Ascend Id"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/bugFix-SOPS-195_-_uat",
        "isDefault": false,
        "aheadCount": 23,
        "behindCount": 0,
        "commitId": "19c16796",
        "author": "Team user",
        "date": "2026-10-05",
        "comment": "Gearset: Semantic reverse merge of uat into gs-pipeline/bugFix-SOPS-195_-_uat"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-159_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "ef1829fb",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-18",
        "comment": "changes for SOPS-159"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-160",
        "isDefault": false,
        "aheadCount": 42,
        "behindCount": 0,
        "commitId": "625fdf71",
        "author": "Sudaif",
        "date": "2026-09-17",
        "comment": "SOPS-160"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-160_-_uat",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "9c06edb3",
        "author": "Sudaif",
        "date": "2026-09-17",
        "comment": "SOPS-160 changes"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-28_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "e1c1bc74",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-02",
        "comment": "Ascend Portal Profile Update"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-33-Profile_-_sit",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "dbb27745",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "Profile and permission set for SOPS-33"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-33New_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "2afe9910",
        "author": "Sudaif",
        "date": "2026-09-03",
        "comment": "SOPS-33"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-33PermissionSet_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "a99f8fd8",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-04",
        "comment": "SOPS-33 permission set"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-33_-_devmerge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "205fec67",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "Changes for SOPS-33."
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-33_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "205fec67",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-01",
        "comment": "Changes for SOPS-33."
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-35_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "31a330de",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-02",
        "comment": "SOPS-35 changes"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-37_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "1e2d4329",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-02",
        "comment": "SOPS-27 and SOPS 38"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-88_-_uat",
        "isDefault": false,
        "aheadCount": 17,
        "behindCount": 0,
        "commitId": "f974b913",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-09-25",
        "comment": "Gearset: Semantic reverse merge of branch uat into gs-pipeline/feature-SOPS-88_-"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-89_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "65a41b6b",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-08",
        "comment": "changes for SOPS-89"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-90_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "87029325",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-11",
        "comment": "Changes for SOPS-90"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS140_-_devmerge",
        "isDefault": false,
        "aheadCount": 66,
        "behindCount": 0,
        "commitId": "15024aa3",
        "author": "Team user",
        "date": "2026-09-28",
        "comment": "Gearset: Semantic reverse merge of devmerge into gs-pipeline/feature-SOPS140_-_d"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS140_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "ff54d5c1",
        "author": "Sudaif",
        "date": "2026-09-28",
        "comment": "SOPS 140"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-sops-104_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "e71468fe",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-09-30",
        "comment": "changes for SOPS 104"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-test-Deploy-in-NewMerge_-_sit",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "5fc84d88",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-31",
        "comment": "test validation and deployment in newMerge sandbox"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature/Akshay_-_merge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "1a1bcc5b",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-19",
        "comment": "test pipeline"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature/SOPS-33",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "fbf4ca2f",
        "author": "Sudaif",
        "date": "2026-08-25",
        "comment": "Create Gearset Integration Administrator.profile-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature/SOPS-33_-_merge",
        "isDefault": false,
        "aheadCount": 6,
        "behindCount": 0,
        "commitId": "fd0fe00d",
        "author": "Sudaif",
        "date": "2026-08-26",
        "comment": "Update Gearset Integration Administrator.profile-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature/TestFirstDeployment_-_merge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "a181981a",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-26",
        "comment": "test my first deployment in merge org"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature/test2_-_merge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "90d5a2a5",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-21",
        "comment": "mandatory message to test"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature/testdeploy2",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "7b61f7f1",
        "author": "Akshay Kumar",
        "date": "2026-08-25",
        "comment": "my first validation"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature/testdeploy_-_merge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "bf2c0280",
        "author": "Akshay Kumar",
        "date": "2026-08-25",
        "comment": "my first validation"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/main_-_devmerge",
        "isDefault": true,
        "aheadCount": 0,
        "behindCount": 0,
        "commitId": "4eead63e",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-18",
        "comment": "Retrieved latest metadata from production and committing to main branch to sync "
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/testprofile2_-_merge",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "5d8621fe",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-25",
        "comment": "test validation"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "main",
        "isDefault": true,
        "aheadCount": 0,
        "behindCount": 0,
        "commitId": "4eead63e",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-18",
        "comment": "Retrieved latest metadata from production and committing to main branch to sync "
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "merge",
        "isDefault": false,
        "aheadCount": 5,
        "behindCount": 0,
        "commitId": "96b5c753",
        "author": "Akshay Kumar",
        "date": "2026-08-31",
        "comment": "Merge pull request 9196 from gs-pipeline/feature/TestSecondDeploy_-_merge into m"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "merge-test-SS",
        "isDefault": false,
        "aheadCount": 0,
        "behindCount": 3,
        "commitId": "680255d5",
        "author": "Akshay Kumar",
        "date": "2026-08-12",
        "comment": "Added README.md"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "merge-test-Snapshot",
        "isDefault": false,
        "aheadCount": 0,
        "behindCount": 3,
        "commitId": "680255d5",
        "author": "Akshay Kumar",
        "date": "2026-08-12",
        "comment": "Added README.md"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "sit",
        "isDefault": false,
        "aheadCount": 54,
        "behindCount": 0,
        "commitId": "71e5f19d",
        "author": "Sudaif Haider",
        "date": "2026-10-06",
        "comment": "Merge pull request 9336 from gs-pipeline/feature-sops-104_-_sit into sit"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "testDevCommon1",
        "isDefault": false,
        "aheadCount": 0,
        "behindCount": 2,
        "commitId": "30394588",
        "author": "Akshay Kumar",
        "date": "2026-08-17",
        "comment": "initial commit"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "testFeature",
        "isDefault": true,
        "aheadCount": 0,
        "behindCount": 0,
        "commitId": "4eead63e",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-18",
        "comment": "Retrieved latest metadata from production and committing to main branch to sync "
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "testbranch",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 3,
        "commitId": "fa87eab7",
        "author": "Akshay Kumar",
        "date": "2026-08-12",
        "comment": "initial commit test"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "testfromGS",
        "isDefault": true,
        "aheadCount": 0,
        "behindCount": 0,
        "commitId": "4eead63e",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-18",
        "comment": "Retrieved latest metadata from production and committing to main branch to sync "
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "testmyprofile",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "9562b2a2",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-25",
        "comment": "test profile validation"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "testprofile2",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "5d8621fe",
        "author": "akshay.kumar@griffith.edu.au",
        "date": "2026-08-25",
        "comment": "test validation"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "uat",
        "isDefault": false,
        "aheadCount": 21,
        "behindCount": 0,
        "commitId": "6ba11f98",
        "author": "Akshay Kumar",
        "date": "2026-10-01",
        "comment": "Merge pull request 9290 from gs-pipeline/SOPS-96_-_uat into uat"
    }
],

  pullRequests: [
    {
        "id": 9350,
        "title": "feature-sops-104",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-sops-104_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-06",
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
        "id": 9349,
        "title": "bugFix-SOPS-195",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/bugFix-SOPS-195_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
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
        "id": 9348,
        "title": "bugFix-SOPS-195",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/bugFix-SOPS-195_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-05",
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
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/bugFix-SOPS-195_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-05",
        "closedDate": "2026-10-05",
        "reviewers": [
            "Amit Sood"
        ],
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
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-sops-104_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-30",
        "closedDate": "2026-10-06",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
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
            "Akshay Kumar",
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
    },
    {
        "id": 9296,
        "title": "SOPS_103",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-103_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-24",
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
        "id": 9295,
        "title": "SOPS_103",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-103_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-24",
        "closedDate": "2026-09-24",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9294,
        "title": "Delete Advancement_Public_Group.group-meta.xml",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-103",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-09-24",
        "closedDate": "2026-09-24",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9293,
        "title": "Update GU_Integration.permissionset-meta.xml",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-155_154_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-24",
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
        "id": 9292,
        "title": "Update GU_Integration.permissionset-meta.xml",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-155_154_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-24",
        "closedDate": "2026-09-24",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9291,
        "title": "Update GU_Integration.permissionset-meta.xml",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-155_154",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-09-24",
        "closedDate": "2026-09-24",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9290,
        "title": "SOPS 96",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-24",
        "closedDate": "2026-10-01",
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
        "id": 9289,
        "title": "Feature-SOPS-102",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-102_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-23",
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
        "id": 9288,
        "title": "Feature-SOPS-102",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-102",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9287,
        "title": "SOPS 96",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-24",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9286,
        "title": "SOPS 96",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
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
        "id": 9285,
        "title": "SOPS 96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-96",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9284,
        "title": "Updates for SOPS-96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
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
        "id": 9283,
        "title": "Updates for SOPS-96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-96",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9282,
        "title": "Feature SOPS 96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-96_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9281,
        "title": "Feature SOPS 96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-96",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9280,
        "title": "Feature SOPS 96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-96_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Giles Bill",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9279,
        "title": "Feature SOPS 96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-96",
        "targetBranch": "main",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9278,
        "title": "Revert 'Feature SOPS 96'",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-96_-_devmerge-revert-from-devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-23",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9277,
        "title": "Feature SOPS 96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-96_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-22",
        "closedDate": "2026-09-23",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9276,
        "title": "feature-SOPS-159",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-159_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-22",
        "closedDate": "2026-09-25",
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9275,
        "title": "Feature SOPS 96",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-96_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-21",
        "closedDate": "2026-09-22",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9274,
        "title": "Feature SOPS 96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-96",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-21",
        "closedDate": "2026-09-21",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9273,
        "title": "Feature SOPS 96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-96",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-21",
        "closedDate": "2026-09-21",
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
        "id": 9272,
        "title": "feature-SOPS-159",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-159_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-21",
        "closedDate": "2026-09-22",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9269,
        "title": "Feature-SOPS-101",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-101_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-18",
        "closedDate": "2026-09-25",
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9268,
        "title": "Feature SOPS 160",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-160_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-18",
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
        "id": 9267,
        "title": "Feature-SOPS-101",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-101_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-18",
        "closedDate": "2026-09-18",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9266,
        "title": "Feature SOPS 160",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-160_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-18",
        "closedDate": "2026-09-18",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9265,
        "title": "feature-SOPS-159",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-159_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-18",
        "closedDate": "2026-09-21",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9264,
        "title": "SOPS 87 and SOPS 73",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-87_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-18",
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
        "id": 9263,
        "title": "Feature SOPS 160",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-160_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-17",
        "closedDate": "2026-09-18",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9262,
        "title": "Feature SOPS 160",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-160",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-17",
        "closedDate": "2026-09-17",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9261,
        "title": "Feature SOPS 160",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-160",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-17",
        "closedDate": "2026-09-17",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9260,
        "title": "Feature SOPS 73",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-17",
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
        "id": 9259,
        "title": "SOPS-160",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-160_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-17",
        "closedDate": "2026-09-17",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9258,
        "title": "SOPS-160",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-160",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-17",
        "closedDate": "2026-09-17",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9257,
        "title": "feature-SOPS-90",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-90_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-16",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9256,
        "title": "Feature SOPS 101",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-101",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-09-15",
        "closedDate": "2026-09-15",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9255,
        "title": "Feature-SOPS-101",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-101_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-15",
        "closedDate": "2026-09-18",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9254,
        "title": "Feature-SOPS-101",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-101",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-09-15",
        "closedDate": "2026-09-15",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9253,
        "title": "feature-SOPS-90",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-90_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-15",
        "closedDate": "2026-09-16",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9252,
        "title": "Updates for SOPS-96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-96_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-15",
        "closedDate": "2026-09-21",
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
        "id": 9251,
        "title": "Updates for SOPS-96",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-96",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-09-15",
        "closedDate": "2026-09-15",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Sudaif Haider",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9250,
        "title": "feature-SOPS-90",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-90_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-09-11",
        "closedDate": "2026-09-15",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9249,
        "title": "SOPS 87 and SOPS 73",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-87_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-11",
        "closedDate": "2026-09-18",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9248,
        "title": "Feature SOPS 73",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-09-11",
        "closedDate": "2026-09-17",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    }
],

  commits: [
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "71e5f19d",
        "comment": "Merge pull request 9336 from gs-pipeline/feature-sops-104_-_sit into sit",
        "author": "Sudaif Haider",
        "date": "2026-10-06",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "f3d3a5b3",
        "comment": "Merge pull request 9336 from gs-pipeline/feature-sops-104_-_sit into sit",
        "author": "Sudaif Haider",
        "date": "2026-10-06",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "f2682869",
        "comment": "Gearset: Semantic reverse merge of branch sit into gs-pipeline/feature-sops-104_-_sit for pull reque",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-06",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "19c16796",
        "comment": "Gearset: Semantic reverse merge of uat into gs-pipeline/bugFix-SOPS-195_-_uat",
        "author": "Team user",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "6de0675a",
        "comment": "Merge pull request 9349 from gs-pipeline/bugFix-SOPS-195_-_uat into uat",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "83af35cc",
        "comment": "Merge pull request 9349 from gs-pipeline/bugFix-SOPS-195_-_uat into uat",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "7c143063",
        "comment": "Merged PR 9348: bugFix-SOPS-195",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "1d96285a",
        "comment": "Gearset: Semantic reverse merge of sit into gs-pipeline/bugFix-SOPS-195_-_sit",
        "author": "Team user",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "e28ca855",
        "comment": "Merge pull request 9348 from gs-pipeline/bugFix-SOPS-195_-_sit into sit",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "6d43c606",
        "comment": "Merge pull request 9348 from gs-pipeline/bugFix-SOPS-195_-_sit into sit",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "0d36c1c5",
        "comment": "Merged PR 9346: bugFix-SOPS-195",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "35fd56fa",
        "comment": "Merge pull request 9347 from gs-pipeline/Feature-SOPS-156_-_uat into uat",
        "author": "Akshay Kumar",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "b8bab3cd",
        "comment": "Merged PR 9330: SOPS-156",
        "author": "Akshay Kumar",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "1c32b37a",
        "comment": "Merge pull request 9346 from gs-pipeline/bugFix-SOPS-195_-_devmerge into devmerge",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "f0602a5e",
        "comment": "Gearset: Semantic reverse merge of devmerge into gs-pipeline/bugFix-SOPS-195_-_devmerge",
        "author": "Team user",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "faf9d871",
        "comment": "Merge pull request 9346 from gs-pipeline/bugFix-SOPS-195_-_devmerge into devmerge",
        "author": "Sudaif Haider",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "d4efffa3",
        "comment": "Bug Fix SOPS-195",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-05",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "afebeb1c",
        "comment": "Merge pull request 9345 from gs-pipeline/Feature-SOPS-73_2_-_sit into sit",
        "author": "Akshay Kumar",
        "date": "2026-10-01",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "974b355a",
        "comment": "Merged PR 9344: Feature-SOPS-73_2",
        "author": "Akshay Kumar",
        "date": "2026-10-01",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "d3d39144",
        "comment": "Merge pull request 9344 from gs-pipeline/Feature-SOPS-73_2_-_devmerge into devmerge",
        "author": "Akshay Kumar",
        "date": "2026-10-01",
        "branch": ""
    }
],

  tags: [],
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
