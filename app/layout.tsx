import type React from "react"
import type { Metadata } from "next"
import { Inter, Pacifico } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer-simplified"
import { ThemeProvider } from "@/components/theme-provider"
import IntroAnimation from "@/components/intro-animation"
import ScrollToTop from "@/components/scroll-to-top"
import AnchorNavigation from "@/components/anchor-navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: "Volker Rademacher | Heizung Lüftung Anlagenbau GmbH",
  description:
    "Ihr Experte für Heizung, Lüftung und Anlagenbau in der Region. Professionelle Lösungen für Privat- und Gewerbekunden.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} ${pacifico.variable} font-sans bg-[#030d1a]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <IntroAnimation />
          <Navbar />
          <main className="overflow-x-hidden min-h-screen">
            {" "}
            {/* Mindesthöhe hinzugefügt */}
            {children}
          </main>
          <Footer />
          <ScrollToTop />
          <AnchorNavigation />
        </ThemeProvider>
      </body>
    </html>
  )
}

