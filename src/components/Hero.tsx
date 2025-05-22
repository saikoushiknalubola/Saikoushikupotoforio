
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
      
      // Add particles with anime aesthetics
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // More balanced distribution
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        particle.style.animationDuration = `${Math.random() * 15 + 20}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.width = `${Math.random() * 2 + 1}px`;
        particle.style.height = `${Math.random() * 2 + 1}px`;
        container.appendChild(particle);
      }
    }
    
    // Create kanji background elements with Japanese aesthetic
    const kanjiContainer = document.querySelector('.kanji-background');
    if (kanjiContainer) {
      kanjiContainer.innerHTML = '';
      const kanji = ['桜', '風', '月', '海', '空', '光', '星', '夢', '愛', '希', '和', '美', '心', '技', '創'];
      
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
    
    // Create sakura petals (cherry blossoms)
    const sakuraContainer = document.querySelector('.sakura-petals');
    if (sakuraContainer) {
      sakuraContainer.innerHTML = '';
      
      for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.classList.add('sakura-petal');
        
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.top = `${Math.random() * 50}%`;
        petal.style.animationDuration = `${Math.random() * 10 + 15}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        petal.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 0.4 + 0.8})`;
        
        sakuraContainer.appendChild(petal);
      }
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] to-[#16213e] z-[-2]">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(255,182,193,0.3)_0%,_rgba(26,26,46,0)_70%)]"></div>
      </div>
      
      {/* Kanji background for Japanese aesthetics */}
      <div className="kanji-background absolute inset-0 z-[-1] overflow-hidden"></div>
      
      {/* Sakura petals animation */}
      <div className="sakura-petals absolute inset-0 z-[-1] pointer-events-none"></div>
      
      {/* Particles animation for magical effect */}
      <div className="particles-container absolute inset-0 z-[-1] pointer-events-none"></div>
      
      {/* Profile Avatar with anime design */}
      <div className="mb-8 animate-fade-in animate-delay-300 relative">
        <div className="relative z-10">
          <div className="absolute -inset-5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full opacity-70 blur-md animate-spin-slow"></div>
          <div className="absolute inset-0 rounded-full border-2 border-pink-300 opacity-50 animate-pulse"></div>
          <Avatar className="w-40 h-40 border-4 border-pink-300/50 shadow-lg relative">
            <AvatarImage 
              src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
              alt="Saikoushik Nalubola" 
              className="object-cover"
            />
            <AvatarFallback className="text-2xl bg-indigo-900 text-pink-200">SN</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-pink-400 animate-pulse">
            <span className="block w-5 h-5 bg-pink-400 rounded-full border-2 border-indigo-900"></span>
          </div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-wider font-jp"
        >
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">SAIKOUSHIK NALUBOLA</span>
        </h1>
        
        <div 
          ref={subtitleRef} 
          className="mb-8 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <span className="animate-fade-in animate-delay-500 text-xl md:text-2xl text-pink-300 font-medium relative font-jp">
            AI Engineer
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-pink-300 opacity-70"></span>
          </span>
          <span className="hidden sm:block animate-fade-in animate-delay-700 text-purple-300">•</span>
          <span className="animate-fade-in animate-delay-700 text-xl md:text-2xl text-purple-300 font-medium relative font-jp">
            Entrepreneur
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple-300 opacity-70"></span>
          </span>
          <span className="hidden sm:block animate-fade-in animate-delay-1000 text-indigo-400">•</span>
          <span className="animate-fade-in animate-delay-1000 text-xl md:text-2xl text-indigo-400 font-medium relative font-jp">
            Innovator
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-400 opacity-70"></span>
          </span>
        </div>
        
        <p className="animate-fade-in animate-delay-1000 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-jp italic">
          Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability
        </p>
        
        {/* Social Media Icons with improved styling */}
        <div className="flex justify-center gap-6 mb-10 animate-fade-in animate-delay-1200">
          <a href="https://github.com/saikoushiknalubola" target="_blank" rel="noopener noreferrer" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Github className="w-6 h-6 text-white group-hover:text-pink-300 transition-colors" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Linkedin className="w-6 h-6 text-white group-hover:text-pink-300 transition-colors" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Twitter className="w-6 h-6 text-white group-hover:text-pink-300 transition-colors" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Instagram className="w-6 h-6 text-white group-hover:text-purple-300 transition-colors" />
          </a>
          <a href="mailto:saikoushik42@gmail.com" className="social-icon-link group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-300 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            <Mail className="w-6 h-6 text-white group-hover:text-indigo-400 transition-colors" />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in animate-delay-1000 mt-2">
          <a href="#projects" className="anime-button-primary group flex items-center justify-center">
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
        <div className="w-6 h-10 rounded-full border-2 border-pink-300/70 flex justify-center p-1">
          <div className="w-1 h-2 bg-pink-300 rounded-full animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
