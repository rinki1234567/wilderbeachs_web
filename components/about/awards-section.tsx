// // "use client"

// // import { motion } from "framer-motion"
// // import { Award, Trophy, Star, Medal, Leaf, Shield, Users, Globe, Heart } from "lucide-react"
// // import Image from "next/image"

// // const awards = [
// //   {
// //     id: 1,
// //     title: "World's Best Resort",
// //     organization: "Travel + Leisure",
// //     year: "2023",
// //     description: "Recognized as the world's premier luxury resort destination.",
// //     icon: Trophy,
// //     image: "/placeholder.svg?height=100&width=100",
// //     gradient: "from-yellow-400 via-amber-500 to-orange-600",
// //     iconBg: "bg-gradient-to-br from-yellow-300 to-orange-400",
// //     iconColor: "text-white",
// //     shadow: "shadow-orange-300",
// //   },
// //   {
// //     id: 2,
// //     title: "Sustainable Tourism Award",
// //     organization: "Green Globe Certification",
// //     year: "2023",
// //     description: "Excellence in environmental stewardship and sustainable practices.",
// //     icon: Leaf,
// //     image: "/placeholder.svg?height=100&width=100",
// //     gradient: "from-emerald-400 via-green-500 to-teal-600",
// //     iconBg: "bg-gradient-to-br from-emerald-300 to-teal-400",
// //     iconColor: "text-white",
// //     shadow: "shadow-teal-300",
// //   },
// //   {
// //     id: 3,
// //     title: "Best Luxury Spa Resort",
// //     organization: "Spa & Wellness Association",
// //     year: "2022",
// //     description: "Outstanding wellness facilities and spa treatments.",
// //     icon: Star,
// //     image: "/placeholder.svg?height=100&width=100",
// //     gradient: "from-purple-400 via-violet-500 to-pink-600",
// //     iconBg: "bg-gradient-to-br from-purple-300 to-pink-400",
// //     iconColor: "text-white",
// //     shadow: "shadow-pink-300",
// //   },
// //   {
// //     id: 4,
// //     title: "Culinary Excellence Award",
// //     organization: "International Culinary Institute",
// //     year: "2022",
// //     description: "Recognition for exceptional dining experiences and culinary innovation.",
// //     icon: Award,
// //     image: "/placeholder.svg?height=100&width=100",
// //     gradient: "from-red-400 via-rose-500 to-fuchsia-600",
// //     iconBg: "bg-gradient-to-br from-red-300 to-fuchsia-400",
// //     iconColor: "text-white",
// //     shadow: "shadow-fuchsia-300",
// //   },
// //   {
// //     id: 5,
// //     title: "Best Beach Resort",
// //     organization: "Condé Nast Traveler",
// //     year: "2021",
// //     description: "Readers' choice award for best beachfront resort experience.",
// //     icon: Medal,
// //     image: "/placeholder.svg?height=100&width=100",
// //     gradient: "from-blue-400 via-sky-500 to-cyan-600",
// //     iconBg: "bg-gradient-to-br from-blue-300 to-cyan-400",
// //     iconColor: "text-white",
// //     shadow: "shadow-cyan-300",
// //   },
// //   {
// //     id: 6,
// //     title: "Hospitality Excellence",
// //     organization: "World Tourism Organization",
// //     year: "2021",
// //     description: "Outstanding service and guest satisfaction ratings.",
// //     icon: Trophy,
// //     image: "/placeholder.svg?height=100&width=100",
// //     gradient: "from-indigo-400 via-purple-500 to-violet-600",
// //     iconBg: "bg-gradient-to-br from-indigo-300 to-violet-400",
// //     iconColor: "text-white",
// //     shadow: "shadow-violet-300",
// //   },
// // ]

