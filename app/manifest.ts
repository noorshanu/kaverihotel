import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: "Hotel and wedding venue in Jarangdih, Bokaro, Jharkhand.",
    start_url: "/",
    display: "standalone",
    background_color: "#fdf8ef",
    theme_color: "#630d16",
    icons: [
      {
        src: "/logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
