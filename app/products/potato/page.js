import Link from "next/link";

export const metadata = {
  title: "Fresh Potato Exporter from India | Bulk Indian Potato Supplier",
  description:
    "Aditya Exports is a trusted fresh potato exporter from India supplying premium quality Indian potatoes in bulk to UAE, USA and Europe with export-grade packaging and global shipping.",
  keywords: [
    "Fresh potato exporter from India",
    "Indian potato supplier",
    "Potato export company India",
    "Bulk potato exporter",
    "Potato supplier UAE USA Europe",
  ],
};

export default function FreshPotatoPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Fresh Indian Potato",
            brand: {
              "@type": "Organization",
              name: "Aditya Exports",
            },
            description:
              "Premium quality fresh potatoes exported from India to UAE, USA and Europe with international packaging standards.",
          }),
        }}
      />

      <div className="bg-white">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-r from-[#0B1F3A] to-black text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Fresh Potato Exporter from India
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-3xl">
              Aditya Exports is a leading Indian potato exporter supplying
              premium quality fresh potatoes in bulk to international
              markets including UAE, USA and Europe with reliable global shipping.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition"
              >
                Request Potato Export Quote
              </Link>
            </div>
          </div>
        </section>

        {/* PRODUCT DETAILS */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Premium Quality Indian Potatoes for Export
            </h2>

            <p className="mt-6 text-lg text-gray-700">
              We supply export-grade fresh potatoes sourced from trusted Indian farms.
              Our potatoes are carefully sorted, cleaned and packed to maintain
              freshness during international shipping.
            </p>
          </div>
        </section>

        {/* EXPORT MARKETS */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Potato Export Markets
            </h2>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Potato Export to UAE
                </h3>
                <p className="mt-4 text-gray-600">
                  Reliable bulk potato supply to UAE wholesalers and distributors.
                </p>
                <Link
                  href="/export/export-vegetables-to-uae"
                  className="text-[#0B1F3A] font-semibold mt-4 inline-block"
                >
                  Learn More →
                </Link>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Potato Export to USA
                </h3>
                <p className="mt-4 text-gray-600">
                  Export-quality Indian potatoes supplied to US importers.
                </p>
                <Link
                  href="/export/export-vegetables-to-usa"
                  className="text-[#0B1F3A] font-semibold mt-4 inline-block"
                >
                  Learn More →
                </Link>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-md">
                <h3 className="text-xl font-semibold">
                  Potato Export to Europe
                </h3>
                <p className="mt-4 text-gray-600">
                  Consistent potato supply for European food distributors.
                </p>
                <Link
                  href="/export/export-vegetables-to-europe"
                  className="text-[#0B1F3A] font-semibold mt-4 inline-block"
                >
                  Learn More →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose Aditya Exports for Potato Supply?
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Bulk Export Capability
                </h3>
                <p className="mt-4 text-gray-600">
                  Large volume supply with consistent quality.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Export Documentation
                </h3>
                <p className="mt-4 text-gray-600">
                  Complete export paperwork for smooth international trade.
                </p>
              </div>

              <div className="p-6 shadow-md rounded-xl">
                <h3 className="text-xl font-semibold">
                  Timely Global Shipping
                </h3>
                <p className="mt-4 text-gray-600">
                  Efficient logistics coordination from India to global ports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#0B1F3A] text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold">
            Looking for a Reliable Fresh Potato Exporter from India?
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Contact Aditya Exports today for bulk potato export inquiries.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-black px-10 py-4 rounded-full font-semibold hover:opacity-90 transition"
            >
              Get Potato Export Quote
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}