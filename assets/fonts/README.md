# assets/fonts/

Place self-hosted web font files here.

## Default font: Hanken Grotesk

The site currently loads Hanken Grotesk via Google Fonts (a CDN `<link>` tag
in `index.html`). To switch to self-hosted fonts for better privacy and
caching control, follow these steps:

### 1 — Download the font files

Visit https://fonts.google.com/specimen/Hanken+Grotesk and click
**Download family**. This gives you TTF files.

### 2 — Convert to WOFF2

WOFF2 is the only format you need for modern browsers (30%+ smaller than TTF).

Convert at: https://cloudconvert.com/ttf-to-woff2

Download and rename the three weights used by this site:

| File name                        | Weight | Style  |
|----------------------------------|--------|--------|
| `HankenGrotesk-Light.woff2`      | 300    | normal |
| `HankenGrotesk-Regular.woff2`    | 400    | normal |
| `HankenGrotesk-Medium.woff2`     | 500    | normal |

Place all three files in this folder (`assets/fonts/`).

### 3 — Activate the @font-face declarations

In `assets/css/main.css`, uncomment the `@font-face` block near the top
of the file (it's clearly marked).

### 4 — Remove the Google Fonts link

In `index.html` and `404.html`, delete (or comment out) these two lines
from the `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500&display=swap" rel="stylesheet">
```

And replace the preload hint with:

```html
<link rel="preload" href="assets/fonts/HankenGrotesk-Regular.woff2"
      as="font" type="font/woff2" crossorigin>
```

---

## Checking font licenses

Always verify that your chosen font's license permits self-hosting before
distributing it. Hanken Grotesk uses the SIL Open Font License 1.1, which
explicitly allows self-hosting.
