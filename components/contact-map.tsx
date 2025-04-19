"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hier würde normalerweise die Google Maps API initialisiert werden
    // Da wir keine echte API-Integration haben, simulieren wir das Laden einer Karte
    const mapContainer = mapRef.current

    if (mapContainer) {
      // Simuliere das Laden einer Karte mit einem Platzhalter
      const iframe = document.createElement("iframe")
      iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409722750269!2d13.372469776938461!3d52.516933065053695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1710687649619!5m2!1sde!2sde"
      iframe.width = "100%"
      iframe.height = "100%"
      iframe.style.border = "0"
      iframe.allowFullscreen = false
      iframe.loading = "lazy"
      iframe.referrerPolicy = "no-referrer-when-downgrade"

      mapContainer.appendChild(iframe)
    }

    return () => {
      if (mapContainer && mapContainer.firstChild) {
        mapContainer.removeChild(mapContainer.firstChild)
      }
    }
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="h-[500px] w-full mt-12 relative overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-900/30"
    >
      <div ref={mapRef} className="w-full h-full"></div>
      <div className="absolute inset-0 pointer-events-none border-[8px] border-[#030d1a] rounded-xl"></div>
    </motion.section>
  )
}

