"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "Wohnkomplex Stadtmitte",
    category: "Heizungstechnik",
    description: "Installation einer modernen Fußbodenheizung und Wärmepumpe in einem Mehrfamilienhaus.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/referenzen/wohnkomplex-stadtmitte",
  },
  {
    title: "Bürogebäude Technologiepark",
    category: "Lüftungssysteme",
    description: "Planung und Installation einer energieeffizienten Lüftungsanlage mit Wärmerückgewinnung.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/referenzen/buerogebaeude-technologiepark",
  },
  {
    title: "Produktionshalle Industriegebiet",
    category: "Anlagenbau",
    description: "Komplexe Anlagentechnik für eine Produktionshalle mit spezifischen Anforderungen.",
    image: "/placeholder.svg?height=600&width=800",
    link: "/referenzen/produktionshalle-industriegebiet",
  },
]

export default function FeaturedProjects() {
  // Reduziere Animationen auf mobilen Geräten
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
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
  const animationSettings = {
    header: {
      initial: prefersReducedMotion ? { opacity: 0.8 } : { opacity: 0, x: -30 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
      viewport: { once: true, margin: "-50px" },
    },
    link: {
      initial: prefersReducedMotion ? { opacity: 0.8 } : { opacity: 0, x: 30 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
      viewport: { once: true, margin: "-50px" },
    },
    card: {
      initial: prefersReducedMotion ? { opacity: 0.8 } : { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: "easeOut" },
      viewport: { once: true, margin: "-50px" },
    },
  }

  return (
    <section className="py-20 bg-[#030d1a]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <motion.div {...animationSettings.header}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                Ausgewählte Projekte
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Entdecken Sie einige unserer erfolgreich abgeschlossenen Projekte und überzeugen Sie sich von unserer
              Expertise und Qualität.
            </p>
          </motion.div>
          <motion.div {...animationSettings.link}>
            <Link
              href="/referenzen"
              className="inline-flex items-center mt-6 md:mt-0 text-blue-400 hover:text-blue-300 font-medium group"
            >
              Alle Projekte ansehen
              {!prefersReducedMotion && isClient ? (
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatDelay: 1,
                  }}
                  className="ml-1 group-hover:translate-x-1 transition-transform"
                >
                  <ArrowRight size={16} />
                </motion.div>
              ) : (
                <span className="ml-1">
                  <ArrowRight size={16} />
                </span>
              )}
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              {...animationSettings.card}
              transition={{
                ...animationSettings.card.transition,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
              whileHover={prefersReducedMotion ? {} : { y: -5 }}
              className="bg-[#071a2c] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/20 hover:border-blue-500/30 transition-all group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <div className="h-full w-full">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">{project.description}</p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-2 transition-transform"
                >
                  Projekt ansehen
                  {!prefersReducedMotion && isClient ? (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        repeatDelay: 1,
                      }}
                    >
                      <ArrowRight size={16} className="ml-1" />
                    </motion.div>
                  ) : (
                    <span className="ml-1">
                      <ArrowRight size={16} />
                    </span>
                  )}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

