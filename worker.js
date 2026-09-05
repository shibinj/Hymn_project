export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. Dynamically serve admin/firebase-config.js strictly from runtime environment variables
    if (url.pathname === '/admin/firebase-config.js' || url.pathname.endsWith('/firebase-config.js')) {
      // Check if config was passed as a single JSON string
      let parsedConfig = null;
      for (const key of ['FIREBASE_CONFIG', 'FIREBASE_JSON', 'FIREBASE_WEB_CONFIG']) {
        if (env && env[key]) {
          try {
            parsedConfig = typeof env[key] === 'string' ? JSON.parse(env[key]) : env[key];
            break;
          } catch(e) {}
        }
      }

      const apiKey = (env && env.FIREBASE_API_KEY) || 
                     (parsedConfig && (parsedConfig.apiKey || parsedConfig.FIREBASE_API_KEY)) ||
                     (typeof process !== 'undefined' && process.env && process.env.FIREBASE_API_KEY) || 
                     (typeof globalThis !== 'undefined' && globalThis.FIREBASE_API_KEY) || '';

      const authDomain = (env && env.FIREBASE_AUTH_DOMAIN) || (parsedConfig && (parsedConfig.authDomain || parsedConfig.FIREBASE_AUTH_DOMAIN)) || '';
      const projectId = (env && env.FIREBASE_PROJECT_ID) || (parsedConfig && (parsedConfig.projectId || parsedConfig.FIREBASE_PROJECT_ID)) || '';
      const storageBucket = (env && env.FIREBASE_STORAGE_BUCKET) || (parsedConfig && (parsedConfig.storageBucket || parsedConfig.FIREBASE_STORAGE_BUCKET)) || '';
      const messagingSenderId = (env && env.FIREBASE_MESSAGING_SENDER_ID) || (parsedConfig && (parsedConfig.messagingSenderId || parsedConfig.FIREBASE_MESSAGING_SENDER_ID)) || '';
      const appId = (env && env.FIREBASE_APP_ID) || (parsedConfig && (parsedConfig.appId || parsedConfig.FIREBASE_APP_ID)) || '';

      let allowedAdmins = [];
      const rawAdmins = (env && env.FIREBASE_ALLOWED_ADMINS) || (parsedConfig && (parsedConfig.ALLOWED_ADMINS || parsedConfig.allowedAdmins));
      if (rawAdmins) {
        try {
          const parsed = typeof rawAdmins === 'string' ? JSON.parse(rawAdmins) : rawAdmins;
          if (Array.isArray(parsed) && parsed.length) allowedAdmins = parsed;
        } catch (e) {}
      }

      // If apiKey is present via runtime variables, return dynamic config
      if (apiKey) {
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

      // If runtime variable is missing, check if static asset was generated during build by scripts/build-config.js
      try {
        const assetRes = await env.ASSETS.fetch(request);
        if (assetRes && assetRes.status === 200) {
          const assetContent = await assetRes.text();
          if (assetContent && !assetContent.includes('apiKey: ""') && !assetContent.includes('YOUR_API_KEY')) {
            return new Response(assetContent, {
              headers: {
                'Content-Type': 'application/javascript; charset=utf-8',
                'Cache-Control': 'no-cache, no-store, must-revalidate'
              }
            });
          }
        }
      } catch (err) {}

      // Fallback with debug header so we can inspect which env keys Cloudflare passed
      const envKeys = Object.keys(env || {}).filter(k => k !== 'ASSETS');
      const debugJs = `export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
export const ALLOWED_ADMINS = [];
// Cloudflare env debug: available keys = [${envKeys.join(', ')}]
`;
      return new Response(debugJs, {
        headers: {
          'Content-Type': 'application/javascript; charset=utf-8',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Cloudflare-Env-Keys': envKeys.join(',')
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
