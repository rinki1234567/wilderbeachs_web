"use client"
import { motion } from "framer-motion"
import {Navigation, Car, Plane } from "lucide-react"
const directions = [
  {
    icon: Plane,
    title: "By Air",
    description: "Fly into Paradise International Airport (PIA)",
    details: ["30-minute complimentary transfer", "Private helicopter available", "Major airlines serve PIA daily"],
  },
  {
    icon: Car,
    title: "By Car",
    description: "Scenic coastal drive from the mainland",
    details: ["2-hour drive from Capital City", "Valet parking available", "GPS: 123 Paradise Beach Drive"],
  },
  {
    icon: Navigation,
    title: "By Boat",
    description: "Private yacht and ferry services",
    details: ["Marina with 50 boat slips", "Ferry service 3x daily", "Private yacht charters available"],
  },
]

export default function MapSection() {
  return (
     <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
            className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
             
            <span className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-green-800 via-tropical-600 to-green-900 bg-clip-text text-transparent">
              Find Us Here
            </span>
   
          </motion.h2>
            <p className="text-black/70">Escape to Paradise Beach with easy access and a serene, secluded vibe.</p>
          </div>

          <div className="bg-black/30 backdrop-blur-2xl border border-white/20 overflow-hidden">
            <div className="p-0">
              <div className="h-96">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d236327.3263867738!2d80.42943071377539!3d22.254701716866567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKhasra%20No.%2021%2C%20Chowki%20Tola%20Village%20Kutwahi%2C%20Mandla%2C%20Madhya%20Pradesh%2C%20India%2C%20481768%20(Exactly%2010%20km%20from%20the%20main%20gate%20of%20Kanha%20National%20Park)%20Gate%20Name%3A%20Khatua%20Gate!5e0!3m2!1sen!2sin!4v1753692180815!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
