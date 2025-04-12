import TierCard from "../components/TierCard";

const tiers = [
    {
        title: "Basic",
        price: "Rp 99.000",
        features: ["Catat barang masuk", "Catat barang keluar", "Catat keuntungan"],
        illustration: "/images/undraw_file-search_cbur.svg",
    },
    {
        title: "Business",
        price: "Rp 199.000",
        features: [
            "Catat barang masuk & keluar",
            "Catat keuntungan",
            "Analisa penjualan (Chart)",
            "Support 7x24 Jam",
        ],
        illustration: "/images/undraw_data-trends_kv5v.svg",
    },
    {
        title: "Entrepreneur",
        price: "Rp 299.000",
        features: [
            "Semua fitur Business",
            "Export ke Excel",
            "AI Prediksi penghasilan",
        ],
        illustration: "/images/undraw_algorithm-execution_rksm.svg",
    },
];

function Home() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="text-center py-20 px-6 bg-white">
                <img
                    src="/images/undraw_organizing-data_uns9.svg"
                    alt="Hero Illustration"
                    className="mx-auto w-60 mb-6"
                />
                <h1 className="text-4xl font-bold">Welcome to KEDA ERP</h1>
                <p className="mt-4">
                    Solusi mudah pencatatan untuk bisnis Anda
                </p>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 px-6 bg-gray-100 text-center">
                <img
                    src="/images/undraw_vibe-coding_mjme.svg"
                    alt="About Illustration"
                    className="mx-auto w-52 mb-6"
                />
                <h2 className="text-2xl font-bold mb-4">About</h2>
                <p className="max-w-2xl mx-auto text-gray-700">
                    KEDA ERP membantu pengusaha mencatat barang masuk/keluar dan
                    menghitung keuntungan harian.
                </p>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-16 px-6 text-center bg-gray-50">
                <img
                    src="/images/undraw_online-payments_p97e.svg"
                    alt="Pricing Illustration"
                    className="mx-auto w-52 mb-6"
                />
                <h2 className="text-2xl font-bold mb-8">Pricing</h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <TierCard key={index} {...tier} />
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-6 bg-gray-100 text-center relative">
                <img
                    src="/images/undraw_people-search_xpq4.svg"
                    alt="Contact Illustration"
                    className="mx-auto w-44 mb-6"
                />
                <h2 className="text-2xl font-bold mb-4">Contact</h2>
                <p className="text-gray-700">
                    Email kami di{" "}
                    <a href="mailto:contact@kedaerp.com" className="text-blue-600">
                        contact@kedaerp.com
                    </a>
                </p>

                <div className="hidden md:block bg-purple-400 rounded-tl-full h-full w-[250px] absolute bottom-0 right-0"></div>
                <div className="hidden md:block bg-purple-400 rounded-tl-full h-3/6 w-[250px] absolute bottom-0 right-48"></div>
            </section>
        </div>
    );
}

export default Home;
