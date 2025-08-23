export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: 'Chat Application (On going)',
    year: 2025,
    description: 'Interactive chat application with real-time messaging',
    url: 'https://github.com/crispaulcastaneda/cheese-miss.git',
  },
  {
    title: 'FullStack Dev | Guess The NBA Champion',
    year: 2025,
    description: 'Interactive landing page for a game',
    url: 'https://github.com/crispaulcastaneda/guess-the-winner',
  },
  {
    title: 'WordPress Dev | MSEG ',
    year: 2023,
    description: 'Mansion Sports & Entertainment Group',
    url: 'https://mansionsports.com/',
  },
  {
    title: 'Frontend Dev | Maria Ozawa Website',
    year: 2022,
    description: 'iGaming Partnership Website',
    url: 'https://github.com/crispaulcastaneda/landing-page-mo',
  },
];
