// // "use client"

// // import { motion } from "framer-motion"
// // import Image from "next/image"
// // import { SparkleIcon  } from "lucide-react"

// // export default function CottageDetail() {
// //   return (
// //     <section className="py-24 bg-white px-6 relative overflow-hidden">
      
// //       {/* Background Subtle Pattern (Mandala/Ornament) */}
// //       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/pattern.png')]" />

// //       <div className="max-w-7xl mx-auto text-center relative z-10">
        
// //         {/* --- SMALL TOP HEADING (Amber-600) --- */}
// //         <motion.span 
// //           initial={{ opacity: 0, y: 10 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-amber-600 font-bold mb-4 block"
// //         >
// //           Accommodation
// //         </motion.span>

// //         {/* --- MAIN TITLE (Serif, Brown, Lowercase) --- */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.2 }}
// //           className="mb-12"
// //         >
// //           <h2 className="text-3xl md:text-5xl font-serif text-[#4A3728] tracking-tight">
// //             Elevated Luxury <span className="text-green-800 font-light">Cottages</span>
// //           </h2>
          
// //           {/* Decorative Subtle Line */}
// //           <div className="w-16 h-[1px] bg-amber-600 mx-auto mt-4" />
// //         </motion.div>

// //         {/* --- CONTENT BLOCK (Gray-500, Justified/Centered) --- */}
// //         <motion.div 
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           viewport={{ once: true }}
// //           transition={{ delay: 0.4 }}
// //           className="space-y-8 text-gray-600 font-light leading-relaxed max-w-4xl mx-auto text-sm md:text-base opacity-90"
// //         >
// //           <p>
// //             Experience the epitome of luxury at our Elevated Luxury Cottages, where spectacular views of the 
// //             surrounding greenery greet you, and the interiors exude the serenity of nature in soft pastel tones. 
// //             Perched ten feet above the ground on a platform, these cottages provide an extraordinary vantage 
// //             point to admire the beauty of the Kanha wilderness.
// //           </p>

// //           <p>
// //             Inside, you'll find all the amenities and comforts expected from a luxury safari lodge, ensuring a 
// //             lavish and delightful stay. However, the main highlight is the private deck, which allows you to bask 
// //             in the early morning sun while reveling in a breathtaking 180-degree view of the picturesque 
// //             landscape surrounding Kanha National Park.
// //           </p>

          
// //         </motion.div>

// //         {/* --- AESTHETIC DIVIDER & CTA HINT --- */}
// //         <div className="mt-20 pt-9 border-t border-gray-100 flex flex-col items-center">
// //           <motion.h5 
// //              initial={{ opacity: 0 }}
// //              whileInView={{ opacity: 1 }}
// //              className="text-lg font-serif text-[#4A3728] lowercase  mb-3"
// //           >
// //             experience the <span className="text-green-800 ">wilder beach way</span>
// //           </motion.h5>
          
// //           {/* Subtle Banyan Leaf Icon */}
// //           {/* <div className="relative w-10 h-10 opacity-30"> */}
// //             {/* <Image 
// //               src="/icons/leaf-center.png" // Use a watercolor banyan leaf icon here
// //               alt="decoration" 
// //               width={40} 
// //               height={40}
// //             /> */}
// //             <SparkleIcon className="w-10 h-10 text-green-800" />
// //           {/* </div> */}
// //         </div>

// //       </div>
// //     </section>
// //   )
// // }

// "use client"
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
// import Image from "next/image"
// import { useState, useRef, useEffect } from "react"
// import { ArrowRight, Sparkles, X, ChevronRight } from "lucide-react"

// // --- Content Data ---
// const cottageData = {
//   title: "Elevated Luxury Cottages",
//   accent: "Accommodation",
//   description: "Experience the epitome of luxury at our Elevated Luxury Cottages, where spectacular views of the surrounding greenery greet you.",
//   fullText: "Inside, you'll find all the amenities and comforts expected from a luxury safari lodge, ensuring a lavish and delightful stay. Perched ten feet above the ground, these cottages provide an extraordinary vantage point to admire the beauty of the Kanha wilderness.",
//   images: ["/luxuary/room1.jpg", "/luxuary/room1.jpg", "/luxuary/room3.jpg", "/images/a9.jpg"],
// };

