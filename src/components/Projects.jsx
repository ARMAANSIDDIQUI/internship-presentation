"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import ProjectSlide from "./ProjectSlide"
import { projectsData } from "../data/projects"

const Projects = ({ onNext, onPrev }) => {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    if (currentProject < projectsData.length - 1) {
      setCurrentProject(currentProject + 1)
    } else {
      onNext()
    }
  }

  const prevProject = () => {
    if (currentProject > 0) {
      setCurrentProject(currentProject - 1)
    } else {
      onPrev()
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 py-16">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-heading mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectSlide project={projectsData[currentProject]} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={prevProject}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors px-4 py-2 rounded-lg hover:bg-bg-2"
          >
            <FaArrowLeft />
            Previous
          </button>

          <div className="flex gap-3">
            {projectsData.map((project, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  index === currentProject
                    ? "bg-accent-primary text-white"
                    : "bg-bg-2 text-text-secondary hover:bg-accent-primary/20"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>

          <button
            onClick={nextProject}
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors px-4 py-2 rounded-lg hover:bg-bg-2"
          >
            Next
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Projects
