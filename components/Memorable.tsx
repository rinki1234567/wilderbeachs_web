"use client"

import { motion } from "framer-motion"
import { TreePalm, Waves, Sun, Palmtree, Flower2, Users } from "lucide-react"

const experienceItems = [
  {
    icon: TreePalm, // Birds ki jagah Nature icon
    label: "Coastal Exploration",
    description: "Discover hidden coves",
  },
  {
    icon: Waves, // Deer की जगह Waves icon
    label: "Beachfront Location",
    description: "Just steps from the sea",
  },
  {
    icon: Users, // Person icon
    label: "Curated Experiences",
    description: "Guided by locals",
  },
  {
    icon: Sun, // Sun icon
    label: "Sunrise & Sunsets",
    description: "Unforgettable views",
  },
  {
    icon: Palmtree, // Plant icon
    label: "Tropical Gardens",
    description: "Serene flora",
  },
  {
    icon: Flower2, // Ritual icon
    label: "Holistic Wellness",
    description: "Mind & Body Balance",
  },
]

export default function MemorableExperience() {
  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1500px] mx-auto text-center">
        {/* WHAT'S MEMORABLE Text (Gray) */}
        <p className="text-[12px] uppercase tracking-[0.4em] text-gray-500 mb-6 font-medium">
          WHAT'S MEMORABLE
        </p>

        {/* Text Section (Replaced Numbers with Resort Tagline) */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-mono tracking-wider font-semibold text-[#0e4131]">
            RELAX. REFRESH. RECONNECT.
          </h2>
          {/* Kanha Text (Updated to KANHA - WILDER BEACH) */}
          <p className="text-4xl md:text-5xl font-mono font-bold tracking-widest text-[#0e4131] mt-2">
            KANHA - WILDER BEACH
          </p>
        </div>

        {/* Icons Grid (Based on image_3.png) */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-12">
          {experienceItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center group"
            >
              {/* Icon Container (Gradient background to replicate the style) */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center p-4 bg-gradient-to-br from-[#0e4131] via-[#1a4d3d] to-[#4b5563] shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white opacity-90" />
              </div>

              {/* Icon Label (Main Text - Forest Green) */}
              <p className="text-[14px] uppercase tracking-[0.2em] font-bold text-[#0e4131] leading-tight">
                {item.label}
              </p>
              {/* Description (Sub-text - Gray) */}
              <p className="text-[11px] uppercase tracking-[0.1em] text-gray-500 mt-1">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}