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
              {/* <span className="text-gray-900 text-sm font-medium tracking-tight">
              Digital Product
            </span> */}
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm ">
              <Link href="/" className=" text-black hover:text-blue-600 transition">Home</Link>
              <Link href="/about" className="text-black hover:text-blue-600 transition">About</Link>
              <Link href="/blog" className="text-black hover:text-blue-600 transition">Blog</Link>
              <Link href="/portfolio" className="text-black hover:text-blue-600 transition">Portfolio</Link>
              <Link href="/contact" className="text-black hover:text-blue-600 transition">Contact</Link>
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
          <div className="mt-10 text-center text-xs text-gray-600">
            © 2026 Digital Product · Kerala, India
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer

