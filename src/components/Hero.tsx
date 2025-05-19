import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-title-reveal');
    }
    
    // Create particles with longer animation duration
    const container = document.querySelector('.particles-container');
    if (container) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        particle.style.animationDuration = `${Math.random() * 10 + 15}s`; // Longer animation
        particle.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(particle);
      }
    }
    
    // Remove opacity-0 classes after animations complete to keep elements visible
    const animatedElements = document.querySelectorAll('.animate-fade-in');
    
    setTimeout(() => {
      animatedElements.forEach(element => {
        element.classList.remove('opacity-0');
      });
      
      if (titleRef.current) {
        titleRef.current.classList.remove('opacity-0');
      }
    }, 3000); // Wait for animations to complete
    
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-anime-midnight z-[-2]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(15,155,142,0.3)_0%,_rgba(26,26,46,0)_70%)]"></div>
      </div>
      
      {/* Particles animation */}
      <div className="particles-container"></div>
      
      {/* Decorative circuit lines with persistent glow */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-10">
        <div className="absolute h-[40%] w-[1px] top-[10%] left-[15%] bg-gradient-to-b from-transparent via-anime-teal to-transparent animate-pulse-glow"></div>
        <div className="absolute h-[1px] w-[20%] top-[30%] left-[15%] bg-gradient-to-r from-anime-teal to-transparent animate-pulse-glow"></div>
        <div className="absolute h-[1px] w-[15%] top-[50%] right-[20%] bg-gradient-to-l from-anime-crimson to-transparent animate-pulse-glow"></div>
        <div className="absolute h-[30%] w-[1px] top-[50%] right-[20%] bg-gradient-to-b from-anime-crimson to-transparent animate-pulse-glow"></div>
      </div>
      
      {/* Profile Avatar */}
      <div className="mb-8 animate-fade-in animate-delay-300">
        <div className="relative">
          <Avatar className="w-32 h-32 border-4 border-anime-teal shadow-lg">
            <AvatarImage 
              src="/lovable-uploads/1c9860c2-b5c5-43e7-9bbc-b6f6a11fe492.png" 
              alt="Saikoushik Nalubola" 
              className="object-cover"
            />
            <AvatarFallback className="text-2xl bg-anime-midnight text-anime-amber">SN</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-anime-amber animate-pulse">
            <span className="block w-5 h-5 bg-anime-amber rounded-full border-2 border-anime-midnight"></span>
          </div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-4 text-anime-text tracking-wider"
        >
          SAIKOUSHIK NALUBOLA
        </h1>
        
        <div 
          ref={subtitleRef} 
          className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <span className="animate-fade-in animate-delay-500 text-xl md:text-2xl text-anime-amber font-medium">AI Engineer</span>
          <span className="hidden sm:block animate-fade-in animate-delay-700 text-anime-teal">•</span>
          <span className="animate-fade-in animate-delay-700 text-xl md:text-2xl text-anime-amber font-medium">Entrepreneur</span>
          <span className="hidden sm:block animate-fade-in animate-delay-1000 text-anime-teal">•</span>
          <span className="animate-fade-in animate-delay-1000 text-xl md:text-2xl text-anime-amber font-medium">Innovator</span>
        </div>
        
        <p className="animate-fade-in animate-delay-1000 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-1000">
          <a href="#projects" className="anime-button flex items-center justify-center">
            View Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#contact" className="px-6 py-2 border border-anime-teal text-anime-text font-bold rounded relative overflow-hidden hover:bg-anime-teal/10 transition-all duration-300 flex items-center justify-center">
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator with persistent animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-anime-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
