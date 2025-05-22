
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Instagram, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  // Spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Animated elements
  useEffect(() => {
    // Reveal animations for elements
    const titles = document.querySelectorAll('.animate-on-load');
    titles.forEach((title, index) => {
      title.classList.add('animate-title-reveal');
      (title as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
    
    // Create animated glow elements
    const container = document.querySelector('.glow-container');
    if (container) {
      // Clear existing elements
      container.innerHTML = '';
      
      // Add new elements
      for (let i = 0; i < 3; i++) {
        const glow = document.createElement('div');
        glow.classList.add('absolute', 'rounded-full', 'animate-pulse');
        
        // Randomize size, position and color
        const size = Math.random() * 300 + 100;
        const top = Math.random() * 100 - 25;
        const left = Math.random() * 100 - 25;
        const delay = Math.random() * 4;
        const duration = Math.random() * 8 + 4;
        const colors = ['bg-pink-500/10', 'bg-purple-500/10', 'bg-indigo-500/10'];
        
        glow.style.width = `${size}px`;
        glow.style.height = `${size}px`;
        glow.style.top = `${top}%`;
        glow.style.left = `${left}%`;
        glow.style.animationDuration = `${duration}s`;
        glow.style.animationDelay = `${delay}s`;
        glow.classList.add(colors[i % colors.length], 'blur-3xl');
        
        container.appendChild(glow);
      }
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        '--x': `${position.x}%`,
        '--y': `${position.y}%`
      } as React.CSSProperties}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#121212] z-[-2]">
        <div className="absolute inset-0 opacity-30 bg-[url('/bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="spotlight"></div>
      </div>
      
      {/* Animated background glows */}
      <div className="glow-container absolute inset-0 z-[-1] pointer-events-none overflow-hidden"></div>
      
      {/* Grid decoration */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="h-full w-full border-[0.5px] border-white/5" 
             style={{ 
               backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', 
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center">
        {/* Content */}
        <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
          {/* Tags */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4 animate-on-load">
            <span className="badge badge-pink">AI Engineer</span>
            <span className="badge badge-purple">Entrepreneur</span>
            <span className="badge badge-pink">Innovator</span>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold animate-on-load">
            <span className="text-white">Hi, I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-size-200 animate-bg-pos">
              Saikoushik
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 animate-on-load">
            Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability
          </p>
          
          {/* Social Media */}
          <div className="flex justify-center lg:justify-start gap-6 animate-on-load">
            <a href="https://github.com/saikoushiknalubola" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Github className="w-5 h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Linkedin className="w-5 h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Twitter className="w-5 h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Instagram className="w-5 h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="mailto:saikoushik42@gmail.com" 
               className="social-button group">
              <Mail className="w-5 h-5 text-white group-hover:text-pink-400" />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-6 animate-on-load">
            <a href="#projects" className="anime-button-primary group">
              <span>
                View Projects
                <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="anime-button-secondary group">
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className="mt-12 lg:mt-0 relative">
          <div className="relative animate-float">
            {/* Glow effects */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 blur-2xl animate-pulse"></div>
            
            {/* Card background */}
            <div className="relative rounded-2xl overflow-hidden glass-card p-1 border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-50"></div>
              
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-xl">
                <Avatar className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl">
                  <AvatarImage 
                    src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                    alt="Saikoushik Nalubola" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-br from-pink-600 to-purple-700 text-white">SN</AvatarFallback>
                </Avatar>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
              </div>
            </div>
            
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-green-500 animate-pulse">
              <span className="block w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-2 border-[#121212]"></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-pink-500/70 flex justify-center p-1">
          <div className="w-1 h-2 bg-pink-500 rounded-full animate-scroll-hint"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
