export const metadata = {
  title: "À Propos de B\u0026C Conciergerie Nice | Notre Histoire \u0026 Valeurs",
  description:
    "Découvrez B\u0026C Conciergerie Nice, votre partenaire de confiance pour la gestion location saisonnière à Nice. Notre expertise, nos valeurs, notre engagement.",
  keywords: [
    "conciergerie Airbnb Nice",
    "location airbnb Nice",
    "conciergerie Nice",
    "gestion locative Nice",
    "conciergerie villa Nice",
    "conciergerie appartement Nice",
    "location saisonnière Nice",
    "gestion airbnb Nice",
    "conciergerie de luxe Nice",
    "gestion Airbnb Monaco",
    "conciergerie premium Cannes",
    "gestion de biens Antibes",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "À Propos de B\u0026C Conciergerie Nice | Notre Histoire \u0026 Valeurs",
    description:
      "Découvrez B\u0026C Conciergerie Nice, votre partenaire de confiance pour la gestion location saisonnière à Nice.",
    url: "https://www.bcconciergerie.com/a-propos",
    images: [
      {
        url: "https://www.bcconciergerie.com/icon_new.png",
        width: 1200,
        height: 630,
        alt: "À Propos B&C Conciergerie",
      },
    ],
  },
  alternates: {
    canonical: "https://www.bcconciergerie.com/a-propos",
  },
};

export default function AProposLayout({ children }) {
  return children;
}
