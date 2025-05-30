"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const experiences = [
    {
      period: "Dec 2024 – May 2025",
      role: "Full Stack Developer",
      company: "Cardexia",
      color: "indigo",
      projects: [
        {
          title: "Foundation Website Development & Maintenance",
          description:
            "Led the end-to-end development and maintenance of the Pramila Foundation's official website. Focused on creating a clean, accessible, and user-friendly experience that aligns with the foundation's mission. Regularly updated content and ensured optimal performance across devices.",
        },
        {
          title: "Feature Development & Digital Strategy",
          description:
            "Collaborated closely with the foundation to design and implement new website features and enhancements. Played a key role in developing social media strategies, content planning, and analytics to improve engagement on platforms such as Facebook, Instagram, and Twitter.",
        },
        {
          title: "E-commerce Platform Integration",
          description:
            "Spearheaded the design and development of an integrated e-commerce solution for the foundation. Ensured seamless communication across team members, assigned responsibilities, and aligned delivery with both short- and long-term organizational goals.",
        },
      ],
    },
    {
      period: "June 2024 – Present",
      role: "Full Stack Developer",
      company: "Freelance",
      color: "blue",
      projects: [
        {
          title: "Record Management Platform – Unifesto",
          description:
            "Built a full-featured event management system for Unifesto, a student-led initiative. Implemented core modules including event registration, schedule tracking, and user authentication with a focus on responsive design and usability.",
        },
        {
          title: "Profile Management System",
          description:
            "Developed and maintained a user profile management interface for Unifesto, allowing users to register, update personal information, and track participation. Ensured secure data handling and smooth UX.",
        },
        {
          title: "Responsive UI Enhancements & Bug Fixes",
          description:
            "Improved the website’s mobile responsiveness and visual layout. Addressed UI bugs, optimized performance, and incorporated user feedback for iterative enhancements.",
        },
        {
          title: "Media Downloader Web App",
          description:
            "Created a web-based media downloader tool for Unifesto users to access and download event-related content. Focused on intuitive design, efficient downloads, and maintaining data privacy.",
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-slate-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-900 to-slate-950 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Experience" />

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-gradient-to-b from-indigo-500 to-blue-500">
                  <motion.div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-white"
                    animate={{
                      y: [0, 100, 200, 300, 400],
                      opacity: [1, 0.8, 0.6, 0.4, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </div>
              )}

              <div className="flex items-start">
                {/* Timeline dot */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center z-10 relative border border-indigo-500/30">
                    <Briefcase className={`w-8 h-8 text-${exp.color}-400`} />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 bg-slate-900/80 backdrop-blur-md p-6 rounded-2xl border border-indigo-500/20 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-display">
                      <Zap className={`w-5 h-5 text-${exp.color}-400`} />
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-indigo-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <MapPin className="w-4 h-4 text-slate-400 mr-1" />
                    <span className="text-slate-300">{exp.company}</span>
                  </div>

                  <div className="space-y-4">
                    {exp.projects.map((project, i) => (
                      <motion.div
                        key={i}
                        className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 group hover:border-indigo-500/30 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      >
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {project.title}
                        </h4>
                        <p className="text-slate-300">{project.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
