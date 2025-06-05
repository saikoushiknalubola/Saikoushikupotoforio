
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Anchor, Compass, Star, Zap, Crown, Trophy } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showKingQuote, setShowKingQuote] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const fullText = "海賊王になる男だ！";
  const kingQuote = "I'm gonna be King of Pirates!";

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
    <section className="min-h-[180vh] sm:min-h-[160vh] md:min-h-[140vh] lg:min-h-[130vh] xl:min-h-[120vh] pt-16 sm:pt-20 md:pt-24 pb-24 sm:pb-32 md:pb-40 lg:pb-48 xl:pb-56 px-4 flex flex-col justify-between items-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e]">
      {/* Background elements positioned to avoid text overlap */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-60 sm:top-40 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 opacity-10 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-3 h-0.5 sm:w-4 sm:h-0.5 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-60 sm:bottom-40 right-4 sm:right-8 w-5 h-5 sm:w-7 sm:h-7 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-full h-full text-yellow-300" />
        </div>
        
        <div className="absolute top-1/2 right-2 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 opacity-8 animate-float" style={{ animationDelay: '4s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
        
        <div className="absolute bottom-1/2 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 opacity-12 animate-float" style={{ animationDelay: '1s' }}>
          <Anchor className="w-full h-full text-blue-500" />
        </div>
      </div>

      {/* Main Content - Centered with proper spacing */}
      <div className="flex-1 flex flex-col justify-center items-center relative z-10 text-center max-w-4xl mx-auto w-full space-y-4 sm:space-y-6 md:space-y-8 pt-8 sm:pt-12 md:pt-16">
        {/* Enhanced Wanted Poster Card */}
        <div className="mb-4 sm:mb-6 md:mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 blur-2xl rounded-full animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-[#F4E4BC] via-[#E8D5A3] to-[#D4C085] text-black p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl border-4 border-amber-900 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 max-w-[260px] sm:max-w-[300px] md:max-w-[350px] mx-auto hover:scale-105 group" style={{ fontFamily: 'Pirata One, cursive' }}>
            {/* Profile Image */}
            <div className="mb-2 sm:mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full blur-md opacity-40 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                  alt="Saikoushik Nalubola - Future Digital Pirate King"
                  className="relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full mx-auto border-4 border-amber-900 shadow-xl object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                  <Crown className="text-yellow-400 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Trophy className="text-yellow-300 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5" />
                </div>
                <div className="absolute -top-2 -left-2 w-5 h-5 sm:w-6 sm:h-6 bg-orange-500 rounded-full animate-ping opacity-30"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <div className="text-xs sm:text-sm md:text-base lg:text-lg font-black mb-1 sm:mb-2 tracking-wider text-red-800" style={{ fontFamily: 'Pirata One, cursive' }}>WANTED</div>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl font-black leading-tight mb-1 sm:mb-2 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent" style={{ fontFamily: 'Pirata One, cursive' }}>
                SAIKOUSHIK NALUBOLA
              </div>
              <div className="text-xs sm:text-sm font-bold text-blue-800 mb-1 sm:mb-2" style={{ fontFamily: 'Pirata One, cursive' }}>DIGITAL PIRATE CAPTAIN & AI ARCHITECT</div>
              <div className="text-sm sm:text-base md:text-lg font-black text-red-600 mb-1 sm:mb-2" style={{ fontFamily: 'Pirata One, cursive' }}>BOUNTY: ∞ BERRIES</div>
              <div className="text-xs font-semibold text-gray-700" style={{ fontFamily: 'Pirata One, cursive' }}>DEAD OR ALIVE</div>
              <div className="text-xs font-medium text-gray-600 mt-1 sm:mt-2 italic leading-relaxed" style={{ fontFamily: 'Pirata One, cursive' }}>
                "A visionary captain sailing the digital seas, mastering AI technology to build revolutionary solutions that will change the world"
              </div>
              
              <div className="flex justify-center space-x-1 sm:space-x-2 mt-1 sm:mt-2">
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-green-600 text-white text-xs font-bold rounded-full" style={{ fontFamily: 'Pirata One, cursive' }}>ACTIVE</span>
                <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-orange-600 text-white text-xs font-bold rounded-full" style={{ fontFamily: 'Pirata One, cursive' }}>LEGENDARY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black mb-3 sm:mb-4 md:mb-6 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ fontFamily: 'Pirata One, cursive' }}>
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse-glow block">
            Future Digital
          </span>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block">
            Pirate King
          </span>
          <span className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent block">
            & Tech Innovator
          </span>
        </h1>

        {/* Japanese Quote Section */}
        <div className={`mb-4 sm:mb-6 md:mb-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-orange-400 jp-text mb-2 sm:mb-3 min-h-[1rem] sm:min-h-[1.2rem] md:min-h-[1.5rem] flex items-center justify-center" style={{ fontFamily: 'Pirata One, cursive' }}>
              {typedText}
              <span className="animate-pulse ml-2 text-red-500">|</span>
            </p>
            
            {showKingQuote && (
              <div className="animate-fade-in">
                <p className="text-xs sm:text-sm md:text-base text-gray-300 italic font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-glow" style={{ fontFamily: 'Pirata One, cursive' }}>
                  "{kingQuote}"
                </p>
                <div className="mt-1 text-xs text-gray-500" style={{ fontFamily: 'Pirata One, cursive' }}>
                  - My Dream to Conquer All Digital Seas
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className={`mb-6 sm:mb-8 md:mb-10 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-3 sm:mb-4 md:mb-6 px-2 sm:px-4" style={{ fontFamily: 'Pirata One, cursive' }}>
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, a passionate developer setting sail on the grandest adventure in the digital realm! 
              With unwavering determination and an adventurous spirit inspired by the greatest pirate tales, I'm navigating through 
              <span className="text-blue-400 font-bold"> uncharted AI territories</span> to build revolutionary solutions that'll transform the world!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-2 sm:p-3 rounded-xl border border-red-500/30 hover:scale-105 transition-transform duration-300">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mb-1 sm:mb-2 mx-auto" />
                <h3 className="font-bold text-red-400 mb-1 text-xs sm:text-sm" style={{ fontFamily: 'Pirata One, cursive' }}>Special Powers</h3>
                <p className="text-xs text-gray-300" style={{ fontFamily: 'Pirata One, cursive' }}>AI & Machine Learning Mastery</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-2 sm:p-3 rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-1 sm:mb-2 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-1 text-xs sm:text-sm" style={{ fontFamily: 'Pirata One, cursive' }}>Crew Leadership</h3>
                <p className="text-xs text-gray-300" style={{ fontFamily: 'Pirata One, cursive' }}>Full-Stack Development Fleet</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-2 sm:p-3 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mb-1 sm:mb-2 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-1 text-xs sm:text-sm" style={{ fontFamily: 'Pirata One, cursive' }}>Grand Navigator</h3>
                <p className="text-xs text-gray-300" style={{ fontFamily: 'Pirata One, cursive' }}>Entrepreneurial Adventures</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-orange-500/40 inline-flex items-center justify-center space-x-2 min-w-[160px] sm:min-w-[180px] text-xs sm:text-sm border-2 border-transparent" style={{ fontFamily: 'Pirata One, cursive' }}
          >
            <span>Join My Crew!</span>
            <Anchor className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-500 bg-blue-500/10 backdrop-blur-sm text-blue-300 font-bold rounded-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-110 inline-flex items-center justify-center space-x-2 min-w-[160px] sm:min-w-[180px] text-xs sm:text-sm shadow-lg shadow-blue-500/20 outline outline-2 outline-blue-400/50" style={{ fontFamily: 'Pirata One, cursive' }}
          >
            <span>Legendary Projects</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at bottom with proper spacing */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 xl:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 sm:space-y-3 z-20">
        <div className="text-center bg-[#121212]/95 backdrop-blur-md rounded-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border border-orange-500/40 shadow-xl max-w-xs">
          <p className="text-orange-400 font-bold text-xs sm:text-sm md:text-base jp-text animate-pulse mb-1 sm:mb-2" style={{ fontFamily: 'Pirata One, cursive' }}>
            冒険が始まる
          </p>
          <p className="text-gray-300 text-xs sm:text-sm italic font-medium" style={{ fontFamily: 'Pirata One, cursive' }}>
            The Adventure Begins
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="group relative p-3 sm:p-4 rounded-full bg-gradient-to-br from-orange-500/40 to-red-500/40 border-2 border-orange-500/60 hover:border-orange-400 transition-all duration-300 hover:scale-110 animate-float backdrop-blur-md shadow-xl"
          aria-label="Scroll to adventures"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-600/30 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 relative z-10 animate-bounce group-hover:text-orange-300 transition-colors duration-300" />
          
          <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </button>
        
        <div className="text-xs sm:text-sm text-gray-300 text-center font-medium animate-pulse bg-[#121212]/80 backdrop-blur-md rounded-lg px-3 sm:px-4 py-2 sm:py-3 border border-gray-600/40 max-w-xs" style={{ fontFamily: 'Pirata One, cursive' }}>
          Scroll for Epic Adventures
        </div>
      </div>
    </section>
  );
};

export default Hero;
