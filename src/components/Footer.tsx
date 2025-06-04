
import React from 'react';
import { Linkedin, Github, Twitter, Instagram, Mail, Quote, ExternalLink, MapPin, Phone, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: 'https://github.com/saikoushiknalubola', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Linkedin, href: 'https://linkedin.com/in/saikoushik-nalubola', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com/saikoushikn', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: Instagram, href: 'https://instagram.com/saikoushik.nalubola', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Mail, href: 'mailto:saikoushik42@gmail.com', label: 'Email', color: 'hover:text-orange-400' }
  ];
  
  const quickLinks = [
    { name: 'About Me', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
    { name: 'Connect', href: '/connect' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'saikoushik42@gmail.com', href: 'mailto:saikoushik42@gmail.com' },
    { icon: MapPin, text: 'Available Worldwide', href: '#' },
    { icon: Calendar, text: 'Open for Opportunities', href: '#contact' }
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
    <footer className="relative bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e] text-gray-300 pt-20 pb-10 px-4 overflow-hidden border-t border-gray-800/60">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
        <div className="absolute h-72 w-72 rounded-full blur-3xl bg-orange-500/20 -top-12 -left-24 animate-pulse"></div>
        <div className="absolute h-72 w-72 rounded-full blur-3xl bg-red-500/20 bottom-12 right-12 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute h-56 w-56 rounded-full blur-2xl bg-blue-500/15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Quote Section */}
        <div className="mb-16">
          <div className="relative max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/95 to-gray-800/80 backdrop-blur-sm border border-orange-500/30 p-12 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 left-6 text-orange-500/40">
                  <Quote className="w-16 h-16" />
                </div>
                <div className="absolute bottom-6 right-6 text-red-500/40 rotate-180">
                  <Quote className="w-16 h-16" />
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-blue-500/10 rounded-3xl"></div>
              
              <div className="relative z-10 text-center">
                <blockquote className="text-3xl font-light text-white leading-relaxed mb-8 italic">
                  "Dreams don't have an expiration date. It's never too late to chase what sets your soul on fire!"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
                  <cite className="text-lg text-orange-400 font-medium not-italic tracking-wide">
                    My Journey Philosophy
                  </cite>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-red-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo and description */}
          <div className="space-y-6 text-center md:text-left lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="flex items-center justify-center w-20 h-20 rounded-xl relative overflow-hidden border-2 border-orange-500/40 shadow-lg bg-gradient-to-br from-orange-600 to-red-700">
                <span className="relative z-10 text-white font-bold text-3xl tracking-wide">SN</span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] opacity-50"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-orange-500">
                  Saikoushik
                </h3>
                <h3 className="text-2xl font-bold tracking-tight text-red-400">
                  Nalubola
                </h3>
              </div>
            </div>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0 font-light leading-relaxed tracking-wide">
              Sailing the digital seas with AI innovation and entrepreneurial spirit. 
              On a quest to revolutionize technology and inspire the next generation of digital innovators.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((link) => (
                <button 
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className={`${link.color} transition-all duration-300 group relative p-3 rounded-xl border border-transparent hover:border-orange-500/30 hover:bg-orange-500/10 hover:scale-110 shadow-lg hover:shadow-orange-500/20`}
                  aria-label={link.label}
                >
                  <span className="absolute -inset-2 rounded-xl bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <link.icon className="w-6 h-6 relative z-10" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-6 tracking-tight relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:-bottom-1 after:left-0">
              Navigate
            </h4>
            <ul className="space-y-3 tracking-wide">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 inline-flex items-center group w-full text-left hover:translate-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-3 transform scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.name}
                    {!link.href.startsWith('#') && <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-6 tracking-tight relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:-bottom-1 after:left-0">
              Contact Info
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleLinkClick(item.href)}
                    className="text-gray-400 hover:text-orange-400 transition-all duration-300 inline-flex items-center group w-full text-left"
                  >
                    <item.icon className="w-4 h-4 mr-3 text-orange-500/70 group-hover:text-orange-400 transition-colors" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.text}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Call to Action section */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold text-white mb-6 tracking-tight relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-orange-500 after:to-red-500 after:-bottom-1 after:left-0">
              Join the Journey
            </h4>
            <p className="text-gray-400 mb-6 font-light leading-relaxed tracking-wide">
              Ready to embark on an epic digital adventure? Let's create something legendary together and conquer new technological frontiers!
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => handleLinkClick('mailto:saikoushik42@gmail.com')}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-500 hover:to-red-500 transition-all duration-300 font-medium hover:scale-105 shadow-lg shadow-orange-500/30 border border-orange-500/30 w-full justify-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>Start Our Adventure</span>
              </button>
              <button 
                onClick={() => handleLinkClick('#contact')}
                className="inline-flex items-center px-6 py-3 rounded-xl border border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 font-medium hover:scale-105 shadow-lg shadow-blue-500/20 w-full justify-center backdrop-blur-sm"
              >
                <span>Learn More</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="pt-10 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <p className="font-light tracking-wide text-center md:text-left">© {currentYear} Saikoushik Nalubola. All adventures reserved.</p>
            <div className="flex items-center space-x-2 text-xs">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Available for exciting opportunities</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <button onClick={() => handleLinkClick('/privacy')} className="hover:text-orange-400 transition-colors font-light tracking-wide hover:underline">Privacy Policy</button>
            <button onClick={() => handleLinkClick('/terms')} className="hover:text-orange-400 transition-colors font-light tracking-wide hover:underline">Terms of Service</button>
            <button onClick={() => handleLinkClick('/cookies')} className="hover:text-orange-400 transition-colors font-light tracking-wide hover:underline">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
