# Maramon Convention Songs Data Entry Guide

## Files Created

Three new JSON files have been created in the `data/` folder:
- `data/maramon-2021.json`
- `data/maramon-2023.json`
- `data/maramon-2024.json`

## JSON Format

Each file should contain an array of song objects with this structure:

```json
[
  {
    "number": 1,
    "name": "Song Name in English",
    "name2": "പാട്ടിന്റെ പേര് മലയാളത്തിൽ",
    "youtubeId": "VIDEO_ID?start=START_SECONDS&end=END_SECONDS"
  },
  {
    "number": 2,
    "name": "Another Song",
    "name2": "മറ്റൊരു പാട്ട്",
    "youtubeId": "VIDEO_ID?start=START_SECONDS&end=END_SECONDS"
  }
]
```

## Field Descriptions

- **number**: Song number (integer)
- **name**: Song name in English/transliteration
- **name2**: Song name in Malayalam
- **youtubeId**: YouTube video ID with optional start/end timestamps

## YouTube ID Format

### For individual song videos:
```json
"youtubeId": "dQw4w9WgXcQ"
```

### For songs from a long compilation video:
```json
"youtubeId": "dQw4w9WgXcQ?start=120&end=240"
```

## Converting Timestamps to Seconds

Use the **Timestamp Converter** tool at:
`admin/timestamp-converter.html`

Example:
- Time: 25:57 → Seconds: 1557
- Time: 30:38 → Seconds: 1838

## Example Entry

```json
{
  "number": 7,
  "name": "Sankeerthanangal",
  "name2": "സങ്കീർത്തനങ്ങൾ",
  "youtubeId": "rYuNAJ4QO58?start=1557&end=1837"
}
```

## Steps to Add Songs

1. Open the JSON file for the year you want to edit
2. Replace the template entry with actual song data
3. Add multiple songs by copying the format
4. Make sure to add commas between song objects
5. Save the file
6. Test by opening the viewer page

## Testing

After updating the JSON files:
1. Open `index.html` in browser
2. Click on the Maramon 2021/2023/2024 card
3. Verify songs load correctly
4. Check that YouTube videos play with correct timestamps

## Editing Songs

You can also use the **Lyrics Editor** at:
`admin/lyrics-editor.html`

The dropdown now includes:
- Maramon Convention 2021
- Maramon Convention 2023
- Maramon Convention 2024

## Changes Made

### 1. index.html
- Added 3 new cards for Maramon 2021, 2023, 2024
- Placed before existing 2025 and 2026 cards (chronological order)

### 2. viewer.html
- Added collection mappings for the 3 new years
- Titles and subtitles configured

### 3. admin/lyrics-editor.html
- Added dropdown options for the 3 new collections

### 4. data/ folder
- Created maramon-2021.json
- Created maramon-2023.json
- Created maramon-2024.json

## Notes

- Songs are displayed in the order they appear in the JSON file
- The "number" field is used for display purposes
- YouTube timestamps are optional - use only if needed
- Malayalam text should be in Unicode (not ASCII transliteration)

## Need Help?

- Check existing files like `data/maramon-2025.json` for reference
- Use the timestamp converter for time calculations
- Test frequently to catch errors early
