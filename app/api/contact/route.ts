import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Hier würde normalerweise die E-Mail-Versendung oder Datenbankanbindung erfolgen
    console.log("Kontaktanfrage erhalten:", data)

    // Simuliere eine kurze Verzögerung für die API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen.",
    })
  } catch (error) {
    console.error("Fehler bei der Kontaktanfrage:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Bei der Übermittlung ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 },
    )
  }
}

