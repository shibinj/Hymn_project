# Past Members Archive System

## Overview

The choir attendance system now includes a **Past Members Archive** feature to manage member transitions while preserving historical data appropriately.

---

## Key Features

### 1. **Automatic Data Cleanup**
- Attendance records are kept for **1 year** after a member's leave date
- After 1 year, attendance data is automatically deleted
- Archive entry (name + dates) remains permanently
- Cleanup runs automatically on page load and syncs to cloud

### 2. **Clean Active Member List**
- Active members in `choir-members.json` stay clean
- No need to filter or manage inactive members in daily use
- Past members stored separately in `choir-members-archive.json`

### 3. **Collapsible Past Members View**
- Visible in "Mark Attendance" tab
- Collapsed by default (doesn't clutter the UI)
- Shows name, period, and notes
- No attendance marking (view-only)

### 4. **Archive Manager**
- Located in "Manage Members" tab
- Authentication required
- Simple form to move members to archive
- Displays all past members in a table

---

## File Structure

### Active Members (`data/choir-members.json`)
```json
{
  "female": ["Aksa Binu", "Anju John", ...],
  "male": ["Abel Ommen Gibu", ...],
  "occasional": ["Biby Mathew James", ...]
}
```

### Past Members Archive (`data/choir-members-archive.json`)
```json
{
  "pastMembers": [
    {
      "name": "John Doe",
      "gender": "male",
      "category": "regular",
      "joinDate": "2024-01-15",
      "leaveDate": "2027-06-30",
      "notes": "Relocated to another city"
    }
  ]
}
```

---

## How to Archive a Member

### Step 1: Login
- Go to "Mark Attendance" tab
- Enter your GitHub username
- Click "Verify & Unlock"

### Step 2: Navigate to Archive Manager
- Go to "⚙️ Manage Members" tab
- Scroll to "🔒 Move Member to Archive" section

### Step 3: Fill the Form
- **Member Name**: Select from dropdown
- **Leave Date**: Enter the last day they attended
- **Notes**: Optional reason (e.g., "Relocated", "Work schedule")

### Step 4: Move to Archive
- Click "Move to Archive"
- System shows JSON entry to add manually
- Follow the manual steps shown in the alert

### Step 5: Manual File Updates
1. Open `data/choir-members.json`
2. Remove the member's name from the appropriate array
3. Open `data/choir-members-archive.json`
4. Add the JSON entry shown in the alert to the `pastMembers` array
5. Save both files
6. Refresh the page

---

## Attendance Data Lifecycle

```
Member Active
    ↓
Member Leaves (Leave Date: June 30, 2027)
    ↓
Moved to Archive
    ↓
Attendance Visible Until: June 30, 2028 (1 year retention)
    ↓
After June 30, 2028: Attendance Auto-Deleted
    ↓
Archive Entry Remains Forever (name + dates only)
```

---

## Viewing Past Members

### In "Mark Attendance" Tab
1. Scroll to bottom
2. Click "📦 Past Members" header to expand
3. View list with names, periods, and notes
4. Click again to collapse

### In "Manage Members" Tab
1. Scroll to "📦 Past Members" section
2. View full table with all details
3. Always visible (not collapsible)

---

## Automatic Cleanup Details

### When It Runs
- On every page load
- After syncing from cloud
- Automatically in background

### What It Does
1. Checks all past members
2. Calculates: `leaveDate + 1 year`
3. If current date > calculated date:
   - Removes attendance records for that member
   - Saves to localStorage
   - Syncs to GitHub Gist (if configured)
4. Archive entry remains untouched

### Example
- Member: John Doe
- Leave Date: 2027-06-30
- Cleanup Date: 2028-06-30
- On 2028-07-01: All attendance records deleted
- Archive entry: Still visible with dates

---

## Reports Behavior

### Quarterly & Yearly Reports
- **Only show active members**
- Past members excluded from reports
- Historical data used only during their active period

### If You Need Past Member Reports
- View attendance before cleanup date (within 1 year)
- After cleanup, only archive entry remains

---

## Best Practices

### 1. **Document Join Dates**
When adding new members, note their join date in a comment or separate document. The archive system can store this if you manually add it to the JSON.

### 2. **Add Meaningful Notes**
When archiving, add clear notes:
- ✅ "Relocated to Bangalore"
- ✅ "Work schedule conflict"
- ✅ "Moved to another church"
- ❌ "Left" (too vague)

### 3. **Regular Backups**
- Backup `choir-members-archive.json` regularly
- This is your historical record
- GitHub Gist backs up attendance, not member lists

### 4. **Bulk Changes**
If many members leave at once (e.g., mid-2027):
- Archive them one by one through the UI
- Or manually edit both JSON files
- Refresh page after manual edits

---

## Troubleshooting

### Past Members Not Showing
- Check `choir-members-archive.json` exists
- Verify JSON syntax is valid
- Refresh the page
- Check browser console for errors

### Cleanup Not Working
- Ensure leave dates are in correct format: `YYYY-MM-DD`
- Check browser console for errors
- Verify 1 year has actually passed

### Archive Form Not Working
- Ensure you're authenticated (logged in)
- Check that member exists in active list
- Verify leave date is entered

### Manual File Edit Issues
- Use a JSON validator (jsonlint.com)
- Ensure commas are correct
- Don't forget closing brackets
- Save files with UTF-8 encoding

---

## Future Enhancements (Optional)

### Possible Additions
1. **Auto-move to archive**: Automatically move members on leave date
2. **Restore from archive**: Move past members back to active
3. **Export archive**: Download past members as CSV/PDF
4. **Search past members**: Filter by name, date range
5. **Attendance summary**: Show total days attended before archiving

### Not Planned
- Editing past member details (edit JSON manually)
- Deleting past members (permanent record)
- Changing retention period (hardcoded to 1 year)

---

## Technical Details

### Functions Added
- `loadPastMembers()`: Load archive from JSON
- `cleanupOldAttendance()`: Remove old attendance data
- `renderPastMembers()`: Display in attendance tab
- `togglePastMembers()`: Expand/collapse section
- `moveToArchive()`: Archive a member
- `populateArchiveDropdown()`: Fill member dropdown
- `renderPastMembersTable()`: Display in manage tab

### Data Flow
```
Page Load
    ↓
Load choir-members.json
    ↓
Load choir-members-archive.json
    ↓
Run cleanupOldAttendance()
    ↓
Sync to Gist (if configured)
    ↓
Render UI
```

---

## Summary

✅ **Active members**: Clean, simple list  
✅ **Past members**: Separate archive with metadata  
✅ **Attendance**: Kept for 1 year, then auto-deleted  
✅ **Historical record**: Archive entries permanent  
✅ **UI**: Collapsible, non-intrusive  
✅ **Reports**: Only active members  
✅ **Cleanup**: Automatic, synced to cloud  

---

**Last Updated**: February 18, 2026  
**Version**: 1.0
