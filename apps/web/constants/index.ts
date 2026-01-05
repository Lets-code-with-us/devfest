import {
	UserPlus,
	FileCode,
	Rocket,
	Trophy,
	Server,
	Globe,
	Zap,
	Brain,
	Cloud,
	Database,
	Target,
	Users,
	Layers,
	Wrench,
	Award,
} from "lucide-react";

const steps = [
	{
		icon: UserPlus,
		title: "Register",
		description:
			"Create your profile and join the competition in minutes. Free for all developers.",
	},
	{
		icon: FileCode,
		title: "Choose a Challenge",
		description:
			"Select from real-world problems across backend, frontend, AI, and cloud architecture.",
	},
	{
		icon: Rocket,
		title: "Build & Submit",
		description:
			"Design and implement your scalable solution using any tech stack you prefer.",
	},
	{
		icon: Trophy,
		title: "Win & Get Hired",
		description:
			"Get evaluated by industry engineers. Win prizes and connect with hiring partners.",
	},
];

const categories = [
	{
		icon: Server,
		title: "Scalable Backend Systems",
		description:
			"Design APIs and services that handle millions of requests. Master caching, queuing, and distributed systems.",
	},
	{
		icon: Globe,
		title: "High-Traffic Web Apps",
		description:
			"Build performant frontends that scale. Optimize rendering, state management, and user experience.",
	},
	{
		icon: Zap,
		title: "Real-Time Systems",
		description:
			"Create live collaboration tools, chat systems, and streaming platforms with WebSockets and event-driven architecture.",
	},
	{
		icon: Brain,
		title: "AI-Powered Applications",
		description:
			"Integrate ML models, build RAG systems, and create intelligent features that solve real problems.",
	},
	{
		icon: Cloud,
		title: "DevOps & Cloud Architecture",
		description:
			"Design infrastructure as code, CI/CD pipelines, and cloud-native solutions on AWS, GCP, or Azure.",
	},
	{
		icon: Database,
		title: "Data Engineering",
		description:
			"Build ETL pipelines, data lakes, and analytics platforms that process data at scale.",
	},
];

const features = [
	{
		icon: Target,
		title: "Real-World Problems",
		description:
			"Challenges inspired by actual startup and enterprise scenarios, not toy examples.",
	},
	{
		icon: Layers,
		title: "Scalability Focus",
		description:
			"We evaluate how your solution handles load, not just if it works.",
	},
	{
		icon: Users,
		title: "Industry Judges",
		description:
			"Get feedback from engineers at top tech companies who've built systems at scale.",
	},
	{
		icon: Wrench,
		title: "Stack Freedom",
		description:
			"Use any language, framework, or cloud provider. We judge solutions, not tools.",
	},
	{
		icon: Award,
		title: "Portfolio-Ready",
		description:
			"Every submission becomes a showcase project you can present to employers.",
	},
];

const criteria = [
	{
		title: "Architecture & Scalability",
		weight: "30%",
		description:
			"System design, component separation, database modeling, and ability to handle increased load.",
	},
	{
		title: "Performance & Reliability",
		weight: "25%",
		description:
			"Response times, error handling, fault tolerance, and graceful degradation under stress.",
	},
	{
		title: "Code Quality & Maintainability",
		weight: "20%",
		description:
			"Clean code principles, testing coverage, type safety, and clear naming conventions.",
	},
	{
		title: "Security Best Practices",
		weight: "15%",
		description:
			"Authentication, authorization, input validation, and protection against common vulnerabilities.",
	},
	{
		title: "Documentation & Clarity",
		weight: "10%",
		description:
			"README quality, API documentation, inline comments, and deployment instructions.",
	},
];

const faqs = [
	{
		question: "Who can participate in ScaleQuest?",
		answer: "ScaleQuest is open to developers of all experience levels worldwide. Whether you're a student, a junior developer looking to grow, or a senior engineer seeking new challenges, you're welcome to compete. All you need is a passion for building and problem-solving.",
	},
	{
		question: "What tech stack can I use?",
		answer: "You have complete freedom to use any programming language, framework, database, or cloud provider. We evaluate your solution's architecture, scalability, and code quality — not the specific tools you choose. React, Go, Rust, Python, AWS, GCP — it's all fair game.",
	},
	{
		question: "How long do I have to complete a challenge?",
		answer: "Most challenges run for 2-4 weeks, giving you ample time to design, build, and refine your solution. The exact timeline is announced at the start of each season. We recommend spending time on architecture before diving into code.",
	},
	{
		question: "How are submissions evaluated?",
		answer: "Submissions are evaluated by experienced industry engineers across five criteria: Architecture & Scalability (30%), Performance & Reliability (25%), Code Quality (20%), Security (15%), and Documentation (10%). You'll receive detailed feedback regardless of your final placement.",
	},
	{
		question: "Is there a registration fee?",
		answer: "No, participation is completely free. We believe in making opportunities accessible to all developers. Our platform is supported by hiring partners who are looking to connect with talented engineers like you.",
	},
	{
		question: "Can I participate as a team?",
		answer: "Currently, ScaleQuest is an individual competition to ensure fair evaluation of personal skills. However, we're exploring team challenges for future seasons. Join our Discord to stay updated on new formats.",
	},
];

const techStack = [
	{ name: "React", category: "Frontend" },
	{ name: "Next.js", category: "Frontend" },
	{ name: "Vue", category: "Frontend" },
	{ name: "Node.js", category: "Backend" },
	{ name: "Python", category: "Backend" },
	{ name: "Go", category: "Backend" },
	{ name: "Rust", category: "Backend" },
	{ name: "AWS", category: "Cloud" },
	{ name: "GCP", category: "Cloud" },
	{ name: "Azure", category: "Cloud" },
	{ name: "Docker", category: "DevOps" },
	{ name: "Kubernetes", category: "DevOps" },
	{ name: "PostgreSQL", category: "Database" },
	{ name: "MongoDB", category: "Database" },
	{ name: "Redis", category: "Database" },
	{ name: "GraphQL", category: "API" },
];

const testimonials = [
	{
		quote: "This wasn't just another hackathon. The focus on scalability and real-world problems pushed me to think like a senior engineer.",
		name: "Alex Chen",
		role: "Backend Engineer",
		company: "Now at Stripe",
	},
	{
		quote: "The feedback from industry judges was invaluable. I learned more in 2 weeks than in months of side projects.",
		name: "Sarah Mitchell",
		role: "Full-Stack Developer",
		company: "Hired via ScaleQuest",
	},
	{
		quote: "My submission became my best portfolio piece. Three companies reached out within a week of the results.",
		name: "Marcus Johnson",
		role: "System Architect",
		company: "Now at Datadog",
	},
];

export { steps, techStack, testimonials, faqs, features, criteria, categories };
