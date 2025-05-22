
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
    <footer className="relative bg-[#121212] text-gray-300 pt-16 pb-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute h-64 w-64 rounded-full blur-3xl bg-pink-500/20 -top-10 -left-20"></div>
        <div className="absolute h-64 w-64 rounded-full blur-3xl bg-purple-500/20 bottom-10 right-10"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Logo and description */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="anime-logo flex items-center justify-center w-12 h-12 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600 to-purple-700"></div>
                <span className="relative z-10 text-white font-bold text-2xl font-jp">SN</span>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.4)_0%,_transparent_70%)] opacity-50"></div>
              </div>
              <h3 className="text-2xl font-bold font-jp">
                <span className="text-pink-500">Saikoushik</span> 
                <span className="text-purple-400">Nalubola</span>
              </h3>
            </div>
            <p className="text-sm text-gray-400 max-w-md font-jp leading-relaxed">
              Building the future through AI innovation and creative solutions. Turning imagination into reality with cutting-edge technology and passion for excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition-colors duration-300 group relative"
                  aria-label={link.label}
                >
                  <span className="absolute -inset-2 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  <link.icon className="w-5 h-5 relative z-10" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 font-jp relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:-bottom-1 after:left-0">
              Explore
            </h4>
            <ul className="grid grid-cols-2 gap-3 font-jp">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-pink-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-2 transform scale-0 group-hover:scale-100 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5 font-jp relative inline-block after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-gradient-to-r after:from-pink-500 after:to-purple-500 after:-bottom-1 after:left-0">
              Get Connected
            </h4>
            <p className="text-sm text-gray-400 mb-5 font-jp leading-relaxed">
              Looking to start a project or just want to connect? Reach out and let's create something amazing together.
            </p>
            <a 
              href="mailto:saikoushik42@gmail.com" 
              className="inline-flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-500 hover:to-purple-500 transition-all duration-300 font-jp"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p className="font-jp mb-4 md:mb-0">© {currentYear} Saikoushik Nalubola. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-pink-400 transition-colors font-jp">Privacy Policy</a>
            <a href="#" className="hover:text-pink-400 transition-colors font-jp">Terms of Service</a>
            <a href="#" className="hover:text-pink-400 transition-colors font-jp">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
