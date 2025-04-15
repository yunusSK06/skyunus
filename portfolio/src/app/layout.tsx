import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Portfolio - Yunus Sheik",
  description: "A showcase of my skills, projects, achievements, and experience as a student and developer.",
  keywords: ["portfolio", "developer", "student", "projects", "skills", "web development"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
