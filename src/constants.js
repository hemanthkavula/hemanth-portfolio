export const PROFILE = {
  name: "Hemanth Kavula",
  title: "Senior Data Engineer",
  subtitle: "5+ years building scalable data pipelines and lakehouse solutions",
  email: "Kavula.hemanth@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/in/hemanthkavula/",
    github: "https://github.com/hemanthkavula",
  },
  location: "Pitman, NJ",
  phone: "856-524-6050",
  resumeUrl: "/resume.pdf",
};

export const NAV_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  {
    title: "Programming & Querying",
    icon: "Code2",
    items: ["Python", "SQL", "Spark SQL"],
    proficiency: 92,
  },
  {
    title: "Data Engineering & Modeling",
    icon: "ChartPie",
    items: [
      "ETL Development",
      "ETL Pipelines",
      "Data Integration",
      "Data Modeling",
      "Data Governance",
      "Data Warehousing",
      "Lakehouse Architecture",
    ],
    proficiency: 90,
  },
  {
    title: "Big Data & Streaming",
    icon: "Brain",
    items: [
      "Apache Spark",
      "PySpark",
      "Distributed Data Processing",
      "Batch Pipelines",
      "Streaming Pipelines",
      "Kafka",
      "Event Hubs",
      "Real-Time Processing",
    ],
    proficiency: 91,
  },
  {
    title: "Cloud Platforms",
    icon: "Cloud",
    items: ["Microsoft Azure", "AWS", "GCP"],
    proficiency: 90,
  },
  {
    title: "Orchestration & Warehousing",
    icon: "Layout",
    items: [
      "Azure Data Factory",
      "Apache Airflow",
      "dbt",
      "AWS Glue",
      "Snowflake",
      "Azure Synapse Analytics",
      "Dimensional Modeling",
      "Star Schema",
    ],
    proficiency: 89,
  },
  {
    title: "Data Ops & Formats",
    icon: "Sparkles",
    items: [
      "CI/CD",
      "Terraform",
      "Docker",
      "Monitoring & Logging",
      "SQL Server",
      "PostgreSQL",
      "Oracle",
      "MySQL",
      "Parquet",
      "JSON",
      "CSV",
      "Delta",
    ],
    proficiency: 88,
  },
];

export const PROJECTS = [
  {
    title: "Mental Health Reddit Analysis",
    impactLine: "Classified crisis signals and surfaced mental health themes.",
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
      github: "https://github.com/hemanthkavula?tab=repositories/mental-health-reddit-analysis",
    },
  },
  {
    title: "Pizza Sales Data Analysis",
    impactLine: "SQL-driven insights that improved staffing and revenue.",
    description: "Advanced SQL analysis for sales insights and KPI reporting.",
    impact: [
      "Analyzed 10,000+ transactions across 4 normalized tables",
      "CTEs, window functions, and joins for KPI reporting",
      "Optimized staffing allocation by 20% and increased revenue by $50K",
      "Engineered 14 queries for CLV, product performance, and trends",
    ],
    tech: ["MySQL", "SQL", "Database Design"],
    links: {
      github: "https://github.com/hemanthkavula?tab=repositories/pizza-sales-sql-analysis",
    },
  },
  {
    title: "Automated Facial Recognition Attendance",
    impactLine: "Real-time attendance automation with high recognition accuracy.",
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
        "https://github.com/hemanthkavula?tab=repositories/Automated-Facial-Recognition-based-Attendance-System",
    },
  },
];

export const EXPERIENCE = [
  {
    period: "Jan 2025 - Present",
    role: "Senior Data Engineer",
    company: "Fidelity Investments",
    location: "Jersey City, NJ",
    highlights: [
      "Build scalable lakehouse data pipelines using Python, Spark, Azure data services, and AWS storage platforms to process large enterprise datasets.",
      "Develop automated ETL and data integration workflows supporting ingestion of structured, semi-structured, and streaming data sources.",
      "Create dimensional data models and curated data layers supporting analytics and reporting use cases.",
      "Implement real-time streaming pipelines enabling near real-time analytics and operational reporting.",
      "Optimize SQL queries and Spark transformations improving performance and processing efficiency.",
      "Maintain data governance and data quality practices including schema validation, monitoring, and secure access controls.",
      "Design lakehouse architecture and data warehousing solutions that support enterprise analytics workloads.",
      "Develop analytics engineering layers and curated datasets to enable reliable reporting and downstream consumption.",
      "Collaborate with analytics teams and engineering stakeholders to deliver reliable analytics-ready datasets.",
      "Support CI/CD processes and automate deployment of data workflows across Azure and AWS environments.",
      "Participate in Agile development practices including sprint planning and technical discussions.",
      "Troubleshoot production data pipelines and improve workflow stability through monitoring and optimization.",
    ],
  },
  {
    period: "Jan 2020 - Dec 2023",
    role: "Data Engineer",
    company: "Fiserv",
    location: "Bangalore, India",
    highlights: [
      "Develop AWS-based ETL pipelines using Python, SQL, and Spark to process high-volume enterprise datasets.",
      "Build batch and streaming ingestion workflows leveraging AWS cloud storage and event-driven processing.",
      "Create dimensional data models improving reporting performance and analytics usability.",
      "Integrate APIs, relational databases, flat files, and cloud storage platforms enabling seamless data integration across systems.",
      "Optimize database queries and transformation logic improving pipeline efficiency and performance.",
      "Implement CI/CD deployment workflows ensuring consistent delivery of data solutions across environments.",
      "Migrate legacy ETL processes into orchestrated pipelines improving scalability and maintainability.",
      "Apply data governance practices and schema validation to ensure trustworthy analytics outputs.",
      "Deliver data warehousing-ready models using dimensional modeling and star schema techniques.",
      "Collaborate with analytics teams to deliver production-ready datasets aligned with business reporting needs.",
      "Maintain monitoring and validation processes ensuring data governance and operational reliability.",
      "Support performance tuning and debugging of large-scale data workflows.",
    ],
  },
];

export const EDUCATION = [
  {
    period: "Jan 2024 - Dec 2025",
    role: "Master of Science in Computer Science - Rowan University",
    details: "Glassboro, NJ",
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

export const ABOUT_TEXT = `Hi, I'm Hemanth Kavula.
Senior Data Engineer with 5+ years of experience building scalable data pipelines and modern lakehouse data solutions across multi-cloud environments. Strong expertise in Python, SQL, Spark, and distributed data processing with hands-on experience in ETL development, data integration, data governance, analytics engineering, and real-time streaming pipelines.

Known for delivering reliable, high-performance data workflows that support enterprise analytics, reporting, and large-scale data operations.`;
