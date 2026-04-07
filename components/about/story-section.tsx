// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// export default function StorySection() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold text-green-900 mb-6">A Vision of Paradise</h2>
//             <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
//               <p>
//                 Founded in 1985 by visionary hotelier James Wilder, WilderBeach Resort began as a dream to create the
//                 world's most extraordinary beachfront sanctuary. What started as a small collection of beachside
//                 cottages has evolved into a world-renowned luxury destination.
//               </p>
//               <p>
//                 Our commitment to excellence, sustainability, and authentic hospitality has earned us recognition as one
//                 of the world's premier resort destinations. Every detail, from our architectural design to our
//                 personalized service, reflects our dedication to creating unforgettable experiences.
//               </p>
//               <p>
//                 Today, WilderBeach Resort continues to set new standards in luxury hospitality, welcoming guests from
//                 around the globe to experience the perfect harmony of natural beauty and refined elegance.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="relative"
//           >
//             <Image
//               src="/about/about.jpg"
//               alt="Resort History"
//               width={800}
//               height={600}
//               className="rounded-2xl shadow-2xl"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function StorySection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* 1. TOP CENTER TITLE */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-700 font-bold tracking-[0.4em] text-[10px] uppercase block mb-3">
            Sanctuary of Peace
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight max-w-3xl mx-auto">
            Welcome to <span className="text-green-900  font-bold">Wilder Beach’s Retreat</span>
          </h2>
          <div className="mt-4 w-16 h-[2px] bg-amber-600/20 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-serif text-[#1a2e2a] italic leading-relaxed border-l-2 border-amber-600/30 pl-6">
              "Where nature unfolds in its purest form, 
              nestled in the heart of wilderness."
            </h3>
            
            <div className="space-y-5 text-[16px] text-slate-600 font-light leading-relaxed">
              <p>
                Our wildlife safari lodge, located on the tranquil banks of the 
                <span className="font-semibold text-slate-900"> Bunjar River</span>, 
                offers an immersive experience amidst the lush forests of Kanha Tiger Reserve.
              </p>
              
              <p>
                Surrounded by dense greenery and the soothing sounds of the wild, the resort is a perfect blend of comfort and raw natural beauty. Wake up to breathtaking sunrises over the river and unwind with mesmerizing 
                sunsets that paint the forest in golden hues. Every moment here brings you closer to nature—whether it’s the gentle flow of the river, the rustle of leaves, or the distant call of wildlife
              </p>
            </div>
              <Link href="/about/history" className="inline-flex items-center gap-2 text-amber-900 font-bold text-[10px] uppercase tracking-[0.2em] pt-4 group">
            <motion.button 
    whileHover={{ gap: "20px" }}
    whileTap={{ scale: 0.95 }} // Click karte waqt chota sa effect
    className="flex items-center gap-3 text-amber-900 font-bold text-[10px] uppercase tracking-[0.2em] group outline-none"
  >
    Learn More 
    <span className="relative flex items-center">
      {/* Main Line */}
      <span className="w-8 h-[1px] bg-amber-900 group-hover:w-16 transition-all duration-500 ease-in-out" />
      {/* Arrow Head (Aesthetic touch) */}
      <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[8px]">
        →
      </span>
    </span>
  </motion.button>
            </Link>
          </div>

          {/* RIGHT: IMAGE WITH SINGLE TRANSPARENT PARDA */}
          <div className="relative group order-1 lg:order-2">
            
            {/* Image Container - Reduced Height (h-[380px]) */}
            <div className="relative h-[350px] md:h-[400px] w-full overflow-hidden rounded-2xl shadow-xl bg-slate-50">
              
              {/* THE IMAGE */}
              <Image
                src="/about/twoloin.jpg" 
                alt="Wilder Beach"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                quality={100}
              />

              {/* THE SINGLE TRANSPARENT PARDA (Glass Reveal) */}
              <motion.div 
                initial={{ x: 0 }}
                whileHover={{ x: "100%" }} // Right side slide
                transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0  bg-transparent/10  z-20 flex items-center justify-center border-l border-white/20"
              >
                {/* Visual Hint on Parda */}
                <div className="text-center group-hover:opacity-0 transition-opacity duration-300">
                   <span className="text-amber-400 text-[10px] tracking-[0.5em] uppercase block mb-2">Explore View</span>
                   <div className="w-6 h-[1px] bg-white/40 mx-auto" />
                </div>
              </motion.div>
            </div>

            {/* FLOATING BOX - Effective & Modern */}
            <motion.div 
              whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
              className="absolute -bottom-5 -left-4 md:-left-8 bg-white/90 backdrop-blur-lg border border-slate-100 p-5 shadow-2xl rounded-xl z-30 max-w-[300px]"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                  <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400">Nature Hub</span>
                </div>
                <p className="text-md font-serif italic text-slate-800">Bunjar River Banks, Kanha</p>
                <hr />
                <p className="text-[10px] text-amber-700 mt-2 font-medium">Click to see gallery →</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  )
}