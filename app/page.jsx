import { redirect } from "next/navigation";

/**
 * Root page — redirects to default locale.
 * The proxy also handles this, but this is a fallback.
 */
export default function RootPage() {
  redirect("/fr");
}
