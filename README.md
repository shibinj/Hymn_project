# ക്രിസ്തീയ കീർത്തനങ്ങൾ | Holy Hymns

A comprehensive online collection of Malayalam Christian hymns, convention songs, and worship music with lyrics and YouTube videos.

🌐 **Live Site**: [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)

## Collections

### 📖 Hymn Books
- **Kristheeya Keerthanangal** - Complete Malayalam Christian Hymn Book (504 hymns + Doxology)

### 🎪 Convention Songs
- **Maramon Convention** - 2025 (16 songs), 2026 (16 songs)
- **Kottarakara Convention** - 2025 (10 songs), 2026 (8 songs)

## Features

### 🎵 Core Functionality
- **Multiple Collections** - Browse different hymn books and convention songs
- **Search** - Find hymns by number or name (supports Malayalam and English)
- **Lyrics Display** - Full lyrics in Malayalam with elegant typography
- **YouTube Integration** - Embedded videos for each hymn (no suggestions/distractions)
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Doxology Section** - Special section for doxology hymns (DOX-I to DOX-XIII)

### 🎨 User Experience
- **Landing Page** - Organized collections by category
- **Dark Mode** - Toggle between light and dark themes (preference saved)
- **Beautiful UI** - Modern gradient design with smooth animations
- **Easy Navigation** - Click any hymn to view lyrics and video
- **Print Support** - Clean print layout for lyrics (hides unnecessary elements)

### 📱 Social Features
- **Share Buttons** - Share hymns via WhatsApp, Facebook, and Twitter
- **Social Media Ready** - Optimized preview cards when shared
- **Print Friendly** - Print lyrics for offline use

### 🔍 SEO & Analytics
- **Google Analytics** - Track visitor statistics (ID: G-7RV9BCEP13)
- **SEO Optimized** - Meta tags, structured data, and Open Graph tags
- **Google Search Console** - Verified and indexed
- **Sitemap** - XML sitemap for search engines
- **Custom Favicon** - Branded icon in browser tabs

## Project Structure

```
Hymn_project/
├── index.html              # Landing page with all collections
├── viewer.html             # Hymn viewer (loads different collections)
├── lyrics_editor.html      # Admin interface for adding/editing lyrics
├── worship-planner.html    # Worship service song planner (internal tool)
├── data/
│   ├── kristheeya-keerthanangal.json  # Main hymn book
│   ├── maramon-2025.json              # Maramon Convention 2025
│   ├── maramon-2026.json              # Maramon Convention 2026
│   ├── kottarakara-2025.json          # Kottarakara Convention 2025
│   └── kottarakara-2026.json          # Kottarakara Convention 2026
├── songs.json              # Backward compatibility (main hymn book)
├── scrape_hymns.py         # Python script to scrape hymn data
├── add_dox_manual.py       # Script to add doxology hymns from YouTube playlist
├── reorder_songs.py        # Script to sort hymns (regular + DOX)
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine instructions
├── favicon.ico             # Site icon
├── .gitignore              # Git ignore rules (excludes *.py)
└── README.md               # This file
```

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Fonts**: Google Fonts (Inter, Crimson Text)
- **Hosting**: GitHub Pages
- **Analytics**: Google Analytics
- **Data Format**: JSON

## Setup & Development

