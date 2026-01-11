import React from 'react'
import { Truck, Clock, Shield, MapPin } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "Modern Fleet",
      description: "Our vehicles are equipped with the latest technology for safe and efficient transportation."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Fast Delivery",
      description: "We guarantee timely delivery with our optimized routes and experienced drivers."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure Transport",
      description: "Your goods are protected with our advanced security systems and insurance coverage."
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Wide Coverage",
      description: "We operate across multiple regions, ensuring reliable service wherever you need."
    }
  ]

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary p-8 rounded-xl border border-gray-800">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features