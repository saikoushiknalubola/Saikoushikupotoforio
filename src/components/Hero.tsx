
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
      {/* Background elements positioned to avoid text overlap */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Reduced opacity and carefully positioned */}
        <div className="absolute top-32 left-2 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 opacity-5 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-4 h-0.5 sm:w-6 sm:h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-32 right-2 sm:right-6 w-6 h-6 sm:w-10 sm:h-10 opacity-8 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-full h-full text-yellow-300" />
        </div>
        
        <div className="absolute top-1/3 right-1 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 opacity-5 animate-float" style={{ animationDelay: '4s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
        
        <div className="absolute bottom-1/3 left-2 sm:left-6 w-8 h-8 sm:w-12 sm:h-12 opacity-8 animate-float" style={{ animationDelay: '1s' }}>
          <Anchor className="w-full h-full text-blue-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
        {/* Enhanced Profile Card */}
        <div className="mb-8 sm:mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 blur-3xl rounded-full"></div>
          <div className="relative bg-gradient-to-br from-amber-50 to-yellow-100 text-black p-6 sm:p-8 rounded-2xl border-4 border-amber-800 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500 max-w-lg mx-auto">
            {/* Profile Image with better styling */}
            <div className="mb-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                  alt="Saikoushik Nalubola"
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto border-4 border-amber-800 shadow-xl object-cover"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <span className="text-white text-xs font-bold">👑</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-xl sm:text-2xl font-black mb-3 font-mono tracking-wider">WANTED</div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-2">SAIKOUSHIK NALUBOLA</div>
              <div className="text-base sm:text-lg font-bold text-blue-800 mb-2">AI ENGINEER & ENTREPRENEUR</div>
              <div className="text-xl sm:text-2xl font-black text-red-600 mb-2">BOUNTY: ∞ BERRIES</div>
              <div className="text-sm sm:text-base font-semibold text-gray-700">DEAD OR ALIVE</div>
              <div className="text-xs sm:text-sm font-medium text-gray-600 mt-3 italic">
                "A man inspired by dreams and determined to change the world"
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight transform transition-all duration-1000 ${
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

        {/* Japanese Quote */}
        <div className={`mb-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-400 jp-text mb-4 min-h-[2rem] sm:min-h-[3rem] flex items-center justify-center">
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
        <div className={`mb-12 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-6 px-2">
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, an AI Engineer and Entrepreneur on an epic quest to revolutionize technology! 
              Inspired by the greatest pirate adventure ever told, I'm building 
              <span className="text-blue-400 font-bold"> legendary AI solutions</span> that'll change the world!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-4 rounded-xl border border-red-500/30">
                <Zap className="w-8 h-8 text-red-400 mb-3 mx-auto" />
                <h3 className="font-bold text-red-400 mb-2 text-sm sm:text-base">AI Mastery</h3>
                <p className="text-xs sm:text-sm text-gray-300">Machine Learning & Deep Learning expertise</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-500/30">
                <Star className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-2 text-sm sm:text-base">Full-Stack Power</h3>
                <p className="text-xs sm:text-sm text-gray-300">End-to-end development solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-500/30 sm:col-span-2 lg:col-span-1">
                <Compass className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-2 text-sm sm:text-base">Entrepreneurial Spirit</h3>
                <p className="text-xs sm:text-sm text-gray-300">Building startups and innovative solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/30 inline-flex items-center justify-center space-x-2 min-w-[200px]"
          >
            <span>Join My Adventure!</span>
            <Anchor className="w-5 h-5" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 border-2 border-blue-500 text-blue-300 font-bold rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 min-w-[200px]"
          >
            <span>Legendary Projects</span>
            <Star className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Perfectly Centered Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 z-10">
        <div className="text-center mb-4">
          <p className="text-orange-400 font-bold text-sm jp-text animate-pulse">
            冒険が始まる
          </p>
          <p className="text-gray-400 text-xs italic">
            (The Adventure Begins)
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="group relative p-4 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500/40 hover:border-orange-400 transition-all duration-300 hover:scale-110 animate-float"
          aria-label="Scroll to adventures"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-600/10 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <ChevronDown className="w-6 h-6 text-orange-400 relative z-10 animate-bounce" />
          
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
        </button>
        
        <div className="text-xs text-gray-500 text-center animate-scroll-hint">
          Scroll for Epic Adventures
        </div>
      </div>
    </section>
  );
};

export default Hero;
