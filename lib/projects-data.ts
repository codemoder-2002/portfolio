export interface ProjectData {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	images: string[];
	techStack: string[];
	tools: string[];
	features: string[];
	problemSolved: string;
	whyTechStack: string;
	challenges: string[];
	learnings: string[];
	futureImprovements: string[];
	developmentTime: string;
	teamSize: string;
	myRole: string;
	web?: string;
	github?: string;
	category: "Web Apps" | "Mobile Apps" | "Tools" | "Blockchain" | "AI/ML";
	featured: boolean;
	status: "Completed" | "In Progress" | "Maintained";
	year: number;
	icon: string; // icon name for lucide icons
	color: string; // theme color for the project
}

export const projectsData: ProjectData[] = [
	{
		id: "cardexia-ecommerce",
		title: "Cardexia E-commerce",
		description:
			"High-performance e-commerce platform with sales analytics, cart operations, and optimized user experience.",
		longDescription:
			"Cardexia is a comprehensive e-commerce platform designed to provide seamless shopping experiences with advanced analytics and performance optimization. The platform features real-time inventory management, sophisticated cart operations, and detailed sales analytics for business insights.",
		image: "/projects/cardexia-hero.jpg",
		images: [
			"/projects/cardexia-hero.jpg",
			"/projects/cardexia-dashboard.jpg",
			"/projects/cardexia-cart.jpg",
			"/projects/cardexia-analytics.jpg",
		],
		techStack: [
			"Next.js",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"React Query",
			"TurboRepo",
			"Tailwind CSS",
			"Stripe",
		],
		tools: ["Vercel", "Docker", "Figma", "PostHog", "Sentry", "GitHub Actions"],
		features: [
			"Real-time inventory management with low-stock alerts",
			"Advanced cart operations with save-for-later functionality",
			"Comprehensive sales analytics dashboard with visual charts",
			"Multi-payment gateway integration (Stripe, PayPal)",
			"Responsive design optimized for all devices",
			"SEO-optimized product pages with dynamic metadata",
			"User authentication with social login options",
			"Admin panel for product and order management",
			"Email notifications for order updates",
			"Advanced search and filtering capabilities",
		],
		problemSolved:
			"Traditional e-commerce platforms often struggle with performance issues, poor user experience, and lack of comprehensive analytics. Cardexia solves these problems by providing a lightning-fast shopping experience with real-time data insights, helping businesses make informed decisions while providing customers with a smooth purchasing journey.",
		whyTechStack:
			"I chose Next.js for its excellent SEO capabilities and server-side rendering, crucial for e-commerce. Prisma with PostgreSQL ensures type-safe database operations and excellent performance. TurboRepo enables efficient monorepo management, while React Query handles complex state management and caching for optimal user experience.",
		challenges: [
			"Implementing real-time inventory updates across multiple users",
			"Optimizing database queries for large product catalogs",
			"Handling complex cart state management with persistence",
			"Ensuring secure payment processing and PCI compliance",
			"Creating responsive design that works across all devices",
		],
		learnings: [
			"Advanced state management with React Query and Zustand",
			"Database optimization techniques for e-commerce applications",
			"Payment gateway integration and security best practices",
			"Performance optimization for large-scale React applications",
			"Monorepo architecture and deployment strategies",
		],
		futureImprovements: [
			"AI-powered product recommendations",
			"Advanced analytics with machine learning insights",
			"Multi-vendor marketplace functionality",
			"Mobile app development with React Native",
			"Integration with external inventory management systems",
		],
		developmentTime: "3 months",
		teamSize: "Solo project",
		myRole: "Full Stack Developer & UI/UX Designer",
		web: "https://cardexia-ebon.vercel.app",
		github: "",
		category: "Web Apps",
		featured: true,
		status: "Completed",
		year: 2024,
		icon: "ShoppingCart",
		color: "indigo",
	},
	{
		id: "bingo-game",
		title: "Realtime Bingo Game",
		description:
			"Multiplayer Bingo game with real-time updates, live chat, and competitive gameplay features.",
		longDescription:
			"An engaging multiplayer Bingo game that brings the classic experience online with modern real-time features. Players can join rooms, compete with others, and enjoy seamless gameplay with instant updates and interactive chat functionality.",
		image: "/projects/bingo-hero.jpg",
		images: [
			"/projects/bingo-hero.jpg",
			"/projects/bingo-gameplay.jpg",
			"/projects/bingo-lobby.jpg",
			"/projects/bingo-leaderboard.jpg",
		],
		techStack: [
			"Next.js",
			"TypeScript",
			"Pusher",
			"Tailwind CSS",
			"React",
			"Node.js",
		],
		tools: ["Pusher Channels", "Vercel", "Figma", "ESLint", "Prettier"],
		features: [
			"Real-time multiplayer gameplay with instant synchronization",
			"Live chat system for player interaction",
			"Automated number calling with customizable speed",
			"Multiple game modes (Traditional, Speed Bingo, Pattern Bingo)",
			"Player statistics and leaderboards",
			"Room creation and management system",
			"Responsive design for desktop and mobile",
			"Sound effects and visual feedback",
			"Spectator mode for non-playing users",
			"Game history and replay functionality",
		],
		problemSolved:
			"Traditional Bingo games lack the convenience and social interaction of online platforms. This project solves the problem by providing a fully digital Bingo experience that maintains the social aspect through real-time chat and competitive features, while adding modern conveniences like automated gameplay and statistics tracking.",
		whyTechStack:
			"Next.js provides excellent performance and SEO capabilities. Pusher enables real-time communication essential for multiplayer games, ensuring all players see updates simultaneously. TypeScript ensures code reliability in the complex game state management, while Tailwind CSS allows for rapid UI development with consistent design.",
		challenges: [
			"Ensuring perfect synchronization across all players",
			"Managing complex game state with multiple concurrent games",
			"Implementing fair and random number generation",
			"Handling connection drops and reconnection logic",
			"Creating intuitive UI for different screen sizes",
		],
		learnings: [
			"Real-time application architecture with WebSocket alternatives",
			"Complex state management in multiplayer environments",
			"Game logic implementation and fairness algorithms",
			"User experience design for competitive applications",
			"Performance optimization for real-time updates",
		],
		futureImprovements: [
			"Tournament mode with brackets and prizes",
			"Custom Bingo card themes and designs",
			"Voice chat integration during gameplay",
			"Mobile app version with push notifications",
			"Integration with streaming platforms for events",
		],
		developmentTime: "6 weeks",
		teamSize: "Solo project",
		myRole: "Full Stack Developer & Game Designer",
		web: "",
		github: "",
		category: "Tools",
		featured: false,
		status: "Completed",
		year: 2024,
		icon: "Gamepad2",
		color: "teal",
	},
	{
		id: "record-management-system",
		title: "Record Management System",
		description:
			"Comprehensive system for managing user profiles and purchase history for a diamond store.",
		longDescription:
			"A sophisticated record management system designed specifically for luxury diamond retail. The system handles customer profiles, purchase history, inventory tracking, and provides detailed analytics for business intelligence and customer relationship management.",
		image: "/projects/rms-hero.jpg",
		images: [
			"/projects/rms-hero.jpg",
			"/projects/rms-customer.jpg",
			"/projects/rms-inventory.jpg",
			"/projects/rms-analytics.jpg",
		],
		techStack: [
			"Nest.js",
			"Next.js",
			"React Native",
			"MongoDB",
			"Redis",
			"TypeScript",
			"JWT",
		],
		tools: [
			"Docker",
			"MongoDB Atlas",
			"Redis Cloud",
			"Expo",
			"Postman",
			"GitHub Actions",
		],
		features: [
			"Comprehensive customer profile management with purchase history",
			"Advanced inventory tracking with serial numbers and certificates",
			"Multi-platform access (Web, iOS, Android)",
			"Real-time notifications for important updates",
			"Detailed analytics and reporting dashboard",
			"Secure authentication with role-based access control",
			"Document management for certificates and invoices",
			"Advanced search and filtering across all records",
			"Automated backup and data recovery systems",
			"Integration with payment processing systems",
		],
		problemSolved:
			"Diamond retail businesses often struggle with managing complex customer relationships, tracking high-value inventory, and maintaining detailed records for compliance. This system provides a centralized solution that ensures data integrity, improves customer service, and provides valuable business insights for strategic decision-making.",
		whyTechStack:
			"Nest.js provides a robust, scalable backend architecture with excellent TypeScript integration. Next.js offers optimal performance for the web interface, while React Native ensures consistent mobile experience. MongoDB handles complex, varied data structures efficiently, and Redis provides fast caching for improved performance.",
		challenges: [
			"Ensuring data security for high-value transactions",
			"Implementing complex search across multiple data types",
			"Synchronizing data between web and mobile platforms",
			"Managing large file uploads for certificates and images",
			"Creating intuitive interface for non-technical users",
		],
		learnings: [
			"Enterprise-level application architecture and security",
			"Cross-platform development strategies",
			"Database design for complex business requirements",
			"File management and cloud storage integration",
			"User experience design for business applications",
		],
		futureImprovements: [
			"AI-powered customer insights and recommendations",
			"Integration with external appraisal services",
			"Advanced reporting with custom dashboard creation",
			"Blockchain integration for authenticity verification",
			"Machine learning for inventory optimization",
		],
		developmentTime: "4 months",
		teamSize: "2 developers",
		myRole: "Lead Full Stack Developer",
		web: "",
		github: "",
		category: "Web Apps",
		featured: false,
		status: "Maintained",
		year: 2023,
		icon: "Folder",
		color: "pink",
	},
	{
		id: "media-downloader",
		title: "Universal Media Downloader",
		description:
			"Download media from YouTube and social platforms using advanced scraping APIs and processing.",
		longDescription:
			"A powerful media downloading tool that supports multiple platforms including YouTube, Instagram, TikTok, and more. The application uses advanced scraping techniques and provides high-quality downloads with format options, while maintaining user privacy and respecting platform policies.",
		image: "/projects/downloader-hero.jpg",
		images: [
			"/projects/downloader-hero.jpg",
			"/projects/downloader-interface.jpg",
			"/projects/downloader-progress.jpg",
			"/projects/downloader-history.jpg",
		],
		techStack: [
			"Next.js",
			"TypeScript",
			"Redis",
			"Tailwind CSS",
			"Node.js",
			"FFmpeg",
		],
		tools: [
			"Vercel",
			"Redis Cloud",
			"YouTube-dl",
			"FFmpeg",
			"Sharp",
			"Puppeteer",
		],
		features: [
			"Support for multiple platforms (YouTube, Instagram, TikTok, Twitter)",
			"Multiple quality and format options (MP4, MP3, WebM)",
			"Batch download capabilities for playlists",
			"Real-time download progress tracking",
			"Download history and management",
			"Metadata extraction and preservation",
			"Thumbnail generation and preview",
			"Rate limiting and queue management",
			"Mobile-responsive design",
			"Privacy-focused with no data storage",
		],
		problemSolved:
			"Users often need to download media content for offline viewing or backup purposes but face limitations with platform restrictions and quality options. This tool provides a unified solution that respects platform policies while offering users the flexibility to access content in their preferred formats and quality.",
		whyTechStack:
			"Next.js provides excellent performance for the web interface with API routes for backend processing. Redis handles queue management and caching for efficient processing. TypeScript ensures reliable code for complex media processing operations, while Tailwind CSS enables rapid development of a responsive interface.",
		challenges: [
			"Handling frequent API changes from platforms",
			"Managing server resources for concurrent downloads",
			"Implementing efficient queue system for batch processing",
			"Ensuring compliance with platform terms of service",
			"Optimizing download speeds while maintaining quality",
		],
		learnings: [
			"Advanced web scraping techniques and best practices",
			"Media processing and format conversion",
			"Queue management and background job processing",
			"Rate limiting and resource optimization",
			"Legal considerations in media downloading applications",
		],
		futureImprovements: [
			"Browser extension for one-click downloads",
			"AI-powered content analysis and tagging",
			"Cloud storage integration for direct uploads",
			"Advanced scheduling and automation features",
			"Support for live stream recording",
		],
		developmentTime: "8 weeks",
		teamSize: "Solo project",
		myRole: "Full Stack Developer",
		web: "",
		github: "",
		category: "Tools",
		featured: false,
		status: "Completed",
		year: 2024,
		icon: "Download",
		color: "red",
	},
	{
		id: "patient-blockchain",
		title: "Patient Data on Blockchain",
		description:
			"Decentralized storage and control of patient records using smart contracts and blockchain technology.",
		longDescription:
			"A revolutionary healthcare data management system built on blockchain technology that gives patients complete control over their medical records. The system ensures data privacy, enables secure sharing with healthcare providers, and maintains an immutable audit trail of all data access.",
		image: "/projects/blockchain-hero.jpg",
		images: [
			"/projects/blockchain-hero.jpg",
			"/projects/blockchain-dashboard.jpg",
			"/projects/blockchain-smart-contract.jpg",
			"/projects/blockchain-sharing.jpg",
		],
		techStack: [
			"Solidity",
			"Ethereum",
			"React.js",
			"Web3.js",
			"Node.js",
			"IPFS",
			"MetaMask",
		],
		tools: [
			"Hardhat",
			"Ganache",
			"Remix IDE",
			"OpenZeppelin",
			"Infura",
			"Pinata",
		],
		features: [
			"Decentralized storage of medical records on IPFS",
			"Smart contract-based access control and permissions",
			"Patient-controlled data sharing with healthcare providers",
			"Immutable audit trail of all data access attempts",
			"Integration with existing healthcare systems via APIs",
			"Multi-signature approval for critical data changes",
			"Encrypted data transmission and storage",
			"Role-based access for different healthcare stakeholders",
			"Emergency access protocols for critical situations",
			"Compliance with healthcare data protection regulations",
		],
		problemSolved:
			"Traditional healthcare systems suffer from data silos, lack of patient control, and security vulnerabilities. This blockchain solution addresses these issues by providing patients with complete ownership of their data while enabling secure, permissioned access for healthcare providers, ultimately improving care coordination and patient privacy.",
		whyTechStack:
			"Ethereum provides a mature, secure blockchain platform for smart contracts. Solidity enables complex business logic implementation for healthcare workflows. IPFS ensures distributed storage without relying on centralized servers, while Web3.js bridges the blockchain with user-friendly interfaces.",
		challenges: [
			"Ensuring HIPAA compliance in a decentralized system",
			"Managing gas costs for frequent healthcare transactions",
			"Creating user-friendly interfaces for non-technical users",
			"Implementing emergency access without compromising security",
			"Integrating with existing healthcare IT infrastructure",
		],
		learnings: [
			"Blockchain development and smart contract programming",
			"Healthcare data compliance and privacy regulations",
			"Decentralized storage systems and IPFS",
			"Cryptographic security in healthcare applications",
			"User experience design for blockchain applications",
		],
		futureImprovements: [
			"Integration with IoT devices for automatic data collection",
			"AI-powered health insights based on aggregated anonymous data",
			"Cross-chain compatibility for broader ecosystem support",
			"Mobile app for easier patient access and management",
			"Integration with insurance systems for automated claims",
		],
		developmentTime: "5 months",
		teamSize: "3 developers",
		myRole: "Blockchain Developer & Smart Contract Architect",
		web: "",
		github: "",
		category: "Blockchain",
		featured: true,
		status: "Completed",
		year: 2023,
		icon: "Shield",
		color: "yellow",
	},
	{
		id: "rust-auth-api",
		title: "Rust Authentication System",
		description:
			"High-performance authentication API with JWT and OAuth, built in Rust for speed and security.",
		longDescription:
			"A blazingly fast and secure authentication system built in Rust, featuring JWT tokens, OAuth integration, and enterprise-grade security features. The system is designed for high-throughput applications requiring robust authentication with minimal latency.",
		image: "/projects/rust-auth-hero.jpg",
		images: [
			"/projects/rust-auth-hero.jpg",
			"/projects/rust-auth-architecture.jpg",
			"/projects/rust-auth-performance.jpg",
			"/projects/rust-auth-security.jpg",
		],
		techStack: [
			"Rust",
			"Warp",
			"PostgreSQL",
			"Docker",
			"JWT",
			"OAuth",
			"Kafka",
			"Redis",
		],
		tools: [
			"Cargo",
			"Docker Compose",
			"PostgreSQL",
			"Apache Kafka",
			"Prometheus",
			"Grafana",
		],
		features: [
			"High-performance JWT token generation and validation",
			"OAuth 2.0 integration with multiple providers (Google, GitHub, etc.)",
			"Rate limiting and brute force protection",
			"Session management with Redis caching",
			"Audit logging with Kafka message streaming",
			"Role-based access control (RBAC)",
			"Password hashing with Argon2",
			"Email verification and password reset workflows",
			"API key management for service-to-service authentication",
			"Comprehensive logging and monitoring",
		],
		problemSolved:
			"Many applications suffer from slow authentication processes and security vulnerabilities. This Rust-based system provides enterprise-grade security with exceptional performance, handling thousands of authentication requests per second while maintaining the highest security standards for modern applications.",
		whyTechStack:
			"Rust provides memory safety and exceptional performance crucial for authentication systems. Warp offers a fast, secure web framework. PostgreSQL ensures ACID compliance for critical user data, while Kafka enables scalable audit logging and Redis provides fast session management.",
		challenges: [
			"Learning Rust's ownership model for web development",
			"Implementing complex OAuth flows with multiple providers",
			"Optimizing database queries for high-concurrency scenarios",
			"Creating comprehensive error handling and logging",
			"Ensuring security best practices throughout the system",
		],
		learnings: [
			"Advanced Rust programming and web development",
			"High-performance system architecture design",
			"Security best practices for authentication systems",
			"Microservices communication patterns",
			"Database optimization for concurrent operations",
		],
		futureImprovements: [
			"WebAssembly integration for client-side components",
			"Machine learning for fraud detection",
			"Biometric authentication support",
			"Multi-factor authentication with TOTP",
			"GraphQL API endpoints for flexible data access",
		],
		developmentTime: "10 weeks",
		teamSize: "Solo project",
		myRole: "Backend Developer & System Architect",
		web: "",
		github: "https://github.com/codemoder-2002/rust_hybrid_auth_api_warp",
		category: "Tools",
		featured: true,
		status: "Completed",
		year: 2024,
		icon: "Lock",
		color: "orange",
	},
];

export const getProjectById = (id: string): ProjectData | undefined => {
	return projectsData.find((project) => project.id === id);
};

export const getProjectsByCategory = (category: string): ProjectData[] => {
	return projectsData.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): ProjectData[] => {
	return projectsData.filter((project) => project.featured);
};

export const getRecentProjects = (limit: number = 6): ProjectData[] => {
	return projectsData.sort((a, b) => b.year - a.year).slice(0, limit);
};
