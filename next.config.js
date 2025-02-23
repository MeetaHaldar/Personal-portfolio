/** @type {import('next').N
 * extConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        domains: ["avatars.githubusercontent.com"],
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
