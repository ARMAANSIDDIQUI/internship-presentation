"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaArrowRight, FaGraduationCap, FaBriefcase } from "react-icons/fa"

const Intro = ({ onNext }) => {
  const [typingText, setTypingText] = useState("")
  const fullText = "Hi, I'm Armaan Siddiqui — DS & ML Enthusiast "

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Portrait */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.div
              className="w-80 h-80 rounded-full bg-gradient-to-br from-accent-primary to-accent-cyan p-1 animate-glow"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full bg-bg-2 flex items-center justify-center overflow-hidden">
                <img
                  src="/professional-headshot.png"
                  alt="Armaan Siddiqui"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-accent-highlight rounded-full animate-float"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-heading mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Armaan Siddiqui
            </motion.h1>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-text-secondary">
                <FaBriefcase className="text-accent-primary" />
                <span>Data Science & Machine Learning Intern</span>
              </div>
              <div className="flex items-center gap-3 text-text-secondary">
                <FaGraduationCap className="text-accent-cyan" />
                <span>Computer Science Student</span>
              </div>
            </div>

            <div className="h-16 flex items-center">
              <p className="text-xl md:text-2xl text-text-primary font-medium">
                {typingText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <motion.button
            onClick={onNext}
            className="group bg-gradient-to-r from-accent-primary to-accent-cyan text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Start
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Intro
