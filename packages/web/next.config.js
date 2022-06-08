const isGithubPages = process.env.GH_PAGES === "true";
const projectName = "Encryptr";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  basePath: isGithubPages ? `/${projectName}` : "",
  assetPrefix: isGithubPages ? `/${projectName}/` : "",

  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
