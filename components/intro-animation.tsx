"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(false)
  const [hasVisited, setHasVisited] = useState(true) // Default zu true für SSR
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    // Nur im Browser ausführen
    if (typeof window !== "undefined") {
      // Prüfen, ob der Benutzer die Seite bereits besucht hat
      const visited = sessionStorage.getItem("visited")
      setHasVisited(!!visited)

      if (!visited) {
        setShowIntro(true)
        // Nach der Animation als besucht markieren
        setTimeout(() => {
          sessionStorage.setItem("visited", "true")
          setShowIntro(false)
          // Setze introComplete auf true, nachdem das Intro beendet ist
          setTimeout(() => {
            setIntroComplete(true)
          }, 500) // Kurze Verzögerung nach dem Ausblenden des Intros
        }, 3000)
      } else {
        // Wenn kein Intro gezeigt wird, setze introComplete sofort auf true
        setIntroComplete(true)
      }
    }
  }, [])

  // Exportiere den Status, ob das Intro abgeschlossen ist
  if (typeof window !== "undefined") {
    window.introCompleted = introComplete
  }

  // Wenn der Benutzer die Seite bereits besucht hat oder wir auf dem Server sind, zeige nichts an
  if (hasVisited || typeof window === "undefined") return null

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#030d1a]"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-3xl">VR</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-white mb-8"
            >
              Volker Rademacher GmbH
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="h-1 bg-blue-500 max-w-xs mx-auto rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

