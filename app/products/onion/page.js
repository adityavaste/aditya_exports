import Link from "next/link";

export const metadata = {
  title: "Fresh Onion Exporter from India | Bulk Onion Supplier UAE USA Europe",
  description:
    "Aditya Exports is a leading fresh onion exporter from India supplying premium quality red onions in bulk to UAE, USA and Europe with international export standards.",
  keywords: [
    "Fresh onion exporter India",
    "Onion exporter to UAE",
    "Onion supplier USA",
    "Indian onion export company",
    "Bulk onion supplier Europe",
  ],
};

export default function OnionExporterPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Fresh Onion Export from India",
            description:
              "Premium quality fresh onion exporter from India supplying UAE, USA and Europe.",
            brand: {
              "@type": "Brand",
              name: "Aditya Exports",
            },
          }),
        }}
      />

      <div className="bg-white">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0B1F3A] to-black text-white py-50 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Fresh Onion Exporter from India
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl">
              Aditya Exports is a trusted Indian onion export company
              supplying premium quality fresh red onions in bulk to UAE,
              USA and European markets with international packaging and
              reliable global shipment.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Request Onion Export Price
              </Link>
            </div>
          </div>
        </section>

        {/* PRODUCT DETAILS */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            
            <img
              src="/onion.webp"
              alt="Fresh Red Onion Exporter from India supplying UAE USA Europe"
              className="rounded-xl shadow-lg w-full"
            />

            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Premium Quality Indian Fresh Onions
              </h2>

              <p className="mt-6 text-gray-700 text-lg">
                We export farm-fresh red onions sourced directly from trusted
                Indian farms. Our onions are known for strong flavor,
                long shelf life and high export quality standards suitable
                for wholesale buyers, supermarkets and food distributors.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <li>✔ Size: 40mm – 70mm+</li>
                <li>✔ Variety: Red Onion</li>
                <li>✔ Packaging: Mesh Bags / Jute Bags</li>
                <li>✔ Shelf Life: Long Storage Suitable</li>
                <li>✔ Export Markets: UAE, USA, Europe</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EXPORT MARKETS SECTION */}
        <section className="bg-gray-100 py-25 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Onion Export to UAE, USA & Europe
            </h2>

            <p className="mt-6 text-center text-gray-700 max-w-3xl mx-auto text-lg">
              As a leading onion exporter from India, Aditya Exports supplies
              bulk quantities to food distributors, supermarkets and importers
              across UAE, United States and European countries with
              competitive pricing and timely shipment.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-25 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Why Choose Aditya Exports?
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Reliable Bulk Supply
                </h3>
                <p className="mt-4 text-gray-600">
                  Consistent large-scale onion supply for international buyers.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Export Grade Packaging
                </h3>
                <p className="mt-4 text-gray-600">
                  Secure packaging ensuring freshness during transit.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Global Logistics Support
                </h3>
                <p className="mt-4 text-gray-600">
                  Smooth export documentation and international shipment handling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#0B1F3A] text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold">
            Looking for a Trusted Onion Exporter from India?
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Contact Aditya Exports today for bulk onion supply
            to UAE, USA and European markets.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Get Export Quote
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}