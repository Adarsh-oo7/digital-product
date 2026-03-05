import Link from "next/link";

export const metadata = {
  title: "AI Powered Solutions | Intelligent Automation & Smart Systems",
  description:
    "AI-powered business solutions including chatbots, AI automation, predictive systems and intelligent tools for businesses in India and globally.",
};

export default function AIPoweredSolutionsPage() {
  return (
    <section className="min-h-screen mt-7 bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-20">
          <span className="inline-block bg-indigo-600/20 text-indigo-400 text-sm px-4 py-1 rounded-full mb-4 font-medium">
            AI-Powered Solutions
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Business with  
            <span className="text-indigo-500"> Artificial Intelligence</span>
          </h1>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We build intelligent AI systems that automate decision-making,
            enhance customer interactions and unlock powerful business insights.
            Smart businesses use AI — stay ahead of the competition.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Build AI For My Business
            </Link>

            <Link
              href="/portfolio"
              className="border border-gray-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              View AI Projects
            </Link>
          </div>
        </div>

        {/* AI SERVICES */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-lg hover:shadow-indigo-900/40 transition duration-500">
            <h3 className="text-2xl font-bold mb-6 text-indigo-400">
              AI Solutions We Build
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                AI Chatbots (WhatsApp & Website)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                Smart Lead Qualification Systems
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                Predictive Analytics Tools
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                AI Content & Marketing Assistants
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 font-bold">✔</span>
                Custom AI Integrations & APIs
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-10 rounded-3xl border border-gray-800 shadow-lg hover:shadow-indigo-900/40 transition duration-500">
            <h3 className="text-2xl font-bold mb-6 text-indigo-400">
              Why AI Matters
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                24/7 Intelligent Customer Support
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Faster Decision Making
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Higher Conversion Rates
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Reduced Operational Costs
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold">✔</span>
                Competitive Market Advantage
              </li>
            </ul>
          </div>

        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our AI Implementation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {["Strategy", "Model Design", "Integration", "Launch & Optimization"].map((step, i) => (
              <div key={i} className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <div className="text-indigo-500 font-bold text-xl mb-4">
                  {`0${i + 1}`}
                </div>
                <h3 className="font-semibold text-gray-200">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-14 rounded-3xl text-center overflow-hidden">

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>

          <h2 className="text-4xl font-bold mb-4">
            Starting at ₹15,000
          </h2>

          <p className="mb-8 text-indigo-100 text-lg">
            Integrate AI into your business and unlock exponential growth.
          </p>

          <Link
            href="/contact"
            className="bg-white text-indigo-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition shadow-lg"
          >
            Get AI Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}