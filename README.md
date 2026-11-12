# Summer Anne San Gabriel — Portfolio

A single-page, scrollable portfolio. Plain HTML, CSS and JavaScript, so no build step is needed.

## Files
Everything the website needs is in `public/` (only this folder is published):
- `public/index.html` — all the content (edit text here)
- `public/style.css` — colors, fonts and layout (colors are at the top under `:root`)
- `public/script.js` — menu, hero sizing, project slider, scroll animations
- `public/images/` — photos (resized for the web)
- `public/SummerAnne_SanGabriel_Resume.pdf` — résumé (opens in a new tab)

Outside `public/` (not published):
- `render.yaml` — Render settings
- `DESIGN.md`, `PRODUCT.md`, `.impeccable/`, `.claude/` — design notes and Impeccable tooling

## Preview on your computer
Double-click `public/index.html` to open it in your browser.

## Deploy to Render (free)
1. Create a GitHub account at github.com, then make a new **public** repository (e.g. `portfolio`).
2. Upload every file and folder into that repository (GitHub → "Add file" → "Upload files" → drag them in → "Commit changes").
3. Create a Render account at render.com and sign in with GitHub.
4. In Render: **New → Static Site**, pick your `portfolio` repository.
5. Settings:
   - Build Command: leave blank
   - Publish Directory: `public`
6. Click **Create Static Site**. In a minute you'll get a link like `https://summer-portfolio.onrender.com`.

Any time you change a file on GitHub, Render redeploys automatically.
