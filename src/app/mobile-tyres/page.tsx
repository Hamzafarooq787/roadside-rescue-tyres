
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import { HeroSection } from '@/components/mobile/HeroSection'
import { PostcodeForm } from '@/components/mobile/PostcodeForm'
import { ServiceCard } from '@/components/mobile/ServiceCard'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero with CTA */}
        <HeroSection />
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
{/* OUR SERVICES */}
<section className="bg-background py-16">
  <div className="container">

    <h2 className="text-3xl font-bold text-center mb-12 text-primary">
      OUR SERVICES
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Service 1 */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">

        <div className="relative h-[260px] w-full">
          <Image
            src="/services/s1.jpg"
            alt="Emergency Mobile Tyre Fitting"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-3">
            EMERGENCY MOBILE TYRE FITTING
          </h3>

          <p className="text-gray-600">
            Mobile tyre fitting for cars and vans—fast, hassle-free, and at your location.
          </p>
        </div>

      </div>


      {/* Service 2 */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">

        <div className="relative h-[260px] w-full">
          <Image
            src="/services/s3.jpeg"
            alt="Truck & Plant Tyre Fitting"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 text-center">
          <h3 className="text-xl font-bold mb-3">
            TRUCK & PLANT TYRE FITTING
          </h3>

          <p className="text-gray-600">
            Rapid emergency truck & plant tyre fitting—wherever you are, whenever you need.
          </p>
        </div>

      </div>

    </div>

  </div>
</section>

        {/* We specialise in */}
        <section className="bg-secondary py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-primary">We specialise in</h2>
          </div>
        </section>

        {/* Two column sections */}
        <section className="grid md:grid-cols-2">
          <div
            className="h-96 bg-cover bg-center"
            style={{ backgroundImage: "url('https://mobiletyresnationwide.co.uk/wp-content/uploads/2025/02/17-1.jpg')" }}
          />
          <div className="bg-secondary p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-4">EMERGENCY MOBILE TYRE FITTING</h3>
            <p className="text-muted-foreground mb-6">
              We provide a comprehensive range of mobile tyre fitting services for your convenience.
              Our specialty is mobile tyre replacements, bringing the service right to your doorstep.
            </p>
            <Button className="w-fit" asChild>
              <a href="tel:03331234567">BOOK NOW</a>
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-2">
          <div className="bg-secondary p-12 flex flex-col justify-center order-2 md:order-1">
            <h3 className="text-2xl font-bold text-primary mb-4">Rapid Response</h3>
            <p className="text-muted-foreground mb-6">
              We understand that your time is precious. That’s why we guarantee a rapid response,
              typically arriving in under 45 minutes, ensuring minimal disruption to your day.
              Choose us for roadside assistance, rest assured that your time matters – we’re here to make it count.
            </p>
            <p className="font-semibold text-primary mb-4">24-7 availability</p>
            <Button className="w-fit" asChild>
              <a href="tel:03331234567">BOOK NOW</a>
            </Button>
          </div>
          <div
            className="h-96 bg-cover bg-center order-1 md:order-2"
            style={{ backgroundImage: "url('https://mobiletyresnationwide.co.uk/wp-content/uploads/2025/02/15-1.jpg')" }}
          />
        </section>

        {/* Testimonials */}
        <section className="bg-background py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Hear from our satisfied clients</h2>
            <TestimonialsCarousel />
          </div>
        </section>

        <div className="border-t border-border/40" />
      </main>
      <Footer />
    </>
  )
}