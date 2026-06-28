export type TechSkill = {
  name: string;
  icon: string;
  useCase: string;
};

export type TechCategory = {
  name: string;
  skills: TechSkill[];
};

/** Single source of truth — your actual stack across the portfolio */
export const techCategories: TechCategory[] = [
  {
    name: "Languages",
    skills: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        useCase: "Backend logic & data automation",
      },
      {
        name: "PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
        useCase: "Dynamic web scripting",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        useCase: "Interactive frontend & backend",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        useCase: "Type-safe scalable development",
      },
    ],
  },
  {
    name: "Frameworks",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        useCase: "Fast server-side runtime",
      },
      {
        name: "NestJS",
        icon: "/lovable-uploads/nestjs-logo.png",
        useCase: "Modular Node.js framework",
      },
      {
        name: "FastAPI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        useCase: "High-performance Python APIs",
      },
      {
        name: "Django",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        useCase: "Robust rapid-dev framework",
      },
      {
        name: "Laravel",
        icon: "/lovable-uploads/45b9016d-6f41-4e74-9e2d-14e144508968.png",
        useCase: "Elegant PHP web platform",
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        useCase: "Component-based UI",
      },
      {
        name: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
        useCase: "Fast frontend tooling",
      },
      {
        name: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        useCase: "Utility-first styling",
      },
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        useCase: "Relational data management",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        useCase: "Flexible document-based storage",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        useCase: "Advanced relational database",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        useCase: "Consistent dev environment",
      },
      {
        name: "AWS",
        icon: "/lovable-uploads/7a3ccb94-8f5d-44e0-97b9-1611fc4e75e9.png",
        useCase: "Scalable cloud services",
      },
    ],
  },
  {
    name: "APIs & tools",
    skills: [
      {
        name: "REST",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        useCase: "API design & integration",
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        useCase: "API testing & debugging",
      },
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        useCase: "Version control",
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        useCase: "Code hosting & collaboration",
      },
    ],
  },
  {
    name: "AI & innovation",
    skills: [
      {
        name: "Cursor",
        icon: "/lovable-uploads/cursor-logo.png",
        useCase: "AI-enhanced coding editor",
      },
      {
        name: "Claude",
        icon: "/lovable-uploads/claude.png",
        useCase: "Advanced AI analysis & coding",
      },
      {
        name: "Perplexity",
        icon: "/lovable-uploads/perplexity.png",
        useCase: "AI-powered research & search",
      },
      {
        name: "Antigravity",
        icon: "/lovable-uploads/antigravity-logo.png",
        useCase: "Advanced agentic automation",
      },
    ],
  },
  {
    name: "Workspace",
    skills: [
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        useCase: "Primary dev environment",
      },
      {
        name: "Jira",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
        useCase: "Agile project tracking",
      },
      {
        name: "Notion",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
        useCase: "Centralized project docs",
      },
      {
        name: "Slack",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
        useCase: "Team communication",
      },
      {
        name: "Discord",
        icon: "/lovable-uploads/discord-logo.png",
        useCase: "Community & dev support",
      },
      {
        name: "Trello",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
        useCase: "Visual task organization",
      },
    ],
  },
];

export type SystemRow = {
  label: string;
  items: string[];
};

export const GITHUB_USERNAME = "CongoMusahAdama";

export const buildSystemRows = (
  githubLanguages: string[] = []
): SystemRow[] => {
  const rows = techCategories.map((category) => ({
    label: category.name,
    items: category.skills.map((skill) => skill.name),
  }));

  if (!githubLanguages.length) return rows;

  const languagesRow = rows.find((row) => row.label === "Languages");
  if (!languagesRow) return rows;

  const merged = new Set([...languagesRow.items, ...githubLanguages]);
  languagesRow.items = Array.from(merged).sort((a, b) =>
    a.localeCompare(b)
  );

  return rows;
};

export const fetchGitHubLanguages = async (): Promise<string[]> => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
  );
  if (!response.ok) return [];

  const repos: { language: string | null; fork: boolean }[] =
    await response.json();

  const languages = new Set<string>();
  repos.forEach((repo) => {
    if (!repo.fork && repo.language) languages.add(repo.language);
  });

  return Array.from(languages).sort((a, b) => a.localeCompare(b));
};

/** Carousel tools derived from the same stack */
export const carouselTools = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "NestJS", icon: "/lovable-uploads/nestjs-logo.png" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "/lovable-uploads/7a3ccb94-8f5d-44e0-97b9-1611fc4e75e9.png" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Cursor", icon: "/lovable-uploads/cursor-logo.png" },
];
