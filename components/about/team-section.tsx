
// // "use client"

// // import { motion } from "framer-motion"
// // import { Linkedin, Twitter, Mail } from "lucide-react"
// // import Image from "next/image"

// // const teamMembers = [
// //   {
// //     id: 1,
// //     name: "Mr. Ashis Tyagi",
// //     position: "Founder & CEO",
// //     image: "/placeholder.svg?height=300&width=300&text=James+Wilder",
// //     bio: `Mr. Ashis Tyagi brings over three decades of dedicated experience in hospitality, 
// //     wildlife resort management, and Himalayan adventure operations.His career has been shaped by a deep
// //     commitment to sustainable tourism, nature conservation, and delivering authentic wildernes
// //     experiences.From managing boutique wildlife resorts to leading specialized camping expeditions
// //     across the Himalayas, he has built a reputation for exceptional guest care, operational excellence,
// //     and a profound understanding of mountain environments.His vision continues to inspire
// //     immersive, responsible, and memorable journeys for travelers seeking the true spirit of the wild.`,
// //     social: { linkedin: "#", twitter: "#", email: "james@wilderbeach.com" },
// //     cardBg: "from-blue-50 to-indigo-100",
// //     hoverBorder: "border-blue-500",
// //     socialBg: "bg-blue-100",
// //     socialHoverBg: "bg-blue-600",
// //     socialIconColor: "text-blue-600",
// //     socialIconHoverColor: "text-white",
// //   },
// //   {
// //     id: 2,
// //     name: "Mr. Nitesh Anandan",
// //     position: "General Manager",
// //     image: "/placeholder.svg?height=300&width=300&text=Sarah+Martinez",
// //     bio: `Mr. Nitesh Anandan is a dedicated wildlife researcher and award-winning wildlife photographer
// // whose connection with nature began at the age of three, guided by his father, Mr. Anandan—a
// // respected wildlife conservationist and photographer. He started his journey with birdwatching and
// // gradually developed a deep fascination for reptiles and amphibians, a passion he has pursued for
// // over 15 years. His work has contributed to the publication of few research papers, including the
// // documentation of new species. Mr. Nitesh is also
// // actively involved in management, bringing a blend of eld expertise, leadership, and a strong
// // conservation-driven vision to every project he undertakes.`,
// //     social: { linkedin: "#", twitter: "#", email: "sarah@wilderbeach.com" },
// //     cardBg: "from-emerald-50 to-teal-100",
// //     hoverBorder: "border-emerald-500",
// //     socialBg: "bg-emerald-100",
// //     socialHoverBg: "bg-emerald-600",
// //     socialIconColor: "text-emerald-600",
// //     socialIconHoverColor: "text-white",
// //   },
// //   {
// //     id: 3,
// //     name: "Mr. Sumit Gosain",
// //     position: "Director of Operations",
// //     image: "/placeholder.svg?height=300&width=300&text=David+Chen",
// //     bio: `Mr. Sumit Gosain is an accomplished hospitality professional with over a decade of experience in
// // resort management, particularly within the rich wilderness of Kanha National Park. His career
// // re ects a deep commitment to guest satisfaction, smooth operations, and delivering authentic
// // nature-based hospitality experiences. Known for his strong leadership, attention to detail, and
// // ability to create warm and memorable stays for guests, Mr. Sumit has played a key role in elevating
// // resort standards in one of India’s most celebrated wildlife destinations. His expertise continues to
// // contribute to high-quality service, sustainable practices, and a welcoming environment for travelers
// // from around the world.`,
// //     social: { linkedin: "#", twitter: "#", email: "david@wilderbeach.com" },
// //     cardBg: "from-purple-50 to-pink-100",
// //     hoverBorder: "border-purple-500",
// //     socialBg: "bg-purple-100",
// //     socialHoverBg: "bg-purple-600",
// //     socialIconColor: "text-purple-600",
// //     socialIconHoverColor: "text-white",
// //   },
// //   {
// //     id: 4,
// //     name: "Mr. Alok Juyal",
// //     position: "Guest Experience Director",
// //     image: "/placeholder.svg?height=300&width=300&text=Maria+Rodriguez",
// //     bio: `Mr. Alok Juyal is a seasoned management professional with over 15 years of experience in the
// // hospitality industry. He is known for his strong leadership skills, operational expertise, and
// // commitment to delivering high-quality guest experiences. Throughout his career, he has contributed
// // to building ef cient teams, improving service standards, and ensuring smooth, guest-focused
// // operations. His dedication and professionalism continue to make him a valuable asset in the
// // hospitality and management sector.`,
// //     social: { linkedin: "#", twitter: "#", email: "maria@wilderbeach.com" },
// //     cardBg: "from-yellow-50 to-orange-100",
// //     hoverBorder: "border-yellow-500",
// //     socialBg: "bg-yellow-100",
// //     socialHoverBg: "bg-yellow-600",
// //     socialIconColor: "text-yellow-600",
// //     socialIconHoverColor: "text-white",
// //   }
// // ]

