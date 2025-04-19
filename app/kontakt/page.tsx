import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactMap from "@/components/contact-map"
import ContactInfo from "@/components/contact-info"
import PageTransition from "@/components/page-transition"

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactHero />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
      <ContactMap />
    </PageTransition>
  )
}

