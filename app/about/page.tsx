// import type { Metadata } from "next"
// import AboutHero from "@/components/about/about-hero"
// import StorySection from "@/components/about/story-section"
// import TeamSection from "@/components/about/team-section"
// import ValuesSection from "@/components/about/values-section"
// import AwardsSection from "@/components/about/awards-section"
// export const metadata: Metadata = {
//   title: "About Us - WilderBeach Resort",
//   description:
//     "Discover the story behind WilderBeach Resort, our commitment to excellence, and the passionate team that makes your stay unforgettable.",
// }
// export default function AboutPage() {
//   return (
//     <>
//       <AboutHero />
//       {/* <StorySection /> */}
//       <ValuesSection />
//       <TeamSection />
//       {/* <AwardsSection /> */}
//     </>
//   )
// }


// "use client"
// import { useState } from "react"
// import { AnimatePresence, motion } from "framer-motion"
// import AboutHero from "@/components/about/about-hero"
// import AboutNav from "@/components/about/about-nav" // Nayi file
// import StorySection from "@/components/about/story-section"
// import WhyChooseUs from "@/components/about/why-choose-us" // Nayi file
// import TeamSection from "@/components/about/team-section"
// import ValuesSection from "@/components/about/values-section"

// export default function AboutPage() {
//   const [activeTab, setActiveTab] = useState("story")

//   return (
//     <main className="bg-[#FDFCFB]">
//       {/* 1. Aapka current Hero (Working wala) */}
//       <AboutHero />

//       {/* 2. Navigation (Hero ke niche aayega) */}
//       <AboutNav activeTab={activeTab} setActiveTab={setActiveTab} />

//       {/* 3. Sections Content (Tab ke hisaab se badlega) */}
//       <div className="min-h-[50vh] relative z-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//           >
//             {activeTab === "story" && <StorySection />}
//             {activeTab === "why" && <WhyChooseUs />}
//             {activeTab === "team" && <TeamSection />}
//             {activeTab === "values" && <ValuesSection />}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </main>
//   )
// }

"use client"

import AboutHero from "@/components/about/about-hero"
import AboutNav from "@/components/about/about-nav"
import StorySection from "@/components/about/story-section"
import TeamSection from "@/components/about/team-section"
import ValuesSection from "@/components/about/values-section"
import WhyChooseUs from "@/components/about/why-choose-us"
import AwardsSection from "@/components/about/awards-section"

export default function AboutPage() {
  return (
    <main className="bg-[#FDFCFB] scroll-smooth">
      {/* 1. Hero (Pehle se working hai) */}
      <AboutHero />

      {/* 2. Navigation (Jo scroll handle karega) */}
      <AboutNav />

      {/* 3. Saare Sections ek ke niche ek */}
      <section id="story">
        <StorySection />
      </section>
      
      <section id="why">
        <WhyChooseUs />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>
      
      <section id="values">
        <ValuesSection />
      </section>

      <section id="awards">
        <AwardsSection />
      </section>
      
      {/* Footer ke liye space */}
      <div className="h-20 bg-transparent"></div>
    </main>
  )
}