# Holy Hymns - Malayalam Christian Songs Collection

A comprehensive web-based platform for Malayalam Christian hymns, convention songs, worship planning, and choir management.

🌐 **Live Site**: [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)

---

## 📖 Overview

This project provides:
- **Public Access**: Browse 500+ Malayalam Christian hymns with lyrics and videos
- **Worship Planning**: Smart worship service planner with cloud sync
- **Choir Management**: Attendance tracking with reports and GitHub authentication
- **Admin Tools**: Lyrics editor and utility tools

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

#### 🎪 Convention Songs
- Maramon Convention 2025 & 2026
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
- Quarterly and yearly reports
- GitHub username authentication
- Cloud sync via GitHub Gist
- Member management (add/edit/remove)
- Attendance percentage tracking
- Mobile responsive

#### ✏️ Lyrics Editor
- Add/edit lyrics for all collections
- Multi-collection support
- Easy-to-use interface

---

## 📁 Project Structure

```
Hymn_project/
├── index.html                  # Public landing page
├── viewer.html                 # Hymn viewer (public)
├── admin.html                  # Admin dashboard
│
├── admin/                      # Admin tools (internal use)
│   ├── worship-planner.html
│   ├── choir-attendance.html
│   ├── lyrics-editor.html
│   ├── generate-whitelist.html
│   ├── generate-password-hash.html
│   └── docs/                   # Documentation
│       ├── CHOIR_ATTENDANCE_README.md
│       ├── CHOIR_ATTENDANCE_GUIDE.md
│       ├── BIRTHDAY_ANNIVERSARY_IMPLEMENTATION.md
│       └── MOBILE_IMPROVEMENTS.md
│
├── data/                       # JSON data files
│   ├── kristheeya-keerthanangal.json
│   ├── maramon-2025.json
│   ├── maramon-2026.json
│   ├── kottarakara-2025.json
│   └── kottarakara-2026.json
│
├── archive/                    # Old/unused files
├── README.md                   # This file
├── RESTRUCTURE.md              # Reorganization notes
├── sitemap.xml
├── robots.txt
└── favicon.ico
```

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

**Authentication Setup:**
1. Open `admin/generate-whitelist.html`
2. Add authorized GitHub usernames
3. Generate encrypted whitelist
4. Update in `admin/choir-attendance.html`:
   ```javascript
   const ENCRYPTED_WHITELIST = 'your_encrypted_data';
   const WHITELIST_KEY = 'your_secret_key';
   ```

**Cloud Sync Setup (Optional):**
1. Create GitHub Gist: `choir-attendance-data.json`
2. Update Gist ID and token in code

**Detailed guides available in `admin/docs/`**

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

### Maramon Convention
- **2025**: Convention songs
- **2026**: Latest convention songs

### Kottarakara Convention
- **2025**: Convention songs
- **2026**: Latest convention songs

---

## 🔐 Security

### Public Pages
- No authentication required
- Open access to hymn collections

### Admin Tools
- **Worship Planner**: Optional cloud sync with GitHub token
- **Choir Attendance**: GitHub username authentication
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
- Three member categories: Female, Male, Long-term Absentees
- Quick P/A marking
- Quarterly reports (Q1-Q4)
- Yearly reports
- Attendance percentage with color coding
- Member management (add/edit/remove)
- GitHub authentication
- Cloud sync across devices

---

## 🛠️ Development

### Adding New Songs

1. Open `admin/lyrics-editor.html`
2. Select collection
3. Add song number, name, lyrics, YouTube ID
4. Save to JSON file

### Adding New Collections

1. Create JSON file in `data/` folder
2. Update `viewer.html` collection map
3. Update `index.html` with new card
4. Update admin tools if needed

---

## 📝 Documentation

- **Worship Planner**: See `admin/docs/` (setup guides)
- **Choir Attendance**: See `admin/docs/CHOIR_ATTENDANCE_README.md`
- **Project Structure**: See `RESTRUCTURE.md`
- **Mobile Updates**: See `admin/docs/MOBILE_IMPROVEMENTS.md`

---

## 🌟 Key Features

### For Worship Leaders
✅ Auto-generate worship services
✅ Smart song selection
✅ Theme-based planning
✅ Service history tracking
✅ WhatsApp sharing

### For Choir Directors
✅ Track attendance easily
✅ Generate reports
✅ Manage members
✅ Cloud sync across devices
✅ GitHub authentication

### For Congregation
✅ Browse 500+ hymns
✅ View lyrics in Malayalam
✅ Watch YouTube videos
✅ Search functionality
✅ Mobile-friendly

---

## 🔄 Updates

### Recent Changes (Feb 2026)
- ✅ Reorganized project structure
- ✅ Created admin dashboard
- ✅ Added GitHub authentication for choir attendance
- ✅ Improved mobile responsiveness
- ✅ Added cloud sync to both admin tools
- ✅ Pre-populated worship themes for 2026

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
- **Admin Dashboard**: Open `admin.html` locally
- **GitHub**: https://github.com/shibinj/Hymn_project

---

## 📈 Statistics

- **Total Hymns**: 504+
- **Convention Songs**: 100+
- **Collections**: 5
- **Languages**: Malayalam, English (UI)
- **Admin Tools**: 5

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
