import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for mathews-mwangi.com — what data is collected, how it is used, and your rights.",
  alternates: { canonical: "/privacy" },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white transition-colors mb-10"
        >
          ← Back to portfolio
        </Link>

        {/* Header */}
        <div className="mb-10 border-b border-gray-800 pb-8">
          <p className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm leading-relaxed text-gray-400">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Overview</h2>
            <p>
              This website (<span className="text-gray-300">mathews-mwangi.com</span>) is the personal portfolio of Mathews Mwangi, a full-stack software engineer. This policy explains what information, if any, is collected when you visit this site and how it is handled.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Data we do not collect</h2>
            <p className="mb-3">This site does not:</p>
            <ul className="space-y-2 list-none">
              {[
                "Run contact forms or collect form submissions",
                "Use tracking cookies or advertising pixels",
                "Store personal information from visitors",
                "Sell, share, or transfer any data to third parties",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Hosting and infrastructure</h2>
            <p>
              This site is hosted on Vercel. Vercel may collect standard server logs (IP addresses, browser type, pages visited) as part of their infrastructure operation. These logs are governed by{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 underline underline-offset-2 hover:text-white transition-colors"
              >
                Vercel&apos;s Privacy Policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Third-party links</h2>
            <p className="mb-3">
              This portfolio links to external websites including client projects and professional profiles. These sites operate independently and have their own privacy policies:
            </p>
            <ul className="space-y-2 list-none">
              {[
                { label: "Lifestyle Aviation Jet", href: "https://lifestyleaviationjet.com/" },
                { label: "LakazHub", href: "https://lakazhub.com/" },
                { label: "GitHub", href: "https://github.com/MathewM27" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/mathews-mwangi-972839219/" },
              ].map(({ label, href }) => (
                <li key={label} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-0.5 flex-shrink-0">·</span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors underline underline-offset-2"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We are not responsible for the content or privacy practices of any external sites.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Contact</h2>
            <p>
              If you have any questions about this policy, you can reach Mathews Mwangi at{" "}
              <a
                href="mailto:mathewsmwangi6927@gmail.com"
                className="text-gray-300 hover:text-white transition-colors underline underline-offset-2"
              >
                mathewsmwangi6927@gmail.com
              </a>
              .
            </p>
          </section>

        </div>

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap gap-4 text-xs text-gray-600">
          <Link href="/" className="hover:text-gray-400 transition-colors">Portfolio</Link>
          <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms &amp; Conditions</Link>
        </div>

      </div>
    </div>
  )
}