// // --- Multi-Image Slider Component ---
// const FeatureSlider = ({ images }: { images: string[] }) => {
//   const [index, setIndex] = useState(0);
//   useEffect(() => {
//     const t = setInterval(() => setIndex((s) => (s + 1) % images.length), 4000);
//     return () => clearInterval(t);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-full overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div 
//           key={index} 
//           initial={{ opacity: 0, scale: 1.05 }} 
//           animate={{ opacity: 1, scale: 1 }} 
//           exit={{ opacity: 0 }} 
//           transition={{ duration: 1.5 }} 
//           className="absolute inset-0"
//         >
//           <Image src={images[index]} fill className="object-cover" alt="Luxury Slider" priority />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default function CottageDetail() {
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef(null);

//   // Parallax Scrolling Effects
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"]
//   });

//   const yImage = useTransform(scrollYProgress, [0, 1], [0, -60]);
//   const yText = useTransform(scrollYProgress, [0, 1], [60, -120]);

//   return (
//     <section ref={containerRef} className="py-31 bg-white px-6 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="flex flex-col md:flex-row items-center relative min-h-[600px]">
          
//           {/* 1. IMAGE BLOCK with Slider & Transparent Parda */}
//           <motion.div 
//             style={{ y: yImage }}
//             className="w-full md:w-[60%] aspect-[16/9] relative group cursor-pointer rounded-sm overflow-hidden z-10 shadow-xl"
//           >
//             <FeatureSlider images={cottageData.images} />
            
//             {/* THE TRANSPARENT PARDA (Ab transparent hai aur blur effect ke sath) */}
//             <motion.div 
//               whileHover={{ x: "100%" }}
//               transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
//               onClick={() => setIsOpen(true)}
//               className="absolute inset-0 bg-transparent z-20 flex items-center justify-center border-l border-white/20"
//             >
//               <div className="text-center">
//                 <span className="text-amber-500 text-[10px] tracking-[0.6em] uppercase block mb-4 font-bold">Reveal</span>
//                 <h3 className="text-white text-3xl font-serif italic tracking-widest drop-shadow-md">Cottage Reveal</h3>
//                 <div className="mt-6 w-12 h-[1px] bg-white/40 mx-auto" />
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* 2. TEXT BLOCK (Clickable for Detail) */}
//           <motion.div 
//             style={{ y: yText }}
//             onClick={() => setIsOpen(true)} // Click karne par detail modal open hoga
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             viewport={{ once: true }}
//             className="w-full md:w-[45%] bg-white p-10 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.12)] z-20 lg:-ml-28 border border-slate-100 cursor-pointer hover:shadow-[0_60px_120px_rgba(0,0,0,0.15)] transition-shadow duration-100"
//           >
//             <span className="text-amber-800 font-bold text-[9px] uppercase tracking-[0.4em] mb-4 block">
//               {cottageData.accent}
//             </span>
//             <h2 className="text-3xl md:text-5xl font-serif text-green-900 mb-6 leading-tight">
//               Elevated Luxury <span className=" text-amber-900">Cottages</span>
//             </h2>
//             <p className="text-slate-500 font-light leading-relaxed text-sm  mb-8">
//                "{cottageData.description}"
//             </p>
            
//             <div className="flex items-center gap-4 text-[#1a2e2a] font-bold text-[10px] uppercase tracking-[0.2em] group">
//               View Detail <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* --- FULL SCREEN DETAIL MODAL (Sliding Effect) --- */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div 
//             initial={{ y: "100%" }} // Niche se scroll hoke aayega
//             animate={{ y: 0 }} 
//             exit={{ y: "100%" }} 
//             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
//             className="fixed inset-0 z-[100] bg-white overflow-y-auto"
//           >
//             <div className="sticky top-0 w-full flex justify-end p-8 md:p-12 z-[110]">
//               <button 
//                 onClick={() => setIsOpen(false)} 
//                 className="p-4 bg-[#1a2e2a] text-white rounded-full hover:bg-amber-700 transition-colors shadow-xl"
//               >
//                 <X className="w-6 h-6" />
//               </button>
//             </div>

