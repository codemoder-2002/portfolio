import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import type React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "./components/floating-nav";
// import Navigation from "@/app/components/Navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata = {
  title: "Yash Savani | AI Engineer & Developer",
  description:
    "Portfolio of Yash Savani - AI Engineer, Web Developer, and Project Manager.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-slate-950 text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {/* <Navigation /> */}
          <FloatingNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
