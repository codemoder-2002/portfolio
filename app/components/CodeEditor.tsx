"use client";

import * as React from "react";
import { CodeEditor } from "@/components/animate-ui/components/code-editor";
import { FaReact } from "react-icons/fa";

export const CodeEditorDemo = () => {
  return (
    <CodeEditor
      className="w-[640px] h-[480px] bg-transparent "
      lang="tsx"
      title="component.tsx"
      icon={<FaReact />}
      duration={15} // disable animation for clean render
      delay={0.5}
      copyButton
      writing={false} // 👈 disables typing animation
      cursor={false} // 👈 disables cursor blink
    >
      {`// Full Stack Engineer Portfolio
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects data
    fetchProjects().then(data => {
      setProjects(data);
    });
  }, []);

  return (
    <div className="portfolio">
      <Header title="Yash Savani" />
      <Hero />
      <Projects data={projects} />
      <Contact />
    </div>
  );
}

export default Portfolio;`}
    </CodeEditor>
  );
};
