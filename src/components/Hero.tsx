
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Anchor, Compass, Star, Zap } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showKingQuote, setShowKingQuote] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const fullText = "海賊王になる男だ！";
  const kingQuote = "I'm gonna be King of the Pirates!";

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
            // Add text-to-speech functionality
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
    <section className="min-h-screen pt-24 pb-8 px-4 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e]">
      {/* Fixed background elements positioned to avoid text overlap */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left - reduced opacity */}
        <div className="absolute top-28 left-2 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 opacity-8 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-4 h-0.5 sm:w-6 sm:h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Bottom right */}
        <div className="absolute bottom-20 right-2 sm:right-6 w-6 h-6 sm:w-10 sm:h-10 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-full h-full text-yellow-300" />
        </div>
        
        {/* Far right - moved away from content */}
        <div className="absolute top-1/3 right-1 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 opacity-8 animate-float" style={{ animationDelay: '4s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
        
        {/* Bottom left */}
        <div className="absolute bottom-1/3 left-2 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
          <Anchor className="w-full h-full text-blue-500" />
        </div>

        {/* Subtle sparkles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 sm:w-3 sm:h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
        {/* Profile Image and Wanted Poster */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 blur-2xl sm:blur-3xl rounded-full"></div>
          <div className="relative bg-gradient-to-br from-amber-100 to-yellow-200 text-black p-4 sm:p-6 rounded-xl border-4 border-amber-800 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto">
            {/* Your Profile Image */}
            <div className="mb-4">
              <img 
                src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                alt="Saikoushik Nalubola"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto border-4 border-amber-800 shadow-lg object-cover"
              />
            </div>
            <div className="text-lg sm:text-xl font-black mb-2 font-mono">WANTED</div>
            <div className="text-xl sm:text-2xl md:text-3xl font-black leading-tight">SAIKOUSHIK NALUBOLA</div>
            <div className="text-sm sm:text-base font-bold mt-2">AI ENGINEER & ENTREPRENEUR</div>
            <div className="text-lg sm:text-xl font-bold mt-1 text-red-600">BOUNTY: ∞ BERRIES</div>
            <div className="text-xs sm:text-sm mt-1 font-semibold">DEAD OR ALIVE</div>
          </div>
        </div>

        {/* Main Title with better mobile spacing */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse-glow">
            Future
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pirate King
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            of Code
          </span>
        </h1>

        {/* Japanese Quote with voice */}
        <div className={`mb-6 sm:mb-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 jp-text mb-3 sm:mb-4 min-h-[2rem] sm:min-h-[3rem] flex items-center justify-center">
              {typedText}
              <span className="animate-pulse ml-1 text-red-500">|</span>
            </p>
            
            {showKingQuote && (
              <div className="animate-fade-in">
                <p className="text-base sm:text-lg md:text-xl text-gray-300 italic font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-glow">
                  "{kingQuote}"
                </p>
                <div className="mt-2 text-xs sm:text-sm text-gray-500">
                  - The Man Who Will Revolutionize Tech
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced description */}
        <div className={`mb-8 sm:mb-12 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 px-2">
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, an AI Engineer and Entrepreneur on an epic quest to revolutionize technology! 
              Just like Luffy's journey to become Pirate King, I'm building 
              <span className="text-blue-400 font-bold"> legendary AI solutions</span> that'll change the world!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-3 sm:p-4 rounded-xl border border-red-500/30">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-2 mx-auto" />
                <h3 className="font-bold text-red-400 mb-2 text-sm sm:text-base">Gear 2nd: AI Power</h3>
                <p className="text-xs sm:text-sm text-gray-300">Machine Learning & Deep Learning mastery</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 sm:p-4 rounded-xl border border-blue-500/30">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-2 text-sm sm:text-base">Gear 3rd: Full-Stack</h3>
                <p className="text-xs sm:text-sm text-gray-300">End-to-end development solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 sm:p-4 rounded-xl border border-purple-500/30 sm:col-span-2 lg:col-span-1">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-2 text-sm sm:text-base">Gear 4th: Entrepreneur</h3>
                <p className="text-xs sm:text-sm text-gray-300">Building startups and innovative solutions</p>
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
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/30 inline-flex items-center justify-center space-x-2 min-w-[200px]"
          >
            <span>Join My Adventure!</span>
            <Anchor className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-blue-300 font-bold rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 min-w-[200px]"
          >
            <span>Legendary Projects</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      {/* Fixed scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 sm:space-y-3 z-10">
        <div className="text-center mb-2 sm:mb-4">
          <p className="text-orange-400 font-bold text-xs sm:text-sm jp-text animate-pulse">
            冒険が始まる
          </p>
          <p className="text-gray-400 text-xs italic">
            (The Adventure Begins)
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="group relative p-3 sm:p-4 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/40 hover:border-orange-400 transition-all duration-300 hover:scale-110 animate-float"
          aria-label="Scroll to adventures"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-600/10 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 relative z-10 animate-bounce" />
          
          <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-ping"></div>
        </button>
        
        <div className="text-xs text-gray-500 text-center animate-scroll-hint">
          Scroll for Epic Adventures
        </div>
      </div>
    </section>
  );
};

export default Hero;
