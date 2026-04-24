import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SectionPortfolio() {

  const projects = [
    {
      title: "Project 1",
      images: [
        "/barrazahwan/lay1.jfif",
        "/barrazahwan/lay1.jfif",
        "/barrazahwan/lay1.jfif",
      ],
    },
    {
      title: "Project 2",
      images: [
        "/src/assets/lay2.jfif",
        "/src/assets/lay2.jfif",
      ],
    },
    {
      title: "Project 3",
      images: [
        "/src/assets/lay3.jfif",
        "/src/assets/lay3.jfif",
      ],
    },
  ];

  return (
    <section id="portofolio" className="py-20 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-primary">
        Portofolio
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {projects.map((project, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-4">

            {/* SLIDER */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop
              className="rounded-xl mb-4"
            >
              {project.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* TITLE */}
            <h3 className="font-semibold text-lg text-dark">
              {project.title}
            </h3>

          </div>
        ))}
      </div>
    </section>
  );
}