// // const certifications = [
// //   {
// //     name: "Green Globe Certified",
// //     icon: Leaf,
// //     gradient: "from-green-400 to-emerald-500",
// //     iconColor: "text-white",
// //     iconBg: "bg-gradient-to-br from-green-300 to-emerald-400",
// //   },
// //   {
// //     name: "ISO 14001 Environmental Management",
// //     icon: Shield,
// //     gradient: "from-blue-400 to-cyan-500",
// //     iconColor: "text-white",
// //     iconBg: "bg-gradient-to-br from-blue-300 to-cyan-400",
// //   },
// //   {
// //     name: "LEED Gold Certified Buildings",
// //     icon: Award,
// //     gradient: "from-yellow-400 to-orange-500",
// //     iconColor: "text-white",
// //     iconBg: "bg-gradient-to-br from-yellow-300 to-orange-400",
// //   },
// //   {
// //     name: "Fair Trade Tourism Certified",
// //     icon: Users,
// //     gradient: "from-purple-400 to-pink-500",
// //     iconColor: "text-white",
// //     iconBg: "bg-gradient-to-br from-purple-300 to-pink-400",
// //   },
// //   {
// //     name: "Carbon Neutral Resort",
// //     icon: Globe,
// //     gradient: "from-gray-400 to-slate-500",
// //     iconColor: "text-white",
// //     iconBg: "bg-gradient-to-br from-gray-300 to-slate-400",
// //   },
// //   {
// //     name: "Marine Stewardship Council",
// //     icon: Heart,
// //     gradient: "from-sky-400 to-indigo-500",
// //     iconColor: "text-white",
// //     iconBg: "bg-gradient-to-br from-sky-300 to-indigo-400",
// //   },
// // ]

// // export default function AwardsSection() {
// //   return (
// //     <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
// //       {/* Background decorative elements - more vibrant and dynamic */}
// //       <div className="absolute inset-0 opacity-15">
// //         <div className="absolute top-10 left-5 w-80 h-80 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur-3xl animate-blob-1"></div>
// //         <div className="absolute bottom-5 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-3xl animate-blob-2"></div>
// //         <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full blur-3xl animate-blob-3"></div>
// //         <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full blur-3xl animate-blob-4"></div>
// //       </div>

// //       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-16"
// //         >
// //           <motion.h2
// //             className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6"
// //             initial={{ scale: 0.9 }}
// //             whileInView={{ scale: 1 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //              <h2 className="text-3xl md:text-5xl font-bold mb-8">
// //             <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
// //               Awards
// //             </span>
// //           </h2>
        
// //           </motion.h2>
// //           <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
// //             Our commitment to excellence has been recognized by leading travel and hospitality organizations worldwide.
// //           </p>
// //         </motion.div>

// //         {/* Awards Grid - more vibrant cards */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
// //           {awards.map((award, index) => (
// //             <motion.div
// //               key={award.id}
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6, delay: index * 0.1 }}
// //               whileHover={{
// //                 scale: 1.05,
// //                 y: -10,
// //                 boxShadow: `0 25px 50px -12px rgba(var(--${award.shadow.replace("shadow-", "").replace("-300", "")}-500-rgb), 0.25)`,
// //                 transition: { duration: 0.3 },
// //               }}
// //               className={`bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group border border-white/20 relative overflow-hidden`}
// //             >
// //               {/* Stronger background gradient overlay on hover */}
// //               <div
// //                 className={`absolute inset-0 bg-gradient-to-br ${award.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
// //               ></div>

// //               <div className="flex flex-col items-center justify-center mb-4 relative z-10">
// //                 <motion.div
// //                   whileHover={{ scale: 1.1, rotate: 5 }}
// //                   className={`w-24 h-24 rounded-full ${award.iconBg} flex items-center justify-center shadow-lg mb-3 transition-all duration-300`}
// //                 >
// //                   <Image
// //                     src={award.image || "/placeholder.svg"}
// //                     alt={award.organization}
// //                     width={70}
// //                     height={70}
// //                     className="rounded-lg object-contain drop-shadow-md"
// //                   />
// //                 </motion.div>
// //                 <div className="flex items-center space-x-2">
// //                   <award.icon className={`h-7 w-7 ${award.iconColor}`} />
// //                   <span className="text-lg font-bold text-slate-700">{award.year}</span>
// //                 </div>
// //               </div>
// //               <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">
// //                 {award.title}
// //               </h3>
// //               <p className="text-slate-600 font-semibold mb-3">{award.organization}</p>
// //               <p className="text-slate-700 text-sm leading-relaxed">{award.description}</p>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* Certifications - more vibrant cards */}
// //         {/* <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.8 }}
// //           className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
// //           >
// //           <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent text-center mb-8">
// //             Certifications & Memberships
// //           </h3>
// //           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
// //             {certifications.map((cert, index) => (
// //               <motion.div
// //                 key={cert.name}
// //                 initial={{ opacity: 0, scale: 0.8 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 viewport={{ once: true }}
// //                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
// //                 className={`bg-gradient-to-br from-white to-slate-50 rounded-xl p-4 text-center border border-slate-200 hover:border-slate-300 transition-all duration-300 group relative overflow-hidden`}
// //               >
// //                 <div
// //                   className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
// //                 ></div>
// //                 <motion.div
// //                   whileHover={{ scale: 1.1, rotate: 5 }}
// //                   className={`${cert.iconBg} rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 relative z-10`}
// //                 >
// //                   <cert.icon className={`h-8 w-8 ${cert.iconColor}`} />
// //                 </motion.div>
// //                 <p className="text-md font-semibold text-slate-800 relative z-10">{cert.name}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div> */}
// //       </div>
     
