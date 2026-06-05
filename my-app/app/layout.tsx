import "./globals.css"
import type React from "react"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

const SITE = "https://mathews-mwangi.com"

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Mathews Mwangi — Full-Stack Software Engineer",
    template: "%s | Mathews Mwangi",
  },
  description:
    "Full-stack software engineer in Mauritius. I build Go backends and distributed systems and ship them end-to-end with React and Next.js.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Mathews Mwangi",
    url: SITE,
    title: "Mathews Mwangi — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer in Mauritius. Go backends, distributed systems, and end-to-end products with React and Next.js.",
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "Mathews Mwangi — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathews Mwangi — Full-Stack Software Engineer",
    description:
      "Full-stack software engineer. Go backends, distributed systems, React and Next.js.",
    images: ["/OG.png"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/mat-favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/mat-favicon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/mat-favicon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
