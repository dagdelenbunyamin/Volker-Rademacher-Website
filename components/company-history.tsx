"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const historyItems = [
  {
    year: "1985",
    title: "Gründung des Unternehmens",
    description:
      "Volker Rademacher gründet das Unternehmen als kleinen Handwerksbetrieb mit Fokus auf Heizungsinstallationen.",
  },
  {
    year: "1995",
    title: "Erweiterung des Leistungsspektrums",
    description:
      "Aufnahme von Lüftungstechnik und ersten Anlagenbau-Projekten ins Portfolio. Wachstum auf 10 Mitarbeiter.",
  },
  {
    year: "2005",
    title: "Umwandlung zur GmbH",
    description:
      "Umfirmierung zur Volker Rademacher Heizung Lüftung Anlagenbau GmbH und Erweiterung des Kundenstamms auf Industriekunden.",
  },
  {
    year: "2015",
    title: "Generationswechsel",
    description:
      "Die zweite Generation übernimmt die Geschäftsführung und modernisiert das Unternehmen mit digitalen Planungsmethoden.",
  },
  {
    year: "Heute",
    title: "Innovativer Komplettanbieter",
    description:
      "Mit über 25 Mitarbeitern bieten wir heute ganzheitliche Lösungen für Heizung, Lüftung und Anlagenbau mit Fokus auf energieeffiziente und nachhaltige Technologien.",
  },
]

export default function CompanyHistory() {
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
    <section className="py-20 bg-[#051525]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Unsere Geschichte
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Erfahren Sie mehr über die Entwicklung unseres Unternehmens von den Anfängen bis heute.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-900/30"></div>

          <div className="relative z-10">
            {historyItems.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: prefersReducedMotion ? 0 : index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { y: -3 }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="bg-[#071a2c] p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/30 inline-block"
                  >
                    <h3 className="text-xl font-bold text-blue-400 mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </motion.div>
                </div>

                <div className="mx-4 my-4 md:my-0 flex-shrink-0 z-10">
                  <motion.div
                    whileHover={prefersReducedMotion ? {} : { scale: 1.1, rotate: 5 }}
                    transition={{ type: "tween", duration: 0.2 }}
                    className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  >
                    {item.year}
                  </motion.div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

