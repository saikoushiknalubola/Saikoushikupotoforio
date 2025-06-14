
import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Anchor, ShipWheel } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showKingQuote, setShowKingQuote] = useState(false);
  const fullText = "海賊王になる男だ！";
  const kingQuote = "The Next Pirate King Sails the Digital Seas!";

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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-between pt-20 px-2 pb-4 bg-gradient-to-br from-[#1e0e03] via-[#1a1a2e] to-[#082032] overflow-hidden">
      {/* --- Pirate Ship Deck Layers --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Deck wood floor */}
        <div className="absolute bottom-0 w-full h-[22vw] max-h-44 left-0 bg-[#7d5a37] rounded-t-[18vw] shadow-inner opacity-80"></div>
        {/* Jolly Roger flags (left) */}
        <img
          src="/lovable-uploads/443ab3d5-1005-4024-981c-3899edd41e47.png"
          alt="Pirate Flag"
          className="absolute left-2 top-14 w-20 h-20 xs:w-16 xs:h-16 sm:w-24 sm:h-24 animate-float opacity-90 select-none"
          style={{ zIndex: 2 }}
        />
        {/* Ropes */}
        <div className="absolute left-0 right-0 top-8 flex flex-row items-center justify-between z-10 px-6 sm:px-12">
          <div className="w-12 h-2 rounded bg-gradient-to-l from-yellow-300 to-yellow-700 opacity-70 rotate-[-18deg]" />
          <ShipWheel size={28} className="text-yellow-500 opacity-80 animate-spin-slow" />
          <div className="w-12 h-2 rounded bg-gradient-to-r from-yellow-700 to-yellow-300 opacity-70 rotate-[15deg]" />
        </div>
        {/* Barrel */}
        <img
          src="/lovable-uploads/dc1b72e4-9c02-4089-8f52-06ad8e360e06.png"
          alt="Deck Barrel"
          className="absolute bottom-5 left-3 w-14 h-14 xs:w-12 xs:h-12 sm:w-16 sm:h-16 rounded-md shadow-md opacity-80"
        />
        {/* Treasure Chest */}
        <img
          src="/lovable-uploads/bcef14db-23b2-4b09-b375-25d457ff5f48.png"
          alt="Treasure Chest"
          className="absolute bottom-6 right-2 w-12 h-12 sm:w-16 sm:h-16 opacity-80"
        />
        {/* Animated clouds */}
        <div className="absolute right-10 top-[15%] w-28 h-10 bg-gradient-to-r from-gray-50/70 to-gray-100/10 rounded-full opacity-40 animate-float"></div>
        <div className="absolute left-8 top-20 w-16 h-7 bg-gradient-to-l from-gray-50/70 to-gray-100/0 rounded-full opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
      </div>
      
      {/* --- Hero Main Card --- */}
      <div className="relative z-10 mt-2 mx-auto flex flex-col justify-center items-center w-full max-w-lg">
        {/* Wanted Poster Frame */}
        <div className="w-full bg-gradient-to-br from-[#e4c086] via-[#fbecd5] to-[#d5ae66] p-3 xs:p-2 sm:p-4 md:p-6 rounded-3xl border-4 border-[#86582a] shadow-xl max-w-xs mx-auto flex flex-col items-center space-y-2"
          style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
        >
          {/* Profile Image */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-1">
            <img
              src="/lovable-uploads/919486d7-b403-4ad1-acd0-0a82c618aeaf.png"
              className="w-full h-full object-cover rounded-full border-4 border-yellow-700 shadow-lg"
              alt="Pirate King Avatar"
            />
            {/* Mini anchor on crown */}
            <div className="absolute -bottom-2 right-2 w-7 h-7 flex items-center justify-center rounded-full border-2 border-white bg-yellow-400 shadow-lg animate-bounce">
              <Anchor className="text-yellow-800 w-4 h-4" />
            </div>
          </div>
          <div className="text-xl xs:text-xl sm:text-2xl font-bold tracking-wider text-[#c41818] drop-shadow" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>WANTED</div>
          <div className="text-lg sm:text-xl font-black bg-gradient-to-r from-orange-700 to-yellow-800 bg-clip-text text-transparent">SAIKOUSHIK NALUBOLA</div>
          <div className="text-xs sm:text-sm font-semibold text-blue-800">DIGITAL PIRATE KING & AI CAPTAIN</div>
          <div className="text-base xs:text-lg sm:text-xl font-black text-orange-700">BOUNTY: ∞ BERRIES</div>
        </div>

        {/* Slogan & Typing Animation */}
        <div className="mt-4 sm:mt-7 text-center w-full">
          <p className="jp-text text-lg sm:text-xl font-semibold text-orange-400 min-h-[2rem] inline-block" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            {typedText}<span className="text-red-500 animate-pulse">|</span>
          </p>
          {showKingQuote && (
            <div className="mt-1 text-xs sm:text-base text-gray-300 font-bold animate-fade-in" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              "{kingQuote}"
            </div>
          )}
        </div>

        {/* Pirate Persona Desc */}
        <div className="mt-1 sm:mt-2 mb-1 w-full max-w-md mx-auto px-2 sm:px-3">
          <p className="text-xs xs:text-sm sm:text-base text-gray-100 font-medium leading-normal" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            Ahoy! I’m <span className="text-orange-400 font-bold">Saikoushik</span>, sailing uncharted AI oceans, recruiting bold crewmates, and building legendary digital ships! <br />
            <span className="text-blue-300 font-bold">Join my crew</span> to steer innovation and explore the New World of technology!
          </p>
        </div>

        {/* Pirate Crew Badge Row */}
        <div className="mt-1 flex flex-row justify-center items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-green-600 text-white rounded-full font-bold text-xs sm:text-sm">ACTIVE</span>
          <span className="px-3 py-1 bg-orange-500 text-white rounded-full font-bold text-xs sm:text-sm">ONE PIECE HUNTER</span>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center mt-2 mb-4 w-full">
          <a
            href="#about"
            className="anime-button-primary flex-1 flex items-center justify-center gap-2"
          >
            <span>Join My Crew</span>
            <Anchor className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="anime-button-secondary flex-1 flex items-center justify-center gap-2"
          >
            <span>Treasures Built</span>
            <ShipWheel className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* --- Scroll Indicator (Pirate style) --- */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center w-full max-w-xs">
        <div className="bg-[#121212]/95 backdrop-blur-md rounded-xl px-4 py-2 border border-orange-500/30 shadow text-center mb-1">
          <p className="jp-text text-orange-400 font-bold text-sm">冒険が始まる</p>
          <p className="text-gray-300 text-xs italic font-medium">Set Sail for Adventure</p>
        </div>
        <button
          onClick={scrollToAbout}
          className="p-4 bg-gradient-to-br from-orange-500/40 to-red-500/40 border-2 border-orange-500/60 hover:border-orange-400 rounded-full animate-float transition-all duration-300 shadow-lg"
          aria-label="Scroll to adventures"
        >
          <ChevronDown className="w-7 h-7 text-orange-400 animate-bounce" />
        </button>
        <div className="text-xs text-gray-300 mt-1">Scroll Down, Nakama!</div>
      </div>
    </section>
  );
};

export default Hero;

