/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for Vercel deployment
  output: "standalone",

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache for 1 year (images are immutable)
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bcconciergerie.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.bcconciergerie.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.leguidedescommerciaux.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "studio.gaynako.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Compiler options for better performance
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Performance optimizations
  poweredByHeader: false,
  compress: true,

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // Redirects for SEO canonicalization
  async redirects() {
    return [
      // Redirect old non-locale paths
      {
        source: '/apropos',
        destination: '/fr/a-propos',
        permanent: true,
      },
      {
        source: '/Apropos',
        destination: '/fr/a-propos',
        permanent: true,
      },
      // Redirect old non-locale service/offer paths
      {
        source: '/services',
        destination: '/fr/services',
        permanent: true,
      },
      {
        source: '/offres',
        destination: '/fr/offres',
        permanent: true,
      },
      {
        source: '/a-propos',
        destination: '/fr/a-propos',
        permanent: true,
      },
    ];
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
};
export default nextConfig;
