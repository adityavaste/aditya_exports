import Link from "next/link";

export const metadata = {
  title: "Vegetable Exporter to Europe | Fresh Vegetable Supplier from India",
  description:
    "Aditya Exports is a reliable Indian vegetable exporter to Europe supplying fresh onion, potato, tomato, ginger and green chilli in bulk with international quality standards and export-grade packaging.",
  keywords: [
    "Vegetable exporter to Europe",
    "Fresh vegetable supplier Europe",
    "Onion exporter to Europe",
    "Indian vegetable exporter Europe",
    "Bulk vegetable supplier Europe",
  ],
};

export default function ExportToEuropePage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Vegetable Export to Europe",
            provider: {
              "@type": "Organization",
              name: "Aditya Exports",
              url: "https://adityaexports.com",
            },
            areaServed: {
              "@type": "Continent",
              name: "Europe",
            },
          }),
        }}
      />

      <div className="bg-white">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0B1F3A] to-black text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Fresh Vegetable Exporter to Europe from India
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-3xl">
              Aditya Exports supplies premium quality fresh vegetables
              from India to European countries including onion, potato,
              tomato, ginger and green chilli with bulk export capability
              and international packaging standards.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Get Europe Import Quote
              </Link>
            </div>
          </div>
        </section>

        {/* PRODUCTS SUPPLIED TO EUROPE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Vegetables We Export to Europe
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Fresh Onion Export to Europe
                </h3>
                <p className="mt-4 text-gray-600">
                  Premium grade red onions exported to European wholesalers and food distributors.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Fresh Potato Supply Europe
                </h3>
                <p className="mt-4 text-gray-600">
                  High-quality Indian potatoes packed for long-distance European shipments.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Ginger & Green Chilli Export
                </h3>
                <p className="mt-4 text-gray-600">
                  Fresh ginger and green chilli exported in bulk for European retail chains and food markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY EUROPEAN IMPORTERS CHOOSE US */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Why European Importers Choose Aditya Exports
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  EU Export Compliance
                </h3>
                <p className="mt-4 text-gray-600">
                  Complete export documentation and compliance support for smooth customs clearance across Europe.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Bulk & Consistent Supply
                </h3>
                <p className="mt-4 text-gray-600">
                  Reliable large-scale vegetable supply for European distributors and import companies.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Quality Assurance Standards
                </h3>
                <p className="mt-4 text-gray-600">
                  Strict quality checks to meet European food safety and import standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Seamless Shipping from India to Europe
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We coordinate freight forwarding, port handling, export documentation
              and shipment tracking to ensure smooth vegetable export
              from India to major European ports with timely delivery.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#0B1F3A] text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold">
            Looking for a Reliable Vegetable Exporter to Europe?
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Contact Aditya Exports today for bulk vegetable supply to European countries.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Request Europe Export Quote
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}