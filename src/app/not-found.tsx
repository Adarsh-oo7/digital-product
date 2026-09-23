import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested is not available. Return to Digital Product Solutions for websites, software and SEO in Kerala.",
  robots: { index: false, follow: true },
};


export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 pt-28 pb-16">
      <div className="max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-gray-600 mb-8">
          That URL is not on this site. Use the links below to continue, or WhatsApp the team if you were looking for a specific service.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold">
            Home
          </Link>
          <Link href="/contact" className="px-6 py-3 rounded-xl border font-semibold">
            Get a Project Estimate
          </Link>
        </div>
      </div>
    </main>
  );
}
