import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Veriscope",
  description:
    "Veriscope captures every AI interaction and turns it into audit-ready evidence.",
  openGraph: {
    title: "Veriscope – The Audit & Compliance Layer for AI",
    description: "Audit. Comply. Trust.",
    url: "https://veriscope.vercel.app",
    siteName: "Veriscope",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veriscope – AI Audit & Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veriscope – The Audit & Compliance Layer for AI",
    description: "Audit. Comply. Trust.",
    images: ["/og-image.png"],
    creator: "@shebuildsfire",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <div id="toast-root" />
        <Footer />
        <Toaster richColors />
        <Analytics />
      </body>
    </html>
  );
}
