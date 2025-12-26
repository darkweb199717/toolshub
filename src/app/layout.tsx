import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NWSTime - 60+ Free Online Tools",
	description:
		"Boost your productivity with our collection of 60+ powerful, free online tools. From SEO optimization to development utilities, password generators to calculators - all in one place.",
	keywords:
		"online tools, free tools, SEO tools, calculators, generators, text tools, image tools, developer tools, password generator, QR code generator, thetoolshub, thetoolshub.com, thetoolshub.in",
	authors: [{ name: "The Tools Hub Team" }],
	creator: "The Tools Hub",
	publisher: "The Tools Hub",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.nwstime.com",
		title: "The Tools Hub - 60+ Free Online Tools",
		description:
			"Boost your productivity with our collection of powerful, free online tools.",
		siteName: "The Tools Hub",
	},
	twitter: {
		card: "summary_large_image",
		title: "The Tools Hub - 60+ Free Online Tools",
		description:
			"Boost your productivity with our collection of powerful, free online tools.",
		creator: "@thetoolshub",
		images: ["https://www.nwstime.com/og-image.jpg"],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-B5D171KHWK"></script>
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-B5D171KHWK');
					`,
					}}
				/>
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5350342127141103'
					crossOrigin='anonymous'
				/>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Header />
				{children}
				<Toaster />
				<Analytics />
				<Footer />
			</body>
		</html>
	);
}
