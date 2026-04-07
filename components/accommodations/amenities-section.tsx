// // // "use client"

// // // import { motion } from "framer-motion"
// // // import {
// // //   Wifi,
// // //   Car,
// // //   Coffee,
// // //   Waves,
// // //   Utensils,
// // //   Dumbbell,
// // //   SpadeIcon as Spa,
// // //   Shield,
// // //   Phone,
// // //   Shirt,
// // //   Wind,
// // //   Tv,
// // //   BarChart,
// // //   ParkingCircle,
// // // } from "lucide-react"

// // // const amenities = [
// // //   { icon: Dumbbell, name: "Gym", description: "State-of-the-art equipment and classes" },
// // //   { icon: Coffee, name: "24/7 Room Service", description: "Gourmet dining delivered to your room" },
// // //   { icon: Utensils, name: "Fine Dining", description: "Award-winning restaurants on-site" },
// // //   // { icon: Dumbbell, name: "Fitness Center", description: "State-of-the-art equipment and classes" },
// // //   { icon: BarChart, name: "Bar", description: "Full-service spa and wellness center" },
// // //   { icon: Shield, name: "24/7 Security", description: "Round-the-clock security and safety" },
// // //   { icon: ParkingCircle, name: "Parking", description: "Parking service" },
// // //   { icon: Shirt, name: "Campfire area", description: "Campfire area" },
// // //   // { icon: Wind, name: "Air Conditioning", description: "Climate control in all rooms" },
// // //   { icon: Tv, name: "Entertainment", description: "Smart TVs with streaming services" },
// // // ]

// // // export default function AmenitiesSection() {
// // //   return (
// // //     <section className="py-20 bg-gradient-to-b from-ocean-50 to-white">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 50 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           viewport={{ once: true }}
// // //           transition={{ duration: 0.8 }}
// // //           className="text-center mb-16"
// // //         >
// // //           <h2 className="text-4xl md:text-5xl font-bold text-ocean-950 mb-6">World-Class Amenities</h2>
// // //           <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
// // //             Every detail has been carefully considered to ensure your stay exceeds expectations.
// // //           </p>
// // //         </motion.div>

// // //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// // //           {amenities.map((amenity, index) => (
// // //             <motion.div
// // //               key={amenity.name}
// // //               initial={{ opacity: 0, scale: 0.8 }}
// // //               whileInView={{ opacity: 1, scale: 1 }}
// // //               viewport={{ once: true }}
// // //               transition={{ duration: 0.5, delay: index * 0.1 }}
// // //               whileHover={{ scale: 1.05, y: -5 }}
// // //               className="text-center group cursor-pointer"
// // //             >
// // //               <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4">
// // //                 <amenity.icon className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
// // //                 <h3 className="font-bold text-ocean-950 mb-2">{amenity.name}</h3>
// // //                 <p className="text-sm text-ocean-700 leading-relaxed">{amenity.description}</p>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   )
// // // }


// // "use client"

// // import { useState } from "react"
// // import { motion } from "framer-motion"
// // import {
// //   Coffee,
// //   Utensils,
// //   Dumbbell,
// //   Shield,
// //   Shirt,
// //   Tv,
// //   BarChart,
// //   ParkingCircle,
// // } from "lucide-react"

// // const amenities = [
// //   { icon: Dumbbell, name: "Gym", description: "Modern Equipment" },
// //   { icon: Coffee, name: "24/7 Room Service", description: "Gourmet Dining" },
// //   { icon: Utensils, name: "Fine Dining", description: "Award-winning" },
// //   { icon: BarChart, name: "Bar", description: "Premium Spirits" },
// //   { icon: Shield, name: "24/7 Security", description: "Safe & Secure" },
// //   { icon: ParkingCircle, name: "Parking", description: "Valet Parking" },
// //   { icon: Shirt, name: "Campfire", description: "Cozy Evenings" },
// //   { icon: Tv, name: "Entertainment", description: "Smart Streaming" },
// // ]

// // export default function AmenitiesSection() {
// //   const [isPaused, setIsPaused] = useState(false)
// //   const duplicatedAmenities = [...amenities, ...amenities]

