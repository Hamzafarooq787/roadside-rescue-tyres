import Footer from '@/layout/footer'
import Header from '@/layout/header'
import { HeroSection } from '@/components/mobile/HeroSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

// Icons
import { Car, Truck, Timer, MapPin, Star, Phone, Award, Wrench } from 'lucide-react'
import CookieConsent from '@/components/CookieConsent'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero with CTA */}
        <HeroSection />

        {/* Tyre Issues Section - with icons & animations */}
        <section className="py-20 bg-gradient-to-b from-[#8AE600]/90 to-[#067A63] text-center text-white overflow-hidden relative">
          {/* decorative icons */}
          <div className="absolute top-10 left-5 md:left-20 text-white/20 animate-pulse">
            <Car size={80} />
          </div>
          <div className="absolute bottom-10 right-5 md:right-20 text-white/20 animate-pulse delay-200">
            <Wrench size={80} />
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wider animate-fadeUp drop-shadow-lg">
            TYRE ISSUES? WE'VE GOT YOU COVERED!
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-200 animate-fadeUp delay-200">
            Get quick, professional mobile tyre fitting services wherever you are.
            Whether you're at home, at work, or stranded on the roadside,
            Roadside Rescue Tyres provides fast nationwide assistance to get you back on the road safely.
          </p>
        </section>

        {/* Arrival Section */}
        <section className="w-full flex flex-col md:flex-row">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 bg-[#8AE600] flex items-center justify-center py-16 relative overflow-hidden">
            <Image
              src="/Mobile-Tyres2.webp"
              alt="Roadside Rescue Tyres"
              width={650}
              height={400}
              className="object-contain animate-van relative z-10"
            />
            {/* floating tyre icons */}
            <TyreIcon className="absolute bottom-5 left-5 text-white/30 w-16 h-16 animate-bounce" />
            <TyreIcon className="absolute top-5 right-5 text-white/30 w-20 h-20 animate-spin-slow" />
          </div>

          {/* RIGHT SIDE - replaced black with dark theme color */}
          <div className="w-full md:w-1/2 bg-[#0A0A0A] flex items-center justify-center py-16 animate-fadeIn shadow-inner">
            <div className="text-center text-white max-w-md">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8AE600] mb-6 animate-slideRight drop-shadow-md">
                45-60 MINUTE ARRIVAL
                <br />
                (NATIONWIDE)
              </h2>

              <p className="mb-4 tracking-wider text-gray-300 flex items-center justify-center gap-2">
                <Phone className="text-[#8AE600]" size={20} />
                CALL US NOW
              </p>

              <a
                href="tel:03335778247"
                className="block bg-[#8AE600] text-black font-bold py-3 mb-6 hover:scale-105 transition transform duration-300 shadow-lg"
              >
                0333 577 8247
              </a>

              <p className="text-gray-300 mb-3 flex items-center justify-center gap-2">
                <MapPin className="text-[#8AE600]" size={20} />
                ENTER YOUR POSTCODE OR LOCATION
              </p>

              <input
                type="text"
                placeholder=""
                className="w-full mb-4 px-4 py-3 text-black border-2 border-[#8AE600] focus:ring-2 focus:ring-[#8AE600]/50 outline-none shadow-md"
              />

                <button className="w-full bg-[#8AE600] text-black py-3 font-semibold hover:scale-105 transition transform duration-300 shadow-lg">
                SUBMIT
              </button>
            </div>
          </div>
        </section>

        {/* OUR SERVICES - reduced black, added theme color background */}
        <section className="bg-[#111111] py-16 relative overflow-hidden">
          {/* Background tyre pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10">
              <TyreIcon className="w-24 h-24 text-[#8AE600]" />
            </div>
            <div className="absolute bottom-10 right-10">
              <TyreIcon className="w-32 h-32 text-[#8AE600]" />
            </div>
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2">
              <TyreIcon className="w-20 h-20 text-[#8AE600] rotate-45" />
            </div>
          </div>

          <div className="container relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-fadeUp">
              <span className="bg-[#8AE600] text-black px-8 py-3 rounded-full inline-block shadow-xl">
                OUR SERVICES
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Service 1 */}
              <div className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#8AE600]/40 shadow-2xl hover:shadow-[#8AE600]/30 hover:shadow-2xl transition-all duration-500 animate-slideLeft">
                {/* Tyre icon background inside card */}
                <div className="absolute -right-6 -top-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <TyreIcon className="w-32 h-32 text-[#8AE600]" />
                </div>

                <div className="relative h-64 w-full">
                  <Image
                    src="/services/s1.jpg"
                    alt="Emergency Mobile Tyre Fitting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
                  {/* Small icon overlay on image */}
                  <div className="absolute bottom-4 left-4 bg-[#8AE600] p-2 rounded-full shadow-lg">
                    <Car className="text-black" size={24} />
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <TyreIcon className="w-6 h-6 text-[#8AE600]" />
                    EMERGENCY MOBILE TYRE FITTING
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mobile tyre fitting for cars and vans—fast, hassle-free, and at your location. Our experts arrive within 45-60 minutes nationwide.
                  </p>
                  <div className="mt-4 flex items-center text-[#8AE600]">
                    <span className="text-sm font-semibold">24/7 AVAILABLE</span>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-[#8AE600]/40 shadow-2xl hover:shadow-[#8AE600]/30 hover:shadow-2xl transition-all duration-500 animate-slideRight">
                <div className="absolute -right-6 -top-6 opacity-20 group-hover:opacity-30 transition-opacity">
                  <TyreIcon className="w-32 h-32 text-[#8AE600]" />
                </div>

                <div className="relative h-64 w-full">
                  <Image
                    src="/services/s3.jpeg"
                    alt="Truck & Plant Tyre Fitting"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-[#8AE600] p-2 rounded-full shadow-lg">
                    <Truck className="text-black" size={24} />
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <TyreIcon className="w-6 h-6 text-[#8AE600]" />
                    TRUCK & PLANT TYRE FITTING
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Rapid emergency truck & plant tyre fitting—wherever you are, whenever you need. Heavy-duty service for commercial vehicles.
                  </p>
                  <div className="mt-4 flex items-center text-[#8AE600]">
                    <span className="text-sm font-semibold">24/7 AVAILABLE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra CTA */}
            <div className="text-center mt-12">
              <Button className="bg-[#8AE600] hover:bg-[#72BE00] text-black font-bold px-8 py-6 rounded-full text-lg transition-all hover:scale-105 shadow-xl">
                VIEW ALL SERVICES
              </Button>
            </div>
          </div>
        </section>

        {/* We specialise in - with theme color background */}
        <section className="bg-gradient-to-r from-[#8AE600]/20 to-[#8AE600]/5 py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#8AE600] animate-fadeUp drop-shadow">
              We specialise in
            </h2>
            {/* You could add a grid of specialities here with icons */}
          </div>
        </section>

        {/* Two column sections */}
        <section className="grid md:grid-cols-2">
          {/* Left side: image with floating icons */}
          <div className="relative h-96 bg-cover bg-center animate-fadeIn overflow-hidden"
               style={{ backgroundImage: "url('https://mobiletyresnationwide.co.uk/wp-content/uploads/2025/02/17-1.jpg')" }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <TyreIcon className="absolute top-5 left-5 text-white/30 w-16 h-16 animate-pulse" />
            <TyreIcon className="absolute bottom-5 right-5 text-white/30 w-20 h-20 animate-spin-slow" />
            <Car className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 w-24 h-24" />
          </div>
          {/* Right side: content with theme color background */}
          <div className="bg-[#8AE600]/10 p-12 flex flex-col justify-center animate-slideRight shadow-inner">
            <h3 className="text-2xl font-bold text-[#8AE600] mb-4 flex items-center gap-2">
              <Award className="text-[#8AE600]" /> EMERGENCY MOBILE TYRE FITTING
            </h3>
            <p className="text-white mb-6">
              We provide a comprehensive range of mobile tyre fitting services for your convenience.
              Our specialty is mobile tyre replacements, bringing the service right to your doorstep.
            </p>
            <Button className="w-fit bg-[#8AE600] hover:bg-[#72BE00] text-black shadow-lg" asChild>
              <a href="tel:03331234567">BOOK NOW</a>
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-2">
          {/* Left side: content with theme color background */}
          <div className="bg-[#8AE600]/10 p-12 flex flex-col justify-center order-2 md:order-1 animate-slideLeft shadow-inner">
            <h3 className="text-2xl font-bold text-[#8AE600] mb-4 flex items-center gap-2">
              <Timer className="text-[#8AE600]" /> Rapid Response
            </h3>
            <p className="text-white mb-6">
              We understand that your time is precious. That’s why we guarantee a rapid response,
              typically arriving in under 45 minutes, ensuring minimal disruption to your day.
              Choose us for roadside assistance, rest assured that your time matters – we’re here to make it count.
            </p>
            <p className="font-semibold text-[#8AE600] mb-4">24-7 availability</p>
            <Button className="w-fit bg-[#8AE600] hover:bg-[#72BE00] text-black shadow-lg" asChild>
              <a href="tel:03331234567">BOOK NOW</a>
            </Button>
          </div>
          {/* Right side: image with floating icons */}
          <div className="relative h-96 bg-cover bg-center order-1 md:order-2 animate-fadeIn overflow-hidden"
               style={{ backgroundImage: "url('https://mobiletyresnationwide.co.uk/wp-content/uploads/2025/02/15-1.jpg')" }}>
            <div className="absolute inset-0 bg-black/20"></div>
            <TyreIcon className="absolute top-5 right-5 text-white/30 w-16 h-16 animate-bounce" />
            <TyreIcon className="absolute bottom-5 left-5 text-white/30 w-20 h-20 animate-spin-slow" />
            <Wrench className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/40 w-24 h-24" />
          </div>
        </section>

        {/* Testimonials with subtle theme background */}
        <section className="bg-gradient-to-b from-[#8AE600]/5 to-transparent py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-[#8AE600] animate-fadeUp flex items-center justify-center gap-2 drop-shadow">
              <Star className="text-[#8AE600]" fill="#8AE600" /> Hear from our satisfied clients
            </h2>
            <TestimonialsCarousel />
          </div>
        </section>

        <div className="border-t border-[#8AE600]/20" />
      </main>
      <Footer />
      <CookieConsent/>
    </>
  )
}

// Tyre icon component
function TyreIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3 L12 7 M12 17 L12 21 M3 12 L7 12 M17 12 L21 12" />
    </svg>
  )
}
