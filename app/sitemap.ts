import type { MetadataRoute } from "next";

const BASE_URL = "https://azdesigns.co.il";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: new Date(), priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/process`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), priority: 0.9 },
    {
      url: `${BASE_URL}/portfolio/bakery`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/portfolio/residence`,
      lastModified: new Date(),
      priority: 0.7,
    },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.8 },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/accessibility`,
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}
