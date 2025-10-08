"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Brain,
  Clipboard,
  Settings,
  Cpu,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

// Particle animation component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 50 }).map((_, i) => (
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
  );
};

export default function About() {
  const skills = [
    {
      icon: <Code className="w-8 h-8 text-indigo-400" />,
      title: "Frontend",
      description:
        "HTML, Tailwind Css, JavaScript, TypeScript , React.js , Next.js",
    },
    {
      icon: <Server className="w-8 h-8 text-blue-400" />,
      title: "Backend",
      description: "Node.js, Express.js, Nest js, GoLang(Fiber), Rust(Warp)",
    },
    {
      icon: <Database className="w-8 h-8 text-violet-400" />,
      title: "Database",
      description: "Scylladb, MongoDB, PostgreSQL, Redis, Dragonfly",
    },
    {
      icon: <Cpu className="w-8 h-8 text-fuchsia-400" />,
      title: "Orm",
      description: "Prisma, Mongoose, Drizzle",
    },
    {
      icon: <Clipboard className="w-8 h-8 text-sky-400" />,
      title: "Project Management",
      description: "Agile, Leadership",
    },
    {
      icon: <Settings className="w-8 h-8 text-teal-400" />,
      title: "Other",
      description: "Kafka, Docker, Turborepo(Next.js) , Vercel, Clerk",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-950">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>
      <ParticleField />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="About Me" />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Main About Card - Spans 2 columns */}
          <motion.div
            className="lg:col-span-2 lg:row-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-indigo-500/20 relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mr-4 border border-indigo-500/30"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Brain className="w-8 h-8 text-indigo-400" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white font-display">
                    Full-Stack Developer & AI Engineer
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Specializing in{" "}
                    <span className="text-indigo-400 font-semibold">Full Stack Development</span>{" "}
                    and{" "}
                    <span className="text-purple-400 font-semibold">Scalability</span>. 
                    Skilled in MERN, JavaScript, and performance optimization with a passion
                    for solving complex problems through clean, efficient code and
                    thoughtful architecture.
                  </p>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Passionate about building{" "}
                    <span className="text-indigo-400 font-semibold">highly performant solutions</span>{" "}
                    using diverse languages and databases to reduce latency and make
                    websites faster and scalable.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <motion.div 
                    className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
                    whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.5)" }}
                  >
                    <div className="text-3xl font-bold text-indigo-400 mb-1">12+</div>
                    <div className="text-sm text-slate-400">Projects</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
                    whileHover={{ scale: 1.05, borderColor: "rgba(139, 92, 246, 0.5)" }}
                  >
                    <div className="text-3xl font-bold text-purple-400 mb-1">8+</div>
                    <div className="text-sm text-slate-400">Technologies</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"
                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-1">2+</div>
                    <div className="text-sm text-slate-400">Years Exp</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skill Cards - Bento style */}
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="h-full bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-md p-6 rounded-3xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/5 group-hover:to-indigo-500/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <motion.div 
                    className="bg-slate-800/80 p-3 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-300 transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
