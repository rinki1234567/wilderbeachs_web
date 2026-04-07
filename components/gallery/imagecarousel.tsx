"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Yahan apni images ke path daalein
const carouselImages = [
  "/gallery/n5.jpg",
  "/images/a1.jpg",
  "/images/a2.jpg",
  "/images/a3.jpg",
  "/about/about.jpg",
  "/about/about2.jpg",
  "/images/g4.png",
  
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5 seconds mein change hoga
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <section className=" bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header (Optional) */}
        <div className="text-center mb-12">
          <span className="text-amber-700 font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">
            Visual Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a2e2a]">
            Life at <span className="text-amber-900">Wilder Beach</span>
          </h2>
        </div>

        {/* Main Carousel Container */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden  group">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={carouselImages[currentIndex]}
                alt={`Resort Slide ${currentIndex + 1}`}
                fill
                className="object-cover"
                quality={100}
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#1a2e2a] transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#1a2e2a] transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicators (Dots) */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  currentIndex === i ? "w-8 h-2 bg-amber-500" : "w-2 h-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 flex justify-center opacity-30">
          <div className="w-24 h-[1px] bg-amber-900" />
        </div>
      </div>
    </section>
  )
}