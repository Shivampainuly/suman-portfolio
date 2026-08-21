/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? '/suman-portfolio' : '',
  assetPrefix: isGitHubPages ? '/suman-portfolio/' : '',
};
export default nextConfig;
