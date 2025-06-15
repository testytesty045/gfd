import React, { useEffect, useRef } from 'react';
import Button from './Button';

const HeroBanner = ({ 
  title, 
  subtitle, 
  backgroundImage,
  buttonText = 'Learn More',
  buttonLink = '#services',
  align = 'center',
  overlayOpacity = '50',
  height = 'lg'
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heightClasses = {
    sm: 'min-h-[40vh]',
    md: 'min-h-[60vh]',
    lg: 'min-h-[80vh]',
    xl: 'min-h-screen',
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div 
      ref={heroRef}
      className={`relative flex items-center ${heightClasses[height]} w-full bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage || '/lovable-uploads/3cae168c-4ae3-47ef-9a7a-d7f8a3b64ad0.png'})` }}
    >
      <div 
        className={`absolute inset-0 bg-secondary-900 opacity-${overlayOpacity}`}
        aria-hidden="true"
      ></div>
      
      <div className="container-custom relative z-10">
        <div className={`flex flex-col ${alignmentClasses[align]} max-w-3xl mx-auto gap-6`}>
          <h1 className="text-white font-bold animate-fadeIn">{title}</h1>
          
          <p className="text-white/90 text-lg md:text-xl animate-fadeIn animate-delay-200">
            {subtitle}
          </p>
          
          {buttonText && (
            <div className="mt-2 animate-fadeIn animate-delay-300">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  const element = document.querySelector(buttonLink);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
