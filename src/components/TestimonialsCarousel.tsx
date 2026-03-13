'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useInView } from "../hooks/useInView"; // adjust path as needed

const testimonials = [
  {
    name: "Marek Minárik",
    text: "Hi, leaving the review a bit late, sorry had a lot to catch up with. Nevertheless, the service was great, communication too, while waiting for the van and a quick tyre replacement on the spot. The usual big companies would have me wait till next day, but they came right away. Thank you.",
  },
  {
    name: "Hannah Luttrell",
    text: "Fantastic service. The technician arrived quickly and replaced the tyre within minutes. Friendly, professional and very reliable.",
  },
  {
    name: "Husna Khan",
    text: "I had a breakdown on the motorway and they came within 45 minutes. Extremely professional service and very helpful staff.",
  },
];

export default function TestimonialsCarousel() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section ref={sectionRef}>
      {/* Title bar with fade-down animation */}
      <div
        className={`bg-[#8AE600] py-10 animate-on-enter ${
          isInView ? 'animate-in-view animate-fade-in-down' : ''
        }`}
      >
        <h2 className="text-center text-4xl font-extrabold tracking-widest">
          HEAR FROM OUR SATISFIED CLIENTS
        </h2>
      </div>

      {/* Background testimonial section */}
      <div
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: "url('/r1.jpg')" }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-4xl mx-auto text-center text-white px-6">
          {/* Quote icon with continuous float animation */}
          <div className="text-7xl mb-6 text-[#8AE600] animate-float-icon">
            “
          </div>

          {/* Swiper with fade-up animation */}
          <div
            className={`animate-on-enter ${
              isInView ? 'animate-in-view animate-fade-in-up' : ''
            }`}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  {/* Slide content with scale transition on hover */}
                  <div className="transition-transform duration-300 hover:scale-105">
                    <p className="text-lg md:text-xl leading-relaxed mb-8">
                      {t.text}
                    </p>
                    <p className="text-lg font-semibold tracking-wide">
                      {t.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
