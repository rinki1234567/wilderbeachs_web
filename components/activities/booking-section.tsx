// "use client"
// import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Clock, Users, Star, ChevronRight, Play, Camera, Award, Shield, Heart } from "lucide-react"
// import { useState, useRef, useEffect } from "react"
// import Link from "next/link"
// interface ActivityCardProps {
//   activity: {
//     id: number
//     title: string
//     subtitle: string
//     description: string
//     image: string
//     duration: string
//     groupSize: string
//     rating: number
//         category: string
//     highlights: string[]
//     difficulty: string
//   }
//   index: number
// }

// const activities = [
//   {
//     id: 1,
//     title: "Jeep Safari Adventure",
//     subtitle: "Track tigers in their natural habitat",
//     description:
//       "Experience the thrill of spotting majestic tigers and diverse wildlife in their pristine natural environment with our expert guides.",
//     image: "/images/a3.jpg",
//     duration: "6 hours",
//     groupSize: "8 people max",
//     rating: 4.9,
    
//     category: "Wildlife Safari",
//     highlights: ["Tiger spotting", "Expert guides", "Photo opportunities", "Breakfast included"],
//     difficulty: "Easy",
//   },
//   {
//     id: 2,
//     title: "River Walk",
//     subtitle: "Walk, cycle & discover hidden gems",
//     description:
//       "Explore secret trails, discover exotic flora and fauna, and connect with nature through guided walks and cycling adventures.",
//       image: "/about/about2.jpg",
//     duration: "4 hours",
//     groupSize: "12 people max",
//     rating: 4.8,
//         category: "Nature Connect",
//     highlights: ["Bird watching", "Secret spots", "Small groups", "Flexible timing"],
//     difficulty: "Moderate",
//   },
//   {
//     id: 3,
//     title: "Bush Dinner Experience",
//     subtitle: "Dine under the stars in the wild",
//     description:
//       "Enjoy gourmet meals in the heart of nature with our unique bush dining experiences, from riverside picnics to starlit dinners.",
//        image: "/luxuary/room1.jpg",
//     duration: "3 hours",
//     groupSize: "20 people max",
//     rating: 5.0,
    
//     category: "Unique Dinner",
//     highlights: ["Riverside picnics", "Starlit dinners", "Poolside BBQ", "Local cuisine"],
//     difficulty: "Easy",
//   },
//   {
//     id: 4,
//     title: "Bird Bath Photography",
//     subtitle: "Immerse in tribal culture & crafts",
//     description:
//       "Connect with local communities, learn traditional crafts, and experience authentic tribal culture through interactive workshops.",
//    image: "/images/g1.png",
//     duration: "5 hours",
//     groupSize: "15 people max",
//     rating: 4.7,
    
//     category: "Bird Bath Photography",
//     highlights: ["Handmade pottery", "Tribal jewelry", "Fresh produce", "Local stories"],
//     difficulty: "Easy",
//   },
//   {
//     id: 5,
//     title: "Wellness Retreat",
//     subtitle: "Unleash creativity in nature",
//     description:
//       "Combine artistic expression with wellness activities in our serene natural setting, perfect for relaxation and creativity.",
//     image: "/images/a10.jpg",
//     duration: "4 hours",
//     groupSize: "10 people max",
//     rating: 4.9,
    
//     category: "Creative",
//     highlights: ["Pottery making", "Gond painting", "Kids program", "Meditation"],
//     difficulty: "Easy",
//   },
//   {
//     id: 6,
//     title: "Nature Walk",
//     subtitle: "Capture the wild beauty",
//     description:
//       "Learn professional photography techniques while exploring the most photogenic spots in the wilderness with photographers.",
//    image: "/images/a9.jpg",
//     duration: "8 hours",
//     groupSize: "6 people max",
//     rating: 4.8,
    
//     category: "Nature Walk",
//     highlights: ["Professional guidance", "Equipment provided", "Golden hour shots", "Wildlife photography"],
//     difficulty: "Moderate",
//   },
// ]

// const categoryColors = {
//   "Wildlife Safari": "from-green-500 to-emerald-600",
//   "Nature Connect": "from-blue-500 to-cyan-600",
//   "Unique Dinner": "from-orange-300 to-red-400",
//   "Bird Bath Photography": "from-purple-500 to-pink-600",
//   Creative: "from-indigo-500 to-purple-600",
//   "Nature Walk": "from-yellow-500 to-orange-600",
// }

// const difficultyColors = {
//   Easy: "bg-green-100 text-green-800",
//   Moderate: "bg-yellow-100 text-yellow-800",
//   Hard: "bg-red-100 text-red-800",
// }

// const ActivityCard = ({ activity, index }: ActivityCardProps) => {
//   const [isHovered, setIsHovered] = useState(false)
//   const [imageLoaded, setImageLoaded] = useState(false)

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.8, delay: index * 0.1 }}
//       className="group"
//     >
//       <Card
//         className="overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Image Section */}
//         <div className="relative overflow-hidden h-80">
//           <motion.div
//             animate={{ scale: isHovered ? 1.1 : 1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="relative w-full h-full"
//           >
//             <Image
//               src={activity.image || "/placeholder.svg"}
//               alt={activity.title}
//               fill
//               className={`object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
//               onLoad={() => setImageLoaded(true)}
//             />
//             {!imageLoaded && (
//               <div className="absolute inset-0 bg-gradient-to-br from-ocean-100 to-tropical-100 animate-pulse" />
//             )}
//           </motion.div>

//           {/* Overlay Content */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//           {/* Category Badge */}
//           <div className="absolute top-4 left-4">
//             <Badge
//               className={`bg-gradient-to-r ${categoryColors[activity.category as keyof typeof categoryColors]} text-white border-0 px-3 py-1 font-semibold`}
//             >
//               {activity.category}
//             </Badge>
//           </div>



//           {/* Hover Actions */}
//           {/* <AnimatePresence>
//             {isHovered && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="absolute inset-0 bg-black/20 flex items-center justify-center"
//               >
//                 <div className="flex space-x-4">
//                   <motion.button
//                     initial={{ scale: 0, rotate: -180 }}
//                     animate={{ scale: 1, rotate: 0 }}
//                     exit={{ scale: 0, rotate: 180 }}
//                     transition={{ duration: 0.3 }}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
//                   >
//                     <Play className="w-6 h-6" />
//                   </motion.button>
//                   <motion.button
//                     initial={{ scale: 0, rotate: -180 }}
//                     animate={{ scale: 1, rotate: 0 }}
//                     exit={{ scale: 0, rotate: 180 }}
//                     transition={{ duration: 0.3, delay: 0.1 }}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
//                   >
//                     <Camera className="w-6 h-6" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence> */}

//           {/* Bottom Info */}
//           <div className="absolute bottom-4 left-4 right-4">
//             <div className="flex items-center justify-between text-white">
//               <div className="flex items-center space-x-2">
//                 <Star className="w-4 h-4 fill-current text-yellow-400" />
//                 <span className="font-semibold">{activity.rating}</span>
//               </div>
//               <Badge className={`${difficultyColors[activity.difficulty as keyof typeof difficultyColors]} border-0`}>
//                 {activity.difficulty}
//               </Badge>
//             </div>
//           </div>
//         </div>

//         {/* Content Section */}
//         <CardContent className="p-8">
//           <div className="mb-4">
//             <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-ocean-600 transition-colors duration-300">
//               {activity.title}
//             </h3>
//             <p className="text-ocean-600 font-semibold text-lg mb-3">{activity.subtitle}</p>
//             <p className="text-gray-600 leading-relaxed">{activity.description}</p>
//           </div>

//           {/* Activity Details */}
//           <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
//             <div className="flex items-center space-x-2 text-gray-600">
//               <Clock className="w-4 h-4 text-ocean-500" />
//               <span>{activity.duration}</span>
//             </div>
//             <div className="flex items-center space-x-2 text-gray-600">
//               <Users className="w-4 h-4 text-ocean-500" />
//               <span>{activity.groupSize}</span>
//             </div>
//           </div>

//           {/* Highlights */}
//           <div className="mb-6">
//             <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
//             <div className="grid grid-cols-2 gap-2">
//               {activity.highlights.map((highlight, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: -10 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: idx * 0.1 }}
//                   className="flex items-center space-x-2 text-sm text-gray-600"
//                 >
//                   <div className="w-1.5 h-1.5 bg-ocean-500 rounded-full" />
//                   <span>{highlight}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Book Button */}
//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//            <Link href={'/contact'}>
//             <Button className="w-full bg-gradient-to-r from-ocean-600 to-tropical-600 hover:from-ocean-700 hover:to-tropical-700 text-white font-semibold py-3 text-lg group">
//               Book Experience
//               <motion.div className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
//                 <ChevronRight className="w-5 h-5" />
//               </motion.div>
//             </Button>
//            </Link>
//           </motion.div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   )
// }

// export default function BookingSection() {
//   const heroRef = useRef<HTMLElement>(null)
//   const [isClient, setIsClient] = useState(false)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   const { scrollYProgress } = useScroll({
//     target: isClient ? heroRef : undefined,
//     offset: ["start start", "end start"],
//   })
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-ocean-50 via-white to-tropical-50">
//       {/* Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-ocean-400/20 to-tropical-400/20 rounded-full blur-3xl" />
//         <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-coral-400/20 to-paradise-400/20 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-luxury-400/10 to-sunset-400/10 rounded-full blur-3xl" />
//       </div>

//       {/* Floating Animated Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
//           transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//           className="absolute top-24 left-10 w-4 h-4 bg-paradise-400 rounded-full opacity-60"
//         />
//         <motion.div
//           animate={{ y: [0, -30, 0], rotate: [0, -5, 0] }}
//           transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
//           className="absolute top-40 right-20 w-6 h-6 bg-coral-400 rounded-full opacity-40"
//         />
//         <motion.div
//           animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
//           transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 4 }}
//           className="absolute bottom-40 left-20 w-5 h-5 bg-tropical-400 rounded-full opacity-50"
//         />
//       </div>

//       {/* Hero Section */}
//       <section ref={heroRef} className="relative py-10 overflow-hidden">
//         <motion.div style={{ y }} className="relative z-10">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="mb-6"
//             >
//               <Badge className="bg-gradient-to-r from-ocean-500 to-tropical-500 text-white border-0 px-6 py-2 text-lg font-semibold">
//                 🌟 Premium Experiences
//               </Badge>
//             </motion.div>
            
//             <motion.h1
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
//               >
              
//               <span className=" text-2xl md:text-5xl font-bold mb-8 block bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600  bg-clip-text text-transparent">
//               Choose Your Adventure
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
//             >
//               Curated experiences designed for every explorer. From wildlife safaris to cultural immersions, discover
//               activities that create lasting memories.
//             </motion.p>

//             {/* Quick Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
//             >
//               {[
//                 { icon: Award, number: "10+", label: "Activities" },
//                 { icon: Shield, number: "24/7", label: "Support" },
//                 { icon: Star, number: "4.9", label: "Rating" },
//                 { icon: Heart, number: "100%", label: "Safe" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="text-center group"
//                 >
//                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
//                     <stat.icon className="h-8 w-8 mx-auto mb-3 text-ocean-600" />
//                     <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-ocean-600 to-tropical-600 bg-clip-text text-transparent">
//                       {stat.number}
//                     </div>
//                     <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Activities Grid */}
//       <section className="relative z-10 ">
//         <div className="max-w-8xl mx-auto px-6">
//           <div className="grid lg:grid-cols-3 gap-12">
//             {activities.map((activity, index) => (
//               <ActivityCard key={activity.id} activity={activity} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-10 relative z-10">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="bg-gradient-to-r from-ocean-600 via-tropical-600 to-ocean-600 rounded-3xl p-12 text-white relative overflow-hidden"
//           >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-xl" />
//               <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-xl" />
//             </div>

//             <div className="relative z-10">
//               <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore?</h2>
//               <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
//                 Book your perfect adventure today and create memories that will last a lifetime.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     size="lg"
//                     className="bg-white text-ocean-600 hover:bg-gray-100 font-semibold px-10 py-4 text-lg shadow-xl"
//                      >
//                     Book Now
//                     <ChevronRight className="ml-2 w-5 h-5" />
//                   </Button>
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-2 border-white text-white hover:bg-white hover:text-ocean-600 bg-transparent font-semibold px-10 py-4 text-lg"
//                   >
//                     Contact Us
//                   </Button>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   )
// }

// "use client"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { useRef, useState, useEffect } from "react"
// import { 
//   ArrowRight, 
//   ArrowLeft, 
//   ChevronRight, 
//   Camera, 
//   X, 
//   Bike, 
//   Activity, 
//   Users, 
//   MessageSquare, 
//   Star, 
//   Hotel, 
//   MapPin 
// } from "lucide-react"
// import Link from "next/link"

