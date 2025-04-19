import Link from "next/link"

export default function NotFound() {
  return (
    <div className="bg-[#030d1a] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">404</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Seite nicht gefunden</h2>
        <p className="text-gray-400 mb-8">Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.</p>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors inline-block"
        >
          Zurück zur Startseite
        </Link>
      </div>
    </div>
  )
}

