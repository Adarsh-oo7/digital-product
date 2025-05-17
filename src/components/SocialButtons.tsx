'use client'

import { PhoneIcon as WhatsApp } from 'lucide-react'
import { motion } from 'framer-motion'

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645 c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l-0.321,4.769c0.47,0,0.677-0.216,0.942-0.47l2.264-2.193l4.702,3.472 c0.866,0.477,1.489,0.231,1.705-0.803l3.081-14.539c0.315-1.262-0.48-1.835-1.323-1.462z"/>
  </svg>
)

const SocialButton = ({ href, icon: Icon, name, color }: { href: string; icon: React.ElementType; name: string; color: string }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-colors duration-300 z-50 flex items-center justify-center group relative`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Contact us on ${name}`}
    >
      <Icon size={24} />
      <span className="absolute right-full mr-2 bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {name}
      </span>
    </motion.a>
  )
}

const SocialButtons = () => {
  return (
    <div className="fixed bottom-16
     mb-6 right-4 flex flex-col space-y-4">
      <SocialButton
        href="https://wa.me/919400355185"  
        icon={WhatsApp}
        name="WhatsApp"
        color="bg-green-500 hover:bg-green-600"
      />
      <SocialButton
        href="https://t.me/Digital_Product_kerala"  
        icon={TelegramIcon}
        name="Telegram"
        color="bg-[#0088cc] hover:bg-[#0077b5]"
      />
    </div>
  )
}

export default SocialButtons
