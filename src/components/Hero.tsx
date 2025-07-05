
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 80;
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen py-16 sm:py-20 md:py-24 px-4 flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e]">
      {/* Background elements positioned to avoid text overlap */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-80 sm:top-60 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 opacity-10 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-3 h-0.5 sm:w-4 sm:h-0.5 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute bottom-96 sm:bottom-80 right-4 sm:right-8 w-5 h-5 sm:w-7 sm:h-7 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-full h-full text-yellow-300" />
        </div>
        
        <div className="absolute top-1/2 right-2 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 opacity-8 animate-float" style={{ animationDelay: '4s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
        
        <div className="absolute bottom-1/2 left-4 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 opacity-12 animate-float" style={{ animationDelay: '1s' }}>
          <Anchor className="w-full h-full text-blue-500" />
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col justify-center items-center relative z-10 text-center max-w-4xl mx-auto w-full space-y-4 sm:space-y-6 md:space-y-8">
        {/* Pirate Ship Hero Image */}
        <div className="mb-6 sm:mb-8 md:mb-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-[#1e3a8a]/20 via-[#1e40af]/30 to-[#1d4ed8]/20 backdrop-blur-sm p-2 sm:p-3 md:p-4 rounded-2xl border-4 border-blue-400/50 shadow-2xl transform hover:scale-105 transition-all duration-700 max-w-[320px] sm:max-w-[380px] md:max-w-[440px] mx-auto group overflow-hidden">
            {/* Pirate Ship Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent rounded-xl"></div>
              <img 
                src="/lovable-uploads/0d175936-db19-4104-95c7-10447c6999ed.png" 
                alt="Digital Pirate Captain - Saikoushik Nalubola"
                className="w-full h-auto rounded-xl shadow-2xl object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Floating Pirate Elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                <Crown className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-pulse">
                <Anchor className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
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
        <div className={`mb-6 sm:mb-8 md:mb-10 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-orange-400 jp-text mb-2 sm:mb-3 md:mb-4 min-h-[1.2rem] sm:min-h-[1.5rem] md:min-h-[2rem] lg:min-h-[2.5rem] flex items-center justify-center" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              {typedText}
              <span className="animate-pulse ml-2 text-red-500">|</span>
            </p>
            
            {showKingQuote && (
              <div className="animate-fade-in">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 italic font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-glow" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                  "{kingQuote}"
                </p>
                <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                  - My Dream to Conquer All Digital Seas
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className={`mb-8 sm:mb-10 md:mb-12 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-4 sm:mb-6 md:mb-8 px-4" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, a passionate developer setting sail on the grandest adventure in the digital realm! 
              With unwavering determination and an adventurous spirit inspired by the greatest pirate tales, I'm navigating through 
              <span className="text-blue-400 font-bold"> uncharted AI territories</span> to build revolutionary solutions that'll transform the world!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 md:mt-8">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-3 sm:p-4 rounded-xl border border-red-500/30 hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mb-2 sm:mb-3 mx-auto" />
                <h3 className="font-bold text-red-400 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Special Powers</h3>
                <p className="text-xs sm:text-sm text-gray-300" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>AI & Machine Learning Mastery</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 sm:p-4 rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mb-2 sm:mb-3 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Crew Leadership</h3>
                <p className="text-xs sm:text-sm text-gray-300" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Full-Stack Development Fleet</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 sm:p-4 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300 sm:col-span-2 lg:col-span-1">
                <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Grand Navigator</h3>
                <p className="text-xs sm:text-sm text-gray-300" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>Entrepreneurial Adventures</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="/about"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-orange-500/40 inline-flex items-center justify-center space-x-2 sm:space-x-3 min-w-[180px] sm:min-w-[200px] text-xs sm:text-sm md:text-base border-2 border-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
          >
            <span>Join My Crew!</span>
            <Anchor className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
          
          <a
            href="/projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 bg-blue-500/10 backdrop-blur-sm text-blue-300 font-bold rounded-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-110 inline-flex items-center justify-center space-x-2 sm:space-x-3 min-w-[180px] sm:min-w-[200px] text-xs sm:text-sm md:text-base shadow-lg shadow-blue-500/20 outline outline-2 outline-blue-400/50" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
          >
            <span>Legendary Projects</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Positioned at the bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4 z-20">
        <div className="text-center bg-[#121212]/95 backdrop-blur-md rounded-xl px-6 sm:px-8 py-4 sm:py-6 border border-orange-500/40 shadow-xl max-w-sm">
          <p className="text-orange-400 font-bold text-sm sm:text-base md:text-lg jp-text animate-pulse mb-2 sm:mb-3" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            冒険が始まる
          </p>
          <p className="text-gray-300 text-xs sm:text-sm md:text-base italic font-medium" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            The Adventure Begins
          </p>
        </div>
        
        <button
          onClick={scrollToContact}
          className="group relative p-4 sm:p-5 rounded-full bg-gradient-to-br from-orange-500/40 to-red-500/40 border-2 border-orange-500/60 hover:border-orange-400 transition-all duration-300 hover:scale-110 animate-float backdrop-blur-md shadow-xl"
          aria-label="Scroll to contact"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-600/30 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-orange-400 relative z-10 animate-bounce group-hover:text-orange-300 transition-colors duration-300" />
          
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-yellow-400 rounded-full animate-ping"></div>
        </button>
        
        <div className="text-xs sm:text-sm md:text-base text-gray-300 text-center font-medium animate-pulse bg-[#121212]/80 backdrop-blur-md rounded-lg px-4 sm:px-6 py-3 sm:py-4 border border-gray-600/40 max-w-sm" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
          Scroll for Epic Adventures
        </div>
      </div>
    </section>
  );
};

export default Hero;
