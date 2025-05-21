
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

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
    
    // Create circuit lines
    const circuitContainer = document.querySelector('.circuit-lines');
    if (circuitContainer) {
      for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.classList.add('circuit-line');
        
        // Randomize line properties
        const isHorizontal = Math.random() > 0.5;
        const startPos = Math.random() * 70 + 10; // Between 10% and 80%
        const length = Math.random() * 30 + 10; // Between 10% and 40%
        
        if (isHorizontal) {
          line.style.top = `${startPos}%`;
          line.style.left = `${Math.random() * 40}%`;
          line.style.width = `${length}%`;
          line.style.height = '1px';
        } else {
          line.style.left = `${startPos}%`;
          line.style.top = `${Math.random() * 40}%`;
          line.style.height = `${length}%`;
          line.style.width = '1px';
        }
        
        // Random color (cyberpunk palette)
        const colors = ['#00FFFF', '#9b87f5', '#FF00FF', '#FC6A03'];
        line.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        line.style.opacity = `${Math.random() * 0.4 + 0.2}`;
        line.style.boxShadow = `0 0 8px ${line.style.backgroundColor}`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        
        circuitContainer.appendChild(line);
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
      
      {/* Circuit lines for cyberpunk aesthetic */}
      <div className="circuit-lines absolute inset-0 z-[-1] overflow-hidden"></div>
      
      {/* Particles animation */}
      <div className="particles-container"></div>
      
      {/* Profile Avatar with cyber design */}
      <div className="mb-8 animate-fade-in animate-delay-300 relative">
        <div className="relative z-10">
          <div className="absolute -inset-5 bg-gradient-to-r from-anime-blue via-anime-purple to-anime-magenta rounded-full opacity-75 blur-md animate-spin-slow"></div>
          <div className="absolute inset-0 rounded-full border-2 border-anime-blue opacity-50 animate-pulse"></div>
          <Avatar className="w-40 h-40 border-4 border-anime-blue shadow-lg relative">
            <AvatarImage 
              src="/lovable-uploads/1c9860c2-b5c5-43e7-9bbc-b6f6a11fe492.png" 
              alt="Saikoushik Nalubola" 
              className="object-cover"
            />
            <AvatarFallback className="text-2xl bg-anime-midnight text-anime-teal">SN</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-anime-blue animate-pulse">
            <span className="block w-5 h-5 bg-anime-blue rounded-full border-2 border-anime-midnight"></span>
          </div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-4 text-anime-text tracking-wider cyberpunk-heading"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-anime-teal via-anime-amber to-anime-blue">SAIKOUSHIK NALUBOLA</span>
        </h1>
        
        <div 
          ref={subtitleRef} 
          className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <span className="animate-fade-in animate-delay-500 text-xl md:text-2xl text-anime-blue font-medium relative cyber-text-glow">
            AI Engineer
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-blue opacity-70"></span>
          </span>
          <span className="hidden sm:block animate-fade-in animate-delay-700 text-anime-purple">•</span>
          <span className="animate-fade-in animate-delay-700 text-xl md:text-2xl text-anime-magenta font-medium relative cyber-text-glow">
            Entrepreneur
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-magenta opacity-70"></span>
          </span>
          <span className="hidden sm:block animate-fade-in animate-delay-1000 text-anime-teal">•</span>
          <span className="animate-fade-in animate-delay-1000 text-xl md:text-2xl text-anime-orange font-medium relative cyber-text-glow">
            Innovator
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-orange opacity-70"></span>
          </span>
        </div>
        
        <p className="animate-fade-in animate-delay-1000 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 cyber-text">
          Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-10 animate-fade-in animate-delay-1200">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <Github className="w-6 h-6 text-white hover:text-anime-blue transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <Linkedin className="w-6 h-6 text-white hover:text-anime-blue transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <Twitter className="w-6 h-6 text-white hover:text-anime-blue transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <Instagram className="w-6 h-6 text-white hover:text-anime-magenta transition-colors" />
          </a>
          <a href="mailto:saikoushiknalubola@yahoo.com" className="social-icon-link">
            <Mail className="w-6 h-6 text-white hover:text-anime-orange transition-colors" />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-1000">
          <a href="#projects" className="cyber-button-primary group flex items-center justify-center">
            <span className="relative z-10">
              View Projects
              <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          <a href="#contact" className="cyber-button-secondary group flex items-center justify-center">
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator with enhanced animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-anime-blue/70 flex justify-center p-1">
          <div className="w-1 h-2 bg-anime-blue rounded-full animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
