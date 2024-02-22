/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mlnu.testwala.in"],
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/sites/default/files/:path*",
        destination: `https://mlnu.testwala.in/sites/default/files/:path*`,
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
