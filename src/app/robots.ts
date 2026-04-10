import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://gcse-history.koydo.app/sitemap.xml",
    host: "https://gcse-history.koydo.app",
  };
}
