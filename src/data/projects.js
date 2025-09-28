export const projectsData = [
  {
    title: "Digit Recognition (MNIST)",
    summary:
      "Multi-algorithm comparison for handwritten digit classification using traditional ML and deep learning approaches.",
    preprocessing: [
      "Normalized pixel values to 0-1 range",
      "Reshaped 28x28 images to 784-dimensional vectors for ML models",
      "Applied data augmentation for CNN (rotation, zoom, shift)",
      "Split dataset: 60k training, 10k testing samples",
    ],
    models: ["Decision Tree", "Random Forest", "ANN (MLP)", "CNN"],
    performance: [
      { model: "Decision Tree", accuracy: 87.67, precision: 87.5, recall: 87.7, f1: 87.6 },
      { model: "Random Forest", accuracy: 97.01, precision: 97.0, recall: 97.0, f1: 97.0 },
      { model: "Neural Network", accuracy: 97.85, precision: 97.9, recall: 97.8, f1: 97.8 },
      { model: "CNN", accuracy: 98.86, precision: 98.9, recall: 98.9, f1: 98.9 }
    ],
    trainingData: [
      { "epoch": 1, "accuracy": 89.5, "loss": 0.35, "validationAccuracy": 91.2, "validationLoss": 0.31 },
      { "epoch": 2, "accuracy": 93.8, "loss": 0.21, "validationAccuracy": 94.5, "validationLoss": 0.19 },
      { "epoch": 3, "accuracy": 96.1, "loss": 0.14, "validationAccuracy": 96.3, "validationLoss": 0.13 },
      { "epoch": 4, "accuracy": 97.2, "loss": 0.10, "validationAccuracy": 97.0, "validationLoss": 0.11 },
      { "epoch": 5, "accuracy": 97.9, "loss": 0.08, "validationAccuracy": 97.8, "validationLoss": 0.09 },
      { "epoch": 6, "accuracy": 98.4, "loss": 0.06, "validationAccuracy": 98.2, "validationLoss": 0.07 },
      { "epoch": 7, "accuracy": 98.8, "loss": 0.05, "validationAccuracy": 98.5, "validationLoss": 0.06 },
      { "epoch": 8, "accuracy": 99.1, "loss": 0.04, "validationAccuracy": 98.7, "validationLoss": 0.05 },
      { "epoch": 9, "accuracy": 99.3, "loss": 0.03, "validationAccuracy": 98.8, "validationLoss": 0.05 },
      { "epoch": 10, "accuracy": 99.5, "loss": 0.02, "validationAccuracy": 98.8, "validationLoss": 0.05 },
      { "epoch": 11, "accuracy": 99.6, "loss": 0.02, "validationAccuracy": 98.9, "validationLoss": 0.04 },
      { "epoch": 12, "accuracy": 99.7, "loss": 0.01, "validationAccuracy": 98.8, "validationLoss": 0.05 }
    ],
    conclusion:
      "CNN achieved the highest accuracy (98.86%) due to its ability to capture spatial patterns in images. Random Forest provided good performance with interpretability, while Decision Tree was fastest but least accurate.",
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
        url: "/confusion-matrix-heatmap-decision-tree.png",
        caption: "Confusion matrix showing Decision Tree model performance",
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
    preprocessing: [
      "Handled missing values using median imputation",
      "Applied SMOTE for class imbalance (40% positive cases)",
      "Standardized numerical features (age, cholesterol, blood pressure)",
      "One-hot encoded categorical variables (chest pain type, ECG results)",
    ],
    models: ["Logistic Regression", "Decision Tree", "Random Forest", "ANN (MLP)"],
    "performance": [
      { "model": "Logistic Regression", "accuracy": 79.51, "precision": 79.2, "recall": 80.1, "f1": 79.6 },
      { "model": "Decision Tree", "accuracy": 98.54, "precision": 98.5, "recall": 98.5, "f1": 98.5 },
      { "model": "Random Forest", "accuracy": 98.54, "precision": 98.5, "recall": 98.5, "f1": 98.5 },
      { "model": "ANN", "accuracy": 98.54, "precision": 98.6, "recall": 98.5, "f1": 98.5 }
    ],
    "trainingData": [
      { "epoch": 1, "accuracy": 78.5, "loss": 0.55 },
      { "epoch": 2, "accuracy": 85.2, "loss": 0.43 },
      { "epoch": 3, "accuracy": 89.9, "loss": 0.35 },
      { "epoch": 4, "accuracy": 92.8, "loss": 0.28 },
      { "epoch": 5, "accuracy": 94.6, "loss": 0.22 },
      { "epoch": 6, "accuracy": 95.9, "loss": 0.18 },
      { "epoch": 7, "accuracy": 96.5, "loss": 0.16 },
      { "epoch": 8, "accuracy": 96.7, "loss": 0.15 }
    ],
    conclusion:
      "Logistic Regression achieved the lowest performance with an accuracy of 79.51%. This is likely because Logistic Regression is a linear model, meaning it works best when it can separate the data into 'disease' and 'no disease' categories with a straight line or plane. The heart disease dataset contains complex, non-linear relationships between features like age, cholesterol, and chest pain type. More advanced models like Random Forests and Neural Networks are better at capturing these intricate patterns, resulting in their higher accuracy.",
    images: [
      {
        url: "/feature-importance-bar-chart.png",
        caption: "Bar Chart for comparing model's",
      },
      {
        url: "/correlation-heatmap.jpg",
        caption: "Precision matrix of all models.",
      },
    ],
  },
  {
    title: "Crop Recommendation System",
    summary:
      "Advanced ensemble learning system for optimal crop selection based on soil and climate conditions using stacked models.",
    preprocessing: [
      "Normalized soil nutrient values (N, P, K) using MinMaxScaler",
      "Applied log transformation to rainfall data for normal distribution",
      "Created feature interactions (temperature × humidity)",
      "Handled seasonal patterns in climate data",
    ],
    models: ["Random Forest", "XGBoost", "LightGBM", "SVM", "Logistic Regression", "KNN", "MLP", "Stacked Ensemble"],
    "performance": [
      { "model": "Random Forest", "accuracy": 86.00, "precision": 85.8, "recall": 86.0, "f1": 85.9 },
      { "model": "SVM", "accuracy": 86.00, "precision": 85.7, "recall": 86.0, "f1": 85.8 },
      { "model": "Logistic Regression", "accuracy": 81.00, "precision": 80.5, "recall": 81.0, "f1": 80.7 },
      { "model": "KNN", "accuracy": 81.00, "precision": 80.6, "recall": 81.0, "f1": 80.8 },
      { "model": "XGBoost", "accuracy": 81.00, "precision": 80.4, "recall": 81.0, "f1": 80.7 },
      { "model": "Stacked Ensemble", "accuracy": 95.45, "precision": 95.2, "recall": 95.5, "f1": 95.3 }
    ],
    "trainingData": [
      { "epoch": 1, "accuracy": 82.5, "loss": 0.51 },
      { "epoch": 2, "accuracy": 87.9, "loss": 0.39 },
      { "epoch": 3, "accuracy": 90.4, "loss": 0.31 },
      { "epoch": 4, "accuracy": 92.6, "loss": 0.26 },
      { "epoch": 5, "accuracy": 94.1, "loss": 0.22 },
      { "epoch": 6, "accuracy": 95.0, "loss": 0.19 },
      { "epoch": 7, "accuracy": 95.5, "loss": 0.17 }
    ],
    conclusion:
      "The Stacked Ensemble model achieved an impressive final accuracy of 95.45%. This technique succeeded by training a Logistic Regression meta-model to learn the best way to combine the predictions from five diverse base learners (Random Forest, SVM, Logistic Regression, KNN, and XGBoost). By leveraging the collective strengths of these algorithms, the stacked model significantly outperformed any individual learner. Within the base models, Random Forest and SVM were the top performers, and feature importance analysis consistently pointed to soil pH and rainfall as the most critical predictors.",
    images: [
      {
        url: "/crop-suitability-heatmap-map.jpg",
        caption: "Crop suitability heatmap using stacked model.",
      },
      {
        url: "/ensemble-model-architecture-diagram.jpg",
        caption: "Stacked ensemble architecture diagram",
      },
    ],
  },
]
