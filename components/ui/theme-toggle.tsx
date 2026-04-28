"use client"
import { Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes" // 1. useTheme import karein
import { useEffect, useState } from "react" // 2. State handle karne ke liye

interface ThemeToggleProps {
  isSolid: boolean; // Sirf isSolid prop rakhein design ke liye
}

export default function ThemeToggle({ isSolid }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme() // 3. Theme hook ka use
  const [mounted, setMounted] = useState(false)

  // 4. Client-side mounting check (Hydration mismatch se bachne ke liye)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className="h-10 w-10" /> // Initial render par khali div dikhayein

  const isDark = theme === "dark"

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      // 5. Theme badalne ka logic
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
        isSolid
          ? "border-slate-200 bg-white/50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200"
          : "border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "dark" : "light"}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}