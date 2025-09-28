"use client"
import { motion } from "framer-motion"

const ThankYou = () => {
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
            className="text-8xl text-white md:text-7xl font-bold gradient-text mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Thank You!
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-text-secondary mb-12"
          >
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default ThankYou
