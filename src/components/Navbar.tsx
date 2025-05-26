
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code, FileText, Mail } from 'lucide-react';
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
      'fixed w-full z-50 transition-all duration-300 backdrop-blur-md py-3 sm:py-5 px-4 sm:px-6 md:px-8',
      scrolled ? 'bg-[#121212]/95 shadow-lg shadow-pink-500/5' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group relative z-10">
          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-700"></div>
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5),transparent_70%)]"></div>
            <div className="relative z-10 text-white font-bold text-sm sm:text-xl tracking-wider font-heading">SN</div>
          </div>
          <span className="text-lg sm:text-xl font-bold hidden sm:inline-block tracking-tight">
            <span className="text-pink-500">Saikoushik</span> 
            <span className="text-purple-400">Nalubola</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={cn(
                "relative px-3 lg:px-4 py-2 rounded-md transition-all duration-300 font-medium tracking-wide text-sm",
                activeSection === link.href.substring(1) 
                  ? "text-white" 
                  : "text-gray-400 hover:text-gray-200"
              )}
            >
              <span className="relative z-10 flex items-center">
                <link.icon className="w-3 h-3 lg:w-4 lg:h-4 mr-1 opacity-70" />
                {link.name}
              </span>
              
              {/* Active background */}
              {activeSection === link.href.substring(1) && (
                <>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-md"></span>
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-pink-500 to-purple-500"></span>
                </>
              )}
            </a>
          ))}
          
          {/* Connect button */}
          <Link 
            to="/connect" 
            className="ml-2 px-4 lg:px-5 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-md hover:from-pink-500 hover:to-purple-500 transition-all duration-300 font-medium tracking-wide text-sm shadow-lg shadow-pink-500/20"
          >
            Connect
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden relative z-20 p-2 rounded-md bg-gray-900/50 backdrop-blur-md border border-white/10" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5 text-pink-500" />
          ) : (
            <Menu className="w-5 h-5 text-pink-500" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#121212]/98 backdrop-blur-xl z-10 animate-fade-in flex flex-col">
          <div className="flex-grow flex flex-col justify-center items-center p-6 pt-20 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 w-full max-w-xs rounded-lg font-medium text-base tracking-wide transition-all duration-300",
                  activeSection === link.href.substring(1) 
                    ? "bg-gradient-to-r from-pink-600/20 to-purple-600/20 text-white border-l-2 border-pink-500" 
                    : "hover:bg-white/5 text-gray-300"
                )}
                onClick={toggleMobileMenu}
              >
                <link.icon className={cn(
                  "w-5 h-5", 
                  activeSection === link.href.substring(1) 
                    ? "text-pink-500" 
                    : "text-gray-400"
                )} />
                <span>{link.name}</span>
              </a>
            ))}
            
            {/* Connect button */}
            <div className="pt-4 w-full max-w-xs">
              <Link
                to="/connect"
                className="flex justify-center items-center py-3 w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-medium tracking-wide shadow-lg shadow-pink-500/20 transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Connect With Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
