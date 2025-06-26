import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mathews - Fullstack Developer & AI Engineer",
  description:
    "Personal portfolio of Mathews, a fullstack developer and AI engineer building practical, scalable, and intelligent software solutions.",
  keywords: "fullstack developer, AI engineer, web development, machine learning, React, Next.js, Python",
  authors: [{ name: "Mathews" }],
  openGraph: {
    title: "Mathews - Fullstack Developer & AI Engineer",
    description: "Building practical, scalable, and intelligent software solutions that create real impact.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
