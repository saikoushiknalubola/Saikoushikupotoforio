
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
          // Show English quote after Japanese typing is complete
          setTimeout(() => {
            setShowKingQuote(true);
            // Trigger voice if audio element exists
            if (audioRef.current) {
              audioRef.current.play().catch(console.error);
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
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e]">
      {/* Background Elements - One Piece Themed */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Straw Hat symbols */}
        <div className="absolute top-20 left-10 w-16 h-16 opacity-20 animate-float">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <div className="w-8 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>
        
        {/* Treasure chest */}
        <div className="absolute bottom-40 right-20 w-12 h-12 opacity-30 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-br from-amber-600 to-yellow-700 rounded-lg flex items-center justify-center">
            <Star className="w-6 h-6 text-yellow-300" />
          </div>
        </div>
        
        {/* Jolly Roger skull */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 opacity-15 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <div className="text-2xl">☠️</div>
          </div>
        </div>
        
        {/* Compass */}
        <div className="absolute bottom-1/3 left-1/4 w-14 h-14 opacity-25 animate-float" style={{ animationDelay: '1s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
        
        {/* Anchor */}
        <div className="absolute top-1/2 left-10 w-16 h-16 opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          <Anchor className="w-full h-full text-blue-500" />
        </div>

        {/* Adventure sparkles */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hidden audio element for voice */}
      <audio ref={audioRef} preload="none">
        {/* This would work with ElevenLabs API - user needs to add API key */}
        <source src="/api/voice/luffy-king-quote.mp3" type="audio/mpeg" />
      </audio>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Wanted Poster Style Header */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 blur-3xl rounded-full"></div>
          <div className="relative bg-gradient-to-br from-amber-100 to-yellow-200 text-black p-6 rounded-xl border-4 border-amber-800 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="text-xl font-black mb-2 font-mono">WANTED</div>
            <div className="text-3xl md:text-4xl font-black">SAIKOUSHIK NALUBOLA</div>
            <div className="text-lg font-bold mt-2">BOUNTY: ∞ BERRIES</div>
            <div className="text-sm mt-1 font-semibold">DEAD OR ALIVE</div>
          </div>
        </div>

        {/* Main Title with Luffy's Energy */}
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-tight transform transition-all duration-1000 ${
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

        {/* Japanese Quote with Enhanced Animation */}
        <div className={`mb-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-400 jp-text mb-4 min-h-[3rem] flex items-center justify-center">
              {typedText}
              <span className="animate-pulse ml-1 text-red-500">|</span>
            </p>
            
            {/* English translation with voice trigger */}
            {showKingQuote && (
              <div className="animate-fade-in">
                <p className="text-lg md:text-xl text-gray-300 italic font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-pulse-glow">
                  "{kingQuote}"
                </p>
                <div className="mt-2 text-sm text-gray-500">
                  - The Man Who Will Revolutionize Tech
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Luffy-Style Description */}
        <div className={`mb-12 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Ahoy! I'm <span className="text-orange-400 font-bold">Saikoushik</span>, and I'm gonna be the greatest developer who ever lived! 
              Just like how Luffy believes in his dream to become Pirate King, I believe in creating 
              <span className="text-blue-400 font-bold"> revolutionary tech solutions</span> that'll change the world!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-4 rounded-xl border border-red-500/30">
                <Zap className="w-8 h-8 text-red-400 mb-2 mx-auto" />
                <h3 className="font-bold text-red-400 mb-2">Gear 2nd: AI Power</h3>
                <p className="text-sm text-gray-300">Accelerating innovation with Machine Learning & AI</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-500/30">
                <Star className="w-8 h-8 text-blue-400 mb-2 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-2">Gear 3rd: Full-Stack</h3>
                <p className="text-sm text-gray-300">Giant solutions from frontend to backend</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-500/30">
                <Compass className="w-8 h-8 text-purple-400 mb-2 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-2">Gear 4th: Innovation</h3>
                <p className="text-sm text-gray-300">Bouncing between impossibilities to make them possible</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/30 inline-flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <span>Join My Adventure!</span>
            <Anchor className="w-5 h-5" />
          </a>
          
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-blue-500 text-blue-300 font-bold rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <span>Legendary Projects</span>
            <Star className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Fixed Adventures Scroll Indicator */}
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
          {/* Treasure map styling */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-600/10 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          
          <ChevronDown className="w-6 h-6 text-orange-400 relative z-10 animate-bounce" />
          
          {/* Sparkle effect */}
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
