"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CodeEditorDemo } from "./CodeEditor";

// Enhanced typing animation component
const TypingAnimation = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className="inline-block"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + index * 0.05, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-950 z-10"></div>
      {/* <div className="absolute inset-0 opacity-50 z-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
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
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        {/* Text content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-sm md:text-base uppercase tracking-widest text-indigo-400 mb-4 font-mono"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hello, World!
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display">
            <span className="text-white">
              <TypingAnimation text="I'm Yash Savani" />
            </span>
          </h1>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-indigo-300 border border-indigo-500/20">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Building next-generation applications with AI, ML, and MERN.
            Transforming ideas into innovative digital experiences through code
            and creativity.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/in/yash-savani-078621357/"
              className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:yashsavani540@gmail.com"
              className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/codemoder-2002"
              className="p-3 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a
              href="https://drive.google.com/file/d/1YWAF3xAKdwQ-z4VdJp4nUTsH8UJTSz2m/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Download Resume</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
            <button
              onClick={() => smoothScrollTo("about")}
              className="px-8 py-3 border border-indigo-500 text-indigo-300 hover:bg-indigo-600/20 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Explore My Work</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                ↓
              </motion.span>
            </button>
          </motion.div>
        </motion.div>

        {/* Code Editor Animation */}
        <motion.div
          className="lg:w-1/2 w-full "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <CodeEditorDemo />
        </motion.div>
      </div>
    </section>
  );
}
