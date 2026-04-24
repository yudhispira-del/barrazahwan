export default function SectionContact() {
  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {/* LEFT - INFO */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Hubungi Kami
          </h2>

          <p className="text-gray-600 mb-6">
            Kami siap membantu kebutuhan pengadaan barang dan jasa Anda.
            Silakan hubungi kami melalui kontak berikut.
          </p>

          <div className="space-y-4 text-gray-700">

            <p>📍 Bandung, Indonesia</p>
            <p>📧 info@barrazahwan.com</p>
            <p>📞 08123456789</p>

          </div>

          {/* SOCIAL MEDIA */}
          <div className="flex gap-4 mt-6">

            <a href="#" className="bg-white p-3 rounded-full shadow hover:bg-green-100 transition">
              🌐
            </a>

            <a href="#" className="bg-white p-3 rounded-full shadow hover:bg-green-100 transition">
              📸
            </a>

            <a href="#" className="bg-white p-3 rounded-full shadow hover:bg-green-100 transition">
              💼
            </a>

          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h3 className="text-xl font-semibold mb-4">
            Kirim Pesan
          </h3>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Nama"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              placeholder="Pesan"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Kirim Pesan
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}