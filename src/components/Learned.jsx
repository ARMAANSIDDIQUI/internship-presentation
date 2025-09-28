"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaDatabase, FaPython, FaChartBar, FaBrain, FaArrowLeft, FaArrowRight } from "react-icons/fa"

const learningSlides = [
  {
    id: "basics",
    title: "Data Science & ML Basics",
    icon: <FaBrain className="text-4xl text-accent-primary" />,
    points: [
      "Supervised vs Unsupervised Learning",
      "Data Preprocessing & Cleaning",
      "Feature Engineering & Selection",
      "Cross-validation & Model Evaluation",
      "Bias-Variance Tradeoff",
    ],
  },
  {
    id: "tools",
    title: "SQL & Python Libraries",
    icon: <FaPython className="text-4xl text-accent-cyan" />,
    points: [
      "SQL: Joins, Aggregations, Subqueries",
      "NumPy: Array operations & Linear algebra",
      "Pandas: Data manipulation & analysis",
      "Scikit-learn: ML algorithms & pipelines",
      "Jupyter: Interactive development",
    ],
  },
  {
    id: "visualization",
    title: "Data Visualization",
    icon: <FaChartBar className="text-4xl text-accent-highlight" />,
    points: [
      "Matplotlib: Statistical plots & customization",
      "Seaborn: Statistical data visualization",
      "Plotly: Interactive dashboards",
      "Chart selection for different data types",
      "Storytelling with data",
    ],
  },
  {
    id: "algorithms",
    title: "ML & DL Algorithms",
    icon: <FaDatabase className="text-4xl text-heading" />,
    points: [
      "Supervised: Decision Tree, Random Forest, SVM",
      "Classification: Logistic Regression, KNN",
      "Ensemble: XGBoost, Gradient Boosting",
      "Deep Learning: ANN, CNN, RNN",
      "Hyperparameter tuning & optimization",
    ],
  },
]

const Learned = ({ onNext, onPrev }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < learningSlides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onNext()
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    } else {
      onPrev()
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 py-16">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-heading mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What I Learned
        </motion.h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-bg-2 rounded-2xl p-8 md:p-12 card-hover"
            >
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">{learningSlides[currentSlide].icon}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                  {learningSlides[currentSlide].title}
                </h3>
              </div>

              <div className="grid gap-4">
                {learningSlides[currentSlide].points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-text-secondary text-lg"
                  >
                    <div className="w-2 h-2 bg-accent-primary rounded-full flex-shrink-0" />
                    <span>{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* Sample chart placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 bg-bg-1 rounded-lg p-6 flex items-center justify-center"
              >
                <img
                  src={`/.jpg?height=200&width=400&query=${learningSlides[currentSlide].title} chart visualization`}
                  alt={`${learningSlides[currentSlide].title} visualization`}
                  className="rounded opacity-75"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors"
            >
              <FaArrowLeft />
              Previous
            </button>

            <div className="flex gap-2">
              {learningSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-accent-primary" : "bg-text-secondary/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors"
            >
              Next
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Learned
