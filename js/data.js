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

// ── Jira live data (fetched 2026-10-23 00:34 UTC) ────────────────────────────
const JIRA_DATA = {
  project:   'SOPS',
  baseUrl:   'https://griffith.atlassian.net',
  fetchedAt: '2026-10-23 00:34 UTC',

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
        "key": "SOPS-141",
        "summary": "OWD Remediation :  Change Individual Object OWD from ReadWrite to Private",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-23",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-163",
        "summary": "Profile Remediation : Delete unused custom profiles in production",
        "type": "Story",
        "status": "IN SIT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-22",
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
        "updated": "2026-10-22",
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
        "assignee": "Laura Coma",
        "reporter": "Asra Khan",
        "created": "2026-09-03",
        "updated": "2026-10-22",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
        "storyPoints": null
    },
    {
        "key": "SOPS-247",
        "summary": "[UAT] Search Layout field level inconsistencies",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Vandana Bettens",
        "created": "2026-10-20",
        "updated": "2026-10-22",
        "labels": [
            "SOPS_UAT"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-237",
        "summary": " Configure the Campus__c picklist field with standardized API names and labels on the LearningProgram and LearnerProgram",
        "type": "Story",
        "status": "In DEV",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sagar Dey",
        "reporter": "Sudaif Haider",
        "created": "2026-10-12",
        "updated": "2026-10-22",
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
        "assignee": "Sudaif Haider",
        "reporter": "Giles Bill",
        "created": "2026-08-21",
        "updated": "2026-10-22",
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
        "assignee": "Sudaif Haider",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-22",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-26",
        "summary": "Concurrency & Locking Safeguards",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-22",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-25",
        "summary": "Backup & Recovery Configuration",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Sudaif Haider",
        "reporter": "Amit Sood",
        "created": "2026-07-31",
        "updated": "2026-10-22",
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
        "updated": "2026-10-22",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-248",
        "summary": "Below mentioned custom profile are not deleted in SIT",
        "type": "Bug",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Amit Sood",
        "reporter": "Kaviya UC",
        "created": "2026-10-21",
        "updated": "2026-10-21",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-236",
        "summary": "AI Summary on the person account record",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-10-08",
        "updated": "2026-10-21",
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
        "assignee": "Frank Nigro",
        "reporter": "Frank Nigro",
        "created": "2026-09-29",
        "updated": "2026-10-20",
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
        "updated": "2026-10-20",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-140",
        "summary": "OWD Remediation :  Audit and Restrict Access to Dupcheck and OB_Archiver Objects via Permission Sets",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-19",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-242",
        "summary": "[SIT] Access and the 11 editable fields are not disabled for the mentioned profiles in SIT",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Highest",
        "assignee": "Sudaif Haider",
        "reporter": "Kaviya UC",
        "created": "2026-10-15",
        "updated": "2026-10-19",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-243",
        "summary": "QA : Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-15",
        "updated": "2026-10-19",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-185",
        "summary": "SIT Org Refresh - Smoke Testing : Payroll giving processing",
        "type": "Sub-task",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-09-18",
        "updated": "2026-10-19",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-202",
        "summary": "[UAT|SIT] Automation/ Batch process is not triggering and updating the status as 'Reviewed', when Payment Amount = Gift ",
        "type": "Bug",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "High",
        "assignee": "Akshay Kumar",
        "reporter": "Kaviya UC",
        "created": "2026-09-28",
        "updated": "2026-10-19",
        "labels": [
            "RAC:Coding/Logic_Issue"
        ],
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
        "updated": "2026-10-19",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-246",
        "summary": "[UAT] PRM filter not working as expected when searching Accounts.",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Akshay Kumar",
        "reporter": "Kaviya UC",
        "created": "2026-10-16",
        "updated": "2026-10-16",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-245",
        "summary": "QA : Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-15",
        "updated": "2026-10-15",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-241",
        "summary": "QA: Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-15",
        "updated": "2026-10-15",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-244",
        "summary": "QA : Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-15",
        "updated": "2026-10-15",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-145",
        "summary": "OWD Remediation :  Change Lead OWD from ReadWriteTransfer to Private",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-15",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-160",
        "summary": "Permission Set Remediation : Rationalise redundant GU_ascend permission sets",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-14",
        "labels": [
            "RAC:Config_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-219",
        "summary": "QA : Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-01",
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-234",
        "summary": "'GU_Base_Ascend' permission set is configured with 'Salesforce' license",
        "type": "Bug",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-06",
        "updated": "2026-10-14",
        "labels": [
            "RAC:Coding/Logic_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-150",
        "summary": "OWD Remediation :  Restrict Learner Program OWD to Private",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-240",
        "summary": "QA: Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-14",
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-139",
        "summary": "OWD Remediation :  Restrict External & Internal OWD on Contact Point Social to Private",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-239",
        "summary": "QA: Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-14",
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-149",
        "summary": "OWD Remediation :  Restrict Internal OWD on STG Staging Objects from Public Read to Private",
        "type": "Story",
        "status": "READY FOR UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-238",
        "summary": "QA : Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-14",
        "updated": "2026-10-14",
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
        "updated": "2026-10-14",
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
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-81",
        "summary": "Generate CRM Data Catalogue",
        "type": "Sub-task",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Giles Bill",
        "created": "2026-08-31",
        "updated": "2026-10-14",
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
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-75",
        "summary": "Dependancy - PTAT Sync.: Datahub/SF Staging",
        "type": "Task",
        "status": "Monitor",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Mani Maran Mani",
        "created": "2026-08-28",
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-231",
        "summary": "Risk - Remediation Scope",
        "type": "Task",
        "status": "Monitor",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Frank Nigro",
        "reporter": "Frank Nigro",
        "created": "2026-10-06",
        "updated": "2026-10-14",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-206",
        "summary": "Speed #2 - Advancement future stories backlog",
        "type": "Epic",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-09-29",
        "updated": "2026-10-12",
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
        "updated": "2026-10-09",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [
            "GU-SF-R1"
        ],
        "storyPoints": null
    },
    {
        "key": "SOPS-154",
        "summary": "Permission Set Remediation : Remove Customize Dashboards and Customize Reports from GU Integration",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
        "storyPoints": null
    },
    {
        "key": "SOPS-155",
        "summary": "Permission Set Remediation : Remove Run Reports from GU Integration",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
        "storyPoints": null
    },
    {
        "key": "SOPS-156",
        "summary": "Permission Set Remediation : Remove view role hierarchy from listed permission sets",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
        "storyPoints": null
    },
    {
        "key": "SOPS-104",
        "summary": "Permission Set Remediation : Make API-enabled permission sets API Only",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-10",
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
        "storyPoints": null
    },
    {
        "key": "SOPS-73",
        "summary": "Sharing Rules Remediation - Replace Single-Member Public Group Sharing with Direct Role Sharing",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-08-27",
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
        "storyPoints": null
    },
    {
        "key": "SOPS-90",
        "summary": "Sharing Rules Remediation - Review Advancement Ops sharing rule on Person Education",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-01",
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [
            "GU-SF-R1"
        ],
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
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-103",
        "summary": "Sharing Rules Remediation - Delete unused Advancement_Public_Group",
        "type": "Story",
        "status": "IN UAT",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Benjamin Bates",
        "reporter": "Amit Sood",
        "created": "2026-09-09",
        "updated": "2026-10-09",
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
        "assignee": "Jeremy Fahey",
        "reporter": "Amit Sood",
        "created": "2026-09-11",
        "updated": "2026-10-09",
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
        "assignee": "Sagar Dey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-09",
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
        "assignee": "Sagar Dey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-09",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-195",
        "summary": "Ascend Portal Profile : Incorrect FLS for the below mentioned object",
        "type": "Bug",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "High",
        "assignee": "Sudaif Haider",
        "reporter": "Kaviya UC",
        "created": "2026-09-22",
        "updated": "2026-10-08",
        "labels": [
            "RAC:Deployment_Issue"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-235",
        "summary": "QA: Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-10-07",
        "updated": "2026-10-08",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-72",
        "summary": "QA : Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-08-26",
        "updated": "2026-10-08",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-80",
        "summary": "QA:Test Scripts & Test Execution",
        "type": "Sub-task",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Kaviya UC",
        "reporter": "Kaviya UC",
        "created": "2026-08-28",
        "updated": "2026-10-08",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-207",
        "summary": "Alumni constituent role for Advancement education records",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Asra Khan",
        "created": "2026-09-29",
        "updated": "2026-10-08",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-148",
        "summary": "OWD Remediation :  Audit and Enforce Private/Unlisted Type on Sensitive Chatter Groups",
        "type": "Story",
        "status": "NOT REQUIRED",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Sagar Dey",
        "reporter": "Sudaif Haider",
        "created": "2026-09-11",
        "updated": "2026-10-07",
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
        "updated": "2026-10-07",
        "labels": [
            "Blocked"
        ],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-174",
        "summary": "Review and Remediate SOAP API Login Usage",
        "type": "Story",
        "status": "To Do",
        "statusCat": "To Do",
        "priority": "Medium",
        "assignee": "Unassigned",
        "reporter": "Jeremy Fahey",
        "created": "2026-09-15",
        "updated": "2026-10-07",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-172",
        "summary": "Remediate Marketing Cloud Engagement Security Enhancements",
        "type": "Story",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Jeremy Fahey",
        "created": "2026-09-15",
        "updated": "2026-10-07",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-171",
        "summary": "Investigate and Resolve Salesforce Backup Failure",
        "type": "Story",
        "status": "In Progress",
        "statusCat": "In Progress",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Jeremy Fahey",
        "created": "2026-09-15",
        "updated": "2026-10-07",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
    {
        "key": "SOPS-169",
        "summary": "Setup and Configure Event Monitoring Analytics App",
        "type": "Story",
        "status": "Done",
        "statusCat": "Done",
        "priority": "Medium",
        "assignee": "Jeremy Fahey",
        "reporter": "Jeremy Fahey",
        "created": "2026-09-14",
        "updated": "2026-10-07",
        "labels": [],
        "fixVersions": [],
        "storyPoints": null
    },
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
    }
]
};

// ── Live SIT Sandbox data (fetched 2026-10-23 00:34 UTC) ────────────────────────────
const LIVE_DATA = {
  org: {
    name:        'GRIFFITH UNIVERSITY',
    instanceUrl: 'https://griffith--sit.sandbox.my.salesforce.com',
    orgId:       '00DOg000003NRdiMAG',
    environment: 'SIT Sandbox',
    fetchedAt:   '2026-10-23 00:34 UTC',
  },

  /* Org limits */
  limits: {
    "DailyApiRequests": {
        "Max": 5000000,
        "Remaining": 4999719
    },
    "DailyAsyncApexExecutions": {
        "Max": 250000,
        "Remaining": 249982
    },
    "DailyBulkApiBatches": {
        "Max": 15000,
        "Remaining": 15000
    },
    "DataStorageMB": {
        "Max": 5120,
        "Remaining": 3987
    },
    "FileStorageMB": {
        "Max": 332440,
        "Remaining": 331374
    },
    "SingleEmail": {
        "Max": 5000,
        "Remaining": 5000
    },
    "HourlyTimeBasedWorkflow": {
        "Max": 1000,
        "Remaining": 1000
    }
},

  /* Metadata counts */
  metadata: {
    "activeApexClasses": 0,
    "activeApexTriggers": 0,
    "activeFlows": 0
},

  /* Scheduled jobs summary */
  scheduledJobs: {
    "total": 30,
    "waiting": 24,
    "complete": 5,
    "acquired": 1,
    "jobs": [
        {
            "name": "287c8878-0d88-a8e9-787e-376a8892842a",
            "state": "COMPLETE",
            "next": "2026-09-03T22:00:00Z"
        },
        {
            "name": "4650d5d6-d873-f97d-dd8f-4e7a4c7dc458",
            "state": "COMPLETE",
            "next": "2026-09-04T04:00:00Z"
        },
        {
            "name": "cc59d531-2393-5d70-84db-d944d788c3bf",
            "state": "COMPLETE",
            "next": "2026-09-14T00:00:00Z"
        },
        {
            "name": "e9069e39-d200-6b03-ce6f-872b8cc108c8",
            "state": "COMPLETE",
            "next": "2026-09-15T23:00:00Z"
        },
        {
            "name": "b1e3706a-dba0-da38-ef2e-f264834b9c5e",
            "state": "COMPLETE",
            "next": "2026-10-05T03:00:00Z"
        },
        {
            "name": "BatchDocgenProcessingCronJob",
            "state": "ACQUIRED",
            "next": "2026-10-21T15:16:00Z"
        },
        {
            "name": "DAP.TELEMETRY",
            "state": "WAITING",
            "next": "2026-10-23T00:44:00Z"
        },
        {
            "name": "DC.TELEMETRY",
            "state": "WAITING",
            "next": "2026-10-23T00:44:00Z"
        },
        {
            "name": "CommIncrementalSitemapJob-00DOg000003NRdi-0DMMp0000001ML4",
            "state": "WAITING",
            "next": "2026-10-23T00:45:08Z"
        },
        {
            "name": "CommIncrementalSitemapJob-00DOg000003NRdi-0DMMn0000000Y4y",
            "state": "WAITING",
            "next": "2026-10-23T00:57:44Z"
        }
    ]
},

  /* User licences */
  userLicences: [
    {
        "type": "Chatter Free",
        "total": 5000,
        "used": 0
    },
    {
        "type": "External Apps Login",
        "total": 2020,
        "used": 0
    },
    {
        "type": "Einstein Agent",
        "total": 601,
        "used": 0
    },
    {
        "type": "Chatter External",
        "total": 500,
        "used": 0
    },
    {
        "type": "External Einstein Agent",
        "total": 401,
        "used": 0
    },
    {
        "type": "Identity",
        "total": 170,
        "used": 0
    },
    {
        "type": "Salesforce",
        "total": 140,
        "used": 133
    },
    {
        "type": "Guest User License",
        "total": 25,
        "used": 4
    },
    {
        "type": "Customer Community Login",
        "total": 20,
        "used": 0
    },
    {
        "type": "Salesforce Platform",
        "total": 10,
        "used": 0
    },
    {
        "type": "Salesforce Integration",
        "total": 5,
        "used": 2
    },
    {
        "type": "Analytics Cloud Integration User",
        "total": 2,
        "used": 2
    },
    {
        "type": "Sales Insights Integration User",
        "total": 1,
        "used": 1
    },
    {
        "type": "SalesforceIQ Integration User",
        "total": 1,
        "used": 1
    },
    {
        "type": "Cloud Integration User",
        "total": 1,
        "used": 1
    }
],

  /* Active users */
  users: [
    {
        "initials": "DU",
        "name": "Dashboard User",
        "username": "akshay.kumar@griffith.edu.au.dashboard",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-10-23",
        "loginClass": "recent"
    },
    {
        "initials": "DU",
        "name": "Deployment User",
        "username": "deploymentuser@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "Gearset Integration Administrator",
        "lastLogin": "2026-10-22",
        "loginClass": "recent"
    },
    {
        "initials": "KU",
        "name": "Kaviya UC",
        "username": "k.uc@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-10-21",
        "loginClass": "recent"
    },
    {
        "initials": "RA",
        "name": "Rahul Ahuja",
        "username": "r.ahuja@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-10-21",
        "loginClass": "recent"
    },
    {
        "initials": "AK",
        "name": "Akshay Kumar",
        "username": "akshay.kumar@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-10-19",
        "loginClass": "recent"
    },
    {
        "initials": "SH",
        "name": "Sudaif Haider",
        "username": "s.haider@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-10-19",
        "loginClass": "recent"
    },
    {
        "initials": "SD",
        "name": "Sagar Dey",
        "username": "sagar.dey@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-10-16",
        "loginClass": "recent"
    },
    {
        "initials": "JF",
        "name": "Jeremy Fahey",
        "username": "j.fahey@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-10-16",
        "loginClass": "recent"
    },
    {
        "initials": "AS",
        "name": "Amit Sood",
        "username": "a.sood@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-10-13",
        "loginClass": "recent"
    },
    {
        "initials": "HM",
        "name": "Heidi McKellar",
        "username": "h.mckellar@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": "2026-09-22",
        "loginClass": "recent"
    },
    {
        "initials": "GI",
        "name": "Gearset Integration User",
        "username": "gearset@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "AP",
        "name": "ascend Portal Site Guest User",
        "username": "ascend_portal@00dmn000001a6tnma0.org.force.com.sit",
        "userType": "Guest",
        "profile": "ascend Portal Profile",
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "PV",
        "name": "Patricia Villalva",
        "username": "p.villalva@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "System Administrator",
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "DM",
        "name": "Data Migration User",
        "username": "datamigration@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "GU Integration",
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "S",
        "name": "System",
        "username": "automatedcase@00dog000003nrdimag.ext",
        "userType": "AutomatedProcess",
        "profile": null,
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "II",
        "name": "Insights Integration",
        "username": "insightsintegration@00dog000003nrdimag.ext",
        "userType": "Standard",
        "profile": "Sales Insights Integration User",
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "AI",
        "name": "Azure Integration User",
        "username": "azureintegration@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "GU Integration",
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "DM",
        "name": "Damon McLellan",
        "username": "d.mclellan@griffith.edu.au.sit",
        "userType": "Standard",
        "profile": "GU Base Profile",
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "SU",
        "name": "Security User",
        "username": "insightssecurity@00dog000003nrdimag.com",
        "userType": "Standard",
        "profile": "Analytics Cloud Security User",
        "lastLogin": null,
        "loginClass": "never"
    },
    {
        "initials": "IU",
        "name": "Integration User",
        "username": "integration@00dog000003nrdimag.com",
        "userType": "Standard",
        "profile": "Analytics Cloud Integration User",
        "lastLogin": null,
        "loginClass": "never"
    }
],

  /* Recent deployments */
  sfDeployments: [
    {
        "id": "0AfOg0000070777KAA",
        "deployedBy": "Deployment User",
        "checkOnly": false,
        "componentsDeployed": 4,
        "componentsTotal": 4,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-22T15:05:16.000+0000",
        "completedDate": "2026-10-22T15:05:41.000+0000",
        "durationSec": 25,
        "stateDetail": "",
        "components": [
            {
                "name": "ascend_for_Griffith",
                "type": "CustomApplication",
                "success": true
            },
            {
                "name": "Test Profile Geomar",
                "type": "Profile",
                "success": true
            },
            {
                "name": "GU Salesforce API Only System Integrations",
                "type": "Profile",
                "success": true
            },
            {
                "name": "Prospect Research Officer",
                "type": "Profile",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006zmCLKAY",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 4,
        "componentsTotal": 4,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-22T09:06:50.000+0000",
        "completedDate": "2026-10-22T09:07:04.000+0000",
        "durationSec": 14,
        "stateDetail": "",
        "components": [
            {
                "name": "ascend_for_Griffith",
                "type": "CustomApplication",
                "success": true
            },
            {
                "name": "Test Profile Geomar",
                "type": "Profile",
                "success": true
            },
            {
                "name": "GU Salesforce API Only System Integrations",
                "type": "Profile",
                "success": true
            },
            {
                "name": "Prospect Research Officer",
                "type": "Profile",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006yX0sKAE",
        "deployedBy": "Deployment User",
        "checkOnly": false,
        "componentsDeployed": 1,
        "componentsTotal": 1,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-21T08:52:21.000+0000",
        "completedDate": "2026-10-21T08:52:29.000+0000",
        "durationSec": 8,
        "stateDetail": "",
        "components": [
            {
                "name": "Account",
                "type": "CustomObject",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006yTwaKAE",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 1,
        "componentsTotal": 1,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-21T08:47:07.000+0000",
        "completedDate": "2026-10-21T08:47:14.000+0000",
        "durationSec": 7,
        "stateDetail": "",
        "components": [
            {
                "name": "Account",
                "type": "CustomObject",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006yIQ7KAM",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 0,
        "componentsTotal": 1,
        "errors": 1,
        "status": "Failed",
        "startDate": "2026-10-21T08:42:26.000+0000",
        "completedDate": "2026-10-21T08:42:31.000+0000",
        "durationSec": 5,
        "stateDetail": "",
        "components": [
            {
                "name": "Account",
                "type": "CustomObject",
                "success": false,
                "problem": "No more than 10 columns may be specified in searchResultsFields"
            }
        ]
    },
    {
        "id": "0AfOg000006t1HlKAI",
        "deployedBy": "Deployment User",
        "checkOnly": false,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T11:13:58.000+0000",
        "completedDate": "2026-10-16T11:13:59.000+0000",
        "durationSec": 1,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006t1CvKAI",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T11:13:04.000+0000",
        "completedDate": "2026-10-16T11:13:04.000+0000",
        "durationSec": 0,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006t0lVKAQ",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T11:08:00.000+0000",
        "completedDate": "2026-10-16T11:08:00.000+0000",
        "durationSec": 0,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006t0FGKAY",
        "deployedBy": "Deployment User",
        "checkOnly": false,
        "componentsDeployed": 1,
        "componentsTotal": 1,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T11:03:43.000+0000",
        "completedDate": "2026-10-16T11:03:47.000+0000",
        "durationSec": 4,
        "stateDetail": "",
        "components": [
            {
                "name": "Gearset Integration Administrator",
                "type": "Profile",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006t0QXKAY",
        "deployedBy": "Sagar Dey",
        "checkOnly": false,
        "componentsDeployed": 1,
        "componentsTotal": 1,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T11:03:04.000+0000",
        "completedDate": "2026-10-16T11:03:10.000+0000",
        "durationSec": 6,
        "stateDetail": "",
        "components": [
            {
                "name": "LearnerProgram.Campus__c",
                "type": "CustomField",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006stouKAA",
        "deployedBy": "Sagar Dey",
        "checkOnly": false,
        "componentsDeployed": 2,
        "componentsTotal": 2,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T11:00:50.000+0000",
        "completedDate": "2026-10-16T11:00:57.000+0000",
        "durationSec": 7,
        "stateDetail": "",
        "components": [
            {
                "name": "LearnerProgram.Campus__c",
                "type": "CustomField",
                "success": true
            },
            {
                "name": "LearningProgram.Campus__c",
                "type": "CustomField",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006stCFKAY",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 1,
        "componentsTotal": 1,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T10:57:45.000+0000",
        "completedDate": "2026-10-16T10:57:49.000+0000",
        "durationSec": 4,
        "stateDetail": "",
        "components": [
            {
                "name": "Gearset Integration Administrator",
                "type": "Profile",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006stVXKAY",
        "deployedBy": "Deployment User",
        "checkOnly": false,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T10:33:33.000+0000",
        "completedDate": "2026-10-16T10:33:33.000+0000",
        "durationSec": 0,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006sxpHKAQ",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T10:32:41.000+0000",
        "completedDate": "2026-10-16T10:32:42.000+0000",
        "durationSec": 1,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006snUwKAI",
        "deployedBy": "Deployment User",
        "checkOnly": false,
        "componentsDeployed": 7,
        "componentsTotal": 7,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T08:11:35.000+0000",
        "completedDate": "2026-10-16T08:11:42.000+0000",
        "durationSec": 7,
        "stateDetail": "",
        "components": [
            {
                "name": "GU Base Profile",
                "type": "Profile",
                "success": true
            },
            {
                "name": "Read Only",
                "type": "Profile",
                "success": true
            },
            {
                "name": "Salesforce API Only System Integrations",
                "type": "Profile",
                "success": true
            },
            {
                "name": "ascend Development",
                "type": "Profile",
                "success": true
            },
            {
                "name": "ascend Gift Processing",
                "type": "Profile",
                "success": true
            },
            {
                "name": "ascend Read Only",
                "type": "Profile",
                "success": true
            },
            {
                "name": "ascend Research",
                "type": "Profile",
                "success": true
            }
        ]
    },
    {
        "id": "0AfOg000006segAKAQ",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-16T04:14:48.000+0000",
        "completedDate": "2026-10-16T04:14:49.000+0000",
        "durationSec": 1,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006rumzKAA",
        "deployedBy": "Deployment User",
        "checkOnly": false,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-15T13:01:27.000+0000",
        "completedDate": "2026-10-15T13:01:28.000+0000",
        "durationSec": 1,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006ru8fKAA",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-15T12:47:53.000+0000",
        "completedDate": "2026-10-15T12:47:54.000+0000",
        "durationSec": 1,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006rte1KAA",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 0,
        "componentsTotal": 0,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-15T12:39:13.000+0000",
        "completedDate": "2026-10-15T12:39:13.000+0000",
        "durationSec": 0,
        "stateDetail": "",
        "components": []
    },
    {
        "id": "0AfOg000006rTejKAE",
        "deployedBy": "Deployment User",
        "checkOnly": true,
        "componentsDeployed": 1,
        "componentsTotal": 1,
        "errors": 0,
        "status": "Succeeded",
        "startDate": "2026-10-15T04:07:55.000+0000",
        "completedDate": "2026-10-15T04:07:59.000+0000",
        "durationSec": 4,
        "stateDetail": "",
        "components": [
            {
                "name": "Gearset Integration Administrator",
                "type": "Profile",
                "success": true
            }
        ]
    }
],

  /* Salesforce official Health Check (Tooling API — SecurityHealthCheck + SecurityHealthCheckRisks) */
  healthCheck: {
    "score": "78",
    "rating": null,
    "checks": [],
    "version": "Salesforce Baseline Standard"
}
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

// ── Azure DevOps live data (fetched 2026-10-23 00:34 UTC) ─────────────────────
const AZURE_DATA = {
  org:     'griffith-SalesforceCRM',
  project: 'RSDF-SalesforcePlatform',
  fetchedAt: '2026-10-23 00:34 UTC',

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
        "name": "Feature-SOPS-150",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "3371c121",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-09",
        "comment": "Create LearnerProgram.object-meta.xml"
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
        "name": "Feature-SOPS-237",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "01f039ff",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-12",
        "comment": "Campus__c picklist API name update"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-237-1",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "bdaa1e17",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-13",
        "comment": "Feature-SOPS-237"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-237-CampusField",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "1715b64a",
        "author": "Sudaif",
        "date": "2026-10-15",
        "comment": "Update Campus__c.field-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-237-CustomField1",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "a13a9860",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-15",
        "comment": "Feature-SOPS-237-CustomField1"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-237-CustomField2",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "2042c9fc",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-16",
        "comment": "Feature-SOPS-237-customField2"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-237-Profile",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "e0c80565",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-15",
        "comment": "Remove local Salesforce CLI folders from the profile branch."
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "Feature-SOPS-237_profile1",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "6d1a725a",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-15",
        "comment": "Feature-SOPS-237-Profile1"
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
        "name": "SOPS-96-V2",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "db8ec6c9",
        "author": "Rahul Ahuja",
        "date": "2026-10-12",
        "comment": "Commit: Fix for SOPS-96 UAT testing"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "SOPS-96-V3",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "ed4657c1",
        "author": "Rahul Ahuja",
        "date": "2026-10-21",
        "comment": "Commit: SOPS-96 UAT issue, SOPS-247 Fix"
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
        "aheadCount": 130,
        "behindCount": 0,
        "commitId": "fae4d22e",
        "author": "Sudaif Haider",
        "date": "2026-10-22",
        "comment": "Merge pull request 9435 from gs-pipeline/feature-SOPS-163-2_-_devmerge into devm"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-139",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "6fac8df1",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-12",
        "comment": "changes for SOPS-139"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-139n",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "eb1c3e59",
        "author": "Sudaif",
        "date": "2026-10-13",
        "comment": "SOPS-139"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-145",
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
        "aheadCount": 3,
        "behindCount": 0,
        "commitId": "3eb29104",
        "author": "Sudaif",
        "date": "2026-10-07",
        "comment": "Update GU_Base_Ascend.permissionset-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-163",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "21390bb5",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-08",
        "comment": "Changes for SOPS-163"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-163-2",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "f3a2dd40",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-22",
        "comment": "changes for SOPS-163"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-163n",
        "isDefault": false,
        "aheadCount": 3,
        "behindCount": 0,
        "commitId": "44940c28",
        "author": "Sudaif",
        "date": "2026-10-12",
        "comment": "SOPS 163"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-163new",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "d132db47",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-13",
        "comment": "changes for SOPS-163"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "feature-SOPS-237n",
        "isDefault": false,
        "aheadCount": 5,
        "behindCount": 0,
        "commitId": "dcaa71ba",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-15",
        "comment": "Remove local Salesforce CLI org tracking from the branch."
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
        "aheadCount": 7,
        "behindCount": 0,
        "commitId": "1acdfef7",
        "author": "Sudaif",
        "date": "2026-10-16",
        "comment": "sops 140 fix"
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
        "name": "feature/pr-quality-gates-devmerge",
        "isDefault": false,
        "aheadCount": 128,
        "behindCount": 0,
        "commitId": "2372d96c",
        "author": "Akshay Kumar",
        "date": "2026-10-22",
        "comment": "Add PR quality gate pipeline (PMD + security + Gearset status)"
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
        "name": "gs-pipeline/Feature-SOPS-103_-_main",
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
        "name": "gs-pipeline/Feature-SOPS-150_-_sit",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "3371c121",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-09",
        "comment": "Create LearnerProgram.object-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-155_154_-_main",
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
        "name": "gs-pipeline/Feature-SOPS-156_-_main",
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
        "name": "gs-pipeline/Feature-SOPS-237-1_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "bdaa1e17",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-13",
        "comment": "Feature-SOPS-237"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-237-CampusField_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "e2ec2f1e",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-15",
        "comment": "Feature-SOPS-237-CampusField"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-237-CampusField_-_uat",
        "isDefault": false,
        "aheadCount": 2,
        "behindCount": 0,
        "commitId": "1715b64a",
        "author": "Sudaif",
        "date": "2026-10-15",
        "comment": "Update Campus__c.field-meta.xml"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/Feature-SOPS-237-CustomField1_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "a13a9860",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-15",
        "comment": "Feature-SOPS-237-CustomField1"
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
        "name": "gs-pipeline/Feature-SOPS-73_-_main",
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
        "name": "gs-pipeline/SOPS-87_-_main",
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
        "name": "gs-pipeline/SOPS-96-V2_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "db8ec6c9",
        "author": "Rahul Ahuja",
        "date": "2026-10-12",
        "comment": "Commit: Fix for SOPS-96 UAT testing"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/SOPS-96-V3_-_main",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "ed4657c1",
        "author": "Rahul Ahuja",
        "date": "2026-10-21",
        "comment": "Commit: SOPS-96 UAT issue, SOPS-247 Fix"
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
        "name": "gs-pipeline/feature-SOPS-139_-_devmerge",
        "isDefault": false,
        "aheadCount": 100,
        "behindCount": 0,
        "commitId": "38393e64",
        "author": "Team user",
        "date": "2026-10-12",
        "comment": "Gearset: Semantic reverse merge of devmerge into gs-pipeline/feature-SOPS-139_-_"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-139n_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "eb1c3e59",
        "author": "Sudaif",
        "date": "2026-10-13",
        "comment": "SOPS-139"
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
        "name": "gs-pipeline/feature-SOPS-163-2_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "f3a2dd40",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-22",
        "comment": "changes for SOPS-163"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-163_-_devmerge",
        "isDefault": false,
        "aheadCount": 91,
        "behindCount": 0,
        "commitId": "d468c99a",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-08",
        "comment": "Gearset: Conflicts resolved. Merging branch devmerge into gs-pipeline/feature-SO"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-163n_-_devmerge",
        "isDefault": false,
        "aheadCount": 102,
        "behindCount": 0,
        "commitId": "4ca96ed5",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-12",
        "comment": "Gearset: Conflicts resolved. Merging branch devmerge into gs-pipeline/feature-SO"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-163new_-_uat",
        "isDefault": false,
        "aheadCount": 1,
        "behindCount": 0,
        "commitId": "d132db47",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-13",
        "comment": "changes for SOPS-163"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-SOPS-237n_-_sit",
        "isDefault": false,
        "aheadCount": 5,
        "behindCount": 0,
        "commitId": "dcaa71ba",
        "author": "Sagar-GitHub-18",
        "date": "2026-10-15",
        "comment": "Remove local Salesforce CLI org tracking from the branch."
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
        "name": "gs-pipeline/feature-SOPS-88_-_main",
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
        "name": "gs-pipeline/feature-SOPS-90_-_main",
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
        "aheadCount": 7,
        "behindCount": 0,
        "commitId": "1acdfef7",
        "author": "Sudaif",
        "date": "2026-10-16",
        "comment": "sops 140 fix"
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
        "name": "gs-pipeline/feature-SOPS140_-_uat",
        "isDefault": false,
        "aheadCount": 48,
        "behindCount": 0,
        "commitId": "aa2cfa49",
        "author": "Team user",
        "date": "2026-10-09",
        "comment": "Gearset: Semantic reverse merge of uat into gs-pipeline/feature-SOPS140_-_uat"
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "name": "gs-pipeline/feature-sops-104_-_main",
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
        "aheadCount": 93,
        "behindCount": 0,
        "commitId": "2b448972",
        "author": "Sudaif Haider",
        "date": "2026-10-22",
        "comment": "Merged PR 9436: feature-SOPS-163-2"
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
        "aheadCount": 53,
        "behindCount": 0,
        "commitId": "73bb4204",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "comment": "Merged PR 9433: Commit: SOPS-96 UAT issue, SOPS-247 Fix"
    }
],

  pullRequests: [
    {
        "id": 9437,
        "title": "feature-SOPS-163-2",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163-2_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-22",
        "closedDate": null,
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "conflicts",
        "approved": false
    },
    {
        "id": 9436,
        "title": "feature-SOPS-163-2",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163-2_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-22",
        "closedDate": "2026-10-22",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9435,
        "title": "feature-SOPS-163-2",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163-2_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-22",
        "closedDate": "2026-10-22",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9434,
        "title": "Commit: SOPS-96 UAT issue, SOPS-247 Fix",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96-V3_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-21",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9433,
        "title": "Commit: SOPS-96 UAT issue, SOPS-247 Fix",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96-V3_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-21",
        "closedDate": "2026-10-21",
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9432,
        "title": "Commit: SOPS-96 UAT issue, SOPS-247 Fix",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96-V3_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-21",
        "closedDate": "2026-10-21",
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
        "id": 9431,
        "title": "Commit: SOPS-96 UAT issue, SOPS-247 Fix",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96-V3_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-21",
        "closedDate": "2026-10-21",
        "reviewers": [
            "Akshay Kumar"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9430,
        "title": "Commit: SOPS-96 UAT issue, SOPS-247 Fix",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-96-V3",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-10-21",
        "closedDate": "2026-10-21",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9429,
        "title": "Feature-SOPS-237-CustomField1",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-CustomField1_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-16",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Sagar Dey"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9428,
        "title": "Sync: Feature SOPS 237n",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-237n_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-16",
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
        "id": 9427,
        "title": "Feature SOPS 237 CampusField",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-CampusField_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-16",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Sagar Dey"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9426,
        "title": "Commit: Fix for SOPS-96 UAT testing",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96-V2_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-16",
        "closedDate": null,
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9425,
        "title": "sops 140 fix",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-16",
        "closedDate": null,
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "conflicts",
        "approved": false
    },
    {
        "id": 9424,
        "title": "sops 140 fix",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS140",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-16",
        "closedDate": "2026-10-16",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9423,
        "title": "Feature-SOPS-237-CustomField1",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-CustomField1_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-16",
        "closedDate": "2026-10-16",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider",
            "Sagar Dey"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9422,
        "title": "Feature-SOPS-237-CustomField1",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-CustomField1_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-16",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9420,
        "title": "Feature-SOPS-237-CustomField1",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237-CustomField1",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9419,
        "title": "Feature-SOPS-140",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9418,
        "title": "Feature SOPS 237 CampusField",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-CampusField_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-16",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider",
            "Sagar Dey"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9417,
        "title": "Feature SOPS 237 CampusField",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-CampusField_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9416,
        "title": "Feature SOPS 237 CampusField",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237-CampusField",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9415,
        "title": "Feature-SOPS-237-CampusField",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-CampusField_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9414,
        "title": "Feature-SOPS-237-CampusField",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237-CampusField",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9413,
        "title": "Feature-SOPS-237-CampusField",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-CampusField_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": null,
        "reviewers": [
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9412,
        "title": "Feature-SOPS-237-CampusField",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237-CampusField",
        "targetBranch": "main",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": true,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9411,
        "title": "Feature-SOPS-237-Profile1",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237_profile1_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9410,
        "title": "Feature-SOPS-237-Profile1",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237_profile1",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9409,
        "title": "Feature SOPS 237 Profile",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-Profile_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9408,
        "title": "Feature SOPS 237 Profile",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237-Profile",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9407,
        "title": "Feature-SOPS-140",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9406,
        "title": "Feature-SOPS-140",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS140",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9405,
        "title": "Feature SOPS 237n",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-237n_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9404,
        "title": "Feature SOPS 237n",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-237n",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9403,
        "title": "SOPS 140 bug Fix 242",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9402,
        "title": "SOPS 140 bug Fix 242",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS140",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-15",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9401,
        "title": "Feature SOPS 237n",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-237n_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-15",
        "closedDate": "2026-10-16",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9400,
        "title": "Feature SOPS 237n",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-237n_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-14",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Amit Sood"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9399,
        "title": "Feature SOPS 237n",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-237n",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-14",
        "closedDate": "2026-10-14",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9398,
        "title": "feature-SOPS-163new",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163new_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-13",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "conflicts",
        "approved": false
    },
    {
        "id": 9397,
        "title": "SOPS-139",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-139n_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-13",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9396,
        "title": "SOPS-139",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-139n_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9395,
        "title": "feature-SOPS-163new",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163new_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9394,
        "title": "feature-SOPS-163new",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163new_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Amit Sood"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9393,
        "title": "SOPS-139",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-139n_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Amit Sood"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9392,
        "title": "SOPS-139",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-139n",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-13",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9391,
        "title": "SOPS-139",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-139n",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9390,
        "title": "Commit: Fix for SOPS-96 UAT testing",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96-V2_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-16",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9389,
        "title": "Feature-SOPS-237",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-1_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-14",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9388,
        "title": "Feature-SOPS-237",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237-1",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9387,
        "title": "Feature-SOPS-237",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237-1_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-13",
        "closedDate": null,
        "reviewers": [
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9386,
        "title": "Feature-SOPS-237",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237-1",
        "targetBranch": "main",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-13",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9385,
        "title": "SOPS-237",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-237n_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-14",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9384,
        "title": "SOPS-237",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-237n",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-12",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9383,
        "title": "Commit: Fix for SOPS-96 UAT testing",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96-V2_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Akshay Kumar",
            "Sudaif Haider",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9382,
        "title": "Feature SOPS 163n",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163n_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-13",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9381,
        "title": "Feature SOPS 163n",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-163n",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-12",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9380,
        "title": "Commit: Fix for SOPS-96 UAT testing",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96-V2_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-12",
        "reviewers": [
            "Akshay Kumar",
            "Rahul Ahuja"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9379,
        "title": "Commit: Fix for SOPS-96 UAT testing",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "SOPS-96-V2",
        "targetBranch": "devmerge",
        "createdBy": "Rahul Ahuja",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-12",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9378,
        "title": "Feature SOPS 163n",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163n_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-12",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9377,
        "title": "Feature SOPS 163n",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-163n",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-12",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9376,
        "title": "Feature-SOPS-237",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-237_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-14",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": true
    },
    {
        "id": 9375,
        "title": "Feature-SOPS-237",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-237",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-12",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9374,
        "title": "feature-SOPS-139",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-139_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-13",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9373,
        "title": "feature-SOPS-163n",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163n_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-12",
        "closedDate": "2026-10-12",
        "reviewers": [
            "Amit Sood"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9372,
        "title": "Defect Fix SOPS-234",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-160_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-09",
        "closedDate": "2026-10-13",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9371,
        "title": "Create LearnerProgram.object-meta.xml",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-150_-_sit",
        "targetBranch": "sit",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-09",
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
        "id": 9370,
        "title": "Create LearnerProgram.object-meta.xml",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-150_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-09",
        "closedDate": "2026-10-09",
        "reviewers": [
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": true
    },
    {
        "id": 9369,
        "title": "Create LearnerProgram.object-meta.xml",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "Feature-SOPS-150",
        "targetBranch": "devmerge",
        "createdBy": "Sagar Dey",
        "createdDate": "2026-10-09",
        "closedDate": "2026-10-09",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9368,
        "title": "Feature SOPS140",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-09",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9367,
        "title": "SOPS 87 and SOPS 73",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-87_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-09",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9366,
        "title": "feature-sops-104",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-sops-104_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-09",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9365,
        "title": "Feature SOPS140",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_sit",
        "targetBranch": "sit",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-09",
        "closedDate": "2026-10-09",
        "reviewers": [
            "Amit Sood",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9364,
        "title": "Feature SOPS 73",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-09",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9363,
        "title": "Feature SOPS140",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS140_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-08",
        "closedDate": "2026-10-09",
        "reviewers": [
            "Amit Sood"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9362,
        "title": "Feature SOPS140",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS140",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-08",
        "closedDate": "2026-10-08",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9361,
        "title": "Feature SOPS140",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS140",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-08",
        "closedDate": "2026-10-08",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9360,
        "title": "Feature SOPS140",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS140",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-08",
        "closedDate": "2026-10-08",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9359,
        "title": "feature-SOPS-88",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-88_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-08",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9358,
        "title": "Sync: Feature SOPS 73",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-73_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-08",
        "closedDate": "2026-10-09",
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9357,
        "title": "feature-SOPS-90",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-90_-_main",
        "targetBranch": "main",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-08",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9356,
        "title": "SOPS_103",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-103_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-08",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9355,
        "title": "SOPS-155_154",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-155_154_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-08",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9354,
        "title": "SOPS-156",
        "status": "active",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-156_-_main",
        "targetBranch": "main",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-08",
        "closedDate": null,
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider",
            "Giles Bill"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9353,
        "title": "feature-SOPS-163",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-163_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-08",
        "closedDate": "2026-10-15",
        "reviewers": [
            "Amit Sood"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9352,
        "title": "Defect Fix SOPS-234",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-SOPS-160_-_devmerge",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-07",
        "closedDate": "2026-10-09",
        "reviewers": [
            "Amit Sood"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
        "approved": false
    },
    {
        "id": 9351,
        "title": "Defect Fix SOPS-234",
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "feature-SOPS-160",
        "targetBranch": "devmerge",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-07",
        "closedDate": "2026-10-07",
        "reviewers": [],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    },
    {
        "id": 9350,
        "title": "feature-sops-104",
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/feature-sops-104_-_uat",
        "targetBranch": "uat",
        "createdBy": "Sudaif Haider",
        "createdDate": "2026-10-06",
        "closedDate": "2026-10-09",
        "reviewers": [
            "Amit Sood",
            "Akshay Kumar",
            "Jeremy Fahey",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "succeeded",
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
            "Jeremy Fahey",
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
        "status": "completed",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/Feature-SOPS-156_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-05",
        "closedDate": "2026-10-08",
        "reviewers": [
            "Amit Sood",
            "Jeremy Fahey",
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
        "status": "abandoned",
        "repo": "RSDF-SalesforcePlatform",
        "sourceBranch": "gs-pipeline/SOPS-96_-_uat",
        "targetBranch": "uat",
        "createdBy": "Akshay Kumar",
        "createdDate": "2026-10-01",
        "closedDate": "2026-10-16",
        "reviewers": [
            "Asra Khan",
            "Amit Sood",
            "Jeremy Fahey",
            "Sudaif Haider"
        ],
        "isDraft": false,
        "mergeStatus": "",
        "approved": false
    }
],

  commits: [
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "2b448972",
        "comment": "Merged PR 9436: feature-SOPS-163-2",
        "author": "Sudaif Haider",
        "date": "2026-10-22",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "ce365ef9",
        "comment": "Merge pull request 9436 from gs-pipeline/feature-SOPS-163-2_-_sit into sit",
        "author": "Sudaif Haider",
        "date": "2026-10-22",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "42920ed4",
        "comment": "Gearset: Conflicts resolved. Merging branch sit into gs-pipeline/feature-SOPS-163-2_-_sit",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-22",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "fae4d22e",
        "comment": "Merge pull request 9435 from gs-pipeline/feature-SOPS-163-2_-_devmerge into devmerge",
        "author": "Sudaif Haider",
        "date": "2026-10-22",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "035dc8d7",
        "comment": "Gearset: Conflicts resolved. Merging branch devmerge into gs-pipeline/feature-SOPS-163-2_-_devmerge",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-22",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "9106b5d1",
        "comment": "Merge pull request 9435 from gs-pipeline/feature-SOPS-163-2_-_devmerge into devmerge",
        "author": "Sudaif Haider",
        "date": "2026-10-22",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "f3a2dd40",
        "comment": "changes for SOPS-163",
        "author": "s.haider@griffith.edu.au",
        "date": "2026-10-22",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "2372d96c",
        "comment": "Add PR quality gate pipeline (PMD + security + Gearset status)",
        "author": "Akshay Kumar",
        "date": "2026-10-22",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "577ddcb6",
        "comment": "Merge pull request 9434 from gs-pipeline/SOPS-96-V3_-_main into main",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "73bb4204",
        "comment": "Merged PR 9433: Commit: SOPS-96 UAT issue, SOPS-247 Fix",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "c22f43a2",
        "comment": "Merge pull request 9433 from gs-pipeline/SOPS-96-V3_-_uat into uat",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "2f062c09",
        "comment": "Commit: SOPS-96, resolved merge conflict",
        "author": "Rahul Ahuja",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "540c1d15",
        "comment": "Merge pull request 9433 from gs-pipeline/SOPS-96-V3_-_uat into uat",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "c1f62179",
        "comment": "Gearset: Semantic reverse merge of uat into gs-pipeline/SOPS-96-V3_-_uat",
        "author": "Team user",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "6e33d560",
        "comment": "Merged PR 9432: Commit: SOPS-96 UAT issue, SOPS-247 Fix",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "2c9b778b",
        "comment": "Merge pull request 9432 from gs-pipeline/SOPS-96-V3_-_sit into sit",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "78ddf0ea",
        "comment": "Commit: SOPS-96 reolved merge conflict",
        "author": "Rahul Ahuja",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "2d295889",
        "comment": "Merge pull request 9432 from gs-pipeline/SOPS-96-V3_-_sit into sit",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "a0d2e913",
        "comment": "Gearset: Semantic reverse merge of sit into gs-pipeline/SOPS-96-V3_-_sit",
        "author": "Team user",
        "date": "2026-10-21",
        "branch": ""
    },
    {
        "repo": "RSDF-SalesforcePlatform",
        "commitId": "089ae626",
        "comment": "Merged PR 9431: Commit: SOPS-96 UAT issue, SOPS-247 Fix",
        "author": "Akshay Kumar",
        "date": "2026-10-21",
        "branch": ""
    }
],

  tags: [],
};

// ── Weekly/Sprint history snapshots (for trend charts) ───────────────────────
const WEEKLY_HISTORY = {
  // Per-sprint issue counts (derived from issue created dates)
  sprintTrend: [
    { sprint: "Sprint 1", week: "2026-08-02", todo: 0,  inProgress: 7,  done: 0, cumulativeDone: 0,  deployments: 0 },
    { sprint: "Sprint 2", week: "2026-08-16", todo: 1,  inProgress: 5,  done: 2, cumulativeDone: 2,  deployments: 0 },
    { sprint: "Sprint 3", week: "2026-08-30", todo: 5,  inProgress: 33, done: 1, cumulativeDone: 3,  deployments: 0 },
    { sprint: "Sprint 4", week: "2026-09-14", todo: 2,  inProgress: 6,  done: 4, cumulativeDone: 7,  deployments: 7 },
    { sprint: "Sprint 5", week: "2026-10-05", todo: 12, inProgress: 2,  done: 2, cumulativeDone: 9,  deployments: 2 },
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
