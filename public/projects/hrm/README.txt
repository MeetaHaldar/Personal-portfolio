HRM / Attendance / Payroll System — image assets
=================================================

Drop the following files into this folder, then set their `src` in
/data/projects.ts (project slug: hrm-payroll-system) and update the matching
`alt` text. Until a file is added, the site renders a labelled placeholder.

Files to add:
  cover.png         1600 x 1000   -> projects[2].cover.src = "/projects/hrm/cover.png"
  screenshot-1.png  1600 x 1000   -> projects[2].screenshots[0].src  (Employee management)
  screenshot-2.png  1600 x 1000   -> projects[2].screenshots[1].src  (Attendance)
  screenshot-3.png  1600 x 1000   -> projects[2].screenshots[2].src  (Payroll / salary slips)

Notes:
- Use PNG or JPG. next/image serves AVIF/WebP automatically.
- Keep 1600x1000 (16:10) to avoid layout shift, or update width/height in data.
- Update each `alt` to describe the real screenshot.
