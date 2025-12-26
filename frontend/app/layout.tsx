import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AlgoKeep – Organize Your DSA Notes Smartly",
    template: "%s | AlgoKeep",
  },
  description:
    "AlgoKeep is a smart DSA notes manager to organize algorithms, problems, code snippets, and complexities in one place. Built for interview prep and competitive programming.",
  keywords: [
    "DSA notes",
    "Data Structures and Algorithms",
    "Coding interview preparation",
    "Algorithm notes",
    "Competitive programming",
    "DSA tracker",
    "AlgoKeep",
  ],
  authors: [{ name: "AlgoKeep Team" }],
  creator: "AlgoKeep",
  metadataBase: new URL("https://algokeep.com"), // change when domain is ready

  openGraph: {
    title: "AlgoKeep – Organize Your DSA Notes Smartly",
    description:
      "Create, manage, and revise your DSA notes with AlgoKeep. Track problems, algorithms, complexity, and code snippets in one clean workspace.",
    url: "https://algokeep.com",
    siteName: "AlgoKeep",
    images: [
      {
        url: "/og-image.png", // add later
        width: 1200,
        height: 630,
        alt: "AlgoKeep – DSA Notes Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AlgoKeep – Organize Your DSA Notes Smartly",
    description:
      "A modern DSA notes manager for developers and interview prep.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
