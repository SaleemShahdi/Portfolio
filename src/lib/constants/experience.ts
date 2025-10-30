import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "Activepieces",
    positions: [
      {
        title: "Full Stack Software Engineer",
        year: "05.2025 - present",
        description: `
- ♦ Lemme build something cool first... then I'll tell you what I did 😉.
            `,
        skills: [
          "TypeScript",
          "React",
          "Zustand",
          "Tailwind CSS",
          "Node.js",
          "Fastify",
          "BullMQ",
          "Redis",
          "PostgreSQL",
          "Docker",
          "Playwright",
          "Vite",
          "Nx",
        ]
      },
    ],
  },
  {
    company: "BIGmama Technology",
    positions: [
      {
        title: "Fullstack Engineer",
        year: "04.2024 - 04.2025",
        description: `
- ♦ Developed **end-to-end features** across the stack using **Next.js,  Zustand, React Query, FastAPI and Mongodb**.
- ♦ Conducted **code reviews**, mentored junior developers, and provided guidance on best practices.
- ♦ Collaborated with **UI/UX designers** to translate **Figma designs** into **accessible, pixel-perfect, and responsive UIs**.
- ♦ Worked closely with **DevOps engineers** to deploy backend infrastructure on **Kubernetes**.
- ♦ Partnered with **AI engineers** to integrate **OpenAI models (text completion + embeddings)** and built a **RAG system using Elasticsearch**.
            `,
        skills: [
          "Next.js",
          "React",
          "ShadCN UI",
          "Zustand",
          "React Query",
          "Python",
          "FastAPI",
          "MongoDB",
          "Docker",
          "Redis",
          "Kubernetes",
          "S3",
          "Elasticsearch",
          "ARQ",
        ],
      },
      {
        title: "Backend Engineer",
        year: "01.2024 - 04.2024",
        description: `
- ♦ Implemented **backend functionalities**, designed **database models**, and optimized APIs using **FastAPI, Python, and MongoDB**.
- ♦ Developed and maintained a **background worker system** using **ARQ and Redis**.
- ♦ Brainstormed and debugged **new features and functionalities** with the engineering team.
- ♦ Refactored and cleaned code, implementing **better coding patterns** and enforcing **formatting & linting rules** using **Ruff**.
- ♦ Deployed backend services using **Docker & Docker Compose** and improved **CI/CD pipelines** with **GitHub Actions**.
            `,
        skills: [
          "Python",
          "FastAPI",
          "MongoDB",
          "Docker",
          "Redis",
          "ARQ",
          "GoLang",
          "Next.js",
          "React",
        ],
      },
    ],
  },

  {
    company: "Freelance | Upwork | Locally",
    positions: [
      {
        title: "MERN Stack Developer",
        year: "01.2023 - 01.2024",
        description: `
- ♦ Developed **landing pages and business websites** for local businesses and personal brands.
- ♦ Built **full-stack MERN applications** for university students, helping them launch **MVPs** for grading projects and startups.
- ♦ Assisted **university professors** in creating **demo applications** to serve as case studies for students.
            `,
        skills: [
          "React",
          "Express.js",
          "MongoDB",
          "Node.js",
          "Docker",
          "Tailwind CSS",
        ],
      },
    ],
  },

  {
    company: "Fennec Digital",
    positions: [
      {
        title: "Frontend Developer Intern",
        year: "01.2023 - 03.2023",
        description: `
- ♦ Redesigned and developed a **conceptual landing page** for the company using **Next.js, React, and Tailwind CSS**.
- ♦ Collaborated with **full-stack engineers**, gaining insights into **best practices** in a professional development environment.
- ♦ Received feedback from **UI/UX and graphic designers** to refine and enhance the visual and user experience of my designs.
            `,
        skills: ["Next.js", "React", "Tailwind CSS", "Figma", "Node.js"],
      },
    ],
  },

  {
    company: "Comcast",
    positions: [
      {
        title: "Contractor",
        year: "08.2022 - 01.2023",
        description: `
- ♦ Familiarized myself with CI/CD and gained proficiency in Concourse in order to contribute to PULSE locker team.
- ♦ Troubleshooted issue with Docker on local Macbook Pro and resolved by running pipelines directly on Comcast Concourse server.
- ♦ Mastered the fly CLI (command line interface) through specific use cases and examples including set-pipeline, unpause-pipeline, watch, trigger-job, and execute.
- ♦ Created SSH key on local Macbook Pro and utilized in github gist in order to implement making changes to github resource in real-time through Concourse.
- ♦ Configured .yml files to implement different functionalities including triggering jobs with resources, using resource inputs in job tasks, passing task outputs to task inputs, publishing outputs and including parameters.
            `,
        skills: [
          "CI/CD",
          "Concourse",
          "Docker",
          "fly CLI",
          "SSH",
          "GitHub",
          "YAML"
        ],
      },
    ],
  },

  {
    company: "Revature",
    positions: [
      {
        title: "Contractor",
        year: "06.2021 - 03.2022",
        // No top-level description or skills
        subPositions: [
          {
            title: "Client Experience",
            year: "", // Year is in parent
            description: `
- ♦ Assisted Fannie Mae in moving code written locally to AWS to take advantage of high performance computing and run PySpark queries in an optimal fashion.
- ♦ Acquainted myself with AWS and it's practical use and applications to contribute to the project and satisfy company requirements.
- ♦ Developed a Lambda function that would be called through an API and validate user data before triggering step functions.
- ♦ Incorporated DynamoDB functionality into the Lambda function and constructed tables with appropriate partition and sort keys.
            `,
            skills: [
              "AWS",
              "AWS Lambda",
              "AWS Step Functions",
              "DynamoDB",
              "PySpark",
              "Python"
            ],
          },
          {
            title: "Training",
            year: "", // Year is in parent
            description: `
- ♦ Completed projects using Scala, Hadoop, Spark, SQL and other related big data processing tools in order to be prepared for big data contracting roles.
- ♦ Wrote and compiled a program in Scala that solves the quadratic formula in order to enhance Scala programming skills and reinforce concepts.
- ♦ Utilized HDFS and HIVE commands to analyze sample coffee shop data in order to gain experience using queries and answer relevant questions.
  - Loaded data from CSV files into tables using SparkSQL Hive commands
  - Joined multiple tables together using SparkSQL
  - Utilized aggregate functions in SparkSQL queries
  - Created custom views for joined tables using SparkSQL
  - Aliased queries and components of tables to increase comprehension and readability
  - Filtered records using the WHERE clause in SparkSQL
  - Used DENSE_RANK() function to select top results from tables
  - Used GROUP BY clause to group the result set and ORDER BY clause to sort the result set
- ♦ Pulled a COVID dataset from Johns Hopkins and with 3 other programmers used Spark to analyze COVID trends
  - Manipulated the data in Microsoft Excel for exploratory analysis
  - Converted the data loaded (from time-series CSV files) from dataframes to RDD back to a differently formatted dataframe to allow for the use of SparkSQL queries and other dataframe methods
  - Converted the data to a format of high potential
  - Graphed results in Microsoft Excel
  - Selected the top 10 countries in terms of total Covid-19 cases using SparkSQL
  - Selected the least 10 countries in terms of total Covid-19 cases using SparkSQL
  - Though the methodology mentioned in points 1-5 was used to obtain results that were presented in our presentations, the Project Repo referenced in the URL does not contain an implementation of the methodology due to timeline constraints.
- ♦ Capitalized on AWS big data processing resources to streamline the investigation of tech job posting trends since the start of COVID
  - Delegated tasks among 20 other programmers
  - Worked with the Amazon Common Crawl Columnar Index
    - Loaded parquet file into Apache Spark using dataframe
    - Explored the common crawl structure
      - Derived schema from imported parquet file using the inbuilt dataframe.schema method
      - Used the inbuilt dataframe.columns method to get list of all columns in table
      - Discovered there was an inconsistency in the schema loaded from the parquet file and the actual schema of the table. Finding the actual schema on an official website and using that as an input parameter when loading the parquet file to load correct schema with correct number of columns.
  - Adjusted dependencies in Spark to allow for Amazon S3 functionality in Spark-Scala command line terminal
- ♦ Adjusted configuration parameters and created robust filtering queries to allow Spark jobs to complete on Amazon EMR within a reasonable amount of time.
            `,
            skills: [
              "Scala",
              "Hadoop",
              "Spark",
              "SQL",
              "Big Data",
              "HDFS",
              "HIVE",
              "SparkSQL",
              "RDD",
              "Amazon EMR",
              "Amazon S3",
              "Parquet",
              "Data Analysis"
            ],
          }
        ]
      },
    ],
  },

  {
    company: "Education",
    positions: [
      {
        title: "Web Development & Infographics | University of Boumerdes",
        year: "09.2022 - 07.2025",
        description: `
- ♦ Built a strong foundation in **software engineering**, focusing on **web development** and **UI/UX principles**.
- ♦ Gained hands-on experience with **C/C++ and Linux**, enhancing problem-solving and system-level programming skills.
- ♦ Developed expertise in **relational databases** and **networking**, applying concepts to real-world applications.
- ♦ Strengthened **communication and teamwork skills** through group projects, presentations, and technical discussions.
            `,
        skills: [
          "C/C++",
          "Linux",
          "UI/UX Foundation",
          "Marketing",
          "WordPress",
          "Networking",
          "Algorithms",
          "Relational Databases",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
    ],
  },
];