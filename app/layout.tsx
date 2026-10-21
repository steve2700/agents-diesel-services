import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@fontsource/barlow-condensed/500.css"
import "@fontsource/barlow-condensed/600.css"
import "@fontsource/barlow-condensed/700.css"
import "@fontsource/barlow/400.css"
import "@fontsource/barlow/500.css"
import "@fontsource/barlow/600.css"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { JsonLd } from "@/components/json-ld"
import { GOOGLE_ADS_CONVERSION_ID } from "@/lib/analytics"
import { SITE } from "@/lib/site"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { BRANDS } from "@/lib/brands"

export const viewport: Viewport = { themeColor: "#0b0b0c" }

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Agents Diesel Services | Heavy Duty Truck Repairs in Gauteng",
    template: "%s | Agents Diesel",
  },
  description:
    "Agents Diesel Services repairs, services and maintains heavy duty trucks across Gauteng and its outskirts. Engines, gearboxes, brakes, spray painting, diesel tanks and trailers. Call Now or send a WhatsApp job card.",
  keywords: ["heavy duty truck repairs Gauteng", "truck mechanic Johannesburg", "diesel truck repairs Gauteng", "diesel mechanic Johannesburg", "truck servicing Gauteng", "truck engine overhaul", "truck gearbox repairs", "truck spray painting", "Agents Diesel Services"],
  applicationName: "Agents Diesel Services",
  authors: [{ name: "Agents Diesel Services", url: SITE.url }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#d0141c" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: SITE.url,
    siteName: "Agents Diesel Services",
    title: "Agents Diesel Services | Heavy Duty Truck Repairs in Gauteng",
    description: "Repairs, services and maintenance for heavy duty trucks across Gauteng and its outskirts.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Agents Diesel Services, heavy duty truck repairs in Gauteng" }],
  },
  twitter: { card: "summary_large_image", title: "Agents Diesel Services | Heavy Duty Truck Repairs in Gauteng", description: "Repairs, services and maintenance for heavy duty trucks across Gauteng.", images: ["/og-image.png"] },
  category: "Truck repairs",
  other: { "geo.region": "ZA-GP", "geo.placename": "Gauteng, South Africa" },
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness"],
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  image: `${SITE.url}/og-image.png`,
  logo: `${SITE.url}/logo-square.png`,
  telephone: SITE.phoneTel,
  email: SITE.email,
  description: "Heavy duty truck repairs, servicing and maintenance across Gauteng and its outskirts.",
  priceRange: "$$",
  knowsAbout: SERVICES.map((s) => s.name),
  brand: BRANDS.map((b) => ({ "@type": "Brand", name: b.name, logo: `${SITE.url}${b.logo}` })),
  areaServed: [{ "@type": "AdministrativeArea", name: "Gauteng" }, ...AREAS.map((a) => ({ "@type": "City", name: a.name }))],
  makesOffer: SERVICES.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name, url: `${SITE.url}/services/${s.slug}` } })),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-ZA">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        {GOOGLE_ADS_CONVERSION_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_CONVERSION_ID}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ADS_CONVERSION_ID}');` }} />
          </>
        )}
        <JsonLd data={businessSchema} />
        <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.name, inLanguage: "en-ZA", publisher: { "@id": `${SITE.url}/#business` } }} />
      </head>
      <body>
        <Header />
        <main className="pb-[72px] md:pb-0">{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
