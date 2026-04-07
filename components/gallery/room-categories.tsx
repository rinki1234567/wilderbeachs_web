"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  BedDouble, 
  Wind, 
  Star, 
  MapPin, 
  Compass
} from "lucide-react"
import Link from "next/link"

const roomCategories = [
  {
    id: "delux",
    title: "The Deluxe Sanctuary",
    desc: "A spacious blend of traditional Kanha art and modern amenities. Private sit-outs to hear the forest whisper.",
    images: ["/luxuary/room1.jpg", "/images/a2.jpg", "/images/a10.jpg"],
    accent: "Luxury Living",
    overlayText: "Elegance in the Wild",
    features: ["King Bed", "Private Balcony", "En-suite Bath", "Forest View"]
  },
  {
    id: "cottage",
    title: "Riverside Cottage",
    desc: "Secluded cottages on the Bunjar river banks. Golden hour reflections right at your doorstep.",
    images: ["/images/tree.jpg", "/images/a9.jpg", "/about/about2.jpg"],
    accent: "River View",
    overlayText: "Riverside Serenity",
    features: ["Riverside Deck", "Luxury Bath", "Mini Bar", "King Size Bed"]
  },
  {
    id: "machan",
    title: "Village Machan",
    desc: "Experience the treehouse vibe with a modern twist. A front-row view to the stars and the canopy.",
    images: ["/images/a3.jpg", "/images/a9.jpg", "/luxuary/room1.jpg"],
    accent: "Forest Canopy",
    overlayText: "Touch the Sky",
    features: ["Stargazing Deck", "Eco-friendly", "Open Shower", "Bird's Eye View"]
  }
];

const CardSlider = ({ images, overlayText }: { images: string[]; overlayText: string }) => {
  const [idx, setIdx] = useState(0);
  const next = (e:any) => { e.stopPropagation(); setIdx((prev) => (prev + 1) % images.length); };
  const prev = (e:any) => { e.stopPropagation(); setIdx((prev) => (prev - 1 + images.length) % images.length); };

  return (
    <div className="relative w-full h-full group/slider">
      <AnimatePresence mode="wait">
        <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0">
          <Image src={images[idx]} fill className="object-cover transition-transform duration-[3s] group-hover/slider:scale-110" alt="Room" />
        </motion.div>
      </AnimatePresence>
      
      {/* Overlay Text on Top of Image */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <span className="text-white font-serif italic text-2xl tracking-widest opacity-0 group-hover/slider:opacity-100 transition-opacity duration-700 select-none">
          {overlayText}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/slider:opacity-100 transition-opacity">
        <button onClick={prev} className="p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={next} className="p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default function RoomJournal() {
  const [selectedRoom, setSelectedRoom] = useState<typeof roomCategories[number] | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const slide = (direction: string) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header - Forest Green, Grey & Gold Theme */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-[#1a2e2a]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="text-amber-600 w-4 h-4" />
              <span className="text-amber-700 font-bold tracking-[0.4em] text-[10px] uppercase block">
                Luxury Accommodations
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif leading-none mb-6">
              Lodge <span className="italic text-amber-900 font-light">Estates</span>
            </h2>
            <p className="text-slate-400 font-light italic max-w-md border-l border-amber-600/30 pl-6 py-1 leading-relaxed">
              Experience the art of slow living amidst the raw majesty of Kanha’s wilderness.
            </p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => slide("left")} className="p-5 rounded-full border border-slate-100 hover:bg-[#1a2e2a] hover:text-white transition-all shadow-sm"><ChevronLeft className="w-5 h-5"/></button>
            <button onClick={() => slide("right")} className="p-5 rounded-full border border-slate-100 hover:bg-[#1a2e2a] hover:text-white transition-all shadow-sm"><ChevronRight className="w-5 h-5"/></button>
          </div>
        </div>

        {/* Horizontal Scroll Area - no-scrollbar implemented */}
        <div 
          ref={scrollRef} 
          className="flex gap-8 overflow-x-auto no-scrollbar pb-10 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {roomCategories.map((room) => (
            <motion.div 
              key={room.id}
              className="min-w-[320px] md:min-w-[420px] group cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden mb-8 shadow-2xl">
                <CardSlider images={room.images} overlayText={room.overlayText} />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] text-amber-900 z-10 shadow-sm">
                  {room.accent}
                </div>
              </div>
              
              <div className="space-y-4 px-2">
                <h4 className="text-3xl font-serif text-[#1a2e2a] group-hover:text-amber-900 transition-colors duration-500">{room.title}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed italic line-clamp-2">"{room.desc}"</p>
                <div className="flex items-center gap-4 text-amber-800 text-[10px] font-bold uppercase tracking-[0.3em] pt-2">
                  <span>Explore Estate</span>
                  <div className="w-8 h-[1px] bg-amber-600/40 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULL SCREEN MODAL */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white overflow-hidden"
          >
            <button 
              onClick={() => setSelectedRoom(null)} 
              className="fixed top-8 right-8 p-4 bg-[#1a2e2a] text-white rounded-full z-[110] shadow-2xl hover:scale-110 transition-all group"
            >
              <X className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="flex flex-col lg:flex-row h-screen overflow-y-auto lg:overflow-hidden">
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-full lg:w-[60%] h-[50vh] lg:h-full relative"
              >
                <Image src={selectedRoom.images[0]} fill className="object-cover" alt="Full view" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </motion.div>

              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full lg:w-[40%] flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white"
              >
                <div className="max-w-md mx-auto lg:mx-0 space-y-12">
                  <div className="space-y-6">
                    <span className="text-amber-700 font-bold tracking-[0.5em] text-[10px] uppercase block">{selectedRoom.accent}</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-[#1a2e2a] leading-none">{selectedRoom.title}</h2>
                    <div className="w-16 h-[2px] bg-amber-600" />
                  </div>
                  <p className="text-xl text-slate-500 font-light italic font-serif leading-relaxed italic opacity-80">"{selectedRoom.desc}"</p>
                  
                  <div className="pt-6 space-y-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-300 border-b border-slate-100 pb-3">Lodge Amenities</h4>
                    <div className="grid grid-cols-2 gap-y-5 gap-x-8">
                      {selectedRoom.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-amber-600 rounded-full" />
                          <span className="text-[12px] font-medium text-[#1a2e2a] tracking-wide uppercase">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-10">
                    <Link href="/contact" className="block">
                      <button className="w-full px-12 py-5 bg-[#1a2e2a] text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-amber-900 transition-all shadow-xl flex items-center justify-center gap-4 group">
                        Book This Estate <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}