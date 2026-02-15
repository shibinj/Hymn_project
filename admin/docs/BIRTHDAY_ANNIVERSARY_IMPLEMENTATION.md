# Adding Birthday/Anniversary Song Collection - Implementation Guide

## Overview
This guide explains how to add a dedicated birthday/anniversary song collection and enable auto-generation for these songs in the worship planner.

---

## Step 1: Create the Data File

**File**: `data/birthday-anniversary.json`

**Format**:
```json
[
  {
    "number": 1,
    "name": "Song name in Malayalam",
    "name2": "Alternate name (optional)",
    "lyrics": "Full lyrics (optional)",
    "youtubeId": "YouTube video ID (optional)"
  },
  {
    "number": 2,
    "name": "Another song name",
    "name2": "",
    "lyrics": "",
    "youtubeId": ""
  }
]
```

**Action**: Create this file with your curated list of birthday/anniversary appropriate songs.

---

## Step 2: Update worship-planner.html

### 2.1 Load the New Collection

**Location**: Find where other collections are loaded (around line 200-250)

**Current code**:
```javascript
let hymns = [];
let conventions = {};

Promise.all([
    fetch('data/kristheeya-keerthanangal.json').then(r => r.json()),
    fetch('data/maramon-2025.json').then(r => r.json()),
    fetch('data/maramon-2026.json').then(r => r.json()),
    fetch('data/kottarakara-2025.json').then(r => r.json()),
    fetch('data/kottarakara-2026.json').then(r => r.json())
]).then(([hymnsData, maramon2025, maramon2026, kottarakara2025, kottarakara2026]) => {
    hymns = hymnsData;
    conventions = {
        'maramon-2025': maramon2025,
        'maramon-2026': maramon2026,
        'kottarakara-2025': kottarakara2025,
        'kottarakara-2026': kottarakara2026
    };
```

**Add**:
```javascript
let hymns = [];
let conventions = {};
let celebrationSongs = []; // ADD THIS LINE

Promise.all([
    fetch('data/kristheeya-keerthanangal.json').then(r => r.json()),
    fetch('data/maramon-2025.json').then(r => r.json()),
    fetch('data/maramon-2026.json').then(r => r.json()),
    fetch('data/kottarakara-2025.json').then(r => r.json()),
    fetch('data/kottarakara-2026.json').then(r => r.json()),
    fetch('data/birthday-anniversary.json').then(r => r.json()) // ADD THIS LINE
]).then(([hymnsData, maramon2025, maramon2026, kottarakara2025, kottarakara2026, celebrationData]) => { // ADD celebrationData
    hymns = hymnsData;
    celebrationSongs = celebrationData; // ADD THIS LINE
    conventions = {
        'maramon-2025': maramon2025,
        'maramon-2026': maramon2026,
        'kottarakara-2025': kottarakara2025,
        'kottarakara-2026': kottarakara2026
    };
```

---

### 2.2 Add Category Definition

**Location**: Find the `categories` object (around line 220-230)

**Current code**:
```javascript
const categories = {
    opening: [16,17,18,...],
    bibleReading: [45,46,47,...],
    qurbana: [166,167,168,...]
};
```

**Add**:
```javascript
const categories = {
    opening: [16,17,18,...],
    bibleReading: [45,46,47,...],
    celebration: celebrationSongs.map(s => s.number), // ADD THIS LINE
    qurbana: [166,167,168,...]
};
```

---

### 2.3 Update generateService Function

**Location**: Find `function generateService()` (around line 480)

**Current code**:
```javascript
window.currentService = [
    { title: '1. Opening Hymn', song: getRandomSong(categories.opening, 'opening'), collection: 'Kristheeya Keerthanangal', category: 'opening' },
    { title: '2. Song for Bible Reading', song: getRandomSong(categories.bibleReading, 'bibleReading'), collection: 'Kristheeya Keerthanangal', category: 'bibleReading' },
    { title: '3. Birthday/Anniversary Song', song: null, collection: 'Manual', category: 'celebration', manual: true },
    { title: '4. Offertory Song', song: getRandomConventionSong(offertoryConvention), collection: offertoryConvention, category: 'offertory' },
    ...
];
```

