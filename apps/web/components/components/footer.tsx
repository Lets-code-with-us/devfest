import { Code2, Github, Twitter, Linkedin, MessageCircle } from "lucide-react";

const footerLinks = {
	Competition: [
		{ name: "Challenges", href: "#challenges" },
		{ name: "Rules", href: "#" },
		{ name: "Timeline", href: "#" },
		{ name: "Past Winners", href: "#" },
	],
	Resources: [
		{ name: "Documentation", href: "#" },
		{ name: "FAQs", href: "#faq" },
		{ name: "Scoring Guide", href: "#" },
		{ name: "Sample Projects", href: "#" },
	],
	Community: [
		{ name: "Discord", href: "#" },
		{ name: "GitHub Discussions", href: "#" },
		{ name: "Blog", href: "#" },
		{ name: "Newsletter", href: "#" },
	],
	Company: [
		{ name: "About", href: "#" },
		{ name: "Careers", href: "#" },
		{ name: "Partners", href: "#" },
		{ name: "Contact", href: "#" },
	],
};

const socialLinks = [
	{ icon: Github, href: "#", label: "GitHub" },
	{ icon: Twitter, href: "#", label: "Twitter" },
	{ icon: Linkedin, href: "#", label: "LinkedIn" },
	{ icon: MessageCircle, href: "#", label: "Discord" },
];

export const Footer = () => {
	return (
		<footer className="border-t border-border bg-card/50">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
					{/* Brand */}
					<div className="col-span-2">
						<a href="/" className="flex items-center gap-2 mb-4">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
								<Code2 className="h-5 w-5 text-primary" />
							</div>
							<span className="font-bold text-lg tracking-tight">
								Scale<span className="text-primary">Quest</span>
							</span>
						</a>
						<p className="text-muted-foreground text-sm mb-6 max-w-xs">
							The premier competition for developers who build
							scalable, production-ready applications.
						</p>
						<div className="flex gap-3">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
									aria-label={social.label}
								>
									<social.icon className="h-4 w-4" />
								</a>
							))}
						</div>
					</div>

					{/* Links */}
					{Object.entries(footerLinks).map(([category, links]) => (
						<div key={category}>
							<h4 className="font-semibold mb-4 text-sm">
								{category}
							</h4>
							<ul className="space-y-3">
								{links.map((link) => (
									<li key={link.name}>
										<a
											href={link.href}
											className="text-sm text-muted-foreground hover:text-foreground transition-colors"
										>
											{link.name}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom */}
				<div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} ScaleQuest. All rights
						reserved.
					</p>
					<div className="flex gap-6 text-sm text-muted-foreground">
						<a
							href="#"
							className="hover:text-foreground transition-colors"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="hover:text-foreground transition-colors"
						>
							Terms of Service
						</a>
						<a
							href="#"
							className="hover:text-foreground transition-colors"
						>
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
