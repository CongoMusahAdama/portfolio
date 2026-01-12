import { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TechPattern from './TechPattern';

interface Skill {
  category: string;
  items: {
    name: string;
    icon: string;
  }[];
}

const SkillsSection = () => {
  const allTech = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Laravel", icon: "/lovable-uploads/45b9016d-6f41-4e74-9e2d-14e144508968.png" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "/lovable-uploads/7a3ccb94-8f5d-44e0-97b9-1611fc4e75e9.png" },
    { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
    { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" },
    { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
    { name: "Cursor", icon: "https://avatars.githubusercontent.com/u/126786709?s=200&v=4" },
    { name: "Antigravity", icon: "https://ui-avatars.com/api/?name=Antigravity&background=0D8ABC&color=fff&rounded=true&bold=true" },
    { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    { name: "Discord", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" },
  ];

  // Double the array for seamless scrolling
  const scrollItems = [...allTech, ...allTech];

  return (
    <section id="skills" className="py-20 md:py-14 bg-brand-pink relative overflow-hidden text-white">
      <TechPattern className="text-white" />
      <div className="container mx-auto px-5 md:px-6 mb-12 md:mb-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 max-w-7xl mx-auto">
          <div className="text-left">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4 dark:text-background">Tech Stack</h2>
            <div className="w-16 h-1 bg-white mb-6"></div>
            <p className="text-base sm:text-lg text-white/85 font-medium max-w-xl leading-relaxed">
              Equipped with a robust architectural toolkit and deep technical expertise in building scalable, resilient systems.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex overflow-hidden z-10">
        <div className="flex animate-scroll gap-12 sm:gap-16 lg:gap-24 items-center whitespace-nowrap py-8 md:py-10">
          {scrollItems.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 shrink-0 transition-all duration-500 cursor-default tap-highlight-none"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain filter drop-shadow-sm"
                loading="lazy"
              />
              <span className="text-base sm:text-xl lg:text-2xl font-bold tracking-tight uppercase opacity-90">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
