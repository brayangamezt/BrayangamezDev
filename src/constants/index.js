import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    te,
    engrane,
    federal,
    lionbridge,
    python,
    weather2,
    appGastos,
    games,
    taskGpt
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Test Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Front end Developer",
      company_name: "Engrane digital",
      icon: engrane,
      iconBg: "#383E56",
      date: "May 2022 - Current",
      points: [
        "Developing and maintenance to different front end interfaces using angular framework and react",
        "Consume API'S rest services",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Manufacturing technician",
      company_name: "TE Connectivity",
      icon: te,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Ensure different machines get preventive maintenance",
        "Fix different electronic components",
        "Device programming",
      ],
    },
    {
      title: "Manufacturing engineer",
      company_name: "Federal electronics",
      icon: federal,
      iconBg: "#383E56",
      date: "Mar 2019 - Apr 2020",
      points: [
        "Provided engineering support for the manufacture of wiring harnesses",
        "Implemented engineering changes and documentation creation/updating",
        "Look for differents corrective actions in production lines",
      ],
    },
    {
      title: "Internet assessor",
      company_name: "Lionbridge",
      icon: lionbridge,
      iconBg: "#E6DEDD",
      date: "Jul 2017 - Jan 2022",
      points: [
        "Categorized search engine results according to predetermined guidelines provided by the client.",
        "Help to predetermined some voice query",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Games",
      description:
        "In this website you can find some basics games to have fun with friend or yourself. Here there are games like sudoku, tik tak tou, memorama.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: games,
      source_code_link: "https://github.com/brayangamezt/controls-games",
    },
    {
      name: "Expense application",
      description:
        "In this website you can sign in with your email account and start saving your month expense to keep a better record of these.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Scss",
          color: "pink-text-gradient",
        },
      ],
      image: appGastos,
      source_code_link: "https://github.com/brayangamezt/App-expense",
    },
    {
      name: "Weather App",
      description:
        "In this site you can find any city, country or town on the world and get his current weather you just have to write it in the input.",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeather",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: weather2,
      source_code_link: "https://github.com/brayangamezt/weather",
    },
    {
      name: "TasksGPT",
      description:
        "In this website you can do different kind of task like create audios with a text, creat text with audios, create images, ortography etc",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Nest",
          color: "green-text-gradient",
        },
        {
          name: "OpenAi-API",
          color: "pink-text-gradient",
        },
      ],
      image: taskGpt,
      source_code_link: "https://angular-gpt-e0e34.web.app/orthography",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };