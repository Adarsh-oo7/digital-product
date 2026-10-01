import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kerala Sellers Marketplace Platform | Built by Digital Product Solutions",
  description:
    "Explore Kerala Sellers (keralasellers.in), the online multi-vendor marketplace platform engineered by Digital Product Solutions for local Kerala business owners.",
  path: "/kerala-sellers",
  keywords: ["Kerala Sellers", "Kerala Marketplace Platform", "E-commerce Platform Kerala"],
});

export default function KeralaSellersPage() {
  return (
    <section className="relative overflow-hidden bg-white py-28 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-1.5 mb-8 text-sm font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-100">
          Built & Owned by Us
        </div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
          We Also Built Kerala Sellers
          <span className="block text-green-600 mt-3">
            Kerala&apos;s Online Marketplace
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Kerala Sellers (keralasellers.in) is an online marketplace platform we built for local Kerala businesses to launch their online shop in minutes - without any technical knowledge. Used by businesses across Kerala.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          <span className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-full">
            10-Minute Setup
          </span>
          <span className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-full">
            No Tech Skills Needed
          </span>
          <span className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-full">
            Free to Start
          </span>
          <span className="px-5 py-2 bg-gray-50 border border-gray-200 rounded-full">
            Built for Kerala
          </span>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://keralasellers.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-gray-300 text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-all duration-300"
          >
            Visit Live Website →
          </a>
        </div>
      </div>
    </section>
  )
}