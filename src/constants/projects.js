const MY_PROJECTS = [
  {
    name: "Resume builder",
    description: [
      {
        title: "Problem Definition",
        description:
          "Creating a resume is a process people struggle with. Creating a suitable template and giving relevant details is often found to be hard.",
      },
      // This project tested my ability to write maintainable code for a large project.
      // "I decided on a serverless architecture so the website can scale easily and because I wanted to try it.",
      {
        title: "My Solution",
        description:
          "An online resume builder could help people with a premade template and tips based on their current resume.",
      },
    ],
    features: [
      "Account creation, authentication, confirmation",
      "User-friendly interface to create a resume",
      "Premade templates",
      "Resume tips based on current resume (in development)",
      "PDF Export",
      "Responsive website and dashboard",
    ],
    technologies: [
      "Front-end: React, Next.js, Sass",
      "Back-end: serverless API routes",
      "Database: FaunaDB, GraphQL",
      "Authentication: JWT access tokens stored in cookies",
    ],
    link: "https://resume-ivory.vercel.app/",
    sourceLink: "https://github.com/CeesJol/resume",
    img: "resume.png",
  },
  {
    name: "ikwilroeien.nl",
    description: [
      {
        title: "Problem Definition",
        description:
          "My rowing association, Proteus-Eretes, has an introduction site for potential new members. It had to be updated to be more informative.",
      },
      {
        title: "Our Solution",
        description:
          "Created a responsive website with much content in a committee with other programmers and designers.",
      },
    ],
    technologies: ["Vue", "Nuxt.js", "Vuetify"],
    link: "https://ikwilroeien.nl",
    img: "proteus.png",
  },
];

export default MY_PROJECTS;
