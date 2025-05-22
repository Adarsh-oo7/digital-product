"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  CheckCircle, XCircle, Award, Search, 
  Sparkles, Star, Trophy, Medal, 
} from "lucide-react"
import Head from "next/head"

// Database of certificates
const certificatesDatabase = [
  {
    id: "DPS-231D16",
    name: "Arjun U",
    course: "Python (Django)",
    issueDate: "2025-04-24",
    expiryDate: "2025-05-16",
    issuer: "Digital Product Solutions",
    score: "95%",
    badge: "Gold"
  },
  {
    id: "DPS-7190S2",
    name: "Akhil Shibu",
    course: "Python (Django)",
    issueDate: "2025-04-24",
    expiryDate: "2025-05-16",
    issuer: "Digital Product Solutions",
    score: "92%",
    badge: "Silver"
  },
  {
    id: "DPS-3A5621",
    name: "Manu M S",
    course: "Python (Django)",
    issueDate: "2025-04-24",
    expiryDate: "2025-05-16",
    issuer: "Digital Product Solutions",
    score: "79%",
    badge: "Silver"
  },
  {
    id: "DPS-901F92",
    name: "Muhammed Sha",
    course: "Web Development Fundamentals",
    issueDate: "2025-04-24",
    expiryDate: "2025-05-16",
    issuer: "Digital Product Solutions",
    score: "78%",
    badge: "Silver"
  },
  {
    id: "DPS-06281N",
    name: "Mukhil S",
    course: "Python (Django)",
    issueDate: "2025-04-24",
    expiryDate: "2025-05-16",
    issuer: "Digital Product Solutions",
    score: "89%",
    badge: "Bronze"
  },
  {
    id: "DPS-33R107",
    name: "Muhammed Rashid N",
    course: "Python (Django)",
    issueDate: "2025-04-24",
    expiryDate: "2025-05-16",
    issuer: "Digital Product Solutions",
    score: "92%",
    badge: "Silver"
  },
  {
    id: "DPS-808H03",
    name: "AKHILASH C J",
    course: "Python",
    issueDate: "2025-04-24",
    expiryDate: "2025-05-16",
    issuer: "Digital Product Solutions",
    score: "86%",
    badge: "Silver"
  },
  {
    id: "DPS456789",
    name: "ADARSH B S",
    course: "NestJS and TypeScript",
    issueDate: "2025-04-24",
    expiryDate: "2025-05-16",
    issuer: "Digital Product Solutions",
    score: "96%",
    badge: "Gold"
  }
];

// Base URL for canonical tags
// const BASE_URL = process.env.NODE_ENV === "production"
//   ? "https://www.digitalproductsolutions.in"
//   : "http://localhost:3000"

type CertificateData = {
  id: string
  name: string
  course: string
  issueDate: string
  expiryDate: string
  issuer: string
  score?: string
  badge?: string
}

