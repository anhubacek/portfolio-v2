/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    compiler: {
    styledComponents: true,
  },
   "typeRoots": ["node_modules/@types", "types"]
}

module.exports = nextConfig