// //   return (
// //     <section className="py-24 bg-[#f8fafc] overflow-hidden">
// //       <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
// //         <motion.h2 
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
// //         >
// //           World-Class Amenities
// //         </motion.h2>
// //         <p className="text-slate-600">Hover on a card to explore details</p>
// //       </div>

// //       {/* Infinite Scroll Container */}
// //       <div className="relative flex">
// //         <motion.div
// //           className="flex gap-6 py-10"
// //           animate={{
// //             x: isPaused ? 0 : ["0%", "-50%"],
// //           }}
// //           transition={{
// //             ease: "linear",
// //             duration: 25,
// //             repeat: Infinity,
// //           }}
// //           onMouseEnter={() => setIsPaused(true)}
// //           onMouseLeave={() => setIsPaused(false)}
// //           style={{ display: 'flex', width: 'fit-content' }}
// //         >
// //           {duplicatedAmenities.map((amenity, index) => (
// //             <motion.div
// //               key={index}
// //               whileHover={{ 
// //                 scale: 1.1, 
// //                 rotateY: 10,
// //                 z: 50
// //               }}
// //               className="w-64 flex-shrink-0 bg-white border border-slate-200 rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer group"
// //             >
// //               {/* Icon with Glow */}
// //               <div className="relative mb-6 flex justify-center">
// //                 <div className="absolute inset-0 bg-ocean-400 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
// //                 <div className="relative p-4 bg-slate-50 rounded-2xl group-hover:bg-ocean-600 group-hover:text-white transition-colors duration-300">
// //                   <amenity.icon className="h-8 w-8 text-ocean-600 group-hover:text-white" />
// //                 </div>
// //               </div>

// //               <div className="text-center">
// //                 <h3 className="font-bold text-slate-900 text-lg mb-2">{amenity.name}</h3>
// //                 <p className="text-sm text-slate-500 leading-relaxed">
// //                   {amenity.description}
// //                 </p>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* Fading Edges */}
// //         <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#f8fafc] to-transparent z-10" />
// //         <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#f8fafc] to-transparent z-10" />
// //       </div>
// //     </section>
// //   )
// // }


// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import {
//   Coffee,
//   Utensils,
//   Dumbbell,
//   Shield,
//   Flame, // Campfire ke liye better icon
//   Tv,
//   Wine, // Bar ke liye better icon
//   ParkingCircle,
//   Leaf,
// } from "lucide-react"

// const amenities = [
//   { icon: Dumbbell, name: "wellness studio", description: "State-of-the-art fitness & yoga" },
//   { icon: Coffee, name: "24/7 in-room dining", description: "Gourmet culinary experiences" },
//   { icon: Utensils, name: "fine dining", description: "Authentic flavors of Kanha" },
//   { icon: Wine, name: "the safari bar", description: "Premium spirits & sundowners" },
//   { icon: Shield, name: "secure sanctuary", description: "24/7 discreet security" },
//   { icon: ParkingCircle, name: "valet parking", description: "Complimentary secure parking" },
//   { icon: Flame, name: "starlit campfire", description: "Cozy evenings under the sky" },
//   { icon: Tv, name: "digital suite", description: "Smart streaming & connectivity" },
// ]

// export default function AmenitiesSection() {
//   const [isPaused, setIsPaused] = useState(false)
//   const duplicatedAmenities = [...amenities, ...amenities, ...amenities]

//   return (
//     <section className="py-24 bg-gray-100 overflow-hidden">
//       {/* --- Section Header --- */}
//       <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//         >
//           <span className="text-[10px] tracking-[0.5em] uppercase text-[#A87C4F] font-bold mb-4 block">
//             Enhancing Your Stay
//           </span>
//           <h2 className="text-4xl md:text-5xl font-serif text-[#112421] lowercase  mb-6">
//             world-class <span className="text-green-900 not-italic font-light">amenities</span>
//           </h2>
//           <div className="w-20 h-[1px] bg-[#0B2B26] mx-auto mb-8" />
//           <p className="text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
//             Every detail at Wilder Beach is meticulously curated to ensure your wilderness 
//             experience is as seamless as it is luxurious.
//           </p>
//         </motion.div>
//       </div>

