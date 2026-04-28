"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Crown, Waves, TreePine, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Memorable from "@/components/memorable"

const features = [
  {
    title: "Luxury Accommodations",
    description: "Indulge in our meticulously designed suites and villas surrounded by forest views.",
    image: "/luxuary/room2.jpg",
    icon: Crown,
    link: "/accommodations"
  },
  {
    title: "World-Class Dining",
    description: "Savor exquisite cuisine crafted by renowned chefs using finest local ingredients.",
    image: "/luxuary/room1.jpg",
    icon: Sparkles,
    link: "/dining"
  },
  {
    title: "Endless Adventures",
    description: "Enjoy thrilling jungle safaris and discover the natural beauty of Kanha.",
    image: "/images/a1.jpg",
    icon: Waves,
    link: "/activities"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
}

export default function FeaturedSection() {
  return (
    <section className="relative w-full overflow-x-hidden">
      
      {/* --- SECTION 1: ELEGANT INTRO --- */}
      <section className="relative z-40 bg-[#FDFCFB] py-24 px-6">
        
        

        <div className="max-w-7xl mx-auto mt-16">
          {/* Heading Section */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-emerald-900 font-bold mb-4 block">
              Wilder Beach Retreat • Kanha Kisli
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2C3327]  leading-none">
              Wilderness First,
              <span className="font-bold text-emerald-800">Elegance Led.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT SIDE: Slides from Left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-serif text-[#2C3327] flex items-center gap-3">
                  Your Sanctuary in the Wild <span className="w-2 h-2 rounded-full bg-amber-500 block"></span>
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light">
                  At Wilder Beach Retreat, we believe that true luxury lies in the 
                  uninterrupted rhythm of the forest. Located on the edge of 
                  Kanha National Park, our habitat is designed to disappear into 
                  the landscape.
                </p>
                <p className="text-slate-500 text-base leading-relaxed font-light">
                  Experience the raw beauty of the Maikal Hills and the soul-stirring 
                  silence of the jungle, curated with the finest comforts.
                </p>
              </div>

              <Link href="/activities" className="group inline-flex items-center gap-6 py-2 border-b border-slate-200 hover:border-emerald-900 transition-all duration-500">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-800">Discover the Sanctuary</span>
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-emerald-900 group-hover:text-white group-hover:border-emerald-900 transition-all duration-500">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>

            {/* RIGHT SIDE: Slides from Right */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative aspect-[16/10] max-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="/images/a7.jpg" 
                alt="Wilder Beach Landscape"
                fill
                className="object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FIXED PARALLAX BACKGROUND --- */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/a3.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* --- SECTION 2: MEMORABLE EXPERIENCE --- */}
      <div className="relative z-20 mt-[35vh] mb-20 bg-transparent"> 
        <Memorable />
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center py-16 relative z-20">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-xl">
          Experience Pure Luxury
        </h2>
        <p className="text-gray-100 max-w-2xl mx-auto font-light text-lg">
          Immerse yourself in a world where luxury meets nature.
        </p>
      </motion.div>

      {/* --- SECTION 3: LUXURY CARDS --- */}
      <section className="relative bg-[#FDFCFB] z-20 py-20 px-6 ">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group bg-white/90 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/20"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-5 right-5 p-3.5 rounded-2xl bg-amber-500 text-white shadow-lg z-20">
                  <feature.icon size={22} />
                </div>
              </div>

              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 h-12 line-clamp-2">
                  {feature.description}
                </p>

                <Link href={feature.link} className="block w-full">
                  <button className="w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest text-white bg-gradient-to-r from-emerald-900 to-green-800 hover:from-green-800 hover:to-emerald-900 transition-all shadow-lg flex items-center justify-center gap-2 group/btn">
                    Discover More
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        
        </motion.div>
      </section>

      {/* --- UPDATED BUTTON SECTION --- */}
<div className="h-40 bg-transparent relative z-30 flex items-center justify-center">
  <div className="flex items-center w-full max-w-6xl px-10">
    
    {/* Left Decorative Line */}
    <div className="hidden md:block flex-1 h-[4px] bg-gradient-to-r from-transparent to-white/50"></div>

    {/* The Aesthetic Button */}
    <div className="relative px-8">
      <Link href="/accommodations">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative group bg-[#0B2B26] border border-white/20 px-12 py-3 rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] flex items-center gap-6 overflow-hidden"
        >
          {/* Subtle Inner Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative flex flex-col items-start">
            {/* <span className="text-[10px] tracking-[0.5em] uppercase text-emerald-400 font-medium mb-1">
              Reservations
            </span> */}
            <span className="text-white text-sm md:text-base tracking-[0.2em] font-bold">
              Check Room  Availability
            </span>
          </div>

          <div className="relative w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#112421] transition-all duration-500">
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.button>
      </Link>
    </div>

    {/* Right Decorative Line */}
    <div className="hidden md:block flex-1 h-[4px] bg-gradient-to-l from-transparent to-white/50"></div>
    
  </div>
</div>

   
    </section>
  )
}