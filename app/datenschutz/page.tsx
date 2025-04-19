import PageTransition from "@/components/page-transition"
import Link from "next/link"

export default function DatenschutzPage() {
  return (
    <PageTransition>
      <div className="bg-[#030d1a] py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#051525] rounded-xl p-6 md:p-10 border border-blue-900/30 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Datenschutzerklärung</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">1. Datenschutz auf einen Blick</h2>

                <h3 className="text-lg font-medium text-white mt-6 mb-2">Allgemeine Hinweise</h3>
                <p className="text-gray-300">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                  persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie
                  unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </p>

                <h3 className="text-lg font-medium text-white mt-6 mb-2">Datenerfassung auf dieser Website</h3>
                <p className="text-gray-300">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
                  <br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <p className="text-gray-300 mt-4">
                  <strong>Wie erfassen wir Ihre Daten?</strong>
                  <br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B.
                  um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="text-gray-300 mt-2">
                  Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                  allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                  Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <p className="text-gray-300 mt-4">
                  <strong>Wofür nutzen wir Ihre Daten?</strong>
                  <br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <p className="text-gray-300 mt-4">
                  <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
                  <br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
                  Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie
                  sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein
                  Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
                  2. Allgemeine Hinweise und Pflichtinformationen
                </h2>

                <h3 className="text-lg font-medium text-white mt-6 mb-2">Datenschutz</h3>
                <p className="text-gray-300">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie
                  dieser Datenschutzerklärung.
                </p>
                <p className="text-gray-300 mt-2">
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene
                  Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
                  Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch,
                  wie und zu welchem Zweck das geschieht.ziert werden können. Die vorliegende Datenschutzerklärung
                  erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
                  Zweck das geschieht.
                </p>
                <p className="text-gray-300 mt-2">
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
                  Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
                  nicht möglich.
                </p>

                <h3 className="text-lg font-medium text-white mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-gray-300">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <p className="text-gray-300 mt-2">
                  Volker Rademacher Heizung Lüftung Anlagenbau GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  12345 Musterstadt
                  <br />
                  Deutschland
                </p>
                <p className="text-gray-300 mt-2">
                  Telefon: +49 (0) 1234 / 567890
                  <br />
                  E-Mail: info@rademacher-hvac.de
                </p>
                <p className="text-gray-300 mt-2">
                  Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                  anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen,
                  E-Mail-Adressen o. Ä.) entscheidet.
                </p>
              </section>

              <section>
                <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
                  3. Datenerfassung auf dieser Website
                </h2>

                <h3 className="text-lg font-medium text-white mt-6 mb-2">Cookies</h3>
                <p className="text-gray-300">
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf
                  Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies
                  werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät
                  gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser
                  erfolgt.
                </p>
                <p className="text-gray-300 mt-2">
                  Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog.
                  Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von
                  Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                </p>
                <p className="text-gray-300 mt-2">
                  Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte
                  Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die
                  Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken
                  verwendet.
                </p>
                <p className="text-gray-300 mt-2">
                  Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung
                  bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung
                  der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies),
                  werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
                  angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen
                  Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine
                  Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt
                  wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a
                  DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
                </p>
                <p className="text-gray-300 mt-2">
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und
                  Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell
                  ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei
                  der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
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

