
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Instagram, Mail, Globe, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nameTyped, setNameTyped] = useState('');
  const fullName = 'Saikoushik Nalubola';
  
  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation for name
    let index = 0;
    const typeTimer = setInterval(() => {
      if (index <= fullName.length) {
        setNameTyped(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(typeTimer);
      }
    }, 80);
    
    return () => clearInterval(typeTimer);
  }, []);

  const socialLinks = [
    { href: "https://github.com/saikoushiknalubola", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/saikoushiknalubola", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/saikoushik_42", icon: Twitter, label: "Twitter" },
    { href: "https://www.instagram.com/saikoushiknalubola/", icon: Instagram, label: "Instagram" },
    { href: "mailto:saikoushik42@gmail.com", icon: Mail, label: "Email" },
    { href: "https://saikoushiknalubola.netlify.app/", icon: Globe, label: "Portfolio" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 sm:pt-24 pb-8 sm:pb-16 overflow-hidden bg-[#121212]">
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-40 sm:h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-3xl" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-6">
          {/* Profile Image */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="relative inline-block">
              <Avatar className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto ring-2 ring-purple-500/30 ring-offset-4 ring-offset-[#121212]">
                <AvatarImage 
                  src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                  alt="Saikoushik Nalubola" 
                  className="object-cover"
                />
                <AvatarFallback className="text-base sm:text-xl bg-gradient-to-br from-pink-600 to-purple-700 text-white font-bold">
                  SN
                </AvatarFallback>
              </Avatar>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-7 sm:h-7 bg-green-500 rounded-full border-3 border-[#121212] flex items-center justify-center">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Role Tags */}
          <div className={`flex flex-wrap justify-center gap-2 transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-pink-500/20 text-pink-400 rounded-full border border-pink-500/30">
              AI Engineer
            </span>
            <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
              Entrepreneur
            </span>
            <span className="px-3 py-1.5 text-xs sm:text-sm font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
              Innovator
            </span>
          </div>
          
          {/* Greeting & Name */}
          <div className={`space-y-2 sm:space-y-3 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light">
              Hi, I'm
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                {nameTyped}
              </span>
              <span className="animate-pulse text-purple-400">|</span>
            </h1>
          </div>
          
          {/* Description */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
              Transforming ideas into impactful AI-driven solutions with passion for 
              <span className="text-pink-400 font-semibold"> innovation</span> and 
              <span className="text-purple-400 font-semibold"> sustainability</span>
            </p>
          </div>
          
          {/* Social Links */}
          <div className={`flex justify-center gap-3 sm:gap-4 py-3 transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="group relative p-2.5 sm:p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-pink-500/20 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4 transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 min-h-[44px]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-6 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-lg hover:bg-purple-500/10 hover:border-pink-400 hover:text-pink-400 transition-all duration-300 hover:scale-105 min-h-[44px]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-0.5 h-6 bg-gradient-to-b from-pink-500 to-transparent rounded-full" />
          <ChevronDown className="w-4 h-4 text-pink-500" />
          <span className="text-xs text-pink-500/70 font-medium tracking-wider">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
