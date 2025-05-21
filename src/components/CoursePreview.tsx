
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CoursePreview = () => {
  const screenshots = [
    {
      title: "Status Saver App",
      description: "Create a simple app that saves status media from WhatsApp",
      imageSrc: "/lovable-uploads/e39fda56-605c-45bd-98ee-8609bdf2994b.png"
    },
    {
      title: "Music Player App",
      description: "Build a music player app with built-in AdMob integration",
      imageSrc: "/lovable-uploads/e080f3a9-8b42-4b7a-afe1-484980f7a475.png"
    },
    {
      title: "Mobile Payment App",
      description: "Create a utility app with mobile payment functionality",
      imageSrc: "/lovable-uploads/22d28596-a4c3-465c-ae2e-44ebe289a234.png"
    }
  ];
  
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Real Apps You'll Build</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A look at the types of apps you'll learn to create and monetize with AdMob
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md border border-gray-200 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="aspect-[9/16] relative">
                <img 
                  src={screenshot.imageSrc} 
                  alt={screenshot.title} 
                  className="w-full h-full object-cover"
                />
                {/* AdMob Banner Overlay for the second screenshot */}
                {index === 1 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-2 flex justify-center items-center border-t border-gray-300">
                    <div className="text-xs font-medium text-gray-500 bg-white py-1 px-2 rounded border border-gray-300">
                      Ad by Google
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{screenshot.title}</h3>
                <p className="text-gray-600">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
