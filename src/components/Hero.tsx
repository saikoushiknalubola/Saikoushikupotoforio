
import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Download, Code, Brain, Rocket } from 'lucide-react';

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
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black px-4 sm:px-6 pt-32 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-blue-900/20 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        
        {/* Profile Image */}
        <div className={`relative mb-6 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <img 
            src="/lovable-uploads/46516734-5f93-48db-b7f2-53f2ffa7622e.png" 
            alt="Saikoushik Nalubola"
            className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 mx-auto rounded-xl object-contain hover:scale-105 transition-all duration-500 shadow-lg border border-gray-700"
          />
        </div>

        {/* Animated Name Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <div className="overflow-hidden">
              {nameLetters.map((letter, index) => (
                <span 
                  key={index} 
                  className="inline-block animate-name-reveal bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-extrabold tracking-wide"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          </h1>
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium">
              Full-Stack Developer & Tech Entrepreneur
            </p>
          </div>
        </div>

        {/* Enhanced Description */}
        <div className={`mb-10 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences that matter. I turn ideas into reality through 
            code, innovation, and a relentless drive to solve real-world problems.
          </p>
        </div>

        {/* Enhanced Skills Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="group bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
            <Code className="w-8 h-8 text-purple-400 mb-3 mx-auto group-hover:animate-pulse" />
            <h3 className="font-semibold text-purple-300 text-lg">Development</h3>
            <p className="text-gray-400 text-sm mt-1">Full-Stack Solutions</p>
          </div>
          
          <div className="group bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <Brain className="w-8 h-8 text-blue-400 mb-3 mx-auto group-hover:animate-pulse" />
            <h3 className="font-semibold text-blue-300 text-lg">AI & ML</h3>
            <p className="text-gray-400 text-sm mt-1">Intelligent Systems</p>
          </div>
          
          <div className="group bg-gradient-to-br from-pink-900/30 to-pink-800/20 p-6 rounded-2xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
            <Rocket className="w-8 h-8 text-pink-400 mb-3 mx-auto group-hover:animate-pulse" />
            <h3 className="font-semibold text-pink-300 text-lg">Innovation</h3>
            <p className="text-gray-400 text-sm mt-1">Business Growth</p>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="#about"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>Discover My Story</span>
          </a>
          
          <a
            href="#projects"
            className="group px-8 py-4 border-2 border-purple-400/50 text-purple-300 font-semibold rounded-xl hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 w-full sm:w-auto text-center hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>View My Work</span>
          </a>
          
          <a
            href="https://drive.google.com/file/d/1RrelmEaZ19UmSGIjJVciQyt74TIxTy03/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gray-800 text-gray-200 font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300 w-full sm:w-auto text-center hover:scale-105 flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-6 mt-8 transform transition-all duration-1000 delay-1300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-3 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-3 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:contact@example.com"
             className="p-3 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-110">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
