import { site } from "@/lib/site-data";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.kaveripalace.com";

export const defaultTitle = `${site.name} | Hotel & Banquet in Bokaro, Jharkhand`;

export const defaultDescription =
  "Kaveri Palace — hotel rooms, marriage lawn and banquet hall in Jarangdih, Bokaro, Jharkhand. Near Jarangdih Railway Station. Call or WhatsApp to book stays and weddings.";

export const seoKeywords = [
  "Kaveri Palace",
  "hotel Bokaro",
  "hotel Jarangdih",
  "wedding venue Bokaro",
  "banquet hall Jharkhand",
  "marriage hall Bokaro",
  "guest house Jarangdih",
  "Kaveri Palace Bokaro",
  "hotel near Jarangdih railway station",
] as const;
