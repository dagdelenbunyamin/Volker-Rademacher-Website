import AboutHero from "@/components/about-hero"
import CompanyHistory from "@/components/company-history"
import TeamMembers from "@/components/team-members"
import Values from "@/components/values"
import PageTransition from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pb-20 overflow-y-auto overscroll-contain">
        <AboutHero />
        <CompanyHistory />
        <Values />
        <TeamMembers />
      </div>
    </PageTransition>
  )
}

