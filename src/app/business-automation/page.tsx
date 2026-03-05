import Link from "next/link";

export const metadata = {
  title: "Business Automation Services | Streamline & Scale Your Operations",
  description:
    "Professional business automation services to streamline workflows, automate customer communication and improve operational efficiency globally.",
};

export default function BusinessAutomationPage() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            Business Automation
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automate Your <span className="text-indigo-600">Business Operations</span>  
            <br /> Save Time. Increase Efficiency.
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help businesses eliminate manual work by automating workflows,
            customer communication, billing systems and internal processes.
            Work smarter, not harder.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Automate My Business
            </Link>

            <Link
              href="/portfolio"
              className="border border-gray-300 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              View Automation Projects
            </Link>
          </div>
        </div>

        {/* SERVICES INCLUDED */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              What We Automate
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                WhatsApp & Email Auto-Replies
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                Order & Booking Workflows
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                Invoice & Payment Automation
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                CRM Integration & Lead Tracking
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-bold">✔</span>
                API & Third-Party Integrations
              </li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Why Automate?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Reduce Human Errors
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Save Operational Time
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Improve Customer Experience
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Increase Productivity
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✔</span>
                Scale Without Hiring More Staff
              </li>
            </ul>
          </div>

        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Automation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Analysis", "Workflow Design", "Integration", "Testing & Deployment"].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
                <div className="text-indigo-600 font-bold text-xl mb-4">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-semibold text-gray-800">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-indigo-600 text-white p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-400 rounded-full opacity-20"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹10,000
          </h2>

          <p className="mb-8 text-indigo-100 text-lg">
            Let automation handle repetitive tasks while you focus on growth.
          </p>

          <Link
            href="/contact"
            className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Get Automation Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}