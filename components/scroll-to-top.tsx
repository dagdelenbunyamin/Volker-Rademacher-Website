"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  // Wenn sich der Pfad ändert, scrolle zum Anfang der Seite
  useEffect(() => {
    // Nur im Browser ausführen
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [pathname])

  return null
}

