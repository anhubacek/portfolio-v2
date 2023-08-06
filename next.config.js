/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    compiler: {
    styledComponents: true,
  },
    i18n: {
    locales: ['es', 'ca'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
