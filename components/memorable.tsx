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
    <section className=" bg-[#0B2B26] py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Top Decoration Line (Screenshot match) */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2  h-12 w-12   bg-gray-500/30"></div> */}

      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Animated Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] text-gray-400 mb-12 font-medium">
            WHAT'S MEMORABLE
          </p>

          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-bold   text-white/70 font-mono mb-4">
              22.2995° N, 80.5864° E
            </h2>
            <p className="text-2xl md:text-3xl font-black  tracking-[0.1em] text-white  opacity-95 leading-none">
              Wilder Beach Experience
            </p>
          </div>
        </motion.div>

        {/* Icons Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-20 px-4">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }} // Niche se start hoga
              whileInView={{ opacity: 1, y: 0 }} // Scroll karne par position par aayega
              viewport={{ once: false, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6, 
                ease: "easeOut" 
              }}
              className="flex flex-col items-center group cursor-default"
            >
              <div className="mb-8 relative h-15 w-15 flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={50}
                  height={50}
                  className="opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 brightness-200"
                />
              </div>

              <p className="text-[10px] md:text-[12px]   font-bold text-white/80 group-hover:text-white transition-colors duration-300 max-w-[130px] leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom vertical line jesa screenshot me hai */}
        {/* <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 96 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 w-[0.5px] bg-gray-500/30 mx-auto"
        >jnkjjkll</motion.div> */}
      </div>
    </section>
  )
}