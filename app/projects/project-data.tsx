export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  tech: string;
}

export const projects: Project[] = [
  {
    title: 'Front-End | https://bettergov.ph',
    year: 2025,
    description: 'Philippines National Website',
    url: 'https://github.com/bettergovph',
    tech: 'Vite | JS, react.js, typescript, tailwindcss, CI/CD',
  },
  {
    title: 'Full Stack | Cheesemiss',
    year: 2025,
    description: 'Interactive chat application with real-time messaging',
    url: 'https://github.com/crispaulcastaneda/cheese-miss.git',
    tech: 'tailwindcss, react.js, next.js, socket.io, mongodb, zustand, axios, render',
  },
  {
    title: 'Full Stack | Guess The NBA Champion',
    year: 2025,
    description: 'Interactive landing page for a game',
    url: 'https://github.com/crispaulcastaneda/guess-the-winner',
    tech: 'PHP, MySQL, HTML5, CSS3, JS',
  },
  {
    title: 'CMS | MSEG ',
    year: 2023,
    description: 'Mansion Sports & Entertainment Group',
    url: 'https://mansionsports.com/',
    tech: 'WordPress, PHP, MySQL, JS',
  },
  {
    title: 'Frontend | Maria Ozawa Website',
    year: 2022,
    description: 'iGaming Partnership Website',
    url: 'https://github.com/crispaulcastaneda/landing-page-mo',
    tech: 'PHP, HTML5, CSS3, JS',
  },
];
