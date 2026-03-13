"use client"

import Image from "next/image"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image with Zoom Effect */}
  <div className="absolute inset-0 hero-zoom">
    <Image
      src="/main.png"
      alt="Roadside Rescue Tyres"
      fill
      priority
      className="object-cover"
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Main Content - Centered */}
  <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto w-full">
    {/* Logo with Float + Glow */}
    <div className="animate-logo mb-2">
      <Image
        src="/Mobile-Tyres.webp"
        alt="Roadside Rescue Tyres"
        width={500}
        height={366}
        className="mx-auto w-full max-w-[400px] md:max-w-[500px] h-auto"
        priority
      />
    </div>
<div className="mb-[70px]">
    {/* Heading */}
    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3 animate-heading">
      EMERGENCY MOBILE TYRE FITTING & VEHICLE RECOVERY NATIONWIDE
    </h1>

    {/* Subheading */}
    <p className="text-xl md:text-2xl mb-6 animate-subheading">
      Call Roadside Rescue Tyres for a Free Quote
    </p>

    {/* Single Centered Call Button with Signal Icon */}
    <div className="flex justify-center">
      <a
        href="tel:03335778247"
        className="inline-flex items-center justify-center gap-3 bg-[#25E2F4] hover:bg-[#1BBECE] text-black font-bold py-4 px-10 rounded-lg text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_20px_#25E2F4] animate-button shadow-lg relative overflow-hidden group"
      >
        {/* Pulse overlay on hover */}
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></span>
        
        {/* Phone icon with continuous signal wave */}
        <span className="relative">
          {/* Signal wave ring */}
          <span className="absolute inset-0 animate-signal-wave bg-[#25E2F4] rounded-full pointer-events-none"></span>
          {/* Actual icon */}
          <svg className="h-6 w-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </span>
        0333 577 8247
      </a>
    </div>

    {/* Helpline Text */}
    <p className="mt-4 text-gray-300 animate-subheading" style={{ animationDelay: '0.6s' }}>
      Free 24/7 Helpline
    </p>
    </div>
  </div>
{/* Decorative Icons (visible on all devices) */}
<div className="absolute inset-0 pointer-events-none z-0">
  {/* Top Left Icon - Tyre */}
  <div className="absolute top-10 left-5 md:top-20 md:left-10 text-white/10 animate-float-slow">
    <svg className="w-16 h-16 md:w-24 md:h-24" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      <line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" strokeWidth="1" />
      <line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" strokeWidth="1" />
      <line x1="2" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1" />
      <line x1="17" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" />
    </svg>
  </div>
  {/* Bottom Right Icon - Car */}
  <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 text-white/10 animate-float">
    <svg className="w-24 h-24 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 13.5V12a2 2 0 0 0-2-2h-1l-2-4h-2V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v2H3l-2 4h2v5.5a1.5 1.5 0 0 0 3 0V14h14v1.5a1.5 1.5 0 0 0 3 0zM7 6h2v2H7V6zm4 0h2v2h-2V6zm-4 4h10v2H7v-2z" />
    </svg>
  </div>
</div>
</section>
  )
}

export default Hero
