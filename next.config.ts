import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStricMode: true,
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://Sugyeong97.github.io/rgt-task"
      : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
