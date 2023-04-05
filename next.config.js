/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "uploads-ssl.webflow.com",
      "picsum.photos",
      "media.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
