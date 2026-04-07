"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ImageCarousel from "./imagecarousel"
import { 
  X, 
  Camera, 
  ArrowRight, 
  ZoomIn, 
  Star, 
  BedDouble, 
  Compass, 
  Wind, 
  Waves 
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// 1. Categories with Icons (Matching your screenshot style)
const categories = [
  { name: "All", icon: <Star className="w-3.5 h-3.5" /> },
  { name: "Wildlife", icon: <Camera className="w-3.5 h-3.5" /> },
  { name: "Lodge Estates", icon: <BedDouble className="w-3.5 h-3.5" /> },
  { name: "Nature", icon: <Compass className="w-3.5 h-3.5" /> },
  { name: "Riverside", icon: <Waves className="w-3.5 h-3.5" /> },
];

// 2. Full Library of Images
const allImages = [
  { id: 1, src: "/images/g1.png", cat: "Wildlife", alt: "Kingfisher", featured: true },
  { id: 2, src: "/images/a2.jpg", cat: "Wildlife", alt: "Bengal Tiger", featured: false },
  { id: 3, src: "/images/a3.jpg", cat: "Wildlife", alt: "Bengal Tiger", featured: false },
  { id: 4, src: "/gallery/b1.jpg", cat: "Wildlife", alt: "Wildlife B1", featured: false },
  { id: 5, src: "/gallery/b2.jpg", cat: "Wildlife", alt: "Wildlife B2", featured: false },
  { id: 6, src: "/gallery/b3.jpg", cat: "Wildlife", alt: "Wildlife B3", featured: false },
  { id: 7, src: "/gallery/p1.jpg", cat: "Wildlife", alt: "Wildlife P1", featured: false },
  { id: 8, src: "/gallery/p2.jpg", cat: "Wildlife", alt: "Wildlife P2", featured: false },
  { id: 9, src: "/gallery/p3.jpg", cat: "Wildlife", alt: "Wildlife P3", featured: false },
  { id: 10, src: "/gallery/p4.jpg", cat: "Wildlife", alt: "Wildlife P4", featured: false },
  { id: 11, src: "/gallery/p5.jpg", cat: "Wildlife", alt: "Wildlife P5", featured: false },
  { id: 12, src: "/about/twoloin.jpg", cat: "Wildlife", alt: "Bengal Tiger", featured: false },
 
  { id: 13, src: "/images/a10.jpg", cat: "Wildlife", alt: "Bengal Tiger", featured: false },
  { id: 14, src: "/images/mission.png", cat: "Wildlife", alt: "Bengal Tiger", featured: false },
  


  { id: 15, src: "/luxuary/room1.jpg", cat: "Lodge Estates", alt: "Deluxe Sanctuary", featured: true },
  { id: 16, src: "/luxuary/room2.jpg", cat: "Lodge Estates", alt: " Cottage", featured: false },
  { id: 17, src: "/luxuary/room3.jpg", cat: "Lodge Estates", alt: "Village Machan", featured: false },
   { id: 18, src: "/images/accomodation-hero.png", cat: "Lodge Estates", alt: "Village Machan", featured: false },





 
  { id: 19, src: "/images/a1.jpg", cat: "Nature", alt: "Deep Woods Trail", featured: true },
  
  { id: 20, src: "/about/about3.jpg", cat: "Nature", alt: "Deep Woods Trail", featured: false },
  { id: 21, src: "/images/a1.jpg", cat: "Nature", alt: "Deep Woods Trail", featured: false },
  { id: 22, src: "/gallery/n1.jpg", cat: "Nature", alt: "Nature N1", featured: false },
  { id: 23, src: "/gallery/n2.jpg", cat: "Nature", alt: "Nature N2", featured: false },
  { id: 24, src: "/gallery/n5.jpg", cat: "Nature", alt: "Nature N2", featured: false },
  { id: 25, src: "/gallery/n3.jpg", cat: "Nature", alt: "Nature N3", featured: false },
  { id: 26, src: "/gallery/n4.jpg", cat: "Nature", alt: "Nature N4", featured: false },
  { id: 27, src: "/images/a1.jpg", cat: "Nature", alt: "Deep Woods Trail", featured: false },
  { id: 28, src: "/images/a1.jpg", cat: "Nature", alt: "Deep Woods Trail", featured: false },
  { id: 29, src: "/images/a9.jpg", cat: "Nature", alt: "Misty Mornings", featured: false },



  { id: 30, src: "/about/about2.jpg", cat: "Riverside", alt: "Bunjar River Banks", featured: true },
  { id: 31, src: "/gallery/r1.jpg", cat: "Riverside", alt: "River R1", featured: false },
  { id: 32, src: "/about/about.jpg", cat: "Riverside", alt: "Bunjar River Banks", featured: false},
  { id: 33, src: "/images/a5.jpg", cat: "Riverside", alt: "Sparkling Waters", featured: false },
  { id: 34, src: "/images/a7.jpg", cat: "Riverside", alt: "Sunset Reflections", featured: false },
];

export default function PhotoGallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Filter Logic: "All" show only featured, others show category specific
  const displayImages = allImages.filter(img => {
    if (activeTab === "All") return img.featured;
    return img.cat === activeTab;
  });

  return (
    <div className="bg-white min-h-screen selection:bg-amber-100 selection:text-amber-900">
      
      {/* --- HEADER SECTION --- */}
     <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden bg-[#fcfbf8]">
  
  {/* --- BACKGROUND DECORATIVE TEXT --- */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none opacity-[0.03] whitespace-nowrap">
    <h2 className="text-[15vw] font-serif italic text-[#1a2e2a]">Wilder Sanctuary</h2>
  </div>

  <motion.div 
    initial={{ opacity: 0, y: 20 }} 
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative z-10"
  >
    <span className="inline-block text-amber-700 font-bold tracking-[0.6em] text-[10px] uppercase mb-6 px-4 py-1 border-x border-amber-200">
      Visual Excellence
    </span>
    
    <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1a2e2a] leading-tight mb-8">
      The Wilder  <span className=" font-bold  text-green-900  leading-tight mb-8 font-serif">  Archive</span>
    </h1>
    
    <div className="w-20 h-[1px] bg-amber-200 mx-auto mb-5" />
    
    <p className="text-slate-500 font-light  max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
      Capturing our commitment to conservation and the raw majesty of <span className="text-[#1a2e2a] font-normal not-italic">Kanha’s wilderness</span> across every season.
    </p>
  </motion.div>

  {/* --- PREMIUM PILL-SHAPED FILTER BAR --- */}
  <div className="relative z-10 max-w-5xl mx-auto">
    <div className="flex flex-wrap justify-center gap-4 mb-20 p-3 bg-white/40 backdrop-blur-md rounded-lg border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
      {categories.map((cat, idx) => (
        <motion.button
          key={cat.name}
          onClick={() => setActiveTab(cat.name)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.05 }}
          className={`
            group flex items-center gap-3 px-8 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]
            transition-all duration-200 border
            ${
              activeTab === cat.name
                ? "bg-[#1a2e2a] text-white border-[#1a2e2a] shadow-[0_15px_30px_rgba(26,46,42,0.3)]"
                : "bg-white/80 text-slate-400 border-transparent hover:border-amber-200 hover:text-[#1a2e2a] hover:bg-white"
            }
          `}
        >
          {/* Animated Icon Container */}
          <span className={`
            text-lg transition-transform duration-500 group-hover:rotate-12
            ${activeTab === cat.name ? "text-amber-400" : "text-slate-300 group-hover:text-amber-500"}
          `}>
            {cat.icon}
          </span>
          
          {cat.name}

          {/* Active Dot Indicator */}
          {activeTab === cat.name && (
            <motion.div 
              layoutId="activeDot"
              className="w-1 h-1 bg-amber-400 rounded-full"
            />
          )}
        </motion.button>
      ))}
    </div>
  </div>

  {/* Subtle Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
</section>

      {/* --- MASONRY GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 "
        >
          <AnimatePresence mode="popLayout">
            {displayImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-64 aspect-square rounded-lg  overflow-hidden cursor-pointer group shadow-[0_20px_50px_rgba(0,0,0,0.05)] "
                onClick={() => setSelectedImg(image.src)}
              >
                <Image 
                  src={image.src} 
                  fill 
                  className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
                  alt={image.alt} 
                  quality={100}
                />
                
                {/* Modern Hover Detail Overlay */}
                <div className="absolute inset-0 bg-[#1a2e2a]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[2px]">
                  <ZoomIn className="w-8 h-8 mb-3 transform scale-50 group-hover:scale-100 transition-transform duration-500" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{image.alt}</span>
                </div>

                {/* Floating Tag */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[8px] font-bold uppercase tracking-widest text-amber-900 z-10 shadow-sm">
                  {image.cat}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <ImageCarousel/>

      {/* --- FINALE CTA SECTION --- */}
      {/* <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto bg-[#1a2e2a] rounded-[3.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          <h2 className="text-4xl md:text-7xl font-serif italic mb-10 leading-tight">Captivated by the <br/><span className="not-italic text-amber-400">Wild Beauty?</span></h2>
          <Link href="/contact">
            <button className="px-12 py-5 bg-amber-600 text-white rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#1a2e2a] transition-all flex items-center gap-4 mx-auto shadow-xl group">
              Start Your Journey <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform"/>
            </button>
          </Link>
        </div>
      </section> */}
  <section className="py-30 px-6    relative overflow-hidden bg-gray-200 selection:bg-amber-100 selection:text-amber-900">
  
  {/* 1. BACKGROUND DECORATION - Bold Editorial Structure text */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
    <span className="text-[35vw] font-serif font-black text-[#1a2e2a]/[0.02] leading-none uppercase tracking-tighter">
      Wilder
    </span>
  </div>

  {/* THE GLASS CARD */}
  <div className="max-w-6xl mx-auto relative group z-10">
    
    {/* Animated Background Gold Glows like image_6.png */}
    <div className="absolute -top-10 -left-10 w-72 h-62 bg-amber-200/30 rounded-full blur-[110px] group-hover:bg-amber-400/30 transition-all duration-1000 z-0" />
    <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-96 bg-amber-600/10 rounded-full blur-[130px] z-0" />

    {/* The Modern Transparent "Glass" Container */}
    <div className="relative bg-white/[0.05] backdrop-blur-[30px] border border-white/20 rounded-[4rem] p-16 md:p-32 text-center shadow-[0_30px_90px_rgba(0,0,0,0.06)] overflow-hidden">
      
      {/* Visual Decoration: Floating Forest Image Fragment (Grayscale) */}
      <div className="absolute -right-16 -top-16 w-60 h-60 opacity-[0.04] rotate-[15deg] grayscale pointer-events-none">
        <Image src="/about/about.jpg" fill className="object-cover rounded-full" alt="decor" />
      </div>

      {/* TEXT CONTENT - HIGH CONTRAST AGAINST GLASS */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Tagline with Gold Accent */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <Compass className="text-amber-700 w-4 h-4" />
            <span className="text-amber-800 font-bold tracking-[0.8em] text-[10px] uppercase block">
              Luxury Kanha Sanctuary
            </span>
          </div>

          {/* BOLD EDITORIAL STRUCTURED FONT - Deep Green */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a2e2a]   capitalize">
            <span className="block drop-shadow-sm text-transparent bg-clip-text bg-gradient-to-b from-[#1a2e2a] to-[#1a2e2a]/80">Captivated by</span>
            <span className=" font-bold text-amber-900 block mt-2 relative inline-block">
              The Wild Beauty?
              {/* Elegant Underline */}
              <div className="absolute -bottom-4 left-0 w-full h-[1px] bg-amber-900/10" />
            </span>
          </h2>

          {/* Clean Forest Green Separator Line */}
          <div className="w-16 h-[1px] bg-[#1a2e2a]/10 mx-auto mb-12" />

          {/* Clean Description */}
          <p className="text-slate-500 font-light text-xl max-w-2xl mx-auto leading-relaxed mb-16 italic font-serif opacity-80">
            Your journey into the heart of wilderness begins here. Step away from the noise and reconnect with the raw soul of nature.
          </p>

          {/* THE BOLD MODER CTA BUTTON - Transparent Fill Interaction */}
          <Link href="/contact" className="inline-block relative z-20">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative px-16 py-5 overflow-hidden rounded-full border border-[#1a2e2a] text-[#1a2e2a] font-bold uppercase tracking-[0.4em] text-[11px] shadow-2xl transition-all duration-700"
            >
              {/* Button Hover Fill Effect */}
              <div className="absolute inset-0 w-0 bg-[#1a2e2a] transition-all duration-700 ease-out group-hover:w-full z-0" />
              
              <span className="relative z-10 group-hover:text-white flex items-center gap-6">
                Start Your Journey 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2  font-semibold transition-transform duration-500" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Minimalist Editorial Details like coordinates */}
      <div className=" pt-10 border-t border-[#1a2e2a]/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 text-center">
        <div className="text-[11px] text-green-900 tracking-[0.5em] uppercase font-bold">Kanha Sanctuary • M.P.</div>
       
        <div className="text-[11px] text-green-900 tracking-[0.5em] uppercase font-bold">Est. 2024</div>
      </div>
    </div>
  </div>
</section>

      {/* --- PREMIUM LIGHTBOX --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white p-4 bg-white/5 rounded-full hover:bg-white/20 transition-all border border-white/10 group">
              <X className="w-8 h-8 group-hover:rotate-90 transition-transform" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-[80vh] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={selectedImg} fill className="object-contain" alt="Gallery View" priority quality={100} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  
    </div>
  )
}