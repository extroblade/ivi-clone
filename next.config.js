/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    API: 'https://kinopoiskapiunofficial.tech/api/',
    X_API_KEY: process.env.X_API_KEY,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kinopoiskapiunofficial.tech',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.userapi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kinopoisk.ru',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dfs.ivi.ru',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
