import React from 'react'
import { Truck, PhoneCall } from 'lucide-react'

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-secondary/50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold">AutoTransport</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          <a href="#contact" className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            <PhoneCall className="w-4 h-4" />
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation