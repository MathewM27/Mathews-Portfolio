import "./globals.css"
import type React from "react"
import { Inter } from "next/font/google"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mathews Mwangi | System Engineer & Entrepreneur",
  description: "Personal portfolio of Mathews Mwangi, showcasing projects in system engineering, entrepreneurship, and tech innovation.",
  metadataBase: new URL('https://mathewsmwangi.com'),
  openGraph: {
    title: "Mathews Mwangi | Freelance Web Developer & AI engineer",
    description: "Personal portfolio of Mathews Mwangi, showcasing projects in web development, AI engineering, and freelance projects.",
    url: "https://mathewsmwangi.com/",
    siteName: "Mathews Mwangi Portfolio",
    images: [
      {
        url: "https://mathewsmwangi.com/OG.png",
        width: 1200,
        height: 630,
        alt: "Mathews Mwangi Portfolio",
      },
    ],
    locale: "en_US",
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
      <head>
        <link rel="icon" href="/mat-favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/mat-favicon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/mat-favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mathews Mwangi",
              "url": "https://mathewsmwangi.com",
              "logo": "https://mathewsmwangi.com/X.svg",
              "sameAs": [
                "https://www.linkedin.com/in/mathews-mwangi-972839219/",
                "https://github.com/MathewM27"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Mathews Mwangi Portfolio",
              "url": "https://mathewsmwangi.com",
              "description": "Personal portfolio of Mathews Mwangi, showcasing projects in system engineering, entrepreneurship, and tech innovation."
            })
          }}
        />
        {/* Project: Lifestyle Aviation Jet Limited */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Lifestyle Aviation Jet Limited",
              "description": "Fullstack private jet booking platform that allows luxury travel.",
              "url": "https://lifestyleaviationjet.com/",
              "image": "https://mathewsmwangi.com/aviation.png",
              "author": {
                "@type": "Person",
                "name": "Mathews Mwangi"
              }
            })
          }}
        />
        {/* Project: LakazHub */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "LakazHub",
              "description": "Fullstack rental platform for property listings and bookings.",
              "url": "https://lakazhub.com/",
              "image": "https://mathewsmwangi.com/Lakaz.png",
              "author": {
                "@type": "Person",
                "name": "Mathews Mwangi"
              }
            })
          }}
        />
        {/* Project: Travel Agency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Travel Agency",
              "description": "Travel agency booking and management system.",
              "url": "#",
              "image": "https://mathewsmwangi.com/Travel.png",
              "author": {
                "@type": "Person",
                "name": "Mathews Mwangi"
              }
            })
          }}
        />
        {/* Project: PostForge */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "PostForge",
              "description": "AI-powered content creator ideas to posts.",
              "url": "#",
              "image": "https://mathewsmwangi.com/postforge.png",
              "author": {
                "@type": "Person",
                "name": "Mathews Mwangi"
              }
            })
          }}
        />
        {/* Project: OnboardAI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "OnboardAI",
              "description": "AI tool that helps with employee onboarding leveraging RAG model etc.",
              "url": "#",
              "image": "https://mathewsmwangi.com/Onboard.png",
              "author": {
                "@type": "Person",
                "name": "Mathews Mwangi"
              }
            })
          }}
        />
        {/* Project: Rezy AI */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Rezy AI",
              "description": "AI resume analyzer.",
              "url": "#",
              "image": "https://mathewsmwangi.com/Rezy.png",
              "author": {
                "@type": "Person",
                "name": "Mathews Mwangi"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
