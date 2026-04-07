"use client"

import { motion } from "framer-motion"
import { Wifi, Car, Coffee, Waves, Utensils, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const lodgeTypes = [
  {
    id: 1,
    name: "Ocean View Suite",
    price: "$299",
    period: "per night",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Ocean View", "Private Balcony", "King Bed", "Mini Bar"],
    amenities: [Wifi, Coffee, Utensils],
  },
  {
    id: 2,
    name: "Beach Villa",
    price: "$599",
    period: "per night",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Private Pool", "Beach Access", "Full Kitchen", "Garden View"],
    amenities: [Wifi, Car, Waves, Dumbbell],
  },
  {
    id: 3,
    name: "Presidential Suite",
    price: "$999",
    period: "per night",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Panoramic View", "Butler Service", "Jacuzzi", "Private Dining"],
    amenities: [Wifi, Coffee, Utensils, Car, Waves],
  },
]

const amenities = [
  { icon: Wifi, name: "Free WiFi" },
  { icon: Car, name: "Valet Parking" },
  { icon: Coffee, name: "Room Service" },
  { icon: Waves, name: "Pool Access" },
  { icon: Utensils, name: "Fine Dining" },
  { icon: Dumbbell, name: "Fitness Center" },
]

export default function LodgeSection() {
  return (
    <section id="lodge" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-950 mb-6">Luxury Accommodations</h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            Choose from our carefully curated selection of suites and villas, each designed to provide the ultimate in
            comfort and elegance.
          </p>
        </motion.div>

        {/* Lodge Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {lodgeTypes.map((lodge, index) => (
            <motion.div
              key={lodge.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <Image
                      src={lodge.image || "/placeholder.svg"}
                      alt={lodge.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 right-4 bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {lodge.price} <span className="text-xs">/{lodge.period}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-ocean-950 mb-4">{lodge.name}</h3>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-ocean-800 mb-3">Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {lodge.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-ocean-700 flex items-center">
                          <div className="w-2 h-2 bg-ocean-600 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-ocean-800 mb-3">Amenities</h4>
                    <div className="flex space-x-3">
                      {lodge.amenities.map((Amenity, idx) => (
                        <div key={idx} className="p-2 bg-ocean-50 rounded-lg">
                          <Amenity className="h-4 w-4 text-ocean-600" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3">
                      Book Now
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* All Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-ocean-50 to-luxury-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-ocean-950 text-center mb-8">Resort Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 mb-3">
                  <amenity.icon className="h-8 w-8 text-ocean-600 mx-auto" />
                </div>
                <p className="text-sm font-medium text-ocean-800">{amenity.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
