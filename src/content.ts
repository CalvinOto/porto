// EDIT THIS FILE. All text on the site comes from here.
//
// The projects below were written from the READMEs of your GitHub repos.
// Your email, GitHub and LinkedIn links are filled in.

export const profile = {
  name: "Calvin Octo Fernando",
  firstName: "Calvin",
  shortName: "calvin.dev",
  role: "Computer Science student",
  headlineStart: "I turn ideas into",
  headlineAccent: "software that works",
  intro:
    "I work on the screens people use and the services behind them, and I keep going back to make each project a little better.",
  email: "calvinocto10@gmail.com",
  updated: "October 2026",
  learning: [
    "Software Metrics and Quality Assurance",
    "Mobile Technology Solution",
    "Compilation Techniques",
    "Operating System",
    "Mobile Programming",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/CalvinOto" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/calvinocto" },
  ],
};

export type Project = {
  kind: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  repo?: string;
  demo?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    kind: "Mobile app and API",
    title: "StudentOS",
    description:
      "A daily-life companion app for students that keeps class schedules, tasks and monthly expenses in one place.",
    highlight:
      "Recurring schedules where a single class can be skipped, tasks with priorities and due dates, expense tracking in Rupiah with a monthly budget, and JWT login.",
    tags: ["Flutter", "NestJS", "TypeORM", "SQLite"],
    repo: "https://github.com/CalvinOto/studentos",
    images: ["/screenshots/studentos/studentos_login.png", "/screenshots/studentos/studentos_register.png", "/screenshots/studentos/studentos_home.png", "/screenshots/studentos/studentos_schedule.png",
      "/screenshots/studentos/studentos_task.png", "/screenshots/studentos/studentos_finance.png",
      "/screenshots/studentos/studentos_profile.png", "/screenshots/studentos/studentos_dark.png"
    ], 
  },
  {
    kind: "Microservices backend",
    title: "WSpeedrun",
    description:
      "A backend for speedrunning leaderboards, split into separate auth, game and run services. Built for a Software Architecture lab.",
    highlight:
      "Three independent services that share one MySQL database through Prisma, with JWT authentication and Swagger API documentation.",
    tags: ["Node.js", "Prisma", "MySQL", "Swagger"],
    repo: "https://github.com/CalvinOto/SoftwareArchitecture_lab",
    images: ["/screenshots/wspeedrun/wspeedrun1.png", "/screenshots/wspeedrun/wspeedrun2.png", "/screenshots/wspeedrun/wspeedrun3.png"
    ], 
  },
  {
    kind: "Mobile app and API",
    title: "Retail App",
    description:
      "A game-themed shop app where users browse and buy items and admins manage the catalog. Built for a Mobile Hybrid lab course.",
    highlight:
      "Separate user and admin roles, search and category filters, live stock checks, image upload and Google sign-in.",
    tags: ["Flutter", "Express.js", "MySQL"],
    repo: "https://github.com/CalvinOto/MobileHybrid_lab",
    images: ["/screenshots/retail-app/1.png", "/screenshots/retail-app/2.png", "/screenshots/retail-app/3.png",
      "/screenshots/retail-app/4.png", "/screenshots/retail-app/5.png", "/screenshots/retail-app/6.png"
    ], 
  },
];

export const education = {
  school: "BINUS University",
  campus: "Alam Sutera campus",
  program: "Computer Science",
  semester: "Semester 5",
  gpaLabel: "Cumulative GPA",
  gpa: "3.70",
  gpaScale: "/ 4.00",
};

// The tools your three projects use. Add or remove any.
//
// "icon" is the path of the logo on Devicon (https://devicon.dev).
// Format: "folder/folder-style". Browse devicon.dev to find the name of
// any other tool, then add it here. Example: "docker/docker-original".
export type StackItem = { name: string; icon: string };

export const stack: { group: string; items: StackItem[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Dart", icon: "dart/dart-original" },
      { name: "TypeScript", icon: "typescript/typescript-original" },
      { name: "JavaScript", icon: "javascript/javascript-original" },
      { name: "Python", icon: "python/python-original" },
      { name: "C", icon: "c/c-original" },
    ],
  },
  {
    group: "Frameworks and libraries",
    items: [
      { name: "Flutter", icon: "flutter/flutter-original" },
      { name: "NestJS", icon: "nestjs/nestjs-original" },
      { name: "Express", icon: "express/express-original" },
      { name: "Node.js", icon: "nodejs/nodejs-original" },
      { name: "Prisma", icon: "prisma/prisma-original" },
    ],
  },
  {
    group: "Databases and tools",
    items: [
      { name: "MySQL", icon: "mysql/mysql-original" },
      { name: "SQLite", icon: "sqlite/sqlite-original" },
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub", icon: "github/github-original" },
      { name: "Swagger", icon: "swagger/swagger-original" },
    ],
  },
];

export const about = {
  paragraphs: [
    "I'm Calvin, a Computer Science student at BINUS University, Alam Sutera campus, and I'm aiming for a career as a software engineer. I like the moment an idea turns into something people can actually use.",
    "I enjoy working on both the part people see and the part that runs behind it. Seeing a screen and the service that powers it work together is the most satisfying part of building an app for me.",
    "I like to keep things simple and well organized, and to check my work before I call it done. I'm open to feedback, and I'm always looking for ways to improve a project, whether that's a cleaner structure, clearer documentation or a smoother experience for the person using it.",
  ],
  facts: [
    { label: "Goal", value: "Software engineer" },
    { label: "Focus", value: "Mobile apps and backend services" },
  ],
};