// // --- THE DATA --- (Replace with real Sir's content & image paths)
// const features = [
//   {
//     id: "safari",
//     tag: "Wildlife Safari",
//     title: "Jungle Safari at Kanha National Park",
//     description: "Discover the magic of the wild at Kanha National Park, one of India’s finest wildlife reserves and the inspiration behind The Jungle Book. With its dense forests, open meadows, and rich biodiversity, Kanha offers a truly immersive nature experience. Enjoy guided open jeep safaris in the early morning and late afternoon—prime times for spotting Bengal Tigers, Barasingha, Indian Leopard, Sloth Bear, and Indian Gaur.",
//     images: ["/images/a3.jpg", "/images/a9.jpg", "/about/about.jpg", "/luxuary/room1.jpg"], // Must have min 4 images
//     accent: "Kanha, Kisli, Mukki, Sarhi Zones"
//   },
//   {
//     id: "nature",
//     tag: "Guided Strolls",
//     title: "Guided Nature & Bajer River Walk",
//     description: "Experience the outdoors intimately on our Guided Nature Walk, led by an expert naturalist through winding trails to learn about local flora and fauna. Spot birds, butterflies, and gain insights into their behaviors. Additionally, enjoy a serene stroll along the Bajer River at sunrise or sunset, where the gentle breeze and tranquil surroundings create a perfect retreat for quiet contemplation.",
//     images: ["/images/a9.jpg", "/about/about2.jpg", "/images/a3.jpg", "/about/about.jpg"],
//     accent: "Expert Naturalist Led"
//   },
//   {
//     id: "birding",
//     tag: "Photography & Wonders",
//     title: "Bird Photography Hide & Stargazing",
//     description: "Our specially designed bird photography hide allows you to observe and capture colorful kingfishers and graceful herons without disturbing them. Later, escape the city lights at Wilder Beach’s Retreat. Our eco-friendly sanctuary brings you closer to the cosmos. Watch constellations dance, planets shine, and shooting stars streak across the sky.",
//     images: ["/images/g1.png", "/luxuary/room1.jpg", "/images/a9.jpg", "/about/about.jpg"],
//     accent: "Eco-Friendly Sanctuary"
//   }
// ];

// // Slider Component for each feature
// const AutoSlider = ({ images }: { images: string[] }) => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 4000); // 4 seconds auto-slide
//     return () => clearInterval(timer);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-full">
//       <AnimatePresence initial={false}>
//         <motion.div
//           key={current}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0"
//         >
//           <Image src={images[current]} fill className="object-cover" alt="Carousel" quality={100} />
//           <div className="absolute inset-0 bg-black/10" />
//         </motion.div>
//       </AnimatePresence>
//       <div className="absolute bottom-4 left-4 flex gap-1.5 z-10">
//         {images.map((_, i) => (
//           <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${current === i ? "bg-amber-400 w-4" : "bg-white/50"}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// // Full-Screen Image Modal Component
// const ImageModal = ({ feature, onClose }: { feature: typeof features[0]; onClose: () => void }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-[#0b1614]/95 z-[99] overflow-y-auto px-6 py-12 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white p-2"><X className="w-8 h-8"/></button>
      
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mt-10" onClick={(e) => e.stopPropagation()}>
//         <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="w-full md:w-[60%] aspect-[16/10] relative rounded-2xl overflow-hidden shadow-2xl">
//           <Image src={feature.images[0]} fill className="object-cover" alt={feature.title} quality={100} />
//         </motion.div>
        
