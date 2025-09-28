"use client"
import { motion } from "framer-motion"

const NavbarDots = ({ sections, currentSection, onSectionChange }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 no-print">
      <div className="bg-bg-2/80 backdrop-blur-sm rounded-full px-6 py-3 flex gap-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(index)}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection
                ? "bg-accent-primary scale-125"
                : "bg-text-secondary/40 hover:bg-text-secondary/60"
            }`}
            aria-label={`Go to ${section.id} section`}
          >
            {index === currentSection && (
              <motion.div
                className="absolute inset-0 rounded-full bg-accent-primary"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default NavbarDots
