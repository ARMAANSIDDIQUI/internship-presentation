export const projectsData = [
  {
    title: "Digit Recognition (MNIST)",
    summary:
      "Multi-algorithm comparison for handwritten digit classification using traditional ML and deep learning approaches.",
    github: "https://github.com/armaan-siddiqui/mnist-digit-recognition",
    demo: "https://mnist-demo.vercel.app",
    preprocessing: [
      "Normalized pixel values to 0-1 range",
      "Reshaped 28x28 images to 784-dimensional vectors for ML models",
      "Applied data augmentation for CNN (rotation, zoom, shift)",
      "Split dataset: 60k training, 10k testing samples",
    ],
    models: ["Decision Tree", "Random Forest", "ANN (MLP)", "CNN"],
    performance: [
      { model: "Decision Tree", accuracy: 87.2, precision: 86.8, recall: 87.2, f1: 86.9 },
      { model: "Random Forest", accuracy: 94.1, precision: 94.3, recall: 94.1, f1: 94.2 },
      { model: "ANN", accuracy: 97.8, precision: 97.9, recall: 97.8, f1: 97.8 },
      { model: "CNN", accuracy: 99.2, precision: 99.3, recall: 99.2, f1: 99.2 },
    ],
    trainingData: [
      { epoch: 1, accuracy: 85.2, loss: 0.45 },
      { epoch: 2, accuracy: 92.1, loss: 0.28 },
      { epoch: 3, accuracy: 95.8, loss: 0.18 },
      { epoch: 4, accuracy: 97.2, loss: 0.12 },
      { epoch: 5, accuracy: 98.1, loss: 0.08 },
      { epoch: 6, accuracy: 98.7, loss: 0.06 },
      { epoch: 7, accuracy: 99.0, loss: 0.04 },
      { epoch: 8, accuracy: 99.2, loss: 0.03 },
    ],
    conclusion:
      "CNN achieved the highest accuracy (99.2%) due to its ability to capture spatial patterns in images. Random Forest provided good performance with interpretability, while Decision Tree was fastest but least accurate.",
    images: [
      {
        url: "/mnist-digit-samples-grid.jpg",
        caption: "Sample handwritten digits from the MNIST dataset",
      },
      {
        url: "/confusion-matrix-heatmap.png",
        caption: "Confusion matrix showing CNN model performance",
      },
      {
        url: "/training-accuracy-curves.jpg",
        caption: "Training and validation accuracy curves",
      },
      {
        url: "/model-comparison-bar-chart.png",
        caption: "Performance comparison across all models",
      },
    ],
  },
  {
    title: "Heart Disease Predictor",
    summary:
      "Predictive modeling for heart disease diagnosis using clinical features and multiple ML algorithms with focus on interpretability.",
    github: "https://github.com/armaan-siddiqui/heart-disease-predictor",
    demo: "https://heart-disease-demo.vercel.app",
    preprocessing: [
      "Handled missing values using median imputation",
      "Applied SMOTE for class imbalance (40% positive cases)",
      "Standardized numerical features (age, cholesterol, blood pressure)",
      "One-hot encoded categorical variables (chest pain type, ECG results)",
    ],
    models: ["Logistic Regression", "Decision Tree", "Random Forest", "ANN (MLP)"],
    performance: [
      { model: "Logistic Regression", accuracy: 85.4, precision: 83.2, recall: 88.1, f1: 85.6 },
      { model: "Decision Tree", accuracy: 82.1, precision: 79.8, recall: 85.3, f1: 82.4 },
      { model: "Random Forest", accuracy: 88.7, precision: 87.2, recall: 90.1, f1: 88.6 },
      { model: "ANN", accuracy: 87.3, precision: 85.9, recall: 89.2, f1: 87.5 },
    ],
    trainingData: [
      { epoch: 1, accuracy: 72.3, loss: 0.62 },
      { epoch: 2, accuracy: 78.9, loss: 0.48 },
      { epoch: 3, accuracy: 82.1, loss: 0.41 },
      { epoch: 4, accuracy: 84.7, loss: 0.36 },
      { epoch: 5, accuracy: 86.2, loss: 0.32 },
      { epoch: 6, accuracy: 87.0, loss: 0.29 },
      { epoch: 7, accuracy: 87.3, loss: 0.28 },
    ],
    conclusion:
      "Random Forest achieved the best balance of accuracy (88.7%) and interpretability. Feature importance analysis revealed chest pain type and maximum heart rate as top predictors.",
    images: [
      {
        url: "/roc-curves-comparison.jpg",
        caption: "ROC curves comparing all models",
      },
      {
        url: "/feature-importance-bar-chart.png",
        caption: "Feature importance from Random Forest model",
      },
      {
        url: "/precision-recall-curves.jpg",
        caption: "Precision-Recall curves for model comparison",
      },
      {
        url: "/correlation-heatmap-medical-features.jpg",
        caption: "Correlation matrix of clinical features",
      },
    ],
  },
  {
    title: "Crop Recommendation System",
    summary:
      "Advanced ensemble learning system for optimal crop selection based on soil and climate conditions using stacked models.",
    github: "https://github.com/armaan-siddiqui/crop-recommendation",
    demo: "https://crop-recommendation-demo.vercel.app",
    preprocessing: [
      "Normalized soil nutrient values (N, P, K) using MinMaxScaler",
      "Applied log transformation to rainfall data for normal distribution",
      "Created feature interactions (temperature × humidity)",
      "Handled seasonal patterns in climate data",
    ],
    models: ["Random Forest", "XGBoost", "LightGBM", "SVM", "Logistic Regression", "KNN", "MLP", "Stacked Ensemble"],
    performance: [
      { model: "Random Forest", accuracy: 92.3, precision: 91.8, recall: 92.3, f1: 92.0 },
      { model: "XGBoost", accuracy: 94.1, precision: 93.7, recall: 94.1, f1: 93.9 },
      { model: "SVM", accuracy: 89.7, precision: 89.2, recall: 89.7, f1: 89.4 },
      { model: "Stacked Ensemble", accuracy: 96.2, precision: 95.9, recall: 96.2, f1: 96.0 },
    ],
    trainingData: [
      { epoch: 1, accuracy: 78.4, loss: 0.58 },
      { epoch: 2, accuracy: 85.2, loss: 0.42 },
      { epoch: 3, accuracy: 89.1, loss: 0.34 },
      { epoch: 4, accuracy: 91.8, loss: 0.28 },
      { epoch: 5, accuracy: 93.7, loss: 0.24 },
      { epoch: 6, accuracy: 95.1, loss: 0.21 },
      { epoch: 7, accuracy: 95.8, loss: 0.19 },
      { epoch: 8, accuracy: 96.2, loss: 0.18 },
    ],
    conclusion:
      "Stacked ensemble achieved 96.2% accuracy by combining strengths of multiple algorithms. XGBoost and Random Forest were top base learners, with soil pH and rainfall as most important features.",
    images: [
      {
        url: "/crop-suitability-heatmap-map.jpg",
        caption: "Regional crop suitability heatmap",
      },
      {
        url: "/ensemble-model-architecture-diagram.jpg",
        caption: "Stacked ensemble architecture diagram",
      },
      {
        url: "/feature-importance-soil-climate.jpg",
        caption: "Feature importance for crop recommendation",
      },
      {
        url: "/multi-class-roc-curves.jpg",
        caption: "Multi-class ROC curves (One-vs-Rest)",
      },
    ],
  },
]