// // export default function TeamSection() {
// //   return (
// //     <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
// //       {/* Background decorative elements */}
// //       <div className="absolute inset-0 opacity-10">
// //         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
// //         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full blur-3xl"></div>
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full blur-3xl"></div>
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
// //             className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent mb-6"
// //             initial={{ scale: 0.9 }}
// //             whileInView={{ scale: 1 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <p className="text-3xl md:text-5xl font-bold mb-8">
// //               <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
// //                 Meet Our Team
// //               </span>
// //             </p>
// //           </motion.h2>
// //           <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
// //             Our passionate team of hospitality professionals is dedicated to making your stay at WilderBeach Resort
// //             truly exceptional.
// //           </p>
// //         </motion.div>

// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {teamMembers.map((member, index) => (
// //             <motion.div
// //               key={member.id}
// //               initial={{ opacity: 0, y: 50 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6, delay: index * 0.1 }}
// //               whileHover={{
// //                 scale: 1.03,
// //                 y: -5,
// //                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
// //                 transition: { duration: 0.3 },
// //               }}
// //               className={`bg-gradient-to-br ${member.cardBg} rounded-3xl shadow-xl transition-all duration-500 overflow-hidden group border border-white/20 hover:${member.hoverBorder}`}
// //             >
// //               {/* <div className="relative overflow-hidden rounded-t-3xl">
// //                 <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} className="w-full h-64 relative">
// //                   <Image
// //                     src={member.image || "/placeholder.svg"}
// //                     alt={member.name}
// //                     layout="fill"
// //                     objectFit="cover"
// //                     className="rounded-t-3xl"
// //                   />
// //                 </motion.div>
// //                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
// //                   <h3 className="text-2xl font-bold  drop-shadow-lg">{member.name}</h3>
// //                 </div>
// //               </div> */}
// //               <div className="p-6 text-center">
// //                 <p className="text-lg font-semibold text-slate-700 mb-2">{member.name}</p>
// //                 <p className="text-slate-600 leading-relaxed mb-6 text-sm">{member.bio}</p>
// //                 <div className="flex justify-center space-x-4">
// //                   <motion.a
// //                     href={member.social.linkedin}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     whileHover={{ scale: 1.2, y: -2 }}
// //                     className={`${member.socialBg} hover:${member.socialHoverBg} p-3 rounded-full transition-all duration-300 flex items-center justify-center`}
// //                   >
// //                     <Linkedin
// //                       className={`h-5 w-5 ${member.socialIconColor} group-hover:${member.socialIconHoverColor} transition-colors duration-300`}
// //                     />
// //                   </motion.a>
// //                   <motion.a
// //                     href={member.social.twitter}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     whileHover={{ scale: 1.2, y: -2 }}
// //                     className={`${member.socialBg} hover:${member.socialHoverBg} p-3 rounded-full transition-all duration-300 flex items-center justify-center`}
// //                   >
// //                     <Twitter
// //                       className={`h-5 w-5 ${member.socialIconColor} group-hover:${member.socialIconHoverColor} transition-colors duration-300`}
// //                     />
// //                   </motion.a>
// //                   <motion.a
// //                     href={`mailto:${member.social.email}`}
// //                     whileHover={{ scale: 1.2, y: -2 }}
// //                     className={`${member.socialBg} hover:${member.socialHoverBg} p-3 rounded-full transition-all duration-300 flex items-center justify-center`}
// //                   >
// //                     <Mail
// //                       className={`h-5 w-5 ${member.socialIconColor} group-hover:${member.socialIconHoverColor} transition-colors duration-300`}
// //                     />
// //                   </motion.a>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import { useState, useRef } from "react"
// import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
// import { ChevronDown, ChevronUp, Linkedin, Twitter, Mail } from "lucide-react"
 

