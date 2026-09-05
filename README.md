# 🎶 Holy Hymns — Malayalam Christian Songs & Worship Platform

[![Deploy to GitHub Pages](https://github.com/shibinj/Hymn_project/actions/workflows/deploy.yml/badge.svg)](https://github.com/shibinj/Hymn_project/actions/workflows/deploy.yml)
[![Preview](https://img.shields.io/badge/Cloudflare_Preview-Live-orange?logo=cloudflare)](https://hymn-preview.holyhymns.workers.dev/)
[![Firebase](https://img.shields.io/badge/Backend-Firebase_Firestore-FFCA28?logo=firebase)](https://firebase.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A modern, fast, and feature-rich web platform for Malayalam Christian hymns, convention songs, liturgy planning, and choir ministry management.

🌐 **Production Site:** [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)  
⚡ **Live Cloudflare Preview:** [https://hymn-preview.holyhymns.workers.dev/](https://hymn-preview.holyhymns.workers.dev/)

---

## 🎼 Song Collections (695+ Songs)

| Collection | Songs | Description |
|---|:---:|---|
| **📕 Kristheeya Keerthanangal** | **517** | Complete Malayalam Christian Hymn Book with 40 liturgical themes & doxology |
| **🎪 Maramon Convention** | **98** | Choir collections across 8 years (2006, 2008, 2013, 2021, 2023, 2024, 2025, 2026) |
| **✝️ Passion Week Songs** | **23** | Hosanna (Palm Sunday), Good Friday, and Resurrection hymns |
| **🍞 Holy Communion Songs** | **22** | Eucharistic liturgy and sacramental meditation songs |
| **⛺ Kottarakara Convention** | **20** | Official choir selections across 2 years (2025 – 2026) |
| **🎉 Birthday & Anniversary Songs** | **15** | Special occasion prayers, thanksgiving hymns, and anniversary songs |
| **Total Available** | **695+** | **14 Collections across all seasons** |

---

## ✨ Key Features

### 🌐 Public Experience
- **🔍 Instant Hymn Search**: Lightning-fast search by number (`#104`), title in English / Malayalam, or lyrics snippet with real-time dropdown autocomplete.
- **🏷️ 40+ Liturgical Themes**: Categorized by *Worship & Praise*, *Morning*, *Evening*, *Passion Week*, *Christmas*, *Holy Communion*, *Faith & Trust*, *Comfort & Hope*, *Second Coming*, etc.
- **🎵 Modern Glassmorphic Song Player**:
  - Embedded YouTube video playback in a sacred dark-glass container.
  - **Custom Clip Player Controls**: For timestamp-bounded hymns (e.g., Maramon 2008 `?end=256`), YouTube's native duration (e.g., 12:54) is hidden and replaced with custom controls scoped strictly to the song's duration (`0:00 / 4:16`).
  - **Distraction-Free Playback**: Completely eliminates YouTube's "More videos" / related videos overlay grid on pause and end using branded pause masks and server-end decoupling.
  - **Dual-Dispatch Controls**: Instant play/pause/scrub response powered by YouTube IFrame API and direct `postMessage` command pipelines.
  - In-place collection switcher dropdown to jump across hymnals without navigating away.
  - Vector WhatsApp lyrics sharing, printable song sheets, and 1-click clipboard copy.
  - Previous / Next hymn navigation (`←` / `→` keyboard arrow shortcuts).
  - Favorites & bookmarking with local persistence.
- **🤖 Draggable Gemini AI Assistant**: Conversational hymn guide with semantic theme search, viewport boundary clamping, and session position memory.
- **🌗 Theme Toggle**: Sacred Glassmorphism with Dark and Light mode support.

### 🔒 Admin Ministry Suite (`/admin/`)
- **📝 Sunday Worship Service Planner** (`admin/worship-planner.html`):
  - Intelligent service auto-generation with 2-month history conflict avoidance.
  - Vector action toolbar (`🎲 Generate`, `💾 Save`, `WhatsApp Broadcast`, `📜 History`, `🖨️ Print`, `🔄 Cloud Sync`).
  - Pre-populated weekly church themes and liturgical cycle scheduling.
- **✅ Choir Attendance & Tenure Tracker** (`admin/choir-attendance.html`):
  - 1-click `✓ Present` / `✕ Absent` pill toggles for rapid check-in.
  - **🏛️ 5-Year Tenure Management (Sept 2022 – March 2027)** with automatic original joining date preservation across re-elections.
  - **➕ In-App Member Induction Form**: Add new members directly via UI with voice section and selection notes.
  - **📦 Numbered Past Members Archive**: Reverse chronological sorting by retirement date with 1-click restoration.
  - Live Quarterly & Yearly reports with dual-tone percentage bars, podium standings, and PDF export.
- **⛪ DSMC Sunday Duty Planner** (`admin/dsmc-planner.html`):
  - Assigns choir members to Sunday service duties (*Prasangam, Bible readings, Sthothrakazcha, Kaiyassoori, Thubden*).
  - Smart auto-fill with rotation history and formatted WhatsApp circular generator.
- **✏️ Split-Pane Hymnal Lyrics Editor** (`admin/lyrics-editor.html`):
  - Multi-collection lyrics editor with status pills (*Has Lyrics*, *Draft*, *No Lyrics*).

---

## 📁 Repository Architecture

```text
Hymn_project/
├── 🌐 Public Web App
│   ├── index.html                    # Main landing page, search & theme browser
│   ├── viewer.html                   # Song reader, YouTube player & collection switcher
│   ├── admin.html                    # Admin direct gateway redirect
│   ├── worker.js                     # Cloudflare Worker router & edge asset handler
│   ├── wrangler.jsonc                # Cloudflare Worker deployment configuration
│   └── package.json, firebase.json
│
├── 🔒 Admin Ministry Suite (admin/)
│   ├── admin.html                    # Admin Dashboard (Cloud Sync status)
│   ├── worship-planner.html          # Sunday Worship Service Planner
│   ├── choir-attendance.html         # Choir Attendance & 5-Year Tenure Manager
│   ├── dsmc-planner.html             # DSMC Sunday Duty Planner & Circulars
│   ├── lyrics-editor.html            # Split-Pane Hymnal Lyrics Editor
│   ├── timestamp-converter.html      # YouTube Timestamp Deep-Link Converter
│   └── generate-password-hash.html   # SHA-256 Utility
│
├── 🎼 Data & Media (data/ & assets/)
│   ├── data/kristheeya-keerthanangal.json   # 517 Hymns
│   ├── data/maramon-20XX.json              # 2006, 2008, 2013, 2021, 2023, 2024, 2025, 2026
│   ├── data/kottarakara-20XX.json          # 2025, 2026
│   ├── data/holy-communion.json            # 22 Holy Communion Songs
│   ├── data/passion-week.json              # 23 Passion Week Songs
│   ├── data/birthday-anniversary.json      # 15 Special Occasion Songs
│   ├── data/song-categories.json           # 40 Liturgical Theme Categories
│   ├── data/choir-members.json             # Fallback active choir roster
│   ├── data/choir-members-archive.json     # Fallback past members archive
│   └── assets/                             # Lottie animations & vector assets
│
├── 📚 Documentation (docs/)
│   ├── README.md                           # Documentation Index & Guides
│   ├── guides/                             # Feature tutorials & data entry
│   ├── project-info/                       # Architecture & reorganization history
│   ├── release-notes/                      # Feature changelogs & version history
│   └── choir-attendance/                   # Attendance specifications & manuals
│
└── 🛠️ Build & CI/CD (scripts/ & .github/)
    ├── scripts/build-config.js             # Zero-secret build config generator
    └── .github/workflows/deploy.yml        # GitHub Actions production deployment
```

---

## ☁️ Cloud Architecture & Security

The platform connects to **Google Firebase Firestore** with **Google OAuth Authentication**:

| Feature | Firestore Document / Collection | Description |
|---|---|---|
| **Worship History** | `worshipHistory` | Logged worship plans & auto-fill history |
| **DSMC Duty Schedules** | `dsmcSchedule` | Sunday service duty rosters |
| **Choir Attendance** | `choirAttendance/{YYYY-MM-DD}` | Date-stamped member attendance records |
| **Active Choir Roster** | `members/active` | Active Female, Male, and Occasional members |
| **Member Tenure Metadata**| `members/meta` | Original joining dates & selection notes |
| **Past Members Archive** | `members/archive` | Chronological record of retired/inactive members |

### 🔒 Zero-Secret Security Pipeline
- **Zero Secrets in Repository**: No API keys, tokens, or email whitelists are stored in Git.
- **Production (GitHub Actions on `main`)**: Builds dynamically using encrypted **GitHub Secrets** (`FIREBASE_API_KEY`, `FIREBASE_ALLOWED_ADMINS`, etc.).
- **Preview (Cloudflare on `dev-preview`)**: Served dynamically using **Cloudflare Environment Variables**.

---

## 📚 Documentation Directory

- **[Latest Release Notes](docs/release-notes/MEMBER_MANAGEMENT_AND_TENURE_RELEASE.md)** — 5-Year Tenure, Member Induction & Archive updates
- **[Documentation Index](docs/README.md)** — Complete index of all guides and manuals
- **[Choir Attendance Quick Start](docs/choir-attendance/QUICKSTART.md)** — Guide for choir directors
- **[Past Members & Archive Guide](docs/choir-attendance/PAST_MEMBERS_GUIDE.md)** — Managing retired choir members
- **[Data Entry Guide](docs/guides/MARAMON_DATA_ENTRY_GUIDE.md)** — How to digitize and add new hymns

---

## 📜 License & Credits

Made with ❤️ for the Malayalam Christian community and choir ministry.  
Free to use for non-commercial and church worship purposes.
