'use client';

import { Wrench, Car, Clock, Home } from "lucide-react";
import { useInView } from "../hooks/useInView";

export default function CTA() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  const cards = [
    { icon: Car, title: "MOBILE TYRE FITTING & REPAIRS", text: "Our emergency tyre fitting service provides urgent tyre repair or replacement directly at your location. Ideal for unexpected punctures, roadside breakdowns or damaged tyres.", direction: "left" },
    { icon: Wrench, title: "WE COME TO YOU (NATIONWIDE)", text: "Roadside Rescue Tyres provides professional mobile tyre replacement services across the UK, delivering fast on-site tyre solutions wherever your vehicle is located.", direction: "right" },
    { icon: Clock, title: "FREE 24/7 HELPLINE", text: "Contact our team anytime for quick quotes and immediate tyre fitting support. Our 24/7 helpline ensures help is always available when you need it most.", direction: "left" },
    { icon: Home, title: "AT HOME, WORK OR ROADSIDE", text: "Whether you are at home, at work or stranded on the roadside, our technicians arrive equipped with the tools and tyres needed to complete the job efficiently.", direction: "right" }
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-r from-[#132728] via-[#25E2F4]/20 to-[#25E2F4]/40 py-20"
    >
      {/* Top Heading */}
      <div className={`text-center max-w-4xl mx-auto px-6 mb-14 animate-on-enter ${isInView ? 'animate-in-view animate-fade-in-down' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wider mb-6">
          NEED TYRES? WE COME TO YOU! 24/7 EMERGENCY MOBILE TYRE FITTING
        </h2>
        <p className="text-gray-700 text-lg">
          Roadside Rescue Tyres supplies all tyre brands and sizes, from budget
          to premium. For emergency call-outs or bookings, contact us anytime.
          Our mobile technicians get your vehicle back on the road quickly.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto border border-gray-400 grid md:grid-cols-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`p-12 border-b md:border-r border-gray-400 text-center group animate-on-enter ${
              isInView
                ? index % 2 === 0
                  ? 'animate-in-view animate-fade-in-left'
                  : 'animate-in-view animate-fade-in-right'
                : ''
            }`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            {/* Icon with continuous float + hover spin */}
            <card.icon
              size={40}
              className="mx-auto mb-6 text-black animate-float-icon group-hover:animate-spin-slow transition-all"
            />
            <div className="bg-[#102122] text-white py-3 mb-6 text-sm tracking-widest hover:bg-[#0D6B7A] transition-colors">
              {card.title}
            </div>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={`text-center mt-14 animate-on-enter ${isInView ? 'animate-in-view animate-fade-in-up' : ''}`}>
        <a
          href="tel:03335778247"
          className="bg-[#102122] text-white px-10 py-4 inline-block tracking-widest hover:scale-110 hover:bg-[#0D6B7A] hover:shadow-lg transition-all duration-300"
        >
          CALL US NOW
        </a>
      </div>
    </section>
  );
}
