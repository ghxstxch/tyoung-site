
# Thomas Young - Static Site

A small, fast, accessible static site inspired by clean personal-photo layouts (e.g., category grids leading to galleries).

## Files
- `index.html` - landing page with hero and featured cards
- `about.html`, `projects.html`, `photos.html`, `contact.html`
- `style.css`, `script.js`
- `assets/` - icons and placeholders
- `robots.txt`, `sitemap.xml`

## Local preview
Open `index.html` directly, or run a tiny server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy (GitHub Pages)
1. Create a repo (e.g., `thomas-young-site`).
2. Commit these files to the root and push to `main`.
3. In repo settings → Pages: Source = `Deploy from a branch`, Branch = `main` / root.
4. Your site will be live at `https://<username>.github.io/thomas-young-site/`.

## Deploy (Netlify)
- Drag-drop the folder on https://app.netlify.com/drop or connect your repo.

## Customize
- Replace `assets/cover.jpg` with a real photo (keep the same name for simplicity).
- Update links, email, and social in `about.html` and `contact.html`.
- Add galleries by creating new HTML files or linking to an external album.
- Tweak colors in `:root` within `style.css`.
