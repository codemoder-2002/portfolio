"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    if (isMobile) setIsOpen(false);
  };

  return (
    <>
      <motion.div
        className={`fixed left-[30%] top-6 -translate-x-1/2 z-50 w-[90vw] max-w-4xl ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-6 py-4 rounded-full w-fit bg-zinc-900/80 backdrop-blur-md border border-zinc-700/50 shadow-2xl">
          {/* Indigo glow blur background */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-indigo-800/20 rounded-full blur-xl opacity-60"></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center">
              <div className="flex items-center gap-4 ">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-1 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="https://drive.google.com/file/d/17Z8MwIN_D97XmfMQMEpeVy0Jmzfp37Et/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant={"link"}
                    className="ml-2 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-900 border-0 text-white"
                  >
                    Resume
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md ${
            isOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-white hover:text-indigo-400 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </Link>
            ))}
            <Button className="mt-6 bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-900 border-0 text-white">
              Resume
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
