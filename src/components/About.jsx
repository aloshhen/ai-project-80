import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-300 mb-4">
              AutoTransport is a leading logistics company specializing in efficient and reliable transportation services.
            </p>
            <p className="text-gray-300 mb-4">
              With years of experience and a modern fleet, we ensure your goods are delivered safely and on time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="https://source.unsplash.com/800x600/?truck,logistics" alt="About" className="rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About