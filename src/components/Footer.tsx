import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MapPin, Phone, MessageCircle, Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute bottom-full left-0 w-full h-12 z-20 bg-gradient-to-b from-transparent via-black/8 to-black/5" />
      <footer className="relative border-t border-gray-200 pt-16 pb-12 bg-gradient-to-b from-[#ced4fd] via-[#decef9] to-[#ced4fd] overflow-hidden">

        <div className="absolute inset-0 z-0">
          <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl top-[-150px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* Contact & Location Info for Local SEO & Trust */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-10 border-b border-black/10 text-gray-800 text-sm">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src="/img/logos.png"
                  alt="Digital Product Solutions"
                  width={42}
                  height={42}
                  className="h-10 w-auto"
                />
                <span className="font-bold text-gray-900 text-base">Digital Product Solutions</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                Registered MSME software, mobile app, technical SEO, and business automation company based in Trivandrum, Kerala. 4+ years of building production-grade digital products with direct developer communication.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600 inline" /> Registered Office Location
              </h2>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                📍 Korani, Attingal / Trivandrum Region, Kerala 695104<br />
                <a href="https://www.google.com/maps?cid=990739385366027106" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition font-semibold underline underline-offset-2">
                  View Google Pin (Korani, Trivandrum)
                </a><br />
                Serving clients across Thiruvananthapuram, Kochi, Kollam, Kozhikode, Kannur, Palakkad, Kottayam & GCC.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-xs flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-green-600 inline" /> Direct Inquiries
              </h2>
              <p className="text-gray-700 leading-relaxed text-xs sm:text-sm">
                📞 Call: <a href="tel:+919400355185" className="hover:text-blue-700 transition font-semibold">+91 9400355185</a><br />
                💬 WhatsApp: <a href="https://wa.me/919400355185" target="_blank" rel="noopener noreferrer" className="hover:text-green-700 transition font-semibold">+91 9400355185</a><br />
                ✉️ Email: <Link href="/contact" className="hover:text-blue-700 transition underline underline-offset-2">Send developer message</Link><br />
                ⭐ Reviews: <Link href="/digital-product-solutions-reviews" className="hover:text-blue-700 transition font-medium">Read client reviews</Link>
              </p>
            </div>
          </div>

          {/* 4-Column Internal Linking Grid for Full Crawlability & SEO Rank Flow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-10 border-b border-black/10 text-xs text-gray-700">
            <div>
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-3 text-blue-900">
                Web & Software
              </h3>
              <ul className="space-y-2">
                <li><Link href="/website-development" className="hover:text-blue-600 transition">Website Development Kerala</Link></li>
                <li><Link href="/website-developer-trivandrum" className="hover:text-blue-600 transition">Website Developer Trivandrum</Link></li>
                <li><Link href="/software-development" className="hover:text-blue-600 transition">Custom Software Development</Link></li>
                <li><Link href="/app-development" className="hover:text-blue-600 transition">Android & iOS App Development</Link></li>
                <li><Link href="/ecommerce-website-development-kerala" className="hover:text-blue-600 transition">E-Commerce Websites Kerala</Link></li>
                <li><Link href="/freelance-software-developer-kerala" className="hover:text-blue-600 transition">Freelance Developer Kerala</Link></li>
                <li><Link href="/dedicated-developer-team-kerala" className="hover:text-blue-600 transition">Dedicated Developer Team</Link></li>
                <li><Link href="/startup-mvp-development-kerala" className="hover:text-blue-600 transition">Startup MVP Development</Link></li>
                <li><Link href="/website-maintenance-kerala" className="hover:text-blue-600 transition">Website Maintenance Kerala</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-3 text-purple-900">
                SEO & Growth
              </h3>
              <ul className="space-y-2">
                <li><Link href="/seo-services" className="hover:text-blue-600 transition font-medium">Best SEO Company in Kerala</Link></li>
                <li><Link href="/local-seo-kerala" className="hover:text-blue-600 transition">Local Google Maps SEO</Link></li>
                <li><Link href="/google-ads-management-kerala" className="hover:text-blue-600 transition">Google Ads Agency Trivandrum</Link></li>
                <li><Link href="/digital-marketing-trivandrum" className="hover:text-blue-600 transition">Digital Marketing Trivandrum</Link></li>
                <li><Link href="/digital-marketing-kollam" className="hover:text-blue-600 transition">Digital Marketing Kollam</Link></li>
                <li><Link href="/whatsapp-automation-kerala" className="hover:text-blue-600 transition">WhatsApp Automation Kerala</Link></li>
                <li><Link href="/ai-chatbot-development-kerala" className="hover:text-blue-600 transition">AI Chatbot Development</Link></li>
                <li><Link href="/ai-powered-solutions" className="hover:text-blue-600 transition">AI Business Solutions</Link></li>
                <li><Link href="/social-media-management" className="hover:text-blue-600 transition">Social Media Management</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-3 text-indigo-900">
                Kerala Industry CRM
              </h3>
              <ul className="space-y-2">
                <li><Link href="/crm-software-kerala" className="hover:text-blue-600 transition font-medium">CRM Software Kerala Hub</Link></li>
                <li><Link href="/real-estate-crm-lead-management-kerala" className="hover:text-blue-600 transition">Real Estate CRM Kerala</Link></li>
                <li><Link href="/travel-agency-crm-kerala" className="hover:text-blue-600 transition">Travel Agency CRM</Link></li>
                <li><Link href="/education-admission-crm-kerala" className="hover:text-blue-600 transition">Education Admission CRM</Link></li>
                <li><Link href="/clinic-management-software-kerala" className="hover:text-blue-600 transition">Clinic Management Software</Link></li>
                <li><Link href="/car-dealer-crm-kerala" className="hover:text-blue-600 transition">Used Car Showroom CRM</Link></li>
                <li><Link href="/furniture-crm-kerala" className="hover:text-blue-600 transition">Furniture Store CRM</Link></li>
                <li><Link href="/gym-crm-kerala" className="hover:text-blue-600 transition">Gym Membership CRM</Link></li>
                <li><Link href="/wedding-planner-crm-kerala" className="hover:text-blue-600 transition">Wedding Planner CRM</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 uppercase tracking-wider text-xs mb-3 text-emerald-900">
                Pricing & Resources
              </h3>
              <ul className="space-y-2">
                <li><Link href="/pricing" className="hover:text-blue-600 transition">Transparent Pricing (from ₹3,000)</Link></li>
                <li><Link href="/website-development-cost-kerala" className="hover:text-blue-600 transition">Kerala Website Cost 2026</Link></li>
                <li><Link href="/ecommerce-website-cost-kerala" className="hover:text-blue-600 transition">E-commerce Cost Breakdown</Link></li>
                <li><Link href="/project-cost-estimator" className="hover:text-blue-600 transition">Interactive Cost Estimator</Link></li>
                <li><Link href="/work" className="hover:text-blue-600 transition">Real Kerala Project Stories</Link></li>
                <li><Link href="/blog" className="hover:text-blue-600 transition">Kerala Business Growth Blog</Link></li>
                <li><Link href="/certificate-verified" className="hover:text-blue-600 transition">Verified MSME Certificate</Link></li>
                <li><Link href="/kerala-sellers" className="hover:text-blue-600 transition">Kerala Sellers Platform</Link></li>
                <li><Link href="/all-pages" className="hover:text-blue-600 transition font-bold text-blue-800 underline underline-offset-2">All Pages Directory (100+)</Link></li>
              </ul>
            </div>
          </div>

          {/* Social and Main Links Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-2 pb-6 border-b border-black/10 text-xs">
            <nav className="flex flex-wrap justify-center sm:justify-start gap-x-5 gap-y-2 font-medium text-gray-800">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition">About</Link>
              <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
              <Link href="/portfolio" className="hover:text-blue-600 transition">Portfolio</Link>
              <Link href="/work" className="hover:text-blue-600 transition">Case Studies</Link>
              <Link href="/digital-product-solutions-reviews" className="hover:text-blue-600 transition">Reviews</Link>
              <Link href="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
              <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
              <Link href="/all-pages" className="hover:text-blue-600 transition font-semibold text-blue-700">All Pages Index</Link>
            </nav>

            <div className="flex items-center gap-4 text-gray-700">
              <a href="https://www.facebook.com/Digital.Product.kerala/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600 transition p-1.5 bg-white/50 rounded-full">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/digital_product_solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600 transition p-1.5 bg-white/50 rounded-full">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/digital-product-adarsh/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700 transition p-1.5 bg-white/50 rounded-full">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Bottom Legal & Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 text-center sm:text-left">
            <div>
              © 2026 Digital Product Solutions · Registered MSME IT Enterprise, Korani, Thiruvananthapuram, Kerala.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/privacy-policy" className="text-gray-700 hover:text-blue-600 font-medium underline underline-offset-2 transition">
                Privacy Policy
              </Link>
              <span className="text-gray-400">·</span>
              <Link href="/terms-of-service" className="text-gray-700 hover:text-blue-600 font-medium underline underline-offset-2 transition">
                Terms of Service
              </Link>
              <span className="text-gray-400">·</span>
              <Link href="/data-deletion" className="text-gray-700 hover:text-blue-600 font-medium underline underline-offset-2 transition">
                Data Deletion
              </Link>
              <span className="text-gray-400">·</span>
              <Link href="/all-pages" className="text-blue-700 hover:text-blue-900 font-semibold underline underline-offset-2 transition">
                HTML Sitemap
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer
