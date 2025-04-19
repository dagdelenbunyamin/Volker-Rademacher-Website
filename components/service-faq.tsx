"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Wie lange dauert die Installation einer neuen Heizungsanlage?",
    answer:
      "Die Dauer hängt von verschiedenen Faktoren ab, wie der Art der Heizung und den baulichen Gegebenheiten. In der Regel dauert eine komplette Heizungsinstallation zwischen 3 und 5 Arbeitstagen. Bei einer Modernisierung kann es auch schneller gehen. Wir erstellen Ihnen gerne einen detaillierten Zeitplan für Ihr spezifisches Projekt.",
  },
  {
    question: "Welche Fördermöglichkeiten gibt es für energieeffiziente Heizsysteme?",
    answer:
      "Für energieeffiziente Heizsysteme wie Wärmepumpen, Solarthermie oder Pelletheizungen gibt es verschiedene staatliche Förderprogramme, beispielsweise über die KfW oder das BAFA. Die Höhe der Förderung hängt vom gewählten System und weiteren Faktoren ab. Wir beraten Sie gerne zu den aktuellen Fördermöglichkeiten und unterstützen Sie bei der Antragstellung.",
  },
  {
    question: "Wie oft sollte eine Lüftungsanlage gewartet werden?",
    answer:
      "Wir empfehlen, Lüftungsanlagen mindestens einmal jährlich warten zu lassen. Dabei werden Filter gereinigt oder ausgetauscht, die Anlage auf Funktionalität geprüft und bei Bedarf eingestellt. Eine regelmäßige Wartung gewährleistet eine optimale Luftqualität, maximale Energieeffizienz und eine lange Lebensdauer der Anlage.",
  },
  {
    question: "Bieten Sie auch Notdienst außerhalb der Geschäftszeiten an?",
    answer:
      "Ja, wir bieten einen 24-Stunden-Notdienst für unsere Kunden an. Bei dringenden Problemen wie Heizungsausfällen im Winter oder Wasserschäden stehen wir Ihnen auch außerhalb der regulären Geschäftszeiten zur Verfügung. Die Kontaktdaten für den Notdienst finden Sie auf unserer Website oder in Ihren Vertragsunterlagen.",
  },
  {
    question: "Welche Vorteile bietet eine kontrollierte Wohnraumlüftung?",
    answer:
      "Eine kontrollierte Wohnraumlüftung bietet zahlreiche Vorteile: Sie sorgt für konstant frische Luft ohne manuelles Lüften, reduziert Energieverluste durch Wärmerückgewinnung, filtert Schadstoffe und Pollen aus der Zuluft, verhindert Schimmelbildung durch kontrollierte Feuchtigkeitsabfuhr und erhöht den Wohnkomfort. Besonders in gut gedämmten Gebäuden ist sie eine sinnvolle Investition.",
  },
  {
    question: "Wie lange beträgt die Garantie auf Ihre Installationen?",
    answer:
      "Wir gewähren auf unsere Installationsarbeiten eine Garantie von 2 Jahren. Für die verbauten Produkte gelten die Herstellergarantien, die je nach Produkt zwischen 2 und 10 Jahren liegen können. Bei Abschluss eines Wartungsvertrags kann die Garantiezeit für bestimmte Anlagen verlängert werden. Die genauen Garantiebedingungen erhalten Sie mit Ihrem Angebot.",
  },
]

export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-[#030d1a]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Häufig gestellte Fragen
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Leistungen. Sollten Sie weitere Fragen haben,
            kontaktieren Sie uns gerne.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  "w-full text-left p-6 rounded-xl flex items-center justify-between",
                  "bg-[#071a2c] border border-blue-900/30 hover:border-blue-500/30 transition-all",
                  openIndex === index ? "rounded-b-none border-b-0" : "",
                )}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="text-blue-400" size={20} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[#071a2c] rounded-b-xl border border-t-0 border-blue-900/30"
                  >
                    <div className="p-6 pt-0 text-gray-400">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

