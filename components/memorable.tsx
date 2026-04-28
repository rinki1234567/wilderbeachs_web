"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const experienceItems = [
  { icon: "/memorable/icons-birds.png", label: "Hyperlocal Adventures" },
  { icon: "/memorable/icons-deer.png", label: "Riverside Location" },
  { icon: "/memorable/icons-sun.png", label: "Earth-friendly Lodge" },
  { icon: "/memorable/icons-nature.png", label: "Jungle Wellness" },
  { icon: "/memorable/icons-jangle.png", label: "Interpretive Culture" },
]

export default function MemorableExperience() {
  return (
    <section className="bg-[#0B2B26] py-20 px-6 relative overflow-hidden">
      
      {/* Background Blur Effect */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-300/10 blur-[120px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] uppercase tracking-[0.5em] text-gray-400 mb-8 font-medium">
            WHAT'S MEMORABLE
          </p>

          <div className="mb-16">
            <h2 className="text-2xl md:text-4xl font-semibold text-white/70 mb-3">
              22.2995° N, 80.5864° E
            </h2>

            <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Wilder Beach Experience
            </p>

            {/* Decorative line */}
            <div className="w-20 h-[2px] bg-amber-400 mx-auto mt-6 rounded-full" />
          </div>
        </motion.div>

        {/* Icons Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-10 place-items-center">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="flex flex-col items-center group"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={40}
                  height={40}
                  className="brightness-200  group-hover:rotate-6 transition-all duration-500"
                />
              </div>

              {/* Label */}
              <p className="text-[10px] md:text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 text-center max-w-[140px] leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}