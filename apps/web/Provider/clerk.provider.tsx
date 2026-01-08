"use client";
import { ClerkProvider } from "@clerk/clerk-react";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ClerkProvider
			publishableKey={process.env.NEXT_PUBLIC_PUBLISHABLE_KEY!}
		>
			{children}
		</ClerkProvider>
	);
};
