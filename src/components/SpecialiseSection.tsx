'use client';

import Image from 'next/image';
import { Wrench, Clock, Truck, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView'; // adjust path as needed

const services = [
  {
    title: "EMERGENCY MOBILE TYRE FITTING",
    text: "We provide a comprehensive range of mobile tyre fitting services for your convenience. Our speciality is mobile tyre replacements, bringing the service right to your doorstep.",
    image: "/services/s1.jpg",
    icon: Wrench,
  },
  {
    title: "RAPID RESPONSE",
    text: "We understand that your time is precious. That's why we guarantee a rapid response, typically arriving in under 45 minutes, ensuring minimal disruption to your day.",
    image: "/services/s4.jpeg",
    icon: Clock,
  },
  {
    title: "ROADSIDE ASSISTANCE",
    text: "Flat tyre on the motorway or roadside? Our mobile technicians reach you quickly and get you back on the road safely.",
    image: "/services/s5.webp",
    icon: Truck,
  },
  {
    title: "VEHICLE RECOVERY",
    text: "Nationwide breakdown recovery and vehicle transportation service available 24/7.",
    image: "/services/s6.jpg",
    icon: Phone,
  },
];

export default function SpecialiseSection() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#25E2F4] py-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Title with fade-down animation */}
        <h2
          className={`text-center text-4xl font-extrabold mb-16 tracking-widest animate-on-enter ${
            isInView ? 'animate-in-view animate-fade-in-down' : ''
          }`}
        >
          WE SPECIALISE IN
        </h2>

        {services.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 0; // true for even indices (0,2) – image left
          return (
            <div
              key={i}
              className={`grid md:grid-cols-2 items-center gap-8 mb-16 last:mb-0 animate-on-enter ${
                isInView ? 'animate-in-view animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* IMAGE */}
              <div className={`${isEven ? '' : 'md:order-2'} relative group`}>
                <div className="relative w-full h-[420px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Icon overlay on hover */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon size={80} className="text-white animate-float-icon" />
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className={`p-12 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <Icon size={40} className="text-black animate-float-icon" />
                  <h3 className="text-2xl font-extrabold tracking-wider">
                    {service.title}
                  </h3>
                </div>

                <p className="mb-8 text-lg leading-relaxed">
                  {service.text}
                </p>

                <a
                  href="tel:03335778247"
                  className="inline-flex items-center gap-3 bg-[#102122] text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-[#0D6B7A] hover:shadow-lg group/btn"
                >
                  <span>BOOK NOW</span>
                  <Phone size={18} className="opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
