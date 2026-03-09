'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Wrench, Truck, CircleDollarSign, Gauge } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const pricingItems = [
  {
    icon: Wrench,
    title: 'EXPERT FITTINGS',
    desc: 'Professional mobile tyre fittings are available nationwide across the UK, with emergency 24/7 service.',
  },
  {
    icon: Truck,
    title: 'MILEAGE FEE',
    desc: 'This includes the cost of collecting the tyre from the depot, travelling to your location, and providing professional fitting services nationwide.',
  },
  {
    icon: CircleDollarSign,
    title: 'TYRE PRICING',
    desc: 'We deliver the tyres you choose at the time of booking nationwide, bringing them directly to your location.',
  },
  {
    icon: Gauge,
    title: 'WHEEL BALANCING',
    desc: 'Balancing and valve replacement is included where necessary to ensure smooth driving.',
  },
];

export default function PricingCarousel() {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-[#18d1be] to-[#e3e3e3]"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading with fade-left */}
        <h2
          className={`text-4xl font-extrabold text-center tracking-widest mb-6 animate-on-enter ${
            isInView ? 'animate-in-view animate-fade-in-left' : ''
          }`}
        >
          OUR PRICING
        </h2>

        {/* Description with fade-right */}
        <p
          className={`text-center max-w-4xl mx-auto mb-16 text-lg animate-on-enter ${
            isInView ? 'animate-in-view animate-fade-in-right' : ''
          }`}
        >
          Unlike appointment-based services from companies, Mobile Tyres Nationwide
          brings the service directly to you—no booking required. We prioritise
          sending the nearest fitter to get you back on the road quickly and
          efficiently.
        </p>

        {/* Swiper with fade-up */}
        <div
          className={`animate-on-enter ${
            isInView ? 'animate-in-view animate-fade-in-up' : ''
          }`}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            loop
          >
            {pricingItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={idx}>
                  <div className="border border-gray-400 p-10 text-center h-full bg-transparent hover:bg-white/40 transition duration-300 group">
                    <div className="flex justify-center mb-6">
                      {/* Icon with continuous float and hover spin */}
                      <Icon
                        size={60}
                        className="text-black animate-float-icon group-hover:animate-spin-slow transition-all"
                      />
                    </div>
                    <h3 className="text-xl font-extrabold tracking-widest mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}