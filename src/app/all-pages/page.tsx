import Link from "next/link";
import { htmlSitemapGroups } from "@/content/html-sitemap";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "All Pages Directory | Digital Product Solutions Kerala",
  description:
    "Complete directory of all 107 Digital Product Solutions pages: websites, apps, SEO, Kerala industry CRMs, business websites, and development guides.",
  path: "/all-pages",
});

export default function AllPages() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Site Directory & Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">All Pages & Services</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl leading-relaxed">
            Browse our full index of specialized digital solutions across Kerala. Explore individual websites, custom software, mobile apps, CRM systems, and business guides with published rates and direct developer access.
          </p>
        </div>

        <div className="space-y-12">
          {htmlSitemapGroups.map((group) => (
            <section key={group.heading} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>{group.heading}</span>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                  {group.links.length} Pages
                </span>
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.links.map((link) => (
                  <div
                    key={link.href}
                    className="flex flex-col justify-between p-4 rounded-2xl border border-gray-100 bg-gray-50/70 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <span className="font-semibold text-gray-900 text-sm mb-3">
                      {link.label}
                    </span>
                    <div className="pt-2 border-t border-gray-200/50 flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition"
                      >
                        Know More <span>→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
