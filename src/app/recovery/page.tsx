'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import CookieConsent from '@/components/CookieConsent'; // adjust path
import { Car, Truck, Timer, Award, Wrench, Phone, MapPin } from 'lucide-react';

// Tyre icon component (reused)
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
  );
}

export default function RecoveryPage() {
  // Animation variants with proper typing
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleIn: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#132728]"
    >
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative text-white"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#102122] via-[#102122]/90 to-transparent z-10" />
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/services/s1.jpg"
              alt="Vehicle recovery"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative z-20 container mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <motion.div variants={scaleIn} className="flex justify-center md:justify-start mb-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 bg-[#25E2F4] rounded-full flex items-center justify-center text-black font-bold shadow-lg"
                >
                  <span className="text-3xl font-bold">RECOVERY</span>
                </motion.div>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
                24/7 Nationwide Vehicle Recovery – Fast, Reliable, Anywhere!
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg mb-6 text-gray-300">
                24/7 Mobile Tyre & Vehicle Recovery – Wherever You Need, Whenever You Need! Swift,
                professional service to keep you moving without delay.
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-semibold text-[#25E2F4]">
                EMERGENCY MOBILE TYRE FITTING & VEHICLE RECOVERY NATIONWIDE
              </motion.h2>
            </motion.div>

            {/* Right Column - Form Card */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#1C3537] border border-[#25E2F4]/30 p-6 rounded-2xl shadow-2xl text-center"
            >
              <h2 className="text-2xl font-bold mb-2 text-white">Stranded? We’ve Got You Covered!</h2>
              <p className="text-[#25E2F4] font-semibold mb-4 flex items-center justify-center gap-2">
                <Phone size={18} /> CALL US NOW
              </p>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: '#1BBECE' }}
                whileTap={{ scale: 0.95 }}
                href="tel:03335778247"
                className="block w-full bg-[#25E2F4] text-black font-bold py-3 px-6 rounded-lg transition mb-4 shadow-lg"
              >
                0333 577 8247
              </motion.a>
              <p className="text-sm mb-2 text-gray-400 flex items-center justify-center gap-1">
                <MapPin size={16} className="text-[#25E2F4]" /> ENTER YOUR POSTCODE OR LOCATION
              </p>
              <form className="space-y-3">
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: '#25E2F4' }}
                  type="text"
                  placeholder="Postcode or location"
                  className="w-full px-4 py-2 rounded-lg bg-[#102122] border border-[#25E2F4]/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#25E2F4]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-[#25E2F4] hover:bg-[#1BBECE] text-black font-bold py-2 px-4 rounded-lg transition shadow-lg"
                >
                  SUBMIT
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Services Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="py-16 bg-[#102122] relative overflow-hidden"
        >
          {/* Background tyre icons */}
          <div className="absolute inset-0 opacity-10">
            <TyreIcon className="absolute top-10 left-10 w-24 h-24 text-[#25E2F4]" />
            <TyreIcon className="absolute bottom-10 right-10 w-32 h-32 text-[#25E2F4]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
            >
              <span className="bg-[#25E2F4] text-black px-8 py-3 rounded-full inline-block shadow-xl">
                OUR SERVICES
              </span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#25E2F4]/30"
              >
                <Image
                  src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
                  alt="Vehicle recovery"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102122] to-transparent"></div>
                <Car className="absolute bottom-4 left-4 text-[#25E2F4] w-12 h-12 opacity-50" />
              </motion.div>
              <motion.div variants={staggerChildren} className="text-center md:text-left">
                <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  VEHICLE RECOVERY NATIONWIDE
                </motion.h3>
                <motion.p variants={fadeInUp} className="text-lg mb-6 text-gray-300">
                  Fast and reliable nationwide vehicle recovery, 24/7 assistance wherever you need.
                </motion.p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:03335778247"
                  className="inline-block bg-[#25E2F4] hover:bg-[#1BBECE] text-black font-bold py-3 px-8 rounded-full transition shadow-lg border-2 border-transparent hover:border-white"
                >
                  BOOK NOW
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* We Specialise In */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-[#132728]"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-white"
            >
              <span className="border-b-4 border-[#25E2F4] pb-2">We specialise in</span>
            </motion.h2>
          </div>
        </motion.section>

        {/* Rapid Response */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-[#102122]"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={staggerChildren} className="order-2 md:order-1">
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-2">
                <Timer className="text-[#25E2F4]" /> Rapid Response
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-300 mb-4">
                We understand that your time is precious. That’s why we guarantee a rapid response,
                typically arriving in under 45 minutes, ensuring minimal disruption to your day.
                Choose us for roadside assistance, rest assured that your time matters – we’re here
                to make it count. 24/7 availability.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:03335778247"
                className="inline-block bg-[#25E2F4] hover:bg-[#1BBECE] text-black font-bold py-3 px-8 rounded-full transition shadow-lg"
              >
                BOOK NOW
              </motion.a>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="order-1 md:order-2 relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#25E2F4]/30"
            >
              <Image
                src="/15.png"
                alt="Rapid response"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102122] to-transparent"></div>
              <Timer className="absolute bottom-4 right-4 text-[#25E2F4] w-12 h-12 opacity-50" />
            </motion.div>
          </div>
        </motion.section>

        {/* National Recovery */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-[#132728]"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#25E2F4]/30"
            >
              <Image
                src="/National-Recovery.jpg"
                alt="National recovery"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132728] to-transparent"></div>
              <Award className="absolute bottom-4 left-4 text-[#25E2F4] w-12 h-12 opacity-50" />
            </motion.div>
            <motion.div variants={staggerChildren}>
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-2">
                <Award className="text-[#25E2F4]" /> National Recovery
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-300 mb-4">
                If you break down or had an accident and need recovery. We’ll take your vehicle to
                any UK destination.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:03335778247"
                className="inline-block bg-[#25E2F4] hover:bg-[#1BBECE] text-black font-bold py-3 px-8 rounded-full transition shadow-lg"
              >
                BOOK NOW
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Transporting */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-[#102122]"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={staggerChildren} className="order-2 md:order-1">
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4 text-white flex items-center gap-2">
                <Wrench className="text-[#25E2F4]" /> Transporting
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-300 mb-4">
                Need help transporting your vehicle from an auction site or collection, we are here
                to help nationwide.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:03335778247"
                className="inline-block bg-[#25E2F4] hover:bg-[#1BBECE] text-black font-bold py-3 px-8 rounded-full transition shadow-lg"
              >
                BOOK NOW
              </motion.a>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="order-1 md:order-2 relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-[#25E2F4]/30"
            >
              <Image
                src="/Transporting.jfif"
                alt="Transporting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102122] to-transparent"></div>
              <Truck className="absolute bottom-4 right-4 text-[#25E2F4] w-12 h-12 opacity-50" />
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <TestimonialsCarousel />
      </main>

      <Footer />

      {/* Cookie Consent - reusable component */}
      <CookieConsent />
    </motion.div>
  );
}
