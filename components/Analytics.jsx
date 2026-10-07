import Script from "next/script";

/**
 * Google Analytics Component (Non-Blocking)
 * Uses Next.js Script component with afterInteractive strategy
 * to prevent render blocking and improve FCP/LCP
 */
export default function Analytics() {
  // Set NEXT_PUBLIC_GA_ID (e.g. G-ABC123) in the environment to enable GA
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  if (!GA_ID) return null;

  return (
    <>
      {/* Load GA script after page is interactive */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* Initialize GA */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
