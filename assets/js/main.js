/**
 * main.js
 * Minimal interaction layer.
 * Loaded with defer — runs after HTML is parsed.
 */

(function () {
  'use strict';

  /* ── Active nav link on scroll ──────────────────────────────
   * Highlights the nav anchor matching the section currently
   * nearest the top of the viewport.
   */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('active'));
            const activeLink = document.querySelector(
              `nav a[href="#${entry.target.id}"]`
            );
            if (activeLink) activeLink.classList.add('active');
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
  }

})();
