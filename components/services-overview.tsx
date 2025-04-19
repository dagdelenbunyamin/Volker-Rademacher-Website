"use client"

import { motion } from "framer-motion"
import { Flame, Wind, Wrench, Droplet, RotateCcw, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: <Flame size={24} />,
    title: "Heizungstechnik",
    description:
      "Moderne und energieeffiziente Heizsysteme für Ihr Zuhause oder Unternehmen. Von der Planung bis zur Installation.",
    color: "bg-blue-500",
    link: "/leistungen#heizung",
  },
  {
    icon: <Wind size={24} />,
    title: "Lüftungssysteme",
    description:
      "Innovative Lüftungslösungen für optimale Luftqualität und Energieeffizienz in Wohn- und Gewerberäumen.",
    color: "bg-cyan-500",
    link: "/leistungen#lueftung",
  },
  {
    icon: <Wrench size={24} />,
    title: "Anlagenbau",
    description: "Maßgeschneiderte technische Anlagen für Industrie und Gewerbe. Professionell geplant und umgesetzt.",
    color: "bg-sky-500",
    link: "/leistungen#anlagenbau",
  },
  {
    icon: <Droplet size={24} />,
    title: "Sanitärinstallation",
    description:
      "Komplettlösungen für Ihre Sanitäranlagen. Von der Badezimmermodernisierung bis zur Trinkwasserinstallation.",
    color: "bg-blue-400",
    link: "/leistungen#sanitaer",
  },
  {
    icon: <RotateCcw size={24} />,
    title: "Wartung & Service",
    description:
      "Regelmäßige Wartung und schneller Service für alle Anlagen. Wir sorgen für langfristige Funktionalität.",
    color: "bg-cyan-400",
    link: "/leistungen#wartung",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-12 md:py-20 bg-[#051525]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Unsere Leistungen
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Wir bieten Ihnen ein umfassendes Spektrum an Dienstleistungen rund um Heizung, Lüftung und Anlagenbau.
            Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-[#071a2c] rounded-xl p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/20 hover:border-blue-500/30 transition-all group"
            >
              <div
                className={cn(
                  "w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform",
                  service.color,
                )}
              >
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 md:mb-6 group-hover:text-gray-300 transition-colors text-sm md:text-base">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-2 transition-transform text-sm md:text-base"
              >
                Mehr erfahren
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    repeatDelay: 0.5,
                  }}
                >
                  <ArrowRight size={16} className="ml-1" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

