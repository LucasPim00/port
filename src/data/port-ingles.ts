// src/data/port-ingles.ts

const portIngles = {
  header: {
    about: "About Me",
    education: "Education",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  about: {
    title: "About Me",
    content: "I'm a passionate fullstack developer with a love for technology and continuous learning...",
  },
  education: {
    title: "Education",
    items: [
      {
        title: "Bachelor in Computer Science",
        school: "XYZ University",
        year: "2020 - 2024",
      },
    ],
  },
  skills: {
    title: "Skills",
    list: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  experience: {
    title: "Experience",
    content: "Currently seeking my first professional opportunity in web development...",
  },
  projects: {
    frontTitle: "Front-end Projects",
    backTitle: "Back-end Projects",
    fullTitle: "FullStack Projects",
    cards: [
      {
        id: 1,
        title: "Project Organizer",
        description: "Tool to manage and organize projects online with responsive layout.",
        image: "/projetos/geralFULL.jpg",
        techs: ["Next.js", "React", "Tailwind"],
        link: "https://organizador-de-projetos.vercel.app",
        code: "https://github.com/LucasPim00/Organizador-de-Projetos",
      },
      // Adicione mais projetos aqui
    ],
  },
  contact: {
    title: "Contact",
    message: "Let’s connect and build amazing things together!",
  },
};

export default portIngles;