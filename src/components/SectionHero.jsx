export default function SectionHero() {
  return (
    <section
      id="beranda"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/barrazahwan/gedung.jfif')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl px-6 md:px-16 text-white">
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Solusi Pengadaan Barang dan Jasa Terpercaya
          </h1>

          <p className="text-gray-200 mb-8">
            Kami menyediakan layanan berkualitas tinggi dengan fokus pada inovasi dan kepercayaan.
          </p>

      <button
        onClick={() => {
          document.getElementById("kontak").scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-700"
      >
        Hubungi Kami
      </button>

        </div>
      </div>
    </section>
  );
}
