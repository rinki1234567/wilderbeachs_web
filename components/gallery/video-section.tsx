"use client"

import { motion } from "framer-motion"
import { Play, Volume2 } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "Resort Overview",
    description: "Take a cinematic tour of our entire resort and its stunning amenities",
    thumbnail: "/placeholder.svg?height=300&width=500&text=Resort+Overview+Video",
    duration: "3:45",
  },
  {
    id: 2,
    title: "Culinary Journey",
    description: "Meet our chefs and discover the artistry behind our world-class cuisine",
    thumbnail: "/placeholder.svg?height=300&width=500&text=Culinary+Journey+Video",
    duration: "2:30",
  },
  {
    id: 3,
    title: "Adventure Activities",
    description: "Experience the thrill of our water sports and adventure activities",
    thumbnail: "/placeholder.svg?height=300&width=500&text=Adventure+Activities+Video",
    duration: "4:15",
  },
]

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-ocean-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-950 mb-6">Video Gallery</h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            Immerse yourself in the WilderBeach experience through our collection of stunning videos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
                  <Image
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-luxury-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white rounded-full p-4 shadow-lg"
                  >
                    <Play className="h-8 w-8 text-luxury-600 ml-1" />
                  </motion.div>
                </div>

                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Volume2 className="h-3 w-3 mr-1" />
                  {video.duration}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold text-ocean-950 mb-2">{video.title}</h3>
                <p className="text-ocean-700 leading-relaxed">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
