export default function KeralaSellersPage() {
  return (
    <section className="py-28  text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Soft Background Glow */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-10"></div>

        {/* Badge */}
        <div className="inline-flex items-center px-4 py-1.5 mb-8 text-sm font-medium bg-white/10 backdrop-blur rounded-full border border-white/20">
          🚀 Built & Owned by Us
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          We Also Built Kerala Sellers
          <span className="block text-green-400 mt-3">
            Kerala's Online Marketplace
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Kerala Sellers (keralasellers.in) is an online marketplace platform we built for local Kerala businesses to launch their online shop in minutes - without any technical knowledge. Used by businesses across Kerala.
        </p>

        {/* Feature Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm">
          <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full">
            ⚡ 10-Minute Setup
          </span>
          <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full">
            🛍 No Tech Skills Needed
          </span>
          <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full">
            💸 Free to Start
          </span>
          <span className="px-5 py-2 bg-white/5 border border-white/10 rounded-full">
            📍 Built for Kerala
          </span>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">


          <a
            href="https://keralasellers.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white/20 hover:bg-white/10 rounded-xl font-medium transition-all duration-300"
          >
            Visit Live Website →
          </a>
        </div>

      </div>
    </section>
  )
}