### Prerequisites
- Git
- Web browser
- (Optional) Python 3 for data management scripts

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/shibinj/Hymn_project.git
cd Hymn_project
```

2. Run a local server:
```bash
python3 -m http.server 8000
```

3. Open in browser:
```
http://localhost:8000
```

### Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Data Structure

Each hymn in collection JSON files follows this format:

```json
{
  "number": 1,                    // or "DOX-I" for doxology
  "name": "Hymn name in Malayalam",
  "name2": "Alternate name (optional)",
  "lyrics": "Full lyrics in Malayalam",
  "youtubeId": "YouTube video ID"
}
```

**Hymn Numbering:**
- Regular hymns: 1-504 (numeric)
- Doxology hymns: DOX-I, DOX-II, ... DOX-XIII (Roman numerals)

## Managing Collections

### Worship Service Planner (Internal Tool)

A smart tool for planning Sunday worship services with automatic song selection, learning capabilities, and optional cloud synchronization for collaborative access.

**Access**: Open `worship-planner.html` in your browser (not linked from main site)

**Features:**
- **Auto-generates service order**: Opening, Bible Reading, Offertory, Qurbana (2 songs), Doxology
- **Manual Birthday/Anniversary selection**: Enter song number or use smart suggestions (can be from hymns or conventions)
- **Smart Learning**: Analyzes your history and suggests songs based on:
  - Most frequently chosen songs across all categories
  - Preferred song number ranges
  - Avoids songs used in last 2 months
  - 70% preference for frequently-used songs, 30% for variety
- **Edit any song**: Click "✏️ Edit" button to manually change any auto-generated song
- **Convention rotation**: Alternates between Maramon and Kottarakara for offertory
- **Cloud Sync (Optional)**: GitHub Gist integration for collaborative access across devices
- **Service history**: Tracks last 50 services (cloud or local storage)
- **Date & Theme tracking**: Records service date and weekly theme
- **Song search**: Search any song number to see last 5 times it was used
- **Date range filter**: View services within specific date ranges
- **WhatsApp sharing**: Share finalized service in formatted text to WhatsApp groups
- **Mobile-friendly**: Responsive design works on phones, tablets, and desktops
- **Print-ready**: Generate and print service sheets

**Quick Start (No Setup Required):**

Simply open `worship-planner.html` and start using it! All features work with local browser storage. Cloud sync is optional.

**Cloud Sync Setup (Optional - For Team Collaboration):**

1. **Create GitHub Gist** (Admin does this once):
   - Go to https://gist.github.com
   - Create new **secret** gist
   - Filename: `worship-service-history.json`
   - Content: `[]`
   - Copy Gist ID from URL (e.g., `abc123def456`)

2. **Configure in Code** (Admin):
   - Edit `worship-planner.html`
   - Find: `const SHARED_GIST_ID = '';`
   - Change to: `const SHARED_GIST_ID = 'abc123def456';` (your Gist ID)
   - Save and push to GitHub

3. **Team Members Setup** (Each person, one-time):
   - Open worship planner
   - Click OK when prompted "Enable Cloud Sync?"
   - Go to https://github.com/settings/tokens
   - Generate new token (classic) with "gist" permission
   - Paste token when prompted
   - Token is saved in browser (only enter once per device)

**Alternative:** Click Cancel on the prompt to use local storage only. You can enable sync later by clicking "⚙️ Setup Cloud Sync" button.

**Usage:**
1. Enter service date (defaults to today) and theme of the week
2. Click "🎲 Generate New Service" - auto-selects all songs except Birthday/Anniversary
3. Enter Birthday/Anniversary song manually or click smart suggestions
4. Click "✏️ Edit" on any song to manually change it
5. Click "💾 Save Service" to record (syncs to cloud if enabled)
6. Click "📱 Share to WhatsApp" to send formatted message to your group
7. Click "📜 View History" to:
   - See all past services with dates and themes
   - Search by song number to see when it was last used
   - Filter by date range
8. Click "🔄 Sync Now" to manually refresh from cloud (if enabled)
9. Print or regenerate as needed

**Cloud Sync Features (When Enabled):**
- Auto-syncs on page load
- Auto-syncs after saving service
- Auto-syncs every 5 minutes
- Manual sync available anytime
- Works offline, syncs when online
- All team members see same data

**Song Categories:**
- Opening: Hymns 16-44, 429-430
- Bible Reading: Hymns 45-112, 237-265, 266-284, 351-371, 409-415, 431-437, 452-455
- Birthday/Anniversary: Manual entry (any hymn or convention song)
- Holy Qurbana: Hymns 166-212, 220-228, 233-241, 251-254, 266-274, 313-316, 441-500
- Offertory: Convention songs (alternates weekly between Maramon/Kottarakara)
- Doxology: DOX-I to DOX-XIII

**Learning System:**
The planner learns from every saved service:
- Tracks which songs you use most in each category
- Identifies your preferred song number ranges
- Suggests frequently-used songs while maintaining variety
- Prevents repeating songs within 2 months
- Gets smarter with each saved service

**Notes:** 
- Works perfectly without cloud sync using browser localStorage
- Use normal browser mode (not InPrivate/Incognito) to persist data
- Cloud sync is optional and can be enabled/disabled anytime
- Share the planner with anyone - they choose whether to sync or not

### Adding/Editing Lyrics

Use the built-in lyrics editor:

1. Open `lyrics_editor.html` in your browser
2. Select collection from dropdown
3. Click any hymn from the list
4. Add or edit lyrics in the text area
5. Click "Save" to update
6. Click "Download JSON" to get the updated file
7. Replace the file in `data/` folder

**Color coding:**
- 🟢 Green border = Has lyrics
- 🔴 Red border = No lyrics

### Adding New Collections

1. Create new JSON file in `data/` folder (e.g., `data/new-collection.json`)
2. Add section card in `index.html`
3. Add option in lyrics editor dropdown (`lyrics_editor.html`)

### Reordering Hymns

To sort hymns (regular hymns first, then doxology):

```bash
python3 reorder_songs.py
```

### Adding Doxology Hymns

To add doxology hymns from a YouTube playlist:

1. Extract playlist data using browser console
2. Save as `dox_videos.json`
3. Run: `python3 add_dox_manual.py`

See script comments for detailed instructions.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Landing Page
- Organized collections by category
- Beautiful card-based design
- Footer with disclaimer and links
- Direct navigation to collections

### Dark Mode
- Automatic theme switching
- Preference saved in localStorage
- Smooth color transitions
- Optimized for readability

### Print Styles
- Hides navigation and videos
- Shows only title and lyrics
- Black text on white background
- Optimized for paper

### Share Functionality
- **WhatsApp**: Shares lyrics + video link
- **Facebook**: Shares site URL
- **Twitter**: Shares with title
- **Print**: Opens browser print dialog

### YouTube Integration
- Clean embed (no suggestions or branding)
- Parameters: `rel=0`, `modestbranding=1`, `showinfo=0`
- Prevents distracting related videos

## SEO Implementation

- Meta description and keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)
- XML sitemap
- robots.txt
- Google Search Console verification

## Analytics

Track visitor data at: [Google Analytics Dashboard](https://analytics.google.com)

Metrics tracked:
- Page views
- User sessions
- Geographic location
- Device types
- Real-time visitors

## Custom Domain Setup

To add a custom domain (e.g., keerthanangal.com):

1. Buy domain from registrar
2. Add DNS records (A records + CNAME)
3. Create `CNAME` file in repo with your domain
4. Enable in GitHub Pages settings
5. Enable HTTPS

See online guides for detailed DNS configuration.

## Contributing

This is a community resource. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Disclaimer

This website is a non-commercial community resource created for the Malayalam Christian community. All hymns and songs are traditional worship content. YouTube videos are embedded from their original sources. If you are a copyright holder and have concerns, please contact us.

## License

This project is created for the Malayalam Christian community. Feel free to use and share.

## Contact

For issues or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for the Malayalam Christian community**
