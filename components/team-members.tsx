"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"
import { useEffect, useState } from "react"

const teamMembers = [
  {
    name: "Volker Rademacher",
    role: "Gründer",
    bio: "Gründer des Unternehmens mit über 40 Jahren Erfahrung in der Branche. Steht dem Team weiterhin beratend zur Seite.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Thomas Rademacher",
    role: "Geschäftsführer",
    bio: "Führt das Unternehmen in zweiter Generation. Ingenieur für Versorgungstechnik mit Fokus auf innovative Heizsysteme.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sabine Weber",
    role: "Technische Leiterin",
    bio: "Verantwortlich für die technische Planung und Umsetzung aller Projekte. Expertin für energieeffiziente Lüftungssysteme.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Schmidt",
    role: "Projektleiter",
    bio: "Koordiniert Großprojekte im Bereich Anlagenbau. Spezialist für komplexe technische Anlagen in Industriegebäuden.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function TeamMembers() {
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
    <section className="py-20 bg-[#030d1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Unser Team</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lernen Sie die Menschen kennen, die hinter unserem Erfolg stehen. Unser erfahrenes Team setzt sich täglich
            für Ihre Zufriedenheit ein.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: prefersReducedMotion ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              whileHover={prefersReducedMotion ? {} : { y: -5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-[#071a2c] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/30 group will-change-transform"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                <div className="h-full w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#071a2c] via-transparent to-transparent"></div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-blue-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      whileHover={prefersReducedMotion ? {} : { y: -3, scale: 1.1 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    >
                      <Linkedin size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={prefersReducedMotion ? {} : { y: -3, scale: 1.1 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    >
                      <Mail size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={prefersReducedMotion ? {} : { y: -3, scale: 1.1 }}
                      transition={{ type: "tween", duration: 0.2 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    >
                      <Phone size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm mb-4">{member.role}</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