// //     </section>
// //   )
// // }


// "use client"

// import { motion } from "framer-motion"
// import { Award, Trophy, Star, Medal, Leaf, ArrowRight } from "lucide-react"
// import Link from "next/link"

// const awards = [
//   {
//     id: 1,
//     title: "World's Best Resort",
//     organization: "Travel + Leisure",
//     year: "2023",
//     description: "Recognized as the world's premier luxury resort destination.",
//     icon: Trophy,
//   },
//   {
//     id: 2,
//     title: "Sustainable Tourism Award",
//     organization: "Green Globe Certification",
//     year: "2023",
//     description: "Excellence in environmental stewardship and sustainable practices.",
//     icon: Leaf,
//   },
//   {
//     id: 3,
//     title: "Best Luxury Spa Resort",
//     organization: "Spa & Wellness Association",
//     year: "2022",
//     description: "Outstanding wellness facilities and spa treatments.",
//     icon: Star,
//   },

//    {
//     id: 4,
//     title: "Culinary Excellence Award",
//     organization: "International Culinary Institute",
//     year: "2022",
//     description: "Recognition for exceptional dining experiences and culinary innovation.",
//     icon: Award,
   
//   },
//   {
//     id: 5,
//     title: "Best Beach Resort",
//     organization: "Condé Nast Traveler",
//     year: "2021",
//     description: "Readers' choice award for best beachfront resort experience.",
//     icon: Medal,
    
//   },
//   {
//     id: 6,
//     title: "Hospitality Excellence",
//     organization: "World Tourism Organization",
//     year: "2021",
//     description: "Outstanding service and guest satisfaction ratings.",
//     icon: Trophy,
   
//   },
//   // ... Baki ke awards bhi same simple structure mein rakhein
// ]

// export default function AwardsSection() {
//   return (
//     <section className="py-24 bg-[#F9F8F6] relative overflow-hidden">
      
//       {/* Background Pattern - Subtle */}
//       <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/pattern.png')]" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
        
//         {/* --- HEADER --- */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <span className="text-[10px] tracking-[0.5em] uppercase text-[#A87C4F] font-bold mb-4 block">
//             Recognitions
//           </span>
//           <h2 className="text-4xl md:text-6xl font-serif text-[#112421] mb-6 lowercase ">
//             excellence <span className="text-green-800 not-italic">&</span> awards
//           </h2>
//           <div className="w-20 h-[1px] bg-[#A87C4F] mx-auto" />



//            <p className="text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
//              Our commitment to excellence has been recognized by leading travel and hospitality organizations worldwide.
//           </p>
//         </motion.div>
        

