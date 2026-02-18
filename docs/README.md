# Holy Hymns - Malayalam Christian Songs Collection

A comprehensive web-based platform for Malayalam Christian hymns, convention songs, worship planning, and choir management.

🌐 **Live Site**: [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)

---

## 📖 Overview

This project provides:
- **Public Access**: Browse 640+ Malayalam Christian hymns with lyrics and videos
- **Worship Planning**: Smart worship service planner with cloud sync
- **Choir Management**: Attendance tracking with reports and GitHub authentication
- **Admin Tools**: Lyrics editor and utility tools

---

## 📊 Quick Stats

- **640+ Songs** across 10 collections
- **504 Hymns** from Kristheeya Keerthanangal
- **96 Maramon Convention Songs** (2013-2026)
- **22 Holy Communion Songs**
- **18 Kottarakara Convention Songs**

---

## 📁 Project Structure

```
Hymn_project/
├── index.html              # Main landing page
├── viewer.html             # Song viewer
├── admin/                  # Admin tools (password protected)
│   ├── admin.html         # Dashboard
│   ├── worship-planner.html
│   ├── choir-attendance.html
│   ├── lyrics-editor.html
│   └── timestamp-converter.html
├── data/                   # JSON song data (11 files)
├── docs/                   # Documentation (this folder)
├── tools/                  # Utility scripts
├── assets/                 # Large files (PDFs, Excel)
└── archive/                # Old/unused files
```

See [project-info/PROJECT_STRUCTURE.md](project-info/PROJECT_STRUCTURE.md) for detailed structure.

---

## 📚 Documentation Index

### Getting Started
- **[Main README](../README.md)** - Project overview and quick start
- **[UI Improvements](INDEX_IMPROVEMENTS.md)** - Recent UI changes
- **[Data Entry Guide](MARAMON_DATA_ENTRY_GUIDE.md)** - Adding songs
- **[Sync Setup](SYNC_SETUP.md)** - Cloud sync configuration

### Choir Attendance System
- **[Quick Start](choir-attendance/QUICKSTART.md)** - 5-minute overview
- **[Archive Quick Reference](choir-attendance/ARCHIVE_QUICK_REFERENCE.md)** - Daily use guide
- **[Complete Guide](choir-attendance/PAST_MEMBERS_GUIDE.md)** - Full documentation
- **[All Choir Docs](choir-attendance/)** - Complete choir attendance documentation

### Project Information
- **[Project Structure](project-info/PROJECT_STRUCTURE.md)** - File organization
- **[Restructure Guide](project-info/RESTRUCTURE.md)** - Reorganization history
- **[Reorganization Summary](project-info/REORGANIZATION_SUMMARY.md)** - Summary of changes

### Song Collections
- **[Maramon Compact View](MARAMON_COMPACT_VIEW.md)** - Maramon songs display

---

## 🎯 Features

### Public Features

#### 📕 Kristheeya Keerthanangal
- Complete Malayalam Christian Hymn Book
- 504 hymns + doxology
- Lyrics in Malayalam
- YouTube video integration
- Search functionality
- Dark mode support
- Mobile responsive

#### ✝️ Holy Communion Songs
- 22 Malayalam Holy Communion songs
- Full lyrics and videos
- DSMC Media collection

#### 🎪 Convention Songs
- Maramon Convention 2013 (16 songs)
- Maramon Convention 2021 (20 songs)
- Maramon Convention 2023 (12 songs)
- Maramon Convention 2024 (16 songs)
- Maramon Convention 2025 (16 songs)
- Maramon Convention 2026 (16 songs)
- Kottarakara Convention 2025 & 2026
- Full lyrics and videos
- Organized by year

### Admin Features (Internal Use)

#### 📝 Worship Service Planner
- Auto-generate Sunday worship services
- Smart song selection with learning
- Avoids recently used songs
- Manual override options
- Cloud sync via GitHub Gist
- WhatsApp sharing
- Print-ready format
- Service history tracking

#### ✅ Choir Attendance Tracker
- Track member attendance (Saturday/Sunday)
- Compact dropdown UI with auto-save
- Quarterly and yearly reports with bar charts
- Cloud sync via GitHub Gist (attendance only)
- Member list stored in JSON file
- GitHub username authentication
- View-only mode for unauthenticated users
- Mobile responsive

#### ✏️ Lyrics Editor
- Add/edit lyrics for all collections
- Multi-collection support
- Easy-to-use interface

---

---

## 🚀 Quick Start

### For Public Users

1. Visit [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)
2. Browse hymn collections
3. Search for songs
4. View lyrics and videos

### For Administrators

