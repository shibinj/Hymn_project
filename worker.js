export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Dynamically serve admin/firebase-config.js strictly from Cloudflare runtime environment variables
    if (url.pathname === '/admin/firebase-config.js') {
      const apiKey = env.FIREBASE_API_KEY || '';
      const authDomain = env.FIREBASE_AUTH_DOMAIN || '';
      const projectId = env.FIREBASE_PROJECT_ID || '';
      const storageBucket = env.FIREBASE_STORAGE_BUCKET || '';
      const messagingSenderId = env.FIREBASE_MESSAGING_SENDER_ID || '';
      const appId = env.FIREBASE_APP_ID || '';

      let allowedAdmins = [];
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
