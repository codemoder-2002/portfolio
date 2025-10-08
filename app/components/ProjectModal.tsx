"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
	AlertTriangle,
	Award,
	BookOpen,
	Calendar,
	ChevronLeft,
	ChevronRight,
	Clock,
	Code2,
	ExternalLink,
	Github,
	Lightbulb,
	Rocket,
	Target,
	TrendingUp,
	Users,
	X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ProjectData } from "@/lib/projects-data";

interface ProjectModalProps {
	project: ProjectData | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function ProjectModal({
	project,
	isOpen,
	onClose,
}: ProjectModalProps) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	if (!project) return null;

	const nextImage = () => {
		setCurrentImageIndex((prev) =>
			prev === project.images.length - 1 ? 0 : prev + 1,
		);
	};

	const previousImage = () => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? project.images.length - 1 : prev - 1,
		);
	};

	const colorVariants = {
		indigo: "from-indigo-500/10 to-purple-500/10 border-indigo-500/30",
		teal: "from-teal-500/10 to-cyan-500/10 border-teal-500/30",
		pink: "from-pink-500/10 to-rose-500/10 border-pink-500/30",
		red: "from-red-500/10 to-orange-500/10 border-red-500/30",
		yellow: "from-yellow-500/10 to-orange-500/10 border-yellow-500/30",
		orange: "from-orange-500/10 to-red-500/10 border-orange-500/30",
	};

	const colorClass =
		colorVariants[project.color as keyof typeof colorVariants] ||
		colorVariants.indigo;

	const statusColors = {
		Completed: "bg-green-500/20 text-green-300 border-green-500/30",
		"In Progress": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
		Maintained: "bg-blue-500/20 text-blue-300 border-blue-500/30",
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
					/>

					{/* Modal */}
					<div className="fixed inset-0 z-50 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4">
							<motion.div
								initial={{ opacity: 0, scale: 0.95, y: 20 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.95, y: 20 }}
								transition={{ duration: 0.3 }}
								className="relative w-full max-w-6xl bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden"
								onClick={(e) => e.stopPropagation()}
							>
								{/* Close button */}
								<button
									onClick={onClose}
									className="absolute top-6 right-6 z-20 p-3 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 hover:border-slate-600 transition-all duration-300 group"
								>
									<X className="w-5 h-5 text-slate-300 group-hover:text-white" />
								</button>

								{/* Content */}
								<div className="max-h-[90vh] overflow-y-auto custom-scrollbar">
									{/* Header with Image Gallery */}
									<div className="relative h-96 bg-gradient-to-br from-slate-800 to-slate-900">
										<div
											className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-20`}
										/>

										{/* Image Gallery */}
										<div className="relative h-full">
											{/* Placeholder for project images */}
											<div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative overflow-hidden">
												<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

												{/* Image Navigation */}
												{project.images.length > 1 && (
													<>
														<button
															onClick={previousImage}
															className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-800 transition-all"
														>
															<ChevronLeft className="w-5 h-5 text-white" />
														</button>
														<button
															onClick={nextImage}
															className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-slate-900/80 backdrop-blur-sm border border-slate-700 hover:bg-slate-800 transition-all"
														>
															<ChevronRight className="w-5 h-5 text-white" />
														</button>
													</>
												)}

												{/* Image indicators */}
												{project.images.length > 1 && (
													<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
														{project.images.map((_, index) => (
															<button
																key={index}
																onClick={() => setCurrentImageIndex(index)}
																className={`w-2 h-2 rounded-full transition-all ${
																	index === currentImageIndex
																		? "bg-white"
																		: "bg-white/40 hover:bg-white/60"
																}`}
															/>
														))}
													</div>
												)}

												{/* Placeholder content */}
												<div className="text-center">
													<div className="text-8xl mb-4 opacity-20">🚀</div>
													<div className="text-slate-400">
														Project Image Gallery
													</div>
												</div>
											</div>
										</div>

										{/* Project Title Overlay */}
										<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-8">
											<div className="flex items-center justify-between">
												<div>
													<h2 className="text-4xl font-bold text-white mb-2 font-display">
														{project.title}
													</h2>
													<p className="text-xl text-slate-300">
														{project.longDescription}
													</p>
												</div>
												<div className="flex flex-col items-end gap-3">
													<div
														className={`px-4 py-2 rounded-full text-sm font-medium border ${
															statusColors[project.status]
														}`}
													>
														{project.status}
													</div>
													<div className="flex items-center gap-2 text-slate-400">
														<Calendar className="w-4 h-4" />
														<span>{project.year}</span>
													</div>
												</div>
											</div>
										</div>
									</div>

									{/* Main Content */}
									<div className="p-8 space-y-8">
										{/* Action Buttons */}
										<div className="flex flex-wrap gap-4 justify-center">
											{project.web && (
												<Link
													href={project.web}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 font-semibold"
												>
													<ExternalLink className="w-5 h-5" />
													Live Demo
												</Link>
											)}
											{project.github && (
												<Link
													href={project.github}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all duration-300 border border-slate-700 hover:border-slate-600 font-semibold"
												>
													<Github className="w-5 h-5" />
													View Code
												</Link>
											)}
										</div>

										{/* Project Metrics */}
										<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
											<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
												<div className="flex items-center gap-3 mb-2">
													<Clock className="w-5 h-5 text-indigo-400" />
													<h3 className="font-semibold text-white">Timeline</h3>
												</div>
												<p className="text-slate-300">
													{project.developmentTime}
												</p>
											</div>
											<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
												<div className="flex items-center gap-3 mb-2">
													<Users className="w-5 h-5 text-purple-400" />
													<h3 className="font-semibold text-white">Team</h3>
												</div>
												<p className="text-slate-300">{project.teamSize}</p>
											</div>
											<div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
												<div className="flex items-center gap-3 mb-2">
													<Award className="w-5 h-5 text-teal-400" />
													<h3 className="font-semibold text-white">Role</h3>
												</div>
												<p className="text-slate-300">{project.myRole}</p>
											</div>
										</div>

										{/* Problem Solved */}
										<div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl p-6 border border-red-500/20">
											<div className="flex items-center gap-3 mb-4">
												<div className="p-2 rounded-lg bg-red-500/20">
													<AlertTriangle className="w-5 h-5 text-red-400" />
												</div>
												<h3 className="text-2xl font-bold text-white">
													Problem Solved
												</h3>
											</div>
											<p className="text-slate-300 leading-relaxed text-lg">
												{project.problemSolved}
											</p>
										</div>

										{/* Tech Stack & Tools */}
										<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
											{/* Tech Stack */}
											<div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
												<div className="flex items-center gap-3 mb-4">
													<div className="p-2 rounded-lg bg-indigo-500/20">
														<Code2 className="w-5 h-5 text-indigo-400" />
													</div>
													<h3 className="text-2xl font-bold text-white">
														Tech Stack
													</h3>
												</div>
												<div className="flex flex-wrap gap-3">
													{project.techStack.map((tech) => (
														<span
															key={tech}
															className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-300 rounded-full text-sm border border-indigo-500/30 font-medium"
														>
															{tech}
														</span>
													))}
												</div>
											</div>

											{/* Tools */}
											<div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
												<div className="flex items-center gap-3 mb-4">
													<div className="p-2 rounded-lg bg-purple-500/20">
														<Rocket className="w-5 h-5 text-purple-400" />
													</div>
													<h3 className="text-2xl font-bold text-white">
														Tools & Services
													</h3>
												</div>
												<div className="grid grid-cols-2 gap-3">
													{project.tools.map((tool) => (
														<div
															key={tool}
															className="flex items-center gap-2 p-3 bg-slate-900/50 rounded-xl border border-slate-700/30 hover:border-purple-500/30 transition-all"
														>
															<div className="w-2 h-2 rounded-full bg-purple-400" />
															<span className="text-slate-300">{tool}</span>
														</div>
													))}
												</div>
											</div>
										</div>

										{/* Key Features */}
										<div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl p-6 border border-green-500/20">
											<div className="flex items-center gap-3 mb-4">
												<div className="p-2 rounded-lg bg-green-500/20">
													<Target className="w-5 h-5 text-green-400" />
												</div>
												<h3 className="text-2xl font-bold text-white">
													Key Features
												</h3>
											</div>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												{project.features.map((feature, index) => (
													<motion.div
														key={index}
														initial={{ opacity: 0, x: -20 }}
														animate={{ opacity: 1, x: 0 }}
														transition={{ delay: index * 0.1 }}
														className="flex items-start gap-3 text-slate-300 p-3 rounded-lg bg-slate-800/30"
													>
														<span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-semibold mt-0.5">
															{index + 1}
														</span>
														<span className="leading-relaxed">{feature}</span>
													</motion.div>
												))}
											</div>
										</div>

										{/* Why This Tech Stack */}
										<div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl p-6 border border-blue-500/20">
											<div className="flex items-center gap-3 mb-4">
												<div className="p-2 rounded-lg bg-blue-500/20">
													<Lightbulb className="w-5 h-5 text-blue-400" />
												</div>
												<h3 className="text-2xl font-bold text-white">
													Why This Tech Stack?
												</h3>
											</div>
											<p className="text-slate-300 leading-relaxed text-lg">
												{project.whyTechStack}
											</p>
										</div>

										{/* Challenges & Learnings */}
										<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
											{/* Challenges */}
											<div className="bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-2xl p-6 border border-yellow-500/20">
												<div className="flex items-center gap-3 mb-4">
													<div className="p-2 rounded-lg bg-yellow-500/20">
														<AlertTriangle className="w-5 h-5 text-yellow-400" />
													</div>
													<h3 className="text-2xl font-bold text-white">
														Challenges Faced
													</h3>
												</div>
												<ul className="space-y-3">
													{project.challenges.map((challenge, index) => (
														<motion.li
															key={index}
															initial={{ opacity: 0, x: -20 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ delay: index * 0.1 }}
															className="flex items-start gap-3 text-slate-300"
														>
															<span className="flex-shrink-0 text-yellow-400 text-xl">
																⚠️
															</span>
															<span className="leading-relaxed">
																{challenge}
															</span>
														</motion.li>
													))}
												</ul>
											</div>

											{/* Key Learnings */}
											<div className="bg-gradient-to-br from-teal-500/5 to-cyan-500/5 rounded-2xl p-6 border border-teal-500/20">
												<div className="flex items-center gap-3 mb-4">
													<div className="p-2 rounded-lg bg-teal-500/20">
														<BookOpen className="w-5 h-5 text-teal-400" />
													</div>
													<h3 className="text-2xl font-bold text-white">
														What I Learned
													</h3>
												</div>
												<ul className="space-y-3">
													{project.learnings.map((learning, index) => (
														<motion.li
															key={index}
															initial={{ opacity: 0, x: -20 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ delay: index * 0.1 }}
															className="flex items-start gap-3 text-slate-300"
														>
															<span className="flex-shrink-0 text-teal-400 text-xl">
																✅
															</span>
															<span className="leading-relaxed">
																{learning}
															</span>
														</motion.li>
													))}
												</ul>
											</div>
										</div>

										{/* Future Improvements */}
										<div className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl p-6 border border-purple-500/20">
											<div className="flex items-center gap-3 mb-4">
												<div className="p-2 rounded-lg bg-purple-500/20">
													<TrendingUp className="w-5 h-5 text-purple-400" />
												</div>
												<h3 className="text-2xl font-bold text-white">
													Future Improvements
												</h3>
											</div>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
												{project.futureImprovements.map(
													(improvement, index) => (
														<motion.div
															key={index}
															initial={{ opacity: 0, x: -20 }}
															animate={{ opacity: 1, x: 0 }}
															transition={{ delay: index * 0.1 }}
															className="flex items-start gap-3 text-slate-300 p-3 rounded-lg bg-slate-800/30"
														>
															<span className="flex-shrink-0 text-purple-400 text-xl">
																🚀
															</span>
															<span className="leading-relaxed">
																{improvement}
															</span>
														</motion.div>
													),
												)}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</>
			)}
		</AnimatePresence>
	);
}
