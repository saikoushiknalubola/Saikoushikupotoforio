
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight, Home, Globe, Edit } from 'lucide-react';

const Connect = () => {
  useEffect(() => {
    // Update page title
    document.title = "Let's Connect | Saikoushik Nalubola - AI Engineer & Entrepreneur";
  }, []);

  const socialLinks = [
    { 
      name: 'Portfolio',
      icon: Globe, 
      href: 'https://saikoushiknalubola.netlify.app/', 
      username: 'saikoushiknalubola.netlify.app',
      color: 'bg-gradient-to-r from-emerald-600 to-teal-700',
      textColor: 'text-white',
      description: 'Explore my complete portfolio and projects',
      highlight: true
    },
    { 
      name: 'GitHub',
      icon: Github, 
      href: 'https://github.com/saikoushiknalubola', 
      username: '@saikoushiknalubola',
      color: 'bg-gradient-to-r from-gray-800 to-gray-900',
      textColor: 'text-white',
      description: 'Open source projects and code repositories'
    },
    { 
      name: 'LinkedIn',
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/saikoushiknalubola', 
      username: 'Saikoushik Nalubola',
      color: 'bg-gradient-to-r from-blue-600 to-blue-800',
      textColor: 'text-white',
      description: 'Professional network and career insights'
    },
    { 
      name: 'X (Twitter)',
      icon: Twitter, 
      href: 'https://x.com/saikoushik_42', 
      username: '@saikoushik_42',
      color: 'bg-gradient-to-r from-gray-900 to-black',
      textColor: 'text-white',
      description: 'Latest thoughts on AI and technology'
    },
    { 
      name: 'Medium',
      icon: Edit, 
      href: 'https://medium.com/@saikoushiknalubola', 
      username: '@saikoushiknalubola',
      color: 'bg-gradient-to-r from-gray-700 to-gray-800',
      textColor: 'text-white',
      description: 'In-depth articles on AI and innovation'
    },
    { 
      name: 'Instagram',
      icon: Instagram, 
      href: 'https://www.instagram.com/saikoushiknalubola/', 
      username: '@saikoushiknalubola',
      color: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500',
      textColor: 'text-white',
      description: 'Behind the scenes and visual journey'
    },
    { 
      name: 'Email',
      icon: Mail, 
      href: 'mailto:saikoushik42@gmail.com', 
      username: 'saikoushik42@gmail.com',
      color: 'bg-gradient-to-r from-amber-500 to-orange-600',
      textColor: 'text-white',
      description: 'Direct contact for collaborations'
    }
  ];

  return (
    <Layout>
      <section className="min-h-screen pt-24 pb-16 px-4 relative overflow-hidden">
        {/* Enhanced background with multiple layers */}
        <div className="absolute inset-0 bg-[#0a0a0a] z-[-3]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(15,155,142,0.15)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(139,92,246,0.15)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,_rgba(236,72,153,0.1)_0%,_transparent_50%)]"></div>
        </div>
        
        {/* Animated circuit patterns */}
        <div className="absolute inset-0 z-[-1] overflow-hidden opacity-20">
          <div className="absolute h-[60%] w-[1px] top-[5%] left-[10%] bg-gradient-to-b from-transparent via-teal-400 to-transparent animate-pulse"></div>
          <div className="absolute h-[1px] w-[25%] bottom-[30%] left-[10%] bg-gradient-to-r from-teal-400 to-transparent animate-pulse"></div>
          <div className="absolute h-[1px] w-[20%] top-[20%] right-[15%] bg-gradient-to-l from-purple-400 to-transparent animate-pulse"></div>
          <div className="absolute h-[40%] w-[1px] top-[20%] right-[15%] bg-gradient-to-b from-purple-400 to-transparent animate-pulse"></div>
          <div className="absolute h-[1px] w-[30%] top-[60%] left-[30%] bg-gradient-to-r from-pink-400 to-transparent animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Enhanced header section */}
          <div className="mb-16 text-center relative">
            <div className="absolute -inset-20 rounded-full bg-gradient-to-r from-teal-500/10 via-purple-500/10 to-pink-500/10 blur-3xl animate-pulse"></div>
            
            <div className="relative z-10">
              <h1 className="text-5xl md:text-7xl font-black mb-6 font-heading tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 animate-pulse">
                  Let's Connect & Create
                </span>
              </h1>
              
              <div className="max-w-3xl mx-auto mb-8">
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-4">
                  AI Engineer • Entrepreneur • Innovation Catalyst
                </p>
                <p className="text-lg text-gray-400 font-light leading-relaxed">
                  Passionate about transforming ideas into reality through cutting-edge AI solutions. 
                  Always excited to collaborate on groundbreaking projects and discuss the future of technology.
                </p>
              </div>
              
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-6 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-gray-300 font-medium">Available for new opportunities</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/" 
                  className="inline-flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors font-medium"
                >
                  <Home className="w-5 h-5" />
                  <span>← Back to Portfolio</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Enhanced social links grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer" 
                className={`group block transform transition-all duration-500 hover:scale-105 ${
                  link.highlight ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`rounded-2xl p-8 transition-all duration-500 ${link.color} relative overflow-hidden shadow-2xl ${
                  link.highlight ? 'ring-2 ring-teal-400/50 ring-offset-2 ring-offset-[#0a0a0a]' : ''
                }`}>
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                  
                  <div className="flex items-start space-x-6 relative z-10">
                    <div className="bg-black/30 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-black/50 transition-colors duration-300">
                      <link.icon className={`w-10 h-10 ${link.textColor} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className={`text-2xl font-bold ${link.textColor} group-hover:text-white transition-colors duration-300`}>
                          {link.name}
                        </h3>
                        {link.highlight && (
                          <span className="bg-teal-400/20 text-teal-300 text-xs font-bold px-2 py-1 rounded-full">
                            FEATURED
                          </span>
                        )}
                      </div>
                      
                      <p className={`text-${link.textColor.split('-')[1]}-200 mb-4 font-medium text-lg truncate`}>
                        {link.username}
                      </p>
                      
                      <p className="text-white/80 mb-6 text-sm leading-relaxed">
                        {link.description}
                      </p>
                      
                      <div className="flex items-center text-white/90 group-hover:text-white transition-colors duration-300">
                        <span className="font-medium">Connect</span>
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* Call to action section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-teal-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you have a groundbreaking idea or want to discuss AI innovations, 
                I'm always excited to connect with fellow visionaries and collaborators.
              </p>
              <a 
                href="mailto:saikoushik42@gmail.com" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-purple-600 text-white font-bold rounded-full hover:from-teal-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/25"
              >
                <Mail className="w-6 h-6 mr-3" />
                Start a Conversation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Connect;
