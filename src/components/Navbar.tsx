
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code, FileText, Mail, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', icon: User, href: '#about' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Projects', icon: Code, href: '#projects' },
    { name: 'Skills', icon: FileText, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <>
      <nav className={cn(
        'fixed w-full z-50 transition-all duration-300 py-4 px-4 sm:px-6 md:px-8',
        scrolled ? 'bg-[#121212]/98 backdrop-blur-xl shadow-2xl shadow-orange-500/10 border-b border-orange-500/20' : 'bg-[#121212]/90 backdrop-blur-md'
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center h-14">
          <Link to="/" className="flex items-center space-x-3 group relative z-10">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl relative overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700"></div>
              <div className="relative z-10 text-white font-black text-xl tracking-wider">SN</div>
            </div>
            <span className="text-xl font-bold hidden sm:inline-block tracking-tight">
              <span className="text-orange-500">Saikoushik</span> 
              <span className="text-red-400">Nalubola</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "relative px-4 py-3 rounded-lg transition-all duration-300 font-semibold tracking-wide text-sm",
                  activeSection === link.href.substring(1) 
                    ? "text-white bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40" 
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                )}
              >
                <span className="relative z-10 flex items-center">
                  <link.icon className="w-4 h-4 mr-2 opacity-80" />
                  {link.name}
                </span>
                
                {/* Active indicator */}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-b-lg"></span>
                )}
              </a>
            ))}
            
            {/* Anime page link */}
            <Link 
              to="/anime" 
              className="flex items-center px-4 py-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 rounded-lg hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300 font-semibold text-sm border border-purple-500/40"
            >
              <Compass className="w-4 h-4 mr-2" />
              Anime World
            </Link>
            
            {/* Connect button */}
            <Link 
              to="/connect" 
              className="ml-3 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-500 hover:to-red-500 transition-all duration-300 font-semibold tracking-wide text-sm shadow-xl shadow-orange-500/30"
            >
              Let's Connect
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden relative z-50 p-3 rounded-xl bg-[#1a1a1a] border-2 border-orange-500/40 min-w-[48px] min-h-[48px] flex items-center justify-center shadow-lg" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-orange-400" />
            ) : (
              <Menu className="w-6 h-6 text-orange-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation with Full Blur Background */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          {/* Blurred backdrop */}
          <div 
            className="absolute inset-0 bg-[#121212]/95 backdrop-blur-xl"
            onClick={toggleMobileMenu}
          />
          
          {/* Menu content */}
          <div className="relative z-50 flex flex-col h-full">
            {/* Header space for navbar */}
            <div className="h-24" />
            
            {/* Header */}
            <div className="pt-8 pb-6 px-6 border-b border-orange-500/20">
              <h2 className="text-2xl font-bold text-center">
                <span className="text-orange-500">Navigation</span>
              </h2>
            </div>
            
            {/* Navigation Links */}
            <div className="flex-grow flex flex-col justify-center px-6 space-y-3 py-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "flex items-center space-x-4 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 min-h-[56px] border-2",
                    activeSection === link.href.substring(1) 
                      ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 text-white border-orange-500/50 shadow-lg" 
                      : "bg-[#1a1a1a]/80 text-gray-300 border-gray-700/50 hover:border-orange-500/30 hover:bg-orange-500/10"
                  )}
                  onClick={toggleMobileMenu}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <link.icon className={cn(
                    "w-6 h-6", 
                    activeSection === link.href.substring(1) 
                      ? "text-orange-400" 
                      : "text-gray-400"
                  )} />
                  <span>{link.name}</span>
                </a>
              ))}
              
              {/* Anime page link for mobile */}
              <Link
                to="/anime"
                className="flex items-center space-x-4 px-6 py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border-2 border-purple-500/50 transition-all duration-300 min-h-[56px]"
                onClick={toggleMobileMenu}
              >
                <Compass className="w-6 h-6 text-purple-400" />
                <span>Anime World</span>
              </Link>
            </div>
            
            {/* Footer buttons */}
            <div className="p-6 space-y-4 border-t border-orange-500/20">
              <Link
                to="/connect"
                className="flex justify-center items-center py-4 w-full bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold tracking-wide shadow-xl shadow-orange-500/30 transition-all duration-300 min-h-[56px] text-lg"
                onClick={toggleMobileMenu}
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
