import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { navigation } from "@/config/navigation";
import { projectsData } from "@/config/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = navigation.public.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 1,
    },
    ...publicRoutes,
    ...projectRoutes,
  ];
}
