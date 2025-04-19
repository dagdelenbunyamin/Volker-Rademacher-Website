"use client"

import { useEffect } from "react"

export function useScrollLock(lock: boolean) {
  useEffect(() => {
    if (lock) {
      // Speichere die aktuelle Scroll-Position
      const scrollY = window.scrollY

      // Verhindere das Scrollen des Hintergrunds
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflowY = "scroll"
    } else {
      // Stelle die Scroll-Position wieder her
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflowY = ""

      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
    }

    return () => {
      // Cleanup beim Unmount
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflowY = ""
    }
  }, [lock])
}

