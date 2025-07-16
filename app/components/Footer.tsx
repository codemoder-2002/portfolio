import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-zinc-800 p-12 z-20 relative">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <Link href="/" className="font-bold text-xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Yash
            </span>
            <span className="text-white">
              {" "}
              <> </>Savani
            </span>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://github.com/codemoder-2002"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/yash-savani-078621357/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>

          <Link href="mailto:yashsavani540@gmail.com">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
