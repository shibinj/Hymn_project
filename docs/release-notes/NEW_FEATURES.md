# New Features Added - Song Viewer

## 1. Next/Previous Navigation
- **Previous/Next buttons** above song lyrics
- **Keyboard shortcuts**: Use ← and → arrow keys to navigate
- Buttons automatically disable at start/end of list
- Works with filtered/search results

## 2. Quick Jump to Song Number
- **Input field** at top of page: "Jump to song number"
- Type song number (e.g., "123" or "HC5") and press Enter or click "Go"
- Instantly jumps to that song
- Works across all collections

## 3. Favorites System
- **Add to Favorites button** (heart icon) on each song
- **Show Favorites toggle** button above song list
- Favorites saved per collection in browser localStorage
- Heart indicator (❤️) shows on favorited songs in list
- Counter shows number of favorites

## 4. Recently Viewed (Backend)
- Last 10 viewed songs tracked per collection
- Stored in localStorage
- Ready for future "Recently Viewed" UI feature

## Usage Tips
- **Keyboard Navigation**: Press ← → arrow keys (when not typing in input)
- **Quick Jump**: Type song number and press Enter
- **Favorites**: Click heart button to bookmark songs for quick access
- **Search + Favorites**: Search works within favorites view too

## Technical Details
- All data stored in browser localStorage
- Separate storage per collection
- No server/database needed
- Works offline after first load
