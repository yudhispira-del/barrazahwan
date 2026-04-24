export default function SectionAbout() {
  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Tentang Barra Zahwan
          </h2>

          <p className="text-gray-600 mb-6">
            Mitra terpercaya dalam pengadaan barang dan jasa dengan komitmen tinggi terhadap kualitas dan profesionalisme.
          </p>

          <button className="border px-5 py-2 rounded-lg hover:bg-gray-100">
            Baca Selengkapnya
          </button>
        </div>

        <img
          src="/src/assets/rapat.jfif"
          className="rounded-2xl shadow-xl"
        />
      </div>
    </section>
  );
}