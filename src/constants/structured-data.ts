const BASE_URL = "https://zales-luxury.vercel.app";

/**
 * Schema.org Organization structured data for the Zales luxury jewelry brand.
 * Provides Google with brand identity, logo, social profiles, and contact info
 * for rich knowledge panel and branded search results.
 */
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zales Luxury Jewelry",
  url: BASE_URL,
  logo: `${BASE_URL}/icon`,
  description:
    "Expert designers crafting the most exquisite luxury diamond jewelry — rings, necklaces, earrings, and bracelets — for you to shine in a special way in the world.",
  foundingDate: "2024",
  sameAs: ["https://www.linkedin.com/in/aadityagunjal0975/", "https://github.com/aaditya09750"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "aadigunjal0975@gmail.com",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
};

/**
 * Schema.org WebSite structured data for site-level search engine integration.
 * Enables sitelinks search box and site name display in Google SERPs.
 */
export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Zales Luxury Jewelry",
  url: BASE_URL,
  description:
    "Explore luxury diamond rings, necklaces, earrings, and bracelets crafted with precision and elegance.",
  publisher: {
    "@type": "Organization",
    name: "Zales Luxury Jewelry",
    url: BASE_URL,
  },
};

/**
 * Schema.org JewelryStore structured data for local business and
 * product-category recognition in Google rich results.
 */
export const JEWELRY_STORE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Zales Luxury Jewelry",
  url: BASE_URL,
  image: `${BASE_URL}/opengraph-image`,
  description:
    "Premium luxury diamond jewelry boutique featuring curated collections of engagement rings, wedding bands, necklaces, earrings, and bracelets.",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.076,
    longitude: 72.8777,
  },
};

/**
 * Schema.org BreadcrumbList structured data for homepage breadcrumb trail.
 * Helps Google display breadcrumb navigation in search results.
 */
export const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ],
};
