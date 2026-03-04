import Link from "next/link";

export const metadata = {
  title: "Vegetable Exporter to USA | Fresh Vegetable Supplier from India",
  description:
    "Aditya Exports is a trusted Indian vegetable exporter to USA supplying fresh onion, potato, tomato, ginger and green chilli in bulk with international export standards and reliable logistics.",
  keywords: [
    "Vegetable exporter to USA",
    "Fresh vegetable supplier USA",
    "Onion exporter to United States",
    "Indian vegetable exporter USA",
    "Bulk vegetable supplier USA",
  ],
};

export default function ExportToUSAPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Vegetable Export to USA",
            provider: {
              "@type": "Organization",
              name: "Aditya Exports",
              url: "https://adityaexports.com",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
          }),
        }}
      />

      <div className="bg-white">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0B1F3A] to-black text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Fresh Vegetable Exporter to USA from India
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-3xl">
              Aditya Exports supplies premium quality fresh vegetables
              from India to the United States including bulk onion,
              potato, tomato, ginger and green chilli with export-grade
              packaging and reliable international shipping.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Get USA Import Quote
              </Link>
            </div>
          </div>
        </section>

        {/* PRODUCTS SUPPLIED TO USA */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Vegetables We Export to USA
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Fresh Onion Export to USA
                </h3>
                <p className="mt-4 text-gray-600">
                  High-quality red onions supplied in bulk to US importers and food distributors.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Fresh Potato Supply USA
                </h3>
                <p className="mt-4 text-gray-600">
                  Premium Indian potatoes exported with international packaging standards.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Ginger & Green Chilli Export
                </h3>
                <p className="mt-4 text-gray-600">
                  Export-quality ginger and green chilli supplied for wholesale and retail chains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US IMPORTERS CHOOSE US */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Why USA Importers Choose Aditya Exports
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Export Compliance & Documentation
                </h3>
                <p className="mt-4 text-gray-600">
                  Complete export documentation support for smooth customs clearance in USA.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Consistent Bulk Supply
                </h3>
                <p className="mt-4 text-gray-600">
                  Reliable large-scale supply for US wholesalers and distributors.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Quality Assurance
                </h3>
                <p className="mt-4 text-gray-600">
                  Strict quality checks to meet US food safety and import standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LOGISTICS SECTION */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Seamless Shipping from India to United States
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We coordinate port handling, freight forwarding, export documentation
              and shipment tracking to ensure smooth vegetable export from India
              to major US ports with timely delivery.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#0B1F3A] text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold">
            Looking for a Reliable Vegetable Exporter to USA?
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Contact Aditya Exports today for bulk vegetable supply to the United States.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Request USA Export Quote
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}