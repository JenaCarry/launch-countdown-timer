import "./globals.css";
import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";

const redHatText = Red_Hat_Text({
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Launch countdown timer",
  description: "Page built for a Frontend Mentor challenge",
  authors: { name: "Jean", url: "https://github.com/JenaCarry" },
  keywords: [
    "Frontend Mentor",
    "Frontend",
    "Mentor",
    "Launch countdown timer",
    "Launch",
    "Countdown",
    "Timer",
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "TypeScript",
    "React",
    "Next.js",
    "Responsive",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={redHatText.className}>{children}</body>
    </html>
  );
}
