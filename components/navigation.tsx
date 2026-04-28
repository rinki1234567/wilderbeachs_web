// "use client"
// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import { motion, AnimatePresence } from "framer-motion"
// import { Menu, X, Sparkles, Home, Info, Hotel, Waves, Images, Mail, Phone, Facebook, Instagram, Twitter } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = ""
//     }
//     return () => {
//       document.body.style.overflow = ""
//     }
//   }, [isOpen])

//   const navItems = [
//     { name: "Home", href: "/", icon: Home },
//     { name: "About", href: "/about", icon: Info },
//     { name: "Accommodations", href: "/accommodations", icon: Hotel },
//     { name: "Activities", href: "/activities", icon: Waves },
//     { name: "Gallery", href: "/gallery", icon: Images },
//     { name: "Contact", href: "/contact", icon: Mail },
//   ]
//   const isHomePage = pathname === "/"

//   // Animation variants for the mobile menu
//   const menuVariants = {
//     closed: {
//       x: "-100%",
//       transition: {
//         when: "afterChildren",
//         staggerChildren: 0.05,
//         staggerDirection: -1,
//       },
//     },
//     open: {
//       x: 0,
//       transition: {
//         when: "beforeChildren",
//         staggerChildren: 0.1,
//       },
//     },
//   }

//   const itemVariants = {
//     closed: { opacity: 0, y: 20 },
//     open: { opacity: 1, y: 0 },
//   }

//   return (

//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-white shadow-lg" : "bg-black/50"
//         }`}
//     >

//  <div className="h-10 bg-[#0e4131] text-white flex items-center border-b border-white/10">
//         <div className="max-w-[1500px] mx-auto px-8 w-full flex justify-between items-center text-[10px] tracking-[0.2em]  font-medium">
//           <div className="flex items-center space-x-6">
//             <a href="tel:+919202249129" className="flex items-center space-x-2 hover:opacity-80">
//               <Phone size={12} />
//               <span>+91 920-224-9129</span>
//             </a>
//             <a href="mailto:info@wilderbeach.com" className="hidden sm:flex items-center space-x-2 hover:opacity-80">
//               <Mail size={12} />
//               <span>info@wilderbeach.com</span>
//             </a>
//           </div>
//           <div className="flex items-center space-x-4">
//             <Facebook size={14} className="cursor-pointer" />
//             <Instagram size={14} className="cursor-pointer" />
//             <Twitter size={14} className="cursor-pointer" />
//           </div>
//         </div>
//       </div>


//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <motion.div whileHover={{ scale: 1.05 }}>

//             <Link href="/" className="flex items-center space-x-3">
//               <div className="relative w-20 h-20"> 
//                 <Image
//                   src="/waterparklogo.png"  
//                   alt="WilderBeach Logo"
//                   fill 
//                   className="object-contain"
//                 />
//               </div>
//               <span
//                 className={`text-xl lg:text-xl font-bold bg-clip-text text-[#0e4131]   text-transparent transition-colors duration-300 ${scrolled || !isHomePage ? "bg-gradient-to-r from-ocean-500 to-tropical-500" : "bg-gradient-to-r from-white to-paradise-200"
//                   }`}
//                >
//                 WILDER BEACH’S RETREAT
//               </span>
//             </Link>
//           </motion.div>

//           {/* Desktop Navigation - Center */}
//           <div className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.div
//                 key={item.name}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link
//                   href={item.href}
//                   className={`text-xl font-medium transition-all duration-300 relative group ${pathname === item.href
//                       ? scrolled || !isHomePage
//                         ? "text-ocean-600"
//                         : "text-paradise-300"
//                       : scrolled
//                         ? "text-gray-900 hover:text-ocean-600"
//                         : "text-white/90 hover:text-white"
//                     }`}
//                 >
//                   {item.name}
//                   {pathname === item.href && (
//                     <motion.div
//                       layoutId="activeNav"
//                       className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${scrolled || !isHomePage
//                           ? "bg-gradient-to-r from-ocean-500 to-tropical-500"
//                           : "bg-gradient-to-r from-paradise-400 to-coral-400"
//                         }`}
//                     />
//                   )}
//                   <span
//                     className={`absolute bottom-0 left-0 h-0.5 rounded-full w-0 bg-gradient-to-r from-current to-current transition-all duration-300 group-hover:w-full ${pathname === item.href ? "opacity-0" : ""
//                       }`}
//                   />
//                 </Link>
//               </motion.div>
//             ))}
//           </div>

//           {/* Booking Button - Right Side */}
//           <div className="hidden lg:block">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <Link href="/booking">
//                 <Button className="bg-gradient-to-r from-ocean-500 to-tropical-500 hover:from-ocean-600 hover:to-tropical-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
//                   <Sparkles className="mr-2 h-4 w-4" />
//                   Book Now
//                 </Button>
//               </Link>
//             </motion.div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className={`${scrolled || !isHomePage ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"} p-2`}
//             >
//               {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Overlay */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 z-[49]"
//               onClick={() => setIsOpen(false)}
//             />

