# Choir Attendance System - Setup Guide

## Overview
A web-based choir attendance tracking system with quarterly/yearly reports and member management.

---

## Features

✅ **Mark Attendance**
- Separate sections for Female (17), Male (11), and Long-term Absentees (8)
- Quick P (Present) / A (Absent) buttons
- Date selector for any Saturday/Sunday
- Auto-saves to browser localStorage
- Optional cloud sync via GitHub Gist

✅ **Cloud Sync (Optional)**
- Sync attendance across multiple devices
- GitHub Gist integration
- Auto-sync every 5 minutes
- View-only mode (no token) or full sync (with token)
- Manual sync button available

✅ **Quarterly Reports**
- Q1 (Jan-Mar), Q2 (Apr-Jun), Q3 (Jul-Sep), Q4 (Oct-Dec)
- Shows Present/Absent/Total days
- Attendance percentage with color coding:
  - Green: ≥75% (Good)
  - Orange: 50-74% (Warning)
  - Red: <50% (Poor)

✅ **Yearly Reports**
- Full year attendance summary
- Same metrics as quarterly

✅ **Member Management**
- Password protected (default: `choir2026`)
- Add new members (Female/Male/Absentee)
- Remove members
- Automatic alphabetical sorting

✅ **Mobile Responsive**
- Works on phones, tablets, desktops
- Touch-friendly buttons

---

## Setup Instructions

### Step 1: Update Member Names

Open `choir-attendance.html` and find this section (around line 250):

```javascript
let members = {
    female: [
        'Member F1', 'Member F2', ...  // REPLACE WITH YOUR NAMES
    ],
    male: [
        'Member M1', 'Member M2', ...  // REPLACE WITH YOUR NAMES
    ],
    absentee: [
        'Absentee 1', 'Absentee 2', ...  // REPLACE WITH YOUR NAMES
    ]
};
```

**Replace with your actual member names from Excel:**

```javascript
let members = {
    female: [
        'Anna Thomas',
        'Elizabeth John',
        'Grace Matthew',
        // ... add all 17 female members in alphabetical order
    ],
    male: [
        'David Abraham',
        'John Peter',
        'Thomas Joseph',
        // ... add all 11 male members in alphabetical order
    ],
    absentee: [
        'Member Name 1',
        'Member Name 2',
        // ... add all 8 long-term absentees
    ]
};
```

### Step 2: Set Up GitHub Authentication

**Generate Encrypted Whitelist:**

1. Open `generate-whitelist.html` in your browser
2. Change the secret key (default: `choir-auth-2026`)
3. Add GitHub usernames of authorized users (one at a time)
4. Click "Generate Encrypted Whitelist"
5. Copy the encrypted whitelist
6. Open `choir-attendance.html`
7. Find line ~462: `const ENCRYPTED_WHITELIST = '';`
8. Paste the encrypted whitelist between the quotes
9. Find line ~463: `const WHITELIST_KEY = 'choir-auth-2026';`
10. Replace with your secret key
11. Save the file

**Example:**
```javascript
const ENCRYPTED_WHITELIST = 'SGVsbG8gV29ybGQ='; // Your encrypted data
const WHITELIST_KEY = 'my-secret-key-2026'; // Your secret key
```

**Security Benefits:**
- ✅ No passwords to manage
- ✅ Each user has their own GitHub identity
- ✅ Whitelist is encrypted in code
- ✅ GitHub validates users exist
- ✅ Easy to add/remove users
- ✅ Can revoke access anytime

**How Users Access:**
1. Go to "Manage Members" tab
2. Enter their GitHub username
3. Click "Verify & Unlock"
4. System checks whitelist and validates with GitHub
5. Access granted if authorized

### Step 3: Import Existing Attendance Data (Optional)

If you want to import your 2026 Excel data:

#### Option A: Manual Entry
1. Open the attendance tracker
2. Select each date from your Excel
3. Mark P/A for each member
4. Click "Save Attendance"

#### Option B: Bulk Import (Advanced)

Create a JavaScript file `import-data.js`:

```javascript
// Example: Import attendance data
const importData = {
    '2026-01-04': {  // Saturday
        'Anna Thomas': 'P',
        'Elizabeth John': 'A',
        // ... all members
    },
    '2026-01-05': {  // Sunday
        'Anna Thomas': 'P',
        'Elizabeth John': 'P',
        // ... all members
    },
    // ... more dates
};

// Run this in browser console
localStorage.setItem('choirAttendance', JSON.stringify(importData));
location.reload();
```

---

## Cloud Sync Setup (Optional)

### For Team Collaboration

**Step 1: Create GitHub Gist** (Admin does this once):
1. Go to https://gist.github.com
2. Create new **secret** gist
3. Filename: `choir-attendance-data.json`
4. Content: `{}`
5. Click "Create secret gist"
6. Copy Gist ID from URL (e.g., `abc123def456`)

**Step 2: Get GitHub Token** (Admin does this once):
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Select "gist" permission only
4. Click "Generate token"
5. Copy the token (save it securely!)

