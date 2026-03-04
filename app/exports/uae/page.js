import Link from "next/link";

export const metadata = {
  title: "Vegetable Exporter to UAE | Fresh Vegetable Supplier from India",
  description:
    "Aditya Exports is a trusted Indian vegetable exporter to UAE supplying fresh onion, potato, tomato, ginger and green chilli in bulk to Dubai and other Emirates.",
  keywords: [
    "Vegetable exporter to UAE",
    "Fresh vegetable supplier UAE",
    "Onion exporter to Dubai",
    "Indian vegetable exporter UAE",
    "Bulk vegetable supplier UAE",
  ],
};

export default function ExportToUAEPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Vegetable Export to UAE",
            provider: {
              "@type": "Organization",
              name: "Aditya Exports",
              url: "https://adityaexports.com",
            },
            areaServed: {
              "@type": "Country",
              name: "United Arab Emirates",
            },
          }),
        }}
      />

      <div className="bg-white">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0B1F3A] to-black text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Fresh Vegetable Exporter to UAE from India
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-3xl">
              Aditya Exports supplies premium quality fresh vegetables
              from India to UAE including Dubai, Abu Dhabi and Sharjah.
              We specialize in bulk onion, potato, tomato, ginger and
              green chilli export with reliable logistics and competitive pricing.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Get UAE Import Quote
              </Link>
            </div>
          </div>
        </section>

        {/* PRODUCTS SUPPLIED TO UAE */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Vegetables We Export to UAE
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">Fresh Onion Export to UAE</h3>
                <p className="mt-4 text-gray-600">
                  Premium quality red onions supplied in bulk to Dubai and UAE markets.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">Fresh Potato Supply UAE</h3>
                <p className="mt-4 text-gray-600">
                  High-grade Indian potatoes exported to UAE importers and wholesalers.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">Tomato & Ginger Export</h3>
                <p className="mt-4 text-gray-600">
                  Export-quality tomatoes and ginger supplied to supermarkets and distributors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY UAE IMPORTERS CHOOSE US */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Why UAE Importers Choose Aditya Exports
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Reliable Shipment to Dubai & Abu Dhabi
                </h3>
                <p className="mt-4 text-gray-600">
                  On-time delivery with complete export documentation support.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Competitive Bulk Pricing
                </h3>
                <p className="mt-4 text-gray-600">
                  Direct sourcing from Indian farms ensures better pricing.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Export-Grade Packaging
                </h3>
                <p className="mt-4 text-gray-600">
                  Secure packaging designed for UAE climate conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Seamless Export Logistics from India to UAE
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We handle complete export documentation, customs clearance,
              port handling and shipment coordination to ensure smooth
              vegetable export to UAE. Our experience in Gulf markets
              ensures compliance with UAE import standards.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#0B1F3A] text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold">
            Looking for a Trusted Vegetable Supplier in UAE?
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Contact Aditya Exports today for bulk vegetable export to Dubai and across UAE.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Request UAE Export Quote
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}