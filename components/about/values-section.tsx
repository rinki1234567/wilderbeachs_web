
// "use client"

// import { motion } from "framer-motion"
// import { Heart, Leaf, Star, Users, Shield, Globe } from "lucide-react"

// const values = [
//   {
//     icon: Heart,
//     title: "Exceptional Service",
//     description: "We believe in going above and beyond to create memorable experiences for every guest.",
//     gradient: "from-rose-400 via-pink-500 to-red-500",
//     bgGradient: "from-rose-50 to-pink-100",
//     iconBg: "from-rose-400 to-pink-500",
//     shadowColor: "shadow-rose-200",
//   },
//   {
//     icon: Leaf,
//     title: "Environmental Stewardship",
//     description: "Committed to preserving our natural paradise through sustainable practices and conservation.",
//     gradient: "from-emerald-400 via-green-500 to-teal-500",
//     bgGradient: "from-emerald-50 to-green-100",
//     iconBg: "from-emerald-400 to-teal-500",
//     shadowColor: "shadow-emerald-200",
//   },
//   {
//     icon: Star,
//     title: "Excellence in Everything",
//     description: "From our accommodations to our cuisine, we maintain the highest standards of quality.",
//     gradient: "from-amber-400 via-yellow-500 to-orange-500",
//     bgGradient: "from-amber-50 to-yellow-100",
//     iconBg: "from-amber-400 to-orange-500",
//     shadowColor: "shadow-amber-200",
//   },
//   {
//     icon: Users,
//     title: "Community Partnership",
//     description: "Supporting local communities and celebrating the rich culture of our island home.",
//     gradient: "from-purple-400 via-violet-500 to-indigo-500",
//     bgGradient: "from-purple-50 to-violet-100",
//     iconBg: "from-purple-400 to-indigo-500",
//     shadowColor: "shadow-purple-200",
//   },
//   {
//     icon: Shield,
//     title: "Safety & Security",
//     description: "Ensuring the safety and well-being of our guests and team members is our top priority.",
//     gradient: "from-blue-400 via-cyan-500 to-teal-500",
//     bgGradient: "from-blue-50 to-cyan-100",
//     iconBg: "from-blue-400 to-cyan-500",
//     shadowColor: "shadow-blue-200",
//   },
//   {
//     icon: Globe,
//     title: "Global Hospitality",
//     description: "Welcoming guests from around the world with warmth, respect, and genuine care.",
//     gradient: "from-orange-400 via-red-500 to-pink-500",
//     bgGradient: "from-orange-50 to-red-100",
//     iconBg: "from-orange-400 to-pink-500",
//     shadowColor: "shadow-orange-200",
//   },
// ]

// export default function ValuesSection() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6"
//             initial={{ scale: 0.9 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <p className="text-3xl md:text-5xl font-bold mb-8">
//             <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
//              Our Values
//             </span>
//           </p>
            
//           </motion.h2>
//           <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
//             These core values guide everything we do and shape the exceptional experiences we create for our guests.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {values.map((value, index) => (
//             <motion.div
//               key={value.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{
//                 scale: 1.05,
//                 y: -10,
//                 transition: { duration: 0.3 },
//               }}
//               className={`bg-gradient-to-br ${value.bgGradient} backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl ${value.shadowColor} transition-all duration-500 text-center group border border-white/20 relative overflow-hidden`}
//             >
//               {/* Card background glow effect */}
//               <div
//                 className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
//               ></div>

//               <motion.div
//                 whileHover={{
//                   scale: 1.2,
//                   rotate: 10,
//                   transition: { duration: 0.3 },
//                 }}
//                 className={`bg-gradient-to-br ${value.iconBg} rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative`}
//               >
//                 <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
//                   <value.icon className="h-10 w-10 text-white drop-shadow-sm" />
//                 </motion.div>

//                 {/* Icon glow effect */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${value.iconBg} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
//                 ></div>
//               </motion.div>

//               <motion.h3
//                 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 {value.title}
//               </motion.h3>

//               <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
//                 {value.description}
//               </p>

//               {/* Decorative corner elements */}
//               <div
//                 className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${value.gradient} opacity-10 rounded-bl-full`}
//               ></div>
//               <div
//                 className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${value.gradient} opacity-10 rounded-tr-full`}
//               ></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Enhanced Mission Statement */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="mt-20 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl"
//         >
//           {/* Background pattern */}
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
//             <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
//             <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
//           </div>

//           <motion.h3
//             className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
//             initial={{ scale: 0.9 }}
//             whileInView={{ scale: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             Our Mission
//           </motion.h3>

//           <motion.p
//             className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95 relative z-10"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 0.95 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             "To create extraordinary experiences that inspire, rejuvenate, and connect our guests with the natural
//             beauty and rich culture of our tropical paradise, while setting new standards for luxury hospitality and
//             environmental responsibility."
//           </motion.p>

