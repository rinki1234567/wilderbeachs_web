
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page















































// "use client"

// import { motion } from "framer-motion"
// import { Eye, EyeOff, ArrowLeft } from "lucide-react"
// import { useState } from "react"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import Image from "next/image"

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false)
//   const [isLogin, setIsLogin] = useState(true)

//   return (
//     <div className="min-h-screen flex pt-20">
//       {/* Left Side - Image */}
//       <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
//         <Image
//           src="/placeholder.svg?height=1080&width=800&text=Welcome+to+WilderBeach"
//           alt="WilderBeach Resort"
//           fill
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-ocean-600/80 to-luxury-600/80" />
//         <div className="absolute inset-0 flex items-center justify-center p-12">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-white text-center"
//           >
//             <h1 className="text-4xl lg:text-5xl font-bold mb-6">Welcome to Paradise</h1>
//             <p className="text-xl opacity-90 leading-relaxed">
//               Experience luxury and tranquility at WilderBeach Resort. Your perfect getaway awaits.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       {/* Right Side - Form */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-ocean-50">
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full max-w-md"
//         >
//           {/* Back Button */}
//           <Link
//             href="/"
//             className="inline-flex items-center text-ocean-700 hover:text-ocean-950 mb-8 transition-colors"
//           >
//             <ArrowLeft className="h-4 w-4 mr-2" />
//             Back to Resort
//           </Link>

//           <Card className="shadow-2xl border-0">
//             <CardHeader className="text-center pb-2">
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <h2 className="text-3xl font-bold text-ocean-950 mb-2">
//                   {isLogin ? "Welcome Back" : "Create Account"}
//                 </h2>
//                 <p className="text-ocean-700">
//                   {isLogin ? "Sign in to access your reservations" : "Join us for exclusive benefits"}
//                 </p>
//               </motion.div>
//             </CardHeader>

//             <CardContent className="p-8">
//               <form className="space-y-6">
//                 {!isLogin && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     transition={{ duration: 0.3 }}
//                     className="grid grid-cols-2 gap-4"
//                   >
//                     <div>
//                       <label className="block text-sm font-semibold text-ocean-800 mb-2">First Name</label>
//                       <Input
//                         placeholder="John"
//                         className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-semibold text-ocean-800 mb-2">Last Name</label>
//                       <Input
//                         placeholder="Doe"
//                         className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
//                       />
//                     </div>
//                   </motion.div>
//                 )}

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.1 }}
//                 >
//                   <label className="block text-sm font-semibold text-ocean-800 mb-2">Email Address</label>
//                   <Input
//                     type="email"
//                     placeholder="john@example.com"
//                     className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <label className="block text-sm font-semibold text-ocean-800 mb-2">Password</label>
//                   <div className="relative">
//                     <Input
//                       type={showPassword ? "text" : "password"}
//                       placeholder="••••••••"
//                       className="h-12 border-ocean-300 focus:border-ocean-500 focus:ring-ocean-500 pr-12"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-ocean-600 hover:text-ocean-800"
//                     >
//                       {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                     </button>
//                   </div>
//                 </motion.div>

//                 {isLogin && (
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex items-center justify-between"
//                   >
//                     <label className="flex items-center">
//                       <input type="checkbox" className="rounded border-ocean-300 text-ocean-600 focus:ring-ocean-500" />
//                       <span className="ml-2 text-sm text-ocean-700">Remember me</span>
//                     </label>
//                     <Link href="/forgot-password" className="text-ocean-600 hover:text-ocean-700 font-semibold">
//                       Forgot password?
//                     </Link>
//                   </motion.div>
//                 )}

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <Button
//                     type="submit"
//                     className="w-full h-12 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold text-lg"
//                   >
//                     {isLogin ? "Sign In" : "Create Account"}
//                   </Button>
//                 </motion.div>

//                 <div className="relative">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-ocean-300" />
//                   </div>
//                   <div className="relative flex justify-center text-sm">
//                     <span className="px-2 bg-white text-ocean-600">Or continue with</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       className="w-full h-12 border-ocean-300 hover:bg-ocean-50 bg-transparent text-ocean-950"
//                     >
//                       <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                         <path
//                           fill="currentColor"
//                           d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                         />
//                         <path
//                           fill="currentColor"
//                           d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                         />
//                         <path
//                           fill="currentColor"
//                           d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
//                         />
//                         <path
//                           fill="currentColor"
//                           d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                         />
//                       </svg>
//                       Google
//                     </Button>
//                   </motion.div>
//                   <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       className="w-full h-12 border-ocean-300 hover:bg-ocean-50 bg-transparent text-ocean-950"
//                     >
//                       <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                       </svg>
//                       Facebook
//                     </Button>
//                   </motion.div>
//                 </div>
//               </form>

//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.4 }}
//                 className="mt-8 text-center"
//               >
//                 <p className="text-ocean-700">
//                   {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//                   <button
//                     onClick={() => setIsLogin(!isLogin)}
//                     className="text-ocean-600 hover:text-ocean-700 font-semibold"
//                   >
//                     {isLogin ? "Sign up" : "Sign in"}
//                   </button>
//                 </p>
//               </motion.div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </div>
//     </div>
//   )
// }
