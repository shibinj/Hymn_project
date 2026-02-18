# Quick Reference: Archiving Members

## When a Member Leaves

### Option 1: Using the UI (Recommended)

1. **Login** to choir attendance
2. Go to **"⚙️ Manage Members"** tab
3. Scroll to **"Move Member to Archive"** section
4. Fill the form:
   - Select member name
   - Enter leave date
   - Add notes (optional)
5. Click **"Move to Archive"**
6. Copy the JSON shown in the alert
7. **Manually edit files**:
   - Remove member from `data/choir-members.json`
   - Add JSON entry to `data/choir-members-archive.json`
8. **Refresh** the page

---

### Option 2: Manual File Edit

#### Edit `data/choir-members.json`
Remove the member's name:
```json
{
  "female": [
    "Aksa Binu",
    "Anju John"
    // Remove "Member Name" from here
  ]
}
```

#### Edit `data/choir-members-archive.json`
Add the member:
```json
{
  "pastMembers": [
    {
      "name": "Member Name",
      "gender": "male",
      "category": "regular",
      "joinDate": "2024-01-15",
      "leaveDate": "2027-06-30",
      "notes": "Reason for leaving"
    }
  ]
}
```

---

## Important Notes

- ✅ Attendance kept for **1 year** after leave date
- ✅ Auto-cleanup happens on page load
- ✅ Archive entry stays **forever**
- ✅ Past members visible in collapsible section
- ✅ Reports only show **active members**

---

## Example Timeline

**Member leaves**: June 30, 2027  
**Attendance visible until**: June 30, 2028  
**After June 30, 2028**: Attendance deleted, archive remains

---

## Need Help?

See full documentation: `docs/PAST_MEMBERS_GUIDE.md`
