import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import React from "react";
import TailwindIndicator from "@/components/utils/tailwind-indicator";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	openGraph: {
		type: "website",
		locale: "en_US",
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
	},
};

export default async function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body
				className={cn(
					"min-h-screen h-screen font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers>
					<RootLayoutStyled>{children}</RootLayoutStyled>
				</Providers>

				{/* Utils */}
				<TailwindIndicator />
			</body>
		</html>
	);
}

function RootLayoutStyled({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-svh w-full p-6 md:p-10">
			<div className="w-full max-w-sm">{children}</div>
		</div>
	);
}
