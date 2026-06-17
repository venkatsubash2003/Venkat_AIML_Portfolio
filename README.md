# Venkat Sai Subash Panchakarla — AI/ML Portfolio

This is a custom, visually polished static portfolio built from Venkat's AI/ML resume.

## What is included

- `index.html` — complete portfolio markup
- `styles.css` — responsive glassmorphism / neural mission-control visual system
- `script.js` — particle background, project modals, command palette, scroll progress, reveal animations, copy-email interaction
- `assets/VenkatSaiSubash_AIML.pdf` — resume PDF used by the resume button
- `assets/favicon.svg` — custom favicon

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
python3 -m http.server 5173
```

Then visit:

```text
http://localhost:5173
```

## Deploy

This portfolio is framework-free and can be deployed to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static hosting provider. Upload the entire folder and set `index.html` as the entry point.

## Customization notes

- Update links and email in `index.html` and `script.js` if needed.
- Add real project screenshots by replacing the generated project visuals with image blocks.
- Keep the quantified metrics visible; they are the highest-conversion part of the portfolio for recruiters.


## Audio

The site includes a browser-safe Sound toggle that enables a gentle smooth honey-like ambient music loop and gentle hover chimes for portfolio cards. Browsers usually require one user interaction before audio can play, so the toggle is intentional.


## Favicon note

The VS favicon is now provided at the site root as SVG, PNG, ICO, Apple touch icon, Safari mask icon, and a web manifest. If Safari still shows the old/default icon, clear Safari's website data for the local/hosted site or hard-refresh/reopen the tab. Safari caches favicons very aggressively, so this is usually a cache issue rather than a code issue.
