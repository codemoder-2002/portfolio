"use client";

import * as React from "react";
import TypingAnimation from "@/components/animate-ui/components/code-editor";

export const CodeEditorDemo = () => {
  const codeSnippet = `const greet = () => {
    console.log("Hello, world!");
  };
  greet();`;
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
