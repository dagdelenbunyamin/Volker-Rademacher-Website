"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { useEffect, useState } from "react"

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Prüfe, ob der Benutzer reduzierte Bewegung bevorzugt
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
      mediaQuery.addEventListener("change", handleChange)

      // Prüfe auch die Bildschirmgröße
      const isMobile = window.innerWidth <= 768
      if (isMobile) {
        setPrefersReducedMotion(true) // Auf mobilen Geräten Animationen reduzieren
      }

      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  // Optimierte Animations-Einstellungen
  const variants = {
    initial: prefersReducedMotion ? { opacity: 0.9 } : { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: prefersReducedMotion ? { opacity: 0.9 } : { opacity: 0, y: -10 },
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.3,
        ease: "easeOut",
      }}
      variants={variants}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  )
}

