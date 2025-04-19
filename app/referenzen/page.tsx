import ProjectsHero from "@/components/projects-hero"
import PageTransition from "@/components/page-transition"
import { Suspense } from "react"
import ProjectsFilterClient from "@/components/projects-filter-client"

export default function ReferencesPage() {
  return (
    <PageTransition>
      <ProjectsHero />
      <section className="py-12 md:py-20 bg-[#030d1a]">
        <Suspense
          fallback={<div className="min-h-[400px] flex items-center justify-center">Projekte werden geladen...</div>}
        >
          <ProjectsFilterClient />
        </Suspense>
      </section>
    </PageTransition>
  )
}

