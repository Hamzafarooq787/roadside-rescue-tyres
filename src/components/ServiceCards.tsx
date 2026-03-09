'use client';

import Image from 'next/image';
import { Phone, Truck, Wrench } from 'lucide-react'; // Icons for each service
import { useInView } from '../hooks/useInView'; // adjust path as needed

const services = [
  {
    img: "/services/s1.jpg",
    title: "EMERGENCY MOBILE TYRE FITTING",
    desc: "Mobile tyre fitting for cars and vans—fast, hassle-free, and at your location.",
    icon: Phone,
  },
  {
    img: "/services/s2.jfif",
    title: "VEHICLE RECOVERY NATIONWIDE",
    desc: "Fast and reliable nationwide vehicle recovery with 24/7 roadside assistance.",
    icon: Truck,
  },
  {
    img: "/services/s3.jpeg",
    title: "TRUCK & PLANT TYRE FITTING",
    desc: "Rapid emergency truck and plant tyre fitting wherever you are, whenever you need.",
    icon: Wrench,
  },
];

export default function ServicesSection() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#18d6c2] py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title with fade-down animation */}
        <h2
          className={`text-center text-3xl md:text-4xl font-extrabold tracking-widest mb-14 animate-on-enter ${
            isInView ? 'animate-in-view animate-fade-in-down' : ''
          }`}
        >
          OUR SERVICES
        </h2>

        {/* Grid with border */}
        <div className="grid md:grid-cols-3 border border-black/20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`text-center border-r border-black/20 last:border-r-0 pb-12 group animate-on-enter ${
                  isInView ? 'animate-in-view animate-fade-in-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image with overlay icon and hover zoom */}
                <div className="relative w-full h-[300px] border-b border-black/20 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Icon overlay on image */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon size={60} className="text-white animate-float-icon" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 pt-8">
                  {/* Title with icon inline */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Icon size={28} className="text-black animate-float-icon" />
                    <h3 className="text-lg font-bold tracking-widest">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {service.desc}
                  </p>

                  {/* Button with hover effect */}
                  <button className="bg-black text-white px-10 py-3 tracking-widest transition-all duration-300 transform hover:scale-105 hover:bg-teal-700 hover:shadow-lg flex items-center justify-center gap-2 mx-auto group/btn">
                    <span>BOOK NOW</span>
                    <Phone size={18} className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}