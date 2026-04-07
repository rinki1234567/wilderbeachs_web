"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AccommodationsHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src="/images/accomodation-hero.png"
        alt="Luxury Accommodations"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Luxury Accommodations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Experience unparalleled comfort in our meticulously designed suites and villas
          </motion.p>
        </div>
      </div>
    </section>
  )
}
