# Holy Hymns — Malayalam Christian Songs & Worship Platform

A comprehensive, modern web platform for Malayalam Christian hymns, convention songs, liturgy planning, and choir ministry management.

🌐 **Production Site:** [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)  
⚡ **Live Preview:** [https://hymn-preview.holyhymns.workers.dev/](https://hymn-preview.holyhymns.workers.dev/)

---

## 🎼 Song Collections

| Collection | Songs | Description |
|---|---|---|
| **Kristheeya Keerthanangal** | 517 | Complete Malayalam Christian Hymn Book with 40 liturgical themes & doxology |
| **Maramon Convention** | 96 | Choir collections across 6 years (2013, 2021, 2023, 2024, 2025, 2026) |
| **Passion Week Songs** | 23 | Hosanna (Palm Sunday), Good Friday, and Resurrection hymns |
| **Holy Communion Songs** | 22 | Eucharistic liturgy and sacramental meditation songs |
| **Kottarakara Convention** | 18 | Official choir selections (2025 – 2026) |
| **Special Occasion Songs** | 15 | Birthday, wedding anniversary, home blessing & thanksgiving prayers |
| **Total** | **691+** | **12 Collections** |

---

## ✨ Features

### 🌐 Public Experience
- **Interactive Instant Search**: Lightning-fast search by hymn number (`#104`), English/Malayalam title, or lyrics snippet with live autocomplete dropdown.
- **Liturgical Theme Browsing**: 40+ categorized themes (*Worship & Praise*, *Morning*, *Evening*, *Passion Week*, *Christmas*, *Holy Communion*, *Faith & Trust*, *Comfort & Hope*, *Second Coming*).
- **Modern Song Viewer & Player**:
  - Embedded YouTube video playback in frosted glass container.
  - Quick collection switcher dropdown to jump across hymnals without leaving the page.
  - Official vector WhatsApp sharing, copy lyrics, and printable song sheets.
  - Previous / Next hymn navigation (`←` / `→` arrow keys supported).
  - Favorites & bookmarking with local persistence.
- **Floating & Draggable AI Assistant**: Gemini-powered conversational assistant with drag-and-drop placement, viewport boundary clamping, and session position memory.
- **Unified Sacred Glassmorphism**: Ambient floating glow animation with instant Dark / Light mode switching.

### 🔒 Admin Ministry Suite (Direct Access via `/admin/`)
- **📝 Worship Service Planner** (`admin/worship-planner.html`):
  - Intelligent service auto-generation with 2-month history conflict avoidance.
  - Dynamic song cards with modern vector action toolbar (`🎲 Generate`, `💾 Save`, `WhatsApp`, `📜 History`, `🖨️ Print`, `🔄 Sync`).
  - Formatted WhatsApp broadcast generator and service history browser.
- **✅ Choir Attendance Tracker** (`admin/choir-attendance.html`):
  - 1-click `✓ Present` / `✕ Absent` pill toggles for rapid check-in.
  - 3-column responsive member grid in Manage Members with numbered badges.
  - Live Quarterly & Yearly reports with dual-tone percentage bars and Top 5 podium.
  - PDF report export and member anniversary notifications.
- **⛪ DSMC Sunday Planner** (`admin/dsmc-planner.html`):
  - Assign choir members to Sunday service duties (*Prasangam, Bible readings, Sthothrakazcha, Kaiyassoori, Thubden*).
  - Smart auto-fill with rotation history and formatted WhatsApp circular generator.
- **✏️ Hymn Lyrics Editor** (`admin/lyrics-editor.html`):
  - Split-pane glass workspace with status pills (*Has Lyrics*, *Draft*, *No Lyrics*) and local draft persistence.
- **🛠️ Utility Tools**:
  - `timestamp-converter.html`: Converts YouTube timestamps to deep-link start/end seconds.
  - `generate-password-hash.html`: Generates secure SHA-256 password hashes.

---

## 📁 Project Architecture

```text
Hymn_project/
├── 🌐 Public Pages
│   ├── index.html                    # Modern landing page, instant search & theme browser
│   ├── viewer.html                   # Song reader, YouTube player & collection switcher
│   ├── admin.html                    # Direct gateway redirect to admin/admin.html
│   ├── favicon.ico, robots.txt, sitemap.xml
│   └── worker.js, wrangler.jsonc, package.json, firebase.json
│
├── 🔒 Admin Suite (admin/)
│   ├── admin.html                    # Admin Dashboard (Active Cloud Sync)
│   ├── worship-planner.html          # Sunday Worship Service Planner
│   ├── choir-attendance.html         # Choir Attendance Tracker & Reports
│   ├── dsmc-planner.html             # DSMC Sunday Duty Planner & Circulars
│   ├── lyrics-editor.html            # Split-Pane Hymnal Lyrics Editor
│   ├── timestamp-converter.html      # YouTube Timestamp Deep-Link Converter
│   ├── generate-password-hash.html   # SHA-256 Hash Generator
│   ├── generate-whitelist.html       # Allowed Email Whitelist Tool
│   ├── theme-preview.html            # Theme Color Palette Sandbox
│   └── firebase-config.js            # Live Firebase Web Configuration
│
├── 🎼 Data & Media (data/ & assets/)
│   ├── data/kristheeya-keerthanangal.json
│   ├── data/maramon-20XX.json        # 2013, 2021, 2023, 2024, 2025, 2026
│   ├── data/kottarakara-20XX.json    # 2025, 2026
│   ├── data/holy-communion.json
│   ├── data/passion-week.json
│   ├── data/birthday-anniversary.json
│   ├── data/song-categories.json     # 40 Liturgical Theme Categories
│   ├── data/choir-members.json       # Active choir roster
│   ├── data/choir-members-archive.json
│   └── assets/                       # Lottie animations and icons
│
├── 📚 Documentation (docs/)
│   ├── README.md                     # Documentation Index
│   ├── guides/                       # UI enhancements, data entry, compact view, sync setup
│   ├── project-info/                 # Architecture, restructure history & SEO audit
│   ├── release-notes/                # Feature changelogs & bugfix logs
│   └── choir-attendance/             # Attendance specifications & user manuals
│
├── 🛠️ Tools & Scripts (scripts/ & tools/)
│   ├── scripts/build-config.js       # Cloudflare build configuration generator
│   └── tools/extract-playlist.*      # YouTube playlist extraction utilities
│
└── 📦 Archive (archive/)             # Legacy python scrapers and historical scripts
```

---

## ☁️ Cloud Synchronization & Security

The admin suite connects to Firebase Firestore with Google Authentication:

| Feature | Firestore Collection / Document |
|---|---|
| **Worship History** | `worshipHistory` |
| **DSMC Duty Schedules** | `dsmcSchedule` |
| **Choir Attendance** | `choirAttendance` |
| **Active Choir Roster** | `members` ➔ `active` |
| **Archived Choir Roster** | `members` ➔ `archive` |

- **Public Access**: Song browsing, service history, and attendance reports load without authentication.
- **Admin Access**: Sign in with an authorized Google account to modify service plans, save attendance, or edit lyrics.

---

## 🤖 AI Hymn Assistant (Gemini AI)

- **Engine:** Google Gemini Flash
- **Backend:** Firebase Cloud Function / Cloud Run (`https://hymnchat-l75oqndw3a-uc.a.run.app`)
- **Capabilities:** Semantic song search by theme, lyrics excerpt, scripture, liturgical season, or song title (English / Malayalam).

---

## 📚 Documentation Directory

| Document | Path |
|---|---|
| **Documentation Index** | [docs/README.md](docs/README.md) |
| **Choir Attendance Quick Start** | [docs/choir-attendance/QUICKSTART.md](docs/choir-attendance/QUICKSTART.md) |
| **Choir Attendance Full Guide** | [docs/choir-attendance/COMPLETE.md](docs/choir-attendance/COMPLETE.md) |
| **Past Members Management** | [docs/choir-attendance/PAST_MEMBERS_GUIDE.md](docs/choir-attendance/PAST_MEMBERS_GUIDE.md) |
| **Data Entry Guide** | [docs/guides/MARAMON_DATA_ENTRY_GUIDE.md](docs/guides/MARAMON_DATA_ENTRY_GUIDE.md) |
| **Project Architecture** | [docs/project-info/PROJECT_STRUCTURE.md](docs/project-info/PROJECT_STRUCTURE.md) |
| **SEO & Performance Audit** | [docs/project-info/SEO_IMPROVEMENTS.md](docs/project-info/SEO_IMPROVEMENTS.md) |

---

## 📞 Support & Contributing

This website is a non-commercial community resource dedicated to the Malayalam Christian community worldwide.

For song contributions, questions, or access inquiries: **shibinjohn@live.com**

*© 2026 Holy Hymns | Dedicated to Christ & His Church*
