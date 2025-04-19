"use client"

import { motion } from "framer-motion"
import { Flame, Wind, Wrench, Droplet, RotateCcw } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react" // Replace the useMediaQuery hook with useState and useEffect

const services = [
  {
    id: "heizung",
    icon: <Flame size={32} />,
    title: "Heizungstechnik",
    description:
      "Wir planen, installieren und warten moderne Heizsysteme für maximalen Komfort und Energieeffizienz. Von klassischen Heizkörpern über Fußbodenheizungen bis hin zu innovativen Wärmepumpen und Solarthermie-Anlagen – wir bieten die optimale Lösung für Ihre individuellen Anforderungen.",
    features: [
      "Planung und Installation von Heizungsanlagen",
      "Wärmepumpen (Luft-Wasser, Sole-Wasser, Wasser-Wasser)",
      "Gasheizungen und Ölheizungen",
      "Pellet- und Holzheizungen",
      "Fußbodenheizungen und Wandheizungen",
      "Solarthermie-Anlagen",
      "Hydraulischer Abgleich",
      "Heizungsmodernisierung und -optimierung",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "lueftung",
    icon: <Wind size={32} />,
    title: "Lüftungssysteme",
    description:
      "Frische Luft und ein angenehmes Raumklima sind entscheidend für Ihr Wohlbefinden und Ihre Gesundheit. Wir konzipieren und installieren moderne Lüftungsanlagen, die für optimale Luftqualität sorgen und gleichzeitig Energieverluste minimieren.",
    features: [
      "Zentrale und dezentrale Lüftungsanlagen",
      "Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung",
      "Industrielüftung und Hallenbelüftung",
      "Küchenabluftsysteme",
      "Klimaanlagen und Klimatechnik",
      "Luftfiltersysteme",
      "Luftentfeuchtung und -befeuchtung",
      "Wartung und Reinigung von Lüftungsanlagen",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "anlagenbau",
    icon: <Wrench size={32} />,
    title: "Anlagenbau",
    description:
      "Im Bereich Anlagenbau realisieren wir komplexe technische Systeme für Industrie und Gewerbe. Unsere Ingenieure und Techniker planen und installieren maßgeschneiderte Anlagen, die höchsten Anforderungen an Funktionalität, Effizienz und Zuverlässigkeit gerecht werden.",
    features: [
      "Planung und Bau von technischen Anlagen",
      "Prozesswärme- und Kälteanlagen",
      "Druckluftanlagen",
      "Wärmerückgewinnungssysteme",
      "Energiezentralen",
      "Rohrleitungsbau und Verteilersysteme",
      "Steuerungs- und Regelungstechnik",
      "Anlagenmodernisierung und -optimierung",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "sanitaer",
    icon: <Droplet size={32} />,
    title: "Sanitärinstallation",
    description:
      "Von der Badezimmermodernisierung bis zur kompletten Sanitärinstallation in Neubauten – wir bieten Ihnen Komplettlösungen aus einer Hand. Unser Team sorgt für eine fachgerechte Installation aller Sanitäranlagen und Wasserversorgungssysteme.",
    features: [
      "Badezimmerplanung und -installation",
      "Trinkwasserinstallation",
      "Abwassersysteme",
      "Regenwassernutzungsanlagen",
      "Wasseraufbereitung",
      "Barrierefreie Badlösungen",
      "Sanitärobjekte und Armaturen",
      "Wasserschadensanierung",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "wartung",
    icon: <RotateCcw size={32} />,
    title: "Wartung & Service",
    description:
      "Regelmäßige Wartung und ein zuverlässiger Service sind entscheidend für die langfristige Funktionalität und Effizienz Ihrer Anlagen. Unser Serviceteam steht Ihnen mit Rat und Tat zur Seite – von der routinemäßigen Wartung bis zum Notdienst bei akuten Problemen.",
    features: [
      "Regelmäßige Wartung von Heizungs- und Lüftungsanlagen",
      "Störungsbehebung und Reparaturen",
      "24-Stunden-Notdienst",
      "Effizienzprüfung und -optimierung",
      "Hygieneprüfung von Lüftungsanlagen",
      "Dichtheitsprüfungen",
      "Wartungsverträge mit individuellen Leistungspaketen",
      "Fernüberwachung und -wartung",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ServicesList() {
  // Replace the useMediaQuery hook with a direct implementation
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      // Set initial value
      setIsMobile(window.innerWidth <= 1024)

      // Add resize listener
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024)
      }

      window.addEventListener("resize", handleResize)

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return (
    <section className="py-12 md:py-20 bg-[#030d1a]">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${
              !isMobile && (index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse")
            } gap-6 md:gap-12 items-center mb-16 md:mb-24 scroll-mt-28`}
          >
            <motion.div
              initial={{ opacity: 0, x: !isMobile ? (index % 2 === 0 ? -50 : 50) : 0, y: isMobile ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400">
                  {service.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h2>
              </div>

              <p className="text-gray-400 mb-4 md:mb-6 text-base md:text-lg">{service.description}</p>

              <div className="bg-[#071a2c] rounded-xl p-4 md:p-6 border border-blue-900/30">
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">
                  Unsere Leistungen im Überblick:
                </h3>
                <ul className="space-y-1 md:space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-gray-300 text-sm md:text-base"
                    >
                      <span className="text-blue-400 mt-1">•</span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: !isMobile ? (index % 2 === 0 ? 50 : -50) : 0, y: isMobile ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 mt-6 lg:mt-0"
            >
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/30">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a] via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

