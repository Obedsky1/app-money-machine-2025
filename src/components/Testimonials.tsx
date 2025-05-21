
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Beginner Developer",
      comment: "I had zero coding experience, but this course helped me launch my first app in just 3 weeks. Now earning $300/month passive income!",
      stars: 5,
      image: "/lovable-uploads/4a7d9af2-0443-4f61-88f2-620b5b739be9.png"
    },
    {
      name: "Sarah Miller",
      role: "Design Student",
      comment: "The AdMob integration was surprisingly easy to follow. My simple puzzle game now generates consistent revenue every month.",
      stars: 5,
      image: "/lovable-uploads/da3ca06d-3a9f-4a50-8fc0-27c2336e354f.png"
    },
    {
      name: "Michael Chen",
      role: "Marketing Professional",
      comment: "This course demystified the app development process. I've now published 3 apps and they're all generating AdMob revenue.",
      stars: 5
    }
  ];

  const renderStars = (count: number) => {
    return Array(count).fill(0).map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Students Are Saying</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students who are already earning passive income with their mobile apps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex mb-4">
                {renderStars(testimonial.stars)}
              </div>
              
              {testimonial.image && (
                <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
                  <img 
                    src={testimonial.image} 
                    alt={`${testimonial.name}'s testimonial`}
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              <p className="text-gray-700 mb-6">"{testimonial.comment}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
