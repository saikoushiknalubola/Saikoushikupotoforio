
import React, { useState, useEffect } from 'react';
import { Menu, X, User, Mountain, Wrench, Circle, Mail, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <nav className={cn(
      'fixed w-full z-50 transition-all duration-300 py-3 px-4 md:px-8',
      scrolled ? 'bg-anime-midnight/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-anime-amber">S.N</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link flex items-center gap-1.5 group"
            >
              <link.icon className="w-4 h-4 text-anime-teal group-hover:text-anime-amber transition-colors" />
              <span>{link.name}</span>
            </a>
          ))}
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-anime-text hover:text-anime-teal transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-anime-text hover:text-anime-amber" 
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
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800"
                onClick={toggleMobileMenu}
              >
                <link.icon className="w-5 h-5 text-anime-teal" />
                <span>{link.name}</span>
              </a>
            ))}
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-800"
            >
              <Linkedin className="w-5 h-5 text-anime-teal" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
