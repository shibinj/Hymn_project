# Choir Attendance Tracker

A web-based attendance tracking system for church choirs with cloud sync and comprehensive reporting.

🌐 **Standalone Application**: Works in any modern web browser

---

## Features

### 📝 Attendance Management
- **Three Member Categories**: Female, Male, and Occasional Attendees
- **Quick Marking**: Simple P (Present) / A (Absent) buttons
- **Date Selector**: Mark attendance for any Saturday/Sunday
- **Visual Status**: Color-coded attendance indicators
- **Auto-save**: Data persists in browser localStorage

### 👥 Member Management
- **JSON File Storage**: Members stored in `data/choir-members.json`
- **Easy Editing**: Edit member list in any text editor
- **Three Categories**: Female, Male, Occasional Attendees
- **Simple Format**: Plain JSON array structure
- **No Authentication**: Just edit the file and refresh

### ☁️ Cloud Sync (Optional)
- **GitHub Gist Integration**: Sync attendance data across devices
- **Auto-sync**: On load, after save, every 5 minutes
- **Team Collaboration**: Multiple users can access same data
- **Offline Support**: Works offline, syncs when online
- **Attendance Only**: Only attendance data syncs (not member names)

### 📊 Reports
- **Quarterly Reports**: Q1, Q2, Q3, Q4 attendance summaries
- **Yearly Reports**: Full year attendance overview
- **Attendance Percentage**: Color-coded performance indicators
  - Green: ≥75% (Good)
  - Orange: 50-74% (Warning)
  - Red: <50% (Poor)
- **Present/Absent Counts**: Detailed statistics per member
- **Saturday/Sunday Only**: Only counts weekend attendance

### 📱 Mobile Responsive
- **Works on All Devices**: Desktop, tablet, and mobile
- **Touch-Friendly**: Large buttons for easy tapping
- **Optimized Layout**: Adapts to screen size
- **iOS Compatible**: Tested on iPhone 16 Pro Max

---

## Quick Start

### 1. Set Up Member List

**Edit Member File:**
1. Open `data/choir-members.json` in text editor
2. Update the member names:
   ```json
   {
     "female": ["Name 1", "Name 2", "Name 3"],
     "male": ["Name 4", "Name 5", "Name 6"],
     "occasional": ["Name 7", "Name 8"]
   }
   ```
3. Save file
4. Refresh the attendance page

**Tips:**
- Keep names in alphabetical order for easier management
- Use consistent name formatting
- Backup this file regularly

### 2. Set Up Cloud Sync (Optional)

**Create GitHub Gist:**
1. Go to https://gist.github.com
2. Create new **secret** gist
3. Filename: `choir-attendance-data.json`
4. Content: `{}`
5. Copy Gist ID from URL

**Get GitHub Token:**
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select "gist" permission only
4. Copy token

**Configure Sync:**
1. Open `admin/choir-attendance.html` in text editor
2. Find line ~460: `const SHARED_GIST_ID = '';`
3. Paste your Gist ID
4. Find line ~461: `const SHARED_GIST_TOKEN = '';`
5. Paste your GitHub token
6. Save file

**Note:** Only attendance data syncs to Gist, not member names.

### 3. Start Using

1. Open `admin/choir-attendance.html` in browser
2. Mark attendance on the main tab
3. View reports in Quarterly/Yearly tabs
4. Check "Manage Members" tab for member list instructions

---

## File Structure

```
Hymn_project/
├── choir-attendance.html           # Main application
├── generate-whitelist.html         # Whitelist generator tool
├── generate-password-hash.html     # Legacy password tool (not used)
├── CHOIR_ATTENDANCE_GUIDE.md       # Detailed setup guide
├── CHOIR_ATTENDANCE_README.md      # This file
└── Choir_Attendance.xlsx           # Original Excel reference
```

---

## Usage Guide

### Marking Attendance

1. **Select Date**: Choose the service date (defaults to today)
2. **Mark Status**: Click P (Present) or A (Absent) for each member
3. **Save**: Click "💾 Save Attendance" button
4. **Sync**: Data syncs to cloud automatically (if configured)

**Note**: Only Saturdays and Sundays are counted in reports.

### Viewing Reports

**Quarterly Report:**
1. Click "📊 Quarterly Report" tab
2. Select quarter (Q1/Q2/Q3/Q4)
3. Select year
4. View attendance percentages

**Yearly Report:**
1. Click "📈 Yearly Report" tab
2. Select year
3. View full year summary

### Managing Members (Admin)

1. Click "⚙️ Manage Members" tab
2. Enter your GitHub username
3. Click "Verify & Unlock"
4. Access granted if authorized

**Add Member:**
- Enter name, select gender and status
- Click "➕ Add Member"

**Edit Member:**
- Click "✏️ Edit" next to member name
- Enter new name
- Attendance history automatically updated

**Remove Member:**
- Click "🗑️ Remove" next to member name
- Confirm deletion

---

## Security

### Authentication
- **GitHub-based**: Uses GitHub usernames for authentication
- **Encrypted Whitelist**: Authorized users list encrypted in code
- **GitHub Validation**: Verifies users exist on GitHub API
- **No Shared Passwords**: Each user has their own identity

