"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Flame, Wind, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  shouldAnimate = true,
  prefersReducedMotion = false,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  shouldAnimate?: boolean
  prefersReducedMotion?: boolean
}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Nur im Browser ausführen
    if (typeof window !== "undefined") {
      // Initial setzen
      setIsMobile(window.innerWidth <= 768)

      // Event-Listener für Größenänderungen
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768)
      }

      window.addEventListener("resize", handleResize)

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Reduziere die Größe auf Mobilgeräten noch stärker
  const mobileWidth = isMobile ? width * 0.5 : width
  const mobileHeight = isMobile ? height * 0.5 : height

  // Reduzierte Animation für bessere Performance
  const initialState = prefersReducedMotion
    ? { opacity: 0.8, y: 0, rotate }
    : { opacity: 0, y: -50, rotate: rotate - 5 }

  const animateState = shouldAnimate ? { opacity: 1, y: 0, rotate } : initialState

  return (
    <motion.div
      initial={initialState}
      animate={animateState}
      transition={{
        duration: prefersReducedMotion ? 0.3 : 1.2,
        delay: prefersReducedMotion ? delay * 0.5 : delay,
        ease: "easeOut",
        opacity: { duration: prefersReducedMotion ? 0.3 : 0.8 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={
          shouldAnimate && !prefersReducedMotion
            ? {
                y: [0, 10, 0],
              }
            : {}
        }
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width: mobileWidth,
          height: mobileHeight,
        }}
        className="relative will-change-transform"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Hero({
  badge = "Seit 1985",
  title1 = "Ihr Partner für",
  title2 = "Wärme & Komfort",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const [isMobile, setIsMobile] = useState(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Nur im Browser ausführen
    if (typeof window !== "undefined") {
      // Initial setzen
      setIsMobile(window.innerWidth <= 768)

      // Prüfe, ob der Benutzer reduzierte Bewegung bevorzugt
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches || isMobile)

      // Event-Listener für Größenänderungen
      const handleResize = () => {
        const newIsMobile = window.innerWidth <= 768
        setIsMobile(newIsMobile)
        setPrefersReducedMotion(mediaQuery.matches || newIsMobile)
      }

      window.addEventListener("resize", handleResize)

      // Prüfen, ob das Intro abgeschlossen ist
      const checkIntroStatus = () => {
        if (window.introCompleted) {
          setShouldAnimate(true)
        } else {
          // Wenn nicht, erneut prüfen
          setTimeout(checkIntroStatus, 100)
        }
      }

      checkIntroStatus()

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  // Optimierte Animations-Einstellungen für bessere Performance
  const fadeUpVariants = {
    hidden: prefersReducedMotion ? { opacity: 0.8, y: 10 } : { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.3 : 0.6,
        delay: prefersReducedMotion ? 0.1 + i * 0.1 : 0.3 + i * 0.15,
        ease: "easeOut",
      },
    }),
  }

  // Anpassung der Textgröße für bessere Lesbarkeit auf mobilen Geräten
  const titleTextClasses = "text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight"

  return (
    <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#030d1a] pt-16 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-cyan-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          shouldAnimate={shouldAnimate}
          prefersReducedMotion={prefersReducedMotion}
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-cyan-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          shouldAnimate={shouldAnimate}
          prefersReducedMotion={prefersReducedMotion}
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-sky-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          shouldAnimate={shouldAnimate}
          prefersReducedMotion={prefersReducedMotion}
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-blue-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          shouldAnimate={shouldAnimate}
          prefersReducedMotion={prefersReducedMotion}
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-400/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          shouldAnimate={shouldAnimate}
          prefersReducedMotion={prefersReducedMotion}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-8 md:py-0">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 md:mb-10"
          >
            <motion.span
              animate={
                shouldAnimate && !prefersReducedMotion
                  ? {
                      scale: [1, 1.05, 1],
                      opacity: [0.6, 1, 0.6],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-sm text-white/60 tracking-wide"
            >
              {badge}
            </motion.span>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className="will-change-transform"
          >
            <h1 className={titleTextClasses}>
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 inline-block"
                animate={
                  shouldAnimate && !prefersReducedMotion
                    ? {
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }
                    : {}
                }
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                {title1}
              </motion.span>
              <br />
              <motion.span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white/90 to-cyan-300 font-pacifico inline-block",
                  // Erhöhter Buchstabenabstand für bessere Lesbarkeit
                  "tracking-wide",
                  // Kleinere Schriftgröße auf mobilen Geräten
                  "text-2xl sm:text-4xl md:text-6xl",
                  // Zusätzlicher Abstand rechts, damit das "t" vollständig sichtbar ist
                  "pr-1",
                )}
                animate={
                  shouldAnimate && !prefersReducedMotion
                    ? {
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }
                    : {}
                }
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                {title2}
              </motion.span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className="will-change-transform"
          >
            <p className="text-sm sm:text-base md:text-lg text-white/40 mb-6 md:mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-2 md:px-4">
              Professionelle Lösungen für Heizung, Lüftung und Anlagenbau – maßgeschneidert für Ihren Komfort und
              Energieeffizienz.
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate={shouldAnimate ? "visible" : "hidden"}
            className="flex flex-wrap justify-center gap-3 md:gap-4 will-change-transform"
          >
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Link
                href="/leistungen"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                Unsere Leistungen
                {!prefersReducedMotion && shouldAnimate ? (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                ) : (
                  <ArrowRight size={16} />
                )}
              </Link>
            </motion.div>
            <motion.div
              whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
              whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Link
                href="/kontakt"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10"
              >
                Kontakt aufnehmen
              </Link>
            </motion.div>
          </motion.div>

          {isClient && (
            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate={shouldAnimate ? "visible" : "hidden"}
              className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto will-change-transform"
            >
              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.02 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group"
              >
                <motion.div
                  className="mx-auto w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors"
                  whileHover={prefersReducedMotion ? {} : { rotate: 5 }}
                >
                  <Flame className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
                </motion.div>
                <h3 className="text-white font-medium text-lg mb-2 group-hover:text-blue-300 transition-colors">
                  Heizungstechnik
                </h3>
                <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors">
                  Moderne und effiziente Heizsysteme für optimalen Komfort
                </p>
              </motion.div>

              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.02 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group"
              >
                <motion.div
                  className="mx-auto w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors"
                  whileHover={prefersReducedMotion ? {} : { rotate: 5 }}
                >
                  <Wind className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={24} />
                </motion.div>
                <h3 className="text-white font-medium text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                  Lüftungssysteme
                </h3>
                <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors">
                  Frische Luft und optimales Raumklima für Ihr Wohlbefinden
                </p>
              </motion.div>

              <motion.div
                whileHover={prefersReducedMotion ? {} : { y: -5, scale: 1.02 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center group"
              >
                <motion.div
                  className="mx-auto w-12 h-12 rounded-full bg-sky-500/20 flex items-center justify-center mb-4 group-hover:bg-sky-500/30 transition-colors"
                  whileHover={prefersReducedMotion ? {} : { rotate: 5 }}
                >
                  <Wrench className="text-sky-400 group-hover:text-sky-300 transition-colors" size={24} />
                </motion.div>
                <h3 className="text-white font-medium text-lg mb-2 group-hover:text-sky-300 transition-colors">
                  Anlagenbau
                </h3>
                <p className="text-white/50 text-sm group-hover:text-white/70 transition-colors">
                  Maßgeschneiderte technische Anlagen für Ihre individuellen Anforderungen
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030d1a] via-transparent to-[#030d1a]/80 pointer-events-none" />
    </div>
  )
}

