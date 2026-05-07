import { resolve } from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  turbopack: {
    resolveAlias: {
      app: resolve(__dirname, 'src/app'),
    },
  },
  async rewrites() {
    return [
      {
        source: '/en.html',
        destination: '/en',
      },
      {
        source: '/ru.html',
        destination: '/ru',
      },
    ];
  },
};

export default nextConfig;
