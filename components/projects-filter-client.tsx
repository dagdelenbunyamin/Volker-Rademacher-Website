"use client"

import { useState } from "react"
import ProjectsFilter from "@/components/projects-filter"
import ProjectsGrid from "@/components/projects-grid"

type ProjectCategory = "all" | "heizung" | "lueftung" | "anlagenbau" | "sanitaer"

export default function ProjectsFilterClient() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all")

  const handleFilterChange = (category: ProjectCategory) => {
    setActiveFilter(category)
  }

  return (
    <>
      <ProjectsFilter onFilterChange={handleFilterChange} activeFilter={activeFilter} />
      <ProjectsGrid activeFilter={activeFilter} />
    </>
  )
}

