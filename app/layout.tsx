import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahirdaiyansafwaan.vercel.app"),
  title: {
    default: "MAHIR | Impact Engineer",
    template: "%s | MAHIR",
  },
  description: "The portfolio of Mahir Daiyan Safwaan. World Champion software engineer and creative director building digital lifelines, accessible technology from Bangladesh.",
  keywords: ["Software Engineer", "Impact Engineer", "Web Developer", "Bangladesh", "React Native", "Next.js", "Accessibility", "Creative Developer"],
  openGraph: {
    title: "MAHIR | Impact Engineer",
    description: "World Champion software engineer building digital lifelines.",
    url: "https://mahirdaiyansafwaan.vercel.app",
    siteName: "MAHIR Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "MAHIR Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAHIR | Impact Engineer",
    description: "World Champion software engineer building digital lifelines.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
