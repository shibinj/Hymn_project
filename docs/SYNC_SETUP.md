# Choir Attendance - Local Configuration

## Setup Instructions

1. Open `admin/choir-attendance.html` in a text editor
2. Find line 486: `const SHARED_GIST_TOKEN = '';`
3. Add your GitHub token between the quotes
4. Save the file (DO NOT commit this change to Git)

## Getting a GitHub Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "Choir Attendance Sync")
4. Select only the "gist" permission
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Paste it in line 486 of choir-attendance.html

## Important Security Notes

⚠️ **NEVER commit your token to Git!**
- Keep the token only in your local file
- Don't share it with others
- Each user should use their own token

## Alternative: Use .gitignore

If you want to keep your token in the file safely:

1. Create a separate config file (e.g., `config.local.js`)
2. Add it to `.gitignore`
3. Load it in the HTML file

But for simplicity, just edit line 486 locally and don't commit that change.
