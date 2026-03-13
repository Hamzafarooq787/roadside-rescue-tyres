'use client';

import Image from 'next/image';
import { useInView } from '../hooks/useInView';

const icons = [
  '/logos/c1.webp',
  '/logos/c2.webp',
  '/logos/c3.webp',
  '/logos/c4.webp',
];

export default function PaymentIconsCarousel() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-[#25E2F4] to-[#e4e4e4]"
    >
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Heading with fade-down animation */}
        <h2
          className={`text-3xl md:text-4xl font-extrabold text-center tracking-widest mb-8 animate-on-enter ${
            isInView ? 'animate-in-view animate-fade-in-down' : ''
          }`}
        >
          WE ACCEPT CARD PAYMENTS
        </h2>

        <div className="w-full h-[1px] bg-black/30 mb-12"></div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {icons.map((src, idx) => (
            <div
              key={idx}
              className={`flex justify-center items-center animate-on-enter ${
                isInView ? 'animate-in-view animate-fade-in-up' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Image
                src={src}
                alt={`payment-${idx}`}
                width={200}
                height={120}
                className="object-contain w-[140px] md:w-[180px] transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
