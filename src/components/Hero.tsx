
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
    <section className="min-h-screen pt-20 sm:pt-24 pb-24 sm:pb-32 px-4 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e]">
      {/* Background elements positioned to avoid text overlap */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 sm:top-40 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 opacity-10 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-3 h-0.5 sm:w-4 sm:h-0.5 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-52 sm:bottom-64 right-4 sm:right-8 w-5 h-5 sm:w-7 sm:h-7 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
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
        {/* Optimized Wanted Poster Card */}
        <div className="mb-4 sm:mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 blur-2xl rounded-full animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-[#F4E4BC] via-[#E8D5A3] to-[#D4C085] text-black p-2.5 sm:p-3 md:p-4 rounded-xl border-3 border-amber-900 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 max-w-[240px] sm:max-w-[280px] mx-auto hover:scale-105 group" style={{ fontFamily: "'Pirata One', cursive" }}>
            {/* Profile Image */}
            <div className="mb-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full blur-md opacity-40 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                  alt="Saikoushik Nalubola - Future King of Code"
                  className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mx-auto border-3 border-amber-900 shadow-xl object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -top-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                  <Crown className="text-yellow-400 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3" />
                </div>
                <div className="absolute -bottom-0.5 -left-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Trophy className="text-yellow-300 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5" />
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="text-sm sm:text-base md:text-lg font-black mb-1 tracking-wider text-red-800">WANTED</div>
              <div className="text-base sm:text-lg md:text-xl font-black leading-tight mb-1 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent">
                SAIKOUSHIK NALUBOLA
              </div>
              <div className="text-xs sm:text-sm font-bold text-blue-800 mb-1">AI ENGINEER & ENTREPRENEUR</div>
              <div className="text-sm sm:text-base md:text-lg font-black text-red-600 mb-1">BOUNTY: ∞ BERRIES</div>
              <div className="text-xs font-semibold text-gray-700">DEAD OR ALIVE</div>
              <div className="text-xs font-medium text-gray-600 mt-1.5 italic leading-relaxed">
                "A visionary developer inspired by epic adventures, determined to revolutionize technology"
              </div>
              
              {/* Status badges */}
              <div className="flex justify-center space-x-1.5 mt-1.5">
                <span className="px-1.5 py-0.5 bg-green-600 text-white text-xs font-bold rounded-full">ACTIVE</span>
                <span className="px-1.5 py-0.5 bg-orange-600 text-white text-xs font-bold rounded-full">DANGEROUS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Title */}
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-4 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ fontFamily: "'Pirata One', cursive" }}>
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
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-orange-400 jp-text mb-2 sm:mb-3 min-h-[1.5rem] sm:min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center">
              {typedText}
              <span className="animate-pulse ml-2 text-red-500">|</span>
            </p>
            
            {showKingQuote && (
              <div className="animate-fade-in">
                <p className="text-sm sm:text-base md:text-lg text-gray-300 italic font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-glow">
                  "{kingQuote}"
                </p>
                <div className="mt-1 text-xs text-gray-500">
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
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 px-4">
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, an AI Engineer and Entrepreneur on an epic quest to revolutionize technology! 
              Inspired by the greatest adventure story ever told, I'm building 
              <span className="text-blue-400 font-bold"> legendary AI solutions</span> that'll change the world!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-3 rounded-xl border border-red-500/30 hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6 text-red-400 mb-2 mx-auto" />
                <h3 className="font-bold text-red-400 mb-1 text-sm">AI Mastery</h3>
                <p className="text-xs text-gray-300">Machine Learning & Deep Learning expertise</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <Star className="w-6 h-6 text-blue-400 mb-2 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-1 text-sm">Full-Stack Power</h3>
                <p className="text-xs text-gray-300">End-to-end development solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <Compass className="w-6 h-6 text-purple-400 mb-2 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-1 text-sm">Entrepreneurial Spirit</h3>
                <p className="text-xs text-gray-300">Building startups and innovative solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-orange-500/40 inline-flex items-center justify-center space-x-3 min-w-[180px] text-sm border-2 border-transparent"
          >
            <span>Join My Adventure!</span>
            <Anchor className="w-4 h-4" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 border-2 border-blue-500 bg-blue-500/10 backdrop-blur-sm text-blue-300 font-bold rounded-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-110 inline-flex items-center justify-center space-x-3 min-w-[180px] text-sm shadow-lg shadow-blue-500/20"
          >
            <span>Legendary Projects</span>
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Perfectly Centered Scroll Indicator with proper spacing */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 z-20">
        <div className="text-center">
          <p className="text-orange-400 font-bold text-sm jp-text animate-pulse mb-1">
            冒険が始まる
          </p>
          <p className="text-gray-400 text-xs italic">
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
        
        <div className="text-xs text-gray-500 text-center font-medium animate-pulse">
          Scroll for Epic Adventures
        </div>
      </div>
    </section>
  );
};

export default Hero;
