import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/components/headers";
import { Footer } from "@/components/components/footer";
import { AuthProvider } from "@/Provider/clerk.provider";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
});

export const metadata: Metadata = {
	title: "Devfest",
	description: "Contest for real devs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<AuthProvider>
					<Header />
					{children}
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
