Room Scholars — image assets
============================

Drop the following files into this folder, then set their `src` in
/data/projects.ts (project slug: room-scholars) and update the matching `alt`
text. Until a file is added, the site renders a labelled placeholder.

Files to add:
  cover.png         1600 x 1000   -> projects[1].cover.src = "/projects/room-scholars/cover.png"
  screenshot-1.png  1600 x 1000   -> projects[1].screenshots[0].src  (Listings and rooms)
  screenshot-2.png  1600 x 1000   -> projects[1].screenshots[1].src  (Search and discovery)
  screenshot-3.png  1600 x 1000   -> projects[1].screenshots[2].src  (Admin portal)

Notes:
- Use PNG or JPG. next/image serves AVIF/WebP automatically.
- Keep 1600x1000 (16:10) to avoid layout shift, or update width/height in data.
- Update each `alt` to describe the real screenshot.
