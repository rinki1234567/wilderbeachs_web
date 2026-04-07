"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-ocean-600 to-luxury-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Mail className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter and be the first to know about exclusive offers, new experiences, and special
            events at WilderBeach Resort.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input type="email" placeholder="Enter your email address" className="h-12 bg-white border-0 flex-1" />
            <Button size="lg" className="bg-white text-ocean-600 hover:bg-gray-100 font-semibold px-8">
              Subscribe
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
