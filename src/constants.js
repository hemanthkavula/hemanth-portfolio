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
    title: "Programming Languages",
    icon: "Code2",
    items: ["Python (Pandas, NumPy, PySpark)", "SQL", "Scala", "Bash"],
    proficiency: 92,
  },
  {
    title: "Big Data & Processing",
    icon: "ChartPie",
    items: [
      "Apache Spark",
      "PySpark",
      "Hadoop",
      "Hive",
      "Apache Kafka",
      "Databricks",
      "Delta Lake",
    ],
    proficiency: 91,
  },
  {
    title: "Databases",
    icon: "Brain",
    items: [
      "MySQL",
      "PostgreSQL",
      "SQL Server",
      "Oracle",
      "Snowflake",
      "Redshift",
      "MongoDB",
      "DynamoDB",
    ],
    proficiency: 90,
  },
  {
    title: "Cloud Platforms",
    icon: "Cloud",
    items: [
      "AWS (S3, Redshift, Glue, Athena, Lambda, EMR, Step Functions)",
      "Azure (Data Factory, Synapse Analytics, ADLS Gen2, Blob Storage)",
    ],
    proficiency: 90,
  },
  {
    title: "ETL / Data Integration",
    icon: "Layout",
    items: [
      "AWS Glue",
      "Azure Data Factory",
      "Informatica",
      "Talend",
      "dbt",
      "SSIS",
    ],
    proficiency: 89,
  },
  {
    title: "Data Orchestration",
    icon: "Sparkles",
    items: ["Apache Airflow", "AWS Step Functions", "Azure Data Factory Triggers"],
    proficiency: 88,
  },
  {
    title: "Data Modeling",
    icon: "ChartPie",
    items: [
      "Star Schema",
      "Snowflake Schema",
      "Dimensional Modeling",
      "Data Vault",
    ],
    proficiency: 90,
  },
  {
    title: "Data Visualization",
    icon: "Layout",
    items: [
      "Tableau",
      "Power BI",
      "Looker",
      "Matplotlib",
      "Seaborn",
    ],
    proficiency: 84,
  },
  {
    title: "DevOps & CI/CD",
    icon: "Sparkles",
    items: ["Docker", "Git", "GitHub", "GitHub Actions", "Jenkins", "Terraform"],
    proficiency: 87,
  },
  {
    title: "Version Control & Collaboration",
    icon: "Code2",
    items: ["Git", "GitHub", "JIRA", "Confluence", "Microsoft Teams"],
    proficiency: 86,
  },
  {
    title: "Methodologies",
    icon: "Cloud",
    items: ["Agile", "Scrum", "Data Governance", "SDLC", "CI/CD"],
    proficiency: 88,
  },
];

export const PROJECTS = [
  {
    hidden: false,
    title: "E-commerce CLV & Churn Analysis",
    impactLine: "Customer lifetime value and churn analysis for e-commerce decision-making.",
    description:
      "End-to-end e-commerce customer analytics project focused on CLV estimation and churn insights.",
    impact: [
      "Analyzed customer behavior to estimate lifetime value (CLV) and churn risk",
      "Generated business-focused insights to support retention and marketing strategy",
      "Built an exploratory analytics workflow for customer-level performance trends",
      "Packaged the analysis in a shareable GitHub project with reproducible notebooks",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    links: {
      github:
        "https://github.com/hemanthkavula/E-commerce-Customer-Lifetime-Value-CLV-Churn-Analysis",
    },
  },
  {
    hidden: false,
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
    hidden: false,
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
    hidden: true,
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
      "Designing and developing scalable ETL/ELT pipelines using Python, PySpark, and AWS Glue to ingest, transform, and load large volumes of data into a centralized cloud data warehouse.",
      "Building and maintaining real-time data streaming pipelines using Apache Kafka and Spark Streaming to process high-volume data for analytics and reporting.",
      "Developing and optimizing complex SQL queries and data models in Snowflake and Redshift to support business intelligence and downstream analytics use cases.",
      "Orchestrating and scheduling end-to-end data pipeline workflows using Apache Airflow, implementing job dependencies, retry logic, and production monitoring.",
      "Implemented CI/CD pipelines using GitHub Actions and Jenkins to automate build, testing, and deployment of Spark jobs, Airflow DAGs, and AWS Glue scripts, reducing manual release efforts by 60% and improving deployment reliability across production environments.",
    ],
  },
  {
    period: "Jan 2020 - Dec 2023",
    role: "Data Engineer",
    company: "Fiserv",
    location: "Bangalore, India",
    highlights: [
      "Developed and maintained scalable ETL/ELT pipelines using Python, SQL, and Azure Data Factory to ingest and transform enterprise data into cloud-based data lake and warehouse platforms.",
      "Designed dimensional data models (Star Schema) in Azure Synapse Analytics, optimizing fact and dimension tables for analytics and reporting workloads.",
      "Developed distributed data transformation jobs using PySpark on Azure Databricks to process large-scale datasets for cleansing, aggregation, and downstream analytics use cases.",
      "Designed and implemented CI/CD workflows using Azure DevOps to automate deployment of data pipelines and transformation artifacts across multiple environments.",
      "Containerized PySpark workloads using Docker and integrated automated testing into deployment pipelines, enhancing code quality and reducing production defects in data transformation jobs.",
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
Senior Data Engineer with 5+ years of experience building enterprise-grade data platforms across Financial Services and Retail industries. Expertise in distributed data processing (Spark, Kafka), cloud-native architecture (AWS, Azure), and scalable ETL/ELT frameworks supporting high-volume transactional and analytical workloads.

Demonstrated success in reducing pipeline latency, improving data reliability and delivering analytics-ready datasets that power regulatory reporting, risk monitoring and executive decision-making. Strong background in dimensional data modeling, Data Lakehouse architecture (Delta Lake), and production-grade orchestration (Airflow) and cloud-native workflow services. Experience in implementing data governance and data quality frameworks to ensure accuracy, compliance and operational excellence in mission-critical environments.`;
