// components/TypingAnimation.tsx
import { useEffect, useState } from "react";

interface TypingAnimationProps {
  code: string;
  lang?: string;
  theme?: string;
  duration?: number;
  delay?: number;
}

export default function TypingAnimation({
  code,
  lang = "typescript",
  theme = "github-dark",
  duration = 5,
  delay = 0,
}: TypingAnimationProps) {
  const [displayedCode, setDisplayedCode] = useState("");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const characters = Array.from(code);
    const totalDuration = duration * 1000;
    const interval = totalDuration / characters.length;
    let index = 0;

    const timeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        setDisplayedCode((prev) => prev + characters[index]);
        index += 1;
        if (index === characters.length) {
          clearInterval(intervalId);
          setIsDone(true);
        }
      }, interval);
    }, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [code, duration, delay]);

  return (
    <div
      data-slot="code-editor"
      className={cn(
        "relative bg-muted/50 w-[600px] h-[400px] border border-border overflow-hidden flex flex-col rounded-xl"
      )}
    >
      {
        <div className="bg-muted border-b border-border/75 dark:border-border/50 relative flex flex-row items-center justify-between gap-y-2 h-10 px-4">
          {
            <div className="flex flex-row gap-x-2">
              <div className="size-2 rounded-full bg-red-500"></div>
              <div className="size-2 rounded-full bg-yellow-500"></div>
              <div className="size-2 rounded-full bg-green-500"></div>
            </div>
          }

          {true && (
            <div
              className={cn(
                "flex flex-row items-center gap-2",

                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              )}
            >
              {/* {icon ? (
                <div
                  className="text-muted-foreground [&_svg]:size-3.5"
                  dangerouslySetInnerHTML={
                    typeof icon === 'string' ? { __html: icon } : undefined
                  }
                >
                  {/* {typeof icon !== 'string' ? icon : null} 
                </div>
              ) : null} }*/}
              <figcaption className="flex-1 truncate text-muted-foreground text-[13px]">
                Portfolio.tsx
              </figcaption>
            </div>
          )}

          {true && (
            <CopyButton
              content={code}
              size="sm"
              variant="ghost"
              className="-me-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
              // onCopy={onCopy}
            />
          )}
        </div>
      }
      <SyntaxHighlighter code={displayedCode} lang={lang} theme={theme} />
      {/* {!isDone && <span className="blinking-cursor">|</span>} */}
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 8px;
          background-color: currentColor;
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

// components/SyntaxHighlighter.tsx

import { codeToHtml } from "shiki";
import { CopyButton } from "../buttons/copy";
import { cn } from "@/lib/utils";

interface SyntaxHighlighterProps {
  code: string;
  lang?: string;
  theme?: string;
}

export function SyntaxHighlighter({
  code,
  lang = "typescript",
  theme = "",
}: SyntaxHighlighterProps) {
  const [highlightedCode, setHighlightedCode] = useState("");

  useEffect(() => {
    const highlight = async () => {
      const html = await codeToHtml(code, { lang, theme });
      setHighlightedCode(html);
    };
    highlight();
  }, [code, lang, theme]);

  return <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />;
}
