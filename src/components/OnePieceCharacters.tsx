
import React, { useState, useEffect } from 'react';
import { Star, Users, Zap, Heart, Crown, Anchor } from 'lucide-react';

const OnePieceCharacters = () => {
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

    const element = document.getElementById('onepiece-characters');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const characters = [
    {
      id: 1,
      name: "Monkey D. Luffy",
      role: "Captain",
      description: "Future Pirate King with rubber powers and boundless determination",
      color: "from-red-500 to-orange-500",
      image: "/lovable-uploads/e12c0309-bc19-4bb8-8cbb-1c162c4c8d7b.png"
    },
    {
      id: 2,
      name: "Roronoa Zoro", 
      role: "Swordsman",
      description: "Three-sword style master aiming to be the world's greatest swordsman",
      color: "from-green-500 to-emerald-500",
      image: "/lovable-uploads/443ab3d5-1005-4024-981c-3899edd41e47.png"
    },
    {
      id: 3,
      name: "Nami",
      role: "Navigator", 
      description: "Cat burglar turned navigator with unmatched map-making skills",
      color: "from-orange-500 to-yellow-500",
      image: "/lovable-uploads/34ae5369-9107-436f-b646-e20fae7b35b5.png"
    },
    {
      id: 4,
      name: "Usopp",
      role: "Sniper",
      description: "Brave warrior of the sea with incredible marksmanship",
      color: "from-amber-500 to-orange-600",
      image: "/lovable-uploads/bcef14db-23b2-4b09-b375-25d457ff5f48.png"
    },
    {
      id: 5,
      name: "Sanji",
      role: "Cook",
      description: "Black leg fighting chef with a heart for adventure and food",
      color: "from-blue-500 to-indigo-500",
      image: "/lovable-uploads/0de4afea-d3fc-496e-a465-d3345b071e4d.png"
    },
    {
      id: 6,
      name: "Tony Tony Chopper",
      role: "Doctor",
      description: "Reindeer doctor with transformative abilities and pure heart",
      color: "from-pink-500 to-rose-500",
      image: "/lovable-uploads/dc1b72e4-9c02-4089-8f52-06ad8e360e06.png"
    },
    {
      id: 7,
      name: "Nico Robin",
      role: "Archaeologist",
      description: "Scholar seeking the true history with flower-flower fruit powers",
      color: "from-purple-500 to-violet-500",
      image: "/lovable-uploads/9acc0153-bb14-43ea-a124-5dab3571542e.png"
    },
    {
      id: 8,
      name: "Brook",
      role: "Musician",
      description: "Skeleton musician bringing joy and soul to the crew",
      color: "from-indigo-500 to-purple-500",
      image: "/lovable-uploads/ff796d81-99a2-4c7c-b744-92798828be94.png"
    }
  ];

  const getIcon = (role: string) => {
    switch (role) {
      case "Captain": return Crown;
      case "Swordsman": return Zap;
      case "Navigator": return Anchor;
      case "Sniper": case "Cook": case "Musician": return Star;
      case "Doctor": case "Archaeologist": return Heart;
      default: return Users;
    }
  };

  return (
    <section id="onepiece-characters" className="py-20 px-4 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e] relative overflow-hidden">
      {/* One Piece World Map Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src="/lovable-uploads/28b2b146-0483-4c6f-9178-a89ba5495e84.png"
          alt="One Piece World Map"
          className="w-full h-full object-cover scale-150 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Crown className="w-10 h-10 text-orange-500 animate-pulse-glow" />
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Straw Hat Crew
            </h2>
            <Anchor className="w-10 h-10 text-blue-500 animate-pulse-glow" />
          </div>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-orange-400 jp-text font-bold mb-2" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              麦わらの一味
            </p>
            <p className="text-gray-400 italic mb-6">(Mugiwara no Ichimi)</p>
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            Meet the legendary crew that inspires my journey to become the Digital Pirate King! 
            Each member represents the values I bring to every project - determination, skill, and unwavering loyalty.
          </p>
        </div>

        {/* Character Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {characters.map((character, index) => {
            const IconComponent = getIcon(character.role);
            
            return (
              <div
                key={character.id}
                className="group relative bg-[#1a1a1a]/90 backdrop-blur-sm rounded-2xl border-2 border-gray-700/50 hover:border-orange-500/50 overflow-hidden transition-all duration-500 hover:scale-105 shadow-2xl"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${character.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`} />
                
                {/* Character Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={character.image}
                    alt={character.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Role Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${character.color} rounded-full flex items-center justify-center shadow-xl opacity-90 group-hover:opacity-100 transition-opacity duration-500`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Character Info */}
                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                      {character.name}
                    </h3>
                    <span className={`px-3 py-1 bg-gradient-to-r ${character.color} text-white text-xs font-bold rounded-full shadow-lg`} style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                      {character.role}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                    {character.description}
                  </p>

                  {/* Stats/Skills Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Crew Bond</span>
                      <span>100%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 shadow-inner">
                      <div className={`h-full bg-gradient-to-r ${character.color} rounded-full animate-pulse shadow-lg`} style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>

                {/* Sparkle Effect */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping shadow-lg"></div>
                </div>

                {/* Border Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`} style={{ boxShadow: `0 0 20px ${character.color.includes('red') ? '#ef4444' : character.color.includes('green') ? '#22c55e' : character.color.includes('blue') ? '#3b82f6' : character.color.includes('purple') ? '#a855f7' : '#f97316'}` }}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-500/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Build Your Own Legendary Crew!
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Just like the Straw Hats, I believe in the power of teamwork, diverse skills, and shared dreams. 
              Let's create something legendary together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-orange-500/40" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
            >
              <Users className="w-5 h-5" />
              <span>Join the Adventure</span>
              <Crown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnePieceCharacters;
