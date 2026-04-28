"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Sparkles,
  ArrowRight,
  Mouse,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    image: "/resort1.jpg",
    title: "Paradise Awaits",
    subtitle: "Experience luxury like never before at WilderBeach Resort",
    cta: "Book Your Stay",
    ctaLink: "/booking",
  },
  {
    id: 2,
    image: "/images/a3.jpg",
    title: "Sunset Serenity",
    subtitle: "Watch breathtaking sunsets from your private villa",
    cta: "Explore Villas",
    ctaLink: "/accommodations",
  },
  {
    id: 3,
    image: "/images/g5.png",
    title: "Infinite Relaxation",
    subtitle: "Dive into our infinity pools overlooking the ocean",
    cta: "View Amenities",
    ctaLink: "/accommodations",
  },
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
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            fill
            priority
            quality={100}
            className="object-cover brightness-100 contrast-110"
          />
        </motion.div>
      </AnimatePresence>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-black/25 z-10" />

      {/* Soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.7 }}
            >
              {/* Top Tag */}
              <div className="mb-6 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  <span className="text-white text-[8px] tracking-[0.3em] uppercase">
                    Luxury Escape
                  </span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                {heroSlides[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm    md:text-sm text-white/85 max-w-2xl mx-auto leading-relaxed mb-8">
                {heroSlides[currentSlide].subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={heroSlides[currentSlide].ctaLink}>
                  <Button className="group bg-[#0e4131] text-sm font-serif  hover:bg-[#0a3125] text-white px-4 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 text-sm">
                    <Sparkles className="mr-2 h-4 w-4" />
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white/30   hover:bg-white/10 px-6 py-3 rounded-full backdrop-blur-md text-sm"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Auto Play */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-12 right-6 z-30 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition"
      >
        {isAutoPlaying ? (
          <div className="w-3 h-3 bg-white rounded-sm" />
        ) : (
          <Play className="h-4 w-4 text-white" />
        )}
      </button>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-6 z-30 flex items-center gap-2 text-white/70"
      >
        <Mouse className="h-4 w-4" />
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"

// const heroSlides = [
//   {
//     id: 1,
//     title: " Welcome to Wilderness Retreat",
//     subtitle: "Discover the untouched beauty of Kanha Kisli National Park in the heart of Madhya Pradesh",
//     cta: "Book Your Stay",
//     ctaLink: "/booking",
//   },
//   {
//     id: 2,
//     title: "Experience the Wild Like Never Before",
//     subtitle: "Embark on thrilling jungle safaris and witness the majestic wildlife of Kanha",
//     cta: "Explore Safari",
//     ctaLink: "/accommodations",
//   }
  
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

//       {/*  Background Video */}
//       <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110"
//       >
//         <source src="/video/video_bg.mp4" type="video/mp4" />
//         {/* <source src="/video/neture.webm" type="video/webm" /> */}
//       </video>

//       {/*Dark Overlay */}
//       <div className="absolute inset-0  z-0"></div>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
//         <motion.div
//           animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//           transition={{ duration: 6, repeat: Infinity }}
//           className="absolute top-20 left-10 w-4 h-4 bg-white/40 rounded-full"
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-20 h-full flex items-center justify-center">
//         <div className="text-center text-white max-w-5xl mx-auto px-4">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -50 }}
//               transition={{ duration: 0.6 }}
//             >
//               <Sparkles className="h-10 w-10 mx-auto mb-6 mt-20 animate-pulse" />

//               <h1 className="text-3xl md:text-4xl font-bold mb-6">
//                 {heroSlides[currentSlide].title}
//               </h1>

//               <p className="text-sm md:text-base mb-10 text-white/40">
//                 {heroSlides[currentSlide].subtitle}
//               </p>

//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <Link href={heroSlides[currentSlide].ctaLink}>
//                   <Button className="px-7  text-lg text-white rounded-xl bg-gradient-to-r from-[#0b3d2e] via-[#145c46] to-[#6b7280]
// hover:from-[#145c46] hover:to-[#9ca3af]
// transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105">
//                     {heroSlides[currentSlide].cta}
//                   </Button>
//                 </Link>

//                 <Link href="/contact">
//                   <Button
//                     variant="outline"
//                     className="px-8  text-lg border-white text-[#0e4131] hover:bg-white/40"
//                   >
//                     Contact Us
//                   </Button>
//                 </Link>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 -translate-y-1/2 z-30 text-white"
//       >
//         <ChevronLeft size={40} />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 -translate-y-1/2 z-30 text-white"
//       >
//         <ChevronRight size={40} />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
//         {heroSlides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full ${
//               index === currentSlide ? "bg-white" : "bg-white/50"
//             }`}
//           />
//         ))}
//       </div>

//       {/* Play/Pause */}
//       <button
//         onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//         className="absolute bottom-10 right-10 z-30 text-white"
//       >
//         {isAutoPlaying ? "Pause" : <Play />}
//       </button>
//     </section>
//   )
// }