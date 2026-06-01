import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jayneel | Full-Stack Developer & Designer",
    template: "%s | Jayneel",
  },
  description:
    "Full-stack developer crafting modern, performant web applications with clean code and thoughtful design. Specializing in React, Next.js, and TypeScript.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Jayneel",
  ],
  authors: [{ name: "Jayneel" }],
  openGraph: {
    title: "Jayneel | Full-Stack Developer & Designer",
    description:
      "Full-stack developer crafting modern, performant web applications with clean code and thoughtful design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayneel | Full-Stack Developer & Designer",
    description:
      "Full-stack developer crafting modern, performant web applications with clean code and thoughtful design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
