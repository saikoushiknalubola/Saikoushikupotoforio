
import React, { useState, useEffect } from 'react';
import { User, Anchor, Star, Zap, Heart, Crown, Compass, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const storyPanels = [
    {
      title: "The Dream Begins",
      icon: Star,
      content: "Just like Luffy left Windmill Village, I started my coding journey with a simple dream - to create something that would change the world! Every line of code is a step closer to my goal!",
      bgColor: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30"
    },
    {
      title: "Gathering My Crew",
      icon: Heart,
      content: "A great pirate needs an amazing crew! I've learned to work with incredible teams, each bringing unique skills to our adventures. Together, we've conquered impossible projects!",
      bgColor: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "Devil Fruit Powers",
      icon: Zap,
      content: "I discovered my 'devil fruit' abilities in AI and Machine Learning! These powers help me solve problems that others think are impossible. My Gomu Gomu no Programming stretches beyond limits!",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      title: "The Grand Line Adventure",
      icon: Compass,
      content: "Entering the dangerous waters of enterprise development and AI innovation! Each project is like a new island with unique challenges, treasures to discover, and skills to master!",
      bgColor: "from-green-500/20 to-teal-500/20",
      borderColor: "border-green-500/30"
    }
  ];

  const nakamaPrinciples = [
    {
      title: "Never Give Up",
      description: "Like Luffy, I believe every problem has a solution. I keep coding until I find it!",
      icon: Target
    },
    {
      title: "Protect My Crew",
      description: "Team success is my success. I always support my fellow developers and teammates.",
      icon: Heart
    },
    {
      title: "Adventure First",
      description: "I love exploring new technologies and pushing boundaries. Every project is an adventure!",
      icon: Compass
    },
    {
      title: "Dream Big",
      description: "My goal isn't just to be a good developer - it's to revolutionize how we think about tech!",
      icon: Crown
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[#121212] relative overflow-hidden">
      {/* Background One Piece Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-red-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Manga-Style Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <User className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Origin Story
            </h2>
            <Anchor className="w-8 h-8 text-red-500" />
          </div>
          <div className="text-center mb-6">
            <p className="text-2xl md:text-3xl text-orange-400 jp-text font-bold">
              俺の物語
            </p>
            <p className="text-gray-400 italic">(My Story)</p>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every great pirate has an epic origin story! Here's mine - from a small village dreamer to the future King of Code!
          </p>
        </div>

        {/* Manga Panel Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {storyPanels.map((panel, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${panel.bgColor} rounded-2xl border-2 ${panel.borderColor} p-8 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
                onClick={() => setActiveStory(index)}
              >
                {/* Manga panel border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
                      <panel.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{panel.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {panel.content}
                  </p>
                  
                  {/* Manga speech bubble effect */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-black font-black text-sm">!</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nakama Philosophy */}
        <div className={`mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Nakama Philosophy
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              仲間 - The bonds that make us stronger than any code!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nakamaPrinciples.map((principle, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-xl border-2 border-gray-700/50 hover:border-blue-500/50 p-6 transition-all duration-500 hover:scale-105"
              >
                <div className="text-center">
                  <div className="mb-4 mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <principle.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{principle.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{principle.description}</p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Adventure Stats */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-500/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Adventure Statistics
              </h3>
              <p className="text-gray-300">My journey in numbers - Luffy style!</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-orange-400 mb-2">500+</div>
                <div className="text-gray-300 font-semibold">Battles Won</div>
                <div className="text-xs text-gray-500">(Problems Solved)</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">50+</div>
                <div className="text-gray-300 font-semibold">Islands Explored</div>
                <div className="text-xs text-gray-500">(Projects Completed)</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">10+</div>
                <div className="text-gray-300 font-semibold">Crew Members</div>
                <div className="text-xs text-gray-500">(Technologies Mastered)</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">∞</div>
                <div className="text-gray-300 font-semibold">Dreams</div>
                <div className="text-xs text-gray-500">(Ambition Level)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
