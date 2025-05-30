"use client";

import * as React from "react";
import TypingAnimation from "@/components/animate-ui/components/code-editor";

export const CodeEditorDemo = () => {
  const codeSnippet = `const meetTheDev = async () => {
  const skills = await fetch("/api/skills").then(res => res.json());
  console.log("🚀 Full Stack Dev ready to deploy:", skills);
};

meetTheDev(); // let's build something amazing 🌐✨`;
  return (
    <TypingAnimation
      code={codeSnippet}
      lang="javascript"
      theme="github-dark"
      duration={10}
      delay={1}
    />
  );
};
