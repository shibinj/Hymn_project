const fs = require('fs');
const path = require('path');

const apiKey = process.env.FIREBASE_API_KEY || '';
const authDomain = process.env.FIREBASE_AUTH_DOMAIN || 'holy-hymns.firebaseapp.com';
const projectId = process.env.FIREBASE_PROJECT_ID || 'holy-hymns';
const storageBucket = process.env.FIREBASE_STORAGE_BUCKET || 'holy-hymns.appspot.com';
const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID || '';
const appId = process.env.FIREBASE_APP_ID || '';

let allowedAdmins = [];
try {
    const raw = process.env.FIREBASE_ALLOWED_ADMINS || '';
    if (raw.startsWith('[')) {
        allowedAdmins = JSON.parse(raw);
    } else if (raw.trim()) {
        allowedAdmins = raw.split(',').map(e => e.trim()).filter(Boolean);
    }
} catch (e) {
    console.warn('⚠️ Could not parse FIREBASE_ALLOWED_ADMINS:', e);
}

if (!allowedAdmins.length) {
    allowedAdmins = ['shibinjohn@live.com'];
}

console.log('--- Generating admin/firebase-config.js ---');
console.log('FIREBASE_API_KEY present:', Boolean(apiKey));
console.log('FIREBASE_PROJECT_ID:', projectId);
console.log('FIREBASE_ALLOWED_ADMINS count:', allowedAdmins.length);

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
console.log('✅ Successfully wrote admin/firebase-config.js');
