"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ReactiveBg from "./components/ReactiveBg"
import Intro from "./components/Intro"
import Learned from "./components/Learned"
import Projects from "./components/Projects"
import QnA from "./components/QnA"
import ThankYou from "./components/ThankYou"
import NavbarDots from "./components/NavbarDots"

const sections = [
  { id: "intro", component: Intro },
  { id: "learned", component: Learned },
  { id: "projects", component: Projects },
  { id: "qna", component: QnA },
  { id: "thankyou", component: ThankYou },
]

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [bgEnabled, setBgEnabled] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft" && currentSection > 0) {
        setCurrentSection(currentSection - 1)
      } else if (e.key === "ArrowRight" && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSection])

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1)
    }
  }

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1)
    }
  }

  const goToSection = (index) => {
    setCurrentSection(index)
  }

  const CurrentComponent = sections[currentSection].component

  return (
    <div className="relative min-h-screen bg-bg-1 overflow-hidden">
      {bgEnabled && <ReactiveBg />}

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="min-h-screen"
          >
            <CurrentComponent
              onNext={nextSection}
              onPrev={prevSection}
              isFirst={currentSection === 0}
              isLast={currentSection === sections.length - 1}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <NavbarDots sections={sections} currentSection={currentSection} onSectionChange={goToSection} />

      {/* Background toggle button */}
      <button
        onClick={() => setBgEnabled(!bgEnabled)}
        className="fixed top-4 right-4 z-50 bg-bg-2 text-text-secondary px-3 py-2 rounded-lg text-sm hover:bg-accent-primary hover:text-white transition-colors no-print"
        aria-label="Toggle background animation"
      >
        {bgEnabled ? "🎨" : "🎨"}
      </button>
    </div>
  )
}

export default App
