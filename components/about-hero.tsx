"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function AboutHero() {
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

  return (
    <section className="relative py-20 bg-[#030d1a] overflow-hidden">
      {/* Animated background elements - reduziert für bessere Performance */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5"
            animate={{
              y: [0, 20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-500/5"
            animate={{
              y: [0, -20, 0],
              x: [0, -10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="will-change-transform"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              animate={
                !prefersReducedMotion
                  ? {
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }
                  : {}
              }
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: "linear-gradient(to right, #60a5fa, #22d3ee)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Über uns
            </motion.h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Seit 1985 steht die Volker Rademacher Heizung Lüftung Anlagenbau GmbH für Qualität, Zuverlässigkeit und
              innovative Lösungen im Bereich der Gebäudetechnik.
            </p>
            <p className="text-gray-400 mb-8">
              Als Familienunternehmen in zweiter Generation legen wir großen Wert auf persönliche Beratung und
              maßgeschneiderte Lösungen für unsere Kunden. Mit unserem erfahrenen Team aus Ingenieuren, Technikern und
              Facharbeitern realisieren wir Projekte jeder Größenordnung – von der privaten Heizungsmodernisierung bis
              hin zu komplexen Anlagen für Industriekunden.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.03 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-500/30"
              >
                <p className="text-blue-400 font-medium text-lg">35+</p>
                <p className="text-gray-400 text-sm">Jahre Erfahrung</p>
              </motion.div>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.03 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-500/30"
              >
                <p className="text-blue-400 font-medium text-lg">1000+</p>
                <p className="text-gray-400 text-sm">Zufriedene Kunden</p>
              </motion.div>
              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.03 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-500/30"
              >
                <p className="text-blue-400 font-medium text-lg">25+</p>
                <p className="text-gray-400 text-sm">Fachkräfte</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/30 will-change-transform"
          >
            <Image src="/placeholder.svg?height=1000&width=800" alt="Unser Team" fill className="object-cover" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#030d1a] via-transparent to-transparent"
              animate={
                !prefersReducedMotion
                  ? {
                      opacity: [0.6, 0.7, 0.6],
                    }
                  : {}
              }
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

