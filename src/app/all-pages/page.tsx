import Link from "next/link";
import { htmlSitemapGroups } from "@/content/html-sitemap";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "All pages",
  description:
    "Index of Digital Product Solutions pages: websites, SEO, e-commerce, CRM and Kerala blog guides.",
  path: "/all-pages",
});

export default function AllPages() {
  return (
    <main className="min-h-screen bg-white py-28 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">All pages</h1>
        <p className="text-gray-600 mb-10">
          Crawlable list of the main Digital Product Solutions URLs. For a scoped estimate, WhatsApp +91 94003 55185.
        </p>
        {htmlSitemapGroups.map((group) => (
          <section key={group.heading} className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{group.heading}</h2>
            <ul className="grid sm:grid-cols-2 gap-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-blue-800 underline underline-offset-2">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
