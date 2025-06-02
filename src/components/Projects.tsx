
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Smartphone, Brain, Globe, Zap, Star, Users, Map, Treasure, Crown } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const legendaryAdventures = [
    {
      title: "Smart Finance Manager",
      islandName: "Money Island",
      description: "Conquered the treacherous waters of financial management! This legendary app helps pirates manage their treasure with AI-powered insights and smart budgeting.",
      bossDefeated: "Complex Financial Calculations",
      treasureFound: ["React Native", "Firebase", "Python", "TensorFlow", "Plaid API"],
      crewGrowth: "Team Leadership & AI Integration",
      githubUrl: "https://github.com/saikoushiknalubola",
      liveUrl: "https://smart-finance-demo.vercel.app",
      gradient: "from-green-600 to-emerald-600",
      icon: Treasure,
      category: "FinTech Adventure",
      bounty: "₹50,00,000"
    },
    {
      title: "AI Healthcare Assistant",
      islandName: "Medical Island",
      description: "Battled through the Grand Line of healthcare challenges! Revolutionary platform using machine learning to help doctors save more lives.",
      bossDefeated: "Medical Data Complexity",
      treasureFound: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
      crewGrowth: "AI Model Training & Healthcare Integration",
      githubUrl: "https://github.com/saikoushiknalubola",
      liveUrl: "https://healthcare-ai-demo.vercel.app",
      gradient: "from-blue-600 to-cyan-600",
      icon: Brain,
      category: "AI/ML Adventure",
      bounty: "₹1,00,00,000"
    },
    {
      title: "Blockchain Supply Chain",
      islandName: "Blockchain Island",
      description: "Navigated the dangerous waters of supply chain transparency! Built an unbreakable system that tracks every treasure from origin to destination.",
      bossDefeated: "Supply Chain Fraud",
      treasureFound: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      crewGrowth: "Blockchain Development & Smart Contracts",
      githubUrl: "https://github.com/saikoushiknalubola",
      liveUrl: "https://blockchain-supply.vercel.app",
      gradient: "from-purple-600 to-pink-600",
      icon: Globe,
      category: "Blockchain Adventure",
      bounty: "₹75,00,000"
    },
    {
      title: "VR Learning Platform",
      islandName: "Virtual Reality Island",
      description: "Discovered the secret of immersive education! This platform transforms boring lessons into epic adventures that students will never forget.",
      bossDefeated: "Traditional Learning Barriers",
      treasureFound: ["Unity", "C#", "WebRTC", "Node.js", "MongoDB"],
      crewGrowth: "VR Development & Educational Technology",
      githubUrl: "https://github.com/saikoushiknalubola",
      liveUrl: "https://vr-learning-demo.vercel.app",
      gradient: "from-orange-600 to-red-600",
      icon: Star,
      category: "VR/AR Adventure",
      bounty: "₹60,00,000"
    },
    {
      title: "Social Impact Hub",
      islandName: "Community Island",
      description: "United pirates from across the seas for a greater cause! Platform connecting volunteers with NGOs to create real change in the world.",
      bossDefeated: "Social Disconnection",
      treasureFound: ["React", "Express.js", "MongoDB", "Socket.io", "Stripe"],
      crewGrowth: "Community Building & Social Technology",
      githubUrl: "https://github.com/saikoushiknalubola",
      liveUrl: "https://social-impact-demo.vercel.app",
      gradient: "from-indigo-600 to-blue-600",
      icon: Users,
      category: "Social Impact Adventure",
      bounty: "₹40,00,000"
    },
    {
      title: "E-Commerce Platform",
      islandName: "Merchant Island",
      description: "Built the ultimate treasure trading post! Full-featured e-commerce platform that handles everything from tiny trinkets to legendary artifacts.",
      bossDefeated: "Complex Payment Systems",
      treasureFound: ["Next.js", "Stripe", "PostgreSQL", "Redis", "AWS"],
      crewGrowth: "Full-Stack Development & Payment Integration",
      githubUrl: "https://github.com/saikoushiknalubola",
      liveUrl: "https://ecommerce-demo.vercel.app",
      gradient: "from-yellow-600 to-orange-600",
      icon: Crown,
      category: "E-Commerce Adventure",
      bounty: "₹45,00,000"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[#121212] relative overflow-hidden">
      {/* One Piece Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Treasure map elements */}
        <div className="absolute top-1/4 right-1/4 opacity-10">
          <Map className="w-24 h-24 text-yellow-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Legendary Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Map className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Legendary Adventures
            </h2>
            <Treasure className="w-8 h-8 text-cyan-500" />
          </div>
          
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-blue-400 jp-text font-bold">
              伝説の冒険
            </p>
            <p className="text-gray-400 italic">(Legendary Adventures)</p>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every great pirate has legendary adventures! These are the islands I've conquered, the bosses I've defeated, 
            and the treasures I've discovered on my journey to become the King of Code!
          </p>
        </div>

        {/* Adventure Islands */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {legendaryAdventures.map((adventure, index) => (
            <div
              key={index}
              className={`group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 overflow-hidden transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Adventure background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${adventure.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Wanted Poster Style Header */}
              <div className="relative p-6 border-b border-gray-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${adventure.gradient} shadow-lg`}>
                      <adventure.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50">
                        {adventure.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">BOUNTY</div>
                    <div className="text-lg font-black text-yellow-400">{adventure.bounty}</div>
                  </div>
                </div>

                {/* Island Name */}
                <div className="mb-2">
                  <h4 className="text-sm text-blue-400 font-semibold">{adventure.islandName}</h4>
                </div>

                {/* Adventure Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {adventure.title}
                </h3>

                {/* Adventure Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {adventure.description}
                </p>
              </div>

              {/* Adventure Details */}
              <div className="p-6">
                {/* Boss Defeated */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                    <Crown className="w-4 h-4 mr-2" />
                    Boss Defeated:
                  </h5>
                  <p className="text-xs text-gray-400">{adventure.bossDefeated}</p>
                </div>

                {/* Treasure Found */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center">
                    <Treasure className="w-4 h-4 mr-2" />
                    Treasure Found:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {adventure.treasureFound.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Crew Growth */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Crew Growth:
                  </h5>
                  <p className="text-xs text-gray-400">{adventure.crewGrowth}</p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={adventure.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-gray-500/50"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-semibold">Treasure Map</span>
                  </a>
                  
                  <a
                    href={adventure.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-semibold">Set Sail!</span>
                  </a>
                </div>
              </div>

              {/* Adventure completion effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Adventure */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500/20">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready for the Next Adventure?
              </h3>
              <p className="text-xl text-gray-300 mb-2">
                次の冒険の準備はできましたか？
              </p>
              <p className="text-gray-400 italic mb-6">(Ready for the Next Adventure?)</p>
            </div>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              These legendary adventures are just the beginning! Just like Luffy's journey to become Pirate King, 
              my quest for coding mastery never ends. Let's set sail together and create the next epic story!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/30"
              >
                <Star className="w-5 h-5" />
                <span>Join My Crew!</span>
              </a>
              <a
                href="https://github.com/saikoushiknalubola"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-blue-500 text-blue-300 font-bold rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
              >
                <Map className="w-5 h-5" />
                <span>Explore All Islands</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
