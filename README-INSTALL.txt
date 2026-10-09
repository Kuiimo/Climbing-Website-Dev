
1. Visit https://kujimo.github.io/Climbing-Website-Dev/
2. iPhone: open in Safari > Share > Add to Home Screen > Add. Android: open in Chrome > menu > Install app or Add to Home screen.
3. If you later update your app and want to refresh offline files, change CACHE_NAME in service-worker.js from v1 to v2.

This PWA still requires internet for Supabase operations. The service worker does not cache Supabase data.

No Supabase SQL is required for the PWA itself.
