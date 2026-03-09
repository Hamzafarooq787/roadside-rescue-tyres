import Hero from '@/components/Hero'
import ServiceCards from '@/components/ServiceCards'
import PartnersCarousel from '@/components/PartnersCarousel'
import PricingCarousel from '@/components/PricingCarousel'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import PaymentIconsCarousel from '@/components/PaymentIconsCarousel'
import WhatsAppButton from '@/components/WhatsAppButton'

import Image from 'next/image'
import CTA from '@/components/CTA'
import SpecialiseSection from '@/components/SpecialiseSection'
import Header from '@/layout/header'
import Footer from '@/layout/footer'

export default function Home() {
  return (
    <>
      <Header />

      <main id="content">

        <Hero />

        {/* Tyre Issues Section */}
        <section className="py-20 bg-black text-center text-white overflow-hidden">

          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1FE0C6] tracking-wider animate-fadeUp">
            TYRE ISSUES? WE'VE GOT YOU COVERED!
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-300 animate-fadeUp delay-200">
            Get quick, professional mobile tyre fitting services wherever you are.
            Whether you're at home, at work, or stranded on the roadside,
            Roadside Rescue Tyres provides fast nationwide assistance to get you back on the road safely.
          </p>

        </section>


        {/* Arrival Section */}
        <section className="w-full flex flex-col md:flex-row">

          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 bg-[#20D6C2] flex items-center justify-center py-16">

            <Image
              src="/Mobile-Tyres2.webp"
              alt="Roadside Rescue Tyres"
              width={650}
              height={400}
              className="object-contain animate-van"
            />

          </div>


          {/* RIGHT SIDE */}
          <div className="w-full md:w-1/2 bg-black flex items-center justify-center py-16">

            <div className="text-center text-white max-w-md">

              <h2 className="text-3xl md:text-4xl font-bold text-[#20D6C2] mb-6">
                45-60 MINUTE ARRIVAL
                <br />
                (NATIONWIDE)
              </h2>

              <p className="mb-4 tracking-wider text-gray-300">
                CALL US NOW
              </p>

              <a
                href="tel:03335778247"
                className="block bg-[#20D6C2] text-black font-bold py-3 mb-6 hover:scale-105 transition"
              >
                0333 577 8247
              </a>

              <p className="text-gray-300 mb-3">
                ENTER YOUR POSTCODE OR LOCATION
              </p>

              <input
                type="text"
                placeholder=""
                className="w-full mb-4 px-4 py-3 text-black"
              />

              <button className="w-full bg-[#20D6C2] text-black py-3 font-semibold hover:scale-105 transition">
                SUBMIT
              </button>

            </div>

          </div>

        </section>
        <CTA />
        <ServiceCards />


        {/* Our Services */}
        {/* <section className="py-20">
          <div className="container">

            <h2 className="text-4xl font-bold text-center mb-12">
              OUR SERVICES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {[
                {
                  title: 'EMERGENCY MOBILE TYRE FITTING',
                  desc: 'Fast mobile tyre replacement wherever you are. We come directly to your location.',
                },
                {
                  title: 'VEHICLE RECOVERY NATIONWIDE',
                  desc: '24/7 professional vehicle recovery services anywhere across the UK.',
                },
                {
                  title: 'TRUCK & PLANT TYRE FITTING',
                  desc: 'Rapid response tyre fitting for trucks, vans and heavy vehicles.',
                },
              ].map((service, i) => (

                <div key={i} className="card animation-grow text-center">

                  <h3 className="text-xl font-bold mb-2">
                    {service.title}
                  </h3>

                  <p className="mb-5">
                    {service.desc}
                  </p>

                  <a
                    href="tel:03335778247"
                    className="btn-primary"
                  >
                    BOOK NOW
                  </a>

                </div>

              ))}

            </div>

          </div>
        </section> */}


        <PartnersCarousel />


        <SpecialiseSection />

        <PricingCarousel />
        <TestimonialsCarousel />
        <PaymentIconsCarousel />

        <div className="border-t" />

      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}