"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

type ProjectCategory = "all" | "heizung" | "lueftung" | "anlagenbau" | "sanitaer"

interface ProjectsFilterProps {
  onFilterChange: (category: ProjectCategory) => void
  activeFilter: ProjectCategory
}

export default function ProjectsFilter({ onFilterChange, activeFilter }: ProjectsFilterProps) {
  const filters: { label: string; value: ProjectCategory }[] = [
    { label: "Alle Projekte", value: "all" },
    { label: "Heizungstechnik", value: "heizung" },
    { label: "Lüftungssysteme", value: "lueftung" },
    { label: "Anlagenbau", value: "anlagenbau" },
    { label: "Sanitärinstallation", value: "sanitaer" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 md:mb-16">
      {filters.map((filter) => (
        <motion.button
          key={filter.value}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className={cn(
            "px-4 py-2 rounded-full transition-colors",
            activeFilter === filter.value
              ? "bg-blue-600 text-white"
              : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10",
          )}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </motion.button>
      ))}
    </div>
  )
}

