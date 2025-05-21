
import React from 'react';
import { Check } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ValueProposition = () => {
  const benefits = [
    "App ideas that actually work",
    "No-code/low-code tools for beginners",
    "How to integrate Google AdMob",
    "Publishing to the Play Store",
    "Monetization strategies that generate passive income"
  ];

  return (
    <section id="features" className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            This is <span className="text-brand-red">not</span> just another app dev course
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It's a step-by-step, curated experience covering everything you need to start earning passive income with mobile apps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <span className="bg-brand-red rounded-full p-1 mr-3 text-white flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6 shadow-inner">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <AspectRatio ratio={9/16}>
                <img 
                  src="/lovable-uploads/e080f3a9-8b42-4b7a-afe1-484980f7a475.png" 
                  alt="Music Player App with AdMob integration" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <p className="mt-4 text-center text-gray-500 text-sm">Example of a music player app you'll learn to build</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
