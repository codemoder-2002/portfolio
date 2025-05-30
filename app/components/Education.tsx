"use client";

import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

// Education card component
const EducationCard = ({
  degree,
  institution,
  period,
  additional,
  icon: Icon,
  index,
}: {
  degree: string;
  institution: string;
  period: string;
  additional: string;
  icon: any;
  index: number;
}) => {
  return (
    <motion.div
      className="bg-slate-800/90 backdrop-blur-md p-6 rounded-xl border border-indigo-500/20 shadow-lg hover:border-indigo-500/40 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-indigo-500/20 mr-4">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
        <h3 className="text-2xl font-bold text-white font-display">{degree}</h3>
      </div>
      <p className="text-xl text-slate-300 mb-2">{institution}</p>
      <p className="text-slate-400 flex items-center">
        <Calendar className="w-4 h-4 mr-2" />
        {period}
      </p>
      <p className="text-slate-300 font-medium mt-2">{additional}</p>
    </motion.div>
  );
};

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Information Technology",
      institution: "P P Savani University",
      period: "2020 - 2024",
      additional: "SGPA: 8.15",
      icon: BookOpen,
    },
    {
      degree: "12th Grade",
      institution: "Shree Swaminarayan Gurukul",
      period: "2018 - 2020",
      additional: "Percentage: 65%",
      icon: Award,
    },
    {
      degree: "10th Grade",
      institution: "J G Mavani High School",
      period: "2017 - 2018",
      additional: "Percentage: 85%",
      icon: GraduationCap,
    },
  ];

  return (
    <section
      id="education"
      className="py-20 relative overflow-hidden bg-slate-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(125%_125%_at_50%_10%,#0a0a0a_20%,#6633ee_80%,#0a0a0a_100%)] opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Education" />

        <div className="max-w-4xl mx-auto space-y-6 mt-12">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              additional={edu.additional}
              icon={edu.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
