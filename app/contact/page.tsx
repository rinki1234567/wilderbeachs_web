// import type { Metadata } from "next"
// import ContactHero from "@/components/contact/contact-hero"
// import ContactForm from "@/components/contact/contact-form"
// import ContactInfo from "@/components/contact/contact-info"
// import MapSection from "@/components/contact/map-section"

// export const metadata: Metadata = {
//   title: "Contact Us - WilderBeach Resort",
//   description:
//     "Get in touch with WilderBeach Resort. Find our location, contact information, and send us a message for reservations or inquiries.",
// }

// export default function ContactPage() {
//   return (
//     <div className="bg-slate-100">
//       <ContactHero />
//       <div className="py-20 ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-12">
//             <ContactForm />
//             <ContactInfo />
//           </div>
//         </div>
//       </div>
//       <MapSection />
//     </div>
//   )
// }

import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import MapSection from "@/components/contact/map-section"
import { Phone, Mail,  } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <ContactHero />

      {/* SECTION 1: SIDE-BY-SIDE FORM (Vaaman Style) */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div>
            <span className="text-amber-700 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e2a] leading-tight">
              Let’s plan your perfect <br />
              <span className=" text-green-900">wilderness escape.</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-lg mt-6 text-lg font-light ">
              Whether it's a safari inquiry or feedback about your stay, our team is here to listen and help you plan your next wilder experience.
            </p>
          </div>

          {/* Quick Contact Icons */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-5 group">
              <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-green-800 group-hover:bg-[#1a2e2a] group-hover:text-white transition-all duration-500">
                <Phone  className="w-5 h-5"/>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Call Directly</p>
                <p className="text-[#1a2e2a] font-semibold text-lg">+91 6265040030</p>
              </div>
            </div>
            <div className="flex items-center gap-5 group">
              <div className="w-11 h-11 rounded-full bg-green-100 flex items-center justify-center text-green-800 group-hover:bg-[#1a2e2a] group-hover:text-white transition-all duration-500">
                <Mail  className=" w-5 h-5 "/>
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">General Mail</p>
                <p className="text-[#1a2e2a] font-semibold text-lg">info@wilderbeach.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white p-2 border border-slate-100 shadow-xl">
          <ContactForm />
        </div>
      </section>

      {/* SECTION 2: GRID INFO BOXES */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <ContactInfo />
        </div>
      </section>

      {/* SECTION 3: MAP */}
      <section className="pb-24">
        <MapSection />
      </section>
    </main>
  )
}