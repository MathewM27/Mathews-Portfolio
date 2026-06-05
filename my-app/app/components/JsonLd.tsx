const SITE = "https://mathews-mwangi.com"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: "Mathews Mwangi",
  url: SITE,
  image: `${SITE}/bg.jpg`,
  jobTitle: "Full-Stack Software Engineer",
  description:
    "Full-stack software engineer in Mauritius specialising in Go backends and distributed systems.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MU",
    addressLocality: "Port Louis",
  },
  knowsAbout: [
    "Go",
    "Distributed Systems",
    "Backend Engineering",
    "React",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Real-time Systems",
    "React Native",
    "Docker",
    "Kubernetes",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Middlesex University",
  },
  sameAs: [
    "https://github.com/MathewM27",
    "https://www.linkedin.com/in/mathews-mwangi-972839219/",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Mathews Mwangi",
  publisher: { "@id": `${SITE}/#person` },
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
