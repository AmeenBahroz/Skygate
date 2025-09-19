import React from 'react';
import Button from './Button';

const HeroSection = ({ 
  title, 
  subtitle, 
  background = 'cinematic', 
  ctaButtons = [],
  className = '',
  children,
  fullScreen = true
}) => {
  const backgrounds = {
    cinematic: 'gradient-cinematic relative overflow-hidden',
    logistics: 'gradient-logistics-cinematic relative overflow-hidden',
    travel: 'gradient-travel-cinematic relative overflow-hidden',
    white: 'bg-white',
    gray: 'bg-gray-50',
    premium: 'bg-premium-pattern relative overflow-hidden'
  };
  
  const textColor = background === 'white' || background === 'gray' ? 'text-gray-900' : 'text-white';
  const subtitleColor = background === 'white' || background === 'gray' ? 'text-gray-600' : 'text-gray-100';
  
  return (
    <section className={`${fullScreen ? 'hero-premium' : 'relative py-32 px-4'} ${backgrounds[background]} ${className}`}>
      {/* Optimized background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simplified floating orbs */}
        <div className="absolute -top-40 -right-40 w-64 h-64 bg-white/6 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-64 h-64 bg-white/6 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Premium overlay */}
      <div className="absolute inset-0 bg-cinematic-overlay opacity-20"></div>
      
      <div className="container-premium relative z-10">
        <div className="text-center">
          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-black mb-12 ${textColor} animate-fade-in-up text-shadow-lg tracking-tight`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`text-2xl md:text-3xl lg:text-4xl mb-16 max-w-5xl mx-auto ${subtitleColor} animate-fade-in-up leading-relaxed font-light`} style={{animationDelay: '0.3s'}}>
              {subtitle}
            </p>
          )}
          
          {ctaButtons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              {ctaButtons.map((button, index) => {
                // If button has custom className, render as direct button element
                if (button.className) {
                  return (
                    <button
                      key={index}
                      onClick={button.onClick}
                      className={`${button.className} shadow-glow-xl hover:shadow-glow-xl interactive-hover`}
                    >
                      <span className="relative z-10 flex items-center gap-2">{button.text}</span>
                    </button>
                  );
                }
                // Otherwise use Button component
                return (
                  <Button
                    key={index}
                    variant={button.variant || 'primary'}
                    size={button.size || 'xl'}
                    onClick={button.onClick}
                    className="shadow-glow-xl hover:shadow-glow-xl interactive-hover"
                  >
                    {button.text}
                  </Button>
                );
              })}
            </div>
          )}
          
          {children}
        </div>
      </div>
      
      {/* Premium decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-32 left-32 w-24 h-24 bg-white/10 rounded-2xl blur-xl animate-float"></div>
        <div className="absolute top-48 right-40 w-20 h-20 bg-white/10 rounded-2xl blur-xl animate-float" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-40 left-40 w-28 h-28 bg-white/10 rounded-2xl blur-xl animate-float" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-32 right-32 w-16 h-16 bg-white/10 rounded-2xl blur-xl animate-float" style={{animationDelay: '0.7s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Dots pattern */}
        <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
      </div>
      
      {/* Scroll indicator */}
      {fullScreen && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;




