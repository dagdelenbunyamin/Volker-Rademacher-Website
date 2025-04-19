"use client"

import { motion } from "framer-motion"
import { Shield, Lightbulb, Users, Recycle } from "lucide-react"
import { useEffect, useState } from "react"

const values = [
  {
    icon: <Shield size={32} />,
    title: "Qualität",
    description:
      "Wir setzen auf hochwertige Materialien und präzise Ausführung. Unsere Arbeit entspricht höchsten Standards und Normen.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Innovation",
    description:
      "Wir halten uns stets auf dem neuesten Stand der Technik und setzen innovative Lösungen für maximale Effizienz ein.",
  },
  {
    icon: <Users size={32} />,
    title: "Kundenzufriedenheit",
    description:
      "Der Kunde steht im Mittelpunkt unseres Handelns. Wir beraten individuell und setzen Ihre Wünsche zuverlässig um.",
  },
  {
    icon: <Recycle size={32} />,
    title: "Nachhaltigkeit",
    description:
      "Umweltschutz ist uns wichtig. Wir setzen auf energieeffiziente Systeme und ressourcenschonende Arbeitsweisen.",
  },
]

export default function Values() {
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
    <section className="py-20 bg-[#051525] relative overflow-hidden">
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
            className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-500/5"
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

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Unsere Werte
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Diese Grundsätze leiten unser tägliches Handeln und prägen die Zusammenarbeit mit unseren Kunden und
            Partnern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.01 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#071a2c] rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/30 hover:border-blue-500/30 transition-all flex gap-6 will-change-transform"
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { rotate: 5 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400 flex-shrink-0"
              >
                {value.icon}
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

