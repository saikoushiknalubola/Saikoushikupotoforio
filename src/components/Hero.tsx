
import React, { useEffect, useState } from 'react';
import { ChevronDown, Anchor, Star, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nameLetters, setNameLetters] = useState<string[]>([]);
  const fullName = "Saikoushik Nalubola";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Name animation effect
  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const nameTimer = setInterval(() => {
        if (i <= fullName.length) {
          setNameLetters(fullName.split('').slice(0, i));
          i++;
        } else {
          clearInterval(nameTimer);
        }
      }, 80);

      return () => clearInterval(nameTimer);
    }
  }, [isVisible, fullName]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a1929] via-[#1a2332] to-[#2a3441] px-4 pt-24 pb-8">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/10 via-blue-900/10 to-blue-950/20"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
        
        {/* Profile Image Section */}
        <div className="relative mb-4 md:mb-6">
          <div className="relative">
            <img 
              src="/lovable-uploads/46516734-5f93-48db-b7f2-53f2ffa7622e.png" 
              alt="Saikoushik Nalubola"
              className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 mx-auto rounded-xl object-contain hover:scale-105 transition-transform duration-500 shadow-lg border border-gray-700"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="block overflow-hidden">
            {nameLetters.map((letter, index) => (
              <span 
                key={index} 
                className="inline-block text-teal-400 animate-letter" 
                style={{ 
                  animationDelay: `${index * 150}ms`
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
          <span className="text-gray-300 block text-xs sm:text-sm md:text-lg lg:text-xl mt-2">
            Software Engineer & Entrepreneur
          </span>
        </h1>

        {/* Professional Description */}
        <div className={`mb-6 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Building innovative software solutions with expertise in machine learning and 
            full-stack development. Passionate about creating technology that makes a difference.
          </p>
        </div>

        {/* Simple Skills Overview */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-white/5 p-4 rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all">
            <Zap className="w-6 h-6 text-teal-400 mb-2 mx-auto" />
            <h3 className="font-medium text-teal-400 mb-1">Software Development</h3>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all">
            <Star className="w-6 h-6 text-teal-400 mb-2 mx-auto" />
            <h3 className="font-medium text-teal-400 mb-1">Machine Learning</h3>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg border border-gray-700 hover:border-teal-500/50 transition-all">
            <Anchor className="w-6 h-6 text-teal-400 mb-2 mx-auto" />
            <h3 className="font-medium text-teal-400 mb-1">Entrepreneurship</h3>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-all duration-300 w-full sm:w-auto text-center"
          >
            About Me
          </a>
          
          <a
            href="#projects"
            className="px-6 py-3 border border-teal-500 text-teal-400 font-medium rounded-lg hover:bg-teal-500/10 transition-all duration-300 w-full sm:w-auto text-center"
          >
            View Projects
          </a>
          
          <a
            href="https://drive.google.com/file/d/1RrelmEaZ19UmSGIjJVciQyt74TIxTy03/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-600 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Resume
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
