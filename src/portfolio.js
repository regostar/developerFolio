/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rego",
  title: "Hi all, I'm Renugopal",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 specializing in LLM, AI powered web apps."
  ),
  resumeLink:
    "https://drive.google.com/file/d/178n-KJ9WN8zgd08mNsjqkX1AYG8XP6Hr/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/regostar",
  linkedin: "https://www.linkedin.com/in/renugopal-siva/",
  gmail: "renugopal.sp@gmail.com",
  medium: "https://medium.com/@renugopal17-siva",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I Solve Problems in the AI domain!",
  skills: [
    emoji("⚡ Complex LLM Integrations using Langchain, OpenAI, Gemini, llama and more."),
    emoji(
      "⚡ Develop extensive web applications using Django, FastAPI, Flask, Node JS, React, Javascript, and more."
    ),
    emoji(
      "⚡ Machine Learning Models and AI Applications using Pytorch, Tensorflow, Keras, Scikit-Learn, and more."
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of North Texas",
      logo: require("./assets/images/unt.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "Aug 2023 - May 2025",
      desc: "Participated in AI research and published 1 paper.",
      descBullets: [
        "Machine Learning, Computer Security, Big Data and Data Science"
      ]
    },
    {
      schoolName: "Visvesvaraya Technological University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "July 2014 - July 2018",
      desc: "Ranked top 10% in the program. ",
      descBullets: [
        "Took courses about Software Engineering, Web Security, Operating Systems, ..."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI Engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer / Tech Lead",
      company: "Impact Analytics",
      companylogo: require("./assets/images/ia.jpg"),
      date: "Aug 2021 – Aug 2023",
      desc: "Spearheaded the development of Multi-Million Dollar worth AI-driven analytics tools using Python, FastAPI, Tensorflow, and JavaScript.",
      descBullets: [
        "Generated $ 2 Million in Revenue by developing a completely new product from scratch.",
        "The product success won a place in Forbes 100 most Innovative Companies in USA."
      ]
    },
    {
      role: "Senior Software Developer",
      company: "Zelthy",
      companylogo: require("./assets/images/zelthy.jpg"),
      date: "Nov 2020 – Aug 2021",
      desc: "Engineered an AI-driven patient program management application for top pharmaceutical clients such as Novartis, and AstraZeneca.",

      descBullets: [
        "Integrated the ELK stack (Elasticsearch, Logstash, Kibana) and reduced issue identification time to under a minute.",
        "Optimized ORM queries which reduced the system’s response time by 50%"
      ]
    },

    {
      role: "Full Stack Developer",
      company: "Alien Technology Transfer",
      companylogo: require("./assets/images/alien.png"),
      date: "July 2018 to Nov 2020",
      desc: "Spearheaded the development of 'Typewiser', a project management and grant application tool enhanced with AI functionalities. Utilized Python, JavaScript, and Django to integrate machine learning algorithms that automated text analysis and proposal customization based on historical data patterns.",
      descBullets: [
        "Helped  clients secure over €10 million in public funding",
        "A prototype into a market-ready AI-powered tool within 6 months."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "My Learning never stops after work",
  projects: [
    {
      image: require("./assets/images/eventique.png"),
      projectName: "Eventique",
      projectDesc: "AI assisted Event Management Suite",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/regostar/eventique"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/fidus.jpeg"),
    //   projectName: "Fiduswriter",
    //   projectDesc:
    //     "Fidus Writer is an online collaborative editor especially made for academics who need to use citations and/or formulas.",
    //   footerLink: [
    //     {
    //       name: "Fiduswriter",
    //       url: "https://github.com/regostar/fiduswriter"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    {
      image: require("./assets/images/clairvoyant.png"),
      projectName: "Clairvoyant",
      projectDesc:
        "Streamlit-based web application for viewing and forecasting stock prices along with a chatbot. It allows users to visualize historical stock data and make future predictions using Facebook's Prophet model.",
      footerLink: [
        {
          name: "Clairvoyant",
          url: "https://github.com/regostar/streamlit_stocks"
        }
        //  you can add extra buttons here.
      ]
    },
    
    {
      image: require("./assets/images/eda_w.png"),
      projectName: "Exploratory Data Analysis",
      projectDesc: "US Accidents Data",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/regostar/us_accidents_eda"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Scientific Computing and Python for Data Science",
      subtitle: "World Quant University",
      image: require("./assets/images/wqu.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://wqu.thedataincubator.com/certificate/6180578369994752"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Prompt Engineering for ChatGPT",
      subtitle: "Vanderbilt University",
      image: require("./assets/images/prompt.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://www.coursera.org/account/accomplishments/records/GASN4VSXLJ3A"
        }
      ]
    },

    {
      title: "LLM Skills",
      subtitle: "Datacamp",
      image: require("./assets/images/llm.png"),
      imageAlt: "LLM",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/0fa084e90a3d9b2b7eab4fd4bd148cc79d8f345f"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://renugopal17-siva.medium.com/dunder-magic-variables-b999e76f6200",
      title: "Dunder Magic Variables",
      description: "Exploring interview questions on Dunder Variables in Python"
    },
    {
      url: "https://renugopal17-siva.medium.com/iot-mqtt-payload-encryption-at-the-application-layer-58f8957d4b5f",
      title: "IOT-MQTT Payload encryption at the Application Layer",
      description: "MQTT Payload encryption for IOT applications"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "renugopal.sp@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
