import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mmmahir.xyz/"),
  title: {
    default: "MAHIR | Impact Engineer",
    template: "%s | MAHIR",
  },
  description: "The portfolio of Mahir Daiyan Safwaan. World Champion software engineer and creative director building digital lifelines, accessible technology, and crisis response systems from Bangladesh.",
  keywords: ["Software Engineer", "Impact Engineer", "Web Developer", "Bangladesh", "React Native", "Next.js", "Accessibility", "Creative Developer"],
  openGraph: {
    title: "MAHIR | Impact Engineer",
    description: "World Champion software engineer building digital lifelines.",
    url: "https://mmmahir.xyz/",
    siteName: "MAHIR Portfolio",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "MAHIR Portfolio Icon",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${poppins.variable} ${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
