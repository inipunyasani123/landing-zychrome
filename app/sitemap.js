import { SITE } from "@/lib/sesi";

export const revalidate = 86400;

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/papan-hasil`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/coba`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
