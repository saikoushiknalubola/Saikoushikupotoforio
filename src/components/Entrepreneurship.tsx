
import React, { useState, useEffect } from 'react';
import { Crown, Zap, Users, Target, Lightbulb, TrendingUp, Award, Handshake, Rocket, Star } from 'lucide-react';

const Entrepreneurship = () => {
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

    const element = document.getElementById('entrepreneurship');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const entrepreneurshipHaki = [
    {
      title: "Conqueror's Haki",
      subtitle: "Startup Vision & Leadership",
      description: "Leading teams and inspiring innovation with an unshakeable vision for the future of technology.",
      icon: Crown,
      color: "from-purple-600 to-pink-600",
      achievements: ["Led multiple startup initiatives", "Built and managed diverse teams", "Developed product roadmaps"]
    },
    {
      title: "Armament Haki", 
      subtitle: "Business Strategy & Execution",
      description: "Hardening ideas into reality through strategic planning, market analysis, and flawless execution.",
      icon: Target,
      color: "from-blue-600 to-cyan-600",
      achievements: ["Market research & validation", "Business model development", "Go-to-market strategies"]
    },
    {
      title: "Observation Haki",
      subtitle: "Innovation & Problem Solving",
      description: "Sensing market opportunities and emerging trends before others, turning insights into breakthrough solutions.",
      icon: Lightbulb,
      color: "from-yellow-600 to-orange-600",
      achievements: ["Identified AI market opportunities", "Created innovative tech solutions", "Patent applications filed"]
    },
    {
      title: "Future Sight",
      subtitle: "Growth & Scaling",
      description: "Predicting market movements and scaling ventures with precision timing and strategic partnerships.",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-600",
      achievements: ["Scaled user base by 300%", "Secured strategic partnerships", "Revenue growth optimization"]
    }
  ];

  const entrepreneurialAchievements = [
    {
      title: "Startup Pitch Champion",
      description: "Won multiple startup pitch competitions with innovative AI solutions",
      icon: Award,
      metric: "5+ Wins"
    },
    {
      title: "Community Builder",
      description: "Built and led tech communities with 1000+ active developers",
      icon: Users,
      metric: "1000+ Members"
    },
    {
      title: "Innovation Leader",
      description: "Launched multiple products that gained significant market traction",
      icon: Rocket,
      metric: "3+ Products"
    },
    {
      title: "Strategic Partnerships",
      description: "Established key partnerships with industry leaders and investors",
      icon: Handshake,
      metric: "10+ Partners"
    }
  ];

  return (
    <section id="entrepreneurship" className="py-12 sm:py-20 px-4 bg-gradient-to-br from-[#0a1628] via-[#121212] to-[#2d1810] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="absolute top-1/4 right-1/4 opacity-10">
          <Crown className="w-16 sm:w-24 h-16 sm:h-24 text-purple-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 animate-pulse-glow" />
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Entrepreneurship Haki
            </h2>
            <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500 animate-pulse-glow" />
          </div>
          
          <div className="mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-purple-400 jp-text font-bold">
              起業家の覇気
            </p>
            <p className="text-gray-400 italic">(Entrepreneur's Fighting Spirit)</p>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Just like the most powerful pirates possess Haki, every great entrepreneur needs special abilities! 
            These are my entrepreneurial superpowers that help me navigate the treacherous waters of startups and innovation!
          </p>
        </div>

        {/* Haki Abilities */}
        <div className={`mb-12 sm:mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {entrepreneurshipHaki.map((haki, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-purple-500/50 p-6 sm:p-8 transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${haki.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${haki.color} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <haki.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400">
                        {haki.title}
                      </h3>
                      <h4 className="text-sm sm:text-base text-purple-400 font-semibold">{haki.subtitle}</h4>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                    {haki.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h5 className="text-sm font-semibold text-yellow-400 mb-3">Key Achievements:</h5>
                    {haki.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs sm:text-sm text-gray-400">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className={`mb-12 sm:mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Legendary Entrepreneurial Victories
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              Each victory makes me stronger for the next adventure!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {entrepreneurialAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-xl border-2 border-gray-700/50 hover:border-orange-500/50 p-4 sm:p-6 transition-all duration-500 hover:scale-105 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500 rounded-xl" />
                
                <div className="relative z-10">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-2xl sm:text-3xl font-black text-orange-400 mb-2">{achievement.metric}</div>
                  <h4 className="text-lg font-bold text-white mb-3">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-purple-500/20">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
                Ready to Build the Future Together?
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-2">
                一緒に未来を築きませんか？
              </p>
              <p className="text-gray-400 italic mb-6">(Shall we build the future together?)</p>
            </div>
            
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              Whether you're a fellow entrepreneur, investor, or someone with a crazy idea that could change the world - 
              let's combine our Haki and create something legendary!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-orange-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-orange-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/30"
              >
                <Crown className="w-5 h-5" />
                <span>Let's Conquer Markets!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurship;
