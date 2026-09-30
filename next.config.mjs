/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // To produce a fully static export, uncomment the line below and run `next build`.
  // The site is written to be export-compatible (no server actions, no route handlers).
  // output: "export",
};

export default nextConfig;
