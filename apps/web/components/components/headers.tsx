"use client";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, UserAvatar } from "@clerk/clerk-react";

const navLinks = [
	{ name: "Challenges", href: "#challenges" },
	{ name: "How It Works", href: "#how-it-works" },
	{ name: "FAQ", href: "#faq" },
];

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<a href="/" className="flex items-center gap-2 group">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
							<Code2 className="h-5 w-5 text-primary" />
						</div>
						<span className="font-bold text-lg tracking-tight">
							Scale<span className="text-primary">Quest</span>
						</span>
					</a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-1">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
							>
								{link.name}
							</a>
						))}
					</nav>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center gap-3">
						<SignedIn>
							<UserAvatar />
						</SignedIn>{" "}
						<SignedOut>
							<Link href={"/auth/signup"}>
								<Button variant="ghost" size="sm">
									Sign In
								</Button>
							</Link>
						</SignedOut>
						<Link prefetch href={"/contests"}>
							<Button size="sm">Join Contest</Button>
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 text-muted-foreground hover:text-foreground"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle menu"
					>
						{mobileMenuOpen ? (
							<X className="h-6 w-6" />
						) : (
							<Menu className="h-6 w-6" />
						)}
					</button>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="md:hidden py-4 border-t border-border/50">
						<nav className="flex flex-col gap-2">
							{navLinks.map((link) => (
								<a
									key={link.name}
									href={link.href}
									className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
									onClick={() => setMobileMenuOpen(false)}
								>
									{link.name}
								</a>
							))}
							<div className="flex flex-col gap-2 mt-4 px-4">
								<Button variant="outline" className="w-full">
									Sign In
								</Button>
								<Button className="w-full">Join Contest</Button>
							</div>
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};
