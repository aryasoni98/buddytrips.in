import type { NextConfig } from "next";

const acceptMarkdown = {
  type: "header" as const,
  key: "accept",
  value:
    "(?=.*(?:text/plain|text/markdown))(?!.*text/html.*(?:text/plain|text/markdown)).*",
};

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [acceptMarkdown],
          destination: "/api/md/pages/home",
        },
        {
          source: "/itineraries/:slug",
          has: [acceptMarkdown],
          destination: "/api/md/itineraries/:slug",
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value:
              '</llms.txt>; rel="describedby"; type="text/plain", </llms-full.txt>; rel="service-doc"; type="text/plain", </sitemap.xml>; rel="sitemap"; type="application/xml"',
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
