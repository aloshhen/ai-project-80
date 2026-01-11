import React from 'react'
import { Truck, PhoneCall, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Truck className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">AutoTransport</span>
            </div>
            <p className="text-gray-300">Your reliable partner in transportation services</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <PhoneCall className="w-5 h-5" />
                +1 (234) 567-890
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5" />
                info@autotransport.com
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary">Home</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-primary">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          © 2024 AutoTransport. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer