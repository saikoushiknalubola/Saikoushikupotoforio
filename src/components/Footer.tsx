
import React from 'react';
import { Linkedin, Github, Twitter, Instagram, Mail, Quote, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/saikoushiknalubola', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/saikoushik-nalubola', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/saikoushikn', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/saikoushik.nalubola', label: 'Instagram' },
    { icon: Mail, href: 'mailto:saikoushik42@gmail.com', label: 'Email' }
  ];
  
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Connect', href: '/connect' }
  ];
  
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80;
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - navbarHeight,
          behavior: 'smooth'
        });
      }
    } else if (href.startsWith('/')) {
      window.location.href = href;
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <footer className="relative bg-[#0a0a0a] text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 overflow-hidden border-t border-gray-800/50">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute h-48 w-48 sm:h-64 sm:w-64 rounded-full blur-3xl bg-pink-500/20 -top-10 -left-20 animate-pulse"></div>
        <div className="absolute h-48 w-48 sm:h-64 sm:w-64 rounded-full blur-3xl bg-purple-500/20 bottom-10 right-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute h-32 w-32 sm:h-48 sm:w-48 rounded-full blur-2xl bg-orange-500/15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Quote Section with One Piece theme */}
        <div className="mb-8 sm:mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-sm border border-orange-500/20 p-6 sm:p-8 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
              {/* One Piece themed background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 text-6xl sm:text-8xl text-orange-500/30">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>
                <div className="absolute bottom-4 right-4 text-6xl sm:text-8xl text-red-500/30 rotate-180">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>
              </div>
              
              {/* Gradient overlay with pirate theme */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-yellow-500/5 rounded-2xl"></div>
              
              {/* Quote content with Luffy inspiration */}
              <div className="relative z-10 text-center">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed mb-4 sm:mb-6 italic" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                  "Being strong isn't just about having power or move, it's about one's spirit!"
                </blockquote>
                <div className="flex items-center justify-center space-x-3">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
                  <cite className="text-sm sm:text-base text-orange-400 font-medium not-italic tracking-wide" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                    Monkey D. Luffy - One Piece
                  </cite>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-red-500"></div>
                </div>
              </div>
              
              {/* Floating particles with pirate theme */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-orange-500/60 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-red-500/60 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-yellow-500/60 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Enhanced Logo and description with pirate theme */}
          <div className="space-y-4 sm:space-y-5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="anime-logo flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg relative overflow-hidden border border-orange-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700"></div>
                <span className="relative z-10 text-white font-bold text-xl sm:text-2xl font-heading tracking-wide" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>SN</span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] opacity-50"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                <span className="text-orange-500">Captain</span> 
                <span className="text-red-400">Saikoushik</span>
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md mx-auto sm:mx-0 font-light leading-relaxed tracking-wide">
              Sailing the digital seas with AI innovation and entrepreneurial spirit. 
              On a quest to revolutionize technology and inspire the next generation of digital pirates.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {socialLinks.map((link) => (
                <button 
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="hover:text-orange-500 transition-colors duration-300 group relative p-2 rounded-full border border-transparent hover:border-orange-500/30 hover:bg-orange-500/10"
                  aria-label={link.label}
                >
                  <span className="absolute -inset-2 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Enhanced Quick links with working navigation */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5 tracking-tight relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:-bottom-1 after:left-0" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-2 sm:gap-3 tracking-wide">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-colors inline-flex items-center group text-sm w-full text-left"
                  >
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.name}
                    {!link.href.startsWith('#') && <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enhanced Contact section */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5 tracking-tight relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:-bottom-1 after:left-0" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Join the Crew
            </h4>
            <p className="text-sm text-gray-400 mb-4 sm:mb-5 font-light leading-relaxed tracking-wide">
              Ready to embark on an epic adventure? Let's create something legendary together and conquer the digital seas!
            </p>
            <button 
              onClick={() => handleLinkClick('mailto:saikoushik42@gmail.com')}
              className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-3 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-500 hover:to-red-500 transition-all duration-300 font-medium text-sm hover:scale-105 shadow-lg shadow-orange-500/20 border border-orange-500/30"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span>Set Sail Together</span>
            </button>
          </div>
        </div>
        
        {/* Enhanced footer bottom with working links */}
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 space-y-3 sm:space-y-0">
          <p className="font-light tracking-wide text-center sm:text-left">© {currentYear} Captain Saikoushik Nalubola. All adventures reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <button onClick={() => handleLinkClick('/privacy')} className="hover:text-orange-400 transition-colors font-light tracking-wide">Privacy Policy</button>
            <button onClick={() => handleLinkClick('/terms')} className="hover:text-orange-400 transition-colors font-light tracking-wide">Terms of Service</button>
            <button onClick={() => handleLinkClick('/cookies')} className="hover:text-orange-400 transition-colors font-light tracking-wide">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
