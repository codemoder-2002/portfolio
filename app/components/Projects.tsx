"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
	Braces,
	Calendar,
	Car,
	Download,
	ExternalLink,
	Eye,
	FaYoutube,
	FileText,
	Folder,
	Gamepad2,
	Github,
	Globe,
	GraduationCap,
	Info,
	Lock,
	MessageCircle,
	MessageSquare,
	Shield,
	ShoppingCart,
	Sparkles,
	Users,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { type ProjectData, projectsData } from "@/lib/projects-data";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

// Icon mapping for dynamic icon rendering
const iconMap = {
	ShoppingCart,
	Gamepad2,
	Folder,
	Download,
	GraduationCap,
	FileText,
	Shield,
	Lock,
	MessageSquare,
	MessageCircle,
	Car,
	Globe,
	FaYoutube,
};

// 3D Card effect component
const Card3D = ({ children }: { children: React.ReactNode }) => {
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = e.currentTarget;
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;
		const rotateXValue = (y - centerY) / 10;
		const rotateYValue = (centerX - x) / 10;

		setRotateX(rotateXValue);
		setRotateY(rotateYValue);
	};

	const handleMouseLeave = () => {
		setRotateX(0);
		setRotateY(0);
	};

	return (
		<motion.div
			className="h-full perspective-1000"
			style={{
				transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
				transition: "transform 0.1s ease",
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</motion.div>
	);
};

// Project Card Component
const ProjectCard = ({
	project,
	index,
	onOpenModal,
}: {
	project: ProjectData;
	index: number;
	onOpenModal: (project: ProjectData) => void;
}) => {
	const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Info;

	const colorVariants = {
		indigo:
			"from-indigo-500/10 to-purple-500/10 border-indigo-500/30 hover:border-indigo-500/60",
		teal: "from-teal-500/10 to-cyan-500/10 border-teal-500/30 hover:border-teal-500/60",
		pink: "from-pink-500/10 to-rose-500/10 border-pink-500/30 hover:border-pink-500/60",
		red: "from-red-500/10 to-orange-500/10 border-red-500/30 hover:border-red-500/60",
		yellow:
			"from-yellow-500/10 to-orange-500/10 border-yellow-500/30 hover:border-yellow-500/60",
		orange:
			"from-orange-500/10 to-red-500/10 border-orange-500/30 hover:border-orange-500/60",
	};

	const colorClass =
		colorVariants[project.color as keyof typeof colorVariants] ||
		colorVariants.indigo;

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="h-full group cursor-pointer"
		>
			<Card3D>
				<div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/50 hover:border-slate-600/80 h-full flex flex-col overflow-hidden relative shadow-xl hover:shadow-2xl transition-all duration-500">
					{/* Project Image */}
					<div className="relative h-48 overflow-hidden">
						<div
							className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-20`}
						/>
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

						{/* Placeholder for project image */}
						<div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
							<motion.div
								className="p-6 rounded-2xl bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 group-hover:scale-110 transition-transform duration-300"
								whileHover={{ rotate: [0, -5, 5, -5, 0] }}
								transition={{ duration: 0.6 }}
							>
								<IconComponent
									className={`w-16 h-16 text-${project.color}-400`}
								/>
							</motion.div>

							{/* Status Badge */}
							<div className="absolute top-4 right-4 px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm rounded-full text-xs border border-slate-700/50">
								<span
									className={`inline-block w-2 h-2 rounded-full mr-2 ${
										project.status === "Completed"
											? "bg-green-400"
											: project.status === "In Progress"
												? "bg-yellow-400"
												: "bg-blue-400"
									}`}
								></span>
								<span className="text-slate-300">{project.status}</span>
							</div>
						</div>
					</div>

					{/* Featured Badge */}
					{project.featured && (
						<div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-sm rounded-full text-xs text-indigo-200 flex items-center gap-1.5 border border-indigo-400/40 shadow-lg">
							<Sparkles className="w-3.5 h-3.5" />
							<span className="font-semibold">Featured</span>
						</div>
					)}

					{/* Content */}
					<div className="p-6 flex-1 flex flex-col relative z-10">
						{/* Header */}
						<div className="flex items-start justify-between mb-3">
							<h3 className="text-xl font-bold text-white font-display group-hover:text-indigo-200 transition-colors leading-tight">
								{project.title}
							</h3>
							<div className="flex items-center gap-1 text-xs text-slate-400 ml-4">
								<Calendar className="w-3 h-3" />
								<span>{project.year}</span>
							</div>
						</div>

						<p className="text-slate-300 mb-4 leading-relaxed group-hover:text-slate-200 transition-colors line-clamp-3">
							{project.description}
						</p>

						{/* Tech Stack Pills */}
						<div className="flex flex-wrap gap-2 mb-4">
							{project.techStack.slice(0, 4).map((tech) => (
								<span
									key={tech}
									className="inline-block bg-slate-800/90 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700/50 hover:border-indigo-500/30 hover:bg-slate-700/90 transition-all"
								>
									{tech}
								</span>
							))}
							{project.techStack.length > 4 && (
								<span className="inline-block bg-slate-700/50 text-slate-400 px-3 py-1 rounded-full text-xs border border-slate-600/50">
									+{project.techStack.length - 4} more
								</span>
							)}
						</div>

						{/* Project Metrics */}
						<div className="flex items-center gap-4 mb-4 text-xs text-slate-400">
							<div className="flex items-center gap-1">
								<Users className="w-3 h-3" />
								<span>{project.teamSize}</span>
							</div>
							<div className="flex items-center gap-1">
								<Calendar className="w-3 h-3" />
								<span>{project.developmentTime}</span>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex items-center gap-3 mt-auto">
							<button
								onClick={() => onOpenModal(project)}
								className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-4 py-2.5 rounded-xl transition-all duration-300 text-center font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 flex items-center justify-center gap-2"
							>
								<Eye className="w-4 h-4" />
								View Details
							</button>

							{(project.web || project.github) && (
								<div className="flex gap-2">
									{project.web && (
										<Link
											href={project.web}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="p-2.5 bg-slate-800 text-white border border-indigo-500/30 hover:bg-slate-700 hover:border-indigo-500/50 rounded-xl transition-all duration-300"
										>
											<ExternalLink className="w-4 h-4" />
										</Link>
									)}
									{project.github && (
										<Link
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(e) => e.stopPropagation()}
											className="p-2.5 bg-slate-800 text-white border border-indigo-500/30 hover:bg-slate-700 hover:border-indigo-500/50 rounded-xl transition-all duration-300"
										>
											<Github className="w-4 h-4" />
										</Link>
									)}
								</div>
							)}
						</div>
					</div>

					{/* Hover Gradient Overlay */}
					<div
						className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-all duration-500 pointer-events-none`}
					/>
				</div>
			</Card3D>
		</motion.div>
	);
};

