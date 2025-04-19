"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { useState, useEffect } from "react" // Replace the useMediaQuery hook
import { useRouter } from "next/navigation"

export default function Footer() {
  // Replace the useMediaQuery hook with a direct implementation
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      // Set initial value
      setIsMobile(window.innerWidth <= 768)

      // Add resize listener
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

  const router = useRouter()

  // Verbesserte Funktion zum Navigieren zu Ankern
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // Prüfe, ob es ein Anker-Link ist
    if (href.includes("#")) {
      const [pagePath, anchor] = href.split("#")

      // Speichere den Anker im sessionStorage, um ihn nach dem Laden der Seite zu verwenden
      if (typeof window !== "undefined") {
        sessionStorage.setItem("scrollToAnchor", anchor)
      }

      // Navigiere zur Seite
      router.push(pagePath)
    } else {
      // Normaler Link ohne Anker
      router.push(href)
    }
  }

  return (
    <footer className="bg-[#051525] text-white border-t border-blue-900/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">VR</span>
              </div>
              Rademacher GmbH
            </h3>
            <p className="text-gray-400 mb-4">
              Ihr zuverlässiger Partner für Heizung, Lüftung und Anlagenbau seit 1985. Qualität und Kundenzufriedenheit
              stehen bei uns an erster Stelle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Leistungen</h3>
            <ul className="space-y-2">
              {[
                { name: "Heizungstechnik", href: "/leistungen#heizung" },
                { name: "Lüftungssysteme", href: "/leistungen#lueftung" },
                { name: "Anlagenbau", href: "/leistungen#anlagenbau" },
                { name: "Sanitärinstallation", href: "/leistungen#sanitaer" },
                { name: "Wartung & Service", href: "/leistungen#wartung" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavigation(e, item.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Schnellzugriff</h3>
            <ul className="space-y-2">
              {[
                { name: "Startseite", href: "/" },
                { name: "Über uns", href: "/ueber-uns" },
                { name: "Referenzen", href: "/referenzen" },
                { name: "Kontakt", href: "/kontakt" },
                { name: "Impressum", href: "/impressum" },
                { name: "Datenschutz", href: "/datenschutz" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Jägerstraße 7a
                  <br />
                  58553 Halver
                  <br />
                  Deutschland
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <a href="tel:+492353668980" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +49 (0) 2353 66 89 80
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:info@rademacher-hla.de" className="text-gray-400 hover:text-blue-400 transition-colors">
                  info@rademacher-hla.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900/30 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Volker Rademacher Heizung Lüftung Anlagenbau GmbH. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