1. Open `admin.html` in browser
2. Access admin tools:
   - Worship Service Planner
   - Choir Attendance Tracker
   - Lyrics Editor
3. Follow setup guides in `admin/docs/`

---

## 🔧 Setup (Admin Tools)

### Worship Service Planner

**Cloud Sync Setup (Optional):**
1. Create GitHub Gist at https://gist.github.com
2. Filename: `worship-service-history.json`
3. Content: `{}`
4. Get Gist ID and GitHub token
5. Update in `admin/worship-planner.html`:
   ```javascript
   const SHARED_GIST_ID = 'your_gist_id';
   const SHARED_GIST_TOKEN = 'your_token';
   ```

### Choir Attendance Tracker

**Member List Setup:**
1. Edit `data/choir-members.json`:
   ```json
   {
     "female": ["Name 1", "Name 2", ...],
     "male": ["Name 3", "Name 4", ...],
     "occasional": ["Name 5", "Name 6", ...]
   }
   ```
2. Refresh the page to load updated members

**Note:** "Occasional" members are regular members who attend when available (e.g., students/workers abroad).

**Cloud Sync Setup (Optional):**
1. Open the attendance page in browser
2. Mark some attendance
3. Click "💾 Save Attendance" or "☁️ Sync to Cloud"
4. Enter your GitHub Personal Access Token when prompted
5. Token is saved in browser (one-time setup)

**Getting a GitHub Token:**
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name: "Choir Attendance Sync"
4. Select ONLY "gist" permission
5. Generate and copy the token
6. Paste when prompted in the app

**Note:** 
- Only attendance data syncs to Gist
- Member names are stored in the JSON file
- Token is stored in browser localStorage (never in code/Git)
- Each user can use their own token

---

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Requirements:**
- JavaScript enabled
- localStorage support
- Internet connection (for cloud sync and GitHub auth)

---

## 🎨 Collections

### Kristheeya Keerthanangal
- **Songs**: 504 hymns + 13 doxologies
- **Language**: Malayalam
- **Content**: Traditional Christian hymns

### Holy Communion Songs
- **Songs**: 22 songs
- **Language**: Malayalam
- **Content**: DSMC Media Holy Communion collection

### Maramon Convention
- **2013**: 16 songs
- **2021**: 20 songs
- **2023**: 12 songs
- **2024**: 16 songs
- **2025**: 16 songs
- **2026**: 16 songs

### Kottarakara Convention
- **2025**: 10 songs
- **2026**: 8 songs

---

## 🔐 Security

### Public Pages
- No authentication required
- Open access to hymn collections

### Admin Tools
- **Worship Planner**: Optional cloud sync with GitHub token
- **Choir Attendance**: Compact dropdown UI, auto-save, GitHub authentication, view-only mode
- **Lyrics Editor**: No authentication (internal use)

### Data Storage
- **Public**: Static JSON files
- **Admin**: Browser localStorage + optional GitHub Gist sync
- **Privacy**: Names only (no sensitive data)

---

## 📊 Admin Tools Features

### Worship Service Planner
- Auto-generates 6-7 songs per service
- Categories: Opening, Bible Reading, Birthday/Anniversary, Offertory, Qurbana (2-3), Doxology
- Smart learning from history
- Avoids songs used in last 2 months
- Pre-populated weekly themes
- Manual song override
- Cloud sync across devices
- WhatsApp sharing
- Print support

### Choir Attendance Tracker
- Three member categories: Female, Male, Occasional Attendees
- Compact dropdown UI for quick marking
- Auto-save on selection
- Quarterly reports (Q1-Q4) with bar charts
- Yearly reports with bar charts
- Attendance percentage with color coding
- Member list stored in JSON file (easy to edit)
- Cloud sync for attendance data only
- GitHub username authentication
- View-only mode for public access

---

## 🛠️ Development

### Adding New Songs

1. Open `admin/lyrics-editor.html`
2. Select collection
3. Add song number, name, lyrics, YouTube ID
4. Save to JSON file

**YouTube ID Format for Convention Songs:**
- For songs from a single long video, use: `VIDEO_ID?start=SECONDS&end=SECONDS`
- Example: `"youtubeId": "rYuNAJ4QO58?start=1557&end=2054"`
- Use `admin/timestamp-converter.html` to convert time (MM:SS) to seconds

### Adding New Collections

1. Create JSON file in `data/` folder
2. Update `viewer.html` collection map
3. Update `index.html` with new card
4. Update admin tools if needed

### Utility Tools

**Timestamp Converter** (`admin/timestamp-converter.html`)
- Convert YouTube timestamps between time format (MM:SS) and seconds
- Useful for setting start/end times for convention songs
- Bidirectional conversion