export default function Projects() {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
		null,
	);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const categories = [
		{ id: "Web Apps", label: "Web Apps", icon: <Globe className="w-4 h-4" /> },
		{ id: "Tools", label: "Tools", icon: <Braces className="w-4 h-4" /> },
		{
			id: "Blockchain",
			label: "Blockchain",
			icon: <Shield className="w-4 h-4" />,
		},
		{
			id: "Mobile Apps",
			label: "Mobile Apps",
			icon: <Car className="w-4 h-4" />,
		},
	];

	const openProjectModal = (project: ProjectData) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeProjectModal = () => {
		setIsModalOpen(false);
		setTimeout(() => setSelectedProject(null), 300);
	};

	const filteredProjects = activeCategory
		? projectsData.filter((project) => project.category === activeCategory)
		: projectsData;

	return (
		<>
			<section
				id="projects"
				className="py-20 relative overflow-hidden bg-slate-950"
			>
				{/* Background elements */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-slate-900 to-slate-950 z-0"></div>

				{/* Animated Grid Pattern */}
				<div className="absolute inset-0 opacity-5">
					<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern
								id="grid-pattern"
								width="40"
								height="40"
								patternUnits="userSpaceOnUse"
							>
								<path
									d="M 40 0 L 0 0 0 40"
									fill="none"
									stroke="currentColor"
									strokeWidth="0.5"
								/>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#grid-pattern)" />
					</svg>
				</div>

				{/* Floating Elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
				</div>

				<div className="container mx-auto px-6 relative z-10">
					<SectionHeading
						title="Featured Projects"
						subtitle="Explore my portfolio of innovative solutions, from e-commerce platforms to blockchain applications"
					/>

					{/* Stats Bar */}
					<motion.div
						className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<div className="text-center">
							<div className="text-3xl font-bold text-indigo-400 mb-1">
								{projectsData.length}+
							</div>
							<div className="text-sm text-slate-400">Projects</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-purple-400 mb-1">
								{new Set(projectsData.flatMap((p) => p.techStack)).size}+
							</div>
							<div className="text-sm text-slate-400">Technologies</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-teal-400 mb-1">
								{projectsData.filter((p) => p.featured).length}
							</div>
							<div className="text-sm text-slate-400">Featured</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-pink-400 mb-1">2024</div>
							<div className="text-sm text-slate-400">Latest Year</div>
						</div>
					</motion.div>

					{/* Category filters */}
					<motion.div
						className="flex flex-wrap justify-center gap-4 mb-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<button
							type="button"
							onClick={() => setActiveCategory(null)}
							className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-medium ${
								activeCategory === null
									? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
									: "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-indigo-500/30"
							}`}
						>
							<Sparkles className="w-4 h-4" />
							<span>All Projects ({projectsData.length})</span>
						</button>

						{categories.map((category) => {
							const count = projectsData.filter(
								(p) => p.category === category.id,
							).length;
							if (count === 0) return null;

							return (
								<button
									type="button"
									key={category.id}
									onClick={() => setActiveCategory(category.id)}
									className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-medium ${
										activeCategory === category.id
											? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
											: "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-indigo-500/30"
									}`}
								>
									{category.icon}
									<span>
										{category.label} ({count})
									</span>
								</button>
							);
						})}
					</motion.div>

					{/* Projects grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<AnimatePresence mode="wait">
							{filteredProjects.map((project, index) => (
								<ProjectCard
									key={project.id}
									project={project}
									index={index}
									onOpenModal={openProjectModal}
								/>
							))}
						</AnimatePresence>
					</div>

					{/* No projects message */}
					{filteredProjects.length === 0 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-center py-16"
						>
							<div className="text-6xl mb-4">🔍</div>
							<h3 className="text-xl font-bold text-slate-300 mb-2">
								No Projects Found
							</h3>
							<p className="text-slate-400">
								Try selecting a different category or check back later.
							</p>
						</motion.div>
					)}
				</div>
			</section>

			{/* Project Modal */}
			<ProjectModal
				project={selectedProject}
				isOpen={isModalOpen}
				onClose={closeProjectModal}
			/>
		</>
	);
}
