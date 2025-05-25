import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Instagram, Mail, Globe } from 'lucide-react';

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isDescVisible, setIsDescVisible] = useState(false);
  const [isSocialsVisible, setIsSocialsVisible] = useState(false);
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  
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
  
  // Staggered animations
  useEffect(() => {
    setIsNameVisible(true);
    setTimeout(() => setIsDescVisible(true), 500);
    setTimeout(() => setIsSocialsVisible(true), 800);
    setTimeout(() => setIsButtonsVisible(true), 1100);
    setTimeout(() => setIsProfileVisible(true), 300);
    
    // Create animated glow elements
    const container = document.querySelector('.glow-container');
    if (container) {
      container.innerHTML = '';
      
      for (let i = 0; i < 3; i++) {
        const glow = document.createElement('div');
        glow.classList.add('absolute', 'rounded-full', 'animate-pulse');
        
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
      className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 py-8 sm:py-12 overflow-hidden"
      style={{
        '--x': `${position.x}%`,
        '--y': `${position.y}%`
      } as React.CSSProperties}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#121212] z-[-2]">
        <div className="absolute inset-0 opacity-30 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="spotlight"></div>
        
        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="absolute h-0.5 w-full bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
              style={{ 
                top: `${20 * i + Math.random() * 10}%`, 
                left: 0,
                animationDuration: `${30 + Math.random() * 20}s`,
                animationDelay: `${-Math.random() * 20}s`
              }}
            ></div>
          ))}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i} 
              className="absolute h-full w-0.5 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
              style={{ 
                left: `${20 * i + Math.random() * 10}%`, 
                top: 0,
                animationDuration: `${30 + Math.random() * 20}s`,
                animationDelay: `${-Math.random() * 20}s`
              }}
            ></div>
          ))}
        </div>
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
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-16">
        {/* Content */}
        <div className="w-full lg:w-2/3 space-y-3 sm:space-y-4 lg:space-y-6 text-center lg:text-left">
          {/* Tags */}
          <div className={`flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 mb-4 sm:mb-6 lg:mb-8 transform transition-all duration-700 ${isSocialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="badge badge-pink text-xs sm:text-sm">AI Engineer</span>
            <span className="badge badge-purple text-xs sm:text-sm">Entrepreneur</span>
            <span className="badge badge-pink text-xs sm:text-sm">Innovator</span>
          </div>
          
          {/* Name with enhanced animation and scrolling effect */}
          <div className="overflow-hidden">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
              <span className="text-white block mb-1 sm:mb-2">Hi, I'm </span>
              <div className={`relative transform transition-all duration-1000 ${isNameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 font-bold animate-pulse-glow relative">
                  <span className="inline-block animate-[scroll_3s_ease-in-out_infinite] bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                    Saikoushik Nalubola
                  </span>
                </span>
                <span className="inline-block animate-pulse ml-1 -mb-1 sm:-mb-2 text-cyan-400 text-3xl sm:text-5xl lg:text-6xl">|</span>
              </div>
            </h1>
          </div>
          
          {/* Description */}
          <div className="overflow-hidden">
            <p className={`text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light transform transition-all duration-700 ${isDescVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability
            </p>
          </div>
          
          {/* Decorative element */}
          <div className={`hidden lg:block h-1 w-16 sm:w-24 bg-gradient-to-r from-pink-500 to-purple-500 my-3 sm:my-4 lg:my-6 transform transition-all duration-700 ${isDescVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          {/* Social Media */}
          <div className={`flex justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6 mt-4 sm:mt-6 lg:mt-8 transform transition-all duration-700 ${isSocialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="https://github.com/saikoushiknalubola" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://www.linkedin.com/in/saikoushiknalubola" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://x.com/saikoushik_42" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://www.instagram.com/saikoushiknalubola/" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="mailto:saikoushik42@gmail.com" 
               className="social-button group">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://saikoushiknalubola.netlify.app/" target="_blank" rel="noopener noreferrer" 
               className="social-button group">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4 pt-3 sm:pt-4 lg:pt-6 transform transition-all duration-700 ${isButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#projects" className="anime-button-primary group px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold">
              <span>
                View Projects
                <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1 sm:ml-2 inline-block transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="anime-button-secondary group px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 text-xs sm:text-sm lg:text-base font-semibold">
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        
        {/* Profile Image */}
        <div className={`mt-6 sm:mt-8 lg:mt-0 relative transform transition-all duration-1000 ${isProfileVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-8 rotate-6'}`}>
          <div className="relative animate-float">
            {/* Glow effects */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-30 blur-2xl animate-pulse"></div>
            
            {/* Card background */}
            <div className="relative rounded-2xl overflow-hidden glass-card p-1.5 border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-50"></div>
              
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-xl">
                <Avatar className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl">
                  <AvatarImage 
                    src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                    alt="Saikoushik Nalubola" 
                    className="object-cover"
                  />
                  <AvatarFallback className="text-xl sm:text-2xl lg:text-4xl bg-gradient-to-br from-pink-600 to-purple-700 text-white font-bold">SN</AvatarFallback>
                </Avatar>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-300"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-700"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-500"></div>
            </div>
            
            {/* Status indicator */}
            <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-green-500 animate-pulse">
              <span className="block w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-r from-green-400 to-green-500 border-2 border-[#121212]"></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 rounded-full border-2 border-pink-500/70 flex justify-center p-1">
          <div className="w-1 h-2 bg-pink-500 rounded-full animate-scroll-hint"></div>
        </div>
        <p className="text-xs text-pink-500/70 mt-2 font-medium tracking-wider">SCROLL</p>
      </div>
    </section>
  );
};

export default Hero;
