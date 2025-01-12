import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-80 bg-gray-900 text-white z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Digital Product
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
