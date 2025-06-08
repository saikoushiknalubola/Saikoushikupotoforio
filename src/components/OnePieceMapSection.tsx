
import React, { useState, useEffect } from 'react';
import { Map, Compass, Anchor, Navigation, Globe } from 'lucide-react';

const OnePieceMapSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('onepiece-map');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="onepiece-map" className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#0a1a2e] via-[#16213e] to-[#1a365d] relative overflow-hidden">
      {/* Background Map */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="/lovable-uploads/28b2b146-0483-4c6f-9178-a89ba5495e84.png"
          alt="One Piece World Map"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a2e]/70 via-transparent to-[#0a1a2e]/70" />
      </div>

      {/* Floating Navigation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Compass className="w-10 h-10 text-cyan-500 animate-pulse-glow" />
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Navigate the Digital Seas
            </h2>
            <Map className="w-10 h-10 text-blue-500 animate-pulse-glow" />
          </div>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-cyan-400 jp-text font-bold mb-2" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              偉大なる航路
            </p>
            <p className="text-gray-400 italic mb-6">(Grand Line - The Great Route)</p>
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            Chart your course through my portfolio's vast oceans. Each island represents a unique project, 
            each route a skill mastered on the journey to digital mastery!
          </p>
        </div>

        {/* Interactive Map Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Portfolio Islands */}
          {[
            {
              name: "Skills Island",
              route: "#skills",
              description: "Explore my technical abilities and tools",
              icon: Globe,
              color: "from-cyan-500 to-blue-600",
              bgColor: "bg-cyan-500/10"
            },
            {
              name: "Projects Archipelago", 
              route: "#projects",
              description: "Discover the treasures I've built",
              icon: Anchor,
              color: "from-blue-500 to-indigo-600",
              bgColor: "bg-blue-500/10"
            },
            {
              name: "Experience Ocean",
              route: "#experience", 
              description: "Navigate through my professional journey",
              icon: Navigation,
              color: "from-indigo-500 to-purple-600",
              bgColor: "bg-indigo-500/10"
            },
            {
              name: "Certification Port",
              route: "#certifications",
              description: "Anchor at my achievements and credentials", 
              icon: Compass,
              color: "from-purple-500 to-pink-600",
              bgColor: "bg-purple-500/10"
            },
            {
              name: "Entrepreneurship Bay",
              route: "#entrepreneurship",
              description: "Dock at my business ventures and startups",
              icon: Map,
              color: "from-pink-500 to-red-600", 
              bgColor: "bg-pink-500/10"
            },
            {
              name: "Contact Harbor",
              route: "#contact",
              description: "Send your message across the digital seas",
              icon: Anchor,
              color: "from-red-500 to-orange-600",
              bgColor: "bg-red-500/10"
            }
          ].map((island, index) => {
            const IconComponent = island.icon;
            
            return (
              <div
                key={island.name}
                className="group relative bg-[#1a1a1a]/80 backdrop-blur-sm rounded-2xl border-2 border-cyan-500/20 hover:border-blue-500/50 overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-cyan-500/20"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Island Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${island.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-6 z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${island.bgColor} rounded-full flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  {/* Island Info */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                    {island.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                    {island.description}
                  </p>

                  {/* Navigate Button */}
                  <a
                    href={island.route}
                    className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${island.color} text-white text-sm font-bold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Set Sail</span>
                  </a>
                </div>

                {/* Compass Effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full animate-ping"></div>
                </div>

                {/* Wave Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-500/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Ready to Start Your Adventure?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              The Grand Line of development awaits! Join me on this epic journey through the digital seas.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-cyan-500/40" 
              style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
            >
              <Compass className="w-5 h-5" />
              <span>Begin the Journey</span>
              <Map className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnePieceMapSection;
