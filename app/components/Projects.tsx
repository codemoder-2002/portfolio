"use client";

import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Globe,
  MessageSquare,
  FlaskRoundIcon as Flask,
  TrelloIcon as TicTacToe,
  Sparkles,
  Braces,
  ShoppingCart,
  Car,
  MessageCircle,
  Shield,
  FileText,
  GraduationCap,
  Download,
  Folder,
  Gamepad2,
  Lock,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

// 3D Card effect component
const Card3D = ({ children }: { children: React.ReactNode }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = (y - centerY) / 10;
    const rotateYValue = (centerX - x) / 10;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="h-full perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categories = [
    { id: "Web Apps", label: "Web Apps", icon: <Globe className="w-4 h-4" /> },
    { id: "Tools", label: "Tools", icon: <Braces className="w-4 h-4" /> },
  ];

  const projects = [
    {
      title: "Cardexia E-commerce",
      description:
        "High-performance e-commerce platform with sales analytics, cart ops, and optimized UX.",
      techStack:
        "Next.js, Prisma, PostgreSQL, React Query, TurboRepo, Tailwind CSS",
      web: "https://cardexia-ebon.vercel.app",
      github: "",
      icon: <ShoppingCart className="w-6 h-6 text-indigo-400" />,
      category: "Web Apps",
      featured: true,
    },
    {
      title: "Bingo Game",
      description: "Multiplayer Bingo game with real-time updates and chat.",
      techStack: "Next.js, Pusher, Tailwind CSS",
      web: "",
      github: "",
      icon: <Gamepad2 className="w-6 h-6 text-teal-400" />,
      category: "Tools",
      featured: false,
    },
    {
      title: "Record Management System",
      description:
        "Manages user profiles and purchase history for a diamond store.",
      techStack: "Nest.js, Next.js, React Native, MongoDB, Redis",
      web: "",
      github: "",
      icon: <Folder className="w-6 h-6 text-pink-400" />,
      category: "Web Apps",
      featured: false,
    },
    {
      title: "Media Downloader",
      description:
        "Download media from YouTube and social platforms using scraping API.",
      techStack: "Next.js, Redis, Tailwind CSS",
      web: "",
      github: "",
      icon: <Download className="w-6 h-6 text-red-400" />,
      category: "Web Apps",
      featured: false,
    },
    {
      title: "Skill Development Cell",
      description:
        "Admin panel for managing students, experts, courses, and online registration.",
      techStack: "Next.js, Express.js, MongoDB",
      web: "",
      github: "",
      icon: <GraduationCap className="w-6 h-6 text-green-400" />,
      category: "Web Apps",
      featured: false,
    },
    {
      title: "Ethical Review System",
      description:
        "Manages research approval workflows for university ethics committee.",
      techStack: "React.js, Express.js, MongoDB",
      web: "",
      github: "",
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      category: "Web Apps",
      featured: false,
    },
    {
      title: "Patient Data on Blockchain",
      description:
        "Decentralized storage and control of patient records using smart contracts.",
      techStack: "Solidity, Ethereum, React.js",
      web: "",
      github: "",
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      category: "Tools",
      featured: false,
    },
    {
      title: "Authentication System",
      description:
        "Rust API with JWT and OAuth for secure and fast user authentication.",
      techStack: "Rust, Warp, PostgreSql, Docker, JWT, OAuth, Kafka",
      web: "",
      github: "https://github.com/codemoder-2002/rust_hybrid_auth_api_warp",
      icon: <Lock className="w-6 h-6 text-yellow-400" />,
      category: "Tools",
      featured: false,
    },
    {
      title: "Youtube Clone",
      description:
        "Full-feature clone of YouTube including Google OAuth and scalable backend.",
      techStack: "React.js, Nest.js, MongoDB, Prisma ORM, Google OAuth",
      web: "",
      github: "",
      icon: <FaYoutube className="w-6 h-6 text-red-600" />,
      category: "Web Apps",
      featured: false,
    },
    {
      title: "Thread Clone",
      description:
        "Thread-based social platform clone with authentication and post interactions.",
      techStack: "Next.js, MongoDB, NextAuth, Tailwind CSS",
      web: "",
      github: "",
      icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
      category: "Web Apps",
      featured: false,
    },
    {
      title: "Realtime Chat App",
      description:
        "Modern chat application with WebSockets and real-time messaging.",
      techStack: "Next.js, MongoDB, Socket Io, NextAuth",
      web: "",
      github: "",
      icon: <MessageCircle className="w-6 h-6 text-green-400" />,
      category: "Web Apps",
      featured: false,
    },
    {
      title: "Tesla App Clone",
      description:
        "Clone of Tesla's mobile app UI using React Native and Expo.",
      techStack: "React Native, TypeScript, Expo",
      web: "",
      github: "",
      icon: <Car className="w-6 h-6 text-gray-500" />,
      category: "Web Apps",
      featured: false,
    },
  ];

  const filteredProjects = activeCategory
    ? projects.filter((project) => project.category === activeCategory)
    : projects;

  return (
    <section
      id="projects"
      className="py-20 relative overflow-hidden bg-slate-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-slate-900 to-slate-950 z-0"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-pattern"
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
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading
          title="Projects"
          subtitle="Explore my portfolio of web applications, AI solutions, and development tools"
        />

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
              activeCategory === null
                ? "bg-indigo-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>All Projects</span>
          </button>

          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card3D>
                  {/* Card with 3D effect */}
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-indigo-500/20 h-full flex flex-col overflow-hidden">
                    {/* Featured badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-2 py-1 bg-indigo-500/20 backdrop-blur-sm rounded-full text-xs text-indigo-300 flex items-center gap-1 border border-indigo-500/30">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-full bg-slate-800 mr-4 border border-indigo-500/20">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white font-display">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-slate-300 mb-4">
                        {project.description}
                      </p>
                      <p className="text-sm text-slate-400 mb-6 mt-auto font-mono">
                        {project.techStack.split(", ").map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block bg-slate-800/90 text-slate-300 px-3 py-1.5 rounded-full mr-2 mb-2 text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </p>
                      <div className=" flex items-center justify-between mt-auto">
                        <div className="flex gap-2">
                          {project.web ? (
                            <Link
                              href={project.web}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-slate-800 text-white border border-indigo-500/20 hover:bg-slate-700 px-4 py-2 rounded transition-colors duration-300"
                            >
                              Live Demo
                            </Link>
                          ) : project.github ? (
                            // GitHub is shown in place of Live Demo if web is missing
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-slate-800 text-white border border-indigo-500/20 hover:bg-slate-700 px-4 py-2 rounded transition-colors duration-300"
                            >
                              GitHub
                            </Link>
                          ) : null}

                          {/* Show GitHub only if web is also shown */}
                          {project.web && project.github && (
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-slate-800 text-white border border-indigo-500/20 hover:bg-slate-700 px-4 py-2 rounded transition-colors duration-300"
                            >
                              GitHub
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
