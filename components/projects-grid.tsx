"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type ProjectCategory = "all" | "heizung" | "lueftung" | "anlagenbau" | "sanitaer"

interface Project {
  id: number
  title: string
  category: ProjectCategory
  location: string
  year: string
  description: string
  image: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Energieeffiziente Heizungsanlage",
    category: "heizung",
    location: "Mehrfamilienhaus, Berlin",
    year: "2023",
    description:
      "Installation einer modernen, energieeffizienten Heizungsanlage mit Wärmepumpe und Fußbodenheizung in einem Mehrfamilienhaus.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Wärmepumpe", "Fußbodenheizung", "Energieeffizienz"],
  },
  {
    id: 2,
    title: "Lüftungsanlage mit Wärmerückgewinnung",
    category: "lueftung",
    location: "Bürogebäude, Hamburg",
    year: "2022",
    description:
      "Planung und Installation einer zentralen Lüftungsanlage mit Wärmerückgewinnung für ein modernes Bürogebäude.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Wärmerückgewinnung", "Luftfilterung", "Energieeffizienz"],
  },
  {
    id: 3,
    title: "Industrielle Prozesswärmeanlage",
    category: "anlagenbau",
    location: "Produktionshalle, München",
    year: "2023",
    description:
      "Konzeption und Umsetzung einer maßgeschneiderten Prozesswärmeanlage für einen Industriekunden im Bereich Metallverarbeitung.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Prozesswärme", "Industrieanlage", "Maßanfertigung"],
  },
  {
    id: 4,
    title: "Barrierefreies Badezimmer",
    category: "sanitaer",
    location: "Privathaus, Frankfurt",
    year: "2022",
    description:
      "Komplette Neugestaltung eines barrierefreien Badezimmers mit bodengleicher Dusche, unterfahrbarem Waschtisch und weiteren altersgerechten Anpassungen.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Barrierefreiheit", "Dusche", "Waschtisch"],
  },
  {
    id: 5,
    title: "Solarthermie-Anlage",
    category: "heizung",
    location: "Einfamilienhaus, Köln",
    year: "2023",
    description:
      "Installation einer Solarthermie-Anlage zur Unterstützung der Heizung und Warmwasserbereitung in einem Einfamilienhaus.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Solarthermie", "Erneuerbare Energien", "Warmwasser"],
  },
  {
    id: 6,
    title: "Industrielüftung",
    category: "lueftung",
    location: "Lagerhalle, Stuttgart",
    year: "2022",
    description:
      "Planung und Installation einer leistungsstarken Industrielüftung für eine große Lagerhalle mit besonderen Anforderungen an die Luftqualität.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Industrielüftung", "Luftqualität", "Großprojekt"],
  },
  {
    id: 7,
    title: "Technische Gebäudeausrüstung",
    category: "anlagenbau",
    location: "Geschäftsgebäude, Düsseldorf",
    year: "2023",
    description:
      "Komplette technische Gebäudeausrüstung für ein neues Geschäftsgebäude, inklusive Heizung, Lüftung, Sanitär und Elektrik.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["TGA", "Gebäudetechnik", "Komplettlösung"],
  },
  {
    id: 8,
    title: "Moderne Badezimmer-Sanierung",
    category: "sanitaer",
    location: "Wohnanlage, Leipzig",
    year: "2022",
    description:
      "Umfassende Sanierung von 12 Badezimmern in einer Wohnanlage mit modernen Sanitärobjekten, Armaturen und Fliesen.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Sanierung", "Badezimmer", "Wohnanlage"],
  },
  {
    id: 9,
    title: "Pelletheizung mit Pufferspeicher",
    category: "heizung",
    location: "Landhaus, Bayern",
    year: "2023",
    description:
      "Installation einer umweltfreundlichen Pelletheizung mit großem Pufferspeicher für ein traditionelles Landhaus.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Pelletheizung", "Pufferspeicher", "Nachhaltigkeit"],
  },
]

interface ProjectsGridProps {
  activeFilter: ProjectCategory
}

export default function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [isMobile, setIsMobile] = useState(false)

  // Überprüfe, ob wir auf einem mobilen Gerät sind
  useEffect(() => {
    // Nur im Browser ausführen
    if (typeof window !== "undefined") {
      // Initial setzen
      setIsMobile(window.innerWidth <= 768)

      // Event-Listener für Größenänderungen
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
      }

      window.addEventListener("resize", handleResize)

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Filtere die Projekte basierend auf der aktiven Kategorie
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
  }, [activeFilter])

  return (
    <div className="container mx-auto px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#051525] rounded-xl overflow-hidden border border-blue-900/30 shadow-lg group"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051525] via-transparent to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                  {project.year}
                </div>
              </div>
              <div className="p-5 md:p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{project.location}</p>
                <p className="text-gray-300 text-sm md:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-900/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                  Projekt ansehen
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <p className="text-gray-400 text-lg">Keine Projekte in dieser Kategorie gefunden.</p>
        </motion.div>
      )}
    </div>
  )
}

