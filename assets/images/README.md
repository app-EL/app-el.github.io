# assets/images/

Organized by purpose. Use lowercase filenames with hyphens — no spaces.

## Subfolders

### profile/
Your headshot or portrait photo.

- Recommended: `your-name.jpg` (or `.webp` for better compression)
- Size: at least 200×200 px, square crop works best
- Format: JPEG or WebP
- To use in `index.html`, replace the `.avatar` div with:
  ```html
  <img src="assets/images/profile/your-name.jpg"
       alt="Your Name"
       width="52" height="52"
       style="border-radius:50%;object-fit:cover;flex-shrink:0;">
  ```

### projects/
Optional thumbnail images for individual project cards.

- Name files descriptively: `hawaii-land-use-map.jpg`, `flood-model-2024.jpg`
- Recommended size: 800×500 px (landscape 16:10)
- Format: WebP preferred, JPEG fallback
- If you add thumbnails, update the `.project` cards in `index.html` to
  include an `<img>` before the `.project-title`

### og/
Open Graph / social sharing image (shown when the URL is shared on LinkedIn,
Twitter/X, Slack, etc.).

- File name: `og-image.jpg`
- Required size: exactly **1200×630 px**
- Format: JPEG (widest platform support)
- After adding the file, update the Open Graph tags in `index.html`:
  ```html
  <meta property="og:image" content="https://yourdomain.com/assets/images/og/og-image.jpg">
  ```

---

## Image best practices

- Always add `width` and `height` attributes to `<img>` tags to prevent
  layout shift (CLS).
- Use `loading="lazy"` on images that appear below the fold.
- Do **not** use `loading="lazy"` on your profile photo — it's above the fold.
- Compress images before committing. Tools:
  - https://squoosh.app (browser-based, free)
  - https://tinypng.com (JPEG/PNG)
  - https://caniuse.com/webp (check WebP support — it's universal now)
