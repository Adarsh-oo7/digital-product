'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      name: 'Adarsh B S',
      role:  ['Project Manager', 'SEO and Marketing Specialist'],
      image: './img/adarsh.png?height=300&width=300',
    },
    {
      name: 'Mudhin S',
      role: ['Full-Stack Developer ','Backend Specialist','Quality Assurance(QA)'],
      image: './img/midhin.jpg?height=300&width=300',
    },
    {
      name: 'Aromal V G',
      role: ['Full-Stack Developer','UI/UX Designer','Frondend Specialist'],
      image: './img/aromal.png?height=300&width=300',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Page Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Digital Product
        </motion.h1>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p>
              At Digital Product, we strive to empower businesses with cutting-edge web
              solutions that drive growth and innovation. Our mission is to transform ideas
              into powerful digital realities.
            </p>
            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p>
              We envision a world where every business, regardless of size, has access to
              high-quality digital products that can compete on a global scale. We&apos;re here
              to make that vision a reality.
            </p>
          </motion.div>

          {/* Team Overview */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold">Our Team</h2>
            <p>
              Our diverse team of passionate developers, designers, and strategists work
              together to bring your digital dreams to life. With years of experience and a
              commitment to staying at the forefront of technology, we&apos;re equipped to
              handle any challenge.
            </p>
            <ul className="list-disc list-inside">
              <li>Expert developers specializing in various technologies</li>
              <li>Creative designers with an eye for modern aesthetics</li>
              <li>Experienced project managers ensuring smooth delivery</li>
              <li>Dedicated support team for ongoing maintenance</li>
            </ul>
          </motion.div>
        </div>

        {/* Team Members */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
  <motion.div
    key={index}
    className="bg-gray-800 rounded-lg p-6 text-center"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
  >
    <Image
      src={member.image}
      alt={`Picture of ${member.name}`}
      width={150}
      height={150}
      className="rounded-full mx-auto mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
    {Array.isArray(member.role) ? (
      <p className="text-gray-400">
        {member.role.map((r, i) => (
          <span key={i}>
            {r}
            {i < member.role.length - 1 && <br />}
          </span>
        ))}
      </p>
    ) : (
      <p className="text-gray-400">{member.role}</p>
    )}
  </motion.div>
))}

          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
  className="mt-16"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
>
  <h2 className="text-3xl font-semibold mb-8 text-center">Our Location</h2>
  <div className="relative overflow-hidden rounded-lg" style={{ paddingBottom: '56.25%' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.16649578382!2d76.84067420000002!3d8.660266599999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x893ab90196d09cb5%3A0xdbfd038c9bb1b62!2sDigital%20product%20sale!5e1!3m2!1sen!2sin!4v1737039748951!5m2!1sen!2sin"
      width="100%"
      height="100%"
      
      loading="lazy"
      style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
    ></iframe>
  </div>
</motion.div>
      </div>
    </div>
  );
}
