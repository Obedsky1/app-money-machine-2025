
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PaymentSection = () => {
  const benefits = [
    "Step-by-step app building tutorials",
    "AdMob integration and optimization",
    "Lifetime access & updates",
    "Google Play Store publishing guide",
    "Community support & feedback"
  ];

  return (
    <section id="payment-section" className="bg-gradient-to-br from-gray-900 to-brand-darkgray text-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your App Development Journey Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who are building simple apps and earning passive income with Google AdMob
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <span className="bg-brand-red rounded-full p-1 mr-3">
                    <Check className="h-5 w-5" />
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 bg-white text-gray-900 rounded-xl shadow-xl p-8">
            <div className="text-center mb-6">
              <p className="text-brand-red font-bold mb-2">LIMITED TIME OFFER</p>
              <h3 className="text-3xl font-bold mb-2">Get Instant Access</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-gray-500 line-through mr-2">$49.99</span>
                <span className="text-3xl font-bold">$9.99</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">One-time payment, lifetime access</p>
              
              <Button 
                className="w-full bg-brand-red hover:bg-brand-red/90 text-white py-6 text-lg font-bold"
              >
                Get Instant Access
              </Button>
              
              <div className="mt-4 flex justify-center gap-4">
                <div className="w-12 h-8">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="visa-label">
                    <title id="visa-label">Visa</title>
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#fff"/>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#fff"/>
                    <path d="M28.3 10.1H26c-.2 0-.3 0-.3.2l-.8 1.8-.8-1.8c0-.2-.1-.2-.3-.2h-2.1c-.2 0-.3.2-.2.3l1.4 3-1.4 3.2c-.1.2 0 .3.2.3h2c.2 0 .3 0 .3-.2l.8-1.8.8 1.8c0 .2.1.2.3.2h2.1c.2 0 .3-.1.2-.3l-1.4-3.2 1.4-3c.1-.1 0-.2-.2-.2z" fill="#142688"/>
                  </svg>
                </div>
                <div className="w-12 h-8">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="mc-label">
                    <title id="mc-label">Mastercard</title>
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#fff"/>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#fff"/>
                    <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                    <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
                    <path d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z" fill="#FF5F00"/>
                  </svg>
                </div>
                <div className="w-12 h-8">
                  <svg viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="paypal-label">
                    <title id="paypal-label">PayPal</title>
                    <path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#fff"/>
                    <path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#fff"/>
                    <path d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z" fill="#003087"/>
                    <path d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z" fill="#3086C8"/>
                    <path d="M19 14.4v.1c0 .3-.2.5-.5.5h-1.3c-.2 0-.4-.2-.5-.4l.2-1.1.6-3.9c.1-.3.3-.5.6-.5h1.2c.4 0 .7 0 1 .1.1 0 .2.1.3.1v.1c.3 1 0 1.7-.6 2.3-.6.5-1.7.8-3.1.8H19z" fill="#012169"/>
                  </svg>
                </div>
              </div>
              
              <p className="mt-6 text-xs text-gray-500">
                Secure payment processed by Stripe. Your information is protected with industry-standard encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
