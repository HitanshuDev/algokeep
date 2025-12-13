import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer @ Google",
      image: "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU1MDAxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "AlgoKeep transformed how I prepare for interviews. Having all my DSA solutions in one place saved me countless hours during my FAANG interview prep.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Full Stack Developer @ Meta",
      image: "https://images.unsplash.com/photo-1681164315430-6159b2361615?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGVuZ2luZWVyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY1NDMzMzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The search and tagging system is phenomenal. I can find any problem pattern I've solved in seconds. It's like having a personal DSA encyclopedia.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Senior SDE @ Amazon",
      image: "https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1NDgzODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Clean, fast, and exactly what I needed. The editor is a joy to use, and the cloud sync means I can review problems anywhere. Absolute game-changer.",
      rating: 5
    }
  ];
  
  return (
    <section id="testimonials" className="relative py-20 bg-[#000000]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#34d2e0]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#229799]/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6">
            <span className="text-[#34d2e0]">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[#f5f5f5] mb-4">
            Loved by{' '}
            <span className="text-gradient-cyan-teal">Developers</span>
          </h2>
          <p className="text-xl text-[#f5f5f5]/70 max-w-2xl mx-auto">
            Hear from developers who've leveled up their interview prep and landed their dream jobs.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="glass-morphism p-8 rounded-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-[#34d2e0]/50" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#34d2e0] text-[#34d2e0]" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-[#f5f5f5]/80 mb-6 flex-grow">"{testimonial.quote}"</p>
                
                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#34d2e0]/20">
                  <div className="relative">
                    <ImageWithFallback 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#34d2e0] rounded-full border-2 border-[#211f1e]"></div>
                  </div>
                  <div>
                    <div className="text-[#f5f5f5]">{testimonial.name}</div>
                    <div className="text-[#f5f5f5]/60">{testimonial.role}</div>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl bg-[#34d2e0]/20"></div>
            </div>
          ))}
        </div>
        
        {/* Social Proof Stats */}
        <div className="mt-16 glass-morphism p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-gradient-cyan-teal mb-2">4.9/5</div>
              <div className="text-[#f5f5f5]/60">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl text-gradient-cyan-teal mb-2">5,000+</div>
              <div className="text-[#f5f5f5]/60">Active Users</div>
            </div>
            <div>
              <div className="text-3xl text-gradient-cyan-teal mb-2">10K+</div>
              <div className="text-[#f5f5f5]/60">Problems Stored</div>
            </div>
            <div>
              <div className="text-3xl text-gradient-cyan-teal mb-2">50+</div>
              <div className="text-[#f5f5f5]/60">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
