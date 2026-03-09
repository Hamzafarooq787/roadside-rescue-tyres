// components/TestimonialCarousel.tsx
'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    name: 'Marek Minárik',
    text: 'Hi, leaving the review a bit late, sorry had a lot to catch up with. Nevertheless, the service was great, communication too, while waiting for the van and a quick tyre replacement on the spot. The usual big companies would have me wait til next day, but Get a Grip came right away. Thank you. Blue Mazda in Shefford.',
  },
  {
    name: 'Hannah Luttrell',
    text: 'If I could give more than 5 stars on this review, then I definitely would! I was so anxious having to call someone out to fix my tyre, especially as a woman on the road alone, but I\'m so glad I called them. The customer service was wonderful, I felt instantly at ease, the service provided was smooth and quick, and the communication was fantastic. I can not recommend this company enough!',
  },
  {
    name: 'Husna Khan',
    text: 'I recently had a breakdown on the side of the road, it was a stressful situation. Fortunately, the team from get a grip came to my rescue. They arrived quickly, were incredibly professional, and made me feel at ease right away. The tyre was replaced efficiently, and they took the time to ensure everything was safe before I continued my journey. Their kindness and expertise made all the difference. Highly recommend them for their excellent service!',
  },
]

export function TestimonialCarousel() {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {testimonials.map((t, i) => (
          <CarouselItem key={i}>
            <Card className="border-0 bg-secondary/30">
              <CardContent className="p-6 text-center">
                <p className="text-lg italic">"{t.text}"</p>
                <p className="mt-4 font-semibold text-primary">- {t.name}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      {/* <CarouselDots /> */}
    </Carousel>
  )
}