"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  PencilRuler,
  FileText,
  Layers,
  Cloud,
  Network,
  Code2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

// Animated background component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-indigo-500/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="skill-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#skill-grid)" />
        </svg>
      </div>
    </div>
  );
};

// Skill card component
const SkillCard = ({
  icon: Icon,
  title,
  technologies,
  description,
  color = "indigo",
}: {
  icon: any;
  title: string;
  technologies: string;
  description: string;
  color?: string;
}) => {
  const colors = {
    indigo: {
      gradient: "from-indigo-500/20 to-indigo-500/5",
      border: "border-indigo-500/20 hover:border-indigo-500/40",
      text: "text-indigo-400",
      glow: "group-hover:shadow-indigo-500/20",
    },
    blue: {
      gradient: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/20 hover:border-blue-500/40",
      text: "text-blue-400",
      glow: "group-hover:shadow-blue-500/20",
    },
    green: {
      gradient: "from-green-500/20 to-green-500/5",
      border: "border-green-500/20 hover:border-green-500/40",
      text: "text-green-400",
      glow: "group-hover:shadow-green-500/20",
    },
    red: {
      gradient: "from-red-500/20 to-red-500/5",
      border: "border-red-500/20 hover:border-red-500/40",
      text: "text-red-400",
      glow: "group-hover:shadow-red-500/20",
    },
    teal: {
      gradient: "from-teal-500/20 to-teal-500/5",
      border: "border-teal-500/20 hover:border-teal-500/40",
      text: "text-teal-400",
      glow: "group-hover:shadow-teal-500/20",
    },
    violet: {
      gradient: "from-violet-500/20 to-violet-500/5",
      border: "border-violet-500/20 hover:border-violet-500/40",
      text: "text-violet-400",
      glow: "group-hover:shadow-violet-500/20",
    },
    orange: {
      gradient: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/20 hover:border-orange-500/40",
      text: "text-orange-400",
      glow: "group-hover:shadow-orange-500/20",
    },
    cyan: {
      gradient: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/20 hover:border-cyan-500/40",
      text: "text-cyan-400",
      glow: "group-hover:shadow-cyan-500/20",
    },
  };

  const colorScheme = colors[color as keyof typeof colors] || colors.indigo;

  return (
    <motion.div
      className="group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8 }}
    >
      <div
        className={`bg-gradient-to-br ${colorScheme.gradient} backdrop-blur-md p-6 rounded-2xl border ${colorScheme.border} transition-all duration-300 h-full relative overflow-hidden shadow-lg ${colorScheme.glow}`}
      >
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <motion.div 
              className={`p-3 rounded-xl bg-slate-800/80 mr-4 border border-slate-700 group-hover:scale-110 transition-transform`}
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon className={`w-6 h-6 ${colorScheme.text}`} />
            </motion.div>
            <h3 className="text-xl font-bold text-white font-display group-hover:text-indigo-200 transition-colors">
              {title}
            </h3>
          </div>
          
          <div className="mb-4">
            <p className={`text-sm font-mono mb-2 ${colorScheme.text} font-semibold`}>
              {technologies}
            </p>
          </div>
          
          <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const skills = [
    {
      icon: Code,
      title: "Front-End Development",
      technologies: "HTML, Tailwind CSS, JavaScript, TypeScript, React.js",
      description:
        "Crafting dynamic and responsive front-end applications using React.js and TypeScript, with a strong emphasis on clean architecture, accessibility, and modern design systems like Tailwind CSS.",
      color: "blue",
    },
    {
      icon: Server,
      title: "Back-End Development",
      technologies: "Node.js, Express.js, Nest.js, Go (Fiber), Rust (Warp)",
      description:
        "Developing high-performance APIs and microservices using statically and dynamically typed languages. Skilled in building secure and scalable systems with Rust's Warp and Go's Fiber, as well as Node.js ecosystems.",
      color: "green",
    },
    {
      icon: Layers,
      title: "Full-Stack Frameworks & Tools",
      technologies: "Next.js, Diesel ORM, Drizzle ORM, Prisma ORM",
      description:
        "End-to-end web application development using full-stack frameworks like Next.js. Experienced with both SQL and type-safe ORMs (Diesel, Drizzle, Prisma) for robust and maintainable backend integrations.",
      color: "violet",
    },
    {
      icon: Database,
      title: "Databases & Storage",
      technologies:
        "PostgreSQL, Dragonfly (Redis), Elasticsearch, MongoDB, ScyllaDB",
      description:
        "Efficient in designing and managing distributed and scalable databases. Experienced in combining relational and NoSQL systems with caching (Dragonfly) and search optimization (Elasticsearch).",
      color: "red",
    },
    {
      icon: Network,
      title: "API & Authentication",
      technologies:
        "REST, GraphQL, gRPC, JWT, OAuth 2.0, Two-Factor Authentication",
      description:
        "Specialized in building secure and performant APIs using REST, GraphQL, and gRPC. Implemented hybrid authentication workflows using JWT, OAuth providers, and 2FA for modern web platforms.",
      color: "teal",
    },
    {
      icon: Code2,
      title: "Data Formats & Interchange",
      technologies: "JSON",
      description:
        "Working extensively with JSON as a primary data exchange format across web APIs, client-server communications, and configuration structures.",
      color: "cyan",
    },
    {
      icon: PencilRuler,
      title: "UI/UX & Design",
      technologies: "ShadcnUI, MVP Blocks, Tailwind CSS",
      description:
        "Designing component-based, accessible UI systems with ShadcnUI and MVP Blocks. Ensuring cohesive user experience with utility-first styling through Tailwind CSS.",
      color: "orange",
    },
    {
      icon: FileText,
      title: "Productivity & Collaboration",
      technologies: "Git, Jira, TurboRepo, Clerk",
      description:
        "Streamlining development workflows using monorepos (TurboRepo), agile project tracking (Jira), and effective team collaboration with version control (Git).",
      color: "blue",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-slate-950"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Technical Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              technologies={skill.technologies}
              description={skill.description}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
