
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code, FileText, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', icon: User, href: '#about' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Skills', icon: FileText, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300 py-3 px-4 md:px-8',
      scrolled ? 'bg-[#1a1a2e]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3 group">
          <div className="anime-logo flex items-center justify-center w-10 h-10 rounded relative overflow-hidden">
            {/* Anime-inspired logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-indigo-400 opacity-70"></div>
            <div className="relative z-10 text-white font-jp font-bold text-xl tracking-wider">SN</div>
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded opacity-40 blur-sm animate-pulse"></div>
          </div>
          <span className="text-xl font-bold text-white hidden sm:inline-block font-jp group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:to-indigo-400 transition-all duration-300">
            <span className="text-pink-200">Saikoushik</span> 
            <span className="text-gray-400">Nalubola</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "anime-nav-link flex items-center gap-1.5 px-3 py-2 rounded transition-all duration-300 relative",
                activeSection === link.href.substring(1) 
                  ? "text-pink-300" 
                  : "text-gray-300 hover:text-pink-200"
              )}
            >
              <link.icon className={cn(
                "w-4 h-4",
                activeSection === link.href.substring(1) 
                  ? "text-pink-300" 
                  : "text-purple-300 group-hover:text-pink-300"
              )} />
              <span className="font-jp">{link.name}</span>
              
              {/* Anime-style active indicator */}
              {activeSection === link.href.substring(1) && (
                <>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-300"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-300/50 blur-sm"></span>
                </>
              )}
            </a>
          ))}
          
          {/* Connect button that links to social media page */}
          <a 
            href="/connect" 
            className="ml-2 px-4 py-1.5 bg-pink-300/20 text-pink-300 border border-pink-300/30 rounded hover:bg-pink-300/30 transition-colors font-jp"
          >
            Connect
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-pink-300" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a2e]/95 backdrop-blur-md shadow-lg animate-fade-in border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center space-x-2 p-2 rounded-md font-jp",
                  activeSection === link.href.substring(1) 
                    ? "bg-pink-300/10 text-pink-300" 
                    : "hover:bg-gray-800 text-gray-300"
                )}
                onClick={toggleMobileMenu}
              >
                <link.icon className={cn(
                  "w-5 h-5", 
                  activeSection === link.href.substring(1) 
                    ? "text-pink-300" 
                    : "text-purple-300"
                )} />
                <span>{link.name}</span>
              </a>
            ))}
            
            {/* Connect link in mobile menu */}
            <div className="border-t border-gray-800 pt-3">
              <a
                href="/connect"
                className="flex items-center justify-center space-x-2 p-2 bg-pink-300/20 text-pink-300 rounded-md border border-pink-300/30 font-jp"
                onClick={toggleMobileMenu}
              >
                <span>Connect With Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
