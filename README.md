# ക്രിസ്തീയ കീർത്തനങ്ങൾ | Malayalam Christian Hymns

A comprehensive online collection of Malayalam Christian hymns with lyrics and YouTube videos.

🌐 **Live Site**: [https://shibinj.github.io/Hymn_project/](https://shibinj.github.io/Hymn_project/)

## Features

### 🎵 Core Functionality
- **Complete Hymn Collection** - Browse all Malayalam Christian hymns (504 hymns + Doxology)
- **Search** - Find hymns by number or name (supports Malayalam and English)
- **Lyrics Display** - Full lyrics in Malayalam with elegant typography
- **YouTube Integration** - Embedded videos for each hymn (no suggestions/distractions)
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Doxology Section** - Special section for doxology hymns (DOX-I to DOX-XIII)

### 🎨 User Experience
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
├── index.html              # Main application
├── songs.json              # Hymn data (number, name, lyrics, YouTube ID)
├── lyrics_editor.html      # Admin interface for adding/editing lyrics
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

Each hymn in `songs.json` follows this format:

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

## Managing Hymn Data

### Adding/Editing Lyrics

Use the built-in lyrics editor:

1. Open `lyrics_editor.html` in your browser
2. Click any hymn from the list
3. Add or edit lyrics in the text area
4. Click "Save" to update
5. Click "Download JSON" to get the updated file
6. Replace `songs.json` with the downloaded file

**Color coding:**
- 🟢 Green border = Has lyrics
- 🔴 Red border = No lyrics

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

See README section "Custom Domain" for detailed DNS configuration.

## Contributing

This is a community resource. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is created for the Malayalam Christian community. Feel free to use and share.

## Contact

For issues or suggestions, please open an issue on GitHub.

---

**Made with ❤️ for the Malayalam Christian community**
