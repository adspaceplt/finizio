/* Finizio — shared behaviour. No dependencies. */
(function () {
  'use strict';

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
