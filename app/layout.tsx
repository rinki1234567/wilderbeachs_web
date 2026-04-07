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
