# Holy Hymns — Malayalam Christian Songs Collection

A web-based platform for browsing, searching, and playing Malayalam Christian hymns and convention songs, with admin tools for worship planning and choir management.

**Live Site:** [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)

---

## Song Collections

| Collection | Songs | Notes |
|---|---|---|
| Kristheeya Keerthanangal | 517 | Complete Malayalam hymn book |
| Maramon Convention | 96 | 2013, 2021, 2023–2026 |
| Passion Week | 23 | Lent and Easter songs |
| Holy Communion | 22 | Qurbana songs |
| Kottarakara Convention | 18 | 2025–2026 |
| Birthday / Anniversary | 15 | Celebration songs |
| **Total** | **681+** | **11 collections** |

---

## Features

**Public**
- Browse all song collections
- View lyrics with Malayalam and English titles
- YouTube video playback
- Search by song number or name
- Next / Previous navigation with keyboard shortcuts (← →)
- Quick-jump to song by number
- Favorites / bookmarks
- Dark mode
- Mobile responsive

**Admin** *(view-only is public; sign-in required to make changes)*
- **Worship Service Planner** — View service history and search by song (public); create/edit/delete services and mark as sung (sign-in required)
- **Choir Attendance Tracker** — View attendance by date and quarterly/yearly reports with PDF export (public); mark/update attendance (sign-in required)
- **Lyrics Editor** — Add and edit song data *(sign-in required)*
- **Timestamp Converter** — Generate YouTube deep-link timestamps

---

## Project Structure

```
Hymn_DEV/
├── index.html                  # Main landing page
├── viewer.html                 # Song viewer (lyrics + video)
├── admin/
│   ├── admin.html              # Admin dashboard
│   ├── worship-planner.html    # Worship service planner
│   ├── choir-attendance.html   # Choir attendance tracker
│   ├── lyrics-editor.html      # Lyrics editor
│   ├── timestamp-converter.html
│   ├── firebase-config.js      # Firebase config (not committed)
│   └── docs/                   # Admin-specific guides
├── data/
│   ├── kristheeya-keerthanangal.json
│   ├── maramon-20XX.json       # One file per convention year
│   ├── kottarakara-20XX.json
│   ├── holy-communion.json
│   ├── passion-week.json
│   ├── birthday-anniversary.json
│   ├── choir-members.json      # Active member roster
│   └── choir-members-archive.json
├── docs/                       # Project documentation
│   ├── choir-attendance/       # Choir attendance guides
│   └── project-info/           # Architecture and structure notes
├── tools/                      # Utility scripts
├── assets/                     # Large static files
└── archive/                    # Old / unused files
```

---

## Firebase / Cloud Sync

The admin tools use Firebase Firestore for cloud data persistence. Collection names:

| Tool | Firestore Collection |
|---|---|
| Worship Planner (services) | `worshipHistory` |
| Choir Attendance | `choirAttendance` |
| Choir Members (active roster) | `members` → doc `active` |
| Choir Members (archive) | `members` → doc `archive` |

To configure, copy `admin/firebase-config.template.js` to `admin/firebase-config.js` and fill in your project credentials and allowed admin emails.

---

## Quick Start

**Browse songs (public)**
1. Open `index.html`
2. Pick a collection
3. Click a song to view lyrics and video

**View service history / attendance / reports (public)**
1. Navigate to `admin/admin.html`
2. Select a tool — history and reports load without sign-in

**Make changes (sign-in required)**
1. Navigate to `admin/admin.html`
2. Sign in with an authorized Google account
3. Select a tool to create/edit services or mark attendance

---

## Documentation

| Guide | Location |
|---|---|
| Choir Attendance — Quick Start | `docs/choir-attendance/QUICKSTART.md` |
| Choir Attendance — Full Guide | `docs/choir-attendance/COMPLETE.md` |
| Managing Past Members | `docs/choir-attendance/PAST_MEMBERS_GUIDE.md` |
| Adding Songs (Data Entry) | `docs/MARAMON_DATA_ENTRY_GUIDE.md` |
| Project Structure (detailed) | `docs/project-info/PROJECT_STRUCTURE.md` |
| New Viewer Features | `docs/NEW_FEATURES.md` |

---

## Contributing

This is a community resource for the Malayalam Christian community.  
To add songs, report issues, or request access: **shibinjohn@live.com**

---

*Non-commercial community resource.*
