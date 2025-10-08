"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Mail, Sparkles, Download, ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/utils/smoothScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CodeEditorDemo } from "./CodeEditor";
import { useRef } from "react";

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

// Magnetic button component
const MagneticButton = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-950 pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-transparent bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900 to-slate-950 z-0"></div>
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

      <div className="container mx-auto gap-7 px-6 relative z-10 flex flex-col lg:flex-row items-center">
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

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              <TypingAnimation text="I'm Yash Savani" />
            </span>
          </h1>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.span 
              className="px-5 py-2.5 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-full text-indigo-300 border border-indigo-500/30 flex items-center gap-2 shadow-lg shadow-indigo-500/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(99, 102, 241, 0.5)" }}
            >
              <Sparkles className="w-4 h-4" />
              Full Stack Developer
            </motion.span>
            <motion.span 
              className="px-5 py-2.5 flex place-items-center gap-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full text-green-300 border border-green-500/30 shadow-lg shadow-green-500/10"
              whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
            >
              <div className="relative">
                <div className="absolute rounded size-2 bg-green-500" />
                <div className="animate-ping rounded size-2 bg-emerald-400" />
              </div>
              Open to Work
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Full stack developer crafting{" "}
            <span className="text-indigo-400 font-semibold">fast, scalable web apps</span>{" "}
            with MERN stack. Solving complex problems through{" "}
            <span className="text-purple-400 font-semibold">clean code</span>{" "}
            and thoughtful design.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/yash-savani-078621357/"
              className="group p-4 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 relative overflow-hidden"
              aria-label="LinkedIn Profile"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FaLinkedin className="w-6 h-6 relative z-10" />
            </motion.a>
            <motion.a
              href="mailto:yashsavani540@gmail.com"
              className="group p-4 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 relative overflow-hidden"
              aria-label="Email Contact"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="w-6 h-6 relative z-10" />
            </motion.a>
            <motion.a
              href="https://github.com/codemoder-2002"
              className="group p-4 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 relative overflow-hidden"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FaGithub className="w-6 h-6 relative z-10" />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <MagneticButton
              onClick={() => window.open("https://drive.google.com/file/d/17Z8MwIN_D97XmfMQMEpeVy0Jmzfp37Et/view?usp=sharing", "_blank")}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-semibold">Download Resume</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <MagneticButton
              onClick={() => smoothScrollTo("about")}
              className="group px-8 py-4 border-2 border-indigo-500 text-indigo-300 hover:bg-indigo-600/20 rounded-full transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:border-indigo-400"
            >
              <span className="font-semibold">Explore My Work</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="text-xl"
              >
                ↓
              </motion.span>
            </MagneticButton>
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
