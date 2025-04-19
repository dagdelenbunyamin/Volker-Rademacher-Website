"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function AnchorNavigation() {
  const pathname = usePathname()

  useEffect(() => {
    // Nur im Browser ausführen
    if (typeof window === "undefined") return

    // Prüfen, ob ein Anker im sessionStorage gespeichert ist
    const anchor = sessionStorage.getItem("scrollToAnchor")

    if (anchor) {
      // Anker aus dem sessionStorage entfernen
      sessionStorage.removeItem("scrollToAnchor")

      // Verzögerung hinzufügen, um sicherzustellen, dass die Seite vollständig geladen ist
      setTimeout(() => {
        const element = document.getElementById(anchor)
        if (element) {
          // Zu dem Element scrollen
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }, 500)
    }
  }, [pathname])

  return null
}

