
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const scrollToPayment = () => {
    const paymentSection = document.getElementById('payment-section');
    if (paymentSection) {
      paymentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-brand-darkgray">AdMob<span className="text-brand-red">Master</span></span>
        </div>
        <nav>
          <Button 
            onClick={scrollToPayment}
            variant="default"
            className="bg-brand-red hover:bg-brand-red/90 text-white"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
