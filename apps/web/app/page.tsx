import {
	ArrowRight,
	Sparkles,
	Rocket,
	CheckCircle2,
	Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	categories,
	criteria,
	faqs,
	features,
	steps,
	techStack,
	testimonials,
} from "@/constants/index";

const Page = () => {
	return (
		<>
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
				{/* Background Effects */}
				<div className="absolute inset-0 tech-grid opacity-30" />
				<div
					className="absolute inset-0"
					style={{ background: "var(--gradient-glow)" }}
				/>
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
				<div
					className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"
					style={{ animationDelay: "1.5s" }}
				/>

				{/* Content */}
				<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
					<div className="max-w-4xl mx-auto text-center">
						{/* Headline */}
						<h1
							className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-up"
							style={{ animationDelay: "0.1s" }}
						>
							Build Scalable Apps.{" "}
							<span className="gradient-text">
								Solve Real-World Problems.
							</span>{" "}
							Compete with the Best.
						</h1>

						{/* Subheadline */}
						<p
							className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up text-balance"
							style={{ animationDelay: "0.2s" }}
						>
							Join developers worldwide in building
							production-ready applications. Get evaluated on
							architecture, scalability, and code quality. Win
							prizes and unlock career opportunities.
						</p>

						{/* CTAs */}
						<div
							className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
							style={{ animationDelay: "0.3s" }}
						>
							<Button className="w-full sm:w-auto">
								Join the Contest
								<ArrowRight className="h-5 w-5" />
							</Button>
							<Button className="w-full sm:w-auto">
								View Challenges
							</Button>
						</div>

						{/* Stats */}
						<div
							className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-up"
							style={{ animationDelay: "0.4s" }}
						>
							{[
								{ value: "5,000+", label: "Developers" },
								{ value: "$50K", label: "Prize Pool" },
								{ value: "200+", label: "Companies Hiring" },
								{ value: "48", label: "Countries" },
							].map((stat) => (
								<div key={stat.label} className="text-center">
									<div className="text-2xl md:text-3xl font-bold gradient-text">
										{stat.value}
									</div>
									<div className="text-sm text-muted-foreground mt-1">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Gradient */}
				<div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
			</section>

			<section id="how-it-works" className="py-24 md:py-32 relative">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							How It <span className="gradient-text">Works</span>
						</h2>
						<p className="text-muted-foreground text-lg">
							From registration to recognition — your journey to
							building something incredible.
						</p>
					</div>

					{/* Steps Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
						{steps.map((step, index) => (
							<div key={step.title} className="relative group">
								{/* Connector Line */}
								{index < steps.length - 1 && (
									<div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-0" />
								)}

								{/* Card */}
								<div className="glass-card rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
									{/* Step Number */}
									<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
										{index + 1}
									</div>

									{/* Icon */}
									<div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
										<step.icon className="h-7 w-7 text-primary" />
									</div>

									{/* Content */}
									<h3 className="text-xl font-semibold mb-2">
										{step.title}
									</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section
				id="challenges"
				className="py-24 md:py-32 relative bg-secondary/30"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Challenge{" "}
							<span className="gradient-text">Categories</span>
						</h2>
						<p className="text-muted-foreground text-lg">
							Choose your domain. Solve problems that matter.
							Build for the real world.
						</p>
					</div>

					{/* Categories Grid */}
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{categories.map((category) => (
							<div
								key={category.title}
								className="group glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
							>
								{/* Icon */}
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
									<category.icon className="h-6 w-6 text-primary" />
								</div>

								{/* Content */}
								<h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
									{category.title}
								</h3>
								<p className="text-muted-foreground text-sm leading-relaxed">
									{category.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 md:py-32 relative">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						{/* Left Content */}
						<div>
							<h2 className="text-3xl md:text-4xl font-bold mb-6">
								Not Another{" "}
								<span className="gradient-text">
									Coding Contest
								</span>
							</h2>
							<p className="text-muted-foreground text-lg mb-8 leading-relaxed">
								Most competitions test algorithms. We test
								engineering. Build applications that could ship
								to production, solve problems that companies
								actually face, and prove you can design systems
								that scale.
							</p>

							{/* Features List */}
							<div className="space-y-5">
								{features.map((feature) => (
									<div
										key={feature.title}
										className="flex gap-4"
									>
										<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
											<feature.icon className="h-5 w-5 text-primary" />
										</div>
										<div>
											<h3 className="font-semibold mb-1">
												{feature.title}
											</h3>
											<p className="text-muted-foreground text-sm">
												{feature.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Right Visual */}
						<div className="relative">
							<div className="glass-card rounded-3xl p-8 relative overflow-hidden bg-slate-900 text-slate-100">
								{/* Code Block Visual */}
								<div className="font-mono text-sm space-y-2">
									<div className="flex items-center gap-2 mb-4">
										<div className="w-3 h-3 rounded-full bg-red-400" />
										<div className="w-3 h-3 rounded-full bg-yellow-400" />
										<div className="w-3 h-3 rounded-full bg-green-400" />
									</div>
									<div>
										<span className="text-cyan-400">
											class
										</span>{" "}
										<span className="text-orange-400">
											ScalableService
										</span>{" "}
										{"{"}
									</div>
									<div className="pl-4">
										<span className="text-slate-500">
											// Handle 100k+ requests/sec
										</span>
									</div>
									<div className="pl-4">
										<span className="text-cyan-400">
											async
										</span>{" "}
										processRequest(req) {"{"}
									</div>
									<div className="pl-8">
										<span className="text-cyan-400">
											const
										</span>{" "}
										cached ={" "}
										<span className="text-cyan-400">
											await
										</span>{" "}
										redis.get(req.id);
									</div>
									<div className="pl-8">
										<span className="text-cyan-400">
											if
										</span>{" "}
										(cached){" "}
										<span className="text-cyan-400">
											return
										</span>{" "}
										cached;
									</div>
									<div className="pl-8">
										<span className="text-cyan-400">
											const
										</span>{" "}
										result ={" "}
										<span className="text-cyan-400">
											await
										</span>{" "}
										<span className="text-orange-400">
											this
										</span>
										.compute(req);
									</div>
									<div className="pl-8">
										<span className="text-cyan-400">
											await
										</span>{" "}
										redis.setex(req.id,{" "}
										<span className="text-orange-400">
											3600
										</span>
										, result);
									</div>
									<div className="pl-8">
										<span className="text-cyan-400">
											return
										</span>{" "}
										result;
									</div>
									<div className="pl-4">{"}"}</div>
									<div>{"}"}</div>
								</div>

								{/* Glow Effect */}
								<div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
							</div>

							{/* Floating Stats */}
							<div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 glow-effect">
								<div className="text-2xl font-bold gradient-text">
									99.9%
								</div>
								<div className="text-xs text-muted-foreground">
									Uptime Required
								</div>
							</div>
							<div className="absolute -top-6 -right-6 glass-card rounded-xl p-4">
								<div className="text-2xl font-bold gradient-text-accent">
									&lt;100ms
								</div>
								<div className="text-xs text-muted-foreground">
									Response Time
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-24 md:py-32 relative bg-secondary/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							How We{" "}
							<span className="gradient-text">Evaluate</span>
						</h2>
						<p className="text-muted-foreground text-lg">
							Transparent criteria reviewed by industry engineers.
							No black box scoring.
						</p>
					</div>

					{/* Criteria List */}
					<div className="max-w-3xl mx-auto space-y-4">
						{criteria.map((item, index) => (
							<div
								key={item.title}
								className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
							>
								<div className="flex items-start gap-4">
									<div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
										<CheckCircle2 className="h-5 w-5 text-primary" />
									</div>
									<div className="flex-1">
										<div className="flex items-center justify-between mb-2">
											<h3 className="font-semibold text-lg">
												{item.title}
											</h3>
											<span className="text-primary font-bold text-lg">
												{item.weight}
											</span>
										</div>
										<p className="text-muted-foreground text-sm">
											{item.description}
										</p>
									</div>
								</div>

								{/* Progress Bar */}
								<div className="mt-4 h-2 rounded-full bg-secondary overflow-hidden">
									<div
										className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-500"
										style={{ width: item.weight }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="py-24 md:py-32 relative bg-secondary/30 overflow-hidden">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Use <span className="gradient-text">Any Stack</span>
						</h2>
						<p className="text-muted-foreground text-lg">
							We judge solutions, not tools. Bring your favorite
							language, framework, and cloud provider.
						</p>
					</div>

					{/* Tech Pills - Animated Marquee Effect */}
					<div className="relative">
						{/* Row 1 */}
						<div className="flex gap-4 mb-4 overflow-hidden">
							<div
								className="flex gap-4 animate-[shimmer_20s_linear_infinite]"
								style={{ width: "200%" }}
							>
								{[...techStack, ...techStack].map(
									(tech, index) => (
										<div
											key={`${tech.name}-${index}`}
											className="flex-shrink-0 px-5 py-3 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
										>
											<span className="font-medium">
												{tech.name}
											</span>
										</div>
									),
								)}
							</div>
						</div>

						{/* Row 2 - Reverse */}
						<div className="flex gap-4 overflow-hidden">
							<div
								className="flex gap-4 animate-[shimmer_25s_linear_infinite_reverse]"
								style={{ width: "200%" }}
							>
								{[...techStack.reverse(), ...techStack].map(
									(tech, index) => (
										<div
											key={`${tech.name}-rev-${index}`}
											className="flex-shrink-0 px-5 py-3 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
										>
											<span className="font-medium">
												{tech.name}
											</span>
										</div>
									),
								)}
							</div>
						</div>
					</div>

					{/* Message */}
					<p className="text-center text-muted-foreground mt-12 text-lg">
						<span className="font-mono text-primary">&gt;</span>{" "}
						Focus on solving the problem.
						<span className="font-mono text-primary ml-2">
							&gt;
						</span>{" "}
						Let your architecture speak.
					</p>
				</div>
			</section>

			<section className="py-24 md:py-32 relative">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Developer{" "}
							<span className="gradient-text">Stories</span>
						</h2>
						<p className="text-muted-foreground text-lg">
							Hear from developers who competed, built, and
							advanced their careers.
						</p>
					</div>

					{/* Testimonials Grid */}
					<div className="grid md:grid-cols-3 gap-6">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.name}
								className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
							>
								<Quote className="h-8 w-8 text-primary/30 mb-4" />

								<p className="text-foreground/90 mb-6 leading-relaxed">
									"{testimonial.quote}"
								</p>

								<div className="flex items-center gap-3 pt-4 border-t border-border/50">
									<div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 flex items-center justify-center text-sm font-bold">
										{testimonial.name
											.split(" ")
											.map((n) => n[0])
											.join("")}
									</div>
									<div>
										<div className="font-medium">
											{testimonial.name}
										</div>
										<div className="text-sm text-muted-foreground">
											{testimonial.role} ·{" "}
											<span className="text-primary">
												{testimonial.company}
											</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section
				id="faq"
				className="py-24 md:py-32 relative bg-secondary/30"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center max-w-2xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Frequently Asked{" "}
							<span className="gradient-text">Questions</span>
						</h2>
						<p className="text-muted-foreground text-lg">
							Everything you need to know before joining the
							competition.
						</p>
					</div>

					{/* FAQ Accordion */}
					<div className="max-w-3xl mx-auto">
						<Accordion
							type="single"
							collapsible
							className="space-y-4"
						>
							{faqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className="glass-card rounded-xl px-6 border-none data-[state=open]:border-primary/30"
								>
									<AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-primary py-5">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
										{faq.answer}
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>

			<section className="py-24 md:py-32 relative overflow-hidden">
				{/* Background Effects */}
				<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

				<div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
					<div className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto glow-effect">
						<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
							<Rocket className="h-8 w-8 text-primary" />
						</div>

						<h2 className="text-3xl md:text-5xl font-bold mb-6">
							Ready to Build Something{" "}
							<span className="gradient-text">That Scales?</span>
						</h2>

						<p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
							Join thousands of developers competing to solve
							real-world engineering challenges. Registration
							closes soon — secure your spot today.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button>
								Register Now
								<ArrowRight className="h-5 w-5" />
							</Button>
							<Button variant="outline" size="lg">
								View Past Winners
							</Button>
						</div>

						<p className="text-sm text-muted-foreground mt-8">
							Free to participate · No credit card required · Open
							to all skill levels
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
