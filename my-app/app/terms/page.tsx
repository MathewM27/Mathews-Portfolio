import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for mathews-mwangi.com — usage of this portfolio site and its content.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-gray-500 text-sm">Last updated: June 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-sm leading-relaxed text-gray-400">

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Acceptance of terms</h2>
            <p>
              By accessing <span className="text-gray-300">mathews-mwangi.com</span> you agree to these terms. This is a personal portfolio website owned and operated by Mathews Mwangi. If you do not agree with any part of these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Intellectual property</h2>
            <p className="mb-3">
              All content on this site — including text, code samples, project descriptions, images, and design — is the intellectual property of Mathews Mwangi unless otherwise stated. You may not reproduce, distribute, or use any content for commercial purposes without explicit written permission.
            </p>
            <p>
              Client project work (including Lifestyle Aviation Jet and LakazHub) remains the property of the respective clients and is showcased here solely for portfolio purposes.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Portfolio use</h2>
            <p>
              Projects displayed on this site are real, completed, or in-progress works. Descriptions and technical details are provided in good faith for informational and demonstration purposes. Nothing on this site constitutes a guarantee of service outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">External links</h2>
            <p>
              This site contains links to external websites (client projects, GitHub repositories, professional profiles). These links are provided for convenience and reference. Mathews Mwangi has no control over the content or availability of those sites and accepts no responsibility for them.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Disclaimer of warranties</h2>
            <p>
              This site is provided &quot;as is&quot; without warranties of any kind. While every effort is made to keep the information accurate and up to date, no guarantee is made regarding completeness, accuracy, or fitness for any particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Limitation of liability</h2>
            <p>
              Mathews Mwangi shall not be liable for any indirect, incidental, or consequential damages arising from your use of, or inability to use, this website or its linked resources.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Changes to these terms</h2>
            <p>
              These terms may be updated from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-white font-semibold text-base mb-3">Contact</h2>
            <p>
              Questions about these terms can be directed to{" "}
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
          <Link href="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
        </div>

      </div>
    </div>
  )
}
