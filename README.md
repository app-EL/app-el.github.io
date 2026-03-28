# Portfolio — GitHub Pages

Minimalist portfolio site. No build tools. Edit and push.

---

## Repository structure

```
/                               ← Repo root (served as web root by GitHub Pages)
│
├── index.html                  Main portfolio page
├── 404.html                    Custom "page not found" page
├── favicon.svg                 Monogram favicon — edit initials inside
├── favicon.ico                 ← Add this: .ico fallback for older browsers
├── apple-touch-icon.png        ← Add this: 180×180 PNG for iOS home screen
├── robots.txt                  Search engine crawl rules + sitemap pointer
├── sitemap.xml                 URL index for search engines
├── CNAME                       Custom domain — edit or delete if not using one
├── .nojekyll                   Skips Jekyll processing (faster GitHub builds)
├── README.md                   This file
│
└── assets/                     All static assets live here
    ├── css/
    │   ├── variables.css       Design tokens (colors, type, spacing, layout)
    │   └── main.css            All styles — imports variables.css
    │
    ├── js/
    │   └── main.js             Active nav highlight on scroll (minimal JS)
    │
    ├── fonts/
    │   └── README.md           Instructions for self-hosting Hanken Grotesk
    │                           (currently loaded via Google Fonts CDN)
    │
    ├── images/
    │   ├── README.md           Image guidelines and best practices
    │   ├── profile/            ← Add your headshot here
    │   ├── projects/           ← Optional project thumbnails
    │   └── og/                 ← Add og-image.jpg (1200×630) for social previews
    │
    └── docs/
        └── README.md           For linked PDFs (resume, reports, etc.)
```

---

## Quick-start checklist

Run through these once before pushing:

- [ ] Replace `Your Name` everywhere in `index.html`
- [ ] Update tagline, bio, and contact links in `index.html`
- [ ] Update `YN` initials in `favicon.svg`
- [ ] Update all `yourusername` placeholders in Open Graph meta tags
- [ ] Edit project rows (title, description, meta, `href`)
- [ ] Add your photo to `assets/images/profile/` and update the avatar markup
- [ ] Add `og-image.jpg` (1200×630) to `assets/images/og/`
- [ ] Update `sitemap.xml` with your live URL and today's date
- [ ] Update `robots.txt` sitemap URL
- [ ] Edit or delete `CNAME` (only keep it if using a custom domain)
- [ ] Footer name + links

---

## Customizing

### Colors

All colors are CSS custom properties in `assets/css/variables.css`:

```css
--color-black:  #0f0f0f;   /* primary text          */
--color-mid:    #6b6b6b;   /* secondary text / bio  */
--color-light:  #b0b0b0;   /* labels, meta, links   */
--color-rule:   #e8e8e8;   /* divider lines         */
--color-white:  #ffffff;   /* background            */
```

Change any value here — it updates everywhere.

### Adding a project card

Copy-paste one `.project` block in `index.html`:

```html
<a class="project" href="https://your-link.com" target="_blank" rel="noopener">
  <div>
    <p class="project-title">Project Title</p>
    <p class="project-desc">One or two sentences.</p>
  </div>
  <p class="project-meta">Tool<br>Stack</p>
</a>
```

### Adding a section

1. Add a `<section id="new-section">` block in `index.html`
2. Add a matching `<a href="#new-section">` in the `<nav>`

### Linking your resume

Uncomment this line in the contact links:
```html
<a href="assets/docs/your-name-resume.pdf" target="_blank">Resume</a>
```
Then add your PDF to `assets/docs/`.

### Adding your photo

Replace the `.avatar` div in `index.html` with:
```html
<img src="assets/images/profile/your-name.jpg"
     alt="Your Name"
     width="52" height="52"
     style="border-radius:50%;object-fit:cover;flex-shrink:0;">
```

---

## Fonts

The site uses **Hanken Grotesk** loaded from Google Fonts (a CDN `<link>` tag).

To self-host instead — for better privacy, caching control, and performance
on sites with their own CDN — see `assets/fonts/README.md` for the full
step-by-step. The `@font-face` declarations are already written in
`assets/css/main.css`, just commented out.

---

## Deploy to GitHub Pages

### Option A — Personal site (`yourusername.github.io`)

URL: `https://yourusername.github.io`

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

Pages is **auto-enabled** for repos named `username.github.io`. Live in ~1 min.

---

### Option B — Project site (`yourusername.github.io/portfolio`)

URL: `https://yourusername.github.io/portfolio`

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

Then: **GitHub repo → Settings → Pages → Source → main / (root) → Save**

> **Note for Option B:** Update all Open Graph `og:url` and `og:image` values
> in `index.html` to include the `/portfolio` path prefix.

---

### Option C — Custom domain

1. Edit `CNAME` — replace placeholder with your actual domain
2. Add DNS records at your registrar:

| Type  | Name | Value                     |
|-------|------|---------------------------|
| A     | @    | 185.199.108.153           |
| A     | @    | 185.199.109.153           |
| A     | @    | 185.199.110.153           |
| A     | @    | 185.199.111.153           |
| CNAME | www  | yourusername.github.io    |

3. GitHub: **Settings → Pages → Custom domain** → enter domain → Save
4. Check **Enforce HTTPS** once DNS propagates (up to 48 h)

If you are **not** using a custom domain, delete `CNAME` from the repo.

---

## Updating

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages rebuilds in under a minute.

---

## Performance & best practice notes

These are the practices already baked into this repo's structure:

| Practice | How it's implemented |
|---|---|
| Separate CSS from HTML | External `assets/css/main.css` |
| Design tokens | All values in `assets/css/variables.css` |
| Non-blocking JS | `<script defer>` — runs after HTML parse |
| Font loading | `font-display: swap` via Google Fonts `&display=swap` |
| Semantic HTML | `<header>`, `<main>`, `<nav aria-label>`, `<section aria-labelledby>`, `<footer>` |
| External links | `rel="noopener"` on all `target="_blank"` links |
| Image dimensions | Add `width` + `height` to `<img>` tags to prevent layout shift |
| Lazy loading | Use `loading="lazy"` on project images (below the fold) |
| Open Graph | `og:` and `twitter:` meta tags ready to fill in |
| Favicon | SVG (modern) + `.ico` fallback + Apple touch icon |
| SEO basics | `robots.txt` + `sitemap.xml` |
| Self-host fonts | Scaffold in `assets/fonts/README.md` |
| Asset organization | images / docs / fonts / css / js in named subfolders |
