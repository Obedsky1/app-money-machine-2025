
import React, { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";

type EarningsSlide = {
  title: string;
  amount: string;
  period: string;
  imageUrl: string;
};

const earningsSlides: EarningsSlide[] = [
  {
    title: "Daily AdMob Earnings",
    amount: "$94.77",
    period: "Today so far",
    imageUrl: "/lovable-uploads/16a1af02-0512-40cb-86c9-4e0540c730dc.png"
  },
  {
    title: "Monthly Revenue",
    amount: "$1.99K",
    period: "This month so far",
    imageUrl: "/lovable-uploads/65b0c62a-f90b-4c83-92cf-86d4084f6b39.png"
  },
  {
    title: "App Payments",
    amount: "₦2,620,360.00",
    period: "Dec 21, 2023",
    imageUrl: "/lovable-uploads/7eb701f8-2ebe-419d-8b87-45ae6f92f6f6.png"
  },
  {
    title: "New App Revenue",
    amount: "$3.26",
    period: "First day launch",
    imageUrl: "/lovable-uploads/26415d86-7a01-41f3-869c-b0661a66074a.png"
  },
  {
    title: "AdMob Deposit",
    amount: "NGN431,400.00",
    period: "July 2023",
    imageUrl: "/lovable-uploads/6efb06ee-827a-4554-9510-ad0070ade303.png"
  }
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;
    
    // Setup auto-slide
    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 4000);
    
    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, [api]);

  const handleSliderChange = (value: number[]) => {
    if (api) {
      api.scrollTo(value[0]);
    }
  };

  return (
    <div className="relative w-full">
      <Carousel 
        setApi={setApi}
        className="w-full"
        onSelect={(api) => {
          const selectedIndex = api.selectedScrollSnap();
          setCurrentSlide(selectedIndex);
        }}
      >
        <CarouselContent>
          {earningsSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={slide.imageUrl} 
                    alt={`AdMob earnings of ${slide.amount}`}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                  <h3 className="text-lg font-bold">{slide.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-bold text-brand-red">{slide.amount}</p>
                    <p className="text-sm opacity-80">{slide.period}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-20 left-0 right-0 z-20 px-4">
          <Slider
            value={[currentSlide]}
            max={earningsSlides.length - 1}
            step={1}
            onValueChange={handleSliderChange}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/80 text-white border-none" />
        <CarouselNext className="right-2 bg-black/50 hover:bg-black/80 text-white border-none" />
      </Carousel>
    </div>
  );
};

export default HeroSlideshow;
