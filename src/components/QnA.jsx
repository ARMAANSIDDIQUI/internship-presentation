"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaEnvelope, FaPaperPlane, FaComments } from "react-icons/fa"

const QnA = ({ onNext, onPrev }) => {
  const [email, setEmail] = useState("")
  const [question, setQuestion] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent("Question about your portfolio")
    const body = encodeURIComponent(`Question: ${question}\n\nFrom: ${email}`)
    window.open(`mailto:armaan.siddiqui@example.com?subject=${subject}&body=${body}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 3,
              }}
              className="text-6xl"
            >
              <FaComments className="text-accent-primary" />
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">Any Questions?</h2>

          <p className="text-xl text-text-secondary mb-8">
            I'd love to hear from you! Ask me anything about my projects, experience, or data science in general.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-bg-2 rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-text-primary font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-bg-1 border border-text-secondary/20 rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="question" className="block text-text-primary font-medium mb-2">
                Your Question
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                rows={5}
                className="w-full bg-bg-1 border border-text-secondary/20 rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors resize-none"
                placeholder="What would you like to know?"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-accent-primary to-accent-cyan text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane />
              Send Question
            </motion.button>
          </form>

          <div className="mt-8 pt-8 border-t border-text-secondary/20">
            <p className="text-text-secondary mb-4">Or reach out directly:</p>
            <a
              href="mailto:armaan.siddiqui@example.com"
              className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-cyan transition-colors"
            >
              <FaEnvelope />
              armaan.siddiqui@example.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <button onClick={onNext} className="text-text-secondary hover:text-accent-primary transition-colors">
            Continue to Thank You →
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default QnA
