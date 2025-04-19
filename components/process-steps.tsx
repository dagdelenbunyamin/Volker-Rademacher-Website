"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileText, Lightbulb, Hammer, CheckCircle, Clock } from "lucide-react"

const processSteps = [
  {
    icon: <MessageSquare size={32} />,
    title: "Beratungsgespräch",
    description:
      "Im ersten Schritt führen wir ein ausführliches Beratungsgespräch, um Ihre Anforderungen und Wünsche zu verstehen.",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Planung & Konzeption",
    description: "Basierend auf Ihren Anforderungen entwickeln wir ein maßgeschneidertes Konzept für Ihr Projekt.",
  },
  {
    icon: <FileText size={32} />,
    title: "Angebot & Vertrag",
    description:
      "Sie erhalten ein detailliertes Angebot mit transparenter Kostenaufstellung und klaren Leistungsbeschreibungen.",
  },
  {
    icon: <Hammer size={32} />,
    title: "Umsetzung",
    description: "Unser Fachpersonal setzt das Projekt termingerecht und in höchster Qualität um.",
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Abnahme & Einweisung",
    description: "Nach Fertigstellung erfolgt eine gemeinsame Abnahme und ausführliche Einweisung in die neue Anlage.",
  },
  {
    icon: <Clock size={32} />,
    title: "Service & Wartung",
    description:
      "Wir bieten Ihnen langfristigen Service und regelmäßige Wartung für eine optimale Funktionalität Ihrer Anlage.",
  },
]

export default function ProcessSteps() {
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
              Unser Arbeitsprozess
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Von der ersten Beratung bis zum fertigen Projekt – so arbeiten wir transparent und zuverlässig für Ihren
            Erfolg.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="bg-[#071a2c] rounded-xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/30 hover:border-blue-500/30 transition-all"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-lg bg-blue-900/30 flex items-center justify-center text-blue-400">
                  {step.icon}
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

