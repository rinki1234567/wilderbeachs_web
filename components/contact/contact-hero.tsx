"use client"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useEffect } from "react"

export default function ContactHero() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0, 1, 0],
      y: [50, 0, 50],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
      },
    })
  }, [controls])
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <Image
        src="/resort1.jpg"
        alt="Contact WilderBeach Resort"
        fill
        className="object-cover"
        priority
      />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Get In Touch
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: [0, 1, 0],
              y: [50, 0, 50],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-xl md:text-2xl text-white/90"
          >
            We're here to help you plan your perfect getaway
          </motion.p>
        </div>
      </div>
    </section>
  )
}