---

## 📝 Documentation

- **[Project Structure](PROJECT_STRUCTURE.md)** - Complete file organization
- **[Reorganization Summary](REORGANIZATION_SUMMARY.md)** - Recent restructure details
- **[Index Improvements](INDEX_IMPROVEMENTS.md)** - UI enhancements log
- **[Maramon Compact View](MARAMON_COMPACT_VIEW.md)** - Compact view implementation
- **[Data Entry Guide](MARAMON_DATA_ENTRY_GUIDE.md)** - How to add songs
- **[Sync Setup](SYNC_SETUP.md)** - Cloud sync configuration
- **[Restructure Guide](RESTRUCTURE.md)** - Original reorganization notes
- **Worship Planner**: See `../admin/docs/` (setup guides)
- **Choir Attendance**: See `../admin/docs/CHOIR_ATTENDANCE_README.md`

---

## 🌟 Key Features

### For Worship Leaders
✅ Auto-generate worship services
✅ Smart song selection
✅ Theme-based planning
✅ Service history tracking
✅ WhatsApp sharing

### For Choir Directors
✅ Track attendance easily with dropdown UI
✅ Auto-save as you mark
✅ Generate visual bar chart reports
✅ Edit members in JSON file
✅ Cloud sync for attendance
✅ View-only mode for transparency

### For Congregation
✅ Browse 640+ hymns and songs
✅ View lyrics in Malayalam
✅ Watch YouTube videos
✅ Search functionality
✅ Mobile-friendly

---

## 🔄 Updates

### Recent Changes (Feb 2026)
- ✅ **Project reorganization** - Created docs/, tools/, assets/ folders
- ✅ **Maramon compact view** - Expandable accordion for 6 years
- ✅ **Index page improvements** - Stats banner, NEW badges, year backgrounds
- ✅ Added Holy Communion Songs collection (22 songs)
- ✅ Added Maramon Convention 2013 (16 songs)
- ✅ Added Maramon Convention 2021 (20 songs)
- ✅ Added Maramon Convention 2023 (12 songs)
- ✅ Added Maramon Convention 2024 (16 songs)
- ✅ Created playlist extraction tool
- ✅ Simplified choir attendance (members in JSON file)
- ✅ Compact dropdown UI with auto-save
- ✅ Bar chart reports (quarterly/yearly)
- ✅ Token prompt for cloud sync (no hardcoding)
- ✅ GitHub authentication with view-only mode
- ✅ Improved mobile responsiveness
- ✅ Added cloud sync to both admin tools
- ✅ Pre-populated worship themes for 2026
- ✅ YouTube timestamp converter utility
- ✅ Fixed convention song video start/end times

---

## 📞 Support

### For Public Users
- Browse the site and enjoy the hymns
- No support needed - it just works!

### For Administrators
- Check documentation in `admin/docs/`
- Review setup guides
- Test in different browsers

---

## 🙏 Credits

**Made with ❤️ for the Malayalam Christian community**

### Contributors
- Hymn collection and digitization
- Convention song compilation
- Admin tools development
- Mobile optimization

---

## 📜 License

Free to use for non-commercial, ministry purposes.

---

## 🔗 Links

- **Live Site**: https://shibinj.github.io/Hymn_project/
- **Admin Dashboard**: `/admin/admin.html` (password protected)
- **Contact**: shibinjohn@live.com

---

## 📈 Statistics

- **Total Songs**: 640+
- **Collections**: 10
- **Years Covered**: 2013-2026
- **Hymn Books**: 2 (Kristheeya Keerthanangal, Holy Communion)
- **Convention Songs**: 114 (Maramon: 96, Kottarakara: 18)
- **Admin Tools**: 6
- **Languages**: Malayalam, English (UI)

---

**Last Updated:** February 17, 2026
- **GitHub**: https://github.com/shibinj/Hymn_project

---

## 📈 Statistics

- **Total Hymns**: 504+
- **Holy Communion Songs**: 22
- **Convention Songs**: 114 (Maramon: 96, Kottarakara: 18)
- **Total Songs**: 640+
- **Collections**: 10
- **Languages**: Malayalam, English (UI)
- **Admin Tools**: 6

---

## 🎯 Roadmap

### Planned Features
- [ ] Bulk import for attendance
- [ ] Export reports to Excel
- [ ] Email notifications
- [ ] More convention collections
- [ ] Audio recordings
- [ ] Chord charts
- [ ] Multi-language support

---

**Last Updated**: February 15, 2026

**Version**: 2.0 (Reorganized Structure)