// const teamMembers = [
//   {
//     id: 1,
//     name: "Mr. Ashis Tyagi",
//     position: "Founder & CEO",
//     image: "/placeholder.svg?height=300&width=300&text=James+Wilder",
//     bio: `Mr. Ashis Tyagi brings over three decades of dedicated experience in hospitality, 
//     wildlife resort management, and Himalayan adventure operations.His career has been shaped by a deep
//     commitment to sustainable tourism, nature conservation, and delivering authentic wildernes
//     experiences.From managing boutique wildlife resorts to leading specialized camping expeditions
//     across the Himalayas, he has built a reputation for exceptional guest care, operational excellence,
//     and a profound understanding of mountain environments.His vision continues to inspire
//     immersive, responsible, and memorable journeys for travelers seeking the true spirit of the wild.`,
//     social: { linkedin: "#", twitter: "#", email: "james@wilderbeach.com" },
//     cardBg: "from-blue-50 to-indigo-50",
//     hoverBorder: "border-blue-500",
//     socialBg: "bg-blue-100",
//     socialHoverBg: "bg-blue-600",
//     socialIconColor: "text-blue-600",
//     socialIconHoverColor: "text-white",
//   },
//   {
//     id: 2,
//     name: "Mr. Nitesh Anandan",
//     position: "General Manager",
//     image: "/placeholder.svg?height=300&width=300&text=Sarah+Martinez",
//     bio: `Mr. Nitesh Anandan is a dedicated wildlife researcher and award-winning wildlife photographer
// whose connection with nature began at the age of three, guided by his father, Mr. Anandan—a
// respected wildlife conservationist and photographer. He started his journey with birdwatching and
// gradually developed a deep fascination for reptiles and amphibians, a passion he has pursued for
// over 15 years. His work has contributed to the publication of few research papers, including the
// documentation of new species. Mr. Nitesh is also
// actively involved in management, bringing a blend of eld expertise, leadership, and a strong
// conservation-driven vision to every project he undertakes.`,
//     social: { linkedin: "#", twitter: "#", email: "sarah@wilderbeach.com" },
//     cardBg: "from-emerald-50 to-teal-50",
//     hoverBorder: "border-emerald-500",
//     socialBg: "bg-emerald-100",
//     socialHoverBg: "bg-emerald-600",
//     socialIconColor: "text-emerald-600",
//     socialIconHoverColor: "text-white",
//   },
//   {
//     id: 3,
//     name: "Mr. Sumit Gosain",
//     position: "Director of Operations",
//     image: "/placeholder.svg?height=300&width=300&text=David+Chen",
//     bio: `Mr. Sumit Gosain is an accomplished hospitality professional with over a decade of experience in
// resort management, particularly within the rich wilderness of Kanha National Park. His career
// re ects a deep commitment to guest satisfaction, smooth operations, and delivering authentic
// nature-based hospitality experiences. Known for his strong leadership, attention to detail, and
// ability to create warm and memorable stays for guests, Mr. Sumit has played a key role in elevating
// resort standards in one of India’s most celebrated wildlife destinations. His expertise continues to
// contribute to high-quality service, sustainable practices, and a welcoming environment for travelers
// from around the world.`,
//     social: { linkedin: "#", twitter: "#", email: "david@wilderbeach.com" },
//     cardBg: "from-purple-50 to-pink-50",
//     hoverBorder: "border-purple-500",
//     socialBg: "bg-purple-100",
//     socialHoverBg: "bg-purple-600",
//     socialIconColor: "text-purple-600",
//     socialIconHoverColor: "text-white",
//   },
//   {
//     id: 4,
//     name: "Mr. Alok Juyal",
//     position: "Guest Experience Director",
//     image: "/placeholder.svg?height=300&width=300&text=Maria+Rodriguez",
//     bio: `Mr. Alok Juyal is a seasoned management professional with over 15 years of experience in the
// hospitality industry. He is known for his strong leadership skills, operational expertise, and
// commitment to delivering high-quality guest experiences. Throughout his career, he has contributed
// to building ef cient teams, improving service standards, and ensuring smooth, guest-focused
// operations. His dedication and professionalism continue to make him a valuable asset in the
// hospitality and management sector.`,
//     social: { linkedin: "#", twitter: "#", email: "maria@wilderbeach.com" },
//     cardBg: "from-yellow-50 to-orange-50",
//     hoverBorder: "border-yellow-500",
//     socialBg: "bg-yellow-100",
//     socialHoverBg: "bg-yellow-600",
//     socialIconColor: "text-yellow-600",
//     socialIconHoverColor: "text-white",
//   }
// ]
// export default function TeamTimeline() {
//   const containerRef = useRef(null)
//   const [expandedId, setExpandedId] = useState<number | null>(null)

//   // Scroll Progress for the line
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start center", "end center"]
//   })

//   const scaleY = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001
//   })

//   return (
//     <section ref={containerRef}  className="py-10   bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">

//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full blur-3xl"></div>
//      </div>
     
//          <div className="max-w-8xl mx-auto px-4  m-20 sm:px-6 lg:px-8 relative z-10">
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
//               <span className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 bg-clip-text text-transparent">
//                 Meet Our Team
//               </span>
//             </p>
//           </motion.h2>
//           <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
//             Our passionate team of hospitality professionals is dedicated to making your stay at WilderBeach Resort
//             truly exceptional.
//           </p>
//         </motion.div>
        

//         <div className="relative">
//           {/* FIXED: OCEAN-TROPICAL GRADIENT LINE */}
//           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-[3px] h-full bg-slate-100">
//             <motion.div 
//               style={{ scaleY }}
//               className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500 via-teal-500 to-blue-600 origin-top shadow-[0_0_10px_rgba(6,182,212,0.5)]"
//             />
//           </div>

          

//           <div className="space-y-10">
//             {teamMembers.map((member, index) => (
//               <div key={member.id} className={`relative flex items-center justify-between ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                
//                 {/* Content Card */}
//                 <motion.div 
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   className="w-full md:w-[45%] ml-4 md:ml-0"
//                 >
//                   <div className={`bg-gradient-to-br ${member.cardBg} p-8 rounded-[2.5rem] border border-white/50 shadow-xl transition-all duration-500 hover:${member.hoverBorder} hover:shadow-2xl`}>
//                     <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
//                     <p className="text-sm font-bold text-cyan-600 uppercase mb-4 tracking-widest">{member.position}</p>
                    
//                     <div className="mb-5">
//                       <p className={`text-slate-700 text-sm leading-relaxed ${expandedId === member.id ? "" : "line-clamp-3"}`}>
//                         {member.bio}
//                       </p>
//                       <button 
//                         onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
//                         className="mt-3 text-xs font-bold text-slate-900 flex items-center gap-1 hover:text-cyan-600 transition-colors"
//                       >
//                         {expandedId === member.id ? <>Show Less <ChevronUp size={14}/></> : <>Read Full Bio <ChevronDown size={14}/></>}
//                       </button>
//                     </div>

//                     {/* FIXED: SOCIAL ICONS ALIGNMENT */}
//                     <div className="flex gap-4">
//                       <a href={member.social.linkedin} className={`${member.socialBg} p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}>
//                         <Linkedin size={18} className={member.socialIconColor} />
//                       </a>
//                       <a href={member.social.twitter} className={`${member.socialBg} p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}>
//                         <Twitter size={18} className={member.socialIconColor} />
//                       </a>
//                       <a href={`mailto:${member.social.email}`} className={`${member.socialBg} p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}>
//                         <Mail size={18} className={member.socialIconColor} />
//                       </a>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* GRADIENT CENTER DOT */}
//                 <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-20">
//                   <div className="w-6 h-6 rounded-full bg-white border-4 border-cyan-500 shadow-md shadow-cyan-500/30" />
//                 </div>

