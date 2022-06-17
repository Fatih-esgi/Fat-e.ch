/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`${process.env.NEXT_PUBLIC_HOST}`],
    // minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