//         <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="w-full md:w-[40%] space-y-6 text-left">
//           <span className="text-amber-400 font-bold text-[10px] uppercase tracking-[0.4em]">{feature.tag}</span>
//           <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">{feature.title}</h2>
//           <div className="w-16 h-[1px] bg-amber-400/40" />
//           <p className="text-slate-300 font-light leading-relaxed italic border-l-2 border-amber-600 pl-6 bg-white/[0.03] py-2 rounded-r-lg">"{feature.description}"</p>
//           <div className="flex items-center gap-3 text-sm text-white font-medium tracking-wide">
//              <MapPin className="w-4 h-4 text-amber-500" /> {feature.accent}
//           </div>
//           <Link href="/contact" className="inline-block pt-6">
//             <button className="px-10 py-4 bg-amber-600 text-white rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-[#1a2e2a] transition-all duration-500 flex items-center gap-3">
//               Book Experience <ArrowRight className="w-4 h-4"/>
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default function ActivitiesPage() {
//   const [selectedFeature, setSelectedFeature] = useState(null);

//   // Sir's Accommodation Data Mapped for Availability
//   const accommodationImages = ["/images/tree.jpg", "/luxuary/room1.jpg", "/images/a10.jpg", "/images/a9.jpg"]; // Must have min 4 room images

//   return (
//     <div className="bg-white min-h-screen text-[#1a2e2a]">
      
//       {/* 1. INTRO - Sir's Welcome Text (Detailed Journal Style) */}
//       <section className="py-24 px-6 max-w-5xl mx-auto text-center">
//         <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-amber-700 tracking-[0.6em] text-[10px] uppercase font-bold mb-6 block">The Wilderness Awaits</motion.span>
//         <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
//           Welcome to <span className="italic text-amber-900">Wilder Beach’s Retreat</span>
//         </motion.h1>
//         <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed italic max-w-3xl mx-auto">
//           <p>"A serene escape nestled in the heart of wilderness, on the tranquil banks of the Bunjar River. Experience the magic of Kanha while enjoying warm hospitality and a relaxing stay."</p>
//         </div>
//       </section>

//       {/* 2. DYNAMIC CAROUSEL SECTIONS - Safari, Nature, Birds */}
//       <section className="py-20 max-w-7xl mx-auto px-6 space-y-40">
//         {features.map((feature, i) => (
//           <motion.div key={feature.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`grid lg:grid-cols-12 gap-12 lg:gap-0 items-center ${i % 2 === 0 ? "" : "lg:flex-row-reverse"}`}>
            
//             {/* CAROUSEL BLOCK - Automatic Sliding Images */}
//             <div className={`lg:col-span-8 relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl ${i % 2 === 0 ? "lg:-mr-20 z-10" : "lg:-ml-20 lg:order-2 z-10"}`}>
//               <AutoSlider images={feature.images} />
              
//               {/* "PARDA" Effect on Mouseover + OnClick Trigger */}
//               <motion.div 
//                 whileHover={{ x: "100%" }}
//                 transition={{ duration: 1, ease: "easeInOut" }}
//                 onClick={() => setSelectedFeature(feature)}
//                 className="absolute inset-0 bg-[#1a2e2a]/95 backdrop-blur-md z-20 flex items-center justify-center cursor-pointer border-l border-white/20 transition-all duration-1000"
//               >
//                 <div className="text-center group">
//                   <span className="text-white font-serif italic text-3xl tracking-widest opacity-40 group-hover:opacity-0 transition-opacity">Discover {feature.tag}</span>
//                   <p className="text-white/30 text-xs tracking-widest uppercase mt-4 opacity-100 group-hover:opacity-0 transition-opacity">Click to Reveal Experience</p>
//                 </div>
//               </motion.div>
//             </div>

//             {/* TEXT PREVIEW CARD - Overlaps Carousel */}
//             <div className={`lg:col-span-5 bg-white p-12 lg:p-16 shadow-2xl rounded-xl z-30 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
//               <span className="text-amber-800 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">{feature.tag}</span>
//               <h2 className="text-3xl md:text-5xl font-serif text-[#1a2e2a] mb-6 leading-tight">{feature.title}</h2>
//               <p className="text-slate-600 font-light leading-relaxed italic text-lg line-clamp-3 mb-8">"{feature.description}"</p>
              
//               <motion.button onClick={() => setSelectedFeature(feature)} whileHover={{ x: 10 }} className="flex items-center gap-3 text-amber-900 font-bold text-[10px] uppercase tracking-[0.3em] group pt-4">
//                 Explore Full Story <ArrowRight className="w-4 h-4 group-hover:w-6 transition-all" />
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </section>

//       {/* 3. ACCOMMODATION / LODGE ESTATES SECTION - Slider & Button */}
//       <section className="py-32 px-6 max-w-7xl mx-auto mb-20">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="relative group overflow-hidden rounded-2xl aspect-[16/10] shadow-2xl">
//             <AutoSlider images={accommodationImages} />
//             {/* Soft Parda reveal showing Room Icon */}
//             <motion.div whileHover={{ x: "100%" }} transition={{ duration: 1 }} className="absolute inset-0 bg-[#1a2e2a]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center transition-all duration-1000">
//                <Star className="w-10 h-10 text-amber-400 mb-4 opacity-50"/>
//                <span className="text-white font-serif italic text-3xl tracking-widest opacity-40">Lodge Estates</span>
//             </motion.div>
//           </div>
          
//           <div className="space-y-8">
//             <div className="flex items-center gap-3 mb-6">
//               <span className="w-10 h-[1px] bg-amber-600" />
//               <span className="text-amber-800 font-bold text-[10px] uppercase tracking-[0.4em]">Secluded Spaces</span>
//             </div>
//             <h2 className="text-4xl md:text-6xl font-serif text-[#1a2e2a]">Accommodation <br /> <span className="italic text-amber-900">& Comfort</span></h2>
//             <p className="text-slate-600 font-light leading-relaxed text-lg">
//               Nestled in core-buffer areas, our lodge offers biodiverse spaces to blend with lush forests, meticulously designed to serve as your sanctuary to unwind from city life.
//             </p>
//             {/* Accommodation Redirect Button with Link */}
//             <Link href="/accommodation" className="inline-block pt-6"> 
//               <motion.button whileHover={{ scale: 1.05 }} className="px-12 py-5 bg-[#1a2e2a] text-white rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl flex items-center gap-3 group">
//                 <Hotel className="w-4 h-4"/> Check Room Availability <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform"/>
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 4. OTHER AMENITIES GRID (Gym, Activity, Conference) */}
//       <section className="py-24 bg-[#fcfbf8] border-t border-slate-100 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-1 bg-slate-100 border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-inner">
//             {[
//               { t: "Modern Gym", label: "Fitness", desc: "Commit to your routine with fully equipped cardio and strength training machines." },
//               { t: "Activity Room", label: "Entertainment", desc: "Indoor games, creative activities, and social engagement for all ages." },
//               { t: "Conference Room", label: "Meetings", desc: "Quiet professional space for workshops, discussions, and collaborative sessions." }
//             ].map((box, i) => (
//               <div key={i} className="bg-white p-12 hover:bg-amber-50/50 transition-all duration-500 group text-center md:text-left">
//                 <span className="text-amber-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">{box.label}</span>
//                 <h4 className="text-2xl font-serif text-[#1a2e2a] mb-4 group-hover:italic group-hover:translate-x-1 transition-transform">{box.title}</h4>
//                 <p className="text-slate-500 text-sm font-light leading-relaxed px-6 md:px-0">{box.desc}</p>
//                 <div className="w-0 h-[1px] bg-amber-600 mt-8 group-hover:w-16 transition-all duration-700" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 5. UNIQUE FINALE SIGN-OFF */}
//       <section className="py-24 px-6 bg-[#1a2e2a] text-white text-center">
//         <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="max-w-4xl mx-auto space-y-12">
//           <h2 className="text-4xl md:text-7xl font-serif italic">Ready to connect <span className="not-italic text-amber-400">deeply with nature?</span></h2>
//           <p className="text-white/60 font-light text-xl max-w-3xl mx-auto italic">"Fostering a harmonious balance between comfort, adventure, and conservation."</p>
//           <div className="flex justify-center gap-6 relative z-10">
//             <Link href="/contact"><button className="px-12 py-5 bg-amber-600 hover:bg-white hover:text-[#1a2e2a] transition-all rounded-full font-bold uppercase tracking-widest text-[10px] shadow-2xl">Start Your Escape</button></Link>
//           </div>
//           <div className="text-[9px] uppercase tracking-[0.6em] text-white/30 pt-10">Kanha Kisli • Est. 2024 • Luxury Sanctuary</div>
//         </motion.div>
//       </section>

