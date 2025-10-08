"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

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
		{ name: "Blog", href: "#blog" },
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
				<div className="relative px-6 py-4 rounded-full w-fit bg-slate-900/90 backdrop-blur-md border border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
					{/* Enhanced glow blur background */}
					<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-indigo-500/30 rounded-full blur-xl opacity-50 animate-pulse-glow"></div>

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
							<div className="flex items-center gap-1">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-full hover:bg-indigo-500/10 relative group"
										onClick={handleNavClick}
									>
										<span className="relative z-10">{item.name}</span>
										<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 rounded-full transition-all duration-300" />
									</Link>
								))}
								<Link
									href="https://drive.google.com/file/d/17Z8MwIN_D97XmfMQMEpeVy0Jmzfp37Et/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Button
										size="sm"
										className="ml-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
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
