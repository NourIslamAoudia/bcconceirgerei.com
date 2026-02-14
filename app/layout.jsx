import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL("https://www.bcconciergerie.com"),
  title: "B&C Conciergerie",
  description:
    "Conciergerie haut de gamme sur la Côte d'Azur. Gestion locative Airbnb, ménage professionnel, revenus optimisés. Nice, Monaco, Cannes. Devis gratuit.",
  keywords: [
    "conciergerie côte d'azur",
    "gestion locative monaco",
    "location courte durée nice",
    "ménage conciergerie",
    "gestion des appartements",
    "airbnb côte d'azur",
    "location airbnb nice",
    "gestion de biens monaco",
    "conciergerie nice",
    "conciergerie luxe monaco",
    "propriété de luxe",
    "revenus locatifs",
    "location saisonnière",
    "gestion de propriété",
    "services premium",
    "entretien professionnel",
    "optimisation tarifaire",
  ],
  authors: [{ name: "B&C Conciergerie" }],
  creator: "B&C Conciergerie",
  publisher: "B&C Conciergerie",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.bcconciergerie.com",
    siteName: "B&C Conciergerie",
    title: "B&C Conciergerie Côte d'Azur | Gestion Airbnb Nice Monaco",
    description:
      "Conciergerie haut de gamme sur la Côte d'Azur. Gestion locative Airbnb, ménage professionnel, revenus optimisés. Nice, Monaco, Cannes. Devis gratuit.",
    images: [
      {
        url: "https://www.bcconciergerie.com/icon_new.png",
        width: 1200,
        height: 630,
        alt: "B&C Conciergerie Côte d'Azur",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B&C Conciergerie Côte d'Azur | Gestion Airbnb Nice Monaco",
    description:
      "Conciergerie haut de gamme sur la Côte d'Azur. Gestion locative Airbnb, ménage professionnel, revenus optimisés. Nice, Monaco, Cannes. Devis gratuit.",
    images: ["https://www.bcconciergerie.com/icon_new.png"],
  },
  alternates: {
    canonical: "https://www.bcconciergerie.com/fr",
    languages: {
      fr: "https://www.bcconciergerie.com/fr",
      en: "https://www.bcconciergerie.com/en",
    },
  },
  other: {
    "geo.region": "FR-06",
    "geo.placename": "Nice, Monaco, Cannes",
    "geo.position": "43.7102;7.2620",
    ICBM: "43.7102, 7.2620",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Critical CSS - Minimal inline to prevent render blocking */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          *{margin:0;padding:0;box-sizing:border-box}
          :root{--olive-700:#708238;--beige-100:#F5EEDF;--offwhite-50:#FAF9F6;--text-dark:#222}
          html,body{width:100%;height:100%;margin:0;padding:0;overflow-x:hidden}
          body{background-color:#071014;color:var(--text-dark);font-family:var(--font-inter),-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif}
          .hero-section{min-height:100vh;position:relative;display:flex;align-items:center;justify-content:center}
        `,
          }}
        />

        {/* Performance optimizations - Preconnect to external resources */}
        <link rel="preconnect" href="https://www.bcconciergerie.com" />
        <link rel="dns-prefetch" href="https://www.bcconciergerie.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon - Multiple sizes for better browser support */}
        <link rel="icon" href="/icon_new.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon_new.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/icon_new.png" sizes="180x180" />

        {/* Structured Data - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Organization"],
              name: "B&C Conciergerie Côte d'Azur",
              alternateName: "B&C Conciergerie",
              image: "https://www.bcconciergerie.com/icon_new.png",
              logo: "https://www.bcconciergerie.com/icon_new.png",
              "@id": "https://www.bcconciergerie.com",
              url: "https://www.bcconciergerie.com",
              telephone: "+33-XXX-XXX-XXX",
              priceRange: "€€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "",
                addressLocality: "Nice",
                postalCode: "06000",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.7102,
                longitude: 7.262,
              },
              areaServed: [
                { "@type": "City", name: "Nice" },
                { "@type": "City", name: "Monaco" },
                { "@type": "City", name: "Cannes" },
                { "@type": "City", name: "Antibes" },
                { "@type": "City", name: "Saint-Jean-Cap-Ferrat" },
              ],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              sameAs: [
                "https://www.facebook.com/bcconciergerie",
                "https://www.instagram.com/bcconciergerie",
              ],
            }),
          }}
        />
        {/* Structured Data - RealEstateAgent */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "B&C Conciergerie Côte d'Azur",
              url: "https://www.bcconciergerie.com",
              logo: "https://www.bcconciergerie.com/icon_new.png",
              image: "https://www.bcconciergerie.com/icon_new.png",
              description:
                "Conciergerie de luxe et gestion locative professionnelle sur la Côte d'Azur. Spécialisés en location courte durée, Airbnb et gestion d'appartements haut de gamme.",
              priceRange: "€€€",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nice",
                addressRegion: "Provence-Alpes-Côte d'Azur",
                postalCode: "06000",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 43.7102,
                longitude: 7.262,
              },
              areaServed: [
                "Nice",
                "Monaco",
                "Cannes",
                "Antibes",
                "Saint-Jean-Cap-Ferrat",
                "Villefranche-sur-Mer",
                "Èze",
                "Juan-les-Pins",
              ],
              telephone: "+33-XXX-XXX-XXX",
              email: "contact@bc-conciergerie.com",
            }),
          }}
        />
        {/* Structured Data - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quels sont les services inclus dans la gestion locative Airbnb ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Notre service de gestion locative complète inclut : la création et optimisation de l'annonce Airbnb, la gestion des réservations et communication avec les voyageurs, le ménage professionnel entre chaque location, le check-in/check-out personnalisé, la maintenance et l'entretien du bien, ainsi que l'optimisation tarifaire pour maximiser vos revenus locatifs.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Dans quelles villes de la Côte d'Azur intervenez-vous ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nous intervenons sur l'ensemble de la Côte d'Azur, principalement à Nice, Monaco, Cannes, Antibes, Saint-Jean-Cap-Ferrat, Villefranche-sur-Mer, Èze et Juan-les-Pins. Notre expertise couvre toute la Riviera Française pour votre conciergerie de luxe.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.variable}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        {/* Analytics loaded after interactive - non-blocking */}
        <Analytics />
      </body>
    </html>
  );
}
