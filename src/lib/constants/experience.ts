import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
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
    company: "Reno Subsystems",
    positions: [
      {
        title: "Software Development Intern",
        year: "05.2019 - 09.2019",
        description: `
Reno Sub-Systems, Inc. (Reno) is a developer of high performance radio frequency (RF) matching networks for leading-edge nanoscale semiconductor manufacturing. Reno distributes its patented Electronic Variable Capacitor (EVCTM) technology to customers and attracts investors like Samsung and Intel. My purpose as an intern was to develop a piece of software that would streamline the customer’s use of one of Reno’s products. Before the software was written, customers would interact with the unit using commands through Tera Term. The software eliminates this need and includes robust features that benefit the customer, like real-time data plotting and tabular parameter setup.

- ♦ Developed a Graphical User Interface (GUI) for Windows that interacts with an essential production unit
- ♦ Learned and implemented Python in order to create the GUI, and developed a successful product with no prior experience in Python
- ♦ Researched and implemented various coding techniques such as serial bus communication and multithreading
- ♦ Incorporated 5 pages into the GUI: a “Main” page that receives data from the unit and plots on Smith Charts in real time, a “Configure Communications” page with dropdown menus to adjust communication settings between the software and unit, a “Status and Plot” page that plots data from the unit on a line chart in real-time, a “Setup” page that allows the user to efficiently change parameters of the unit, and a “Software Update” page that was intended to install new versions of the program right from the program itself.
            `,
        skills: [
          "Python",
          "GUI Development",
          "Serial Bus Communication",
          "Multithreading",
          "Data Visualization",
          "Smith Charts",
          "UI/UX Design",
          "Tera Term"
        ],
      },
    ],
  },

  // --- NEW ENTRY ADDED HERE ---
  {
    company: "Rutgers University",
    positions: [
      {
        title: "Research Assistant",
        year: "05.2018 - 08.2018",
        description: `
- ♦ Assisted graduate student in computer science department with research concerning the development of the introductory computer science curriculum.
- ♦ Manually extracted and analyzed students’ code to find patterns and design accurate, efficient grading algorithms.
- ♦ Developed a curriculum map, now used to pinpoint student progress and point to necessary concepts students lack when they encounter errors.
- ♦ Enhanced the auto grading tool, which now robustly grades students’ assignments and provides accurate hints and feedback given specific programming errors.
        `,
        skills: [
          "Research",
          "Data Analysis",
          "Algorithm Design",
          "Curriculum Development",
          "Autograding Systems",
          "Debugging"
        ]
      },
    ],
  },
  // --- END OF NEW ENTRY ---

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