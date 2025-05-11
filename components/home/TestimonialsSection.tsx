"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Home Buyer',
    quote: 'Working with Luxe Estates made finding our dream home an absolute pleasure. Their attention to detail and understanding of our needs was impressive.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Roberts',
    role: 'Property Investor',
    quote: 'The team at Luxe Estates provided exceptional guidance throughout the entire investment process. Their market insights were invaluable.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Emma Chen',
    role: 'Home Seller',
    quote: 'Selling our family home was emotionally challenging, but Luxe Estates handled everything with professionalism and care. We got more than our asking price!',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Luxury Condo Buyer',
    quote: 'Their knowledge of the luxury market is unmatched. They found us a perfect penthouse that wasn\'t even publicly listed yet.',
    rating: 5,
    imageUrl: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesContainerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (slidesContainerRef.current) {
      setActiveSlide(index);
    }
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            We take pride in exceeding our clients' expectations and delivering exceptional real estate experiences.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={slidesContainerRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-gradient-to-br from-white via-white to-muted/20 dark:from-card dark:via-card dark:to-muted/5">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                        <div className="col-span-2 relative h-full min-h-[300px] md:min-h-full overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                          <Image 
                            src={testimonial.imageUrl} 
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/10" />
                        </div>
                        
                        <div className="col-span-3 p-8 md:p-10 flex flex-col justify-center">
                          <Quote className="h-10 w-10 text-primary/20 mb-4" />
                          
                          <p className="text-lg md:text-xl italic mb-6">
                            "{testimonial.quote}"
                          </p>
                          
                          <div className="flex items-center gap-1 mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={cn(
                                  "h-5 w-5",
                                  i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground"
                                )}
                              />
                            ))}
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                            <p className="text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Slider controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === activeSlide 
                      ? "bg-primary scale-110" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;