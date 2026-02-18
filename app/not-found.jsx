import Link from "next/link";
import "./not-found.css";

export const metadata = {
  title: "Page non trouvée | B&C Conciergerie",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
};

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <span className="not-found-code">404</span>
        <h1 className="not-found-title">Page non trouvée</h1>
        <p className="not-found-text">
          Désolé, la page que vous recherchez n&apos;existe pas ou a été
          déplacée.
        </p>
        <Link href="/" className="not-found-btn">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
