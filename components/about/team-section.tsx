
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
    // position: "Founder & CEO",
    image: "/about/ashis.jpg",
    bio: `Mr. Ashis Tyagi brings over three decades of dedicated experience in hospitality, wildlife resort management, and Himalayan adventure operations. His career has been shaped by a deep commitment to sustainable tourism, nature conservation, and delivering authentic wilderness experiences. From managing boutique wildlife resorts to leading specialized camping expeditions across the Himalayas, he has built a reputation for exceptional guest care, operational excellence, and a profound understanding of mountain environments. His vision continues to inspire immersive, responsible, and memorable journeys for travelers seeking the true spirit of the wild.`,
    social: { linkedin: "#", twitter: "#", email: "james@wilderbeach.com" },
  },
  {
    id: 2,
    name: "Mr. Nitesh Anandan",
    // position: "General Manager",
    image: "/about/nitesh_anand.jpeg",
    bio: `Mr. Nitesh Anandan is a dedicated wildlife researcher and award-winning wildlife photographer whose connection with nature began at the age of three, guided by his father, Mr. Anandan—a respected wildlife conservationist and photographer. He started his journey with birdwatching and gradually developed a deep fascination for reptiles and amphibians, a passion he has pursued for over 15 years. His work has contributed to the publication of few research papers, including the documentation of new species. Mr. Nitesh is also actively involved in management, bringing a blend of eld expertise, leadership, and a strong conservation-driven vision to every project he undertakes.`,
    social: { linkedin: "#", twitter: "#", email: "nitesh@wilderbeach.com" },
  },
  {
    id: 3,
    name: "Mr. Sumit Gosain",
    // position: "Director of Operations",
    image: "/about/sumit.jpg",
    bio: `Mr. Sumit Gosain is an accomplished hospitality professional with over a decade of experience in resort management, particularly within the rich wilderness of Kanha National Park. His career reflects a deep commitment to guest satisfaction, smooth operations, and delivering authentic nature-based hospitality experiences. Known for his strong leadership, attention to detail, and ability to create warm and memorable stays for guests, Mr. Sumit has played a key role in elevating resort standards in one of India’s most celebrated wildlife destinations. His expertise continues to contribute to high-quality service, sustainable practices, and a welcoming environment for travelers from around the world.`,
    social: { linkedin: "#", twitter: "#", email: "david@wilderbeach.com" },
  },
  {
    id: 4,
    name: "Mr. Alok Juyal",
    // position: "Guest Experience Director",
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
                <div className="relative w-full h-[350px] overflow-hidden">
  <Image
    src={member.image}
    alt={member.name}
    fill
    className="object-cover object-center  transition-all duration-700"
    sizes="(max-width:768px) 100vw, 420px"
    priority
  />
</div>
                  <hr />
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#112421] uppercase tracking-wider mb-1">{member.name}</h3>
                  {/* <p className="text-green-900 text-xs font-bold uppercase tracking-[0.2em] mb-6">{member.position}</p>
                   */}
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
                  <div className="mt-auto pt-6 border-t border-gray-50 flex  justify-center gap-4">
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