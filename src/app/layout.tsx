import Footer from "@/app/_components/footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Wedding of DJ and PC`,
  description: `A hastily made site for said event.`,
  openGraph: {
    title: "Wedding of DJ and PC",
    description: "Happening on the 5th of July 2024",
    locale: "en_US",
    type: "website",
    siteName: "DJ and PC Info site",
    url: "https://pcm-and-dj-wedding.vercel.app/",
    images: [{ url: "https://pcm-and-dj-wedding.vercel.app/images/20191009_110102.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
