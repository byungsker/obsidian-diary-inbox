/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/obsidian-diary-inbox" : "",
  assetPrefix: isGithubPages ? "/obsidian-diary-inbox/" : "",
  images: { unoptimized: true },
};

module.exports = nextConfig;
