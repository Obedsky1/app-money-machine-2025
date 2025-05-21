
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToPayment = () => {
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/90 to-brand-red/60 mix-blend-multiply"
          aria-hidden="true"
        ></div>
        <img 
          src="/placeholder.svg"
          alt="Mobile apps with AdMob integration" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Build Simple Apps.<br />
            Earn Real Money.<br />
            <span className="text-brand-red">No Coding Experience Needed.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
            Learn how to create profitable mobile apps with Google AdMob in 2025 - 
            even if you've never written a line of code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToPayment}
              size="lg" 
              className="bg-brand-red hover:bg-brand-red/90 text-white font-bold text-lg py-6"
            >
              Get Instant Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 py-6"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