//       {/* --- Infinite Smooth Scroll Container --- */}
//       <div className="relative group">
//         <motion.div
//           className="flex gap-8 py-10"
//           animate={{
//             x: isPaused ? 0 : ["0%", "-33.33%"], // 3x data for smoother loop
//           }}
//           transition={{
//             ease: "linear",
//             duration: 40, // Bohot slow aur smooth movement
//             repeat: Infinity,
//           }}
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           style={{ display: 'flex', width: 'fit-content' }}
//         >
//           {duplicatedAmenities.map((amenity, index) => (
//             <div
//               key={index}
//               className="w-72 flex-shrink-0 bg-white border border-gray-100 rounded-none p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(17,36,33,0.1)] group cursor-default"
//             >
//               {/* Icon Container */}
//               <div className="relative mb-8 flex justify-center">
//                 <div className="p-5 bg-[#F9F8F6] text-[#112421] rounded-full transition-colors duration-500 group-hover:bg-[#112421] group-hover:text-[#E9E4D9]">
//                   <amenity.icon size={28} strokeWidth={1.2} />
//                 </div>
//               </div>

//               {/* Text Content */}
//               <div className="text-center">
//                 <h3 className="font-serif text-[#112421] text-xl lowercase mb-3">
//                   {amenity.name}
//                 </h3>
//                 <p className="text-[11px] uppercase tracking-widest text-[#A87C4F] font-bold mb-4">
//                   {amenity.description}
//                 </p>
//                 <div className="w-8 h-[1px] bg-gray-100 mx-auto transition-all duration-500 group-hover:w-16 group-hover:bg-[#A87C4F]" />
//               </div>
//             </div>
//           ))}
//         </motion.div>

//         {/* --- Fading Edges (Soft Gradients) --- */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#F9F8F6] to-transparent z-10" />
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#F9F8F6] to-transparent z-10" />
//       </div>

//       {/* --- Bottom Decoration --- */}
//       <div className="mt-16 flex justify-center opacity-20">
//          <Leaf className="text-[#112421]" size={30} strokeWidth={1} />
//       </div>
//     </section>
//   )
// }

"use client"
import { motion } from "framer-motion"
import { 
  Wifi, 
  Car, 
  Coffee, 
  Waves, 
  Utensils, 
  Dumbbell, 
  Sparkles, 
  ShieldCheck,
  PhoneCall,
  Shirt,
  Wind,
  Tv
} from "lucide-react"

const amenities = [
  { title: "Free WiFi", desc: "High-speed internet throughout the resort", icon: <Wifi className="w-5 h-5" /> },
  { title: "Valet Parking", desc: "Complimentary valet service", icon: <Car className="w-5 h-5" /> },
  { title: "24/7 Room Service", desc: "Gourmet dining delivered to your room", icon: <Coffee className="w-5 h-5" /> },
  
  { title: "Fine Dining", desc: "Award-winning restaurants on-site", icon: <Utensils className="w-5 h-5" /> },
  { title: "Fitness Center", desc: "State-of-the-art equipment and classes", icon: <Dumbbell className="w-5 h-5" /> },
  { title: "Spa Services", desc: "Full-service spa and wellness center", icon: <Sparkles className="w-5 h-5" /> },
 
  { title: "Concierge", desc: "Personal concierge service", icon: <PhoneCall className="w-5 h-5" /> },
  
  { title: "Entertainment", desc: "Smart TVs with streaming services", icon: <Tv className="w-5 h-5" /> },
]

export default function ResortAmenities() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* --- Heading Section --- */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0f172a] mb-4">
            Resort Amenities
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-900 via-green-900 to-[#d97706] bg-clip-text text-transparent mb-6">
            Designed Around Comfort
          </h3>
          <p className="text-slate-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Every service is built to make your stay effortless, from personalized concierge 
            support to premium wellness and dining.
          </p>
        </div>

        {/* --- Amenities Grid (4 Cards per row on desktop) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white p-4 rounded-[1rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-50 flex flex-col items-start text-left hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon Container with Soft Blue background */}
              <div className="w-11 h-11 bg-green-100  text-green-700 rounded-2xl flex items-center justify-center mb-6   transition-colors duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-lg font-bold text-[#1e293b] mb-2">
                {item.title}
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  )
}