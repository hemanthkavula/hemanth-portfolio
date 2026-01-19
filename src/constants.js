export const PROFILE = {
  name: "Hemanth Chowdary Kavula",
  title: "Data Scientist & ML Engineer",
  subtitle: "MS Computer Science @ Rowan University | 3.8 GPA",
  email: "hemanthkavula2001@gmail.com",
  socials: {
    linkedin: "https://linkedin.com/in/hemanthkavula",
    github: "https://github.com/hemanthkavula",
  },
  location: "Pitman, NJ",
  phone: "(856) 524-6050",
  resumeUrl: "/resume.pdf",
};

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  {
    title: "Technical Skills",
    icon: "Code2",
    items: ["Python", "JavaScript", "SQL", "R", "HTML", "CSS", "MongoDB", "Git", "Excel"],
    proficiency: 90,
  },
  {
    title: "Data Science & Analytics",
    icon: "Brain",
    items: [
      "Machine Learning",
      "Data Analysis",
      "NumPy",
      "Pandas",
      "Statistical Modeling",
      "Topic Modeling",
      "Data Visualization",
      "Predictive Analytics",
      "ETL Pipelines",
      "Data Mining",
      "Data Engineering",
      "Natural Language Processing",
    ],
    proficiency: 92,
  },
  {
    title: "Tools & Frameworks",
    icon: "ChartPie",
    items: [
      "Power BI",
      "Tableau",
      "Scikit-learn",
      "TensorFlow",
      "React.js",
      "Node.js",
      "Express.js",
      "OpenCV",
      "Postman",
      "Bootstrap",
      "AWS",
    ],
    proficiency: 86,
  },
  {
    title: "Core Competencies",
    icon: "Sparkles",
    items: [
      "Problem-Solving",
      "Attention to Detail",
      "Consistency & Reliability",
      "Self-Motivation",
      "Professionalism",
      "Respectful Collaboration",
    ],
    proficiency: 88,
  },
];

export const PROJECTS = [
  {
    title: "Mental Health Reddit Analysis",
    description:
      "NLP pipeline to classify crisis-level content and uncover discussion themes.",
    impact: [
      "Analyzed 8,823 posts across 6 mental health subreddits",
      "TF-IDF, Word2Vec, and BERT embeddings for semantic representation",
      "72% accuracy (Random Forest) and 0.77 ROC-AUC (Logistic Regression)",
      "K-Means clustering and LDA topic modeling for latent themes",
    ],
    tech: [
      "Python",
      "NLTK",
      "Scikit-learn",
      "HuggingFace Transformers",
      "Gensim",
      "Pandas",
      "Matplotlib",
      "Seaborn",
    ],
    links: {
      github: "https://github.com/hemanthkavula/mental-health-reddit-analysis",
    },
  },
  {
    title: "Pizza Sales Data Analysis",
    description: "Advanced SQL analysis for sales insights and KPI reporting.",
    impact: [
      "Analyzed 10,000+ transactions across 4 normalized tables",
      "CTEs, window functions, and joins for KPI reporting",
      "Optimized staffing allocation by 20% and increased revenue by $50K",
      "Engineered 14 queries for CLV, product performance, and trends",
    ],
    tech: ["MySQL", "SQL", "Database Design"],
    links: {
      github: "https://github.com/hemanthkavula/pizza-sales-sql-analysis",
    },
  },
  {
    title: "Automated Facial Recognition Attendance",
    description: "Real-time facial recognition attendance automation.",
    impact: [
      "30+ FPS with 95% recognition accuracy",
      "KNN + PCA reduced dimensionality by 60%",
      "Automated attendance for 100+ individuals",
      "Cut manual tracking time by 15+ hours weekly",
    ],
    tech: ["Python", "OpenCV", "Scikit-learn", "K-NN", "PCA", "Pandas"],
    links: {
      github:
        "https://github.com/hemanthkavula/Automated-Facial-Recognition-based-Attendance-System",
    },
  },
];

