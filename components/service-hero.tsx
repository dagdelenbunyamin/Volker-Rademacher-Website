"use client"

import { motion } from "framer-motion"

export default function ServiceHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-900 to-[#051525] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/10"
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
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-cyan-500/10"
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

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: "linear-gradient(to right, #60a5fa, #22d3ee)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Unsere Leistungen
          </motion.h1>
          <p className="text-blue-100 text-lg mb-8">
            Entdecken Sie unser umfassendes Angebot an professionellen Dienstleistungen im Bereich Heizung, Lüftung und
            Anlagenbau. Wir bieten maßgeschneiderte Lösungen für Privat- und Gewerbekunden.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

