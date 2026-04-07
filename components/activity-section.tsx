"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const activities = [
  {
    id: 1,
    name: "Scuba Diving Adventure",
    description: "Explore the vibrant underwater world with our certified diving instructors.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "3 hours",
    groupSize: "6 people max",
    rating: 4.9,
    price: "$89",
    category: "Water Sports",
  },
  {
    id: 2,
    name: "Sunset Yacht Cruise",
    description: "Sail into the sunset aboard our luxury yacht with champagne and canapés.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "2.5 hours",
    groupSize: "12 people max",
    rating: 4.8,
    price: "$149",
    category: "Cruises",
  },
  {
    id: 3,
    name: "Spa & Wellness Retreat",
    description: "Rejuvenate your body and mind with our signature spa treatments.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "2 hours",
    groupSize: "2 people max",
    rating: 5.0,
    price: "$199",
    category: "Wellness",
  },
  {
    id: 4,
    name: "Island Hopping Tour",
    description: "Discover hidden gems and pristine beaches on nearby tropical islands.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "6 hours",
    groupSize: "8 people max",
    rating: 4.7,
    price: "$129",
    category: "Adventure",
  },
  {
    id: 5,
    name: "Culinary Experience",
    description: "Learn to cook local delicacies with our executive chef.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "3 hours",
    groupSize: "10 people max",
    rating: 4.9,
    price: "$99",
    category: "Culinary",
  },
  {
    id: 6,
    name: "Beach Horseback Riding",
    description: "Ride along the pristine coastline on our gentle, well-trained horses.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "1.5 hours",
    groupSize: "4 people max",
    rating: 4.6,
    price: "$79",
    category: "Adventure",
  },
]

const categories = ["All", "Water Sports", "Cruises", "Wellness", "Adventure", "Culinary"]

export default function ActivitySection() {
  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-ocean-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-950 mb-6">Unforgettable Experiences</h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            From thrilling water sports to relaxing spa treatments, discover a world of activities designed to create
            lasting memories.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                index === 0
                  ? "bg-ocean-600 text-white shadow-lg"
                  : "bg-white text-ocean-700 hover:bg-ocean-50 shadow-md hover:shadow-lg"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="relative overflow-hidden">
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.name}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <div className="absolute top-4 left-4 bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {activity.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-ocean-950 px-3 py-1 rounded-full text-sm font-bold">
                    {activity.price}
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-ocean-950 mb-3">{activity.name}</h3>
                    <p className="text-ocean-700 mb-4 leading-relaxed">{activity.description}</p>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-ocean-700">
                        <Clock className="h-4 w-4 mr-2 text-ocean-600" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center text-sm text-ocean-700">
                        <Users className="h-4 w-4 mr-2 text-ocean-600" />
                        {activity.groupSize}
                      </div>
                      <div className="flex items-center text-sm text-ocean-700">
                        <Star className="h-4 w-4 mr-2 text-paradise-500 fill-current" />
                        {activity.rating} rating
                      </div>
                    </div>
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3">
                      Book Experience
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-ocean-600 to-luxury-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Can't Decide?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let our concierge team create a personalized itinerary just for you.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-ocean-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Plan My Stay
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
