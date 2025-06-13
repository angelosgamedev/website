import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'angelosportfolio.info',
          },
        ],
        destination: 'https://www.angelosportfolio.info',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
