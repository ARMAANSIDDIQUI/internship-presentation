# Armaan Siddiqui - Portfolio Website

A professional, presentation-style portfolio website built with React, showcasing Data Science and Machine Learning projects. This interactive portfolio replaces traditional PowerPoint presentations with a modern, responsive web experience.

## 🚀 Features

- **Interactive Presentation**: Navigate through sections like slides with smooth animations
- **Responsive Design**: Optimized for desktop and mobile devices
- **Animated Background**: Cursor and touch-reactive particle system
- **Project Showcases**: Detailed analysis of 3 ML projects with performance metrics
- **Accessibility**: Keyboard navigation support and screen reader friendly
- **Print-Friendly**: Export portfolio as PDF for offline viewing

## 🛠️ Tech Stack

- **React** (Vite) - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - FontAwesome and Lucide icons
- **Recharts** - Interactive data visualizations
- **React TSParticles** - Animated background effects

## 📱 Sections

1. **Intro** - Personal introduction with animated typing effect
2. **What I Learned** - 4-slide carousel covering DS/ML fundamentals
3. **Projects** - 3 detailed project showcases with performance analysis
4. **Q&A** - Contact form for questions and inquiries
5. **Thank You** - Social links and portfolio download

## 🎯 Projects Featured

### 1. Digit Recognition (MNIST)
- **Models**: Decision Tree, Random Forest, ANN, CNN
- **Best Performance**: CNN with 99.2% accuracy
- **Focus**: Computer vision and deep learning comparison

### 2. Heart Disease Predictor
- **Models**: Logistic Regression, Decision Tree, Random Forest, ANN
- **Best Performance**: Random Forest with 88.7% accuracy
- **Focus**: Medical prediction and model interpretability

### 3. Crop Recommendation System
- **Models**: Stacked Ensemble of 7 base learners
- **Best Performance**: 96.2% accuracy with ensemble approach
- **Focus**: Agricultural AI and advanced ensemble methods

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/armaan-siddiqui/portfolio-website.git
cd portfolio-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js` and CSS variables in `src/index.css`:

- **Backgrounds**: Deep navy-gray theme
- **Accents**: Indigo, cyan, and yellow highlights
- **Text**: Light colors for contrast

### Content
- **Projects**: Edit `src/data/projects.js` to update project information
- **Personal Info**: Modify components in `src/components/` directory
- **Images**: Replace placeholder images in the `public` directory

### Background Animation
- Toggle animation with the button in the top-right corner
- Customize particle effects in `src/components/ReactiveBg.jsx`
- Automatic fallback for low-power devices

## 📱 Navigation

- **Keyboard**: Use ← → arrow keys to navigate between sections
- **Mouse**: Click navigation dots at the bottom
- **Touch**: Swipe on mobile devices (within image sliders)

## 🎯 Performance Features

- **Lazy Loading**: Heavy components load on demand
- **Optimized Images**: Placeholder system with proper sizing
- **Responsive Charts**: Interactive visualizations that scale
- **Battery Friendly**: Background animation optimizations for mobile

## 📄 Export Options

- **PDF Export**: Click "Download Portfolio PDF" to save as PDF
- **Print Friendly**: Optimized print styles for clean output

## 🔧 Development Notes

### File Structure
\`\`\`
src/
├── components/          # React components
├── data/               # Project data and content
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind config
\`\`\`

### Key Components
- `ReactiveBg.jsx` - Animated particle background
- `ProjectSlide.jsx` - Individual project showcase
- `ImageSlider.jsx` - Swipeable image gallery
- `NavbarDots.jsx` - Section navigation

### Data Structure
Projects are defined in `src/data/projects.js` with:
- Performance metrics and model comparisons
- Training data for visualization
- Image galleries with captions
- Preprocessing steps and conclusions

## 🌟 Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus States**: Clear visual focus indicators
- **Alt Text**: Descriptive image alternatives
- **Color Contrast**: WCAG compliant color combinations

## 📱 Mobile Optimization

- **Touch Interactions**: Responsive particle effects
- **Swipe Gestures**: Image slider navigation
- **Responsive Layout**: Adapts to all screen sizes
- **Performance**: Optimized for mobile devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Armaan Siddiqui**
- Email: armaan.siddiqui@example.com
- LinkedIn: [linkedin.com/in/armaan-siddiqui](https://linkedin.com/in/armaan-siddiqui)
- GitHub: [github.com/armaan-siddiqui](https://github.com/armaan-siddiqui)

---

*Built with ❤️ using React, Tailwind CSS, and Framer Motion*
