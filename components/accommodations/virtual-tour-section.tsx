"use client"

import { motion } from "framer-motion"
import { Play, Eye, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function VirtualTourSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-950 mb-6">Take a Virtual Tour</h2>
          <p className="text-xl text-ocean-700 max-w-3xl mx-auto">
            Explore our accommodations from the comfort of your home with our immersive virtual tours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group cursor-pointer">
              <Image
                src="/placeholder.svg?height=500&width=700&text=Virtual+Tour+Preview"
                alt="Virtual Tour"
                width={700}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white rounded-full p-6">
                  <Play className="h-12 w-12 text-ocean-600" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-ocean-100 rounded-full p-3">
                <Eye className="h-6 w-6 text-ocean-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ocean-950 mb-2">360° Room Views</h3>
                <p className="text-ocean-700">
                  Experience every angle of our luxurious accommodations with interactive 360-degree views.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-ocean-100 rounded-full p-3">
                <Camera className="h-6 w-6 text-ocean-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ocean-950 mb-2">High-Resolution Gallery</h3>
                <p className="text-ocean-700">
                  Browse through our extensive photo gallery showcasing every detail of your future stay.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-ocean-100 rounded-full p-3">
                <Play className="h-6 w-6 text-ocean-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-ocean-950 mb-2">Video Walkthroughs</h3>
                <p className="text-ocean-700">Take guided video tours of our suites, amenities, and resort grounds.</p>
              </div>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-ocean-600 hover:bg-ocean-700 text-white">
                Start Virtual Tour
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
