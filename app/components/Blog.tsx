"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	BookOpen,
	Calendar,
	Code,
	Rss,
	TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { getFeaturedBlogPosts, getRecentBlogPosts } from "@/lib/blog-data";
import BlogCard from "./BlogCard";
import SectionHeading from "./SectionHeading";

export default function Blog() {
	const featuredPosts = getFeaturedBlogPosts();
	const recentPosts = getRecentBlogPosts(4);
	const displayPosts = featuredPosts
		.slice(0, 1)
		.concat(recentPosts.filter((post) => !post.featured).slice(0, 3));

	return (
		<section id="blog" className="py-20 relative overflow-hidden bg-slate-950">
			{/* Background elements */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-slate-900 to-slate-950 z-0"></div>

			{/* Animated Grid Pattern */}
			<div className="absolute inset-0 opacity-5">
				<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<pattern
							id="blog-grid-pattern"
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
					<rect width="100%" height="100%" fill="url(#blog-grid-pattern)" />
				</svg>
			</div>

			{/* Floating Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-16">
					<SectionHeading
						title="Latest Blog Posts"
						subtitle="Insights, tutorials, and thoughts on web development, technology trends, and software engineering"
					/>

					{/* Blog Stats */}
					<motion.div
						className="flex justify-center items-center gap-8 mt-8 text-sm text-slate-400"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="flex items-center gap-2">
							<BookOpen className="w-4 h-4 text-indigo-400" />
							<span>{recentPosts.length}+ Articles</span>
						</div>
						<div className="flex items-center gap-2">
							<TrendingUp className="w-4 h-4 text-purple-400" />
							<span>Weekly Updates</span>
						</div>
						<div className="flex items-center gap-2">
							<Rss className="w-4 h-4 text-teal-400" />
							<span>RSS Available</span>
						</div>
					</motion.div>
				</div>

				{/* Coming Soon State */}
				{displayPosts.length === 0 && (
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="text-center py-20"
					>
						<div className="mb-8">
							<div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
								<BookOpen className="w-16 h-16 text-indigo-400" />
							</div>
						</div>

						<h3 className="text-3xl font-bold text-white mb-4">
							Blog Coming Soon!
						</h3>

						<p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
							I'm working on creating insightful content about web development,
							software engineering best practices, and the latest technology
							trends. Stay tuned for regular updates!
						</p>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
							<div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
								<div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4 mx-auto">
									<Code className="w-6 h-6 text-indigo-400" />
								</div>
								<h4 className="font-semibold text-white mb-2">
									Technical Tutorials
								</h4>
								<p className="text-sm text-slate-400">
									Step-by-step guides on modern web technologies
								</p>
							</div>

							<div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
								<div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 mx-auto">
									<TrendingUp className="w-6 h-6 text-purple-400" />
								</div>
								<h4 className="font-semibold text-white mb-2">
									Industry Insights
								</h4>
								<p className="text-sm text-slate-400">
									Analysis of trends and future of web development
								</p>
							</div>

							<div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
								<div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4 mx-auto">
									<BookOpen className="w-6 h-6 text-teal-400" />
								</div>
								<h4 className="font-semibold text-white mb-2">
									Learning Resources
								</h4>
								<p className="text-sm text-slate-400">
									Curated resources for developers at all levels
								</p>
							</div>
						</div>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/blog"
								className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 font-semibold"
							>
								<span>Visit Blog Page</span>
								<ArrowRight className="w-5 h-5" />
							</Link>

							<Link
								href="#contact"
								className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all duration-300 border border-slate-700 hover:border-slate-600 font-semibold"
							>
								<span>Get Notified</span>
								<Calendar className="w-5 h-5" />
							</Link>
						</div>
					</motion.div>
				)}

				{/* Blog Posts Grid - When posts are available */}
				{displayPosts.length > 0 && (
					<>
						<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
							{displayPosts.map((post, index) => (
								<BlogCard
									key={post.id}
									post={post}
									index={index}
									featured={post.featured && index === 0}
								/>
							))}
						</div>

						{/* View All Button */}
						<motion.div
							className="text-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Link
								href="/blog"
								className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 font-semibold group"
							>
								<span>View All Blog Posts</span>
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</Link>
						</motion.div>
					</>
				)}

				{/* Newsletter Signup */}
				<motion.div
					className="mt-16 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-3xl p-8 border border-indigo-500/20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<div className="text-center">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
							<Rss className="w-8 h-8 text-indigo-400" />
						</div>

						<h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>

						<p className="text-slate-300 mb-6 max-w-2xl mx-auto">
							Get notified when I publish new articles about web development,
							technology trends, and software engineering insights.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
							/>
							<button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 font-semibold whitespace-nowrap">
								Subscribe
							</button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
