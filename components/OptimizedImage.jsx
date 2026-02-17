import Image from "next/image";

/**
 * OptimizedImage Component
 * Handles both local and remote images with proper optimization settings
 * Remote images from bcconciergerie.com are unoptimized to avoid Vercel issues
 */
export default function OptimizedImage({ src, alt, ...props }) {
  // Check if the image is from an external domain
  const isExternal =
    typeof src === "string" &&
    (src.startsWith("http://") || src.startsWith("https://"));

  // For external images, disable optimization to prevent 404 errors on Vercel
  if (isExternal) {
    return <Image src={src} alt={alt} unoptimized={true} {...props} />;
  }

  // For local images, use standard Next.js optimization
  return <Image src={src} alt={alt} {...props} />;
}
