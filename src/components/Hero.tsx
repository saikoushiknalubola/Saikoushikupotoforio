
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Anchor, Compass, Star, Zap, Crown, Trophy } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showKingQuote, setShowKingQuote] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const fullText = "海賊王になる男だ！";
  const kingQuote = "I'm gonna be King of the Code!";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

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
              const utterance = new SpeechSynthesisUtterance(kingQuote);
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
    <section className="min-h-screen pt-28 sm:pt-24 pb-32 sm:pb-32 px-4 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e]">
      {/* Background elements positioned to avoid text overlap */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 sm:top-40 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 opacity-10 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-3 h-0.5 sm:w-4 sm:h-0.5 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-64 sm:bottom-64 right-4 sm:right-8 w-5 h-5 sm:w-7 sm:h-7 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-full h-full text-yellow-300" />
        </div>
        
        <div className="absolute top-1/3 right-2 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 opacity-8 animate-float" style={{ animationDelay: '4s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
        
        <div className="absolute bottom-1/3 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 opacity-12 animate-float" style={{ animationDelay: '1s' }}>
          <Anchor className="w-full h-full text-blue-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto w-full">
        {/* Optimized Wanted Poster Card - Fixed mobile spacing */}
        <div className="mb-6 sm:mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 blur-2xl rounded-full animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-[#F4E4BC] via-[#E8D5A3] to-[#D4C085] text-black p-3 sm:p-3 md:p-4 rounded-xl border-3 border-amber-900 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 max-w-[200px] sm:max-w-[240px] mx-auto hover:scale-105 group" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            {/* Profile Image */}
            <div className="mb-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full blur-md opacity-40 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                  alt="Saikoushik Nalubola - Future King of Code"
                  className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 rounded-full mx-auto border-3 border-amber-900 shadow-xl object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                  <Crown className="text-yellow-400 w-2 h-2 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5" />
                </div>
                <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Trophy className="text-yellow-300 w-1.5 h-1.5 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2" />
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-xs sm:text-sm md:text-base font-black mb-1 tracking-wider text-red-800" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>WANTED</div>
              <div className="text-sm sm:text-base md:text-lg font-black leading-tight mb-1 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                SAIKOUSHIK NALUBOLA
              </div>
              <div className="text-xs sm:text-xs font-bold text-blue-800 mb-1" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>AI ENGINEER & ENTREPRENEUR</div>
              <div className="text-xs sm:text-sm md:text-base font-black text-red-600 mb-1" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>BOUNTY: ∞ BERRIES</div>
              <div className="text-xs font-semibold text-gray-700" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>DEAD OR ALIVE</div>
              <div className="text-xs font-medium text-gray-600 mt-1.5 italic leading-relaxed" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                "A visionary developer inspired by epic adventures, determined to revolutionize technology"
              </div>
              
              {/* Status badges */}
              <div className="flex justify-center space-x-1.5 mt-1.5">
                <span className="px-1.5 py-0.5 bg-green-600 text-white text-xs font-bold rounded-full" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>ACTIVE</span>
                <span className="px-1.5 py-0.5 bg-orange-600 text-white text-xs font-bold rounded-full" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>DANGEROUS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Title */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse-glow block">
            Future
          </span>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
            King of Code
          </span>
          <span className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent block">
            & Innovation
          </span>
        </h1>

        {/* Japanese Quote Section */}
        <div className={`mb-4 sm:mb-6 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-orange-400 jp-text mb-2 sm:mb-3 min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              {typedText}
              <span className="animate-pulse ml-2 text-red-500">|</span>
            </p>
            
            {showKingQuote && (
              <div className="animate-fade-in">
                <p className="text-sm sm:text-base md:text-lg text-gray-300 italic font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-glow" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                  "{kingQuote}"
                </p>
                <div className="mt-1 text-xs text-gray-500" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                  - The Developer Who Will Change Everything
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced description */}
        <div className={`mb-6 sm:mb-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 px-4" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, an AI Engineer and Entrepreneur on an epic quest to revolutionize technology! 
              Inspired by the greatest adventure story ever told, I'm building 
              <span className="text-blue-400 font-bold"> legendary AI solutions</span> that'll change the world!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-3 rounded-xl border border-red-500/30 hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6 text-red-400 mb-2 mx-auto" />
                <h3 className="font-bold text-red-400 mb-1 text-sm" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>AI Mastery</h3>
                <p className="text-xs text-gray-300" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Machine Learning & Deep Learning expertise</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <Star className="w-6 h-6 text-blue-400 mb-2 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-1 text-sm" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Full-Stack Power</h3>
                <p className="text-xs text-gray-300" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>End-to-end development solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <Compass className="w-6 h-6 text-purple-400 mb-2 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-1 text-sm" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Entrepreneurial Spirit</h3>
                <p className="text-xs text-gray-300" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Building startups and innovative solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-orange-500/40 inline-flex items-center justify-center space-x-3 min-w-[180px] text-sm border-2 border-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
          >
            <span>Join My Adventure!</span>
            <Anchor className="w-4 h-4" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 border-2 border-blue-500 bg-blue-500/10 backdrop-blur-sm text-blue-300 font-bold rounded-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-110 inline-flex items-center justify-center space-x-3 min-w-[180px] text-sm shadow-lg shadow-blue-500/20" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
          >
            <span>Legendary Projects</span>
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Fixed Scroll Indicator with better mobile positioning */}
      <div className="absolute bottom-8 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-20">
        <div className="text-center bg-[#121212]/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-orange-500/30">
          <p className="text-orange-400 font-bold text-xs sm:text-sm jp-text animate-pulse mb-1" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            冒険が始まる
          </p>
          <p className="text-gray-400 text-xs italic" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            (The Adventure Begins)
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="group relative p-3 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-300 hover:scale-110 animate-float backdrop-blur-sm"
          aria-label="Scroll to adventures"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <ChevronDown className="w-6 h-6 text-orange-400 relative z-10 animate-bounce group-hover:text-orange-300 transition-colors duration-300" />
          
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        </button>
        
        <div className="text-xs text-gray-400 text-center font-medium animate-pulse bg-[#121212]/60 backdrop-blur-sm rounded px-2 py-1" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
          Scroll for Epic Adventures
        </div>
      </div>
    </section>
  );
};

export default Hero;
