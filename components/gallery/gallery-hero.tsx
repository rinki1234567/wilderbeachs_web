// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// export default function GalleryHero() {
//   return (
//     <section className="relative h-[70vh] overflow-hidden">
      
//       <Image
//         src="/images/gallery-hero.png"
//         alt="Resort Gallery"
//         fill
//         className="object-cover"
//         priority
//       />
   

//       <div className="relative z-10 h-full flex items-center justify-center">
//         <div className="text-center text-white max-w-4xl mx-auto px-4">
//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold mb-6"
//           >
//             Visual Journey
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-xl md:text-2xl text-white/90"
//           >
//             Explore the beauty and luxury of WilderBeach Resort through our stunning gallery
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function GalleryHero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Parallax effect for image and text
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={containerRef} className="relative h-[85vh] overflow-hidden bg-[#1a2e2a]">
      {/* 1. THE IMAGE WITH PARALLAX & OVERLAY */}
      <motion.div style={{ y: yImage }} className="absolute inset-0 z-0">
        <Image
          src="/images/gallery-hero.png"
          alt="Wilder Beach Sanctuary"
          fill
          className="object-cover scale-110"
          priority
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e2a]/40 via-transparent to-[#fcfbf8]" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      {/* 2. DECORATIVE FLOATING TEXT (Unique Element) */}
      {/* <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-10">
        <h2 className="text-[20vw] font-serif italic text-white whitespace-nowrap">
          The Sanctuary
        </h2>
      </div> */}

      {/* 3. MAIN CONTENT */}
      <motion.div 
        style={{ y: yText, opacity }}
        className="relative z-20 h-full flex items-center justify-center pt-20"
      >
        <div className="text-center max-w-5xl mx-auto px-6">
          {/* Small Badge Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="px-6 py-2 border border-amber-400/40 rounded-full text-amber-400 text-[10px] font-bold uppercase tracking-[0.5em] backdrop-blur-sm bg-black/10">
              Wilder Beach Sanctuary
            </span>
          </motion.div>

          {/* Editorial Style Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-none"
          >
            Visual <span className=" text-white font-light">Journey</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-amber-400/60 mx-auto mb-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed "
          >
            A curated window into the raw majesty of Kanha and the refined luxury of <span className="text-white font-normal">WilderBeach</span>.
          </motion.p>
        </div>
      </motion.div>

      {/* 4. BOTTOM DECORATION - SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <span className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-bold">Discover More</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-400 to-transparent" />
      </motion.div>
    </section>
  )
}