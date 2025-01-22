import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Digital Product</h3>
            <p className="text-sm">Crafting digital experiences that inspire and innovate.</p>
            <Image 
  src="./img/logos.png" // Ensure the image path is correct relative to the `public` folder
  alt="Logo" // Provide an alt description for accessibility
  width={56} // Explicit width (adjust as per your design)
  title="Digital Product Logo"
  height={56} // Explicit height (adjust as per your design)
  className="h-14 w-auto"
/>           
 {/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.16649578382!2d76.84067420000002!3d8.660266599999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x893ab90196d09cb5%3A0xdbfd038c9bb1b62!2sDigital%20product%20sale!5e1!3m2!1sen!2sin!4v1737039748951!5m2!1sen!2sin"
      width="50%"
      height="40%"
      loading="lazy"
    ></iframe> */}

          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm"> 695104, Korani P O</p>
            <p className="text-sm">Attingal, Thiruvananthapuram</p>
            <p className="text-sm">Phone: +91 9400355185</p>
            <p className="text-sm">Email: adarshsarachandran@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Digital.Product.kerala/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter />
              </a>
              <a href="https://www.instagram.com/digital_prodect_sale/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/adarsh-bs/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Digital Product. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