**Change to**:
```javascript
window.currentService = [
    { title: '1. Opening Hymn', song: getRandomSong(categories.opening, 'opening'), collection: 'Kristheeya Keerthanangal', category: 'opening' },
    { title: '2. Song for Bible Reading', song: getRandomSong(categories.bibleReading, 'bibleReading'), collection: 'Kristheeya Keerthanangal', category: 'bibleReading' },
    { title: '3. Birthday/Anniversary Song', song: getRandomCelebrationSong(), collection: 'Birthday/Anniversary', category: 'celebration' }, // CHANGED
    { title: '4. Offertory Song', song: getRandomConventionSong(offertoryConvention), collection: offertoryConvention, category: 'offertory' },
    ...
];
```

---

### 2.4 Add getRandomCelebrationSong Function

**Location**: Add after `getRandomConventionSong()` function (around line 470)

**Add this new function**:
```javascript
function getRandomCelebrationSong() {
    if (celebrationSongs.length === 0) {
        return null;
    }
    
    // Get celebration songs used in history
    const usedSongs = serviceHistory
        .flatMap(s => s.songs.filter(song => song.category === 'celebration'))
        .map(s => s.number);
    
    // Count frequency
    const frequency = {};
    usedSongs.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
    });
    
    // Get songs not used in last 2 months
    const twoMonthsAgo = Date.now() - (60 * 24 * 60 * 60 * 1000);
    const recentlyUsed = serviceHistory
        .filter(s => s.date > twoMonthsAgo)
        .flatMap(s => s.songs.filter(song => song.category === 'celebration'))
        .map(s => s.number);
    
    const availableSongs = celebrationSongs.filter(s => !recentlyUsed.includes(s.number));
    
    // If all songs were recently used, use all songs
    const songsToChooseFrom = availableSongs.length > 0 ? availableSongs : celebrationSongs;
    
    // 70% chance to pick from frequently used, 30% random
    if (Math.random() < 0.7 && Object.keys(frequency).length > 0) {
        const frequentSongs = Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([num]) => parseInt(num));
        
        const frequentAvailable = songsToChooseFrom.filter(s => frequentSongs.includes(s.number));
        if (frequentAvailable.length > 0) {
            return frequentAvailable[Math.floor(Math.random() * frequentAvailable.length)];
        }
    }
    
    // Random selection
    return songsToChooseFrom[Math.floor(Math.random() * songsToChooseFrom.length)];
}
```

---

### 2.5 Update displayService Function

**Location**: Find `function displayService(service)` (around line 614)

**Current code** (for celebration song):
```javascript
if (item.manual && !item.song) {
    const suggestions = getSuggestedCelebrationSongs();
    const suggestionButtons = suggestions.map(num => {
        const song = hymns.find(s => s.number === num) || 
                     Object.values(conventions).flat().find(s => s.number === num);
        return song ? `<button onclick="setManualSong(${index}, ${num})" ...` : '';
    }).join('');
    
    return `
        <div class="service-section">
            <div class="section-title">${item.title}</div>
            <div class="song-item">
                <div class="manual-input">
                    <select id="celebrationCollection${index}" ...>
                        <option value="kristheeya-keerthanangal">Kristheeya Keerthanangal</option>
                        ...
                    </select>
                    <input type="number" id="manual${index}" placeholder="Song #" ... />
                    <button onclick="setManualSongWithCollection(${index})">Set Song</button>
                </div>
            </div>
            ${suggestions.length > 0 ? `<div ...>💡 Smart Suggestions: ${suggestionButtons}</div>` : ''}
        </div>
    `;
}
```

**Change to** (celebration song now auto-generated, but still editable):
```javascript
// Remove the manual input section for celebration since it's now auto-generated
// The celebration song will be displayed like other auto-generated songs
// Keep the edit button functionality
```

**Note**: The celebration song will now display like other songs with an edit button. The manual input UI is no longer needed since it auto-generates.

---

### 2.6 Update editCelebrationSong Function

**Location**: Find `function editCelebrationSong(index)` (around line 750)

**Current code**:
```javascript
function editCelebrationSong(index) {
    // Shows collection dropdown and manual input
    ...
}
```

**Change to**:
```javascript
function editCelebrationSong(index) {
    const item = window.currentService[index];
    const currentSong = item.song;
    
    const collection = prompt(
        `Current: #${currentSong.number} - ${currentSong.name}\n\n` +
        `Choose collection:\n` +
        `1 = Birthday/Anniversary Collection\n` +
        `2 = Kristheeya Keerthanangal\n` +
        `3 = Maramon 2025\n` +
        `4 = Maramon 2026\n` +
        `5 = Kottarakara 2025\n` +
        `6 = Kottarakara 2026\n\n` +
        `Enter collection number (1-6):`
    );
    
    if (!collection) return;
    
    const collectionMap = {
        '1': 'birthday-anniversary',
        '2': 'kristheeya-keerthanangal',
        '3': 'maramon-2025',
        '4': 'maramon-2026',
        '5': 'kottarakara-2025',
        '6': 'kottarakara-2026'
    };
    
    const selectedCollection = collectionMap[collection];
    if (!selectedCollection) {
        alert('Invalid collection number!');
        return;
    }
    
    const songNum = prompt(`Enter song number from ${selectedCollection}:`);
    if (!songNum) return;
    
    let song;
    if (selectedCollection === 'birthday-anniversary') {
        song = celebrationSongs.find(s => s.number == songNum);
    } else if (selectedCollection === 'kristheeya-keerthanangal') {
        song = hymns.find(s => s.number == songNum);
    } else {
        song = conventions[selectedCollection].find(s => s.number == songNum);
    }
    
    if (song) {
        window.currentService[index].song = song;
        window.currentService[index].collection = selectedCollection === 'birthday-anniversary' ? 
            'Birthday/Anniversary' : 
            selectedCollection === 'kristheeya-keerthanangal' ? 
            'Kristheeya Keerthanangal' : 
            selectedCollection;
        displayService(window.currentService);
    } else {
        alert(`Song #${songNum} not found in ${selectedCollection}!`);
    }
}
```

---

### 2.7 Update getSuggestedCelebrationSongs Function

**Location**: Find `function getSuggestedCelebrationSongs()` (around line 500)

**Current code**:
```javascript
function getSuggestedCelebrationSongs() {
    const celebrationHistory = serviceHistory
        .flatMap(s => s.songs.filter(song => song.category === 'celebration'))
        .map(s => s.number);
    
    // ... frequency analysis ...
    
    return topSongs.slice(0, 5);
}
```

**Change to**:
```javascript
function getSuggestedCelebrationSongs() {
    // If we have a dedicated collection, suggest from there
    if (celebrationSongs.length > 0) {
        const celebrationHistory = serviceHistory
            .flatMap(s => s.songs.filter(song => song.category === 'celebration'))
            .map(s => s.number);
        
        const frequency = {};
        celebrationHistory.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
        });
        
        const topSongs = Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .map(([num]) => parseInt(num))
            .filter(num => celebrationSongs.find(s => s.number === num));
        
        return topSongs.slice(0, 5);
    }
    
    // Fallback to old logic if collection not loaded
    const celebrationHistory = serviceHistory
        .flatMap(s => s.songs.filter(song => song.category === 'celebration'))
        .map(s => s.number);
    
    // ... rest of old logic ...
}
```

---

### 2.8 Update setManualSong Function

**Location**: Find `function setManualSong(index, songNum)` (around line 550)

**Current code**:
```javascript
function setManualSong(index, songNum) {
    const song = hymns.find(s => s.number == songNum) || 
                 Object.values(conventions).flat().find(s => s.number == songNum);
    
    if (song) {
        window.currentService[index].song = song;
        // Determine collection
        if (hymns.find(s => s.number == songNum)) {
            window.currentService[index].collection = 'Kristheeya Keerthanangal';
        } else {
            // Find which convention
            for (const [key, songs] of Object.entries(conventions)) {
                if (songs.find(s => s.number == songNum)) {
                    window.currentService[index].collection = key;
                    break;
                }
            }
        }
        displayService(window.currentService);
    } else {
        alert(`Song #${songNum} not found!`);
    }
}
```

**Change to**:
```javascript
function setManualSong(index, songNum) {
    // Check birthday/anniversary collection first
    let song = celebrationSongs.find(s => s.number == songNum);
    let collection = 'Birthday/Anniversary';
    
    // Then check hymns
    if (!song) {
        song = hymns.find(s => s.number == songNum);
        collection = 'Kristheeya Keerthanangal';
    }
    
    // Then check conventions
    if (!song) {
        song = Object.values(conventions).flat().find(s => s.number == songNum);
        if (song) {
            for (const [key, songs] of Object.entries(conventions)) {
                if (songs.find(s => s.number == songNum)) {
                    collection = key;
                    break;
                }
            }
        }
    }
    
    if (song) {
        window.currentService[index].song = song;
        window.currentService[index].collection = collection;
        displayService(window.currentService);
    } else {
        alert(`Song #${songNum} not found!`);
    }
}
```

---

## Step 3: Update viewer.html (Optional)

If you want to display the birthday/anniversary collection in the main viewer:

### 3.1 Add to index.html

**Location**: Add a new section card

```html
<h2 class="category-header">🎂 Special Occasions</h2>
<div class="sections">
    <a href="viewer.html?collection=birthday-anniversary" class="section-card">
        <div class="section-icon">🎉</div>
        <h3 class="section-title">Birthday & Anniversary Songs</h3>
        <p class="section-desc">Curated collection of songs for birthdays and anniversaries</p>
        <div class="section-count">XX Songs</div>
    </a>
</div>
```

### 3.2 Update viewer.html

**Location**: Find the collection loading logic (around line 350)

**Add**:
```javascript
const collectionMap = {
    'kristheeya-keerthanangal': {
        file: 'data/kristheeya-keerthanangal.json',
        title: 'ക്രിസ്തീയ കീർത്തനങ്ങൾ',
        subtitle: 'Kristheeya Keerthanangal - Malayalam Christian Hymn Book'
    },
    'birthday-anniversary': {
        file: 'data/birthday-anniversary.json',
        title: '🎂 Birthday & Anniversary Songs',
        subtitle: 'Special songs for celebrations'
    },
    // ... other collections
};
```

---

## Step 4: Update lyrics_editor.html (Optional)

If you want to edit birthday/anniversary songs:

**Location**: Find the collection dropdown (around line 50)

**Add**:
```html
<select id="collectionSelect" onchange="loadCollection()">
    <option value="kristheeya-keerthanangal">Kristheeya Keerthanangal</option>
    <option value="birthday-anniversary">Birthday/Anniversary</option>
    <option value="maramon-2025">Maramon 2025</option>
    ...
</select>
```

---

## Step 5: Testing Checklist

After making all changes:

- [ ] Create `data/birthday-anniversary.json` with sample songs
- [ ] Test that worship planner loads without errors
- [ ] Click "Generate New Service" - celebration song should auto-populate
- [ ] Click "Edit" on celebration song - should show all 6 collection options
- [ ] Save service and check history - celebration song should be saved
- [ ] Share to WhatsApp - celebration song should appear with collection name
- [ ] Load old service from history - should still work
- [ ] Test with empty birthday-anniversary.json - should handle gracefully
- [ ] Test smart suggestions - should prioritize birthday/anniversary collection

---

## Step 6: Backward Compatibility

To ensure old services still work:

**In loadService function** (around line 1200):
```javascript
// When loading from history, check multiple collections
let song = celebrationSongs.find(s => s.number === savedSong.number);
if (!song) {
    song = hymns.find(s => s.number === savedSong.number);
}
if (!song) {
    song = Object.values(conventions).flat().find(s => s.number === savedSong.number);
}
if (!song) {
    // Fallback for old data
    song = { number: savedSong.number, name: savedSong.name };
}
```

---

## Summary of Files to Modify

1. **Create**: `data/birthday-anniversary.json` (new file)
2. **Edit**: `worship-planner.html` (main changes)
3. **Edit**: `index.html` (optional - add collection card)
4. **Edit**: `viewer.html` (optional - display collection)
5. **Edit**: `lyrics_editor.html` (optional - edit songs)
6. **Edit**: `README.md` (update documentation)

---

## Rollback Plan

If issues occur:
1. Remove `data/birthday-anniversary.json`
2. Revert `worship-planner.html` changes
3. Old services will still work (backward compatible)

---

## Future Enhancements

- Add filtering by occasion type (birthday vs anniversary)
- Add age-appropriate song suggestions
- Add language preference (Malayalam vs English)
- Add mood/tempo filtering
