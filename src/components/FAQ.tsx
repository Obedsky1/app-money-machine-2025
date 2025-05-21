
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need to know how to code?",
      answer: "Not at all! Our course is specifically designed for beginners with zero coding experience. We use visual tools and no-code/low-code platforms that make app development accessible to everyone."
    },
    {
      question: "Will I learn how to publish my app?",
      answer: "Absolutely! We provide a comprehensive, step-by-step guide on how to publish your app to the Google Play Store, including all the requirements, screenshots, descriptions, and optimization tips."
    },
    {
      question: "Is AdMob integration included?",
      answer: "Yes! Google AdMob integration is a core part of our curriculum. We cover everything from setting up your AdMob account to implementing different ad formats (banners, interstitials, rewarded ads) and optimizing for maximum revenue."
    },
    {
      question: "Do I keep lifetime access?",
      answer: "Yes, you get lifetime access to all course materials, updates, and our community forum. As we update the course with new information and techniques, you'll always have access to the latest content."
    },
    {
      question: "How soon can I start earning money?",
      answer: "While results vary based on your app idea and effort, many of our students start seeing AdMob revenue within 30-60 days of launching their first app. The course is designed to get you to market as quickly and efficiently as possible."
    },
    {
      question: "What support do I receive?",
      answer: "You'll get access to our active community forum where you can ask questions, share progress, and get feedback. We also provide email support for course-specific questions."
    }
  ];

  return (
    <section id="faq" className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about the course
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left text-lg font-semibold py-4 hover:text-brand-red transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
