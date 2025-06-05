
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
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e] px-4 pt-20 pb-8">
      {/* Background elements positioned to avoid text overlap */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-4 w-6 h-6 opacity-10 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-3 h-0.5 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        <div className="absolute top-1/4 right-4 w-5 h-5 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-full h-full text-yellow-300" />
        </div>
        
        <div className="absolute top-1/2 right-6 w-6 h-6 opacity-8 animate-float" style={{ animationDelay: '4s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
        
        <div className="absolute top-3/4 left-8 w-6 h-6 opacity-12 animate-float" style={{ animationDelay: '1s' }}>
          <Anchor className="w-full h-full text-blue-500" />
        </div>
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto w-full space-y-6 md:space-y-8">
        {/* Enhanced Wanted Poster Card */}
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 blur-2xl rounded-full animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-[#F4E4BC] via-[#E8D5A3] to-[#D4C085] text-black p-4 md:p-6 rounded-xl border-4 border-amber-900 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 max-w-[280px] md:max-w-[350px] mx-auto hover:scale-105 group font-['Pirata_One']">
            {/* Profile Image */}
            <div className="mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full blur-md opacity-40 animate-pulse"></div>
                <img 
                  src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                  alt="Saikoushik Nalubola - Future Digital Pirate King"
                  className="relative w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto border-4 border-amber-900 shadow-xl object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -top-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                  <Crown className="text-yellow-400 w-3 h-3 md:w-4 md:h-4" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-5 h-5 md:w-7 md:h-7 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <Trophy className="text-yellow-300 w-2.5 h-2.5 md:w-3.5 md:h-3.5" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm md:text-lg font-black mb-2 tracking-wider text-red-800 font-['Pirata_One']">WANTED</div>
              <div className="text-base md:text-xl font-black leading-tight mb-2 bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent font-['Pirata_One']">
                SAIKOUSHIK NALUBOLA
              </div>
              <div className="text-xs md:text-sm font-bold text-blue-800 mb-2 font-['Pirata_One']">DIGITAL PIRATE CAPTAIN & AI ARCHITECT</div>
              <div className="text-sm md:text-lg font-black text-red-600 mb-2 font-['Pirata_One']">BOUNTY: ∞ BERRIES</div>
              <div className="text-xs font-semibold text-gray-700 font-['Pirata_One']">DEAD OR ALIVE</div>
              <div className="text-xs font-medium text-gray-600 mt-2 italic leading-relaxed font-['Pirata_One']">
                "A visionary captain sailing the digital seas, mastering AI technology to build revolutionary solutions that will change the world"
              </div>
              
              <div className="flex justify-center space-x-2 mt-2">
                <span className="px-2 py-1 bg-green-600 text-white text-xs font-bold rounded-full font-['Pirata_One']">ACTIVE</span>
                <span className="px-2 py-1 bg-orange-600 text-white text-xs font-bold rounded-full font-['Pirata_One']">LEGENDARY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-2xl md:text-5xl font-black mb-4 md:mb-6 leading-tight transform transition-all duration-1000 font-['Pirata_One'] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
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
        <div className={`mb-6 transform transition-all duration-1000 delay-500 font-['Pirata_One'] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <p className="text-lg md:text-xl font-bold text-orange-400 mb-3 min-h-[1.5rem] flex items-center justify-center font-['Pirata_One']">
              {typedText}
              <span className="animate-pulse ml-2 text-red-500">|</span>
            </p>
            
            {showKingQuote && (
              <div className="animate-fade-in">
                <p className="text-sm md:text-base text-gray-300 italic font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-glow font-['Pirata_One']">
                  "{kingQuote}"
                </p>
                <div className="mt-1 text-xs text-gray-500 font-['Pirata_One']">
                  - My Dream to Conquer All Digital Seas
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className={`mb-8 transform transition-all duration-1000 delay-700 font-['Pirata_One'] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-300 leading-relaxed mb-6 px-4 font-['Pirata_One']">
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, a passionate developer setting sail on the grandest adventure in the digital realm! 
              With unwavering determination and an adventurous spirit inspired by the greatest pirate tales, I'm navigating through 
              <span className="text-blue-400 font-bold"> uncharted AI territories</span> to build revolutionary solutions that'll transform the world!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-3 rounded-xl border border-red-500/30 hover:scale-105 transition-transform duration-300">
                <Zap className="w-6 h-6 text-red-400 mb-2 mx-auto" />
                <h3 className="font-bold text-red-400 mb-1 text-sm font-['Pirata_One']">Special Powers</h3>
                <p className="text-xs text-gray-300 font-['Pirata_One']">AI & Machine Learning Mastery</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <Star className="w-6 h-6 text-blue-400 mb-2 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-1 text-sm font-['Pirata_One']">Crew Leadership</h3>
                <p className="text-xs text-gray-300 font-['Pirata_One']">Full-Stack Development Fleet</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300">
                <Compass className="w-6 h-6 text-purple-400 mb-2 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-1 text-sm font-['Pirata_One']">Grand Navigator</h3>
                <p className="text-xs text-gray-300 font-['Pirata_One']">Entrepreneurial Adventures</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-1000 font-['Pirata_One'] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-orange-500/40 inline-flex items-center justify-center space-x-2 min-w-[180px] text-sm border-2 border-transparent font-['Pirata_One']"
          >
            <span>Join My Crew!</span>
            <Anchor className="w-4 h-4" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 border-2 border-blue-500 bg-blue-500/10 backdrop-blur-sm text-blue-300 font-bold rounded-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-110 inline-flex items-center justify-center space-x-2 min-w-[180px] text-sm shadow-lg shadow-blue-500/20 outline outline-2 outline-blue-400/50 font-['Pirata_One']"
          >
            <span>Legendary Projects</span>
            <Star className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 z-20">
        <div className="text-center bg-[#121212]/95 backdrop-blur-md rounded-xl px-4 py-3 border border-orange-500/40 shadow-xl max-w-xs">
          <p className="text-orange-400 font-bold text-sm animate-pulse mb-2 font-['Pirata_One']">
            冒険が始まる
          </p>
          <p className="text-gray-300 text-xs italic font-medium font-['Pirata_One']">
            The Adventure Begins
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="group relative p-4 rounded-full bg-gradient-to-br from-orange-500/40 to-red-500/40 border-2 border-orange-500/60 hover:border-orange-400 transition-all duration-300 hover:scale-110 animate-float backdrop-blur-md shadow-xl"
          aria-label="Scroll to adventures"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-600/30 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <ChevronDown className="w-6 h-6 text-orange-400 relative z-10 animate-bounce group-hover:text-orange-300 transition-colors duration-300" />
          
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </button>
        
        <div className="text-sm text-gray-300 text-center font-medium animate-pulse bg-[#121212]/80 backdrop-blur-md rounded-lg px-4 py-3 border border-gray-600/40 max-w-xs font-['Pirata_One']">
          Scroll for Epic Adventures
        </div>
      </div>
    </section>
  );
};

export default Hero;
