"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BookingHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <Image
        src="/luxuary/room2.jpg"
        alt="Book Your Stay"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-600/10 to-tropical-600/60" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Book Your Stay
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Reserve your luxury accommodation and prepare for paradise
          </motion.p>
        </div>
      </div>
    </section>
  )
}
