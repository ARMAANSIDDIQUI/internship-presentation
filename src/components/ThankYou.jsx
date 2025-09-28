"use client"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaHeart } from "react-icons/fa"

const ThankYou = () => {
  const handlePrintPDF = () => {
    window.print()
  }

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/armaan-siddiqui",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/armaan-siddiqui",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      url: "mailto:armaan.siddiqui@example.com",
      color: "hover:text-accent-primary",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold gradient-text mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Thank You 🙏
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-text-secondary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I appreciate you taking the time to learn about my journey in Data Science & Machine Learning
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-text-secondary mb-12"
          >
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                color: ["#F9FAFB", "#EF4444", "#F9FAFB"],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <FaHeart />
            </motion.div>
            <span>and React</span>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center gap-8 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 text-text-secondary ${link.color} transition-colors group`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl group-hover:animate-bounce">{link.icon}</div>
              <span className="text-sm font-medium">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Download PDF Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <button
            onClick={handlePrintPDF}
            className="bg-gradient-to-r from-accent-primary to-accent-cyan text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 group"
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Portfolio PDF
          </button>
          <p className="text-text-secondary text-sm mt-3">Save this presentation for offline viewing</p>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-16 pt-8 border-t border-text-secondary/20"
        >
          <p className="text-text-secondary text-sm">
            © 2025 Armaan Siddiqui. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ThankYou
