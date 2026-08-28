import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages project page repository deployment
  basePath: isGithubActions ? "/Tatulek" : "",
};

export default nextConfig;
