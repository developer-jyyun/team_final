/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.theconversation.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "tourimage.interpark.com",
      },
      {
        protocol: "https",
        hostname: "openimage.interpark.com",
      },
      {
        protocol: "https",
        hostname: "media.interparkcdn.net",
      },
    ],
  },
};

module.exports = nextConfig;
