import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import {
  defaultDescription,
  defaultTitle,
  seoKeywords,
  siteUrl,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site-data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/logo.jpeg",
        width: 512,
        height: 512,
        alt: `${site.name} — ${site.tagline}`,
      },
      {
        url: weddingBannerOgPath(),
        width: 1200,
        height: 630,
        alt: `${site.name} wedding venue and hotel`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "travel",
};

function weddingBannerOgPath() {
  return "/images/banner/kaveri-palace-wedding-banner.png";
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
