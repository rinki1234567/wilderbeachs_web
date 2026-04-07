// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// const heroSlides = [
//   {
//     id: 1,
//     image: "/resort1.jpg",
//     title: "Paradise Awaits",
//     subtitle: "Experience luxury like never before at WilderBeach Resort",
//     cta: "Book Your Stay",
//     ctaLink: "/booking",
//   },
//   {
//     id: 2,
//     image: "/images/a3.jpg", 
//     title: "Sunset Serenity",
//     subtitle: "Watch breathtaking sunsets from your private villa",
//     cta: "Explore Villas",
//     ctaLink: "/accommodations",
//   },
//   {
//     id: 3,
//    image: "/images/a4.jpg",
//     title: "Infinite Relaxation",
//     subtitle: "Dive into our infinity pools overlooking the ocean",
//     cta: "View Amenities",
//     ctaLink: "/accommodations",
//   },
// ]

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isAutoPlaying])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
//   }

//   return (
//     <section className="relative h-screen overflow-hidden">
//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 mesh-gradient-1 opacity-20" />

//       {/* Preload Images */}
//       {heroSlides.map((slide) => (
//         <link key={slide.id} rel="preload" href={slide.image} as="image" />
//       ))}

//       <AnimatePresence initial={false} mode="popLayout">
//         <motion.div
//           key={currentSlide}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={heroSlides[currentSlide].image || "/placeholder.svg"}
//             alt={heroSlides[currentSlide].title}
//             fill
//             className="object-cover"
//             priority
//             quality={100}
//             unoptimized={false}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//           transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//           className="absolute top-20 left-10 w-4 h-4 bg-paradise-400 rounded-full opacity-60"
//         />
//         <motion.div
//           animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }}
//           transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
//           className="absolute top-40 right-20 w-6 h-6 bg-coral-400 rounded-full opacity-40"
//         />
//         <motion.div
//           animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
//           transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
//           className="absolute bottom-40 left-20 w-5 h-5 bg-[#0e4131] rounded-full opacity-50"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-center">
//         <div className="text-center text-white max-w-5xl mx-auto px-4">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.8, delay: 0.3 }}
//                 className="mb-6"
//               >
//                 <Sparkles className="h-12 w-12 text-[#0e4131] mx-auto mb-4 animate-pulse" />
//                 <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                   <span className="bg-gradient-to-r from-white via-paradise-200 to-tropical-200 bg-clip-text text-transparent">
//                     {heroSlides[currentSlide].title}
//                   </span>
//                 </h1>
//               </motion.div>

//               <motion.p
//                 className="text-xl md:text-3xl mb-10 text-white/90 font-light leading-relaxed"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//               >
//                 {heroSlides[currentSlide].subtitle}
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.7 }}
//                 className="flex flex-col sm:flex-row gap-6 justify-center"
//               >
//                 <Link href={heroSlides[currentSlide].ctaLink}>
//                   <Button
//                     size="lg"
//                     className="bg-gradient-to-r from-[#0e4131] to-[#4b5563] hover:from-[#0e4131] hover:to-[#4b5563] text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105"
//                   >
//                     <Sparkles className="mr-3 h-6 w-6" />
//                     {heroSlides[currentSlide].cta}
//                   </Button>
//                 </Link>
//                 <Link href="/contact">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="glass border-2 border-white/30 text-white hover:bg-white/20 px-10 py-6 text-xl font-semibold rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 bg-transparent"
//                   >
//                     Contact Us
//                   </Button>
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 -translate-y-1/2 z-20 glass rounded-full p-4 transition-all duration-300 hover:bg-white/20"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         <ChevronLeft className="h-8 w-8 text-white" />
//       </motion.button>

//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 -translate-y-1/2 z-20 glass rounded-full p-4 transition-all duration-300 hover:bg-white/20"
//         onMouseEnter={() => setIsAutoPlaying(false)}
//         onMouseLeave={() => setIsAutoPlaying(true)}
//       >
//         <ChevronRight className="h-8 w-8 text-white" />
//       </motion.button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-4">
//         {heroSlides.map((_, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.8 }}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-4 h-4 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? "bg-gradient-to-r from-paradise-400 to-tropical-400 scale-125 shadow-glow"
//                 : "bg-white/50 hover:bg-white/75"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Auto-play control */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//         className="absolute bottom-10 right-10 z-20 glass rounded-full p-4 transition-all duration-300 hover:bg-white/20"
//       >
//         {isAutoPlaying ? (
//           <div className="h-6 w-6 bg-gradient-to-r from-paradise-400 to-coral-400 rounded-sm" />
//         ) : (
//           <Play className="h-6 w-6 text-white" />
//         )}
//       </motion.button>
//     </section>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    id: 1,
    title: " Welcome to Wilderness Retreat",
    subtitle: "Discover the untouched beauty of Kanha Kisli National Park in the heart of Madhya Pradesh",
    cta: "Book Your Stay",
    ctaLink: "/booking",
  },
  {
    id: 2,
    title: "Experience the Wild Like Never Before",
    subtitle: "Embark on thrilling jungle safaris and witness the majestic wildlife of Kanha",
    cta: "Explore Safari",
    ctaLink: "/accommodations",
  }
  
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
      >
        <source src="/video/video_bg.mp4" type="video/mp4" />
        {/* <source src="/video/neture.webm" type="video/webm" /> */}
      </video>

      {/*Dark Overlay */}
      <div className="absolute inset-0  z-0"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-10 w-4 h-4 bg-white/40 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-5xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="h-10 w-10 mx-auto mb-6 mt-20 animate-pulse" />

              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {heroSlides[currentSlide].title}
              </h1>

              <p className="text-sm md:text-base mb-10 text-white/40">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href={heroSlides[currentSlide].ctaLink}>
                  <Button className="px-7  text-lg text-white rounded-xl bg-gradient-to-r from-[#0b3d2e] via-[#145c46] to-[#6b7280]
hover:from-[#145c46] hover:to-[#9ca3af]
transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
                    {heroSlides[currentSlide].cta}
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="px-8  text-lg border-white text-[#0e4131] hover:bg-white/40"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white"
      >
        <ChevronRight size={40} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Play/Pause */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-10 right-10 z-30 text-white"
      >
        {isAutoPlaying ? "Pause" : <Play />}
      </button>
    </section>
  )
}