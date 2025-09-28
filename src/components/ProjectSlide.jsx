"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt, FaChartBar, FaImage } from "react-icons/fa"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import ImageSlider from "./ImageSlider"

const ProjectSlide = ({ project }) => {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="bg-bg-2 rounded-2xl p-8 md:p-12">
      {/* Project Header */}
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{project.title}</h3>
        <p className="text-text-secondary text-lg mb-6">{project.summary}</p>
        <div className="flex justify-center gap-4">
          <a
            href={project.github}
            className="flex items-center gap-2 bg-accent-primary text-white px-4 py-2 rounded-lg hover:bg-accent-primary/80 transition-colors"
          >
            <FaGithub />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              className="flex items-center gap-2 bg-accent-cyan text-white px-4 py-2 rounded-lg hover:bg-accent-cyan/80 transition-colors"
            >
              <FaExternalLinkAlt />
              Demo
            </a>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-bg-1 rounded-lg p-1 flex">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeTab === "description"
                ? "bg-accent-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <FaChartBar className="inline mr-2" />
            Analysis
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeTab === "images" ? "bg-accent-primary text-white" : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <FaImage className="inline mr-2" />
            Visuals
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "description" ? (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-heading mb-3">Dataset & Preprocessing</h4>
                <ul className="space-y-2 text-text-secondary">
                  {project.preprocessing.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-heading mb-3">Models Compared</h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.models.map((model, index) => (
                    <div key={index} className="bg-bg-1 px-3 py-2 rounded-lg text-sm text-text-secondary">
                      {model}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-heading mb-3">Key Insights</h4>
                <p className="text-text-secondary">{project.conclusion}</p>
              </div>
            </div>

            {/* Right Column - Performance Chart */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-heading mb-3">Model Performance</h4>
                <div className="bg-bg-1 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={project.performance}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="model" stroke="#D1D5DB" fontSize={12} />
                      <YAxis stroke="#D1D5DB" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#2B2B40",
                          border: "1px solid #6366F1",
                          borderRadius: "8px",
                        }}
                      />
                      <Bar dataKey="accuracy" fill="#6366F1" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-heading mb-3">Training Progress</h4>
                <div className="bg-bg-1 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={project.trainingData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="epoch" stroke="#D1D5DB" fontSize={12} />
                      <YAxis stroke="#D1D5DB" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#2B2B40",
                          border: "1px solid #22D3EE",
                          borderRadius: "8px",
                        }}
                      />
                      <Line type="monotone" dataKey="accuracy" stroke="#22D3EE" strokeWidth={2} />
                      <Line type="monotone" dataKey="loss" stroke="#FACC15" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ImageSlider images={project.images} />
        )}
      </motion.div>
    </div>
  )
}

export default ProjectSlide
