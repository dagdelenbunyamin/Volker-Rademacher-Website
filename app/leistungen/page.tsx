import ServiceHero from "@/components/service-hero"
import ServicesList from "@/components/services-list"
import ProcessSteps from "@/components/process-steps"
import ServiceFAQ from "@/components/service-faq"
import PageTransition from "@/components/page-transition"

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServiceHero />
      <ServicesList />
      <ProcessSteps />
      <ServiceFAQ />
    </PageTransition>
  )
}

