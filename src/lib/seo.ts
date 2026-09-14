import { SITE_URL } from "@/lib/business";
import type { Metadata } from "next";

export function absUrl(path = "/") {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  canonicalPath,
  ogImage = "/img/logo.png",
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  canonicalPath?: string;
  ogImage?: string;
}): Metadata {
  const canonical = absUrl(canonicalPath ?? path);
  const image = ogImage.startsWith("http") ? ogImage : absUrl(ogImage);
  return {
    title,
    description,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Digital Product Solutions",
      type: "website",
      locale: "en_IN",
      images: [{ url: image, width: 512, height: 512, alt: "Digital Product Solutions" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
