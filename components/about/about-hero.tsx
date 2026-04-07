// "use client"
// import { motion, useAnimationControls } from "framer-motion"
// import Image from "next/image"
// import { useState, useEffect, useRef } from "react"

// const textPhrases = [
//   {
//     title: "Our Story",
//     subtitle: "Discover the passion and vision behind WilderBeach Resort",
//   },
//   {
//     title: "Your Escape",
//     subtitle: "Experience luxury and tranquility at our beachfront paradise",
//   },
//   {
//     title: "Unforgettable Moments",
//     subtitle: "Create cherished memories with us at WilderBeach",
//   },
//   {
//     title: "Nature & Luxury",
//     subtitle: "Where pristine beaches meet world-class hospitality",
//   },
// ]

// export default function AboutHero() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const textControls = useAnimationControls()
//   const isMounted = useRef(false)

//   useEffect(() => {
//     isMounted.current = true
//     return () => {
//       isMounted.current = false
//     }
//   }, [])

//   useEffect(() => {
//     const animateText = async () => {
//       if (!isMounted.current) return

//       await textControls.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, ease: "easeOut" },
//       })

//       await new Promise((resolve) => setTimeout(resolve, 3000))

//       if (!isMounted.current) return

//       await textControls.start({
//         opacity: 0,
//         y: -50,
//         transition: { duration: 0.6, ease: "easeIn" },
//       })
//     }

//     animateText()
//   }, [currentIndex, textControls])

 
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % textPhrases.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="relative h-[70vh] overflow-hidden">
    
//       <Image
//         src="/about/about2.jpg"
//         alt="Luxury Accommodations"
//         fill
//         className="object-cover"
//         priority
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-ocean-950/30 z-0" />

//       {/* Text */}
//       <div className="relative z-10 h-full flex items-center justify-center">
//         <div className="text-center text-white max-w-4xl mx-auto px-4">
//           <motion.h1
//             key={`title-${currentIndex}`}
//             initial={{ opacity: 0, y: 50 }}
//             animate={textControls}
//             className="text-2xl md:text-5xl font-bold mb-6"
//           >
//             {textPhrases[currentIndex].title}
//           </motion.h1>
//           <motion.p
//             key={`subtitle-${currentIndex}`}
//             initial={{ opacity: 0, y: 30 }}
//             animate={textControls}
//             className="text-xl md:text-2xl text-white/90"
//           >
//             {textPhrases[currentIndex].subtitle}
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"

const textPhrases = [
  {
    title: "Our Story",
    subtitle: "Discover the passion and vision behind WilderBeach Resort",
  },
  {
    title: "Your Escape",
    subtitle: "Experience luxury and tranquility at our beachfront paradise",
  },
  {
    title: "Unforgettable Moments",
    subtitle: "Create cherished memories with us at WilderBeach",
  },
  {
    title: "Nature & Luxury",
    subtitle: "Where pristine beaches meet world-class hospitality",
  },
]

export default function AboutHero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Interval to change text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textPhrases.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[75vh] min-h-[450px] overflow-hidden">
      <Image
        src="/about/about3.jpg"
        alt="Luxury Accommodations"
        fill
        className="object-cover object-center  "
        priority
      />

      <div className="absolute inset-0  z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-14 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white overflow-hidden h-[180px] md:h-[220px] flex flex-col justify-end">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} // Jab key badlegi, animation trigger hoga
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-3xl font-semibold leading-tight sm:text-3xl md:text-5xl font-serif">
                  {textPhrases[currentIndex].title}
                </h1>
                <p className="mt-4 text-sm text-white/85 sm:text-xl md:text-base font-light">
                  {textPhrases[currentIndex].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  )
}