//             <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center ">
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.3 }}
//                 className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
//               >
//                 <Image src={cottageData.images[0]} fill className="object-cover" alt="Detail Image" />
//               </motion.div>
              
//               <div className="space-y-5">
//                 <span className="text-amber-800 font-bold tracking-[0.5em] text-[10px] uppercase">Wildlife Journal</span>
//                 <h2 className="text-3xl md:text-5xl font-serif text-green-900 leading-tight">Elevated Luxury <br/> Cottages</h2>
//                 <div className="w-24 h-[1px] bg-green-600" />
//                 <p className="text-xl font-serif text-amber-900 italic leading-relaxed">"{cottageData.description}"</p>
//                 <p className="text-sm text-slate-600 font-light leading-relaxed">{cottageData.fullText}</p>
//                 <button className="bg-[#1a2e2a] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center gap-4 hover:scale-105 transition-transform">
//                   Book Experience <ChevronRight className="w-4 h-4"/>
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }


"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Maximize2, ArrowRight, ArrowLeft } from "lucide-react"

// --- COMPONENTS IMPORT ---
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface Accommodation {
  id: string;
  title: string;
  accent: string;
  shortDesc: string;
  fullDesc: string;
  mainImage: string;
  gallery: string[];
}

const ACCOMMODATIONS: Accommodation[] = [
  {
    id: "elevated",
    title: "Luxury Cottages",
    accent: "Wilderness Stay",
    shortDesc: "Experience the epitome of luxury at our Elevated Luxury Cottages, where spectacular views greet you.",
    fullDesc: "Inside, you'll find all the amenities and comforts expected from a luxury safari lodge, ensuring a lavish and delightful stay. Perched ten feet above the ground, these cottages provide an extraordinary vantage point.",
    mainImage: "/luxuary/room1.jpg",
    gallery: ["/luxuary/room1.jpg", "/luxuary/room2.jpg", "/luxuary/room3.jpg"]
  },
  {
    id: "machan",
    title: "Luxury Machan",
    accent: "Treehouse Experience",
    shortDesc: "Live among the trees in our traditional yet luxurious Machan.",
    fullDesc: "The Machan offers a unique jungle experience with high-end interiors and a panoramic view of the river. Perfect for wildlife enthusiasts.",
    mainImage: "/luxuary/machan3.jpeg",
    gallery: ["/luxuary/machan1.jpeg", "/luxuary/machan2.jpeg", "/luxuary/machan1.jpeg"]
  },
  {
    id: "river-view",
    title: "River View Cottages",
    accent: "Riverside Serenity",
    shortDesc: "Wake up to the soothing sound of the flowing river right outside your window.",
    fullDesc: "Our River View Cottages are designed for those who seek peace and tranquility. With large glass windows and a private deck facing the Banjaar River.",
    mainImage: "/luxuary/room2.jpg",
    gallery: ["/luxuary/machan4.jpeg", "/luxuary/room2.jpg", "/luxuary/room3.jpg"]
  },
  {
    id: "deluxe",
    title: "Deluxe Rooms",
    accent: "Classic Comfort",
    shortDesc: "Elegant and spacious rooms featuring a perfect blend of heritage decor and modern amenities.",
    fullDesc: "The Deluxe Rooms provide a cozy retreat after a long day of jungle safaris. These rooms feature handcrafted wooden furniture and premium bedding.",
    mainImage: "/luxuary/delux1.jpeg", 
    gallery: ["/luxuary/delux1.jpeg", "/luxuary/delux2.jpeg", "/luxuary/delux3.jpeg"]
  }
];

