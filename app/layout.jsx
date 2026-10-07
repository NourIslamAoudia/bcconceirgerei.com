import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

/**
 * Root layout — pass-through.
 * <html>/<body> are rendered in app/[locale]/layout.jsx so that the
 * `lang` attribute matches the page language (fr / en).
 */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { telephone: false, email: false, address: false },
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
  other: {
    "geo.region": "FR-06",
    "geo.placename": "Nice",
    "geo.position": "43.7102;7.2620",
    ICBM: "43.7102, 7.2620",
  },
};

export default function RootLayout({ children }) {
  return children;
}
