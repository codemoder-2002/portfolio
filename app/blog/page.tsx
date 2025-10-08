"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	BookOpen,
	Calendar,
	Filter,
	Search,
	Tag,
	TrendingUp,
} from "lucide-react";
import { useMemo, useState } from "react";
import {
	type BlogPost,
	blogPosts,
	getBlogCategories,
	getBlogTags,
} from "@/lib/blog-data";
import BlogCard from "../components/BlogCard";

export default function BlogPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
	const [selectedTag, setSelectedTag] = useState<string | null>(null);

	const categories = getBlogCategories();
	const tags = getBlogTags();

	const filteredPosts = useMemo(() => {
		return blogPosts.filter((post) => {
			if (!post.published) return false;

			const matchesSearch =
				searchTerm === "" ||
				post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

			const matchesCategory =
				selectedCategory === null || post.category === selectedCategory;

			const matchesTag =
				selectedTag === null || post.tags.includes(selectedTag);

			return matchesSearch && matchesCategory && matchesTag;
		});
	}, [searchTerm, selectedCategory, selectedTag]);

	const clearFilters = () => {
		setSearchTerm("");
		setSelectedCategory(null);
		setSelectedTag(null);
	};

	return (
		<div className="min-h-screen bg-slate-950">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950"></div>

			{/* Grid Pattern */}
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
				<div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
			</div>

			<div className="relative z-10 pt-32 pb-20">
				<div className="container mx-auto px-6">
					{/* Page Header */}
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
							<BookOpen className="w-10 h-10 text-indigo-400" />
						</div>

						<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
							Blog & Articles
						</h1>

						<p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
							Explore in-depth articles about web development, software
							engineering, technology trends, and programming best practices.
							Learn from real-world experiences and stay ahead of the curve.
						</p>

						{/* Stats */}
						<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
							<div className="text-center">
								<div className="text-3xl font-bold text-indigo-400 mb-1">
									{blogPosts.filter((p) => p.published).length}+
								</div>
								<div className="text-sm text-slate-400">Articles</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-purple-400 mb-1">
									{categories.length}
								</div>
								<div className="text-sm text-slate-400">Categories</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-teal-400 mb-1">
									{tags.length}
								</div>
								<div className="text-sm text-slate-400">Topics</div>
							</div>
							<div className="text-center">
								<div className="text-3xl font-bold text-pink-400 mb-1">
									2024
								</div>
								<div className="text-sm text-slate-400">Latest</div>
							</div>
						</div>
					</motion.div>

					{/* Coming Soon State */}
					{blogPosts.filter((p) => p.published).length === 0 && (
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-center py-20"
						>
							<div className="mb-8">
								<div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
									<BookOpen className="w-16 h-16 text-indigo-400" />
								</div>
							</div>

							<h2 className="text-4xl font-bold text-white mb-6">
								Content Coming Soon!
							</h2>

							<p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
								I'm currently working on creating high-quality content covering
								modern web development, software architecture, and technology
								insights. The blog will feature detailed tutorials, project
								breakdowns, and industry analysis.
							</p>

							{/* Planned Content Categories */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
								<div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
									<div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto">
										<BookOpen className="w-6 h-6 text-indigo-400" />
									</div>
									<h3 className="text-lg font-semibold text-white mb-3">
										Technical Deep Dives
									</h3>
									<p className="text-sm text-slate-400 leading-relaxed">
										Comprehensive guides on React, Next.js, TypeScript, and
										modern web development patterns with real-world examples.
									</p>
								</div>

								<div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
									<div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
										<TrendingUp className="w-6 h-6 text-purple-400" />
									</div>
									<h3 className="text-lg font-semibold text-white mb-3">
										Project Case Studies
									</h3>
									<p className="text-sm text-slate-400 leading-relaxed">
										Behind-the-scenes looks at my projects, architectural
										decisions, challenges faced, and lessons learned.
									</p>
								</div>

								<div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
									<div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4 mx-auto">
										<Calendar className="w-6 h-6 text-teal-400" />
									</div>
									<h3 className="text-lg font-semibold text-white mb-3">
										Industry Insights
									</h3>
									<p className="text-sm text-slate-400 leading-relaxed">
										Analysis of web development trends, new technologies, and
										their impact on the software development landscape.
									</p>
								</div>
							</div>

							{/* Newsletter Signup */}
							<div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 border border-indigo-500/20 max-w-2xl mx-auto">
								<h3 className="text-2xl font-bold text-white mb-4">
									Get Notified
								</h3>
								<p className="text-slate-300 mb-6">
									Be the first to know when new articles are published.
								</p>
								<div className="flex flex-col sm:flex-row gap-3">
									<input
										type="email"
										placeholder="Enter your email address"
										className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
									/>
									<button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold whitespace-nowrap">
										Subscribe
									</button>
								</div>
							</div>
						</motion.div>
					)}

					{/* Blog Content - When posts are available */}
					{blogPosts.filter((p) => p.published).length > 0 && (
						<>
							{/* Search and Filters */}
							<motion.div
								className="mb-12"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								{/* Search Bar */}
								<div className="relative mb-8">
									<Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
									<input
										type="text"
										placeholder="Search articles..."
										value={searchTerm}
										onChange={(e) => setSearchTerm(e.target.value)}
										className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
									/>
								</div>

								{/* Filters */}
								<div className="flex flex-wrap gap-4 items-center justify-between mb-6">
									<div className="flex flex-wrap gap-4">
										{/* Categories */}
										<div className="flex flex-wrap gap-2">
											<button
												onClick={() => setSelectedCategory(null)}
												className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
													selectedCategory === null
														? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
														: "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700"
												}`}
											>
												All Categories
											</button>
											{categories.map((category) => (
												<button
													key={category}
													onClick={() => setSelectedCategory(category)}
													className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
														selectedCategory === category
															? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
															: "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700"
													}`}
												>
													{category}
												</button>
											))}
										</div>
									</div>

									{/* Clear Filters */}
									{(searchTerm || selectedCategory || selectedTag) && (
										<button
											onClick={clearFilters}
											className="flex items-center gap-2 px-4 py-2 text-slate-400 hover:text-white transition-colors text-sm"
										>
											<Filter className="w-4 h-4" />
											Clear Filters
										</button>
									)}
								</div>

								{/* Tags */}
								{tags.length > 0 && (
									<div className="flex flex-wrap gap-2 mb-6">
										<span className="text-sm text-slate-400 mr-2">Tags:</span>
										{tags.map((tag) => (
											<button
												key={tag}
												onClick={() =>
													setSelectedTag(selectedTag === tag ? null : tag)
												}
												className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
													selectedTag === tag
														? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
														: "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 border border-slate-700/50"
												}`}
											>
												<Tag className="w-3 h-3 inline mr-1" />
												{tag}
											</button>
										))}
									</div>
								)}
							</motion.div>

							{/* Results Count */}
							<motion.div
								className="flex items-center justify-between mb-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<p className="text-slate-400">
									{filteredPosts.length === 0
										? "No articles found"
										: `${filteredPosts.length} article${
												filteredPosts.length === 1 ? "" : "s"
											} found`}
								</p>

								{filteredPosts.length > 0 && (
									<div className="text-sm text-slate-400">
										Sorted by most recent
									</div>
								)}
							</motion.div>

							{/* Blog Posts Grid */}
							{filteredPosts.length > 0 ? (
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
									{filteredPosts.map((post, index) => (
										<BlogCard key={post.id} post={post} index={index} />
									))}
								</div>
							) : (
								<motion.div
									className="text-center py-16"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.4 }}
								>
									<div className="text-6xl mb-4">🔍</div>
									<h3 className="text-xl font-bold text-slate-300 mb-2">
										No Articles Found
									</h3>
									<p className="text-slate-400 mb-6">
										Try adjusting your search terms or filters.
									</p>
									<button
										onClick={clearFilters}
										className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition-all duration-300 font-semibold"
									>
										<span>Clear All Filters</span>
										<ArrowRight className="w-4 h-4" />
									</button>
								</motion.div>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
