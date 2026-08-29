# 📚 Holy Hymns — Documentation & System Architecture

Welcome to the comprehensive documentation for **Holy Hymns**, a modern platform for Malayalam Christian hymns, convention songs, liturgy planning, and choir ministry management.

🌐 **Production Site:** [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)  
⚡ **Live Cloudflare Preview:** [https://hymn-preview.holyhymns.workers.dev/](https://hymn-preview.holyhymns.workers.dev/)

---

## 📊 Quick System Stats

- **691+ Songs** across 12 collections
- **517 Hymns** from *Kristheeya Keerthanangal* with 40 liturgical themes
- **96 Maramon Convention Songs** (2013, 2021, 2023, 2024, 2025, 2026)
- **23 Passion Week Songs** (Hosanna, Good Friday, Resurrection)
- **22 Holy Communion Songs** (DSMC Media)
- **18 Kottarakara Convention Songs** (2025 – 2026)
- **15 Birthday & Anniversary Songs**
- **4 Admin Ministry Applications** (Worship Planner, Choir Attendance, DSMC Planner, Lyrics Editor)

---

## 📑 Documentation Index

### 🚀 Latest Release Notes
- **[Choir Tenure, Member Lifecycle Management & Security Policy](release-notes/MEMBER_MANAGEMENT_AND_TENURE_RELEASE.md)** *(August 2026)*
- **[Birthday & Anniversary Songs & Bugfixes](release-notes/BIRTHDAY_ANNIVERSARY_BUGFIXES.md)**
- **[Special Occasion Collection Release](release-notes/BIRTHDAY_ANNIVERSARY_CHANGES.md)**

### 📖 User & Ministry Guides (`docs/guides/`)
- **[Data Entry Guide](guides/MARAMON_DATA_ENTRY_GUIDE.md)** — How to format, timestamp, and add convention songs
- **[Maramon Compact View Guide](guides/MARAMON_COMPACT_VIEW.md)** — Compact accordion navigation for convention hymnals
- **[Index & Search Improvements](guides/INDEX_IMPROVEMENTS.md)** — UI overview and instant search features
- **[Sync Setup & Cloud Migration](guides/SYNC_SETUP.md)** — Google Firebase Firestore configuration

### 🏛️ Choir Attendance & Tenure System (`docs/choir-attendance/`)
- **[Quick Start Guide](choir-attendance/QUICKSTART.md)** — 5-minute guide for choir secretaries & directors
- **[Archive Quick Reference](choir-attendance/ARCHIVE_QUICK_REFERENCE.md)** — Daily guide for member status transitions
- **[Past Members Full Guide](choir-attendance/PAST_MEMBERS_GUIDE.md)** — Managing tenure, service periods, and restoration

### 🏗️ Project Architecture & History (`docs/project-info/`)
- **[Project Structure](project-info/PROJECT_STRUCTURE.md)** — Directory layout, data models, and component flow
- **[Reorganization Guide](project-info/RESTRUCTURE.md)** — Directory restructuring rationale
- **[Reorganization Summary](project-info/REORGANIZATION_SUMMARY.md)** — Historical overview of architectural refactoring
- **[SEO & Performance Audit](project-info/SEO_IMPROVEMENTS.md)** — Lighthouse optimization & metadata

---

## 🏛️ Ministry Applications Overview

### 1. 📝 Worship Service Planner (`admin/worship-planner.html`)
- **Intelligent Song Selection**: Auto-generates balanced worship service song lists with 2-month history conflict avoidance.
- **Broadcast & Print Tools**: 1-click formatted WhatsApp broadcast circular generator and printer-ready sheet exports.
- **Liturgical Theme Presets**: Pre-populated weekly church themes according to the lectionary calendar.

### 2. ✅ Choir Attendance & 5-Year Tenure Tracker (`admin/choir-attendance.html`)
- **Rapid Check-In**: Pill toggle interface (`✓ Present` / `✕ Absent`) for Saturday practices and Sunday worship.
- **5-Year Tenure (Sept 2022 – March 2027)**: Automatic original join date preservation across election cycles.
- **In-App Member Induction**: Add new choir members directly from the web interface.
- **Numbered Past Members Archive**: Reverse chronological sorting by retirement date with instant restoration.
- **Reports & Analytics**: Quarterly & Yearly attendance breakdown, dual-tone percentage bars, and PDF exports.

### 3. ⛪ DSMC Sunday Duty Planner (`admin/dsmc-planner.html`)
- **Duty Rotations**: Manages Prasangam, Bible Readings, Sthothrakazcha, Kaiyassoori, and Thubden assignments.
- **Auto-Rotation**: Balances assignments across active choir members.

### 4. ✏️ Split-Pane Lyrics Editor (`admin/lyrics-editor.html`)
- **Hymnal Workspace**: Side-by-side preview with real-time validation and local draft persistence.

---

## 🔒 Security Architecture (Zero-Secrets in Git)

1. **Authentication**: Powered by **Google Firebase Auth** with authorized admin email verification.
2. **Data Storage**: Stored in **Google Firebase Firestore** collections (`members`, `choirAttendance`, `worshipHistory`, `dsmcSchedule`).
3. **CI/CD Security**:
   - `scripts/build-config.js` and `worker.js` contain **zero hardcoded API keys or credentials**.
   - Production on GitHub Pages builds securely via **encrypted GitHub Secrets**.
   - Cloudflare preview runs securely via **Cloudflare Environment Variables**.

---

## 📞 Support & Contributing

For suggestions, hymn corrections, or inquiries:
- **Repository:** [https://github.com/shibinj/Hymn_project](https://github.com/shibinj/Hymn_project)
- **Primary Maintainer:** Shibin John
