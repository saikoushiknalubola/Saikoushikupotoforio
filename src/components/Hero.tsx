
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Anchor, Compass, Star, Zap, Crown, Trophy } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showKingQuote, setShowKingQuote] = useState(false);
  const [nameLetters, setNameLetters] = useState<string[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const fullText = "海賊王になる男だ！";
  const kingQuote = "I'm gonna be King of Pirates!";
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

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typingTimer = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingTimer);
          setTimeout(() => {
            setShowKingQuote(true);
            if ('speechSynthesis' in window) {
              const utterance = new SpeechSynthesisUtterance("海賊王になる男だ");
              utterance.lang = 'ja-JP';
              utterance.rate = 0.8;
              utterance.pitch = 1.2;
              speechSynthesis.speak(utterance);
            }
          }, 500);
        }
      }, 150);

      return () => clearInterval(typingTimer);
    }
  }, [isVisible, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const navbarHeight = 80;
      window.scrollTo({
        top: aboutSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a1929] via-[#1a2332] to-[#2a3441] px-4 pt-24 pb-8">
      {/* Ocean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 via-blue-500/20 to-blue-900/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-4 w-6 h-6 opacity-20 animate-float">
          <Anchor className="w-full h-full text-orange-400" />
        </div>
        <div className="absolute top-56 right-8 w-5 h-5 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-full h-full text-yellow-300" />
        </div>
        <div className="absolute bottom-32 left-8 w-6 h-6 opacity-12 animate-float" style={{ animationDelay: '1s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
        
        {/* Profile Image Section */}
        <div className="relative mb-2 sm:mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 blur-2xl sm:blur-3xl rounded-full animate-pulse"></div>
          <div className="relative">
            <img 
              src="/lovable-uploads/46516734-5f93-48db-b7f2-53f2ffa7622e.png" 
              alt="Saikoushik Nalubola - AI Engineer & Digital Captain"
              className="w-32 h-40 sm:w-40 sm:h-48 md:w-48 md:h-56 lg:w-56 lg:h-64 xl:w-64 xl:h-72 mx-auto rounded-xl sm:rounded-2xl border-2 sm:border-4 border-orange-500/50 shadow-2xl object-contain hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-blue-400/20 to-orange-400/20"
            />
            {/* Pirate Flag Corner */}
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12">
              <div className="w-full h-full bg-black rounded-full border border-white sm:border-2 shadow-lg flex items-center justify-center">
                <div className="text-white text-xs sm:text-sm md:text-xl">⚡</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black mb-2 sm:mb-4 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="block overflow-hidden">
            {nameLetters.map((letter, index) => (
              <span 
                key={index} 
                className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-letter" 
                style={{ 
                  animationDelay: `${index * 150}ms`
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </div>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-1 sm:mt-2">
            AI Engineer & Technology Entrepreneur
          </span>
        </h1>

        {/* Professional Subtitle */}
        <div className={`mb-3 sm:mb-6 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-medium px-2">
            Navigating the Future of Technology with Innovation & Excellence
          </p>
        </div>

        {/* Professional Description */}
        <div className={`mb-4 sm:mb-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto px-2">
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-3 sm:mb-6">
              Passionate AI Engineer and Entrepreneur with expertise in machine learning, full-stack development, 
              and innovative business solutions. Dedicated to building cutting-edge technology that transforms industries 
              and creates meaningful impact in the digital world.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 mt-3 sm:mt-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-2 sm:p-4 rounded-lg sm:rounded-xl border border-orange-500/30 hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mb-1 sm:mb-3 mx-auto" />
                <h3 className="font-bold text-orange-400 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">AI & ML Expertise</h3>
                <p className="text-xs md:text-sm text-gray-300">Advanced Machine Learning & AI Solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 sm:p-4 rounded-lg sm:rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-1 sm:mb-3 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Full-Stack Development</h3>
                <p className="text-xs md:text-sm text-gray-300">Complete Web & Mobile Application Solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2 sm:p-4 rounded-lg sm:rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-1 sm:mb-3 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">Business Innovation</h3>
                <p className="text-xs md:text-sm text-gray-300">Strategic Technology & Entrepreneurship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-4 sm:mb-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="w-full max-w-xs sm:max-w-sm px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2 text-xs sm:text-sm"
          >
            <span>Explore My Work</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          
          <a
            href="#projects"
            className="w-full max-w-xs sm:max-w-sm px-4 sm:px-6 py-2 sm:py-3 border border-blue-500 sm:border-2 bg-blue-500/10 backdrop-blur-sm text-blue-300 font-bold rounded-lg sm:rounded-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 text-xs sm:text-sm shadow-lg"
          >
            <span>View Projects</span>
            <Compass className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          
          <a
            href="https://drive.google.com/file/d/1RrelmEaZ19UmSGIjJVciQyt74TIxTy03/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs sm:max-w-sm px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg sm:rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2 text-xs sm:text-sm"
          >
            <span>Download Resume</span>
            <Anchor className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
