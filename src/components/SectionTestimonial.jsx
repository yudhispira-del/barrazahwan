import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function SectionTestimonial() {

  const testimonials = [
    {
      name: "Budi Santoso",
      photo: "/src/assets/user.png",
      text: "Pelayanan sangat bagus dan cepat!",
    },
    {
      name: "Siti Aminah",
      photo: "/src/assets/user.png",
      text: "Profesional dan terpercaya, sangat recommended.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12 text-primary">
        Testimoni Klien
      </h2>

      <div className="max-w-3xl mx-auto px-6">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          loop
        >

          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>

              <div className="flex flex-col items-center">

                {/* Avatar */}
                <img
                  src={t.photo}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow mb-4"
                />

                {/* Chat Bubble */}
                <div className="relative bg-white shadow-lg rounded-2xl px-6 py-4 max-w-md">

                  <p className="text-gray-600 italic">
                    "{t.text}"
                  </p>

                  {/* Tail / segitiga */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                </div>

                {/* Nama */}
                <h3 className="mt-4 font-semibold text-dark">
                  {t.name}
                </h3>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </section>
  );
}