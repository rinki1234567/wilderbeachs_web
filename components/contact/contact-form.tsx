

// "use client"

// import { motion } from "framer-motion"
// import { Send } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { useState } from "react"
// // import { useToast } from "../ui/use-toast"
// import { useToast } from "@/hooks/use-toast"

// // export default function ContactForm() {

// //   const [formData, setFormData] = useState({
// //     first_name: "",
// //     last_name: "",
// //     email_id: "",
// //     phone: "",
// //     subject: "",
// //     message: ""
// //   })

// //   const [loading, setLoading] = useState(false)
// //   const { toast } = useToast()

// //   const handleChange = (e: any) => {
// //     const { name, value } = e.target

// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value
// //     }))
// //   }

// //   const handleSubmit = async (e: any) => {
// //     e.preventDefault()

// //     setLoading(true)

// //     try {

// //       const res =
// //         await fetch(`${process.env.NEXT_PUBLIC_FRAPPE_SITE_URL}/api/method/hotel_booking.api.contact.create_contact`, {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json"
// //           },
// //           body: JSON.stringify({
// //             first_name: formData.first_name,
// //             last_name: formData.last_name,
// //             email: formData.email_id,
// //             phone: formData.phone,
// //             subject: formData.subject,
// //             message: formData.message
// //           })
// //         })

// //       const data = await res.json()

// //       if (!res.ok) {
// //         throw new Error(data?.message || "Failed to submit form")
// //       }

// //       // alert("Message sent successfully!")
// //       toast({ title: "Message sent successfully!", variant: "default" })

// //       setFormData({
// //         first_name: "",
// //         last_name: "",
// //         email_id: "",
// //         phone: "",
// //         subject: "",
// //         message: ""
// //       })

// //     } catch (err) {

// //       console.error(err)
// //       alert("Something went wrong. Please try again.")

// //     } finally {
// //       setLoading(false)
// //     }
// //   }

//   // return (
//     // <motion.div
//     //   initial={{ opacity: 0, x: -50 }}
//     //   whileInView={{ opacity: 1, x: 0 }}
//     //   viewport={{ once: true }}
//     //   transition={{ duration: 0.8 }}
//     // >
//     //   <Card className="shadow-2xl border-0">
//     //     <CardHeader className="text-center pb-2">
//     //       <h3 className="text-2xl font-bold text-ocean-950 mb-2">
//     //         Send us a Message
//     //       </h3>
//     //       <p className="text-ocean-700">
//     //         We'll get back to you within 24 hours
//     //       </p>
//     //     </CardHeader>

//     //     <CardContent className="p-8">
//     //       <form onSubmit={handleSubmit} className="space-y-6">

//     //         {/* First + Last Name */}
//     //         <div className="grid md:grid-cols-2 gap-6">

//     //           <motion.div
//     //             initial={{ opacity: 0, y: 20 }}
//     //             whileInView={{ opacity: 1, y: 0 }}
//     //             transition={{ duration: 0.5 }}
//     //           >
//     //             <label className="block text-sm font-semibold text-ocean-800 mb-2">
//     //               First Name *
//     //             </label>

//     //             <Input
//     //               name="first_name"
//     //               value={formData.first_name}
//     //               onChange={handleChange}
//     //               placeholder="Your first name"
//     //               className="h-12 border-ocean-300"
//     //               required
//     //             />
//     //           </motion.div>

//     //           <motion.div
//     //             initial={{ opacity: 0, y: 20 }}
//     //             whileInView={{ opacity: 1, y: 0 }}
//     //             transition={{ duration: 0.5 }}
//     //           >
//     //             <label className="block text-sm font-semibold text-ocean-800 mb-2">
//     //               Last Name *
//     //             </label>

//     //             <Input
//     //               name="last_name"
//     //               value={formData.last_name}
//     //               onChange={handleChange}
//     //               placeholder="Your last name"
//     //               className="h-12 border-ocean-300"
//     //               required
//     //             />
//     //           </motion.div>

//     //         </div>

//     //         {/* Email */}
//     //         <motion.div
//     //           initial={{ opacity: 0, y: 20 }}
//     //           whileInView={{ opacity: 1, y: 0 }}
//     //           transition={{ duration: 0.5 }}
//     //         >
//     //           <label className="block text-sm font-semibold text-ocean-800 mb-2">
//     //             Email Address *
//     //           </label>

//     //           <Input
//     //             type="email"
//     //             name="email_id"
//     //             value={formData.email_id}
//     //             onChange={handleChange}
//     //             placeholder="wilderbeach@example.com"
//     //             className="h-12 border-ocean-300"
//     //             required
//     //           />
//     //         </motion.div>

//     //         {/* Phone */}
//     //         <motion.div>
//     //           <label className="block text-sm font-semibold text-ocean-800 mb-2">
//     //             Phone Number
//     //           </label>

//     //           <Input
//     //             name="phone"
//     //             value={formData.phone}
//     //             onChange={handleChange}
//     //             placeholder="+91 98765 43210"
//     //             className="h-12 border-ocean-300"
//     //           />
//     //         </motion.div>

