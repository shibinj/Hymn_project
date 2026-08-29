# Release Notes: Choir Tenure, Member Lifecycle Management & Security Policy

**Release Date:** August 29, 2026  
**Target Environment:** Production (`main`) & Preview (`dev-preview`)

---

## 🌟 Overview
This release introduces a complete **5-Year Choir Tenure & Member Lifecycle Management System** to the Choir Attendance Tracker, streamlines category transfers (Active Female, Active Male, Occasional Attendees, Past Members), adds numbered archiving, and enforces a strict **Zero-Secret in Git** security architecture.

---

## 🏛️ New Features

### 1. ➕ Direct Member Induction UI
- **No Manual Firebase Console Edits Needed**: Added an intuitive, glassmorphic **"Add New Choir Member"** card directly in the *Manage Members* tab.
- **Form Controls**:
  - Full Member Name
  - Voice Section / Category (`👩 Active Female`, `👨 Active Male`, `🌍 Occasional Attendee`)
  - Original Joining Date (defaults to `2022-09-01` or selection date)
  - Selection Notes (e.g., *"Sept 2022 Selection"*, *"2027 Audition"*)
- **Duplicate Prevention**: Verifies that the member is not already active before inserting.

### 2. 🔒 5-Year Tenure & Original Join Date Preservation
- **Tenure Cycle**: Recognizes the 5-year choir validity term (**Sept 2022 – March 2027**).
- **Continuing Members**: Re-elected members in March 2027 retain their original first joining date (`Since Sep 2022` or earlier).
- **Returning Members**: When an archived member rejoins the active choir, the system automatically detects their historical record and restores their original joining date (e.g. `1998` or `2022`).
- **Seniority Badges**: Member cards in the 3-column roster display clear seniority badges (e.g. `Since Sep 2022`, `Since Jul 1998`).

### 3. 🔄 Flexible Member Category & Status Manager
- **Multi-Way Category Transfers**:
  - `Active Female / Male` ➔ `Occasional Attendees`
  - `Occasional Attendees` ➔ `Active Female / Male`
  - `Active / Occasional` ➔ `Past Members Archive`
  - `Past Members Archive` ➔ `Active / Occasional`
- **Instant Firestore Sync**: Automatically updates `members/active`, `members/meta`, and `members/archive` collections.

### 4. 🔢 Numbered & Chronological Past Members Archive
- **Sequential Index Badges**: Displays `#` badges (`1`, `2`, `3`...) in both the Manage Members table and the Attendance tab dropdown.
- **Reverse Chronological Sorting**: Most recently retired members appear first.
- **Clean Table Columns**:
  1. `#` (Badge Number)
  2. Member Name
  3. Service Period (e.g. `Jul 1998 – Jul 2026`)
  4. Notes / Reason
  5. Action (`↩️ Restore to Active`)

---

## 🔒 Security Architecture
- **Zero Secrets in Repository**:
  - `scripts/build-config.js` and `worker.js` contain **zero hardcoded API keys or admin emails**.
  - `admin/firebase-config.js` is untracked and excluded via `.gitignore`.
- **Production Pipeline (GitHub Actions on `main`)**:
  - Generates configuration in memory on the CI runner using encrypted **GitHub Secrets** (`FIREBASE_API_KEY`, `FIREBASE_ALLOWED_ADMINS`, etc.).
- **Preview Pipeline (Cloudflare on `dev-preview`)**:
  - Powered strictly by Cloudflare Environment Variables without repository exposure.

---

## 🛠️ Bugfixes Included
1. **JavaScript Syntax Error**: Fixed an unescaped single quote in an alert string that prevented tab scripts from executing.
2. **Missing Functions**: Added global `escapeHtml()` and `populateMemberStatusDropdown()` functions.
3. **Dark Mode Contrast**: Modernized Past Members table and Top 5 podium to use theme CSS variables (`var(--text-primary)`, `var(--card-bg)`).
