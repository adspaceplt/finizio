# Project photos

Drop your photos into this folder using **exactly these filenames**. The site
picks them up automatically — no code changes needed.

Until a file exists, that slot shows a soft grey gradient instead of a broken
image, so the site stays presentable while you fill it in.

## Required files

| Filename | Where it appears | Best shape |
|---|---|---|
| `hero.jpg` | Home page, large image beside the headline | Portrait, 4:5 |
| `p1-cover.jpg` | Home + Portfolio, project 1 | Portrait, 4:5 |
| `p2-cover.jpg` | Home + Portfolio, project 2 | Portrait, 4:5 |
| `p3-cover.jpg` | Home + Portfolio, project 3 | Portrait, 4:5 |
| `p4-cover.jpg` | Portfolio, project 4 | Portrait, 4:5 |
| `p5-cover.jpg` | Portfolio, project 5 | Portrait, 4:5 |
| `p6-cover.jpg` | Portfolio, project 6 | Portrait, 4:5 |

## Getting them off Instagram

Claude cannot download from your Instagram account — Instagram blocks
automated access. Export them yourself:

1. Instagram app → **Settings → Accounts Centre → Your information and
   permissions → Download your information**, or
2. Open each post on a desktop browser and save the image, or
3. Use the **original files** from your phone or your designer — these are
   higher resolution than anything Instagram serves back.

Originals are strongly preferred. Instagram re-compresses uploads, so photos
pulled back off the platform look noticeably softer on a large screen.

## Preparing the files

- **Format** — `.jpg` for photos. Keep the filename lowercase.
- **Width** — around 1600px on the long edge is plenty.
- **File size** — aim for under 400KB each. Large photos are the most common
  cause of a slow site, and most of your visitors arrive on mobile data.
  [Squoosh](https://squoosh.app) compresses them in the browser for free.
- **Crop** — portrait 4:5 matches the layout. Anything else still works; it
  will be centre-cropped to fit.

## Adding more projects

Copy one `<article class="project">` block in `portfolio.html`, change the
filename to `p7-cover.jpg`, and add the matching photo here.

## Still to fill in

Alongside the photos, search the HTML files for `[` — every bracketed
placeholder is a real fact that needs your input before the site goes live
(showroom address, opening hours, prices, lead times, warranty, reviews).
