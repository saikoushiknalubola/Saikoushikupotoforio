
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
      // Clear existing particles first to avoid duplication
      container.innerHTML = '';
      
      // Add more particles for a denser effect
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        particle.style.animationDuration = `${Math.random() * 15 + 20}s`; // Even longer animation
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.width = `${Math.random() * 3 + 1}px`;
        particle.style.height = `${Math.random() * 3 + 1}px`;
        container.appendChild(particle);
      }
    }
    
    // Create kanji background elements
    const kanjiContainer = document.querySelector('.kanji-background');
    if (kanjiContainer) {
      const kanji = ['技', '術', '革', '新', '成', '長', '未', '来', '創', '造', '力', '知', '識', '開', '発'];
      
      for (let i = 0; i < 20; i++) {
        const kanjiElement = document.createElement('div');
        kanjiElement.classList.add('kanji-element');
        kanjiElement.textContent = kanji[Math.floor(Math.random() * kanji.length)];
        kanjiElement.style.left = `${Math.random() * 100}%`;
        kanjiElement.style.top = `${Math.random() * 100}%`;
        kanjiElement.style.opacity = `${Math.random() * 0.15 + 0.05}`;
        kanjiElement.style.fontSize = `${Math.random() * 50 + 20}px`;
        kanjiElement.style.animationDelay = `${Math.random() * 10}s`;
        kanjiContainer.appendChild(kanjiElement);
      }
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-anime-midnight z-[-2]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(15,155,142,0.4)_0%,_rgba(26,26,46,0)_70%)]"></div>
      </div>
      
      {/* Kanji background for Japanese aesthetics */}
      <div className="kanji-background absolute inset-0 z-[-1] overflow-hidden"></div>
      
      {/* Particles animation */}
      <div className="particles-container"></div>
      
      {/* Futuristic circuit lines with enhanced glow */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-20">
        <div className="absolute h-[40%] w-[1px] top-[10%] left-[15%] bg-gradient-to-b from-transparent via-anime-teal to-transparent animate-pulse-glow"></div>
        <div className="absolute h-[1px] w-[20%] top-[30%] left-[15%] bg-gradient-to-r from-anime-teal to-transparent animate-pulse-glow"></div>
        <div className="absolute h-[1px] w-[15%] top-[50%] right-[20%] bg-gradient-to-l from-anime-crimson to-transparent animate-pulse-glow"></div>
        <div className="absolute h-[30%] w-[1px] top-[50%] right-[20%] bg-gradient-to-b from-anime-crimson to-transparent animate-pulse-glow"></div>
        
        {/* Additional circuit lines */}
        <div className="absolute h-[1px] w-[25%] bottom-[20%] left-[30%] bg-gradient-to-r from-anime-amber to-transparent animate-pulse-glow animate-delay-700"></div>
        <div className="absolute h-[25%] w-[1px] bottom-[20%] left-[30%] bg-gradient-to-t from-anime-amber to-transparent animate-pulse-glow animate-delay-700"></div>
        <div className="absolute h-[1px] w-[15%] top-[25%] right-[25%] bg-gradient-to-l from-anime-teal to-transparent animate-pulse-glow animate-delay-500"></div>
      </div>
      
      {/* Profile Avatar with enhanced design */}
      <div className="mb-8 animate-fade-in animate-delay-300 relative">
        <div className="relative z-10">
          <div className="absolute -inset-1 bg-gradient-to-r from-anime-teal via-anime-amber to-anime-crimson rounded-full opacity-75 blur-sm animate-spin-slow"></div>
          <Avatar className="w-32 h-32 border-4 border-anime-teal shadow-lg relative">
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
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-anime-teal via-anime-text to-anime-amber">SAIKOUSHIK NALUBOLA</span>
        </h1>
        
        <div 
          ref={subtitleRef} 
          className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <span className="animate-fade-in animate-delay-500 text-xl md:text-2xl text-anime-amber font-medium relative anime-text-glow">
            AI Engineer
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-amber opacity-50"></span>
          </span>
          <span className="hidden sm:block animate-fade-in animate-delay-700 text-anime-teal">•</span>
          <span className="animate-fade-in animate-delay-700 text-xl md:text-2xl text-anime-amber font-medium relative anime-text-glow">
            Entrepreneur
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-amber opacity-50"></span>
          </span>
          <span className="hidden sm:block animate-fade-in animate-delay-1000 text-anime-teal">•</span>
          <span className="animate-fade-in animate-delay-1000 text-xl md:text-2xl text-anime-amber font-medium relative anime-text-glow">
            Innovator
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-amber opacity-50"></span>
          </span>
        </div>
        
        <p className="animate-fade-in animate-delay-1000 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-1000">
          <a href="#projects" className="anime-button-enhanced group flex items-center justify-center">
            <span className="relative z-10">
              View Projects
              <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          <a href="#contact" className="anime-button-secondary group flex items-center justify-center">
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator with enhanced animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-anime-amber/50 flex justify-center p-1">
          <div className="w-1 h-2 bg-anime-amber rounded-full animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
