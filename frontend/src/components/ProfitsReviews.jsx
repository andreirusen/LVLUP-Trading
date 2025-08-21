import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, TrendingUp, DollarSign } from 'lucide-react';
import { testimonials, profitImages } from '../mockData';

export const ProfitsReviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProfit, setCurrentProfit] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextProfit = () => {
    setCurrentProfit((prev) => (prev + 1) % profitImages.length);
  };

  const prevProfit = () => {
    setCurrentProfit((prev) => (prev - 1 + profitImages.length) % profitImages.length);
  };

  return (
    <section id="profits" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="display-sm mb-6">Proven Results & Student Success</h2>
          <p className="body-lg max-w-2xl mx-auto">
            See the real results from our community members and the profits they've achieved 
            through disciplined trading and Smart Money Concepts.
          </p>
        </div>

        {/* Profit Images Gallery */}
        <div className="mb-16">
          <h3 className="h2 text-center mb-8">Trading Results</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="feature-card overflow-hidden">
              <div className="relative">
                <img
                  src={profitImages[currentProfit].image}
                  alt={profitImages[currentProfit].description}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 bg-[var(--bg-primary)] bg-opacity-90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign className="text-[var(--accent-primary)]" size={20} />
                    <span className="h4 text-[var(--accent-primary)]">
                      {profitImages[currentProfit].profit}
                    </span>
                  </div>
                  <p className="body-sm">{profitImages[currentProfit].description}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevProfit}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProfit}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {profitImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProfit(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentProfit 
                      ? 'bg-[var(--accent-primary)] w-8' 
                      : 'bg-[var(--border-primary)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Student Testimonials */}
        <div>
          <h3 className="h2 text-center mb-8">Student Testimonials</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="feature-card text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[var(--accent-primary)] fill-current" size={24} />
                ))}
              </div>
              
              <blockquote className="body-lg mb-6 max-w-2xl mx-auto">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent-primary)]"
                />
                <div className="text-left">
                  <div className="h4">{testimonials[currentTestimonial].name}</div>
                  <div className="body-sm flex items-center">
                    <TrendingUp className="text-[var(--accent-primary)] mr-2" size={16} />
                    Profit: {testimonials[currentTestimonial].profit}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-[var(--accent-primary)] w-8' 
                      : 'bg-[var(--border-primary)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-[var(--accent-primary)]" size={32} />
            </div>
            <div className="h2 text-[var(--accent-primary)] mb-2">85%</div>
            <div className="body-md">Average Win Rate</div>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="text-[var(--accent-primary)]" size={32} />
            </div>
            <div className="h2 text-[var(--accent-primary)] mb-2">$50K+</div>
            <div className="body-md">Total Student Profits</div>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-[var(--accent-primary)]" size={32} />
            </div>
            <div className="h2 text-[var(--accent-primary)] mb-2">4.9/5</div>
            <div className="body-md">Student Rating</div>
          </div>
          
          <div className="feature-card text-center">
            <div className="w-16 h-16 bg-[var(--accent-bg)] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-[var(--accent-primary)]" size={32} />
            </div>
            <div className="h2 text-[var(--accent-primary)] mb-2">95%</div>
            <div className="body-md">Course Completion</div>
          </div>
        </div>
      </div>
    </section>
  );
};