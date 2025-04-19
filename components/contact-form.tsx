"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setIsSuccess(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setError(data.message || "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.")
      }
    } catch (err) {
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#071a2c] rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 border border-blue-900/30"
    >
      <h3 className="text-2xl font-bold mb-6 text-white">Kontaktformular</h3>

      {isSuccess ? (
        <div className="bg-green-900/20 border border-green-800 rounded-lg p-6 text-center">
          <CheckCircle className="mx-auto mb-4 text-green-500 h-12 w-12" />
          <h4 className="text-xl font-semibold mb-2 text-white">Nachricht gesendet!</h4>
          <p className="text-gray-400 mb-4">Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.</p>
          <motion.button
            onClick={() => setIsSuccess(false)}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Neues Formular
          </motion.button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-900/50 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#051525] text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                E-Mail *
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-900/50 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#051525] text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Telefon
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-900/50 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#051525] text-white"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Betreff *
              </label>
              <motion.select
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-blue-900/50 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#051525] text-white"
              >
                <option value="">Bitte wählen</option>
                <option value="Heizungstechnik">Heizungstechnik</option>
                <option value="Lüftungssysteme">Lüftungssysteme</option>
                <option value="Anlagenbau">Anlagenbau</option>
                <option value="Sanitärinstallation">Sanitärinstallation</option>
                <option value="Wartung & Service">Wartung & Service</option>
                <option value="Sonstiges">Sonstiges</option>
              </motion.select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Nachricht *
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-blue-900/50 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-[#051525] text-white"
            ></motion.textarea>
          </div>

          {error && <div className="mb-6 p-4 bg-red-900/20 border border-red-800 rounded-md text-red-400">{error}</div>}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-medium rounded-md transition-colors disabled:from-blue-800 disabled:to-blue-700 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                Wird gesendet...
              </>
            ) : (
              <>
                <Send size={18} />
                Nachricht senden
              </>
            )}
          </motion.button>

          <p className="mt-4 text-sm text-gray-500">* Pflichtfelder</p>
        </form>
      )}
    </motion.div>
  )
}

