
import React from 'react';
import { Linkedin, Github, Twitter, Instagram, Mail, Quote } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/saikoushiknalubola', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
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
  
  return (
    <footer className="relative bg-[#121212] text-gray-300 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute h-48 w-48 sm:h-64 sm:w-64 rounded-full blur-3xl bg-pink-500/20 -top-10 -left-20"></div>
        <div className="absolute h-48 w-48 sm:h-64 sm:w-64 rounded-full blur-3xl bg-purple-500/20 bottom-10 right-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Quote Section */}
        <div className="mb-8 sm:mb-12">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-white/10 p-6 sm:p-8 shadow-2xl">
              {/* Quote background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 left-4 text-6xl sm:text-8xl text-pink-500/30">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>
                <div className="absolute bottom-4 right-4 text-6xl sm:text-8xl text-purple-500/30 rotate-180">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
                </div>
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl"></div>
              
              {/* Quote content */}
              <div className="relative z-10 text-center">
                <blockquote className="text-lg sm:text-xl md:text-2xl font-light text-white leading-relaxed mb-4 sm:mb-6 italic">
                  "Do not go gentle into that good night. Rage, rage against the dying of the light."
                </blockquote>
                <div className="flex items-center justify-center space-x-3">
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-pink-500"></div>
                  <cite className="text-sm sm:text-base text-pink-400 font-medium not-italic tracking-wide">
                    Dylan Thomas
                  </cite>
                  <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
                </div>
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-pink-500/60 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-purple-500/60 rounded-full animate-pulse delay-500"></div>
                <div className="absolute bottom-1/4 left-2/3 w-1 h-1 bg-blue-500/60 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo and description */}
          <div className="space-y-4 sm:space-y-5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <div className="anime-logo flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-700"></div>
                <span className="relative z-10 text-white font-bold text-lg sm:text-2xl font-heading tracking-wide">SN</span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] opacity-50"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                <span className="text-pink-500">Saikoushik</span> 
                <span className="text-purple-400">Nalubola</span>
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md mx-auto sm:mx-0 font-light leading-relaxed tracking-wide">
              Building the future through AI innovation and creative solutions. Turning imagination into reality with cutting-edge technology and passion for excellence.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors duration-300 group relative p-2"
                  aria-label={link.label}
                >
                  <span className="absolute -inset-2 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <link.icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5 tracking-tight relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:-bottom-1 after:left-0">
              Explore
            </h4>
            <ul className="grid grid-cols-2 gap-2 sm:gap-3 tracking-wide">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-pink-400 transition-colors inline-flex items-center group text-sm"
                  >
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-white mb-4 sm:mb-5 tracking-tight relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:-bottom-1 after:left-0">
              Get Connected
            </h4>
            <p className="text-sm text-gray-400 mb-4 sm:mb-5 font-light leading-relaxed tracking-wide">
              Looking to start a project or just want to connect? Reach out and let's create something amazing together.
            </p>
            <a 
              href="mailto:saikoushik42@gmail.com" 
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500 transition-all duration-300 font-medium text-sm"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 space-y-3 sm:space-y-0">
          <p className="font-light tracking-wide text-center sm:text-left">© {currentYear} Saikoushik Nalubola. All rights reserved.</p>
          <div className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <a href="#" className="hover:text-pink-400 transition-colors font-light tracking-wide">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors font-light tracking-wide">Terms of Service</a>
            <a href="#" className="hover:text-pink-400 transition-colors font-light tracking-wide">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
