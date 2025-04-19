"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Phone, Mail } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-[#051525] relative overflow-hidden">
      {/* Animated background elements */}
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300">
              Bereit für Ihr nächstes Projekt?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-blue-100 mb-10 text-lg"
          >
            Kontaktieren Sie uns für eine unverbindliche Beratung und ein individuelles Angebot. Wir freuen uns darauf,
            Ihre Anforderungen zu besprechen und gemeinsam die optimale Lösung zu finden.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all"
              >
                Kontakt aufnehmen
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="tel:+4912345678900"
                className="px-8 py-4 bg-blue-700/50 text-white font-medium rounded-full hover:bg-blue-700/70 transition-colors border border-blue-500/30 flex items-center justify-center gap-2"
              >
                <Phone size={18} /> +49 (0) 1234 / 567890
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 text-blue-100"
          >
            <p>Oder senden Sie uns eine E-Mail:</p>
            <motion.a
              href="mailto:info@rademacher-hvac.de"
              className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors mt-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Mail size={18} /> info@rademacher-hvac.de
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

