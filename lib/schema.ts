import { SITE_URL } from "@/lib/constants";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Bright Cements",
  alternateName: "Bright Cements Private Limited",
  description:
    "Premium cement manufacturer in South India with 30+ years of excellence in construction materials and infrastructure development.",
  url: SITE_URL,
  logo: `${SITE_URL}/src/assets/logo.png`,
  image: `${SITE_URL}/src/assets/logo.png`,
  telephone: "+91-XXXXXXXXXX",
  email: "contact@brightcements.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    addressRegion: "Tamil Nadu",
    postalCode: "XXXXXX",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.1271,
    longitude: 78.6569,
  },
  areaServed: {
    "@type": "Place",
    name: "South India",
  },
  foundingDate: "1994",
  industry: "Cement Manufacturing",
  numberOfEmployees: "500-1000",
  slogan: "Built to Last, Trusted by the Vast",
  brand: {
    "@type": "Brand",
    name: "Bright Cements",
    logo: `${SITE_URL}/src/assets/logo.png`,
  },
  sameAs: [
    "https://www.linkedin.com/company/bright-cements",
    "https://www.instagram.com/bright_cements",
    "https://wa.me/91XXXXXXXXXX",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cement Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Premium Portland Cement",
          description:
            "High-quality Portland cement for construction and infrastructure projects",
          category: "Building Materials",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Construction Grade Cement",
          description:
            "Reliable cement for residential and commercial construction",
          category: "Building Materials",
        },
      },
    ],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bright Cements",
  image: `${SITE_URL}/src/assets/logo.png`,
  telephone: "+91-XXXXXXXXXX",
  email: "contact@brightcements.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Your City",
    addressRegion: "Tamil Nadu",
    postalCode: "XXXXXX",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.1271,
    longitude: 78.6569,
  },
  url: SITE_URL,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  servesCuisine: "N/A",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};
