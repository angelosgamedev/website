import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/images/**" },
    ],
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i1.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i2.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i3.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i4.ytimg.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "yt3.googleusercontent.com", pathname: "/**" },
    ],
  },
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
