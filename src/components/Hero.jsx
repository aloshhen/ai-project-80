import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Modern Logistics Solutions
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8 text-gray-300"
        >
          Your reliable partner in transportation services
        </motion.p>
        <div className="flex gap-4 justify-center">
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg"
          >
            Get Started
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-primary text-primary px-8 py-3 rounded-lg"
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Hero