**Step 3: Configure in Code** (Admin does this once):
1. Open `choir-attendance.html`
2. Find these lines (around line 440):
   ```javascript
   const SHARED_GIST_ID = ''; // Admin: Set your Gist ID here
   const SHARED_GIST_TOKEN = ''; // Admin: Set your GitHub token here
   ```
3. Change to:
   ```javascript
   const SHARED_GIST_ID = 'abc123def456'; // Your Gist ID
   const SHARED_GIST_TOKEN = 'ghp_your_token_here'; // Your GitHub token
   ```
4. Save file

**Step 4: Share with Team**
- Share the `choir-attendance.html` file with your team
- Everyone uses the same file
- No additional setup needed for team members!

### How It Works

✅ **Admin configures once** - Sets Gist ID and token in code
✅ **Team members just open the file** - No setup required
✅ **Auto-sync** - Syncs on load, after save, every 5 minutes
✅ **Everyone sees same data** - Real-time collaboration
✅ **Works offline** - Saves locally, syncs when online

### Security Notes

- Use a **secret** gist (not public)
- Token is embedded in the file (only share with authorized users)
- Don't commit the file with token to public repositories
- Regenerate token if compromised

---

## Usage Guide

### Marking Attendance

1. Open `choir-attendance.html` in browser
2. Select date (defaults to today)
3. Click **P** (Present) or **A** (Absent) for each member
4. Click **💾 Save Attendance** button
5. Data is saved to browser localStorage

**Note**: Only Saturdays and Sundays are counted in reports.

### Viewing Reports

**Quarterly Report:**
1. Click "📊 Quarterly Report" tab
2. Select quarter (Q1/Q2/Q3/Q4) and year
3. View attendance percentages

**Yearly Report:**
1. Click "📈 Yearly Report" tab
2. Select year
3. View full year summary

### Managing Members

1. Click "⚙️ Manage Members" tab
2. Enter password (default: `choir2026`)
3. Click "Unlock"

**Add Member:**
- Enter name
- Select gender (Female/Male)
- Select status (Active/Long-term Absentee)
- Click "➕ Add Member"

**Edit Member:**
- Click "✏️ Edit" next to member name
- Enter new name
- Attendance history is automatically updated with new name
- Member list is re-sorted alphabetically

**Remove Member:**
- Click "🗑️ Remove" next to member name
- Confirm deletion

---

## Data Storage

All data is stored in browser's localStorage:
- `choirMembers` - Member list
- `choirAttendance` - Attendance records

**Backup Data:**
1. Open browser console (F12)
2. Run: `console.log(localStorage.getItem('choirAttendance'))`
3. Copy the output and save to a text file

**Restore Data:**
1. Open browser console
2. Run: `localStorage.setItem('choirAttendance', 'PASTE_YOUR_DATA_HERE')`
3. Reload page

---

## Exporting Reports

### To Excel/CSV:
1. View the report you want
2. Select the table data
3. Copy and paste into Excel

### To PDF:
1. View the report
2. Press Ctrl+P (Cmd+P on Mac)
3. Select "Save as PDF"

---

## Customization

### Change Color Scheme

Find the CSS section (around line 50) and modify:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Attendance Thresholds

Find the `displayReport` function (around line 450) and modify:

```javascript
${row.percentage >= 75 ? 'good' : row.percentage >= 50 ? 'warning' : 'poor'}
```

Change `75` and `50` to your preferred thresholds.

---

## Troubleshooting

**Problem**: Data not saving
- **Solution**: Check if browser allows localStorage. Try a different browser.

**Problem**: Can't access member management
- **Solution**: Check password. Default is `choir2026`.

**Problem**: Reports show 0%
- **Solution**: Make sure you're marking attendance for Saturdays/Sundays only.

**Problem**: Lost data after browser update
- **Solution**: Always backup data regularly (see Data Storage section).

---

## Multi-Device Access

### Option 1: Cloud Sync (Advanced)
Use GitHub Gist similar to worship planner (requires coding).

### Option 2: Manual Sync
1. Export data from Device A (backup method)
2. Import data to Device B (restore method)

### Option 3: Shared Computer
Use the same computer/browser for all entries.

---

## Security Notes

1. **Change default password** immediately
2. **Don't share password** publicly
3. **Backup data** regularly
4. **Use HTTPS** if hosting online

---

## Future Enhancements

Possible additions:
- Export to Excel directly
- Email reports
- Cloud synchronization
- Multiple years support
- Attendance trends/charts
- SMS/Email notifications for low attendance
- Member photos
- Notes/comments per attendance

---

## Support

For issues or questions:
1. Check this guide first
2. Review the code comments
3. Test in different browser
4. Backup data before making changes

---

## File Structure

```
Hymn_project/
├── choir-attendance.html          # Main application
├── CHOIR_ATTENDANCE_GUIDE.md      # This guide
└── Choir_Attendance.xlsx          # Your original Excel file (reference)
```

---

## Quick Start Checklist

- [ ] Update member names in code
- [ ] Change admin password
- [ ] Test marking attendance
- [ ] Test saving attendance
- [ ] Test quarterly report
- [ ] Test yearly report
- [ ] Test adding member
- [ ] Test removing member
- [ ] Backup data
- [ ] Share with authorized users

---

**Made with ❤️ for the choir ministry**