export default function CertificateVerification() {
  const [certificateId, setCertificateId] = useState("")
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)

  // Verify certificate function
  const verifyCertificate = async (id: string) => {
    setIsLoading(true)
    setSearchPerformed(true)
    
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Find the certificate in our database
    const foundCertificate = certificatesDatabase.find(
      cert => cert.id.toLowerCase() === id.toLowerCase()
    );
    
    if (foundCertificate) {
      setIsVerified(true)
      setCertificateData(foundCertificate)
    } else {
      setIsVerified(false)
      setCertificateData(null)
    }
    
    setIsLoading(false)
  }

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  }

  // Get badge color based on badge type
  const getBadgeColor = (badge: string) => {
    switch(badge) {
      case "Gold":
        return "from-yellow-500 to-amber-600 text-yellow-900";
      case "Silver":
        return "from-gray-300 to-gray-400 text-gray-900";
      case "Bronze":
        return "from-amber-700 to-amber-800 text-amber-100";
      default:
        return "from-blue-500 to-blue-600 text-blue-900";
    }
  }

  // Function to render the appropriate badge icon
  const renderBadgeIcon = (badge: string) => {
    switch(badge) {
      case "Gold":
        return <Trophy className="h-16 w-16 text-yellow-300 mb-4 mx-auto" />;
      case "Silver":
        return <Medal className="h-16 w-16 text-gray-300 mb-4 mx-auto" />;
      case "Bronze":
        return <Award className="h-16 w-16 text-amber-700 mb-4 mx-auto" />;
      default:
        return <Trophy className="h-16 w-16 text-blue-400 mb-4 mx-auto" />;
    }
  }

  return (
    <>
      <Head>
        <title>Certificate Verification | Digital Product Solutions</title>
        <meta
          name="description"
          content="Verify the authenticity of certificates issued by Digital Product Solutions in Attingal, Kerala. Check course completion, training certifications, and digital credentials."
        />
      </Head>
      <div className="min-h-screen py-16 px-4 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white bg-opacity-10"
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Confetti animation - Only show when certificate is verified */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {isVerified && Array.from({ length: 30 }).map((_, i) => {
            const size = Math.random() * 10 + 5;
            const startX = Math.random() * 100;
            const delay = Math.random() * 3;
            const duration = Math.random() * 10 + 10;
            const colors = [
              'bg-pink-500', 'bg-yellow-400', 'bg-blue-500', 
              'bg-green-400', 'bg-purple-500', 'bg-red-400'
            ];
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            return (
              <motion.div
                key={i}
                className={`absolute rounded-full ${color}`}
                style={{
                  width: size,
                  height: size,
                  left: `${startX}vw`,
                  top: -20,
                }}
                animate={{
                  y: ['0vh', '100vh'],
                  x: [`${startX}vw`, `${startX + (Math.random() * 20 - 10)}vw`],
                  rotate: [0, Math.random() * 360]
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                  ease: "linear"
                }}
              />
            );
          })}
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center bg-white bg-opacity-10 px-6 py-3 rounded-full border border-white border-opacity-20 shadow-lg">
              <Award className="h-8 w-8 text-yellow-300 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold text-white">Certificate Verification</h1>
            </div>
          </motion.div>

          {/* Congratulations Message - Only show when verified */}
          {isVerified && (
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="inline-block"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <div className="flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-yellow-300" />
                  <Star className="h-10 w-10 text-yellow-300 mx-2" />
                  <Star className="h-8 w-8 text-yellow-300" />
                </div>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-300 to-yellow-400 mb-4">
                Its verified Certificate
              </h2>
              <p className="text-xl text-blue-200">
                Your certificate has been successfully verified.
              </p>
            </motion.div>
          )}

          {/* Search Box - Smaller when verified */}
          <motion.div
            className={`bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 shadow-lg mb-10 ${isVerified ? 'max-w-lg mx-auto' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <label 
                  htmlFor="certificateId" 
                  className="block text-sm font-medium mb-2 text-white"
                >
                  Certificate ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="certificateId"
                  placeholder="Enter Certificate ID (e.g. DPS-1234J6)"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-30 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                  aria-required="true"
                />
                {/* <div className="mt-2 text-xs text-gray-300">
                  <p>Try with these IDs: DPS123456, DPS789012, DPS345678, DPS901234, DPS567890, DPS234567, DPS890123, DPS456789</p>
                </div> */}
              </div>
              <div className="self-end">
                <button
                  onClick={() => verifyCertificate(certificateId)}
                  disabled={!certificateId || isLoading}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Verify certificate"
                >
                  {isLoading ? (
                    <span className="flex items-center">Verifying...</span>
                  ) : (
                    <span className="flex items-center">
                      <Search className="mr-2 h-5 w-5" />
                      Verify
                    </span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Verification Status - Only show after search performed */}
          {searchPerformed && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isVerified && (
                <motion.div 
                  className="mb-8 p-6 rounded-lg flex items-start bg-gradient-to-r from-green-600 to-emerald-600 border border-green-400 border-opacity-30 shadow-lg"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="bg-white bg-opacity-20 rounded-full p-2 mr-4 flex-shrink-0">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, ease: "easeInOut", repeat: 1 }}
                    >
                      <CheckCircle className="h-8 w-8 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h2 className="text-white font-semibold text-xl mb-2">Certificate Verified</h2>
                    <p className="text-green-100">
                      This certificate is valid and has been officially issued by Digital Product Solutions. 
                      The details below confirm the authenticity of this credential.
                    </p>
                  </div>
                </motion.div>
              )}

              {!isVerified && searchPerformed && (
                <motion.div 
                  className="mb-8 p-6 rounded-lg flex items-start bg-gradient-to-r from-red-700 to-red-600"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <XCircle className="h-8 w-8 text-red-200 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-red-200 font-semibold text-xl mb-2">Invalid Certificate</h2>
                    <p className="text-red-100">
                      We couldn't verify this certificate in our records. Please check the ID and try again. 
                      If you believe this is an error, contact our support team.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Certificate Display - Only show when verified */}
              {isVerified && certificateData && (
                <motion.div 
                  className="relative"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -left-10 h-20 w-20 rotate-12">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="h-full w-full text-yellow-300" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute -bottom-5 -right-5 h-20 w-20 -rotate-12">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Medal className="h-full w-full text-yellow-300" />
                    </motion.div>
                  </div>
                  
                  {/* Certificate */}
                  <motion.div 
                    className="bg-gradient-to-br from-indigo-800 via-blue-900 to-purple-900 rounded-xl shadow-2xl overflow-hidden border-4 border-white border-opacity-20"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(167,139,250,0.3)",
                        "0 0 40px rgba(167,139,250,0.5)",
                        "0 0 20px rgba(167,139,250,0.3)"
                      ]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Certificate Header */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
                      <div className="relative p-8 flex items-center justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-white">Certificate of Completion</h2>
                          <div className="flex items-center mt-2">
                            <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                              <p className="text-blue-100">ID: {certificateData.id}</p>
                            </div>
                          </div>
                        </div>
                        <motion.div
                          animate={{ 
                            rotateY: [0, 180, 360],
                          }}
                          transition={{ 
                            duration: 6, 
                            repeat: Infinity,
                            ease: "easeInOut" 
                          }}
                        >
                          <Award className="h-16 w-16 text-yellow-300" />
                        </motion.div>
                      </div>

                      {/* Decorative ribbon banner with badge level */}
                      <div className={`absolute -right-12 top-6 rotate-45 bg-gradient-to-r ${getBadgeColor(certificateData.badge || "")} px-10 py-1 font-bold text-sm shadow-lg`}>
                        {certificateData.badge || "VERIFIED"}
                      </div>
                    </div>

                    {/* Certificate Body */}
                    <div className="p-8 md:p-12 border-b border-white border-opacity-20 bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-700 bg-opacity-30">
                      <div className="text-center mb-8">
                        <div className="mb-6">
                          <motion.div
                            className="inline-block"
                            animate={{ 
                              y: [0, -5, 0],
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              ease: "easeInOut" 
                            }}
                          >
                            {renderBadgeIcon(certificateData.badge || "")}
                          </motion.div>
                        </div>
                        <p className="text-gray-300 mb-2">This certifies that</p>
                        <motion.h3 
                          className="text-3xl md:text-4xl font-serif font-bold text-white mb-2"
                          animate={{
                            textShadow: [
                              "0 0 5px rgba(255,255,255,0.3)",
                              "0 0 15px rgba(255,255,255,0.5)",
                              "0 0 5px rgba(255,255,255,0.3)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {certificateData.name}
                        </motion.h3>
                        <p className="text-gray-300">has successfully completed Internship in</p>
                        <motion.h4 
                          className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mt-3"
                          animate={{
                            textShadow: [
                              "0 0 5px rgba(147,197,253,0.3)",
                              "0 0 15px rgba(147,197,253,0.5)",
                              "0 0 5px rgba(147,197,253,0.3)"
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {certificateData.course}
                        </motion.h4>
                        {certificateData.score && (
                          <motion.div 
                            className="mt-6 inline-block px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full border border-green-400 shadow-lg"
                            animate={{
                              boxShadow: [
                                "0 0 5px rgba(16,185,129,0.5)",
                                "0 0 15px rgba(16,185,129,0.7)",
                                "0 0 5px rgba(16,185,129,0.5)"
                              ]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="flex items-center">
                              <Star className="h-5 w-5 mr-2 text-yellow-300" />
                              Score: {certificateData.score}
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>

                    {/* Certificate Footer */}
                    <div className="p-6 bg-black bg-opacity-30 grid sm:grid-cols-3 gap-6 text-center sm:text-left">
                      <div>
                        <p className="text-sm text-gray-400">Internship Start Date</p>
                        <p className="font-medium text-gray-200">{formatDate(certificateData.issueDate)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Internship End Date</p>
                        <p className="font-medium text-gray-200">{formatDate(certificateData.expiryDate)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Issued By</p>
                        <p className="font-medium text-gray-200">{certificateData.issuer}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Action Buttons - Only show when verified */}
          {/* {isVerified && certificateData && (
            <motion.div
              className="mt-10 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-md shadow-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileCheck className="mr-2 h-5 w-5" />
                Download Certificate
              </motion.button>
              
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-md shadow-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="mr-2 h-5 w-5" />
                Share Certificate
              </motion.button>
            </motion.div>
          )} */}

          {/* Contact Information */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg inline-block">
              <p className="mb-4 text-gray-200">
                Need further assistance with certificate verification? Contact our team:
              </p>
              <div className="space-y-2">
                <p>
                  <a
                    href="mailto:digitalproductkerala@gmail.com"
                    className="text-blue-300 hover:text-blue-200 transition-colors flex items-center justify-center"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    digitalproductkerala@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+919400355185"
                    className="text-blue-300 hover:text-blue-200 transition-colors flex items-center justify-center"
                  >
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    +91 9400355185
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}