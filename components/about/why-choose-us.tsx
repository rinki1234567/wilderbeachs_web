// // import Image from "next/image"

// // export default function WhyChooseUs() {
// //   const features = [
// //     { title: "Bespoke Safari", icon: "/icons/bird.png", desc: "Tailored itineraries to your interests." },
// //     { title: "Expert Naturalists", icon: "/icons/tiger.png", desc: "Trackers who know every beat of the jungle." },
// //     { title: "Lodge Estates", icon: "/icons/tree.png", desc: "Secluded spaces designed to blend with nature." },
// //   ]

// //   return (
// //     <section className="py-24 bg-white text-center px-6">
// //       <div className="max-w-6xl mx-auto">
// //         <h2 className="text-[10px] tracking-[0.5em] uppercase text-amber-600 font-bold mb-12">Why Choose Us</h2>
// //         <div className="grid md:grid-cols-3 gap-16">
// //           {features.map((f, i) => (
// //             <div key={i} className="flex flex-col items-center group">
// //               <div className="w-16 h-16 relative mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
// //                 <Image src={f.icon} alt={f.title} fill className="object-contain" />
// //               </div>
// //               <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#112421] mb-4">{f.title}</h4>
// //               <p className="text-gray-500 text-sm leading-relaxed font-light max-w-[250px]">{f.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }

// "use client"

// import Image from "next/image"
// import { motion } from "framer-motion"

// export default function WhyChooseUs() {
//   const features = [
//     {
//       title: "bespoke safari experiences",
//       icon: "/images/bird.jpg", // Use a hummingbird or kingfisher icon
//       desc: "Our team tailors safari and park suggestions to your interests and time preferences, crafting personalized itineraries and advising on the best safari zones in Kanha based on sighting predictability.",
//     },
//     {
//       title: "expert tiger trackers & naturalists",
//       icon: "/images/tiger.jpg", // Use a tiger illustration icon
//       desc: "Safari in Central India differs from the African bush; dense foliage requires skilled trackers who know tiger patterns. Our Hindi and English-speaking naturalists enhance your wildlife experience on game drives.",
//     },
//     {
//       title: "lodge estates & biodiverse spaces",
//       icon: "/images/tree.jpg", // Use a banyan or sal tree icon
//       desc: "Wilder Beach Retreat offers secluded, rejuvenating spaces, meticulously designed to blend with the lush Kanha forests. Nestled in core-buffer areas, they serve as your sanctuary to unwind from city life.",
//     },
//   ]

//   return (
//     <section className="py-24 bg-white text-center px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Main Heading Style */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-serif text-[#4A3728] lowercase italic">
//             why <span className="text-green-900  font-light">choose us</span>
//           </h2>
//           <div className="w-16 h-[1px] bg-amber-600 mx-auto mt-4 mb-8" />
//           <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light">
//             While we are aware that there are many options for lodges in Kanha Kisli for you to choose from, 
//             we hope that our deep knowledge of the wildlife and unparalleled hospitality will win you over.
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
//           {features.map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2 }}
//               className="flex flex-col items-center group"
//             >
//               {/* Icon Image */}
//               <div className="w-24 h-24 relative mb-6 transition-transform duration-500 group-hover:scale-110">
//                 <Image
//                   src={f.icon}
//                   alt={f.title}
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               {/* Feature Title */}
//               <h4 className="text-lg md:text-xl font-serif text-amber-800 lowercase mb-4 tracking-tight">
//                 {f.title}
//               </h4>

//               {/* Feature Description */}
//               <p className="text-gray-500 text-sm leading-relaxed font-light text-center md:text-justify">
//                 {f.desc}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Decorative Bottom Element */}
//         <div className="mt-20 flex justify-center ">
//            <Image src="/images/a10.jpeg" alt="decoration" width={300} height={20} />
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const features = [
    {
      title: "bespoke safari",
      icon: "/images/bird.jpg", // Use a square image or ensure object-cover works
      desc: "Tailored itineraries and expert advice on Kanha's best safari zones based on sighting predictability.",
    },
    {
      title: "expert trackers",
      icon: "/images/tiger.jpg",
      desc: "Skilled Hindi and English-speaking naturalists who understand dense foliage and tiger patterns.",
    },
    {
      title: "lodge estates",
      icon: "/images/tree.jpg",
      desc: "Secluded spaces designed to blend with lush forests, serving as your sanctuary from city life.",
    },
  ]

  return (
    <section className="py-24 bg-[#fdfcf9] px-6 relative overflow-hidden">
      {/* Background Subtle Watermark for Aesthetic feel */}
      <div className="absolute top-10 left-10 text-[20vw] font-serif italic text-black/[0.02] select-none pointer-events-none">
        Wilder
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Heading Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-amber-700 font-bold tracking-[0.5em] text-[10px] uppercase block mb-4">
            The Wilder Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a2e2a]  lowercase leading-tight">
            why <span className="text-amber-900 font-bold">choose us</span>
          </h2>
          <div className="w-16 h-[1px] bg-amber-600/40 mx-auto mt-6 mb-8" />
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed font-light italic">
            "While we are aware that there are many options for lodges in Kanha Kisli,
            our deep knowledge of the wild and unparalleled hospitality will win you over."
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="flex flex-col items-center group text-center"
            >

              <div className="relative mb-10 flex justify-center items-center">
  {/* Outer Ring Decor */}
  <div className="absolute inset-[-12px] border border-amber-600/10 rounded-full group-hover:scale-110 transition-transform duration-700" />

  {/* Image Container */}
  <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-white shadow-xl z-10 bg-[#fcfbf8] flex items-center justify-center p-6">
    <Image
      src={f.icon}
      alt={f.title}
      fill
      // --- CHANGES START HERE ---
      // 'object-contain' use karne se image stretch ya cut nahi hogi
      // 'p-8' ya 'padding' se image circle ke kinaro se thodi door rahegi
      className="object-contain p-4 transition-all duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
      priority
    />
    
    {/* Subtle Hover Overlay */}
    <div className="absolute inset-0 bg-amber-900/5 opacity-0 group-hover:opacity-100 transition-opacity z-20" />
  </div>
</div>

              {/* Feature Title */}
              <h4 className="text-xl md:text-2xl font-serif text-[#1a2e2a] mb-5 tracking-tight capitalize">
                {f.title}
              </h4>

              {/* Feature Description */}
              <p className="text-slate-500 text-[15px] leading-relaxed font-light px-2">
                {f.desc}
              </p>

              {/* Bottom Accent Line */}
              <motion.div
                className="h-[1px] bg-amber-700/30 mt-8 w-0 group-hover:w-16 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative Bottom Sign-off */}
        <div className="mt-10 flex justify-center ">
          <Image
            src="/images/a10.jpeg"
            alt="decoration"
            width={200}
            height={15}
            className="opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}