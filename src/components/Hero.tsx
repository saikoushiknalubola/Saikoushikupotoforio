
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
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#0a1929] via-[#1a2332] to-[#2a3441] px-4 py-8">
      {/* Ocean Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400/10 via-blue-500/20 to-blue-900/30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 w-6 h-6 opacity-20 animate-float">
          <Anchor className="w-full h-full text-orange-400" />
        </div>
        <div className="absolute top-40 right-8 w-5 h-5 opacity-15 animate-float" style={{ animationDelay: '2s' }}>
          <Star className="w-full h-full text-yellow-300" />
        </div>
        <div className="absolute bottom-40 left-8 w-6 h-6 opacity-12 animate-float" style={{ animationDelay: '1s' }}>
          <Compass className="w-full h-full text-blue-400" />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
        
        {/* Profile Image Section */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative">
            <img 
              src="/lovable-uploads/46516734-5f93-48db-b7f2-53f2ffa7622e.png" 
              alt="Saikoushik Nalubola - AI Engineer & Digital Captain"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto rounded-2xl border-4 border-orange-500/50 shadow-2xl object-cover hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-blue-400/20 to-orange-400/20"
            />
            {/* Pirate Flag Corner */}
            <div className="absolute -top-2 -right-2 w-12 h-12 md:w-16 md:h-16">
              <div className="w-full h-full bg-black rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div className="text-white text-xl md:text-2xl">⚡</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className={`text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 leading-tight transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent block">
            Saikoushik Nalubola
          </span>
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent block text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2">
            AI Engineer & Technology Entrepreneur
          </span>
        </h1>

        {/* Professional Subtitle */}
        <div className={`mb-6 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-sm md:text-lg text-gray-300 font-medium">
            Navigating the Future of Technology with Innovation & Excellence
          </p>
        </div>

        {/* Professional Description */}
        <div className={`mb-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
              Passionate AI Engineer and Entrepreneur with expertise in machine learning, full-stack development, 
              and innovative business solutions. Dedicated to building cutting-edge technology that transforms industries 
              and creates meaningful impact in the digital world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4 rounded-xl border border-orange-500/30 hover:scale-105 transition-transform duration-300">
                <Zap className="w-8 h-8 text-orange-400 mb-3 mx-auto" />
                <h3 className="font-bold text-orange-400 mb-2 text-sm md:text-base">AI & ML Expertise</h3>
                <p className="text-xs md:text-sm text-gray-300">Advanced Machine Learning & AI Solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-xl border border-blue-500/30 hover:scale-105 transition-transform duration-300">
                <Star className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                <h3 className="font-bold text-blue-400 mb-2 text-sm md:text-base">Full-Stack Development</h3>
                <p className="text-xs md:text-sm text-gray-300">Complete Web & Mobile Application Solutions</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300">
                <Compass className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <h3 className="font-bold text-purple-400 mb-2 text-sm md:text-base">Business Innovation</h3>
                <p className="text-xs md:text-sm text-gray-300">Strategic Technology & Entrepreneurship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <a
            href="#about"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2 min-w-[200px] text-sm"
          >
            <span>Explore My Work</span>
            <Star className="w-4 h-4" />
          </a>
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 border-2 border-blue-500 bg-blue-500/10 backdrop-blur-sm text-blue-300 font-bold rounded-xl hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center space-x-2 min-w-[200px] text-sm shadow-lg"
          >
            <span>View Projects</span>
            <Compass className="w-4 h-4" />
          </a>
          
          <a
            href="https://drive.google.com/file/d/1RrelmEaZ19UmSGIjJVciQyt74TIxTy03/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 shadow-xl inline-flex items-center justify-center space-x-2 min-w-[200px] text-sm"
          >
            <span>Download Resume</span>
            <Anchor className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator - Mobile Optimized */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 md:space-y-4 z-20">
        <div className="text-center bg-[#1a2332]/95 backdrop-blur-md rounded-xl px-4 py-3 md:px-6 md:py-4 border border-orange-500/40 shadow-xl">
          <p className="text-orange-400 font-bold text-sm md:text-base animate-pulse mb-1">
            冒険が始まる
          </p>
          <p className="text-gray-300 text-xs md:text-sm italic font-medium">
            The Adventure Begins
          </p>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="group relative p-3 md:p-4 rounded-full bg-gradient-to-br from-orange-500/40 to-red-500/40 border-2 border-orange-500/60 hover:border-orange-400 transition-all duration-300 hover:scale-105 animate-float backdrop-blur-md shadow-xl"
          aria-label="Scroll to next section"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-yellow-600/30 blur-lg group-hover:blur-xl transition-all duration-300"></div>
          <ChevronDown className="w-6 h-6 md:w-7 md:h-7 text-orange-400 relative z-10 animate-bounce group-hover:text-orange-300 transition-colors duration-300" />
          <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </button>
        
        <div className="text-xs md:text-sm text-gray-300 text-center font-medium animate-pulse bg-[#1a2332]/80 backdrop-blur-md rounded-lg px-3 py-2 md:px-4 md:py-3 border border-gray-600/40">
          Scroll for More
        </div>
      </div>
    </section>
  );
};

export default Hero;
