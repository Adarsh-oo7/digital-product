import Breadcrumbs from "@/components/seo/Breadcrumbs";
import WebsiteCalculator from "@/components/seo/WebsiteCalculator";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website Cost Calculator for Kerala Businesses",
  description:
    "Non-binding website cost range using Digital Product Solutions published packages. Not a quote. Get an exact estimate after you see the range.",
  path: "/website-cost-calculator",
});

export default function Page() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Website cost calculator", href: "/website-cost-calculator" },
          ]}
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Website cost calculator</h1>
        <p className="text-gray-600 mb-8">
          This tool maps your answers onto the package ranges already published on /pricing. It does not invent discounts. Domain, hosting and ad spend are extra unless a written estimate says otherwise.
        </p>
        <WebsiteCalculator />
      </div>
    </main>
  );
}