### Data Storage
- **Member Names**: Stored in `data/choir-members.json` file
- **Attendance Data**: Browser localStorage + optional GitHub Gist
- **No Encryption**: Data stored in plain text (names only)
- **Privacy Level**: Low-Medium (names only, no sensitive data)

### Best Practices
- ✅ Use secret gist (not public)
- ✅ Backup choir-members.json regularly
- ✅ Keep GitHub token confidential
- ✅ Only share file with authorized users
- ✅ Secure computer access
- ✅ Don't commit token to public repos

---

## Data Management

### Backup Data

**Member List:**
- Simply copy `data/choir-members.json` to backup location
- Commit to Git for version control

**Attendance Data (Browser Console):**
```javascript
// Backup attendance
console.log(localStorage.getItem('choirAttendance'));
```
Copy output and save to file.

**Method 2: Cloud Sync**
- Data automatically backed up to GitHub Gist
- Access gist at https://gist.github.com/YOUR_GIST_ID

### Restore Data

**From Backup:**
```javascript
// Restore attendance
localStorage.setItem('choirAttendance', 'PASTE_BACKUP_HERE');

// Restore members
localStorage.setItem('choirMembers', 'PASTE_BACKUP_HERE');
```
Reload page.

**From Cloud:**
- Click "🔄 Sync Now" (if sync configured)
- Or reload page (auto-syncs on load)

### Export Reports

**To Excel/CSV:**
1. View report
2. Select table data
3. Copy and paste into Excel

**To PDF:**
1. View report
2. Press Ctrl+P (Cmd+P on Mac)
3. Select "Save as PDF"

---

## Troubleshooting

### Authentication Issues

**Problem**: Can't access member management
- **Solution**: Check GitHub username spelling
- **Solution**: Verify username is in whitelist
- **Solution**: Check internet connection (GitHub validation)

**Problem**: "Whitelist not configured" error
- **Solution**: Generate and set encrypted whitelist
- **Solution**: Check ENCRYPTED_WHITELIST is not empty

### Data Issues

**Problem**: Attendance not saving
- **Solution**: Check browser allows localStorage
- **Solution**: Try different browser
- **Solution**: Check browser not in incognito mode

**Problem**: Data disappeared
- **Solution**: Check if browser data was cleared
- **Solution**: Restore from cloud sync
- **Solution**: Restore from backup

### Sync Issues

**Problem**: Cloud sync not working
- **Solution**: Check Gist ID is correct
- **Solution**: Check GitHub token is valid
- **Solution**: Check internet connection
- **Solution**: Verify token has "gist" permission

**Problem**: Sync status shows error
- **Solution**: Regenerate GitHub token
- **Solution**: Check Gist still exists
- **Solution**: Verify Gist filename is correct

### Report Issues

**Problem**: Reports show 0%
- **Solution**: Ensure marking attendance for Sat/Sun only
- **Solution**: Check date range includes marked dates
- **Solution**: Verify attendance was saved

---

## Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Requirements:**
- JavaScript enabled
- localStorage support
- Internet connection (for GitHub auth and sync)

---

## Customization

### Change Color Scheme

Edit CSS in `choir-attendance.html` (around line 20):

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Attendance Thresholds

Edit `displayReport` function (around line 650):

```javascript
${row.percentage >= 75 ? 'good' : row.percentage >= 50 ? 'warning' : 'poor'}
```

Change `75` and `50` to your preferred thresholds.

### Add More Member Categories

1. Add category to `members` object
2. Add section in HTML
3. Update `renderAttendance()` function
4. Update reports to include new category

---

## Advanced Features

### Multi-Year Support

The system supports multiple years. Just select the year in reports.

### Date Range Filtering

Reports automatically filter by quarter or year selected.

### Attendance History

All attendance records are preserved. Edit member names without losing history.

### Cloud Collaboration

Multiple users can mark attendance simultaneously with cloud sync enabled.

---

## Limitations

- **Internet Required**: For GitHub authentication and cloud sync
- **Browser-Based**: Data stored per browser (unless cloud sync enabled)
- **No Encryption**: Attendance data stored in plain text
- **Weekend Only**: Reports only count Saturday/Sunday attendance
- **Manual Entry**: No bulk import (except initial setup)

---

## Future Enhancements

Possible additions:
- Data encryption at rest
- Bulk import from Excel
- Export to Excel directly
- Email reports
- Attendance trends/charts
- SMS/Email notifications
- Member photos
- Notes/comments per attendance
- Multiple service times
- Attendance goals/targets

---

## Support

### Documentation
- **Setup Guide**: `CHOIR_ATTENDANCE_GUIDE.md`
- **This README**: `CHOIR_ATTENDANCE_README.md`
- **Code Comments**: Inline documentation in HTML file

### Getting Help
1. Check this README first
2. Review the setup guide
3. Check browser console for errors (F12)
4. Verify configuration settings
5. Test in different browser

---

## License

Created for church ministry use. Free to use and modify for non-commercial purposes.

---

## Credits

**Made with ❤️ for the choir ministry**

Part of the Holy Hymns project - Malayalam Christian hymns and worship tools.

---

## Version History

**v1.0** (2026-02-15)
- Initial release
- GitHub authentication
- Cloud sync via Gist
- Quarterly/Yearly reports
- Member management
- Mobile responsive

---

## Contact

For issues or questions, refer to the documentation or test in a different browser.

---

**Last Updated**: February 15, 2026
