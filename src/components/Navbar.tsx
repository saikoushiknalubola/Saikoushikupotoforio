
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Mountain, Wrench, Circle, Mail, Linkedin, Github, Twitter, Instagram } from 'lucide-react';
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
    { name: 'Experience', icon: Mountain, href: '#experience' },
    { name: 'Projects', icon: Wrench, href: '#projects' },
    { name: 'Skills', icon: Circle, href: '#skills' },
    { name: 'Contact', icon: Mail, href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300 py-3 px-4 md:px-8',
      scrolled ? 'bg-anime-midnight/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-3">
          <div className="cyber-logo flex items-center justify-center w-10 h-10 rounded relative">
            <div className="absolute inset-0 rounded bg-gradient-to-br from-anime-blue to-anime-purple opacity-70"></div>
            <div className="relative z-10 text-white font-bold text-xl tracking-wider">SN</div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-anime-blue via-anime-purple to-anime-magenta rounded opacity-30 blur animate-pulse"></div>
          </div>
          <span className="text-xl font-bold text-white hidden sm:inline-block">
            <span className="text-anime-blue">Saikoushik</span> 
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
                "cyber-nav-link flex items-center gap-1.5 px-3 py-2 rounded transition-all duration-300",
                activeSection === link.href.substring(1) ? "text-anime-blue bg-white/5" : "text-gray-300 hover:text-anime-blue"
              )}
            >
              <link.icon className={cn(
                "w-4 h-4",
                activeSection === link.href.substring(1) ? "text-anime-blue" : "text-anime-purple group-hover:text-anime-blue"
              )} />
              <span>{link.name}</span>
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-anime-blue"></span>
              )}
            </a>
          ))}
          
          <div className="w-px h-6 bg-gray-700 mx-2"></div>
          
          {/* Social Media Icons */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-anime-blue transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-anime-text hover:text-anime-blue" 
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
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg animate-fade-in border-t border-gray-800">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center space-x-2 p-2 rounded-md",
                  activeSection === link.href.substring(1) ? "bg-anime-blue/10 text-anime-blue" : "hover:bg-gray-800 text-gray-300"
                )}
                onClick={toggleMobileMenu}
              >
                <link.icon className={cn(
                  "w-5 h-5", 
                  activeSection === link.href.substring(1) ? "text-anime-blue" : "text-anime-purple"
                )} />
                <span>{link.name}</span>
              </a>
            ))}
            
            <div className="border-t border-gray-800 pt-3">
              <p className="text-xs text-gray-500 mb-2">Connect with me</p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-2 text-gray-400 hover:text-anime-blue transition-colors"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
