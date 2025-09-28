"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaDatabase, FaPython, FaChartBar, FaBrain, FaArrowLeft, FaArrowRight } from "react-icons/fa"

// --- Enhanced Data for Learning Slides ---
const learningSlides = [
  {
    id: "basics",
    title: "Data Science & ML Fundamentals",
    icon: <FaBrain className="text-4xl text-accent-primary" />,
    points: [
      "Supervised (e.g., predicting house prices) vs. Unsupervised Learning (e.g., customer segmentation)",
      "Data Preprocessing: Handling missing values, scaling features (Min-Max, Standard), and encoding",
      "Feature Engineering: Creating new, impactful features from existing data to boost model accuracy",
      "Model Evaluation: Using metrics like Accuracy, Precision, Recall, F1-Score, and MSE",
      "Cross-Validation (e.g., K-Fold) to ensure the model generalizes well to new, unseen data",
    ],
  },
  {
    id: "tools",
    title: "Essential Tools & Libraries",
    icon: <FaPython className="text-4xl text-accent-cyan" />,
    points: [
      "SQL: Writing complex queries with Joins, Window Functions, and CTEs(Common Table Expressions) for data extraction",
      "NumPy: Leveraging N-dimensional arrays for high-performance scientific computing",
      "Pandas: Mastering DataFrames for data cleaning, transformation, and analysis (groupby, merge)",
      "Scikit-learn: Implementing a wide array of ML algorithms and building robust pipelines",
      "Jupyter Notebooks: An interactive environment for rapid prototyping and exploratory data analysis (EDA)",
    ],
  },
  {
    id: "visualization",
    title: "Effective Data Visualization",
    icon: <FaChartBar className="text-4xl text-accent-highlight" />,
    points: [
      "Matplotlib & Seaborn: Creating static, publication-quality plots like histograms, heatmaps, and pairplots",
      // "Plotly: Building interactive charts and dashboards for dynamic data exploration",
      "Chart Selection: Choosing the right chart (Bar for comparison, Line for trends, Scatter for relationships)",
      "Dashboarding Tools: Basic principles of tools like Tableau or Power BI for business intelligence",
      "Storytelling with Data: Crafting compelling narratives that communicate key insights clearly",
    ],
  },
  {
    id: "algorithms",
    title: "Machine & Deep Learning Algorithms",
    icon: <FaDatabase className="text-4xl text-heading" />,
    points: [
      "Regression Models: Linear Regression, Lasso, Ridge (for predicting continuous values like sales)",
      "Classification Models: Logistic Regression, k-NN, SVM, Naive Bayes (for predicting categories like churn)",
      "Ensemble Methods: Random Forest (Bagging) & Gradient Boosting, XGBoost (Boosting) for high performance",
      "Clustering Algorithms: K-Means, Hierarchical Clustering (for finding hidden groups)",
      "Deep Learning: ANNs for tabular data, CNNs for image recognition, and RNNs/LSTMs for time-series",
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

              {/* Sample chart placeholder - COMMENTED OUT */}
              {/*
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
              */}
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