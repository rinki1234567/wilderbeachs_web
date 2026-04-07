// "use client"
// import { motion } from "framer-motion"
// import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from "lucide-react"
// const contactInfo = [
//   {
//     icon: MapPin,
//     title: "Location",
//     details: [" Khasra No. 21, Chowki Tola Village Kutwahi, Mandla, Madhya Pradesh, India, 481768 (Exactly 10 km from the main gate of Kanha National Park) Gate Name: Khatua Gate"],
//     color: "text-ocean-600",
//     bgColor: "bg-ocean-100",
//   },
//   {
//     icon: Phone,
//     title: "Phone Numbers",
//     details: ["+91 6265040030 (Main)", "+91 6265040030 (Reservations)", "+91 6265040030 (Concierge)"],
//     color: "text-tropical-600",
//     bgColor: "bg-tropical-100",
//   },
//   {
//     icon: Mail,
//     title: "Email Addresses",
//     details: ["info@wilderbeach.com", "reservations@wilderbeach.com", "concierge@wilderbeach.com"],
//     color: "text-luxury-600",
//     bgColor: "bg-luxury-100",
//   },
//   {
//     icon: Clock,
//     title: "Operating Hours",
//     details: ["24/7 Concierge Service", "Check-in: 3:00 PM", "Check-out: 11:00 AM"],
//     color: "text-coral-600",
//     bgColor: "bg-coral-100",
//   },
// ]

// const quickActions = [
//   {
//     icon: MessageCircle,
//     title: "Live Chat",
//     description: "Chat with our team instantly",
//     action: "Start Chat",
//     color: "bg-ocean-600 hover:bg-ocean-700",
//   },
//   {
//     icon: Phone,
//     title: "Call Now",
//     description: "Speak with a reservation specialist",
//     action: "Call +1 (555) 123-4567",
//     color: "bg-tropical-600 hover:bg-tropical-700",
//   },
//   {
//     icon: Globe,
//     title: "Virtual Tour",
//     description: "Explore our resort online",
//     action: "Take Tour",
//     color: "bg-luxury-600 hover:bg-luxury-700",
//   },
// ]

// // export default function ContactInfo() {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, x: 50 }}
// //       whileInView={{ opacity: 1, x: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ duration: 0.8 }}
// //       className="space-y-8"
// //     >
// //       {/* Contact Information Cards */}
// //       {contactInfo.map((info, index) => (
// //         <motion.div
// //           key={info.title}
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6, delay: index * 0.1 }}
// //           whileHover={{ scale: 1.02, x: 10 }}
// //           className="flex items-start space-x-4 p-8 bg-white rounded-2xl shadow-lg 
// //           hover:shadow-xl transition-all duration-300"
// //           >
// //           <div className={`p-3 rounded-full ${info.bgColor} shadow-lg ${info.color}`}>
// //             <info.icon className="h-6 w-6" />
// //           </div>
// //           <div className="flex-1">
// //             <h4 className="text-lg font-bold text-ocean-950 mb-2">{info.title}</h4>
// //             {info.details.map((detail, idx) => (
// //               <p key={idx} className="text-ocean-700 leading-relaxed">
// //                 {detail}
// //               </p>
// //             ))}
// //           </div>
// //         </motion.div>
// //       ))}
// //     </motion.div>
// //   )
// // }


"use client"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const info = [
  { 
    icon: MapPin, 
    title: "Location", 
    accentColor: "bg-amber-600", // Gold Accent
    details: ["Khasra No. 21, Village Kutwahi, Mandla, MP", "Gate Name: Khatua Gate"] 
  },
  { 
    icon: Phone, 
    title: "Phone Numbers", 
    accentColor: "bg-[#1a2e2a]", // Forest Green Accent
    details: ["+91 6265040030 (Main)", "+91 6265040030 (Reservations)", "+91 6265040030 (Concierge)"] 
  },
  { 
    icon: Mail, 
    title: "Email Addresses", 
    accentColor: "bg-amber-700", 
    details: ["info@wilderbeach.com", "reservations@wilderbeach.com", "concierge@wilderbeach.com"] 
  },
  { 
    icon: Clock, 
    title: "Operating Hours", 
    accentColor: "bg-[#1a2e2a]", 
    details: ["24/7 Concierge Service", "Check-in: 3:00 PM", "Check-out: 11:00 AM"] 
  },
]

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {info.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          className="relative  bg-white p-8  rounded-[30px] flex items-start gap-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] group hover:shadow-xl transition-all duration-500"
        >
          {/* Vaaman Style Vertical Accent Line */}
          <div className={`absolute left-0 top-0 bottom-0 w-[5px] ${item.accentColor} opacity-80`} />

          {/* Icon Circle */}
          <div className="w-12 h-12 rounded-full bg-[#fcfbf8] flex items-center justify-center text-[#1a2e2a] border border-slate-100 group-hover:bg-[#1a2e2a] group-hover:text-white transition-all duration-500 shrink-0">
            <item.icon size={18} />
          </div>

          {/* Content (Exactly like your 3rd image) */}
          <div className="space-y-3">
            <h4 className="text-sm font- font-bold text-[#1a2e2a] tracking-tight">
              {item.title}
            </h4>
            <div className="space-y-1.5">
              {item.details.map((line, i) => (
                <p key={i} className="text-slate-500 text-sm  ">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}