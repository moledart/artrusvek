/** @type {import('next').NextConfig} */
const nextConfig = {
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
