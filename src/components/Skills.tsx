
import React, { useState, useEffect } from 'react';
import { Code, Database, Smartphone, Brain, Globe, Zap, FileText, Crown, Star, Anchor } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeHaki, setActiveHaki] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const hakiPowers = [
    {
      name: "Observation Haki",
      japaneseName: "見聞色の覇気",
      description: "The ability to sense and analyze data patterns, predict user behavior, and foresee potential bugs before they manifest!",
      realSkills: ["Data Analysis", "User Research", "Bug Prevention", "Performance Monitoring"],
      mastery: 95,
      color: "from-blue-500 to-cyan-500",
      icon: Brain
    },
    {
      name: "Armament Haki",
      japaneseName: "武装色の覇気",
      description: "Hardened coding skills that can break through any technical barrier and solve the most impossible problems!",
      realSkills: ["Problem Solving", "Debugging", "System Architecture", "Code Optimization"],
      mastery: 90,
      color: "from-gray-600 to-gray-800",
      icon: Zap
    },
    {
      name: "Conqueror's Haki",
      japaneseName: "覇王色の覇気",
      description: "The rare ability to lead teams, inspire innovation, and dominate technical challenges that make others give up!",
      realSkills: ["Team Leadership", "Project Management", "Innovation", "Technical Strategy"],
      mastery: 85,
      color: "from-purple-500 to-pink-500",
      icon: Crown
    }
  ];

  const devilFruitPowers = [
    {
      name: "Gomu Gomu no Programming",
      type: "Frontend Mastery",
      description: "My code stretches across all devices and platforms, adapting to any screen size or user need!",
      abilities: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular"],
      mastery: 92,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Mera Mera no Backend",
      type: "Server-Side Fire",
      description: "Burning through backend challenges with blazing fast APIs and rock-solid database architectures!",
      abilities: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"],
      mastery: 88,
      gradient: "from-red-500 to-yellow-500"
    },
    {
      name: "Goro Goro no AI",
      type: "Lightning Intelligence",
      description: "Harnessing the power of artificial intelligence to create solutions faster than lightning strikes!",
      abilities: ["Machine Learning", "TensorFlow", "PyTorch", "OpenAI", "Computer Vision", "NLP"],
      mastery: 85,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      name: "Suna Suna no Cloud",
      type: "Desert of Scalability",
      description: "Like sand, my applications can scale infinitely and adapt to any environment in the cloud!",
      abilities: ["AWS", "Docker", "Kubernetes", "CI/CD", "Microservices", "Serverless"],
      mastery: 80,
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  const grandLineSkills = [
    { name: "JavaScript/TypeScript", level: 95, island: "Logue Town" },
    { name: "React/Next.js", level: 92, island: "Whiskey Peak" },
    { name: "Python", level: 90, island: "Little Garden" },
    { name: "Node.js", level: 88, island: "Drum Island" },
    { name: "AI/ML", level: 85, island: "Alabasta" },
    { name: "PostgreSQL", level: 82, island: "Jaya" },
    { name: "AWS/Cloud", level: 80, island: "Skypiea" },
    { name: "Docker/K8s", level: 78, island: "Water 7" }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-[#121212] relative overflow-hidden">
      {/* Background One Piece Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Haki & Devil Fruit Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Star className="w-8 h-8 text-purple-500" />
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Haki & Devil Fruits
            </h2>
            <Crown className="w-8 h-8 text-cyan-500" />
          </div>
          
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-purple-400 jp-text font-bold">
              覇気と悪魔の実
            </p>
            <p className="text-gray-400 italic">(Haki & Devil Fruit Powers)</p>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Just like the strongest pirates in One Piece, I've mastered both Haki and Devil Fruit powers! 
            These are my legendary abilities that help me conquer any coding challenge!
          </p>
        </div>

        {/* Haki Powers */}
        <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Three Types of Haki Mastery
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {hakiPowers.map((haki, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-purple-500/50 p-8 transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setActiveHaki(index)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${haki.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${haki.color} rounded-full flex items-center justify-center shadow-2xl mb-4`}>
                      <haki.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-2">{haki.name}</h4>
                    <p className="text-sm text-gray-400 jp-text">{haki.japaneseName}</p>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {haki.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Mastery Level</span>
                      <span>{haki.mastery}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${haki.mastery}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-3">Real-World Applications:</h5>
                    <div className="flex flex-wrap gap-2">
                      {haki.realSkills.map((skill, skillIndex) => (
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
        </div>

        {/* Devil Fruit Powers */}
        <div className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Devil Fruit Encyclopedia
            </h3>
            <p className="text-gray-300">My legendary technical abilities that defy the laws of conventional programming!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {devilFruitPowers.map((fruit, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-orange-500/50 p-8 transition-all duration-500 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${fruit.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${fruit.gradient} shadow-lg`}>
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{fruit.name}</h4>
                        <p className="text-sm text-gray-400">{fruit.type}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {fruit.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Devil Fruit Mastery</span>
                      <span>{fruit.mastery}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${fruit.mastery}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-gray-300 mb-3">Special Abilities:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {fruit.abilities.map((ability, abilityIndex) => (
                        <span 
                          key={abilityIndex}
                          className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50 text-center"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grand Line Progress */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Grand Line Journey Progress
              </h3>
              <p className="text-gray-300 mb-2">
                グランドライン進歩
              </p>
              <p className="text-gray-400 italic mb-4">(Grand Line Progress)</p>
              <p className="text-gray-300">
                Each skill represents an island I've conquered on my journey through the Grand Line of programming!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {grandLineSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-[#1a1a1a] rounded-xl border border-gray-700/50">
                  <div className="flex-shrink-0">
                    <Anchor className="w-6 h-6 text-blue-400" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="text-white font-semibold">{skill.name}</span>
                        <span className="text-xs text-gray-500 ml-2">({skill.island})</span>
                      </div>
                      <span className="text-sm text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-300 italic">
                "The skills I've gained aren't just tools - they're the power to make dreams come true!" - Future Pirate King of Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
