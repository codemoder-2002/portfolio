export interface BlogPost {
	id: string;
	title: string;
	description: string;
	content: string;
	excerpt: string;
	image: string;
	category: string;
	tags: string[];
	author: {
		name: string;
		avatar: string;
		bio: string;
	};
	publishedAt: string;
	updatedAt?: string;
	readTime: string;
	featured: boolean;
	published: boolean;
	slug: string;
}

export const blogPosts: BlogPost[] = [
	{
		id: "1",
		title: "Building Scalable React Applications with TypeScript",
		description:
			"Learn how to structure and build maintainable React applications using TypeScript, focusing on best practices and scalable architecture patterns.",
		excerpt:
			"Discover the essential patterns and practices for building large-scale React applications with TypeScript. From project structure to advanced type patterns, this guide covers everything you need to know.",
		content: `
# Building Scalable React Applications with TypeScript

In this comprehensive guide, we'll explore the essential patterns and practices for building maintainable, scalable React applications using TypeScript.

## Project Structure

A well-organized project structure is crucial for scalability. Here's the structure I recommend:

\`\`\`
src/
├── components/
│   ├── ui/
│   ├── forms/
│   └── layout/
├── pages/
├── hooks/
├── utils/
├── types/
├── services/
└── constants/
\`\`\`

## Type-First Development

Always define your types before writing components. This approach helps catch errors early and provides better developer experience.

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'moderator';
}

interface UserListProps {
  users: User[];
  onUserSelect: (user: User) => void;
  loading?: boolean;
}
\`\`\`

## Component Patterns

### 1. Compound Components

Use compound components for complex UI elements that need to share state.

### 2. Custom Hooks for Logic Reuse

Extract complex logic into custom hooks for better reusability and testing.

### 3. Error Boundaries

Implement error boundaries to gracefully handle component errors.

## State Management

Choose the right state management solution based on your needs:
- Local state for component-specific data
- Context for app-wide state
- External libraries (Redux, Zustand) for complex state

## Performance Optimization

- Use React.memo for expensive components
- Implement proper key props for lists
- Lazy load components and routes
- Optimize bundle size with code splitting

## Testing Strategy

- Unit tests for utility functions
- Integration tests for components
- E2E tests for critical user flows

Building scalable React applications requires careful planning and adherence to best practices. By following these guidelines, you'll create applications that are maintainable and performant as they grow.
		`,
		image: "/blog/react-typescript.jpg",
		category: "Frontend Development",
		tags: ["React", "TypeScript", "Architecture", "Best Practices"],
		author: {
			name: "Yash Savani",
			avatar: "/avatar.jpg",
			bio: "Full Stack Developer passionate about building scalable web applications",
		},
		publishedAt: "2024-03-15T10:00:00Z",
		readTime: "8 min read",
		featured: true,
		published: true,
		slug: "building-scalable-react-applications-typescript",
	},
	{
		id: "2",
		title: "The Future of Web Development: What to Expect in 2024",
		description:
			"Exploring the latest trends and technologies shaping the future of web development in 2024 and beyond.",
		excerpt:
			"From AI-powered development tools to the rise of edge computing, discover the key trends that will define web development in 2024.",
		content: `
# The Future of Web Development: What to Expect in 2024

The web development landscape is evolving rapidly. Here are the key trends shaping our industry in 2024.

## AI-Powered Development

AI tools are revolutionizing how we write code:
- GitHub Copilot and similar tools
- Automated testing and debugging
- AI-assisted code reviews

## Edge Computing

Moving computation closer to users:
- Faster response times
- Improved user experience
- Better scalability

## WebAssembly (WASM)

Bringing near-native performance to the web:
- High-performance applications
- Language flexibility
- Better resource utilization

## Serverless Architecture

The continued rise of serverless:
- Reduced operational overhead
- Better scalability
- Cost optimization

## Progressive Web Apps (PWAs)

Bridging the gap between web and native:
- Offline functionality
- Push notifications
- App-like experience

## Micro-Frontends

Breaking down monolithic frontends:
- Team scalability
- Technology diversity
- Independent deployments

The future of web development is exciting, with new technologies enabling us to build better, faster, and more accessible applications than ever before.
		`,
		image: "/blog/future-web-dev.jpg",
		category: "Industry Trends",
		tags: ["Web Development", "AI", "Edge Computing", "Future Tech"],
		author: {
			name: "Yash Savani",
			avatar: "/avatar.jpg",
			bio: "Full Stack Developer passionate about building scalable web applications",
		},
		publishedAt: "2024-03-10T14:30:00Z",
		readTime: "6 min read",
		featured: true,
		published: true,
		slug: "future-web-development-2024",
	},
	{
		id: "3",
		title: "Database Optimization Techniques for High-Traffic Applications",
		description:
			"Learn essential database optimization strategies to handle high-traffic scenarios and improve application performance.",
		excerpt:
			"Master the art of database optimization with proven techniques for indexing, query optimization, and scaling strategies.",
		content: `
# Database Optimization Techniques for High-Traffic Applications

When your application scales, database performance becomes critical. Here are proven techniques to optimize your database for high traffic.

## Indexing Strategies

Proper indexing is crucial for query performance:

### Single Column Indexes
- Primary keys
- Foreign keys
- Frequently queried columns

### Composite Indexes
- Multi-column queries
- Order matters
- Leftmost prefix rule

### Partial Indexes
- Conditional indexing
- Reduced index size
- Improved maintenance

## Query Optimization

### N+1 Query Problem
Avoid making multiple queries when one would suffice:

\`\`\`sql
-- Bad: N+1 queries
SELECT * FROM users;
-- Then for each user:
SELECT * FROM posts WHERE user_id = ?;

-- Good: Single query with JOIN
SELECT u.*, p.*
FROM users u
LEFT JOIN posts p ON u.id = p.user_id;
\`\`\`

### Use EXPLAIN
Always analyze your query execution plans:

\`\`\`sql
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'test@example.com';
\`\`\`

## Caching Strategies

### Query Result Caching
- Redis for session data
- Memcached for query results
- Application-level caching

### Database Connection Pooling
- Reduce connection overhead
- Better resource utilization
- Improved concurrent handling

## Scaling Strategies

### Read Replicas
- Distribute read operations
- Reduce load on primary database
- Eventual consistency considerations

### Database Sharding
- Horizontal partitioning
- Distribute data across multiple servers
- Complex but highly scalable

### Vertical vs Horizontal Scaling
- Vertical: More powerful hardware
- Horizontal: More servers
- Choose based on your needs

## Monitoring and Maintenance

### Regular Maintenance
- Update statistics
- Rebuild indexes
- Purge old data

### Performance Monitoring
- Query performance metrics
- Resource utilization
- Slow query logs

Database optimization is an ongoing process that requires careful planning and monitoring. By implementing these techniques, you can ensure your application performs well under high traffic conditions.
		`,
		image: "/blog/database-optimization.jpg",
		category: "Backend Development",
		tags: ["Database", "Performance", "SQL", "Optimization"],
		author: {
			name: "Yash Savani",
			avatar: "/avatar.jpg",
			bio: "Full Stack Developer passionate about building scalable web applications",
		},
		publishedAt: "2024-03-05T09:15:00Z",
		readTime: "10 min read",
		featured: false,
		published: true,
		slug: "database-optimization-high-traffic-applications",
	},
	{
		id: "4",
		title: "Building a Modern CI/CD Pipeline with GitHub Actions",
		description:
			"Step-by-step guide to setting up automated testing, building, and deployment workflows using GitHub Actions.",
		excerpt:
			"Learn how to create efficient CI/CD pipelines that automate your development workflow from code commit to production deployment.",
		content: `
# Building a Modern CI/CD Pipeline with GitHub Actions

Continuous Integration and Deployment (CI/CD) is essential for modern software development. Let's build a robust pipeline using GitHub Actions.

## Basic Pipeline Structure

A typical CI/CD pipeline includes these key stages:
1. **Code checkout** - Get the latest code from the repository
2. **Dependency installation** - Install required packages and dependencies
3. **Testing** - Run unit tests, integration tests, and linting
4. **Building** - Compile and bundle the application
5. **Deployment** - Deploy to staging and production environments

## Setting Up the Workflow

Create a workflow file at \`.github/workflows/ci-cd.yml\` with the following structure:

### Basic Test Job
- Runs on Ubuntu latest
- Installs Node.js and dependencies
- Executes tests and linting
- Only proceeds if all checks pass

### Build Job
- Depends on successful test completion
- Creates production-ready build artifacts
- Uploads artifacts for deployment use

## Environment-Specific Deployments

### Staging Environment
- Automatically deploys when code is pushed to develop branch
- Provides a testing environment before production
- Allows for integration testing and QA validation

### Production Environment
- Deploys only from the main branch
- Requires manual approval for critical releases
- Includes rollback capabilities for quick recovery

## Security Best Practices

### Secrets Management
- Store API keys and sensitive data in GitHub Secrets
- Never commit credentials to the repository
- Use environment-specific secrets for different stages
- Regularly rotate access tokens and passwords

### Dependency Scanning
Implement automated security scanning:
- Run npm audit for vulnerability detection
- Use tools like Snyk or GitHub Security Advisories
- Set up automated dependency updates with Dependabot

## Advanced Pipeline Features

### Matrix Builds
Test your application across multiple environments:
- Different Node.js versions (16, 18, 20)
- Various operating systems (Ubuntu, Windows, macOS)
- Different browser versions for frontend applications

### Conditional Logic
- Deploy only when tests pass completely
- Skip deployment for draft pull requests
- Use different strategies for different branches

### Monitoring and Notifications
- Send Slack notifications for deployment status
- Email alerts for failed builds or deployments
- Integration with monitoring tools like DataDog or New Relic

## Performance Optimization

- Cache dependencies between runs
- Use parallel jobs where possible
- Optimize Docker images for faster builds
- Implement smart deployment strategies like blue-green deployments

A well-configured CI/CD pipeline saves development time, reduces human errors, and enables faster, more reliable deployments. Start with a simple setup and gradually add complexity as your team's needs grow.
		`,
		image: "/blog/cicd-pipeline.jpg",
		category: "DevOps",
		tags: ["CI/CD", "GitHub Actions", "DevOps", "Automation"],
		author: {
			name: "Yash Savani",
			avatar: "/avatar.jpg",
			bio: "Full Stack Developer passionate about building scalable web applications",
		},
		publishedAt: "2024-02-28T16:45:00Z",
		readTime: "7 min read",
		featured: false,
		published: true,
		slug: "building-modern-cicd-pipeline-github-actions",
	},
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
	return blogPosts.find((post) => post.slug === slug);
};

export const getBlogPostsByCategory = (category: string): BlogPost[] => {
	return blogPosts.filter(
		(post) => post.category === category && post.published,
	);
};

export const getFeaturedBlogPosts = (): BlogPost[] => {
	return blogPosts.filter((post) => post.featured && post.published);
};

export const getRecentBlogPosts = (limit: number = 6): BlogPost[] => {
	return blogPosts
		.filter((post) => post.published)
		.sort(
			(a, b) =>
				new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
		)
		.slice(0, limit);
};

export const getBlogCategories = (): string[] => {
	const categories = blogPosts.map((post) => post.category);
	return [...new Set(categories)];
};

export const getBlogTags = (): string[] => {
	const tags = blogPosts.flatMap((post) => post.tags);
	return [...new Set(tags)];
};
