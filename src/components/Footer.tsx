
import React from 'react';
import { Linkedin, Github, Twitter, Instagram, Mail, ExternalLink } from 'lucide-react';

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
    <footer className="relative bg-[#1a1a2e] text-gray-300 pt-16 pb-8 px-4 overflow-hidden">
      {/* Sakura petals decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="sakura-petal absolute h-4 w-4 top-[10%] left-[15%] bg-pink-300/50 rounded-full"></div>
        <div className="sakura-petal absolute h-3 w-3 top-[30%] right-[20%] bg-pink-300/50 rounded-full"></div>
        <div className="sakura-petal absolute h-5 w-5 bottom-[40%] left-[25%] bg-pink-300/50 rounded-full"></div>
        <div className="sakura-petal absolute h-4 w-4 bottom-[20%] right-[15%] bg-pink-300/50 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="anime-logo flex items-center justify-center w-10 h-10 rounded relative">
                <div className="absolute inset-0 rounded bg-gradient-to-br from-pink-300 to-indigo-400 opacity-70"></div>
                <div className="relative z-10 text-white font-bold text-xl tracking-wider font-jp">SN</div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded opacity-30 blur animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold font-jp">
                <span className="text-pink-300">Saikoushik</span> 
                <span className="text-gray-400">Nalubola</span>
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md font-jp">
              Transforming ideas into impactful AI-driven solutions with a passion for innovation and sustainability. Building the future through technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-300 transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 group-hover:animate-pulse" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 relative inline-block font-jp">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-300"></span>
            </h4>
            <ul className="space-y-2 font-jp">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-pink-300 transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 relative inline-block font-jp">
              Get In Touch
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-300"></span>
            </h4>
            <p className="text-sm text-gray-400 mb-4 font-jp">
              Ready to collaborate on your next project? Let's discuss how we can work together.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-2 text-pink-300 hover:text-white transition-colors"
            >
              <span>Contact me</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500 font-jp">
          <p>© {currentYear} Saikoushik Nalubola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