//         {/* --- AWARDS GRID --- */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {awards.map((award, index) => (
//             <motion.div
//               key={award.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               whileHover={{ y: -10 }}
//               className="group bg-white p-10 border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(17,36,33,0.1)] transition-all duration-500 relative"
//             >
//               {/* Hover Border Accent */}
//               <div className="absolute top-0 left-0 w-full h-0 bg-green-900 group-hover:h-1 transition-all duration-300" />
              
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-6 p-4 rounded-full bg-[#F9F8F6] text-[#112421] group-hover:bg-[#112421] group-hover:text-white transition-colors duration-500">
//                   <award.icon size={32} strokeWidth={1.2} />
//                 </div>
                
//                 <span className="text-[10px] tracking-widest text-[#A87C4F] font-bold uppercase mb-2">
//                   {award.year} • {award.organization}
//                 </span>
                
//                 <h3 className="text-xl font-serif text-[#112421] mb-4">
//                   {award.title}
//                 </h3>
                
//                 <p className="text-gray-500 text-sm leading-relaxed font-light">
//                   {award.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* --- AESTHETIC CONTACT CTA --- */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           className="mt-24 flex flex-col items-center"
//         >
//           <div className="flex items-center w-full max-w-4xl gap-8 mb-12">
//              <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#A87C4F]/30" />
//              <p className="text-[#112421] font-serif italic text-lg text-center px-4">
//                Ready to experience award-winning luxury?
//              </p>
//              <div className="hidden md:block flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#A87C4F]/30" />
//           </div>

//           <Link href="/contact">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="group relative bg-[#112421] text-[#E9E4D9] px-12  py-4 shadow-2xl overflow-hidden border border-white/10"
//             >
//               {/* Subtle Gloss Effect */}
//               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
//               <div className="relative flex items-center gap-6">
//                 <div className="flex flex-col items-start">
//                   <span className="text-[9px] tracking-[0.4em] uppercase text-amber-500 font-bold mb-1">
//                     get in touch
//                   </span>
//                   <span className="text-sm tracking-widest uppercase font-bold">
//                     Plan Your Visit
//                   </span>
//                 </div>
//                 <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-500">
//                   <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </div>
//             </motion.button>
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { Sun, Camera, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
export default function FinaleSection() {
  const highlights = [
    {
      title: "Best Time to Visit",
      subtitle: "October to June",
      desc: "Peak sightings occur during summer (March–May). Winters bring soft golden light and misty landscapes—magical for wildlife photographers.",
      icon: <Sun className="w-6 h-6" />,
      accent: "border-amber-600/20"
    },
    {
      title: "Why Visit?",
      subtitle: "The Soul of Kanha",
      desc: "With stunning scenery and high chances of tiger sightings, Kanha delivers one of India’s most rewarding safari experiences.",
      icon: <Camera className="w-6 h-6" />,
      accent: "border-emerald-900/20"
    }
  ]

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Background Decorative Forest Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#1a2e2a]/[0.02] -z-10" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-amber-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. SECTION HEADING (Forest Green & Gold) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-amber-700 font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">
            Plan Your Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold text-[#1a2e2a] leading-tight">
            The Essence of <span className=" text-green-900 font-semibold underline decoration-amber-100/50 underline-offset-8">Wilder Beach</span>
          </h2>
        </motion.div>

        {/* 2. INTERACTIVE HIGHLIGHTS GRID */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 mb-24">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`group relative p-10 bg-white border-l-4 ${item.accent === "border-amber-600/20" ? "border-amber-600" : "border-[#1a2e2a]"} shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-500 rounded-r-2xl overflow-hidden`}
            >
              {/* Subtle Icon Background Reveal */}
              <div className="absolute -right-8 -top-8 text-[#1a2e2a]/[0.03] scale-[4] group-hover:text-amber-600/[0.05] transition-colors duration-700 font-serif">
                {item.icon}
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-50 text-[#1a2e2a] rounded-lg group-hover:bg-amber-700 group-hover:text-white transition-all duration-500 shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="text-amber-800 font-bold text-[10px] uppercase tracking-[0.3em]">{item.title}</h4>
                </div>

                <h3 className="text-3xl font-serif text-[#1a2e2a] mb-6 leading-snug">{item.subtitle}</h3>
                
                <p className="text-slate-500 font-light leading-relaxed text-lg italic">
                  "{item.desc}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. THE "FINALE" FOOTER BOX (Effective CTA) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative bg-[#1a2e2a] rounded-[2.5rem] p-10 md:p-20 overflow-hidden shadow-2xl"
        >
          {/* Background Texture/Mist */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] rounded-full blur-[100px] -mr-40 -mt-40" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-2 text-amber-500 mb-2">
                <MapPin className="w-4 h-4 animate-bounce" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Kanha Tiger Reserve</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                Ready to Hear the <br /> <span className=" text-amber-400">Call of the Wild?</span>
              </h3>
              <p className="text-white/60 font-light max-w-md">
                Step into a world where pristine beaches meet world-class hospitality and untamed beauty.
              </p>
            </div>
            <Link href="/accommodation">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#1a2e2a" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-amber-600 text-white font-bold text-xs uppercase tracking-[0.3em] rounded-full shadow-2xl transition-all duration-500 flex items-center gap-4 group"
              >
              Start Your Escape
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* 4. FINAL AESTHETIC SIGN-OFF (Gray Text) */}
        <div className="mt-20 text-center">
          <p className="text-slate-400 font-serif italic text-sm">
            Fostering a harmonious balance between comfort, adventure, and conservation.
          </p>
          <div className="mt-6 flex justify-center gap-8 text-[9px] uppercase tracking-[0.4em] text-slate-300 font-bold">
            <span>Conservation</span>
            <span>•</span>
            <span>Wildlife</span>
            <span>•</span>
            <span>Luxury</span>
          </div>
        </div>

      </div>
    </section>
  )
}