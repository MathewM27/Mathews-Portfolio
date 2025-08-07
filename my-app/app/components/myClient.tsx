export default function ClientTypesSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          I Build for People Like You
        </h2>

        {/* Powered By style middle box */}
        <div className="relative mb-16">
          <div className="inline-block bg-neutral-900  px-6 py-3 rounded-lg shadow shadow-white cursor-pointer text-xl font-semibold border border-neutral-700">
            Who I Work With
          </div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-neutral-800 z-[-1]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Startups & Entrepreneurs */}
          <div className="bg-black rounded-lg p-6 shadow-md border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Startups & Entrepreneurs 🚀</h3>
            <p className="text-sm text-neutral-300">
              Whether you're just starting with a concept, have a rough design, or you're ready to build — I help turn ideas into fully implemented web applications, fast.
            </p>
          </div>

          {/* Small to Medium Businesses */}
          <div className="bg-black rounded-lg p-6 shadow-md border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Small to Medium Businesses 📈</h3>
            <p className="text-sm text-neutral-300">
              Need a redesign, feature fixes, or want to add automations? I help bring modern functionality and stability to your online operations.
            </p>
          </div>

          {/* NGOs & Organizations */}
          <div className="bg-black rounded-lg p-6 shadow-md border border-neutral-800">
            <h3 className="text-xl font-bold mb-4">NGOs & Organizations 🌍</h3>
            <p className="text-sm text-neutral-300">
              I support purpose-driven teams to scale digital platforms, maintain their systems, and increase operational efficiency with reliable tech support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
