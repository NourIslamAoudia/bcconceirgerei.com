import Link from "next/link";
import "./not-found.css";

export const metadata = {
  title: "Page non trouvée | B&C Conciergerie",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
};

// The root layout is a pass-through (<html> lives in app/[locale]/layout.jsx),
// so this page renders its own <html>. It is shared by both locales.
export default function NotFound() {
  return (
    <html lang="fr">
      <body>
        <div className="not-found-container">
          <div className="not-found-content">
            <span className="not-found-code">404</span>
            <h1 className="not-found-title">Page non trouvée</h1>
            <p className="not-found-text">
              Désolé, la page que vous recherchez n&apos;existe pas ou a été
              déplacée.
              <br />
              <span lang="en">
                Sorry, the page you are looking for does not exist.
              </span>
            </p>
            <Link href="/fr" className="not-found-btn">
              Retour à l&apos;accueil
            </Link>{" "}
            <Link href="/en" className="not-found-btn" hrefLang="en">
              English
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
