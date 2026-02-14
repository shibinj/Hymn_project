# Project Restructuring Summary

## New Structure

```
Hymn_project/
├── index.html                          # Landing page with all collections
├── viewer.html                         # Hymn viewer (loads different collections)
├── lyrics_editor.html                  # Editor with collection selector
├── data/
│   ├── kristheeya-keerthanangal.json  # Main hymn book (504+ hymns)
│   ├── maramon-2025.json              # Maramon Convention 2025
│   ├── maramon-2026.json              # Maramon Convention 2026
│   ├── kottarakara-2025.json          # Kottarakara Convention 2025
│   └── kottarakara-2026.json          # Kottarakara Convention 2026
├── songs.json                          # Keep for backward compatibility
├── index_old.html                      # Backup of old index
└── ...
```

## What Changed

### 1. New Landing Page (index.html)
- Welcome page with sections for different collections
- Categories: Hymn Books, Maramon Convention, Kottarakara Convention
- Footer with disclaimer and contact info
- Links to viewer.html with collection parameter

### 2. Viewer (viewer.html)
- Renamed from old index.html
- Now loads collections dynamically based on URL parameter
- Example: `viewer.html?collection=kristheeya-keerthanangal`
- All features remain: search, dark mode, share, print

### 3. Lyrics Editor (lyrics_editor.html)
- Added collection dropdown selector
- Can edit any collection
- Downloads with collection-specific filename

### 4. Data Organization
- All collections stored in `data/` folder
- Each collection is a separate JSON file
- Empty collections created for future content

## How to Use

### View Collections
- Go to: https://shibinj.github.io/Hymn_project/
- Click any collection card
- Browse, search, and view hymns

### Edit Lyrics
1. Open `lyrics_editor.html`
2. Select collection from dropdown
3. Edit lyrics
4. Download updated JSON
5. Replace file in `data/` folder

### Add New Collections
1. Create new JSON file in `data/` folder
2. Add section in `index.html`
3. Add option in lyrics editor dropdown

## Migration Notes

- Old `songs.json` kept for backward compatibility
- Main collection copied to `data/kristheeya-keerthanangal.json`
- Old index.html saved as `index_old.html`
- All existing features preserved

## Next Steps

1. Test the new structure locally
2. Add content to convention collections
3. Update README.md
4. Push to GitHub
5. Verify GitHub Pages deployment
