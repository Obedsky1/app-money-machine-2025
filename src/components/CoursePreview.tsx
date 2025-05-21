
import React from 'react';

const CoursePreview = () => {
  const screenshots = [
    {
      title: "App Builder Interface",
      description: "Our intuitive drag-and-drop builder makes app creation simple",
      imageSrc: "/placeholder.svg"
    },
    {
      title: "AdMob Integration",
      description: "Step-by-step AdMob implementation with revenue optimization",
      imageSrc: "/placeholder.svg"
    },
    {
      title: "Publishing Dashboard",
      description: "Learn how to publish your app to the Google Play Store",
      imageSrc: "/placeholder.svg"
    }
  ];
  
  return (
    <section className="bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Inside The Course</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A sneak peek into what you'll learn and the tools you'll use
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-md border border-gray-200 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="aspect-[4/3] relative">
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