//       {/* FULL-SCREEN IMAGE MODAL - Appears when Parda is Clicked */}
//       <AnimatePresence>
//         {selectedFeature && <ImageModal feature={selectedFeature} onClose={() => setSelectedFeature(null)} />}
//       </AnimatePresence>
//     </div>
//   )
// }


"use client"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"
import { 
  ArrowRight, X, Bike, Activity, Users, 
  MessageSquare, Star, Hotel, MapPin, ChevronRight, 
  Zap, Camera, Compass ,ArrowUpRight
} from "lucide-react"
import Link from "next/link"

// --- SIR'S DATA MAPPED TO AESTHETIC CARDS ---
const activitySections = [
  {
    id: "safari",
    title: "Jungle Safari",
    accent: "The Heart of Kanha",
    description: "Discover the magic of the wild at Kanha National Park, the inspiration behind The Jungle Book. Explore diverse zones like Kanha, Kisli, Mukki, and Sarhi—each offering unique landscapes and wildlife experiences.",
    fullText: "Enjoy guided open jeep safaris in early morning and late afternoon—prime times for sightings of Bengal Tigers, Barasingha, Leopards, and Sloth Bears. Open from October to June, with peak sightings during summer (March–May).",
    images: ["/images/a3.jpg", "/images/a2.jpg","/gallery/p2.jpg", "/gallery/p4.jpg", "/about/twoloin.jpg","/images/a10.jpg","/images/a10.jpg",],
    pardaLabel: "Safari Reveal",
    side: "left"
  },
  {
    id: "nature",
    title: "Nature & River Walk",
    accent: "Tranquil Exploration",
    description: "Experience the outdoors intimately on our Guided Nature Walk or a serene stroll along the Bajer River, where the sparkling water creates a tranquil retreat.",
    fullText: "Led by expert naturalists, learn about local flora, fauna, and ecosystems. Spot birds and butterflies at sunrise with soft golden light or in the calm of sunset—perfect for photography or quiet contemplation.",
    images: ["/images/a9.jpg", "/about/about2.jpg", "/gallery/r1.jpg", "/about/about.jpg", "/about/about.jpg"],
    pardaLabel: "Discover Nature",
    side: "right"
  },
  
];
const amenities = [ 
  { t: "Cycling", l: "Adventure", d: "Discover the area at your own pace with our cycling facilities. Ride along scenic trails, through forests and open landscapes, and enjoy the freedom of exploring nature on two wheels.",img: "/activity/cycling.jpg",i: <Bike className="w-6 h-6" />, }, 
  { t: "Modern Gym", l: "Wellness", d: "Stay committed to your fitness routine in our modern, fully equipped gym. Featuring cardio machines, strength training equipment, and free weights, it provides everything you need for a comprehensive workout.",  img: "/activity/gym.jpg", i: <Activity className="w-6 h-6" />, }, 
  { t: "Activity Room", l: "Recreation", d: "Our activity room is designed for entertainment, relaxation, and social engagement. Enjoy indoor games, creative activities, or simply gather with friends and family for shared moments of fun.", img: "/activity/room_activity.jpg", i: <Users className="w-6 h-6" />, }, 
  { t: "Conference Room", l: "Professional", d: "Our conference room offers a calm and comfortable setting for meetings, workshops, or small gatherings.",  img: "/activity/conference.jpg", i: <MessageSquare className="w-6 h-6" />, }, ]

