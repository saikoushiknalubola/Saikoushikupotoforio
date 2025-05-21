
import React, { useEffect, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Instagram, Mail, ExternalLink } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-title-reveal');
    }
    
    // Create particles with better positioning
    const container = document.querySelector('.particles-container');
    if (container) {
      // Clear existing particles first to avoid duplication
      container.innerHTML = '';
      
      // Add more particles with better spacing
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Spread particles more evenly
        const section = Math.floor(i / 10); // Divide into 3 sections
        const sectionWidth = 100 / 3;
        const minX = section * sectionWidth;
        const maxX = (section + 1) * sectionWidth;
        
        particle.style.left = `${minX + Math.random() * (maxX - minX)}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        particle.style.animationDuration = `${Math.random() * 15 + 20}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.width = `${Math.random() * 2.5 + 1}px`;
        particle.style.height = `${Math.random() * 2.5 + 1}px`;
        container.appendChild(particle);
      }
    }
    
    // Create kanji background elements with better spacing
    const kanjiContainer = document.querySelector('.kanji-background');
    if (kanjiContainer) {
      kanjiContainer.innerHTML = '';
      const kanji = ['技', '術', '革', '新', '成', '長', '未', '来', '創', '造', '力', '知', '識', '開', '発'];
      
      // Create a grid for more even distribution
      const columns = 5;
      const rows = 4;
      
      for (let i = 0; i < columns * rows; i++) {
        const kanjiElement = document.createElement('div');
        kanjiElement.classList.add('kanji-element');
        kanjiElement.textContent = kanji[Math.floor(Math.random() * kanji.length)];
        
        const col = i % columns;
        const row = Math.floor(i / columns);
        
        // Position within grid cell with some randomness
        const xPos = (col / columns) * 100 + (Math.random() * 15 - 7.5);
        const yPos = (row / rows) * 100 + (Math.random() * 15 - 7.5);
        
        kanjiElement.style.left = `${xPos}%`;
        kanjiElement.style.top = `${yPos}%`;
        kanjiElement.style.opacity = `${Math.random() * 0.15 + 0.05}`;
        kanjiElement.style.fontSize = `${Math.random() * 40 + 20}px`;
        kanjiElement.style.animationDelay = `${Math.random() * 10}s`;
        kanjiContainer.appendChild(kanjiElement);
      }
    }
    
    // Create circuit lines with better spacing
    const circuitContainer = document.querySelector('.circuit-lines');
    if (circuitContainer) {
      circuitContainer.innerHTML = '';
      const sections = 4; // Divide screen into sections
      
      for (let i = 0; i < 12; i++) {
        const line = document.createElement('div');
        line.classList.add('circuit-line');
        
        // Calculate position based on section
        const section = i % sections;
        const sectionSize = 100 / sections;
        const sectionStart = section * sectionSize;
        
        // Alternate horizontal and vertical lines
        const isHorizontal = i % 2 === 0;
        
        if (isHorizontal) {
          line.style.top = `${sectionStart + Math.random() * 20}%`;
          line.style.left = `${Math.random() * 30}%`;
          line.style.width = `${Math.random() * 20 + 15}%`;
          line.style.height = '1px';
        } else {
          line.style.left = `${sectionStart + Math.random() * 20}%`;
          line.style.top = `${Math.random() * 30}%`;
          line.style.height = `${Math.random() * 20 + 15}%`;
          line.style.width = '1px';
        }
        
        // Random color from cyberpunk palette with reduced opacity
        const colors = ['#00FFFF', '#9b87f5', '#FF00FF', '#FC6A03'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        line.style.backgroundColor = color;
        line.style.opacity = `${Math.random() * 0.3 + 0.1}`; // Lower opacity to reduce visual chaos
        line.style.boxShadow = `0 0 6px ${color}`;
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
      
      {/* Kanji background for Japanese aesthetics - z-index adjusted to be further back */}
      <div className="kanji-background absolute inset-0 z-[-2] overflow-hidden"></div>
      
      {/* Circuit lines for cyberpunk aesthetic - z-index adjusted to prevent overlap with content */}
      <div className="circuit-lines absolute inset-0 z-[-1] overflow-hidden"></div>
      
      {/* Particles animation - reduced quantity and opacity */}
      <div className="particles-container absolute inset-0 z-[-1] pointer-events-none"></div>
      
      {/* Profile Avatar with cyber design */}
      <div className="mb-8 animate-fade-in animate-delay-300 relative">
        <div className="relative z-10">
          <div className="absolute -inset-5 bg-gradient-to-r from-anime-blue via-anime-purple to-anime-magenta rounded-full opacity-75 blur-md animate-spin-slow"></div>
          <div className="absolute inset-0 rounded-full border-2 border-anime-blue opacity-50 animate-pulse"></div>
          <Avatar className="w-40 h-40 border-4 border-anime-blue shadow-lg relative">
            <AvatarImage 
              src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
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
          className="text-5xl md:text-7xl font-bold mb-4 text-anime-text tracking-wider cyberpunk-heading font-orbitron"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-anime-teal via-anime-amber to-anime-blue">SAIKOUSHIK NALUBOLA</span>
        </h1>
        
        <div 
          ref={subtitleRef} 
          className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <span className="animate-fade-in animate-delay-500 text-xl md:text-2xl text-anime-blue font-medium relative cyber-text-glow font-rajdhani">
            AI Engineer
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-blue opacity-70"></span>
          </span>
          <span className="hidden sm:block animate-fade-in animate-delay-700 text-anime-purple">•</span>
          <span className="animate-fade-in animate-delay-700 text-xl md:text-2xl text-anime-magenta font-medium relative cyber-text-glow font-rajdhani">
            Entrepreneur
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-magenta opacity-70"></span>
          </span>
          <span className="hidden sm:block animate-fade-in animate-delay-1000 text-anime-teal">•</span>
          <span className="animate-fade-in animate-delay-1000 text-xl md:text-2xl text-anime-orange font-medium relative cyber-text-glow font-rajdhani">
            Innovator
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-anime-orange opacity-70"></span>
          </span>
        </div>
        
        <p className="animate-fade-in animate-delay-1000 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 cyber-text">
          Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability
        </p>
        
        {/* Social Media Icons with improved styling */}
        <div className="flex justify-center gap-6 mb-10 animate-fade-in animate-delay-1200">
          <a href="https://github.com/saikoushiknalubola" target="_blank" rel="noopener noreferrer" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-anime-blue to-anime-purple opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Github className="w-6 h-6 text-white group-hover:text-anime-blue transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-anime-blue to-anime-purple opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Linkedin className="w-6 h-6 text-white group-hover:text-anime-blue transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-anime-blue to-anime-purple opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Twitter className="w-6 h-6 text-white group-hover:text-anime-blue transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-anime-magenta to-anime-purple opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Instagram className="w-6 h-6 text-white group-hover:text-anime-magenta transition-colors" />
          </a>
          <a href="mailto:saikoushik42@gmail.com" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-anime-orange to-anime-amber opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Mail className="w-6 h-6 text-white group-hover:text-anime-orange transition-colors" />
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
