
"use client"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Rachel Green",
    location: "Mumbai, India",
    rating: 5,
    text: "Wilder Beach Retreat exceeded all our expectations. The silence of the forest and the impeccable service made our stay truly spiritual.",
  },
  {
    id: 2,
    name: "Ross Geller",
    location: "New Delhi, India",
    rating: 5,
    text: "An absolutely magical experience. Watching the sunrise from our villa while hearing the jungle wake up was divine. World-class dining.",
  },
  {
    id: 3,
    name: "Phoebe Buffay",
    location: "London, UK",
    rating: 5,
    text: "This resort is a sanctuary for the soul. The staff went above and beyond. It's the perfect blend of wild nature and luxury.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-32 bg-[#FDFCFB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative ">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-emerald-800 font-bold mb-4 block">
            Guest Experiences
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C3327] mb-6">
            Voices from the <span className=" font-light text-[#0B2B26]">Wild.</span>
          </h2>
          <div className="w-20 h-[1px] bg-amber-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              
              // --- HOVER ANIMATION START ---
              whileHover={{ y: -10 }} // Card thoda upar jayega
              className="group cursor-default"
            >
              <Card className="h-full border border-transparent bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] rounded-none relative transition-all duration-500 group-hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group-hover:border-emerald-100">
                
                {/* Top Border Glow on Hover */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-500 group-hover:w-full" />

                {/* Decorative Quote Icon - Hover par color change hoga */}
                <div className="absolute -top-5 left-8 w-10 h-10 bg-[#112421] group-hover:bg-amber-500 flex items-center justify-center text-white shadow-xl transition-colors duration-500">
                  <Quote size={18} fill="currentColor" />
                </div>

                <CardContent className="pt-12 pb-10 px-8">
                  {/* Rating - Stars thode pop honge hover par */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 text-amber-500 fill-current mr-1 transition-transform duration-300 group-hover:scale-110" 
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-[#4A3728] leading-relaxed mb-10 text-lg font-serif italic opacity-80 group-hover:opacity-100 transition-opacity">
                    "{testimonial.text}"
                  </p>

                  {/* Author Header */}
                  <div className="border-t border-slate-100  transition-colors group-hover:border-emerald-50">
                    {/* <h4 className="font-bold text-[#112421] tracking-wide text-sm uppercase">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-xs tracking-widest mt-1 uppercase">
                      {testimonial.location}
                    </p> */}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-sm font-bold text-[#112421]">Excellent</span>
            <div className="flex gap-1">
               {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.2 }}
                  className="w-5 h-5 bg-emerald-800 flex items-center justify-center"
                >
                  <Star size={10} className="text-white fill-current" />
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-[10px] text-slate-400 tracking-[0.3em] uppercase">
            Over 500 Verified Wilderness Stories
          </p>
        </motion.div>
      </div>
    </section>
  )
}