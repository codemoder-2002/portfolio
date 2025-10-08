"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface BlogCardProps {
	post: BlogPost;
	index: number;
	featured?: boolean;
}

export default function BlogCard({
	post,
	index,
	featured = false,
}: BlogCardProps) {
	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: index * 0.1 },
		},
	};

	if (featured) {
		return (
			<motion.article
				variants={cardVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				className="group relative bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-md rounded-3xl border border-slate-700/50 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 lg:col-span-2 lg:row-span-2"
			>
				{/* Featured Badge */}
				<div className="absolute top-6 left-6 z-10 px-4 py-2 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-sm rounded-full text-sm text-indigo-200 flex items-center gap-2 border border-indigo-400/40 shadow-lg">
					<span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
					<span className="font-semibold">Featured Post</span>
				</div>

				{/* Image */}
				<div className="relative h-72 lg:h-96 overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10"></div>
					{/* Placeholder for blog image */}
					<div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
						<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
						<div className="text-center">
							<div className="text-8xl mb-4 opacity-20">📝</div>
							<div className="text-slate-400">Featured Blog Post</div>
						</div>
					</div>

					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
				</div>

				{/* Content */}
				<div className="p-8 lg:p-10">
					{/* Category */}
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-4 border border-indigo-500/30">
						<Tag className="w-3 h-3" />
						{post.category}
					</div>

					{/* Title */}
					<h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors leading-tight">
						{post.title}
					</h2>

					{/* Excerpt */}
					<p className="text-slate-300 text-lg leading-relaxed mb-6 line-clamp-3">
						{post.excerpt}
					</p>

					{/* Meta Info */}
					<div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
						<div className="flex items-center gap-2">
							<User className="w-4 h-4" />
							<span>{post.author.name}</span>
						</div>
						<div className="flex items-center gap-2">
							<Calendar className="w-4 h-4" />
							<span>{formatDate(post.publishedAt)}</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock className="w-4 h-4" />
							<span>{post.readTime}</span>
						</div>
					</div>

					{/* Tags */}
					<div className="flex flex-wrap gap-2 mb-6">
						{post.tags.slice(0, 4).map((tag) => (
							<span
								key={tag}
								className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs border border-slate-700/50"
							>
								{tag}
							</span>
						))}
						{post.tags.length > 4 && (
							<span className="px-3 py-1 bg-slate-700/50 text-slate-400 rounded-full text-xs border border-slate-600/50">
								+{post.tags.length - 4} more
							</span>
						)}
					</div>

					{/* Read More Button */}
					<Link
						href={`/blog/${post.slug}`}
						className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 font-semibold"
					>
						<span>Read Full Article</span>
						<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>

				{/* Hover Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
			</motion.article>
		);
	}

	return (
		<motion.article
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="group bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col"
		>
			{/* Image */}
			<div className="relative h-48 overflow-hidden">
				{/* Placeholder for blog image */}
				<div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
					<div className="text-4xl opacity-20">📄</div>
				</div>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
			</div>

			{/* Content */}
			<div className="p-6 flex-1 flex flex-col">
				{/* Category */}
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 text-xs font-medium mb-3 border border-slate-700/50 w-fit">
					<Tag className="w-3 h-3" />
					{post.category}
				</div>

				{/* Title */}
				<h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors leading-tight line-clamp-2">
					{post.title}
				</h3>

				{/* Excerpt */}
				<p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
					{post.excerpt}
				</p>

				{/* Meta Info */}
				<div className="flex items-center justify-between text-xs text-slate-400 mb-4">
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-1">
							<Calendar className="w-3 h-3" />
							<span>{formatDate(post.publishedAt)}</span>
						</div>
						<div className="flex items-center gap-1">
							<Clock className="w-3 h-3" />
							<span>{post.readTime}</span>
						</div>
					</div>
				</div>

				{/* Tags */}
				<div className="flex flex-wrap gap-1 mb-4">
					{post.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="px-2 py-1 bg-slate-800/50 text-slate-400 rounded text-xs border border-slate-700/50"
						>
							{tag}
						</span>
					))}
					{post.tags.length > 3 && (
						<span className="px-2 py-1 bg-slate-700/50 text-slate-500 rounded text-xs border border-slate-600/50">
							+{post.tags.length - 3}
						</span>
					)}
				</div>

				{/* Read More Button */}
				<Link
					href={`/blog/${post.slug}`}
					className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors group/link mt-auto"
				>
					<span>Read More</span>
					<ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
				</Link>
			</div>

			{/* Hover Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/3 group-hover:to-purple-500/3 transition-all duration-500 pointer-events-none" />
		</motion.article>
	);
}
