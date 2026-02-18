# Project Structure - Holy Hymns

## 📁 Directory Organization

```
Hymn_project/
│
├── 📄 index.html                    # Main landing page
├── 📄 viewer.html                   # Song viewer page
├── 🖼️ favicon.ico                   # Site icon
├── 📄 robots.txt                    # SEO configuration
├── 📄 sitemap.xml                   # Site map for search engines
├── 📄 README.md                     # Quick start guide
├── 📄 .gitignore                    # Git ignore rules
│
├── 📂 admin/                        # Admin Tools (Password Protected)
│   ├── admin.html                   # Admin dashboard
│   ├── worship-planner.html         # Worship service planner
│   ├── choir-attendance.html        # Attendance tracker
│   ├── lyrics-editor.html           # Song lyrics editor
│   ├── timestamp-converter.html     # YouTube timestamp tool
│   ├── generate-whitelist.html      # Whitelist generator
│   ├── generate-password-hash.html  # Password hash generator
│   └── docs/                        # Admin documentation
│
├── 📂 data/                         # JSON Data Files
│   ├── kristheeya-keerthanangal.json  # 504 hymns
│   ├── holy-communion.json            # 22 communion songs
│   ├── maramon-2013.json              # 16 songs
│   ├── maramon-2021.json              # 20 songs
│   ├── maramon-2023.json              # 12 songs
│   ├── maramon-2024.json              # 16 songs
│   ├── maramon-2025.json              # 16 songs
│   ├── maramon-2026.json              # 16 songs
│   ├── kottarakara-2025.json          # 10 songs
│   ├── kottarakara-2026.json          # 8 songs
│   └── choir-members.json             # Choir member list
│
├── 📂 docs/                         # Project Documentation
│   ├── README.md                      # Full documentation
│   ├── RESTRUCTURE.md                 # Restructure guide
│   ├── INDEX_IMPROVEMENTS.md          # UI improvements log
│   ├── MARAMON_COMPACT_VIEW.md        # Compact view implementation
│   ├── MARAMON_DATA_ENTRY_GUIDE.md    # Data entry guide
│   └── SYNC_SETUP.md                  # Cloud sync setup
│
├── 📂 tools/                        # Utility Scripts
│   ├── extract_playlist.py            # Python playlist extractor
│   └── extract-playlist.html          # HTML playlist extractor
│
├── 📂 assets/                       # Large Files
│   ├── MTC Hymns 37th Edition.pdf     # Hymn book PDF (89MB)
│   ├── Choir_Attendance.xlsx          # Attendance spreadsheet
│   └── songs.json                     # Legacy song data
│
└── 📂 archive/                      # Old/Unused Files
    ├── README.md                      # Archive documentation
    ├── index_old.html                 # Old landing page
    ├── *.py                           # Old Python scripts
    └── ...                            # Other archived files
```

---

## 📄 File Descriptions

### Root Files

| File | Purpose | Size |
|------|---------|------|
| `index.html` | Main landing page with collection cards | ~24KB |
| `viewer.html` | Song viewer with lyrics and videos | ~27KB |
| `favicon.ico` | Site icon | ~15KB |
| `robots.txt` | Search engine instructions | <1KB |
| `sitemap.xml` | Site structure for SEO | ~2KB |
| `README.md` | Quick start guide | ~2KB |

### Admin Tools (`/admin/`)

| File | Purpose | Access |
|------|---------|--------|
| `admin.html` | Dashboard with links to all tools | Password |
| `worship-planner.html` | Plan worship services, select songs | Password |
| `choir-attendance.html` | Track choir attendance with reports | Password |
| `lyrics-editor.html` | Edit song lyrics across collections | Password |
| `timestamp-converter.html` | Convert YouTube timestamps | Public |
| `generate-whitelist.html` | Generate email whitelist | Password |
| `generate-password-hash.html` | Generate password hashes | Public |

### Data Files (`/data/`)

| File | Songs | Status |
|------|-------|--------|
| `kristheeya-keerthanangal.json` | 504 | Complete |
| `holy-communion.json` | 22 | Complete |
| `maramon-2013.json` | 16 | Complete |
| `maramon-2021.json` | 20 | Complete |
| `maramon-2023.json` | 12 | Complete |
| `maramon-2024.json` | 16 | Complete |
| `maramon-2025.json` | 16 | Complete |
| `maramon-2026.json` | 16 | Complete |
| `kottarakara-2025.json` | 10 | Complete |
| `kottarakara-2026.json` | 8 | Complete |
| `choir-members.json` | N/A | Active |

### Documentation (`/docs/`)

| File | Content |
|------|---------|
| `README.md` | Complete project documentation |
| `RESTRUCTURE.md` | Project reorganization guide |
| `INDEX_IMPROVEMENTS.md` | UI improvement changelog |
| `MARAMON_COMPACT_VIEW.md` | Compact view implementation |
| `MARAMON_DATA_ENTRY_GUIDE.md` | How to add new songs |
| `SYNC_SETUP.md` | Cloud sync configuration |

### Tools (`/tools/`)

| File | Purpose | Usage |
|------|---------|-------|
| `extract_playlist.py` | Extract YouTube playlist to JSON | `python3 extract_playlist.py` |
| `extract-playlist.html` | Browser-based playlist extractor | Open in browser |

### Assets (`/assets/`)

| File | Size | Purpose |
|------|------|---------|
| `MTC Hymns 37th Edition.pdf` | 89MB | Reference hymn book |
| `Choir_Attendance.xlsx` | 633KB | Attendance backup |
| `songs.json` | 70KB | Legacy data |

---

## 🔗 Internal Links

### From Root
- `index.html` → `viewer.html?collection=X`
- `index.html` → `admin/admin.html`

### From Admin
- `admin/admin.html` → All admin tools
- `admin/worship-planner.html` → `../data/*.json`
- `admin/choir-attendance.html` → `../data/choir-members.json`
- `admin/lyrics-editor.html` → `../data/*.json`

### From Viewer
- `viewer.html` → `data/*.json`
- `viewer.html` → `index.html` (back button)

---

## 📦 Dependencies

### External
- Google Fonts (Crimson Text, Inter)
- Google Analytics
- YouTube Embed API

### Internal
- No external JavaScript libraries
- Pure HTML/CSS/JavaScript
- No build process required

---

## 🚀 Deployment

### GitHub Pages
- Root: `index.html`
- All paths are relative
- No server-side code

### Local Development
1. Open `index.html` in browser
2. No build step needed
3. Edit files directly

---

## 📝 Maintenance

### Adding New Songs
1. Use `tools/extract_playlist.py` for playlists
2. Or use `admin/lyrics-editor.html`
3. Update JSON files in `data/`

### Adding New Collections
1. Create JSON file in `data/`
2. Add to `viewer.html` collection mapping
3. Add card to `index.html`

### Documentation Updates
1. Edit files in `docs/`
2. Update root `README.md` if needed

---

## 🔒 Security

### Password Protected
- All admin tools (except converters)
- Password hash stored in HTML
- Email whitelist for access

### Public Access
- Main site (`index.html`, `viewer.html`)
- All song data
- Timestamp converter

---

## 📊 Statistics

- **Total Files:** ~50
- **Total Size:** ~90MB (mostly PDF)
- **Code Size:** ~200KB
- **Data Size:** ~150KB
- **Collections:** 10
- **Songs:** 640+

---

**Last Updated:** February 17, 2026
