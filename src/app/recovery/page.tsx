'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';

export default function RecoveryPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Marek Minárik',
      text: 'Hi, leaving the review a bit late, sorry had a lot to catch up with. Nevertheless, the service was great, communication too, while waiting for the van and a quick tyre replacement on the spot. The usual big companies would have me wait til next day, but Roadside Rescue Tyres came right away. Thank you. Blue Mazda in Shefford.',
    },
    {
      name: 'Hannah Luttrell',
      text: "If I could give more than 5 stars on this review, then I definitely would! I was so anxious having to call someone out to fix my tyre, especially as a woman on the road alone, but I'm so glad I called them. The customer service was wonderful, I felt instantly at ease, the service provided was smooth and quick, and the communication was fantastic. I can not recommend this company enough!",
    },
    {
      name: 'Husna Khan',
      text: 'I recently had a breakdown on the side of the road, it was a stressful situation. Fortunately, the team from Roadside Rescue Tyres came to my rescue. They arrived quickly, were incredibly professional, and made me feel at ease right away. The tyre was replaced efficiently, and they took the time to ensure everything was safe before I continued my journey. Their kindness and expertise made all the difference. Highly recommend them for their excellent service!',
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const staggerChildren = {
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
      className="min-h-screen font-sans antialiased bg-dark"
    >
      <Header />

      <main>
        {/* Hero Section */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative text-text-primary"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-dark/80 z-10" />
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
                  className="w-24 h-24 bg-brand-primary rounded-full flex items-center justify-center text-dark font-bold"
                >
                  <span className="text-3xl font-bold">RRT</span>
                </motion.div>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
                24/7 Nationwide Vehicle Recovery – Fast, Reliable, Anywhere!
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg mb-6 text-text-secondary">
                24/7 Mobile Tyre & Vehicle Recovery – Wherever You Need, Whenever You Need! Swift,
                professional service to keep you moving without delay.
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl font-semibold text-brand-primary">
                EMERGENCY MOBILE TYRE FITTING & VEHICLE RECOVERY NATIONWIDE
              </motion.h2>
            </motion.div>

            {/* Right Column */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-card border border-border-subtle p-6 rounded-lg text-center"
            >
              <h2 className="text-2xl font-bold mb-2 text-text-primary">Stranded? We’ve Got You Covered!</h2>
              <p className="text-brand-primary font-semibold mb-4">CALL US NOW</p>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: '#00BFA6' }}
                whileTap={{ scale: 0.95 }}
                href="tel:03335778247"
                className="block w-full bg-brand-primary text-dark font-bold py-3 px-6 rounded-lg transition mb-4"
              >
                0333 577 8247
              </motion.a>
              <p className="text-sm mb-2 text-text-muted">ENTER YOUR POSTCODE OR LOCATION</p>
              <form className="space-y-3">
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: '#00E0C6' }}
                  type="text"
                  placeholder="Postcode or location"
                  className="w-full px-4 py-2 rounded-lg bg-dark-card border border-border-subtle text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-accent text-dark font-bold py-2 px-4 rounded-lg transition"
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
          className="py-16 bg-gradient-teal text-dark"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              OUR SERVICES
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={scaleIn}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 md:h-96 rounded-lg overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
                  alt="Vehicle recovery"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div variants={staggerChildren} className="text-center md:text-left">
                <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4">
                  VEHICLE RECOVERY NATIONWIDE
                </motion.h3>
                <motion.p variants={fadeInUp} className="text-lg mb-6 text-text-secondary">
                  Fast and reliable nationwide vehicle recovery, 24/7 assistance wherever you need.
                </motion.p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:03335778247"
                  className="inline-block bg-dark hover:bg-dark-card text-brand-primary font-bold py-3 px-8 rounded-lg transition border border-brand-primary"
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
          className="py-12 bg-dark-soft"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-center text-text-primary"
            >
              We specialise in
            </motion.h2>
          </div>
        </motion.section>

        {/* Rapid Response */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-dark"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={staggerChildren} className="order-2 md:order-1">
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                Rapid Response
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-text-secondary mb-4">
                We understand that your time is precious. That’s why we guarantee a rapid response,
                typically arriving in under 45 minutes, ensuring minimal disruption to your day.
                Choose us for roadside assistance, rest assured that your time matters – we’re here
                to make it count. 24/7 availability.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:03335778247"
                className="inline-block bg-brand-primary hover:bg-brand-accent text-dark font-bold py-3 px-8 rounded-lg transition"
              >
                BOOK NOW
              </motion.a>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="order-1 md:order-2 relative h-64 md:h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="/15.png"
                alt="Rapid response"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* National Recovery */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 bg-dark-soft"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 md:h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="/National-Recovery.jpg"
                alt="National recovery"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={staggerChildren}>
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                National Recovery
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-text-secondary mb-4">
                If you break down or had an accident and need recovery. We’ll take your vehicle to
                any UK destination.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:03335778247"
                className="inline-block bg-brand-primary hover:bg-brand-accent text-dark font-bold py-3 px-8 rounded-lg transition"
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
          className="py-12 bg-dark"
        >
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={staggerChildren} className="order-2 md:order-1">
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-bold mb-4 text-text-primary">
                Transporting
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-text-secondary mb-4">
                Need help transporting your vehicle from an auction site or collection, we are here
                to help nationwide.
              </motion.p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:03335778247"
                className="inline-block bg-brand-primary hover:bg-brand-accent text-dark font-bold py-3 px-8 rounded-lg transition"
              >
                BOOK NOW
              </motion.a>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="order-1 md:order-2 relative h-64 md:h-96 rounded-lg overflow-hidden"
            >
              <Image
                src="/Transporting.jfif"
                alt="Transporting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
                <TestimonialsCarousel />
        
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <motion.a
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/+447415733992"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.96.57 3.87 1.65 5.52L2.1 21.9l4.59-1.48c1.6.98 3.45 1.5 5.35 1.5 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm.01 18.08c-1.47 0-2.92-.39-4.18-1.13l-.3-.18-2.82.91.9-2.73-.19-.31c-.81-1.32-1.24-2.86-1.24-4.43 0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2zm4.5-6.14c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.12-.57.12-.17.24-.66.81-.81.98-.15.17-.3.19-.55.07-.96-.44-1.59-.78-2.21-1.54-.17-.2-.18-.31-.26-.5-.08-.19-.01-.3.06-.4.06-.09.13-.21.19-.32.06-.1.09-.18.13-.3.04-.12 0-.23-.02-.32-.02-.09-.17-.41-.39-.67-.22-.26-.47-.36-.68-.47-.2-.11-.43-.12-.59-.12h-.55c-.17 0-.45.06-.68.32-.23.26-.88.86-.88 2.1 0 1.24.91 2.44 1.04 2.61.13.17 1.79 2.73 4.34 3.74.61.24 1.08.39 1.45.5.61.18 1.16.15 1.6.09.49-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.18-.47-.3z" />
          </svg>
        </motion.a>
      </motion.div>

      {/* Cookie Consent Banner */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }}
        className="fixed bottom-0 left-0 right-0 bg-dark-card border-t border-border-subtle text-text-primary p-4 flex flex-col md:flex-row justify-between items-center z-40"
      >
        <p className="text-sm mb-2 md:mb-0 text-text-secondary">
          We use cookies to ensure you have the best experience. By clicking ‘Accept,’ you agree to
          our use of cookies. For more information, visit our privacy policy.
        </p>
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-primary hover:bg-brand-accent text-dark px-4 py-2 rounded-lg text-sm font-semibold"
          >
            ACCEPT
          </motion.button>
          <Link href="/privacy-policy">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-dark-soft hover:bg-dark-card text-text-secondary px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer border border-border-subtle"
            >
              REJECT
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}