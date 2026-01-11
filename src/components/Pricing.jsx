import React from 'react'
import { motion } from 'framer-motion'

function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$299",
      features: ["Local Delivery", "Standard Insurance", "24/7 Support"]
    },
    {
      name: "Standard",
      price: "$499",
      features: ["Regional Delivery", "Enhanced Insurance", "Priority Support"]
    },
    {
      name: "Premium",
      price: "$799",
      features: ["National Delivery", "Full Coverage Insurance", "Dedicated Support"]
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-secondary p-8 rounded-xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">{plan.price}</div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-300">{feature}</li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing