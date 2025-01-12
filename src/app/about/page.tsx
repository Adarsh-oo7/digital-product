'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Digital Product
        </motion.h1>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
         <h2 className="text-2xl font-semibold">Our Mission</h2>
<p>
  At Digital Product, we strive to empower businesses with cutting-edge web solutions that drive growth and innovation. Our mission is to transform ideas into powerful digital realities.
</p>
<h2 className="text-2xl font-semibold">Our Vision</h2>
<p>
  We envision a world where every business, regardless of size, has access to high-quality digital products that can compete on a global scale. We&apos;re here to make that vision a reality.
</p>

          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold">Our Team</h2>
            <p>
              Our diverse team of passionate developers, designers, and strategists work together to bring your digital dreams to life. With years of experience and a commitment to staying at the forefront of technology, we're equipped to handle any challenge.
            </p>
            <ul className="list-disc list-inside">
              <li>Expert developers specializing in various technologies</li>
              <li>Creative designers with an eye for modern aesthetics</li>
              <li>Experienced project managers ensuring smooth delivery</li>
              <li>Dedicated support team for ongoing maintenance</li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Adarsh B S', role: 'Founder & CEO', image: '/img/adarsh.png?height=300&width=300' },
              { name: 'Jane Smith', role: 'Lead Developer', image: '/placeholder.svg?height=300&width=300' },
              { name: 'Mike Johnson', role: 'UX Designer', image: '/placeholder.svg?height=300&width=300' },
            ].map((member, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

