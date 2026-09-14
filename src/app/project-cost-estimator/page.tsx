import Breadcrumbs from "@/components/seo/Breadcrumbs";
import ProjectEstimator from "@/components/seo/ProjectEstimator";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Project Cost Estimator",
  description:
    "See which published Digital Product Solutions starting price applies to websites, apps, software, SEO or automation. Non-binding.",
  path: "/project-cost-estimator",
});

export default function Page() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Project cost estimator", href: "/project-cost-estimator" },
          ]}
        />
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Project cost estimator</h1>
        <p className="text-gray-600 mb-8">
          Choose a work type to see the starting figures currently listed on this website. Then request an exact estimate. Nothing here is a contract.
        </p>
        <ProjectEstimator />
      </div>
    </main>
  );
}
