import PageTransition from "@/components/page-transition"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function ImpressumPage() {
  return (
    <PageTransition>
      <div className="bg-[#030d1a] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#051525] rounded-xl p-6 md:p-10 border border-blue-900/30 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Impressum</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="text-gray-300 space-y-2">
                  <p>Volker Rademacher Heizung Lüftung Anlagenbau GmbH</p>
                  <p className="flex items-start gap-3">
                    <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                    <span>
                      Musterstraße 123
                      <br />
                      12345 Musterstadt
                      <br />
                      Deutschland
                    </span>
                  </p>

                  <p>Handelsregister: HRB 12345</p>
                  <p>Registergericht: Amtsgericht Musterstadt</p>

                  <p className="flex items-center gap-3">
                    <Phone size={20} className="text-blue-400 flex-shrink-0" />
                    <a href="tel:+4912345678900" className="text-gray-300 hover:text-blue-400 transition-colors">
                      +49 (0) 1234 / 567890
                    </a>
                  </p>

                  <p className="flex items-center gap-3">
                    <Mail size={20} className="text-blue-400 flex-shrink-0" />
                    <a
                      href="mailto:info@rademacher-hvac.de"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      info@rademacher-hvac.de
                    </a>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Vertreten durch</h2>
                <p className="text-gray-300">Volker Rademacher, Geschäftsführer</p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Umsatzsteuer-ID</h2>
                <p className="text-gray-300">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  DE 123456789
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                </h2>
                <p className="text-gray-300">
                  Volker Rademacher
                  <br />
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Streitschlichtung</h2>
                <p className="text-gray-300">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p className="text-gray-300 mt-2">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Haftung für Inhalte</h2>
                <p className="text-gray-300">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p className="text-gray-300 mt-2">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Haftung für Links</h2>
                <p className="text-gray-300">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                  verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                  Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                </p>
                <p className="text-gray-300 mt-2">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                  einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                  Links umgehend entfernen.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Urheberrecht</h2>
                <p className="text-gray-300">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                  gestattet.
                </p>
                <p className="text-gray-300 mt-2">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                  Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                  auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                  Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </section>
            </div>

            <div className="mt-10 pt-6 border-t border-blue-900/30">
              <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

