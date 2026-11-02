export type Project = {
  title: string;
  subtitle: string;
  period: string;
  points: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    title: "Vision Transformer for Coffee Leaf Disease Classification",
    subtitle: "Undergraduate Thesis · Computer Vision",
    period: "2026",
    points: [
      "Built an image classification model using a Vision Transformer (ViT) architecture to identify diseases and nutrient deficiencies in coffee leaves.",
      "Implemented preprocessing, training, and performance evaluation with Python and PyTorch.",
      "Developed an interactive Streamlit interface to integrate the trained model into an image-based prediction system.",
    ],
    stack: ["Python", "PyTorch", "Vision Transformer", "Streamlit"],
  },
  {
    title: "MediKan — Fish Medical Assistant",
    subtitle: "Bangkit Academy Capstone · Cloud Computing",
    period: "2024",
    points: [
      "Developed the backend with Express.js and MySQL, integrating a Flask service for machine learning inference.",
      "Deployed backend services on Google Cloud Platform using App Engine and Cloud Run.",
      "Worked with a cross-functional team to deliver an end-to-end cloud-based application.",
    ],
    stack: ["Express.js", "MySQL", "Flask", "Google Cloud Platform"],
  },
];
