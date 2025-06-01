import React, { useState, useEffect } from 'react';
import { Anchor, Compass, Sword, Users, Target, Zap } from 'lucide-react';
import JoinCrewForm from './JoinCrewForm';

const OnePieceSection = () => {
  const [activeCrewMember, setActiveCrewMember] = useState(0);
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

    const element = document.getElementById('onepiece-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const crewMembers = [
    {
      name: "The Captain",
      role: "AI Navigator",
      power: "Gomu Gomu no Code",
      description: "Leading the crew through uncharted digital waters, turning impossible dreams into reality with the power of artificial intelligence.",
      color: "from-red-500 to-orange-500",
      icon: Anchor,
      skills: ["Leadership", "AI/ML", "Vision"]
    },
    {
      name: "Technical Swordsman", 
      role: "Full-Stack Developer",
      power: "Three-Stack Style",
      description: "Mastering frontend, backend, and database with the precision of a legendary swordsman's three-sword technique.",
      color: "from-green-500 to-emerald-500",
      icon: Sword,
      skills: ["React", "Node.js", "Databases"]
    },
    {
      name: "Digital Navigator",
      role: "Data Scientist", 
      power: "Weather Prediction Algorithms",
      description: "Charting courses through complex data storms, predicting market trends like weather patterns on the Grand Line.",
      color: "from-blue-500 to-cyan-500",
      icon: Compass,
      skills: ["Data Analysis", "Machine Learning", "Statistics"]
    },
    {
      name: "Innovation Sniper",
      role: "Problem Solver",
      power: "Precision Debugging",
      description: "Taking down bugs from impossible distances with pinpoint accuracy and innovative solutions that never miss their mark.",
      color: "from-yellow-500 to-amber-500", 
      icon: Target,
      skills: ["Problem Solving", "Innovation", "Quality Assurance"]
    }
  ];

  const devilFruitPowers = [
    {
      name: "Code-Code Fruit",
      power: "Transform ideas into functional applications",
      mastery: 95
    },
    {
      name: "AI-AI Fruit", 
      power: "Harness machine learning algorithms",
      mastery: 90
    },
    {
      name: "Debug-Debug Fruit",
      power: "Instantly locate and fix any bug",
      mastery: 88
    },
    {
      name: "Scale-Scale Fruit",
      power: "Make applications handle massive loads",
      mastery: 85
    }
  ];

  return (
    <section id="onepiece-section" className="py-20 px-4 bg-gradient-to-b from-[#121212] to-[#1a1a1a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <Anchor className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Straw Hat Developer Crew
            </h2>
            <Anchor className="w-8 h-8 text-orange-500 scale-x-[-1]" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every great pirate needs a legendary crew. Meet the different roles I embody in my journey to become the King of Developers!
          </p>
        </div>

        {/* Crew Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {crewMembers.map((member, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transform transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${activeCrewMember === index ? 'scale-105' : 'hover:scale-105'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setActiveCrewMember(index)}
            >
              <div className={`relative p-6 rounded-2xl border-2 transition-all duration-300 min-h-[300px] ${
                activeCrewMember === index 
                  ? 'border-orange-500/60 shadow-2xl shadow-orange-500/20' 
                  : 'border-gray-700/50 hover:border-orange-500/40'
              }`}>
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-10 rounded-2xl`} />
                
                {/* Icon */}
                <div className="relative flex justify-center mb-4">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${member.color} shadow-lg`}>
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-400 font-semibold mb-2">{member.role}</p>
                  <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                    <p className="text-sm text-yellow-300 font-bold">Devil Fruit Power:</p>
                    <p className="text-red-400 font-semibold">{member.power}</p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.description}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Devil Fruit Powers Section */}
        <div className={`bg-gradient-to-r from-purple-900/30 to-red-900/30 rounded-3xl p-8 border-2 border-purple-500/30 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Zap className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Devil Fruit Mastery Levels
              </h3>
              <Zap className="w-8 h-8 text-purple-400" />
            </div>
            <p className="text-gray-300">The legendary powers I've awakened on my coding journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {devilFruitPowers.map((fruit, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-purple-300">{fruit.name}</h4>
                  <span className="text-2xl font-bold text-white">{fruit.mastery}%</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{fruit.power}</p>
                
                {/* Mastery bar */}
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out rounded-full shadow-lg shadow-purple-500/50"
                    style={{ width: isVisible ? `${fruit.mastery}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <JoinCrewForm />
      </div>
    </section>
  );
};

export default OnePieceSection;
