const fs = require('fs');
const path = require('path');

const apiKey = process.env.FIREBASE_API_KEY || 'AIzaSyDJ5-YBSIxm7HuZc2D82OkTxxBHNRw6Awk';
const authDomain = process.env.FIREBASE_AUTH_DOMAIN || 'holy-hymns.firebaseapp.com';
const projectId = process.env.FIREBASE_PROJECT_ID || 'holy-hymns';
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || 'holy-hymns.firebasestorage.app';
const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '895486383107';
const appId = process.env.FIREBASE_APP_ID || '1:895486383107:web:f2915742618cfd1e02aa36';

let allowedAdmins = ['shibin.john@gmail.com', 'abykulathakkal@gmail.com', 'nehabiju1507@gmail.com'];
if (process.env.FIREBASE_ALLOWED_ADMINS) {
    try {
        const raw = process.env.FIREBASE_ALLOWED_ADMINS.trim();
        if (raw.startsWith('[')) {
            allowedAdmins = JSON.parse(raw);
        } else if (raw) {
            allowedAdmins = raw.split(',').map(e => e.trim()).filter(Boolean);
        }
    } catch (e) {
        console.warn('⚠️ Could not parse FIREBASE_ALLOWED_ADMINS:', e);
    }
}

const configContent = `export const firebaseConfig = {
    apiKey: "${apiKey}",
    authDomain: "${authDomain}",
    projectId: "${projectId}",
    storageBucket: "${storageBucket}",
    messagingSenderId: "${messagingSenderId}",
    appId: "${appId}"
};
export const ALLOWED_ADMINS = ${JSON.stringify(allowedAdmins)};
`;

const targetDir = path.join(__dirname, '..', 'admin');
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'firebase-config.js'), configContent, 'utf-8');
console.log('✅ Generated admin/firebase-config.js successfully!');
