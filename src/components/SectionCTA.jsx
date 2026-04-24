export default function SectionCTA() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">
        Bergabung dengan Kami!
      </h2>
      <h3>Rasankan manfaat dari layanan kami dan tingkatkan visibilitas merek anda.</h3>
      <h3>Hubungi kami untuk infromasi lebih lanjut.</h3>
    <br></br>

      <button  onClick={() => {
          document.getElementById("kontak").scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="bg-white text-blue-600 px-6 py-3 rounded-xl shadow hover:bg-blue-700"
      >
        Hubungi Kami
      </button>
    </section>
  );
}