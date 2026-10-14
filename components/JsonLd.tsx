import { siteUrl } from "@/lib/seo";
import { site } from "@/lib/site-data";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: site.name,
    description:
      "Hotel and wedding venue with marriage lawn and banquet hall in Jarangdih, Bokaro, Jharkhand.",
    url: siteUrl,
    email: site.email,
    telephone: site.phone,
    image: `${siteUrl}/logo.jpeg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine,
      addressLocality: "Jarangdih Bazar",
      addressRegion: "Jharkhand",
      postalCode: "829114",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.647,
      longitude: 86.415,
    },
    priceRange: "₹₹",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
