/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    SERVER: 'https://api.npoint.io/f2d0fa5466639d1b194e',
    API: 'https://kinopoiskapiunofficial.tech/api/',
    X_API_KEY: process.env.X_API_KEY,
    CLIENT: 'http://localhost:3000',
    NEXT_PUBLIC_URL: 'http://localhost:3000',
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/photo/**',
      },
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
        pathname: '/get-ott/**',
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
