# Slidecal: home-screen app

A static web app (no server, no account). Everything is saved on the phone. Use History → Backup to export it now and then.

## Files
- `index.html`: the app
- `manifest.webmanifest`, icons: let iOS install it as a full-screen home-screen app
- `sw.js`: caches the app so it opens offline

## Put it online (free, pick one)

**Netlify Drop (no Git):** go to app.netlify.com/drop, sign in with a free account, and drag this folder onto the page. You get a `https://<name>.netlify.app` link. To update it later, drag the folder onto the site's Deploys page.

**GitHub Pages:** create a repo (for example `slidecal`), add these files, then turn on Settings → Pages → Deploy from branch → `main` / root. The link will be `https://<user>.github.io/slidecal/`.

## Install on iPhone
1. Open the link in **Safari**.
2. Tap Share → **Add to Home Screen**.
3. Open it from the home-screen icon. It runs full screen and works offline.

## Move your data in from the Claude version
1. In the Claude version: History → **Export backup** (or Copy backup text).
2. In the installed app: History → **Import file** (or paste the text).

## Notes
- Data lives in this app's storage on the phone. iOS keeps home-screen app data, but export a backup occasionally.
- To set up foods in this app: type your usual foods per meal, open "Use Claude or any AI chat instead", tap Copy prompt, paste it into any AI chat, then paste the answer back and tap Save and use. (The one-tap "Build my food list" only appears inside Claude.)
- A home-screen web app can't provide an iOS widget. A widget needs a native app, which needs Xcode and either a paid developer account or re-signing every 7 days.
