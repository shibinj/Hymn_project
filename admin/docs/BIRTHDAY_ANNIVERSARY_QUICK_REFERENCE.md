# Birthday/Anniversary Feature - Quick Reference

## 🎉 What's New?

The Birthday/Anniversary song now **auto-generates** from a dedicated collection instead of requiring manual input!

---

## 📝 How to Use

### 1. Generate Service
Click **"Generate New Service"** button - the celebration song will automatically populate from the Birthday/Anniversary collection.

### 2. Edit Celebration Song (Optional)
If you want to change the auto-selected song:

1. Click the **"Edit"** button next to the celebration song
2. Choose from 6 collections:
   - **Birthday/Anniversary** (recommended for celebrations)
   - Kristheeya Keerthanangal
   - Maramon 2025
   - Maramon 2026
   - Kottarakara 2025
   - Kottarakara 2026
3. Enter the song number
4. Song will update automatically

### 3. Add More Songs to Collection
To expand the Birthday/Anniversary collection:

1. Open `/data/birthday-anniversary.json`
2. Add songs in this format:
```json
{
  "number": "SS3",
  "name": "Song name in Malayalam",
  "name2": "Alternate name (optional)",
  "lyrics": "Full lyrics (optional)",
  "youtubeId": "YouTube video ID (optional)"
}
```
3. Save the file
4. Refresh the worship planner

---

## 🎯 Smart Selection Logic

The system intelligently picks celebration songs:

- **70% chance**: Selects from frequently used songs (based on history)
- **30% chance**: Random selection from available songs
- **Avoids**: Songs used in the last 2 months
- **Fallback**: If all songs were recently used, picks from entire collection

---

## 🔄 Backward Compatibility

- Old services from history will still load correctly
- System automatically finds songs across all collections
- No data migration needed

---

## 📊 Current Collection

**File**: `/data/birthday-anniversary.json`

**Songs**:
1. SS1 - ഒരിക്കൽ കൂടി ഞാൻ (Orikkal koodi njan)
2. Song #2 - Another song name

**To view all songs**: Open the JSON file in any text editor

---

## 🐛 Troubleshooting

### Problem: Celebration song shows as null/empty
**Solution**: 
- Check if `birthday-anniversary.json` exists in `/data/` folder
- Verify JSON file has valid syntax
- Refresh the page

### Problem: Can't find a specific song
**Solution**:
- Use the "Edit" button to manually select from other collections
- Add the song to `birthday-anniversary.json` for future use

### Problem: Same song keeps appearing
**Solution**:
- System prioritizes frequently used songs
- Edit manually to select a different song
- Add more songs to the collection for variety

---

## 💡 Tips

1. **Build Your Collection**: Add your church's favorite celebration songs to the collection
2. **Use History**: The system learns from your past selections
3. **Mix Collections**: You can still pick celebration songs from other collections if needed
4. **YouTube Integration**: Add YouTube IDs to enable video playback

---

## 📞 Support

Questions or issues?
- Email: shibinjohn@live.com
- Documentation: `/admin/docs/BIRTHDAY_ANNIVERSARY_IMPLEMENTATION.md`
- Changes Log: `/BIRTHDAY_ANNIVERSARY_CHANGES.md`

---

**Last Updated**: February 27, 2026
