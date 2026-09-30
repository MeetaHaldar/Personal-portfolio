Inventory Management System — image assets
===========================================

Drop the following files into this folder, then set their `src` in
/data/projects.ts (project slug: inventory-management-system) and update the
matching `alt` text. Until a file is added, the site renders a labelled
placeholder in its place (no broken images).

Files to add:
  cover.png         1600 x 1000   -> set projects[0].cover.src = "/projects/inventory/cover.png"
  screenshot-1.png  1600 x 1000   -> projects[0].screenshots[0].src  (Dashboard and analytics)
  screenshot-2.png  1600 x 1000   -> projects[0].screenshots[1].src  (Box barcode / QR)
  screenshot-3.png  1600 x 1000   -> projects[0].screenshots[2].src  (Transfers / inter-company sales)

Notes:
- Use PNG or JPG. next/image will serve AVIF/WebP automatically.
- Keep the aspect ratio at 1600x1000 (16:10) to avoid layout shift, or update
  the width/height in /data/projects.ts to match your files.
- Update the `alt` text for each image to describe what it actually shows.
