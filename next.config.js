/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    isrMemoryCacheSize: 0,
  },
  generateBuildId: async () => {
    return process.env.BUILD_ID || "deadbeef";
  },
};

module.exports = nextConfig;
