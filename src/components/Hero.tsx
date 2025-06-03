
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
    <section className="min-h-screen pt-20 pb-32 px-4 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e]">
      {/* Background elements positioned to avoid text overlap */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Reduced opacity and carefully positioned to avoid main content */}
        <div className="absolute top-32 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 opacity-10 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-3 h-0.5 sm:w-4 sm:h-0.5 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-40 right-4 sm:right-8 w-5 h-5 sm:w-7 sm:h-7 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
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
      <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
        {/* Enhanced Profile Card with Next Level Design */}
        <div className="mb-8 sm:mb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/40 to-yellow-600/40 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-black p-6 sm:p-10 rounded-3xl border-4 border-amber-800 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 max-w-xl mx-auto hover:scale-105 group">
            {/* Enhanced Profile Image with better styling */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                  alt="Saikoushik Nalubola - Future King of Code"
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto border-6 border-amber-800 shadow-2xl object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center border-3 border-white shadow-xl animate-bounce">
                  <Crown className="text-yellow-400 w-5 h-5" />
                </div>
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Trophy className="text-yellow-300 w-4 h-4" />
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="text-2xl sm:text-3xl font-black mb-4 font-mono tracking-wider text-red-800">WANTED</div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight mb-3 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                SAIKOUSHIK NALUBOLA
              </div>
              <div className="text-lg sm:text-xl font-bold text-blue-800 mb-3">AI ENGINEER & ENTREPRENEUR</div>
              <div className="text-2xl sm:text-3xl font-black text-red-600 mb-3">BOUNTY: ∞ BERRIES</div>
              <div className="text-base sm:text-lg font-semibold text-gray-700">DEAD OR ALIVE</div>
              <div className="text-sm sm:text-base font-medium text-gray-600 mt-4 italic leading-relaxed">
                "A visionary developer inspired by epic adventures, determined to revolutionize technology and change the world"
              </div>
              
              {/* Added status badges */}
              <div className="flex justify-center space-x-2 mt-4">
                <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">ACTIVE</span>
                <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">DANGEROUS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Title with better animations */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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

        {/* Enhanced Japanese Quote Section */}
        <div className={`mb-10 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 jp-text mb-6 min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center">
              {typedText}
              <span className="animate-pulse ml-2 text-red-500">|</span>
            </p>
            
            {showKingQuote && (
              <div className="animate-fade-in">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-glow">
                  "{kingQuote}"
                </p>
                <div className="mt-3 text-sm sm:text-base text-gray-500">
                  - The Developer Who Will Change Everything
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced description with better layout */}
        <div className={`mb-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-5xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-10 px-4">
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, an AI Engineer and Entrepreneur on an epic quest to revolutionize technology! 
              Inspired by the greatest adventure story ever told, I'm building 
              <span className="text-blue-400 font-bold"> legendary AI solutions</span> that'll change the world!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-2xl border border-red-500/30 hover:scale-105 transition-transform duration-300">
                <Zap className="w-10 h-10 text-red-400 mb-4 mx-auto" />
                <h3 className="font-bold text-red-400 mb-3 text-lg">AI Mastery</h3>
                <p className="text-sm text-gray-300">Machine Learning & Deep Learning expertise</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <Star className="w-10 h-10 text-blue-400 mb-4 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-3 text-lg">Full-Stack Power</h3>
                <p className="text-sm text-gray-300">End-to-end development solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30 hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <Compass className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-3 text-lg">Entrepreneurial Spirit</h3>
                <p className="text-sm text-gray-300">Building startups and innovative solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-orange-500/40 inline-flex items-center justify-center space-x-3 min-w-[240px] text-lg"
          >
            <span>Join My Adventure!</span>
            <Anchor className="w-6 h-6" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-5 border-3 border-blue-500 text-blue-300 font-bold rounded-xl hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 inline-flex items-center justify-center space-x-3 min-w-[240px] text-lg"
          >
            <span>Legendary Projects</span>
            <Star className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Perfectly Centered and Aligned Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4 z-20">
        <div className="text-center">
          <p className="text-orange-400 font-bold text-base jp-text animate-pulse mb-2">
            冒険が始まる
          </p>
          <p className="text-gray-400 text-sm italic">
            (The Adventure Begins)
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="group relative p-4 rounded-full bg-gradient-to-br from-orange-500/30 to-red-500/30 border-2 border-orange-500/50 hover:border-orange-400 transition-all duration-300 hover:scale-110 animate-float backdrop-blur-sm"
          aria-label="Scroll to adventures"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/20 to-yellow-600/20 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <ChevronDown className="w-8 h-8 text-orange-400 relative z-10 animate-bounce group-hover:text-orange-300 transition-colors duration-300" />
          
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </button>
        
        <div className="text-sm text-gray-500 text-center font-medium animate-pulse">
          Scroll for Epic Adventures
        </div>
      </div>
    </section>
  );
};

export default Hero;
