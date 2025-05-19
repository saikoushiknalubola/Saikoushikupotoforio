
import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <h3 className="text-xl font-bold text-anime-amber">Saikoushik Nalubola</h3>
            </div>
            <p className="mt-2 text-sm text-gray-400">AI Engineer • Entrepreneur • Innovator</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-anime-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-anime-teal transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:saikoushiknalubola@yahoo.com" 
              className="hover:text-anime-teal transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} Saikoushik Nalubola. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