//             {/* Menu */}
//             <motion.div
//               variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="fixed top-0 left-0 h-full w-[80vw] max-w-sm bg-white shadow-2xl z-[50] overflow-y-auto"
//             >
//               <div className="p-6 h-full flex flex-col">
//                 <div className="flex justify-between items-center mb-10">
//                   <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ocean-500 to-tropical-500">
//                     WilderBeach
//                   </span>
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     onClick={() => setIsOpen(false)}
//                     className="text-gray-900 hover:bg-gray-100 p-2"
//                   >
//                     <X className="h-7 w-7" />
//                   </Button>
//                 </div>
//                 <motion.div
//                   className="flex-grow space-y-2 border-t pt-4"
//                   variants={menuVariants}
//                 >
//                   {navItems.map((item) => (
//                     <motion.div key={item.name} variants={itemVariants}>
//                       <Link
//                         href={item.href}
//                         className={`flex items-center space-x-4 py-3 px-4 rounded-lg transition-colors duration-200 ${pathname === item.href
//                             ? "bg-ocean-50 text-ocean-600 font-bold"
//                             : "text-gray-700 hover:text-ocean-600 hover:bg-gray-100"
//                           }`}
//                         onClick={() => setIsOpen(false)}
//                       >
//                         <item.icon className="h-6 w-6" />
//                         <span className="text-xl">{item.name}</span>
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </motion.div>
//                 <motion.div variants={itemVariants} className="pt-8 pb-4">
//                   <Link href="/booking">
//                     <Button className="w-full bg-gradient-to-r from-ocean-500 to-tropical-500 hover:from-ocean-600 hover:to-tropical-600 text-white py-3 rounded-xl shadow-lg">
//                       <Sparkles className="mr-2 h-4 w-4" />
//                       Book Now
//                     </Button>
//                   </Link>
//                 </motion.div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   )
// }


"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Sparkles, Home, Info, Hotel, Waves, Images, Mail, Phone, Facebook, Instagram, Twitter , ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Accommodations", href: "/accommodations", icon: Hotel },
    { name: "Activities", href: "/activities", icon: Waves },
    { name: "Gallery", href: "/gallery", icon: Images },
    { name: "Contact", href: "/contact", icon: Mail },
  ]
  const isHomePage = pathname === "/"

  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg" : "bg-black/50"
      }`}
    >
      {/* Top Bar */}
      <div className="h-10 bg-[#0B2B26] text-white flex items-center border-b border-white/10">
        <div className="max-w-[1500px] mx-auto px-8 w-full flex justify-between items-center text-[10px] tracking-[0.2em] font-medium">
          <div className="flex items-center space-x-6">
            <a href="tel:+916265040030" className="flex items-center space-x-2 hover:opacity-80">
              <Phone size={12} />
              <span>+91 6265040030</span>
            </a>
            <a href="mailto:info@wilderbeach.com" className="hidden sm:flex items-center space-x-2 hover:opacity-80">
              <Mail size={12} />
              <span>info@wilderbeach.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook size={14} className="cursor-pointer" />
            <Instagram size={14} className="cursor-pointer" />
            <Twitter size={14} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-5 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-20 h-20">
                <Image
                  src="/waterparklogo.png"
                  alt="WilderBeach Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span
                className={`text-xl lg:text-xl font-bold font-serif transition-colors duration-300 ${
                  scrolled || !isHomePage ? "text-[#0B2B26]" : "text-white"
                }`}
              >
                WILDERBEACH<span className="mb-50">S</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-[14px] font-medium transition-all duration-300 relative group ${
                    pathname === item.href
                      ? scrolled || !isHomePage
                        ? "text-[#0B2B26]"
                        : "text-white"
                      : scrolled
                      ? "text-gray-900 hover:text-[#0B2B26]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                        scrolled || !isHomePage ? "bg-[#0B2B26]" : "bg-white"
                      }`}
                    />
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full w-0 bg-[#0e4131] transition-all duration-300 group-hover:w-full ${
                      pathname === item.href ? "opacity-0" : ""
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Booking Button */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/accommodations">
                <Button className="bg-[#0B2B26] hover:bg-[#0a3125] text-white  px-5 rounded-xl shadow-lg hover:shadow-xl transition-all  text-[10px] duration-300 hover:scale-105">
                  <Sparkles className="mr-1 h-2 w-2" />
                  Book Now 
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                scrolled || !isHomePage ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              } p-2`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[49]"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 h-full w-[80vw] max-w-sm bg-white shadow-2xl z-[50] overflow-y-auto"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-2xl font-bold text-[#0e4131]">
                    WilderBeach
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-900 hover:bg-gray-100 p-2"
                  >
                    <X className="h-7 w-7" />
                  </Button>
                </div>
                <motion.div className="flex-grow space-y-2 border-t pt-4">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={itemVariants}>
                      <Link
                        href={item.href}
                        className={`flex items-center space-x-4 py-3 px-4 rounded-lg transition-colors duration-200 ${
                          pathname === item.href
                            ? "bg-gray-100 text-[#0e4131] font-bold"
                            : "text-gray-700 hover:text-[#0e4131] hover:bg-gray-100"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-6 w-6" />
                        <span className="text-xl">{item.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div variants={itemVariants} className="pt-8 pb-4">
                  <Link href="/booking">
                    <Button className="w-full bg-[#0e4131] hover:bg-[#0a3125] text-white py-3 rounded-xl shadow-lg">
                      <Sparkles className="mr-12 h-4 w-4" />
                     
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}