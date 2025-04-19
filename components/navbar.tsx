"use client"

import type React from "react"

import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navLinks = [
  { name: "Startseite", href: "/" },
  {
    name: "Leistungen",
    href: "/leistungen",
    submenu: [
      { name: "Heizungstechnik", href: "/leistungen#heizung" },
      { name: "Lüftungssysteme", href: "/leistungen#lueftung" },
      { name: "Anlagenbau", href: "/leistungen#anlagenbau" },
      { name: "Sanitärinstallation", href: "/leistungen#sanitaer" },
      { name: "Wartung & Service", href: "/leistungen#wartung" },
    ],
  },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "Kontakt", href: "/kontakt" },
]

// Memoized Link Component für bessere Performance
const NavLink = memo(
  ({
    href,
    onClick,
    className,
    children,
    isActive,
  }: {
    href: string
    onClick?: () => void
    className?: string
    children: React.ReactNode
    isActive?: boolean
  }) => (
    <Link
      href={href}
      onClick={onClick}
      className={cn(className, isActive ? "text-white" : "text-white/80 hover:text-white transition-colors")}
    >
      {children}
    </Link>
  ),
)
NavLink.displayName = "NavLink"

// Memoized Submenu Component
const SubMenu = memo(
  ({
    items,
    isOpen,
    onItemClick,
  }: {
    items: { name: string; href: string }[]
    isOpen: boolean
    onItemClick: () => void
  }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: 10, height: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="overflow-hidden bg-[#051525] rounded-md border border-blue-900/30 shadow-lg z-50"
        >
          <div className="py-2">
            {items.map((sublink) => (
              <Link
                key={sublink.name}
                href={sublink.href}
                onClick={onItemClick}
                className="block px-4 py-2 text-sm text-white/80 hover:bg-blue-600/20 hover:text-white transition-colors"
              >
                {sublink.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  ),
)
SubMenu.displayName = "SubMenu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const pathname = usePathname()

  // Optimierte Scroll-Handler mit useCallback
  const handleScroll = useCallback(() => {
    if (window.scrollY > 20) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [])

  // Optimierte Funktion zum Schließen des Menüs
  const closeMenu = useCallback(() => {
    setIsOpen(false)
    setActiveSubmenu(null)
  }, [])

  // Optimierte Funktion zum Umschalten des Submenüs
  const toggleSubmenu = useCallback((name: string) => {
    setActiveSubmenu((prev) => (prev === name ? null : name))
  }, [])

  // Effekt für Scroll-Listener und Reduced Motion
  useEffect(() => {
    // Prüfe, ob der Benutzer reduzierte Bewegung bevorzugt
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
      mediaQuery.addEventListener("change", handleChange)

      // Scroll-Listener hinzufügen
      window.addEventListener("scroll", handleScroll, { passive: true })

      // Cleanup
      return () => {
        mediaQuery.removeEventListener("change", handleChange)
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [handleScroll])

  // Effekt zum Schließen des Menüs bei Routenwechsel
  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  // Optimierte Varianten für Animationen
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform",
        scrolled ? "bg-[#051525]/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 will-change-transform">
            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">VR</span>
            </div>
            <span className="text-white font-bold text-lg">Rademacher GmbH</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(link.name)}
                      className={cn(
                        "flex items-center gap-1 py-2",
                        pathname === link.href ? "text-white" : "text-white/80 hover:text-white transition-colors",
                      )}
                      aria-expanded={activeSubmenu === link.name}
                    >
                      {link.name}
                      <motion.div
                        animate={{ rotate: activeSubmenu === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </button>

                    <div className="absolute left-0 mt-2 w-56">
                      <SubMenu items={link.submenu} isOpen={activeSubmenu === link.name} onItemClick={closeMenu} />
                    </div>
                  </>
                ) : (
                  <NavLink href={link.href} className="py-2" isActive={pathname === link.href}>
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={prefersReducedMotion ? {} : mobileMenuVariants}
            className="md:hidden overflow-hidden bg-[#051525] shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name} className="py-2">
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(link.name)}
                          className="flex items-center justify-between w-full text-white/80 hover:text-white transition-colors"
                          aria-expanded={activeSubmenu === link.name}
                        >
                          {link.name}
                          <motion.div
                            animate={{ rotate: activeSubmenu === link.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {activeSubmenu === link.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="mt-2 ml-4 border-l-2 border-blue-600/30 pl-4 overflow-hidden"
                            >
                              {link.submenu.map((sublink) => (
                                <Link
                                  key={sublink.name}
                                  href={sublink.href}
                                  onClick={closeMenu}
                                  className="block py-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink href={link.href} onClick={closeMenu} isActive={pathname === link.href}>
                        {link.name}
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

