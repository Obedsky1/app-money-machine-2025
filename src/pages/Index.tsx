
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import Testimonials from '@/components/Testimonials';
import CoursePreview from '@/components/CoursePreview';
import FAQ from '@/components/FAQ';
import PaymentSection from '@/components/PaymentSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValueProposition />
        <Testimonials />
        <CoursePreview />
        <FAQ />
        <PaymentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