//     //         {/* Subject */}
//     //         <motion.div>
//     //           <label className="block text-sm font-semibold text-ocean-800 mb-2">
//     //             Subject
//     //           </label>

//     //           <select
//     //             name="subject"
//     //             value={formData.subject}
//     //             onChange={handleChange}
//     //             className="w-full h-12 border border-ocean-300 rounded-md px-3"
//     //           >
//     //             <option value="">Select a subject</option>
//     //             <option value="reservation">Reservation Inquiry</option>
//     //             <option value="dining">Dining Reservations</option>
//     //             <option value="activities">Activities & Experiences</option>
//     //             <option value="events">Events & Weddings</option>
//     //             <option value="feedback">Feedback</option>
//     //             <option value="other">Other</option>
//     //           </select>
//     //         </motion.div>

//     //         {/* Message */}
//     //         <motion.div>
//     //           <label className="block text-sm font-semibold text-ocean-800 mb-2">
//     //             Message *
//     //           </label>

//     //           <Textarea
//     //             name="message"
//     //             value={formData.message}
//     //             onChange={handleChange}
//     //             rows={6}
//     //             placeholder="Tell us about your dream vacation..."
//     //             className="border-ocean-300 resize-none"
//     //             required
//     //           />
//     //         </motion.div>

//     //         {/* Submit */}
//     //         <motion.div whileHover={{ scale: 1.02 }}>
//     //           <Button
//     //             type="submit"
//     //             disabled={loading}
//     //             className="w-full h-12 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold text-lg"
//     //           >
//     //             <Send className="mr-2 h-5 w-5" />

//     //             {loading ? "Sending..." : "Send Message"}
//     //           </Button>
//     //         </motion.div>

//     //       </form>
//     //     </CardContent>
//     //   </Card>
//     // </motion.div>

//     // ... (keep your existing imports and logic)

// // return (
// //   <motion.div
// //     initial={{ opacity: 0, y: 30 }}
// //     whileInView={{ opacity: 1, y: 0 }}
// //     viewport={{ once: true }}
// //     transition={{ duration: 0.8 }}
// //     className="relative"
// //   >
// //     {/* Decorative Background Element */}
// //     <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-100/20 rounded-full blur-3xl" />

// //     <Card className="shadow-[0_20px_50px_rgba(26,46,42,0.1)] border-t-4 border-t-amber-600 bg-white/80 backdrop-blur-sm overflow-hidden rounded-3xl">
// //       <CardHeader className="text-center pb-4 pt-10">
// //         <span className="text-amber-700 font-bold tracking-[0.4em] text-[10px] uppercase mb-2 block">Get in Touch</span>
// //         <h3 className="text-4xl font-serif text-[#1a2e2a] mb-2">Send us a Message</h3>
// //         <div className="w-12 h-[1px] bg-amber-200 mx-auto mt-4" />
// //       </CardHeader>

// //       <CardContent className="p-8 md:p-12">
// //         <form onSubmit={handleSubmit} className="space-y-8">
// //           <div className="grid md:grid-cols-2 gap-8">
// //             <div className="space-y-2">
// //               <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 ml-1">First Name *</label>
// //               <Input
// //                 name="first_name"
// //                 value={formData.first_name}
// //                 onChange={handleChange}
// //                 placeholder="Ex: John"
// //                 className="h-14 border-0 border-b border-slate-200 rounded-none focus-visible:ring-0 focus-visible:border-amber-600 bg-transparent transition-all px-1"
// //                 required
// //               />
// //             </div>
// //             <div className="space-y-2">
// //               <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 ml-1">Last Name *</label>
// //               <Input
// //                 name="last_name"
// //                 value={formData.last_name}
// //                 onChange={handleChange}
// //                 placeholder="Ex: Doe"
// //                 className="h-14 border-0 border-b border-slate-200 rounded-none focus-visible:ring-0 focus-visible:border-amber-600 bg-transparent transition-all px-1"
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="space-y-2">
// //             <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address *</label>
// //             <Input
// //               type="email"
// //               name="email_id"
// //               value={formData.email_id}
// //               onChange={handleChange}
// //               placeholder="wilderbeach@example.com"
// //               className="h-14 border-0 border-b border-slate-200 rounded-none focus-visible:ring-0 focus-visible:border-amber-600 bg-transparent transition-all px-1"
// //               required
// //             />
// //           </div>

// //           <div className="space-y-2">
// //             <label className="text-[11px] font-bold uppercase tracking-widest text-slate-500 ml-1">Message *</label>
// //             <Textarea
// //               name="message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               rows={4}
// //               placeholder="Tell us about your dream vacation..."
// //               className="border-0 border-b border-slate-200 rounded-none focus-visible:ring-0 focus-visible:border-amber-600 bg-transparent resize-none transition-all px-1 text-lg"
// //               required
// //             />
// //           </div>

// //           <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
// //             <Button
// //               type="submit"
// //               disabled={loading}
// //               className="w-full h-16 bg-[#1a2e2a] hover:bg-black text-white font-bold uppercase tracking-[0.3em] text-[10px] rounded-full shadow-2xl transition-all"
// //             >
// //               {loading ? "Discovering..." : "Send Expedition Request"}
// //               <Send className="ml-3 h-4 w-4 text-amber-400" />
// //             </Button>
// //           </motion.div>
// //         </form>
// //       </CardContent>
// //     </Card>
// //   </motion.div>
// // )
// //   // )
// // }


