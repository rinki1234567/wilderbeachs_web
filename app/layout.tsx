import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import ScrollToTop from "@/components/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WilderBeach Resort - Luxury Beachfront Paradise",
  description:
    "Experience unparalleled luxury at WilderBeach Resort. Premium accommodations, world-class dining, and endless activities await you.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="overflow-x-hidden">
          <Navigation />
        <main className="min-h-screen">{children}</main>
        <ScrollToTop />
        <Footer />
        <Toaster />
      </div>
      </body>
    </html>
  )
}


// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import Navigation from "@/components/navigation"
// import Footer from "@/components/footer"
// import { Toaster } from "@/components/ui/toaster"
// import ScrollToTop from "@/components/ScrollToTop"
// // 1. ThemeProvider ko import karein
// import { ThemeProvider } from "@/components/theme-provider" 

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "WilderBeach Resort - Luxury Beachfront Paradise",
//   description: "Experience unparalleled luxury at WilderBeach Resort.",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     // 2. suppressHydrationWarning add karein (zaroori hai)
//     <html lang="en" suppressHydrationWarning>
//       <body className={inter.className}>
//         {/* 3. ThemeProvider se poore content ko wrap karein */}
//         <ThemeProvider 
//           attribute="class" 
//           defaultTheme="system" 
//           enableSystem
//         >
//           <div className="overflow-x-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-500">
//             <Navigation />
//             <main className="min-h-screen">{children}</main>
//             <ScrollToTop />
//             <Footer />
//             <Toaster />
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }