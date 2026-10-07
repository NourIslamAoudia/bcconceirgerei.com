import { NextResponse } from "next/server";

const locales = ["fr", "en"];
const defaultLocale = "fr";

export function proxy(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";
  const { pathname } = url;

  // Force HTTPS and www canonicalization
  if (
    !hostname.startsWith("www.") &&
    !hostname.includes("localhost") &&
    !hostname.includes("127.0.0.1")
  ) {
    url.host = `www.${hostname}`;
    return NextResponse.redirect(url, 301);
  }

  // Check if pathname already has a valid locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect to default locale. The bare root stays temporary (language
  // entry point); any other un-prefixed path is a permanent move.
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, pathname === "/" ? 307 : 308);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files (images, icons, manifests, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|manifest.json|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.svg$|.*\\.gif$|.*\\.webp$|.*\\.avif$|.*\\.ico$|.*\\.html$|.*\\.txt$|.*\\.xml$|.*\\.mp4$|.*\\.webmanifest$).*)",
  ],
};
