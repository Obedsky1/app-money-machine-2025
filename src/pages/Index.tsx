
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import Testimonials from '@/components/Testimonials';
import CoursePreview from '@/components/CoursePreview';
import FAQ from '@/components/FAQ';
import PaymentSection from '@/components/PaymentSection';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValueProposition />
        <CoursePreview />
        <Testimonials />
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-md">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="/lovable-uploads/7e38adde-9a53-4549-8724-0bc2f233a1d8.png" 
                    alt="Browser app with AdMob integration" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="bg-brand-red text-white p-4 text-center">
                  <h3 className="text-xl font-bold">Simple Browser App with Ad Integration</h3>
                  <p>Just one example of what you'll build in this course</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FAQ />
        <PaymentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
