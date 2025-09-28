"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative">
      <div className="relative h-96 bg-bg-1 rounded-lg overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage].url}
            alt={images[currentImage].caption}
            className="w-full h-full object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-bg-2/80 text-text-primary p-3 rounded-full hover:bg-accent-primary transition-colors"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-bg-2/80 text-text-primary p-3 rounded-full hover:bg-accent-primary transition-colors"
        >
          <FaArrowRight />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-bg-2/80 text-text-primary px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>

      {/* Image Caption */}
      <div className="mt-4 text-center">
        <p className="text-text-secondary">{images[currentImage].caption}</p>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? "bg-accent-primary" : "bg-text-secondary/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
