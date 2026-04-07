"use client"

import { motion } from "framer-motion"
import { Award, Users, MapPin, Star } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Award, label: "Awards Won", value: "25+" },
  { icon: Users, label: "Happy Guests", value: "10K+" },
  { icon: MapPin, label: "Prime Location", value: "5★" },
  { icon: Star, label: "Rating", value: "4.9" },
]

const features = [
  {
    title: "Luxury Accommodations",
    description: "Experience unparalleled comfort in our meticulously designed suites and villas.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "World-Class Dining",
    description: "Savor exquisite cuisine crafted by renowned chefs using the finest local ingredients.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Pristine Beach Access",
    description: "Enjoy exclusive access to our private beach with crystal-clear waters and white sand.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About WilderBeach Resort</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nestled along the pristine coastline, WilderBeach Resort offers an unparalleled luxury experience where
            modern elegance meets natural beauty. Our commitment to excellence ensures every moment of your stay is
            extraordinary.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <motion.div whileHover={{ scale: 1.02 }} className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              </div>
              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">{feature.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
