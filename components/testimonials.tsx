"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Michael Schmidt",
    role: "Hausbesitzer",
    content:
      "Die Installation unserer neuen Heizungsanlage verlief reibungslos und professionell. Das Team von Rademacher hat uns hervorragend beraten und eine maßgeschneiderte Lösung für unser Haus gefunden. Wir sind sehr zufrieden mit dem Ergebnis und der Energieeffizienz.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sabine Müller",
    role: "Geschäftsführerin",
    content:
      "Als Unternehmen waren wir auf der Suche nach einer zuverlässigen Lüftungslösung für unsere Büroräume. Die Firma Rademacher hat uns kompetent beraten und eine perfekte Anlage installiert. Die Luftqualität hat sich deutlich verbessert und unsere Mitarbeiter sind begeistert.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Thomas Weber",
    role: "Projektleiter",
    content:
      "Die Zusammenarbeit mit Rademacher im Bereich Anlagenbau war äußerst professionell. Trotz komplexer Anforderungen wurde das Projekt termingerecht und in höchster Qualität umgesetzt. Wir werden auch zukünftige Projekte mit diesem kompetenten Team realisieren.",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#051525] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-cyan-500/5"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Das sagen unsere Kunden
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Erfahren Sie, was unsere Kunden über unsere Dienstleistungen und Zusammenarbeit sagen. Ihre Zufriedenheit
            ist unser größter Erfolg.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-[#071a2c] rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/20 hover:border-blue-500/30 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * i + 0.2 * index }}
                  >
                    <Star
                      size={18}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                    />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-400 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-blue-500/30"
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <h4 className="font-medium text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