export const EXPERIENCE = [
  {
    period: "Apr 2023 - Oct 2023",
    role: "Junior Data Scientist",
    company: "Arshil Digital Private Limited",
    location: "Hyderabad, India",
    highlights: [
      "Extracted and analyzed 50,000+ customer records using SQL, cutting retrieval time 35% and enabling real-time reporting for stakeholders.",
      "Automated data cleaning workflows in Excel with VBA macros, processing 10+ datasets weekly and reducing manual effort 40%.",
      "Collaborated with 5+ developers to identify top 3 customer pain points, leading to product features that increased retention by 12%.",
    ],
  },
  {
    period: "May 2022 - Jul 2022",
    role: "Machine Learning Intern",
    company: "Indian Servers",
    location: "Vijayawada",
    highlights: [
      "Developed Random Forest and SVM models in Python achieving 88% accuracy and reducing prediction error by 20%.",
      "Built an OpenCV + Keras object detection app processing 1,000+ images with 85% detection accuracy.",
      "Applied transfer learning (VGG16, ResNet) to cut training time from 8 hours to 2 hours (75% improvement).",
      "Deployed 2 ML models to production, contributing to client projects valued at $50K+.",
    ],
  },
  {
    period: "Mar 2022 - May 2022",
    role: "Data Science Intern",
    company: "1STOP.ai",
    location: "Bangalore",
    highlights: [
      "Built TensorFlow models for MNIST digit recognition with 94% accuracy and a 25% error reduction.",
      "Applied K-Means and Hierarchical clustering on 10,000+ customer records, defining 5 segments that boosted targeting efficiency by 30%.",
      "Used LDA for dimensionality reduction on 100+ features, improving training time by 45%.",
      "Engineered 15+ features with Pandas and NumPy, improving predictive performance by 18%.",
    ],
  },
];

export const EDUCATION = [
  {
    period: "2024 - 2025",
    role: "MS Computer Science @ Rowan University",
    details: "GPA 3.8/4.0, focus on data science and machine learning.",
  },
  {
    period: "2019 - 2023",
    role: "BTech CSE @ RVR & JC College",
    details: "CGPA 8.66/10, First Class with Distinction.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Foundations: Data, Data, Everywhere - Google (Coursera)",
    skills: ["Data fundamentals", "Analytical mindset", "Data lifecycle"],
    link: "certificates/Coursera_Data_Analytics_Foundations.pdf",
  },
  {
    title: "Ask Questions to Make Data-Driven Decisions - Google (Coursera)",
    skills: ["Problem framing", "KPI definition", "Decision-making"],
    link: "certificates/Coursera_Ask_Questions_to_Make_Data_Driven_Decisions.pdf",
  },
  {
    title: "Prepare Data for Exploration - Google (Coursera)",
    skills: ["Data cleaning", "Data integrity", "Quality checks"],
    link: "certificates/Coursera_Prepare_Data_For_Exploration.pdf",
  },
  {
    title: "AI - Data Scientist Version 3.0 (NASSCOM)",
    skills: ["AI foundations", "ML workflows", "Model evaluation"],
    link: "certificates/nasscom_ai_data_scientist_v3.pdf",
  },
  {
    title: "Data Analytics with Python (NPTEL)",
    skills: ["Pandas analysis", "Visualization", "Statistics"],
    link: "certificates/Nptel_data_analytics_with_python.pdf",
  },
  {
    title: "AWS Academy Graduate (AWS Academy Cloud Foundations)",
    skills: ["Cloud fundamentals", "AWS core services", "Billing & security"],
    link: "certificates/aws_cloud_foundations.pdf",
  },
  {
    title: "Data Fundamentals (Bosscoder Academy)",
    skills: ["SQL modeling", "Analytics foundations", "Data storytelling"],
    link: "certificates/Bosscoder_Data_Fundamentals.pdf",
  },
  {
    title: "Data Science Internship Completion (1stop.ai)",
    skills: ["Model training", "Feature engineering", "Evaluation"],
    link: "certificates/datascience_Internship_certificate.pdf",
  },
  {
    title: "Machine Learning Trainee (Indian Servers)",
    skills: ["Supervised learning", "Model tuning", "Deployment"],
    link: "certificates/Indianservers_ml.pdf",
  },
];

export const ABOUT_TEXT = `Hi, I'm Hemanth Chowdary Kavula.
Computer Science graduate student with hands-on experience in machine learning, statistical analysis, and business intelligence. Proven ability to build predictive models with 95%+ accuracy, analyze 50,000+ data records using Python and SQL, and deliver data-driven insights through Power BI and Tableau visualizations.
Skilled in ETL pipelines, feature engineering, and cross-functional collaboration to drive KPI improvements. Seeking Data Scientist/Data Analyst roles to leverage advanced analytics, machine learning, and data storytelling to solve complex business problems.`;