//           {/* Decorative elements */}
//           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400"></div>
//           <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-l from-blue-400 via-teal-400 to-green-400"></div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// import { motion } from "framer-motion"

// export default function ValuesSection() {
//   return (
//     <section className="py-24 bg-[#112421] text-white relative">
//       <div className="max-w-5xl mx-auto px-6">
//         <motion.div 
//           className="relative border border-white/10 p-12 md:p-24 text-center bg-black/10 backdrop-blur-sm"
//           initial={{ scale: 0.95, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//         >
//           {/* Decorative Corner Lines */}
//           <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-amber-600" />
//           <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-amber-600" />

//           <h2 className="text-[10px] tracking-[0.6em] uppercase text-amber-500 font-bold mb-10">Our Mission</h2>
//           <p className="text-2xl md:text-4xl font-serif italic leading-snug opacity-90 max-w-3xl mx-auto">
//             At  Wilder Beach's Retreat , we are committed to creating a sanctuary where nature thrives and guests 
//             reconnect with the wild. Our mission is to provide an immersive wildlife experience while championing
//              sustainability and eco-friendly practices. From conserving local habitats to minimizing our environmental footprint, every step we take is guided by respect for the planet and its creatures. We strive to inspire a deeper appreciation for wildlife, fostering a harmonious balance between comfort, adventure, and conservation
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LuxuryMission() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={containerRef} className="relative py-32 bg-[#050d0c] overflow-hidden">
      
      {/* 1. Large Background Floating Text (The "Secret" of Luxury UI) */}
      <motion.h2 
        style={{ y: y1 }}
        className="absolute top-20 left-0 text-[15vw] font-serif font-black text-white/[0.02] whitespace-nowrap leading-none select-none pointer-events-none"
      >
        CONSERVATION • WILDLIFE • LUXURY
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-4 items-center">
          
          {/* Left Side: Editorial Typography */}
          <div className="lg:col-span-6 z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-amber-600" />
                <span className="text-amber-500 uppercase tracking-[0.6em] text-[10px] font-bold">Our Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-[1.1] mb-10">
                Where the <span className="text-amber-200">Wild</span> <br />
                Finds Its <span className="text-amber-600 underline decoration-1 underline-offset-8 ">Soul</span>.
              </h2>

              <div className="relative p-8 md:p-12 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden group">
                {/* Animated Gradient Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <p className="relative text-sm md:text-base text-stone-200 font-light leading-relaxed  ">
                  At  Wilder Beach's Retreat , we are committed to creating a sanctuary where nature thrives and guests reconnect with the wild. Our mission is to provide an immersive wildlife experience while championing sustainability and eco-friendly practices. From conserving local habitats to minimizing our environmental footprint, every step we take is guided by respect for the planet and its creatures. We strive to inspire a deeper appreciation for wildlife, 
                  fostering a harmonious balance between comfort, adventure, and conservation
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Parallax Image Reveal */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            <motion.div 
              style={{ y: y2 }}
              className="relative w-full aspect-video md:aspect-[5/5] rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <img 
                src="/about/about.jpg" 
                alt="Nature"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d0c] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Floating Achievement/Vision Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-10 -right-4 md:-right-10 p-8 bg-[#1a2e2a] border border-amber-600/30 rounded-2xl shadow-2xl max-w-xs z-30"
            >
              <div className="text-amber-500 mb-2">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
              </div>
              <h4 className="text-white font-serif text-lg mb-2">Our Vision</h4>
              <p className="text-stone-400 text-xs leading-relaxed uppercase tracking-wider">
                Fostering a harmonious balance between comfort, adventure, and conservation.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Bottom Feature Grid - Minimalist */}
        <div className="grid md:grid-cols-3 gap-12 mt-32 border-t border-white/5 pt-16">
           <div className="space-y-4">
              {/* <span className="text-amber-600 font-bold text-2xl">01</span> */}
              <h5 className="text-white font-serif text-xl italic">Sustainability</h5>
              <p className="text-stone-500 text-sm">Championing eco-friendly practices to protect our local habitats.</p>
           </div>
           <div className="space-y-4">
              {/* <span className="text-amber-600 font-bold text-2xl">02</span> */}
              <h5 className="text-white font-serif text-xl italic">Wild Experience</h5>
              <p className="text-stone-500 text-sm">Immersive wildlife encounters guided by respect for the planet.</p>
           </div>
           <div className="space-y-4">
              {/* <span className="text-amber-600 font-bold text-2xl">03</span> */}
              <h5 className="text-white font-serif text-xl italic">Modern Comfort</h5>
              <p className="text-stone-500 text-sm">Where luxury meets the raw beauty of the wilderness.</p>
           </div>
        </div>
      </div>
    </section>
  );
}