// components/HeroSection.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const images = [
  'https://mobiletyresnationwide.co.uk/wp-content/uploads/2025/02/17-1.jpg',
  'https://mobiletyresnationwide.co.uk/wp-content/uploads/2025/02/22.jpg',
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[500px] overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            i === current ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Image
                  src="/services-main.jpg"
                  alt="Roadside Rescue Tyres"
                  fill
                  priority
                  className="object-cover"
                />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in-down">
              EMERGENCY MOBILE TYRE FITTING & VEHICLE RECOVERY NATIONWIDE
            </h1>
            <p className="text-xl text-white/90 animate-fade-in-up">
              Get quick, professional mobile tyre fitting services wherever you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}