export default function AccommodationSection() {
  const [selectedItem, setSelectedItem] = useState<Accommodation | null>(null);

  // Scroll management
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedItem]);

  return (
    <div className="relative min-h-screen bg-[#FDFCF7]">
      
      {/* --- GRID VIEW (Main Page) --- */}
      {!selectedItem && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Navigation />
          <section className="py-24 px-0 pt-32">
            <div className="max-w-[1440px] mx-auto">
              <div className="text-center mb-16 px-6">
                <motion.span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-amber-600 font-bold mb-4 block">
                  Wilderbeach Collection
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-serif text-[#4A3728]">Our Accommodations</h2>
              </div>

              {/* Seamless Image Grid (Fast Loading) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-white/20">
                {ACCOMMODATIONS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className="relative h-[400px] group cursor-pointer overflow-hidden bg-stone-200"
                  >
                    <Image 
                      src={item.mainImage} 
                      fill 
                      priority={index < 2} // Fast loading for first 2 images
                      sizes="(max-width: 768px) 80vw, 50vw"
                      className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
                      alt={item.title} 
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 flex flex-col items-center justify-center text-white p-6">
                      <span className="text-[9px] tracking-[0.5em] uppercase mb-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{item.accent}</span>
                      <h3 className="text-3xl md:text-4xl font-serif italic mb-6">{item.title}</h3>
                      <div className="w-12 h-12 border border-white/40 rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
         
        </motion.div>
      )}

      {/* --- DETAIL VIEW (Full Screen Overlay) --- */}
      <AnimatePresence mode="wait">
        {selectedItem && (
          <motion.div 
            key="detail"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[1000] bg-white overflow-y-auto"
          >
            {/* Nav stays constant */}
            <Navigation />

            <div className="relative">
              {/* SECTION 1: HERO IMAGE WITH TITLE OVERLAY */}
              <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-stone-100">
                <Image 
                  src={selectedItem.mainImage} 
                  fill 
                  priority // Highest priority for instant loading
                  sizes="100vw"
                  className="object-cover" 
                  alt="Hero Banner" 
                />
                
                {/* Visual Gradient for Text Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

                {/* Hero Text Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-[11px] md:text-xs tracking-[0.7em] uppercase mb-6 font-semibold"
                  >
                    {selectedItem.accent}
                  </motion.p>
                  <motion.h1 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-5xl md:text-8xl font-serif leading-tight drop-shadow-2xl mb-8"
                  >
                    {selectedItem.title}
                  </motion.h1>
                </div>

                {/* Glassmorphism Back Button */}
                <div className="absolute top-28 left-8 z-50">
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="group flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.4em] bg-white/10 hover:bg-white hover:text-black px-7 py-3 rounded-full backdrop-blur-xl transition-all border border-white/20 shadow-2xl"
                  >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to cottages
                  </button>
                </div>
              </div>

              {/* SECTION 2: DESCRIPTION (Elegant Typography) */}
              <div className="bg-white">
                <div className="max-w-5xl mx-auto px-6 py-32 text-center">
                  <div className="w-16 h-[1px] bg-amber-600/40 mx-auto mb-12" />
                  <div className="space-y-12">
                    <p className="italic font-serif text-slate-900 text-2xl md:text-4xl leading-relaxed max-w-3xl mx-auto">
                      "{selectedItem.shortDesc}"
                    </p>
                    <p className="text-slate-500 font-light text-sm md:text-base leading-loose max-w-2xl mx-auto tracking-wide">
                      {selectedItem.fullDesc}
                    </p>
                  </div>
                </div>
              </div>

              {/* SECTION 3: SEAMLESS GALLERY GRID */}
              <div className="bg-white px-[1px]  ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px]">
                  {selectedItem.gallery.map((img, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 0.985 }}
                      transition={{ duration: 0.6 }}
                      className="relative h-[400px] overflow-hidden  border-lg bg-stone-100"
                    >
                      <Image 
                        src={img} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover" 
                        alt="Interior Gallery" 
                      />
                    </motion.div>
                  ))}
                </div>
                
                {/* Luxury Footer CTA */}
                <div className="py-40 flex flex-col items-center text-center bg-[#fdfcf7]">
                  <motion.div whileInView={{ y: [20, 0], opacity: [0, 1] }} viewport={{ once: true }}>
                    <h5 className="text-2xl font-serif text-[#4A3728] mb-12 italic">
                      Ready to experience true wilderness?
                    </h5>
                    <button className="bg-[#1a2e2a] text-white px-20 py-7 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] flex items-center gap-5 hover:bg-amber-900 transition-all shadow-[0_20px_50px_rgba(26,46,42,0.3)]">
                      Reserve Your Experience <ArrowRight className="w-4 h-4"/>
                    </button>
                  </motion.div>
                </div>
              </div>

              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}