//                 <div className="hidden md:block w-[45%]" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Linkedin, Twitter, Mail, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const teamMembers = [
  {
    id: 1,
    name: "Mr. Ashis Tyagi",
    position: "Founder & CEO",
    image: "/about/ashis.jpg",
    bio: `Mr. Ashis Tyagi brings over three decades of dedicated experience in hospitality, wildlife resort management, and Himalayan adventure operations. His career has been shaped by a deep commitment to sustainable tourism, nature conservation, and delivering authentic wilderness experiences. From managing boutique wildlife resorts to leading specialized camping expeditions across the Himalayas, he has built a reputation for exceptional guest care, operational excellence, and a profound understanding of mountain environments. His vision continues to inspire immersive, responsible, and memorable journeys for travelers seeking the true spirit of the wild.`,
    social: { linkedin: "#", twitter: "#", email: "james@wilderbeach.com" },
  },
  {
    id: 2,
    name: "Mr. Nitesh Anandan",
    position: "General Manager",
    image: "/about/nitesh.jpg",
    bio: `Mr. Nitesh Anandan is a dedicated wildlife researcher and award-winning wildlife photographer whose connection with nature began at the age of three, guided by his father, Mr. Anandan—a respected wildlife conservationist and photographer. He started his journey with birdwatching and gradually developed a deep fascination for reptiles and amphibians, a passion he has pursued for over 15 years. His work has contributed to the publication of few research papers, including the documentation of new species. Mr. Nitesh is also actively involved in management, bringing a blend of field expertise, leadership, and a strong conservation-driven vision to every project he undertakes.`,
    social: { linkedin: "#", twitter: "#", email: "sarah@wilderbeach.com" },
  },
  {
    id: 3,
    name: "Mr. Sumit Gosain",
    position: "Director of Operations",
    image: "/about/sumit.jpg",
    bio: `Mr. Sumit Gosain is an accomplished hospitality professional with over a decade of experience in resort management, particularly within the rich wilderness of Kanha National Park. His career reflects a deep commitment to guest satisfaction, smooth operations, and delivering authentic nature-based hospitality experiences. Known for his strong leadership, attention to detail, and ability to create warm and memorable stays for guests, Mr. Sumit has played a key role in elevating resort standards in one of India’s most celebrated wildlife destinations. His expertise continues to contribute to high-quality service, sustainable practices, and a welcoming environment for travelers from around the world.`,
    social: { linkedin: "#", twitter: "#", email: "david@wilderbeach.com" },
  },
  {
    id: 4,
    name: "Mr. Alok Juyal",
    position: "Guest Experience Director",
    image: "/about/alok.jpg",
    bio: `Mr. Alok Juyal is a seasoned management professional with over 15 years of experience in the hospitality industry. He is known for his strong leadership skills, operational expertise, and commitment to delivering high-quality guest experiences. Throughout his career, he has contributed to building efficient teams, improving service standards, and ensuring smooth, guest-focused operations. His dedication and professionalism continue to make him a valuable asset in the hospitality and management sector.`,
    social: { linkedin: "#", twitter: "#", email: "maria@wilderbeach.com" },
  }
]

export default function TeamSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-serif text-[#112421] mb-4"
          >
            Meet the Leaders Behind <span className="italic text-green-900">Wilder Beach</span>
          </motion.h2>
          <div className="w-20 h-[1px] bg-[#A87C4F] mx-auto mb-6" />
        </div>

        {/* --- CAROUSEL --- */}
        <div className="relative group">
          <button onClick={() => scroll("left")} className="absolute left-[-40px] top-[30%] z-30 w-12 h-12 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-[#112421] hover:bg-[#112421] hover:text-white transition-all hidden md:flex"><ChevronLeft size={20} /></button>
          <button onClick={() => scroll("right")} className="absolute right-[-40px] top-[30%] z-30 w-12 h-12 rounded-full border border-gray-200 bg-white shadow-md flex items-center justify-center text-[#112421] hover:bg-[#112421] hover:text-white transition-all hidden md:flex"><ChevronRight size={20} /></button>

          <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="min-w-full md:min-w-[420px] snap-center bg-white border border-gray-100 shadow-sm flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[250px] w-full grayscale hover:grayscale-0 transition-all duration-1000">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                  <hr />
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#112421] uppercase tracking-wider mb-1">{member.name}</h3>
                  <p className="text-green-900 text-xs font-bold uppercase tracking-[0.2em] mb-6">{member.position}</p>
                  
                  {/* Bio with Read More/Less */}
                  <div className="relative mb-8">
                    <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-500 ${expandedId === member.id ? "" : "line-clamp-4"}`}>
                      {member.bio}
                    </p>
                    <button 
                      onClick={() => setExpandedId(expandedId === member.id ? null : member.id)}
                      className="mt-3 text-[#112421] text-[9px] font-bold uppercase tracking-widest flex items-center gap-1 hover:text-[#A87C4F]"
                    >
                      {expandedId === member.id ? (
                        <>Read Less <ChevronUp size={14} /></>
                      ) : (
                        <>Read More <ChevronDown size={14} /></>
                      )}
                    </button>
                  </div>

                  {/* Social Icons at Bottom */}
                  <hr />
                  <div className="mt-auto pt-6 border-t border-gray-50 flex justify-center gap-4">
                    <a href={member.social.linkedin} className="w-10 h-10 rounded-full bg--100 border-green-500 border flex items-center justify-center text-slate-500 hover:bg-green-900 hover:text-white transition-all shadow-sm">
                      <Linkedin size={16} />
                    </a>
                    <a href={member.social.twitter} className="w-10 h-10 rounded-full bg-slate-100 border-green-500 border flex items-center justify-center text-slate-500 hover:bg-green-900 hover:text-white transition-all shadow-sm">
                      <Twitter size={16} />
                    </a>
                    <a href={`mailto:${member.social.email}`} className="w-10 h-10 rounded-full bg-slate-100 border-green-500 border flex items-center justify-center text-slate-500 hover:bg-green-900 hover:text-white transition-all shadow-sm">
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}