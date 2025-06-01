
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Instagram, Mail, Globe, ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [nameTyped, setNameTyped] = useState('');
  const [quoteTyped, setQuoteTyped] = useState('');
  const [showEnglish, setShowEnglish] = useState(false);
  const fullName = 'Saikoushik Nalubola';
  const japaneseQuote = '海賊王に俺はなる！';
  const englishQuote = '"I\'m gonna be King of the Pirates!"';
  
  useEffect(() => {
    setIsVisible(true);
    
    // Name typing animation
    let index = 0;
    const nameTimer = setInterval(() => {
      if (index <= fullName.length) {
        setNameTyped(fullName.slice(0, index));
        index++;
      } else {
        clearInterval(nameTimer);
        // Start quote animation after name is complete
        setTimeout(() => {
          let quoteIndex = 0;
          const quoteTimer = setInterval(() => {
            if (quoteIndex <= japaneseQuote.length) {
              setQuoteTyped(japaneseQuote.slice(0, quoteIndex));
              quoteIndex++;
            } else {
              clearInterval(quoteTimer);
              // Show English translation after 2 seconds
              setTimeout(() => setShowEnglish(true), 2000);
            }
          }, 100);
        }, 500);
      }
    }, 80);
    
    return () => clearInterval(nameTimer);
  }, []);

  const socialLinks = [
    { href: "https://github.com/saikoushiknalubola", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/saikoushiknalubola", icon: Linkedin, label: "LinkedIn" },
    { href: "https://x.com/saikoushik_42", icon: Twitter, label: "Twitter" },
    { href: "https://www.instagram.com/saikoushiknalubola/", icon: Instagram, label: "Instagram" },
    { href: "mailto:saikoushik42@gmail.com", icon: Mail, label: "Email" },
    { href: "https://saikoushiknalubola.netlify.app/", icon: Globe, label: "Portfolio" }
  ];

  const scrollToJoinCrew = () => {
    const onePieceSection = document.querySelector('#onepiece-section');
    if (onePieceSection) {
      const formElement = onePieceSection.querySelector('#join-crew-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-20 md:pb-32 overflow-hidden bg-[#121212]">
      {/* Enhanced Background with One Piece inspired elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Treasure map inspired grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,215,0,0.4) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Floating elements inspired by One Piece */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-orange-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-red-400/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Enhanced gradient orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-orange-500/15 to-red-500/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        <div className="text-center space-y-6">
          {/* Profile Image with Straw Hat inspired styling */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            <div className="relative inline-block">
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto ring-4 ring-orange-500/40 ring-offset-4 ring-offset-[#121212] shadow-2xl shadow-orange-500/20">
                <AvatarImage 
                  src="/lovable-uploads/1466490d-7b5c-4b9c-9b5e-584004601ca5.png" 
                  alt="Saikoushik Nalubola" 
                  className="object-cover"
                />
                <AvatarFallback className="text-xl bg-gradient-to-br from-orange-600 to-red-700 text-white font-bold">
                  SN
                </AvatarFallback>
              </Avatar>
              
              {/* Luffy's hat inspired indicator */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full border-3 border-[#121212] flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Role Tags with One Piece crew inspired styling */}
          <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="px-4 py-2 text-sm font-bold bg-orange-500/20 text-orange-300 rounded-full border-2 border-orange-500/40 shadow-lg">
              Captain
            </span>
            <span className="px-4 py-2 text-sm font-bold bg-red-500/20 text-red-300 rounded-full border-2 border-red-500/40 shadow-lg">
              AI Pirate
            </span>
            <span className="px-4 py-2 text-sm font-bold bg-blue-500/20 text-blue-300 rounded-full border-2 border-blue-500/40 shadow-lg">
              Code Navigator
            </span>
          </div>
          
          {/* Greeting & Name */}
          <div className={`space-y-3 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-lg md:text-xl text-gray-300 font-light">
              Ahoy! I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                {nameTyped}
              </span>
              <span className="animate-pulse text-orange-400">|</span>
            </h1>
          </div>
          
          {/* One Piece Quote Section */}
          <div className={`space-y-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* Japanese Quote */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-lg p-4 md:p-6 max-w-2xl mx-auto">
              <div className="text-2xl md:text-3xl font-bold text-orange-300 mb-2 font-mono tracking-wider">
                {quoteTyped}
                {quoteTyped.length === japaneseQuote.length && <span className="animate-pulse">|</span>}
              </div>
              
              {/* English Translation with fade-in effect */}
              <div className={`transform transition-all duration-1000 ${showEnglish ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <p className="text-gray-300 text-base md:text-lg italic">
                  {englishQuote}
                </p>
                <p className="text-orange-400 text-sm mt-2 font-semibold">
                  — Monkey D. Luffy
                </p>
              </div>
            </div>
          </div>
          
          {/* Description with pirate theme */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
              Sailing the digital seas, discovering 
              <span className="text-orange-400 font-bold"> AI treasures</span> and building 
              <span className="text-red-400 font-bold"> legendary applications</span> that change the world
            </p>
          </div>
          
          {/* Social Links */}
          <div className={`flex justify-center gap-3 sm:gap-4 py-4 transform transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="group relative p-3 bg-white/5 hover:bg-orange-500/20 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 border border-white/10 hover:border-orange-500/50"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-orange-300 transition-colors duration-300" />
                
                {/* Enhanced tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900/95 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-orange-500/30">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
          
          {/* CTA Buttons with pirate theme */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-6 px-4 transform transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 text-base"
            >
              Set Sail to Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <button
              onClick={scrollToJoinCrew}
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-orange-500 text-orange-300 font-bold rounded-lg hover:bg-orange-500/10 hover:border-red-400 hover:text-red-300 transition-all duration-300 hover:scale-105 text-base"
            >
              Join My Crew
            </button>
          </div>
        </div>
      </div>
      
      {/* Fixed Scroll Indicator with better spacing */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-0.5 h-6 md:h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-full" />
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-orange-500" />
          <span className="text-xs text-orange-400 font-bold tracking-wider">ADVENTURE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
