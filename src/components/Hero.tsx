
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
  
  // Spotlight effect - disabled on mobile for performance
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Staggered animations
  useEffect(() => {
    setIsNameVisible(true);
    setTimeout(() => setIsDescVisible(true), 300);
    setTimeout(() => setIsSocialsVisible(true), 500);
    setTimeout(() => setIsButtonsVisible(true), 700);
    setTimeout(() => setIsProfileVisible(true), 200);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:py-12 overflow-hidden"
      style={{
        '--x': `${position.x}%`,
        '--y': `${position.y}%`
      } as React.CSSProperties}
    >
      {/* Background elements - simplified for mobile */}
      <div className="absolute inset-0 bg-[#121212] z-[-2]">
        <div className="hidden md:block absolute inset-0 opacity-30 bg-[url('/bg-pattern.png')] bg-repeat opacity-10"></div>
        <div className="hidden md:block spotlight"></div>
      </div>
      
      {/* Mobile-optimized animated background */}
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden opacity-20">
        <div className="absolute h-32 w-32 sm:h-48 sm:w-48 rounded-full blur-3xl bg-pink-500/20 -top-5 -left-10 animate-pulse"></div>
        <div className="absolute h-32 w-32 sm:h-48 sm:w-48 rounded-full blur-3xl bg-purple-500/20 bottom-10 right-5 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center">
        {/* Mobile-first content layout */}
        <div className="w-full space-y-3 sm:space-y-4">
          {/* Profile Image - moved to top for mobile */}
          <div className={`relative transform transition-all duration-1000 mx-auto ${isProfileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="relative">
              {/* Mobile-optimized glow effects */}
              <div className="absolute -inset-2 sm:-inset-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 sm:opacity-30 blur-xl animate-pulse"></div>
              
              {/* Card background */}
              <div className="relative rounded-xl overflow-hidden glass-card p-1 border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10"></div>
                
                {/* Profile Image - mobile optimized sizes */}
                <div className="relative overflow-hidden rounded-lg">
                  <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-lg">
                    <AvatarImage 
                      src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                      alt="Saikoushik Nalubola" 
                      className="object-cover"
                    />
                    <AvatarFallback className="text-lg sm:text-2xl bg-gradient-to-br from-pink-600 to-purple-700 text-white font-bold">SN</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Status indicator */}
                <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-green-500">
                  <span className="block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400 border border-[#121212]"></span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tags */}
          <div className={`flex flex-wrap justify-center gap-2 mb-4 sm:mb-6 transform transition-all duration-700 ${isSocialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="badge badge-pink text-xs sm:text-sm">AI Engineer</span>
            <span className="badge badge-purple text-xs sm:text-sm">Entrepreneur</span>
            <span className="badge badge-pink text-xs sm:text-sm">Innovator</span>
          </div>
          
          {/* Name with enhanced mobile animation */}
          <div className="overflow-hidden">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              <span className="text-white block mb-1 sm:mb-2 text-lg sm:text-2xl md:text-3xl">Hi, I'm</span>
              <div className={`relative transform transition-all duration-1000 ${isNameVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <span className="gradient-text font-bold animate-pulse-glow">
                  Saikoushik Nalubola
                </span>
                <span className="inline-block animate-pulse ml-1 text-purple-400 text-2xl sm:text-4xl md:text-5xl">|</span>
              </div>
            </h1>
          </div>
          
          {/* Description */}
          <div className="overflow-hidden">
            <p className={`text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light px-4 transform transition-all duration-700 ${isDescVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability
            </p>
          </div>
          
          {/* Social Media - mobile optimized */}
          <div className={`flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6 transform transition-all duration-700 ${isSocialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="https://github.com/saikoushiknalubola" target="_blank" rel="noopener noreferrer" 
               className="social-button group p-2 sm:p-3">
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://www.linkedin.com/in/saikoushiknalubola" target="_blank" rel="noopener noreferrer" 
               className="social-button group p-2 sm:p-3">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://x.com/saikoushik_42" target="_blank" rel="noopener noreferrer" 
               className="social-button group p-2 sm:p-3">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://www.instagram.com/saikoushiknalubola/" target="_blank" rel="noopener noreferrer" 
               className="social-button group p-2 sm:p-3">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="mailto:saikoushik42@gmail.com" 
               className="social-button group p-2 sm:p-3">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
            <a href="https://saikoushiknalubola.netlify.app/" target="_blank" rel="noopener noreferrer" 
               className="social-button group p-2 sm:p-3">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-pink-400" />
            </a>
          </div>
          
          {/* CTA Buttons - mobile optimized */}
          <div className={`flex flex-col sm:flex-row justify-center gap-3 pt-4 sm:pt-6 px-4 transform transition-all duration-700 ${isButtonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a href="#projects" className="anime-button-primary group px-4 py-3 sm:px-6 sm:py-3 text-sm font-semibold w-full sm:w-auto">
              <span>
                View Projects
                <svg className="w-4 h-4 ml-2 inline-block transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="anime-button-secondary group px-4 py-3 sm:px-6 sm:py-3 text-sm font-semibold w-full sm:w-auto">
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - mobile optimized */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-4 h-6 sm:w-5 sm:h-8 rounded-full border-2 border-pink-500/70 flex justify-center p-1">
          <div className="w-0.5 h-1.5 bg-pink-500 rounded-full animate-scroll-hint"></div>
        </div>
        <p className="text-xs text-pink-500/70 mt-1 font-medium tracking-wider">SCROLL</p>
      </div>
    </section>
  );
};

export default Hero;
