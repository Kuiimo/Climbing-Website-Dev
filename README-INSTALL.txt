BRUSHWORKS PWA INSTALLATION

1. Upload all six HTML files plus manifest.webmanifest, service-worker.js, offline.html and the entire icons folder into the ROOT of your GitHub Pages repository (same folder as index.html). Keep your existing style.css, images and Supabase files.
2. Commit and wait for GitHub Pages to deploy.
3. Visit https://kujimo.github.io/Climbing-Website-Dev/
4. iPhone: open in Safari > Share > Add to Home Screen > Add. Android: open in Chrome > menu > Install app or Add to Home screen.
5. If you later update your app and want to refresh offline files, change CACHE_NAME in service-worker.js from v1 to v2.

This PWA still requires internet for Supabase operations. The service worker does not cache Supabase data.

No Supabase SQL is required for the PWA itself.
