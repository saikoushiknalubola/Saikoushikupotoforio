
import React, { useState, useEffect } from 'react';
import { Crown, Sword, Compass, Anchor, Star } from 'lucide-react';

const GoldDRogerSection = () => {
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

    const element = document.getElementById('gold-d-roger');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gold-d-roger" className="min-h-screen py-20 px-4 bg-gradient-to-br from-[#1a0a0a] via-[#2d1810] to-[#4a2c17] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-600/20 via-transparent to-orange-600/20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Crown className="w-12 h-12 text-yellow-500 animate-pulse-glow" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 bg-clip-text text-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Gold D. Roger
            </h2>
            <Sword className="w-12 h-12 text-orange-500 animate-pulse-glow" />
          </div>
          
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-yellow-400 jp-text font-bold mb-2" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              海賊王
            </p>
            <p className="text-gray-400 italic mb-6">(Kaizoku-Ō - The Pirate King)</p>
          </div>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
            The legendary Pirate King who conquered the Grand Line and inspired a new age of pirates. 
            His legacy mirrors my journey to become the Digital Pirate King of development!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Roger's Image/Throne Section */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Throne Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/30 via-orange-600/20 to-red-600/30 rounded-3xl blur-xl animate-pulse" />
              
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-[#2d1810]/90 to-[#4a2c17]/90 backdrop-blur-sm rounded-2xl border-4 border-yellow-600/50 overflow-hidden shadow-2xl shadow-yellow-600/30">
                <img 
                  src="/lovable-uploads/8a2aa47c-02a2-43e1-b9df-a46bc8944565.png"
                  alt="Gold D. Roger - The Pirate King"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0a]/60 via-transparent to-transparent" />
                
                {/* Crown Icon Overlay */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl animate-pulse-glow">
                  <Crown className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-xl animate-float">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <Compass className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Portfolio Connection */}
            <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-yellow-600/20 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                My Digital Kingdom
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                Just as Roger conquered the Grand Line, I navigate the digital seas, building legendary applications 
                and leading development crews to new horizons. Every project is a treasure, every code commit a step closer to One Piece!
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-yellow-600/10 rounded-xl border border-yellow-600/20">
                  <div className="text-2xl font-bold text-yellow-400">∞</div>
                  <div className="text-sm text-gray-400">Dreams Coded</div>
                </div>
                <div className="text-center p-4 bg-orange-600/10 rounded-xl border border-orange-600/20">
                  <div className="text-2xl font-bold text-orange-400">100%</div>
                  <div className="text-sm text-gray-400">Dedication</div>
                </div>
              </div>
            </div>

            {/* Quote Section */}
            <div className="relative">
              <div className="bg-gradient-to-r from-red-600/10 to-yellow-600/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-red-600/20 shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full flex items-center justify-center shadow-xl flex-shrink-0">
                    <Crown className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <blockquote className="text-xl md:text-2xl font-bold text-yellow-200 mb-4 italic" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
                      "My code? If you want it, I'll let you have it. Look for it; I left all of it at that place!"
                    </blockquote>
                    <cite className="text-gray-400">— Saikoushik D. Nalubola, The Digital Pirate King</cite>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center">
              <a
                href="#projects"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-bold rounded-xl hover:from-yellow-500 hover:to-orange-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-yellow-600/40" 
                style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}
              >
                <Anchor className="w-5 h-5" />
                <span>Explore My Treasures</span>
                <Crown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoldDRogerSection;
