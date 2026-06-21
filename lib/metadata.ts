import type { Metadata } from "next";
import { SITE_URL } from "./constants";

export const siteKeywords =
  "cement manufacturer, south india cement, premium cement, construction cement, building materials, infrastructure cement, quality cement, cement supplier, bright cements, cement company, construction materials, concrete cement, portland cement, cement distributor, cement dealer, cement factory, cement industry, building cement, cement products, cement brand, cement quality, cement manufacturing, cement production, cement wholesale, cement retail, cement price, cement specifications, cement grades, cement types, cement applications, cement solutions, cement technology, cement innovation, cement strength, cement durability, cement reliability, cement trust, cement excellence, cement legacy, cement expertise, cement commitment, cement performance, cement standards, cement testing, cement certification, cement compliance, cement safety, cement environment, cement sustainability, cement green, cement eco-friendly, cement carbon footprint, cement energy efficiency, cement waste management, cement recycling, cement circular economy, cement social responsibility, cement community, cement development, cement growth, cement expansion, cement investment, cement partnership, cement collaboration, cement alliance, cement network, cement distribution, cement logistics, cement supply chain, cement procurement, cement sourcing, cement purchasing, cement buying, cement selling, cement trading, cement market, cement demand, cement supply, cement availability, cement stock, cement inventory, cement delivery, cement transportation, cement shipping, cement handling, cement storage, cement packaging, cement bags, cement bulk, cement ready mix, cement mortar, cement concrete, cement blocks, cement bricks, cement tiles, cement pipes, cement panels, cement precast, cement structures, cement buildings, cement houses, cement apartments, cement commercial, cement industrial, cement residential, cement infrastructure, cement roads, cement bridges, cement dams, cement airports, cement ports, cement railways, cement metros, cement tunnels, cement foundations, cement columns, cement beams, cement slabs, cement walls, cement roofs, cement floors, cement pavements, cement sidewalks, cement driveways, cement parking, cement landscaping, cement decorative, cement architectural, cement design, cement engineering, cement construction services, cement consulting, cement advice, cement support, cement customer service, cement technical support, cement after sales, cement warranty, cement guarantee, cement assurance, cement promise, cement commitment, cement dedication, cement passion, cement vision, cement mission, cement values, cement culture, cement team, cement employees, cement workforce, cement professionals, cement experts, cement specialists, cement engineers, cement technicians, cement managers, cement leaders, cement directors, cement executives, cement board, cement shareholders, cement investors, cement stakeholders, cement customers, cement clients, cement partners, cement suppliers, cement vendors, cement contractors, cement builders, cement developers, cement architects, cement engineers, cement consultants, cement advisors, cement representatives, cement agents, cement dealers, cement distributors, cement retailers, cement wholesalers, cement traders, cement brokers, cement intermediaries,";

export const siteMetadata: Metadata = {
  title: "Bright Cements",
  description:
    "Bright Cements: South India's trusted cement manufacturer with 30+ years of excellence. Premium quality cement for construction, infrastructure, and building projects. Contact us for reliable cement supply.",
  keywords: siteKeywords,
  robots: "index, follow",
  authors: [{ name: "Bright Cements" }],
  publisher: "Bright Cements",
  other: {
    title:
      "Bright Cements - Premium Cement Manufacturer in South India | Built to Last",
    language: "English",
    copyright: "© 2025 Bright Cements. All rights reserved.",
    "revisit-after": "7 days",
    distribution: "global",
    rating: "general",
    "geo.region": "IN-TN",
    "geo.placename": "Tamil Nadu, India",
    "geo.position": "11.1271;78.6569",
    ICBM: "11.1271, 78.6569",
    "google-site-verification": "Nw6ZIuOGXIZVt1R_ZRg4CN_9Uamaob41WFRQe9_Vv6Q",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Bright Cements - Premium Cement Manufacturer in South India",
    description:
      "South India's trusted cement manufacturer with 30+ years of excellence. Premium quality cement for construction, infrastructure, and building projects.",
    images: [
      {
        url: `${SITE_URL}/assets/logo-CxaRFLIf.png`,
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Bright Cements",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Cements - Premium Cement Manufacturer in South India",
    description:
      "South India's trusted cement manufacturer with 30+ years of excellence. Premium quality cement for construction, infrastructure, and building projects.",
    images: [`${SITE_URL}/assets/logo-CxaRFLIf.png`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/logo-CxaRFLIf.png", type: "image/png" },
    ],
    apple: "/assets/logo-CxaRFLIf.png",
  },
};
