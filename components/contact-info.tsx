"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Truck } from "lucide-react"

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#071a2c] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 border border-blue-900/30"
    >
      <h3 className="text-2xl font-bold mb-6 text-white">Kontaktinformationen</h3>

      <div className="space-y-6">
        <motion.div
          className="flex items-start gap-4 group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/50 transition-colors">
            <MapPin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors">Adresse</h4>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Volker Rademacher Heizung Lüftung Anlagenbau GmbH
              <br />
              Musterstraße 123
              <br />
              12345 Musterstadt
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/50 transition-colors">
            <Phone className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors">Telefon</h4>
            <p className="text-gray-400">
              <a href="tel:+4912345678900" className="hover:text-blue-400 transition-colors">
                +49 (0) 1234 / 567890
              </a>
            </p>
            <p className="text-gray-400 mt-1">
              <a href="tel:+4912345678901" className="hover:text-blue-400 transition-colors">
                +49 (0) 1234 / 567891
              </a>{" "}
              (Notdienst)
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/50 transition-colors">
            <Mail className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors">E-Mail</h4>
            <p className="text-gray-400">
              <a href="mailto:info@rademacher-hvac.de" className="hover:text-blue-400 transition-colors">
                info@rademacher-hvac.de
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/50 transition-colors">
            <Clock className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors">Öffnungszeiten</h4>
            <div className="text-gray-400 space-y-1 group-hover:text-gray-300 transition-colors">
              <p>Montag - Freitag: 08:00 - 17:00 Uhr</p>
              <p>Samstag: Nach Vereinbarung</p>
              <p>Sonntag: Geschlossen</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex items-start gap-4 group"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800/50 transition-colors">
            <Truck className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors">Servicegebiet</h4>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Wir sind in Musterstadt und Umgebung (ca. 50 km) für Sie im Einsatz.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

