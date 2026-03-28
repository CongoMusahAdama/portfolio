import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code, Database, Zap, Settings, ArrowUpRight, ChevronDown } from 'lucide-react';
import TechPattern from './TechPattern';

interface Skill {
  name: string;
  icon: string;
  useCase: string;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const categories: Category[] = [
  {
    name: "AI & Innovation",
    icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
    skills: [
      { name: "Claude", icon: "/lovable-uploads/claude.png", useCase: "Advanced AI analysis & coding" },
      { name: "Perplexity", icon: "/lovable-uploads/perplexity.png", useCase: "AI-powered research & search" },
      { name: "Cursor", icon: "/lovable-uploads/cursor-logo.png", useCase: "AI-enhanced coding editor" },
      { name: "Antigravity", icon: "/lovable-uploads/antigravity-logo.png", useCase: "Advanced agentic automation" },
    ]
  },
  {
    name: "Languages",
    icon: <Code className="w-5 h-5 text-brand-orange" />,
    skills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", useCase: "Backend logic & data automation" },
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg", useCase: "Dynamic web scripting" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", useCase: "Interactive frontend & backend" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", useCase: "Type-safe scalable development" },
    ]
  },
  {
    name: "Frameworks",
    icon: <Zap className="w-5 h-5 text-brand-orange" />,
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", useCase: "Fast server-side runtime" },
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", useCase: "High-performance Python APIs" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", useCase: "Robust rapid-dev framework" },
      { name: "Laravel", icon: "/lovable-uploads/45b9016d-6f41-4e74-9e2d-14e144508968.png", useCase: "Elegant PHP web platform" },
      { name: "NestJS", icon: "/lovable-uploads/nestjs-logo.png", useCase: "Modular Node.js framework" },
    ]
  },
  {
    name: "Infrastructure",
    icon: <Database className="w-5 h-5 text-brand-orange" />,
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", useCase: "Relational data management" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", useCase: "Flexible document-based storage" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", useCase: "Advanced relational database" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", useCase: "Consistent dev environment" },
      { name: "AWS", icon: "/lovable-uploads/7a3ccb94-8f5d-44e0-97b9-1611fc4e75e9.png", useCase: "Scalable cloud services" },
    ]
  },
  {
    name: "Workspace",
    icon: <Settings className="w-5 h-5 text-brand-orange" />,
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", useCase: "Efficient version control" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", useCase: "Code hosting & collaboration" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", useCase: "Primary dev environment" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", useCase: "API testing & debugging" },
      { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", useCase: "Agile project tracking" },
      { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg", useCase: "Centralized project docs" },
      { name: "Slack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", useCase: "Team communication hub" },
      { name: "Discord", icon: "/lovable-uploads/discord-logo.png", useCase: "Community & dev support" },
      { name: "Trello", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg", useCase: "Visual task organization" },
    ]
  }
];

const SkillsSection = () => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map(c => [c.name, true]))
  );

  const toggleCategory = (name: string) => {
    setOpenCategories(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-background relative overflow-hidden transition-colors duration-500">
      <TechPattern className="text-foreground/5 dark:text-white/5" />
      
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4 mb-10 md:mb-12">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase">
            Tech <span className="curvy-underline text-brand-orange">Stack</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Equipped with a robust architectural toolkit and deep technical expertise in building scalable, resilient systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {categories.map((category, catIndex) => {
            const isOpen = openCategories[category.name];
            
            return (
              <motion.div
                key={category.name}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: catIndex * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                className="flex flex-col space-y-5"
              >
                <button 
                  onClick={() => toggleCategory(category.name)}
                  className="flex items-center justify-between gap-3 pb-2 border-b border-border/40 w-full group text-left hover:border-brand-orange/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="shrink-0 scale-90">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-black text-foreground uppercase tracking-wider">{category.name}</h3>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground group-hover:text-brand-orange transition-all duration-300 ${isOpen ? '' : '-rotate-90 opacity-20'}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      key={`${category.name}-content`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 pt-2">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill.name}
                            variants={{
                              hidden: { opacity: 0, x: -10, y: 10 },
                              show: { 
                                opacity: 1, 
                                x: 0, 
                                y: 0,
                                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                              }
                            }}
                            className="group relative flex items-center gap-3 p-2 rounded-lg border border-border/20 bg-muted/5 md:hover:bg-brand-orange/5 md:hover:border-brand-orange/20 transition-all duration-300"
                          >
                            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-5 h-5 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                            </div>
                            
                            <div className="flex flex-col min-w-0">
                              <span className="text-[11px] font-black text-foreground group-hover:text-brand-orange transition-colors uppercase tracking-tight truncate">
                                {skill.name}
                              </span>
                              <span className="text-[9px] text-muted-foreground line-clamp-1 font-bold italic opacity-60">
                                {skill.useCase}
                              </span>
                            </div>
                            
                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                              <ArrowUpRight className="w-3 h-3 text-brand-orange" />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