// --- COMPONENT: AUTO SLIDING IMAGES (FOR CARDS) ---
const FeatureSlider = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((s) => (s + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div key={index} initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0.1 }} transition={{ duration: 0.2 }} className="absolute inset-0 ">
          <Image
  src={images[index]}
  fill
  alt="Safari"
  className="object-cover"
  quality={70}
  priority={index === 0}
  loading={index === 0 ? "eager" : "lazy"}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
  </motion.div>
  </AnimatePresence>
  <div className="absolute inset-0  transition-colors     duration-200" />
  </div>
  );
};

export default function ActivitiesPage() {
  const [selected, setSelected] = useState<typeof activitySections[0] | null>(null);
  // Amenities section ke andar ye state add karein
const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. MINIMALIST HERO */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center border-b border-slate-50">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-amber-700 tracking-[0.5em] text-[10px] uppercase font-bold mb-4 block">Welcome to the Sanctuary</motion.span>
        <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-4xl md:text-6xl font-serif mb-8 text-[#1a2e2a]">
          Where Nature <span className=" text-green-900">Unfolds</span>
        </motion.h1>
        <div className="space-y-6 text-slate-600 text-sm font-light leading-relaxed max-w-3xl mx-auto ">
          <p>
            "Welcome to Wilder Beach’s Retreat, a serene escape nestled in the heart of wilderness, 
            on the tranquil banks of the Bunjar River. Experience the magic of Kanha while enjoying 
            warm hospitality and a relaxing stay."
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC LAYOUT: SIR'S CONTENT SECTIONS */}
      <section className="pb-30 space-y-30 md:space-y-20 max-w-7xl mx-auto px-6">
        {activitySections.map((section) => (
          <div key={section.id} className={`flex flex-col ${section.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-0`}>
            
            {/* IMAGE BLOCK: SLIDER + PARDA */}
            <div className="w-full md:w-[65%] aspect-[16/10] relative group cursor-pointer  rounded-sm overflow-hidden z-10">
              <FeatureSlider images={section.images} />
              
              {/* THE "SINGLE SIDE PARDA" REVEAL */}
              <motion.div 
                whileHover={{ x: "50%" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                onClick={() => setSelected(section)}
                className="absolute inset-0 bg-transparent/10 z-20 flex items-center justify-center border-l border-white/10 transition-all duration-1000"
              >
                <div className="text-center">
       
                  <div className="mt-6 w-8 h-[1px] bg-white/20 mx-auto" />
                </div>
              </motion.div>
            </div>

            {/* TEXT BLOCK: OVERLAPPING CARD */}
            <motion.div 
              initial={{ opacity: 0, x: section.side === 'left' ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`w-full md:w-[45%] bg-white p-10 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.08)] z-20 lg:-ml-20 lg:mt-24 ${section.side === 'right' ? 'lg:-mr-20 lg:-ml-0' : ''} border border-slate-50`}
            >
              <span className="text-amber-800 font-bold text-[9px] uppercase tracking-[0.4em] mb-4 block">{section.accent}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-green-900 mb-6 leading-tight">{section.title}</h2>
              <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm ">"{section.description}"</p>
              
              <button 
                onClick={() => setSelected(section )}
                className="flex items-center gap-4 text-[#1a2e2a] font-serif text-[10px] uppercase tracking-[0.2em] group"
              >
                Explore More <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        ))}
      </section>

      {/* 3. ACCOMMODATION: REDIRECT SECTION */}
      <section className="py-32  mt-10 bg-[#1a1e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/accomodation-hero.png')] bg-cover bg-fixed" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-amber-500 font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">Lodge Estates</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-10">Luxury <span className=" text-amber-200">Accommodation</span></h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed text-lg">Secluded, rejuvenating spaces meticulously designed to serve as your sanctuary in the heart of Kanha.</p>
          <Link href="/accommodation">
            <motion.button whileHover={{ scale: 1.05 }} className="bg-white text-[#1a2e2a] px-12 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] shadow-2xl flex items-center gap-3 mx-auto">
              <Hotel className="w-4 h-4"/> Check Availability  <ChevronRight className="w-4 h-4"/>
            </motion.button>
          </Link>
        </div>
      </section>

   {/* 4. OTHER AMENITIES */}
<section className="py-32  relative overflow-hidden">

  {/* Background Watermark */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
    <h2 className="text-[18vw] font-serif text-[#1a2e2a] whitespace-nowrap">
      WILDER • KANHA
    </h2>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Section Header */}
    <div className="text-center mb-20 max-w-3xl mx-auto">
      <span className="text-amber-700 font-bold tracking-[0.5em] text-[10px] uppercase block mb-5">
        Resort Facilities
      </span>

      <h2 className="text-4xl md:text-6xl font-serif text-[#1a2e2a] leading-tight">
        Life at <span className=" text-amber-900">Wilder Beach</span>
      </h2>

      <p className="mt-6 text-slate-500 text-sm md:text-base leading-relaxed font-light">
        Experience comfort, adventure, wellness, and recreation with our thoughtfully designed facilities.
      </p>

      <div className="w-16 h-[2px] bg-amber-300 mx-auto mt-8" />
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
      {amenities.map((item, idx) => {
        const isExpanded = expandedIdx === idx;

        return (
          <motion.div
            key={idx}
            layout
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="group relative bg-white border border-slate-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
          >

            {/* IMAGE HEADER */}
            <div className="relative h-64 overflow-hidden">

              <Image
                src={item.img}
                alt={item.t}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Number */}
              

              {/* Category Badge */}
              <div className="absolute top-4 left-4 px-2 py-1 bg-white/20 backdrop-blur-md rounded-full text-[9px] uppercase tracking-[0.3em] text-white font-bold border text-yellow-500 border-white/20">
               {item.t}
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-5 left-5 flex items-center gap-4">

              
          

                {/* Title */}
                
              </div>
            </div>

            {/* CONTENT AREA */}
            <div className="p-8">

              <div
                className={`text-slate-600 text-sm leading-relaxed transition-all duration-500 ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {item.d}
              </div>

              {/* BUTTON */}
              <button
                onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                className="mt-6 flex items-center gap-2 text-amber-700 font-semibold text-[11px] uppercase tracking-[0.2em] hover:text-[#1a2e2a] transition-all"
              >
                {isExpanded ? "Show Less" : "Read More"}

                <ArrowUpRight
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Bottom Accent Line */}
            <div
              className={`h-[3px] bg-gradient-to-r from-amber-400 to-amber-700 transition-all duration-500 ${
                isExpanded ? "opacity-100" : "opacity-0"
              }`}
            />
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
      {/* 5. FINALE MODAL: SIR'S FULL TEXT REVEAL */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-white overflow-y-auto pt-10 px-6 pb-12">
            <button onClick={() => setSelected(null)} className="fixed top-10 right-10 p-4 bg-[#1a2e2a] text-white rounded-full z-[110] hover:scale-110 transition-all"><X/></button>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square md:aspect-[5/6] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={selected.images[0]} fill className="object-cover" alt="Detail" />
              </div>
              <div className="space-y-10">
                <span className="text-amber-800 font-bold tracking-[0.5em] text-[10px] uppercase">Wildlife Journal</span>
                <h2 className="text-5xl md:text-7xl font-serif text-green-900">{selected.title}</h2>
                <div className="w-30 h-[1px] bg-green-600" />
                <p className="text-xl font-serif  text-amber-900 leading-relaxed">"{selected.description}"</p>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{selected.fullText}</p>
                <Link href="/contact" className="inline-block pt-8">
                  <button className="bg-[#1a2e2a] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] flex items-center gap-4">Book Experience <ChevronRight className="w-4 h-4"/></button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}