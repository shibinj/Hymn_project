export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Dynamically serve admin/firebase-config.js with valid Firebase configuration
    if (url.pathname === '/admin/firebase-config.js') {
      const apiKey = env.FIREBASE_API_KEY || 'AIzaSyDJ5-YBSIxm7HuZc2D82OkTxxBHNRw6Awk';
      const authDomain = env.FIREBASE_AUTH_DOMAIN || 'holy-hymns.firebaseapp.com';
      const projectId = env.FIREBASE_PROJECT_ID || 'holy-hymns';
      const storageBucket = env.FIREBASE_STORAGE_BUCKET || 'holy-hymns.firebasestorage.app';
      const messagingSenderId = env.FIREBASE_MESSAGING_SENDER_ID || '895486383107';
      const appId = env.FIREBASE_APP_ID || '1:895486383107:web:f2915742618cfd1e02aa36';

      let allowedAdmins = ['shibin.john@gmail.com', 'abykulathakkal@gmail.com', 'nehabiju1507@gmail.com'];
      if (env.FIREBASE_ALLOWED_ADMINS) {
        try {
          const parsed = typeof env.FIREBASE_ALLOWED_ADMINS === 'string'
            ? JSON.parse(env.FIREBASE_ALLOWED_ADMINS)
            : env.FIREBASE_ALLOWED_ADMINS;
          if (Array.isArray(parsed) && parsed.length) allowedAdmins = parsed;
        } catch (e) {}
      }

      const js = `export const firebaseConfig = {
    apiKey: "${apiKey}",
    authDomain: "${authDomain}",
    projectId: "${projectId}",
    storageBucket: "${storageBucket}",
    messagingSenderId: "${messagingSenderId}",
    appId: "${appId}"
};
export const ALLOWED_ADMINS = ${JSON.stringify(allowedAdmins)};
`;

      return new Response(js, {
        headers: {
          'Content-Type': 'application/javascript; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      });
    }

    // 2. Fetch static assets from Cloudflare Assets
    const response = await env.ASSETS.fetch(request);

    // 3. For preview, ensure HTML files never get stale-cached
    if (url.pathname === '/' || url.pathname.endsWith('.html')) {
      const newHeaders = new Headers(response.headers);
      newHeaders.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      newHeaders.set('Pragma', 'no-cache');
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    }

    return response;
  }
};
