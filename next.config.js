/** @type {import('next').NextConfig} */
const API_KEY = "ffbb1e39db3dd7253121c6925c0bd31a";

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/old/:path/:date",
        destination: "/new/:date/:path",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
