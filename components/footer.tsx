"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// Structured data for easy management
const footerLinks = {
  resort: [
    { name: "About Us", href: "/about" },
    { name: "Accommodations", href: "/accommodations" },
    { name: "Activities", href: "/activities" },
    { name: "Dining", href: "/dining" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "Book Now", href: "/booking" },
    { name: "FAQ", href: "/contact" },
    { name: "Reviews", href: "/#testimonials" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://www.twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://www.youtube.com", label: "YouTube" },
];

const contactInfo = {
  address: "Khasra No. 21, Chowki Tola Village Kutwahi, Mandla, Madhya Pradesh, India, 481768",
  phone: "+91 6265040030",
  email: "info@wilderbeach.com",
};

export default function Footer() {
  return (
    <footer className="bg-[#112421] text-white">
      <div className="max-w-8xl mx-auto px-4 py-8 sm:px-12 sm:py-12 lg:px-16 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-items-center text-center sm:justify-items-start sm:text-left">
          {/* Brand & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center sm:items-start lg:col-span-1"
          >
            <Link href="/" className="flex items-center space-x-2 ">
              <div className="relative w-20 h-20">
                <Image
                  src="/waterparklogo.png"
                  alt="WilderBeach Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* <span
                className={`text-md lg:text-md font-bold bg-clip-text  text-white"
                  }`}
              >
                WILDER BEACH’S RETREAT
              </span> */}
            </Link>
            <p className="text-[#E9E4D9] text-sm sm:text-base leading-relaxed sm:mb-2 max-w-xs text-center sm:text-left">
              Experience luxury and tranquility at our pristine beachfront resort. Where every moment becomes a cherished memory.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="bg-white/5 hover:bg-[#E9E4D9] hover:text-[#112421] p-3 rounded-full transition-all duration-300 border border-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resort Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center sm:items-start"
          >
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Resort</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resort.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#E9E4D9] hover:text-white text-sm sm:text-base transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center sm:items-start"
          >
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-[#E9E4D9] hover:text-white text-sm sm:text-base transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center sm:items-start"
          >
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">Contact</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start space-x-2 sm:space-x-3">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 text-emerald-500"  />
                <span className="text-[#E9E4D9] text-sm sm:text-base text-center sm:text-left">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <Phone className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 text-emerald-500" />
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="text-[#E9E4D9] hover:text-white text-sm sm:text-base transition-colors duration-300"
                >
                  {contactInfo.phone}
                </Link>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
                <Mail className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 text-emerald-500" />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="text-[#E9E4D9] hover:text-white text-sm sm:text-base transition-colors duration-300"
                >
                  {contactInfo.email}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-3 border-t border-emerald-500 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center"
        >
          <p className="text-[#E9E4D9] text-xs sm:text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} WilderBeach Resort. All rights reserved.
          </p>
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="/privacy" className="text-[#E9E4D9] hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#E9E4D9] hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-[#E9E4D9] hover:text-white transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}


// "use client";

// import { motion } from "framer-motion";
// import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const footerLinks = {
//   resort: [
//     { name: "About Us", href: "/about" },
//     { name: "Accommodations", href: "/accommodations" },
//     { name: "Activities", href: "/activities" },
//     { name: "Dining", href: "/dining" },
//   ],
//   support: [
//     { name: "Contact Us", href: "/contact" },
//     { name: "Book Now", href: "/booking" },
//     { name: "FAQ", href: "/contact" },
//     { name: "Reviews", href: "/#testimonials" },
//   ],
// };

// const socialLinks = [
//   { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
//   { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
//   { icon: Twitter, href: "https://www.twitter.com", label: "Twitter" },
//   { icon: Youtube, href: "https://www.youtube.com", label: "YouTube" },
// ];

// const contactInfo = {
//   address: "Khasra No. 21, Chowki Tola Village Kutwahi, Mandla, Madhya Pradesh, India, 481768",
//   phone: "+91 6265040030",
//   email: "info@wilderbeach.com",
// };

// export default function Footer() {
//   return (
//     // BG Change: bg-[#112421] (Forest Green)
//     // Text Change: text-[#E9E4D9] (Elegant Cream)
//     <footer className="bg-[#112421] text-[#E9E4D9]">
//       <div className="max-w-8xl mx-auto px-4 py-8 sm:px-12 sm:py-12 lg:px-16 lg:py-16">
//         <div className="grid grid-cols-1 gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 justify-items-center text-center sm:justify-items-start sm:text-left">
          
//           {/* Brand & Socials */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="flex flex-col items-center sm:items-start lg:col-span-1"
//           >
//             <Link href="/" className="flex items-center space-x-2 ">
//               <div className="relative w-20 h-20">
//                 <Image
//                   src="/waterparklogo.png"
//                   alt="WilderBeach Logo"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </Link>
//             {/* Text Color Change: text-gray-400 */}
//             <p className="text-gray-400 text-sm sm:text-base leading-relaxed sm:mb-2 max-w-xs text-center sm:text-left">
//               Experience luxury and tranquility at our pristine beachfront resort. Where every moment becomes a cherished memory.
//             </p>
//             <div className="flex space-x-3 sm:space-x-4">
//               {socialLinks.map((social, index) => (
//                 <motion.a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   whileHover={{ scale: 1.2, y: -2 }}
//                   // Social BG Change: bg-white/5 aur Hover text color
//                   className="bg-white/5 hover:bg-[#E9E4D9] hover:text-[#112421] p-3 rounded-full transition-all duration-300 border border-white/10"
//                   aria-label={social.label}
//                 >
//                   <social.icon className="h-5 w-5" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Resort Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="flex flex-col items-center sm:items-start"
//           >
//             <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Resort</h3>
//             <ul className="space-y-2 sm:space-y-3">
//               {footerLinks.resort.map((link, index) => (
//                 <motion.li
//                   key={link.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                 >
//                   <Link
//                     href={link.href}
//                     // Link color: text-gray-400
//                     className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300 inline-block"
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Support Links */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="flex flex-col items-center sm:items-start"
//           >
//             <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Support</h3>
//             <ul className="space-y-2 sm:space-y-3">
//               {footerLinks.support.map((link, index) => (
//                 <motion.li
//                   key={link.name}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.4, delay: index * 0.1 }}
//                 >
//                   <Link
//                     href={link.href}
//                     className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300 inline-block"
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Us Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex flex-col items-center sm:items-start"
//           >
//             <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-white">Contact</h3>
//             <ul className="space-y-3 sm:space-y-4">
//               <li className="flex items-start justify-center sm:justify-start space-x-2 sm:space-x-3">
//                 <MapPin className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 text-emerald-500 mt-1 sm:mt-0" />
//                 <span className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
//                   {contactInfo.address}
//                 </span>
//               </li>
//               <li className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
//                 <Phone className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 text-emerald-500" />
//                 <Link
//                   href={`tel:${contactInfo.phone}`}
//                   className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300"
//                 >
//                   {contactInfo.phone}
//                 </Link>
//               </li>
//               <li className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3">
//                 <Mail className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 text-emerald-500" />
//                 <Link
//                   href={`mailto:${contactInfo.email}`}
//                   className="text-gray-400 hover:text-white text-sm sm:text-base transition-colors duration-300"
//                 >
//                   {contactInfo.email}
//                 </Link>
//               </li>
//             </ul>
//           </motion.div>
//         </div>

//         {/* Bottom Bar */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           // Border color change: border-white/10
//           className="mt-12 border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center"
//         >
//           <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-0 uppercase tracking-widest">
//             © {new Date().getFullYear()} WilderBeach Resort. All rights reserved.
//           </p>
//           <div className="flex flex-wrap sm:flex-nowrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
//             <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors duration-300">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="text-gray-500 hover:text-white transition-colors duration-300">
//               Terms of Service
//             </Link>
//             <Link href="/cookies" className="text-gray-500 hover:text-white transition-colors duration-300">
//               Cookie Policy
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }