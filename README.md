# Slidecal

A calorie tracker built around one idea: **logging should take two seconds.** You don't search for foods or weigh portions. There's a button for each meal (snack, breakfast, lunch, dinner, drinks), fanned around the bottom corner under your thumb. Press one and, without lifting, slide away from the corner to roughly what you just ate.

While you slide, a scale of familiar foods fills the top of the screen, each placed at its calorie value, so you can see at a glance that a flat white is down here and a big bowl of carbonara is up there. The estimate doesn't have to be exact. It just has to be quick enough that you actually do it.

**Try it:** https://scottvallance.github.io/slidercal/

## Features

- **Press a meal, slide, let go.** All five meals sit in a thumb-reach arc, for left or right hands, and the press point becomes the start of a slider under your finger. Let go and the entry logs after a few seconds, with an Undo in case you slipped.
- **A food scale while you drag.** It uses your own foods first, adds big portions and common combos, and falls back to a built-in list wherever your foods leave a gap.
- **Your foods.** List what you usually eat, and an AI chat of your choice fills in similar foods and estimates small, usual and large servings (see below).
- **Calibration.** Place known foods on the slider by feel. The app fits each meal's curve to your sense of scale.
- **History.** Stacked charts of the last 14 days or 12 weeks against your daily target, with a table view.
- **Private by design.** No account, no server, no tracking. Everything stays on your device.
- **Works offline** once installed. When a new version is out, an **Update** button appears at the bottom of the Log screen; nothing changes until you tap it.

## Install on your phone

**iPhone:** open the link in Safari, tap Share → **Add to Home Screen**, then open it from the new icon. It runs full screen like an app.

**Android:** open the link in Chrome, then tap ⋮ → **Install app** (or **Add to Home screen**).

It works in any desktop browser too.

## Setting up your foods

The first time you open it, Slidecal asks what you usually eat for each meal. To fill out your scale:

1. Type a few foods per meal (for example "porridge with berries, poached eggs on sourdough").
2. Tap **Copy prompt** and paste it into any AI chat: Claude, ChatGPT, Gemini or whatever you use.
3. Copy the whole reply, paste it back into Slidecal, and tap **Save and use**.

The chat returns your foods plus similar ones you'd plausibly eat, with calorie estimates spread across each slider. You can edit any number, remove foods, or skip the AI step and add foods by hand. You can change your list later under **My foods**.

## Your data

- Everything is saved in your browser's storage on this device. Nothing is sent anywhere.
- On iPhone, data saved in a home-screen app is kept separately from Safari's. Install the app first, then start logging.
- Use **History → Backup → Export backup** now and then. You can import the file on another device or after reinstalling.
- Clearing your browser's website data deletes your log.

## Run your own copy

It's a single static page with no build step and no dependencies.

1. Fork this repo.
2. In your fork, go to Settings → Pages → Deploy from a branch → `main`, folder `/ (root)`.
3. It'll be live at `https://<your-username>.github.io/slidercal/` within a minute or two.

To work on it locally, serve the folder with any static server (for example `python3 -m http.server`) and open `http://localhost:8000`. The service worker needs `http://localhost` or HTTPS, so opening the file directly won't make it work offline.

## Files

| File | What it does |
|---|---|
| `index.html` | The whole app: markup, styles and script |
| `manifest.webmanifest` | App name, colours and icons for home-screen installs |
| `sw.js` | Caches the app so it opens offline |
| `icon-*.png`, `apple-touch-icon.png` | Home-screen icons |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Limitations

- Calorie values are rough estimates, intended as mental anchors rather than nutrition data.
- A home-screen web app can't add an iOS home-screen widget. That would need a native app.
- There's no sync between devices. Use export and import to move data.

## License

MIT. See [LICENSE](LICENSE).
