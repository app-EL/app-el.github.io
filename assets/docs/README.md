# assets/docs/

Place downloadable documents here — resume, CV, project reports, etc.

## Naming convention

Use lowercase, hyphen-separated filenames:

```
your-name-resume-2025.pdf
project-report-watershed-2024.pdf
```

## Linking in index.html

To link a document from a project card or contact section:

```html
<!-- Opens in a new tab -->
<a href="assets/docs/your-name-resume-2025.pdf" target="_blank" rel="noopener">
  Resume (PDF)
</a>

<!-- Forces a download -->
<a href="assets/docs/your-name-resume-2025.pdf" download>
  Download Resume
</a>
```

## Notes

- PDF is the safest format for documents you want to look consistent across devices.
- Keep individual files under ~5 MB where possible — GitHub has a 100 MB per-file
  limit, and large files slow page performance.
- GitHub Pages serves files with appropriate `Content-Type` headers for PDFs
  automatically, so no server config is needed.
