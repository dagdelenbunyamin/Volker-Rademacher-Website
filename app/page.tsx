import Hero from "@/components/hero"
import ServicesOverview from "@/components/services-overview"
import FeaturedProjects from "@/components/featured-projects"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <>
      <Hero badge="Seit 1985" title1="Ihr Partner für" title2="Wärme & Komfort" />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
    </>
  )
}

