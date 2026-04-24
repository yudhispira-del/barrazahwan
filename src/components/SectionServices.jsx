const services = [
  { title: "Perencanaan", desc: "Merencanakan setiap aspek proyek untuk mencapai hasil yang optimal dan memuaskan." },
  { title: "Implementasi", desc: "Melaksanakan rencana dengan perhatian pada detail untuk memastikan kualitas dalam setiap fase." },
  { title: "Evaluasi", desc: "Mengevaluasi hasil untuk meningkatkan proses dan layanan di masa mendatang." },
];

export default function SectionServices() {
  return (
    <section id="layanan" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-12">
        Layanan Utama
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {services.map((s, i) => (
          <div key={i} className="p-8 bg-white rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}