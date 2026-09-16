import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute bottom-full left-0 w-full h-12 z-20
  bg-gradient-to-b from-transparent via-black/8 to-black/5" />
      <footer className="relative border-t border-gray-200 py-14 bg-gradient-to-b from-[#ced4fd] via-[#decef9] to-[#ced4fd] overflow-hidden">

        <div className="absolute inset-0 z-0">
          <div className="absolute w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl top-[-150px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl bottom-[-150px] right-[-150px]" />
        </div>
        <div className="max-w-5xl mx-auto px-4">

          {/* Contact & Location Info for Local SEO & Trust */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-black/10 relative z-10 text-gray-800 text-sm">
            <div>
              <h2 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-sm">Digital Product Solutions</h2>
              <p className="text-gray-700 leading-relaxed">
                Premium custom software, mobile applications, technical SEO, performance marketing, and business automation systems built specifically for growing brands.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-sm">Office Location</h2>
              <p className="text-gray-700 leading-relaxed">
                📍 Mangalapuram Panchayat, Korani, Chempakamangalam, Kerala 695104<br />
                Serving clients in Trivandrum, Kochi, Kollam, Kozhikode, Kannur, Palakkad, Kottayam, and across Kerala.
              </p>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 mb-3 uppercase tracking-wider text-sm">Contact & Inquiries</h2>
              <p className="text-gray-700 leading-relaxed">
                📞 Phone: <a href="tel:+919400355185" className="hover:text-blue-600 transition font-semibold">+91 9400355185</a><br />
                💬 WhatsApp: <a href="https://wa.me/919400355185" className="hover:text-blue-600 transition font-semibold">+91 9400355185</a><br />
                ✉️ Email: <Link href="/contact" className="hover:text-blue-600 transition">Send us a message</Link>
              </p>
            </div>
          </div>

          {/* Top section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-2">

            {/* Logo + Name */}
            <div className="flex items-center gap-3">
              <Image
                src="/img/logos.png"
                alt="Digital Product Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm ">
              <Link href="/" className=" text-black hover:text-blue-600 transition">Home</Link>
              <Link href="/website-development" className="text-black hover:text-blue-600 transition">Websites</Link>
              <Link href="/website-development-cost-kerala" className="text-black hover:text-blue-600 transition">Website cost</Link>
              <Link href="/ecommerce-website-development-kerala" className="text-black hover:text-blue-600 transition">E-commerce</Link>
              <Link href="/work" className="text-black hover:text-blue-600 transition">Work</Link>
              <Link href="/digital-product-solutions-reviews" className="text-black hover:text-blue-600 transition">Reviews</Link>
              <Link href="/pricing" className="text-black hover:text-blue-600 transition">Pricing</Link>
              <Link href="/about" className="text-black hover:text-blue-600 transition">About</Link>
              <Link href="/blog" className="text-black hover:text-blue-600 transition">Blog</Link>
              <Link href="/portfolio" className="text-black hover:text-blue-600 transition">Portfolio</Link>
              <Link href="/contact" className="text-black hover:text-blue-600 transition">Contact</Link>
              <Link href="/privacy-policy" className="text-black hover:text-blue-600 transition">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-black hover:text-blue-600 transition">Terms of Service</Link>
              <Link href="/data-deletion" className="text-black hover:text-blue-600 transition">Data Deletion</Link>
            </nav>

            {/* Social */}
            <div className="flex gap-5 text-gray-400">
              <a href="https://www.facebook.com/Digital.Product.kerala/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/digital_product_solutions/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/digital-product-adarsh/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 text-center sm:text-left">
            <div>
              © 2026 Digital Product Solutions · Korani, Thiruvananthapuram, Kerala. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
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
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer

