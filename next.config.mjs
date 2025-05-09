/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'gh-pages';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  basePath: isGithubPages ? '/<repo-name>' : '',
  assetPrefix: isGithubPages ? '/<repo-name>/' : '',
};

module.exports = nextConfig;
