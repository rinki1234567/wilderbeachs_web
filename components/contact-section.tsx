"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Paradise Beach Drive", "Tropical Island, TI 12345"],
    color: "text-blue-600",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    color: "text-green-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@wilderbeach.com", "reservations@wilderbeach.com"],
    color: "text-purple-600",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["24/7 Concierge Service", "Check-in: 3:00 PM"],
    color: "text-orange-600",
  },
]
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience paradise? Contact our team to plan your perfect getaway or ask any questions about our
            resort and services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                      <Input
                        placeholder="John"
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                      <Input
                        placeholder="Doe"
                        className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <Textarea
                      placeholder="Tell us about your dream vacation..."
                      rows={6}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg"
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300"
              >
                <div className={`p-3 rounded-full bg-white shadow-lg ${info.color}`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 text-center"
            >
              <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Find Us</h4>
              <p className="text-gray-600 mb-4">
                Located on the pristine shores of Paradise Beach, our resort offers easy access to both adventure and
                tranquility.
              </p>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
              >
                View on Map
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
