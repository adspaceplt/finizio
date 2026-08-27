/* Finizio — shared behaviour. No dependencies. */
(function () {
  'use strict';

  /* ── Mobile navigation ─────────────────────────────────── */
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.getElementById('primary-nav');

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.setAttribute('data-open', String(open));
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close on link tap, Escape, or resize back to desktop.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) setOpen(false);
    });
  }

  /* ── Image slots ───────────────────────────────────────────
     Photos live in /assets/projects/. Until a file is dropped in,
     the <img> 404s — remove it so the .shot gradient shows through
     instead of a broken-image icon.
     ------------------------------------------------------- */
  document.querySelectorAll('.shot img').forEach(function (img) {
    img.addEventListener('error', function () { img.remove(); });
    // Cached failures fire before this script runs.
    if (img.complete && img.naturalWidth === 0) img.remove();
  });
})();
