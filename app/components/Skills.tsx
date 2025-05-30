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
    indigo:
      "from-indigo-500/20 to-indigo-500/5 border-indigo-500/20 text-indigo-400",
    blue: "from-blue-500/20 to-blue-500/5 border-blue-500/20 text-blue-400",
    green:
      "from-green-500/20 to-green-500/5 border-green-500/20 text-green-400",
    red: "from-red-500/20 to-red-500/5 border-red-500/20 text-red-400",
    teal: "from-teal-500/20 to-teal-500/5 border-teal-500/20 text-teal-400",
    violet:
      "from-violet-500/20 to-violet-500/5 border-violet-500/20 text-violet-400",
    orange:
      "from-orange-500/20 to-orange-500/5 border-orange-500/20 text-orange-400",
    cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/20 text-cyan-400",
  };

  const colorClass = colors[color as keyof typeof colors] || colors.indigo;

  return (
    <motion.div
      className={`bg-gradient-to-br ${colorClass} backdrop-blur-md p-6 rounded-xl border hover:border-opacity-50 transition-all duration-300 h-full`}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.2)",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-slate-800 mr-4 border border-slate-700">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white font-display">{title}</h3>
      </div>
      <p className="text-sm text-slate-300 font-mono mb-4">{technologies}</p>
      <p className="text-slate-300">{description}</p>
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