"use client"
import { motion } from "framer-motion"
import { Send , CheckCircle2} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "", last_name: "", email_id: "", phone: "", subject: "", message: ""
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_FRAPPE_SITE_URL}/api/method/hotel_booking.api.contact.create_contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email_id,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.message || "Failed")
      toast({ title: "Message sent successfully!" })
      setFormData({ first_name: "", last_name: "", email_id: "", phone: "", subject: "", message: "" })
    } catch (err) {
      alert("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-2 md:p-10 space-y-8 bg-white relative overflow-hidden">
      {/* Top Header Section */}
      <div className="mb-10">
        <h4 className="text-[#1a2e2a] font-serif text-sm font-bold ">
          Send your Queries
        </h4>
        <p className="text-slate-400 text-xs font-light leading-relaxed">
          We will reply back within 24 hours during the working days and 48 hours during the weekends.
        </p>
      </div>

      <div className="space-y-6">
        {/* Row 1: First & Last Name */}
        <div className="grid grid-cols-2 gap-6">
          <div className="group relative">
            <label className="text-[9px] font-bold  tracking-widest text-slate-400 group-focus-within:text-amber-700 transition-colors mb-1.5 block">First Name *</label>
            <Input 
              name="first_name" 
              value={formData.first_name} 
              onChange={handleChange} 
              placeholder="Johan" 
              className="rounded-lg border-slate-200 h-10 bg-slate-50/30 focus:bg-white  focus:ring-0  duration-300 px-4" 
              required 
            />
            <p className="text-[9px] text-slate-300 mt-1 opacity-0 group-focus-within:opacity-100 transition-opacity italic">Please enter your given name</p>
          </div>

          <div className="group relative">
            <label className="text-[9px] font-bold tracking-widest text-slate-400 group-focus-within:text-amber-700 transition-colors mb-1.5 block">Last Name *</label>
            <Input 
              name="last_name" 
              value={formData.last_name} 
              onChange={handleChange} 
              placeholder="Due" 
              className="rounded-lg border-slate-200 h-10 bg-slate-50/30 focus:bg-white focus:border-[#1a2e2a] focus:ring-0 transition-all duration-300 px-4" 
              required 
            />
          </div>
        </div>

        {/* Row 2: Email */}
        <div className="group relative">
          <label className="text-[9px] font-bold tracking-widest text-slate-400 group-focus-within:text-amber-700 transition-colors mb-1.5 block">Email Address *</label>
          <Input 
            name="email_id" 
            value={formData.email_id} 
            onChange={handleChange} 
            placeholder="example@wilderbeach.com" 
            className="rounded-lg border-slate-200 h-10 bg-slate-50/30 focus:bg-white focus:border-[#1a2e2a] focus:ring-0 transition-all duration-300 px-4" 
            required 
          />
          <p className="text-[9px] text-slate-400 mt-1">We'll never share your email with anyone else.</p>
        </div>

        {/* Row 3: Subject Selection */}
        <div className="group relative">
          <label className="text-[9px] font-bold tracking-widest text-slate-400 group-focus-within:text-amber-700 transition-colors mb-1.5 block">Category</label>
          <select 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            className="w-full h-12 rounded-lg border border-slate-200 px-4 text-sm text-slate-600 bg-slate-50/30 focus:bg-white focus:border-[#1a2e2a] outline-none transition-all"
          >
            <option value="">Select a Category</option>
            <option value="reservation">Reservation Inquiry</option>
            <option value="feedback">Experience Feedback</option>
            <option value="activities">Safari Activities</option>
          </select>
        </div>

        {/* Row 4: Message */}
        <div className="group relative">
          <label className="text-[9px] font-bold tracking-widest text-slate-400 group-focus-within:text-amber-700 transition-colors mb-1.5 block">Your Message *</label>
          <Textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            placeholder="Tell us about your requirements..." 
            rows={4} 
            className="rounded-none border-slate-200 bg-slate-50/30 focus:bg-white resize-none p-4" 
            required 
          />
          
        </div>
      </div>

      {/* Submit Button */}
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} >
        <Button 
          disabled={loading} 
          className="w-full h-12 bg-[#1a2e2a] hover:bg-black text-white rounded-lg font-bold uppercase tracking-[0.4em] text-[11px] shadow-xl flex items-center justify-center gap-3 transition-all duration-500"
        >
          {loading ? (
            <span className="animate-pulse">Processing...</span>
          ) : (
            <>
              Send Message <Send size={14} className="text-amber-500" />
            </>
          )}
        </Button>
      </motion.div>

      {/* Bottom Status Decoration */}
      <div className=" flex items-center justify-center gap-2 opacity-50">
         <CheckCircle2 size={12} className="text-green-700" />
         <span className="text-[9px] uppercase tracking-widest text-slate-400">Secure & Encrypted Transmission</span>
      </div>
    </form>
  )
}