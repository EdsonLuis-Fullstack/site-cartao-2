import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "api.cartaobeneficiar.com.br",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.cartaobeneficiar.com.br",
        port: "",
        pathname: "/uploads/**",
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [25, 50, 75, 100],
  },
  async rewrites() {
    return [
      {
        source: '/api-proxy/:path*',
        destination: 'http://api.cartaobeneficiar.com.br/api/:path*',
      },
    ];
  },
  reactCompiler: true,
};

export default nextConfig;
