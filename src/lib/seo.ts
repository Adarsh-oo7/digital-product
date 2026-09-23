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
  absoluteTitle = false,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  canonicalPath?: string;
  ogImage?: string;
  /** Skip the layout "%s | Digital Product Solutions" suffix (use on the homepage title). */
  absoluteTitle?: boolean;
  keywords?: string | string[];
}): Metadata {
  const canonical = absUrl(canonicalPath ?? path);
  const image = ogImage.startsWith("http") ? ogImage : absUrl(ogImage);

  // Strip duplicate brand suffix if already present so layout template (%s | Digital Product Solutions) won't double it
  const cleanTitle = absoluteTitle
    ? title
    : title.replace(/\s*\|\s*(Digital Product Solutions|DPS).*$/i, "").trim();

  return {
    title: absoluteTitle ? { absolute: cleanTitle } : cleanTitle,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical,
      languages: { "en-IN": canonical, "x-default": canonical },
    },
    robots: noindex
      ? {
          index: false,
          follow: true,
        }
      : {
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
      title: cleanTitle,
      description,
      url: canonical,
      siteName: "Digital Product Solutions",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Digital Product Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description,
      images: [image],
    },
  };
}

