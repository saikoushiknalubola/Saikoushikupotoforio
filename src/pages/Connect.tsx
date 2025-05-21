
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight, Home } from 'lucide-react';

const Connect = () => {
  useEffect(() => {
    // Update page title
    document.title = "Connect with Saikoushik Nalubola";
  }, []);

  const socialLinks = [
    { 
      name: 'GitHub',
      icon: Github, 
      href: 'https://github.com/saikoushiknalubola', 
      username: 'saikoushiknalubola',
      color: 'bg-gradient-to-r from-gray-700 to-gray-900',
      textColor: 'text-white',
      description: 'Check out my projects and contributions'
    },
    { 
      name: 'LinkedIn',
      icon: Linkedin, 
      href: 'https://linkedin.com', 
      username: 'Saikoushik Nalubola',
      color: 'bg-gradient-to-r from-blue-700 to-blue-900',
      textColor: 'text-white',
      description: 'Connect with me professionally'
    },
    { 
      name: 'Twitter',
      icon: Twitter, 
      href: 'https://twitter.com', 
      username: '@saikoushik',
      color: 'bg-gradient-to-r from-blue-400 to-blue-600',
      textColor: 'text-white',
      description: 'Follow me for updates and thoughts'
    },
    { 
      name: 'Instagram',
      icon: Instagram, 
      href: 'https://instagram.com', 
      username: '@saikoushik',
      color: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500',
      textColor: 'text-white',
      description: 'See my visual journey'
    },
    { 
      name: 'Email',
      icon: Mail, 
      href: 'mailto:saikoushik42@gmail.com', 
      username: 'saikoushik42@gmail.com',
      color: 'bg-gradient-to-r from-amber-500 to-orange-600',
      textColor: 'text-white',
      description: 'Contact me directly'
    }
  ];

  return (
    <Layout>
      <section className="min-h-screen pt-28 pb-16 px-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-anime-midnight z-[-2]">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(15,155,142,0.4)_0%,_rgba(26,26,46,0)_70%)]"></div>
        </div>
        
        {/* Circuit patterns */}
        <div className="absolute inset-0 z-[-1] overflow-hidden">
          <div className="absolute h-[40%] w-[1px] top-[10%] left-[15%] bg-gradient-to-b from-transparent via-anime-blue to-transparent opacity-20"></div>
          <div className="absolute h-[1px] w-[20%] bottom-[40%] left-[15%] bg-gradient-to-r from-anime-blue to-transparent opacity-20"></div>
          <div className="absolute h-[1px] w-[15%] top-[30%] right-[20%] bg-gradient-to-l from-anime-magenta to-transparent opacity-20"></div>
          <div className="absolute h-[30%] w-[1px] top-[30%] right-[20%] bg-gradient-to-b from-anime-magenta to-transparent opacity-20"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-anime-blue via-anime-purple to-anime-magenta">
                Connect With Me
              </span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-rajdhani text-lg">
              Let's collaborate and create something amazing together. Reach out through any of these platforms.
            </p>
            <div className="mt-6">
              <a 
                href="/" 
                className="inline-flex items-center space-x-2 text-anime-blue hover:text-anime-teal transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer" 
                className="group block"
              >
                <div className={`rounded-lg p-6 transition-all duration-500 ${link.color} relative overflow-hidden group-hover:shadow-lg group-hover:shadow-${link.name.toLowerCase()}-500/20`}>
                  {/* Animated border */}
                  <div className="absolute inset-0 border border-white/10 rounded-lg"></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-white/5"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-anime-blue via-anime-purple to-anime-magenta opacity-30 blur-md rounded-lg"></div>
                  </div>
                  
                  <div className="flex items-start space-x-4 relative z-10">
                    <div className="bg-black/30 p-3 rounded-full">
                      <link.icon className={`w-8 h-8 ${link.textColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-1 ${link.textColor}`}>{link.name}</h3>
                      <p className={`text-${link.textColor.split('-')[1]}-200 mb-3 font-medium`}>{link.username}</p>
                      <p className="text-white/70 mb-4">{link.description}</p>
                      <div className="flex items-center text-white group-hover:text-white/90">
                        <span>Visit</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Connect;
