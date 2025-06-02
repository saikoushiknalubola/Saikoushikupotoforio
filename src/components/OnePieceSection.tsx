
import React, { useState, useEffect } from 'react';
import { Anchor, Crown, Star, Heart, Zap, Users, Map, Gift, Send } from 'lucide-react';
import JoinCrewForm from './JoinCrewForm';

const OnePieceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('one-piece-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const crewBenefits = [
    {
      title: "Epic Adventures Await",
      description: "Join me on legendary coding quests that'll challenge your skills and expand your horizons!",
      icon: Map,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Treasure Hunting (Opportunities)",
      description: "Discover amazing opportunities, collaborations, and projects that'll boost your career!",
      icon: Gift,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Nakama Power",
      description: "Build lasting friendships with fellow developers who share your passion for innovation!",
      icon: Heart,
      color: "from-pink-500 to-red-500"
    },
    {
      title: "Leveling Up Together",
      description: "Learn cutting-edge technologies and level up your skills alongside an ambitious crew!",
      icon: Zap,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="one-piece-section" className="py-20 px-4 bg-gradient-to-br from-[#0a1628] via-[#121212] to-[#2d1810] relative overflow-hidden">
      {/* One Piece Themed Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating treasure and adventure elements */}
        <div className="absolute top-20 left-10 w-24 h-24 opacity-20 animate-float">
          <Crown className="w-full h-full text-yellow-600" />
        </div>
        <div className="absolute bottom-32 right-16 w-20 h-20 opacity-25 animate-float" style={{ animationDelay: '2s' }}>
          <Anchor className="w-full h-full text-blue-500" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 opacity-15 animate-float" style={{ animationDelay: '1s' }}>
          <Star className="w-full h-full text-orange-500" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 w-18 h-18 opacity-30 animate-float" style={{ animationDelay: '3s' }}>
          <Gift className="w-full h-full text-yellow-500" />
        </div>
        
        {/* Background glow effects */}
        <div className="absolute top-40 left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Epic Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Anchor className="w-12 h-12 text-orange-500 animate-pulse-glow" />
            <h2 className="text-4xl md:text-7xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              Join My Crew!
            </h2>
            <Crown className="w-12 h-12 text-red-500 animate-pulse-glow" />
          </div>
          
          <div className="mb-8">
            <p className="text-3xl md:text-4xl text-orange-400 jp-text font-bold mb-2">
              俺の仲間になれ！
            </p>
            <p className="text-gray-400 italic mb-6">(Become My Nakama!)</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              Ahoy, future nakama! Just like Luffy gathered the most amazing crew to conquer the Grand Line, 
              I'm looking for incredible people to join my epic journey to revolutionize the tech world!
            </p>
            
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-orange-500/30 mb-12">
              <p className="text-lg text-gray-300 italic leading-relaxed">
                "A crew isn't just about having skilled people - it's about having people who believe in the same dream, 
                who'll fight alongside you through any storm, and who make the journey as incredible as the destination!"
              </p>
              <p className="text-orange-400 font-bold mt-4 text-xl">
                - Captain Saikoushik, Future Pirate King of Code
              </p>
            </div>
          </div>
        </div>

        {/* Crew Benefits */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Why Join the Straw Hat Developers?
            </h3>
            <p className="text-xl text-gray-300">
              Here's what awaits you on our legendary adventure!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {crewBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-orange-500/50 p-8 transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10 text-center">
                  <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center shadow-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>

                {/* Sparkle effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {!showForm ? (
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-12 border-2 border-orange-500/20">
              <div className="mb-8">
                <h3 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Ready to Set Sail?
                </h3>
                <p className="text-xl text-gray-300 mb-2">
                  冒険の準備はできましたか？
                </p>
                <p className="text-gray-400 italic mb-6">(Are you ready for adventure?)</p>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you're a seasoned developer looking for your next epic quest, a student eager to learn from a future Pirate King, 
                or just someone who believes in the power of dreams - there's a place for you in my crew!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl shadow-orange-500/40 text-lg"
                >
                  <Users className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Join My Crew!</span>
                  <Crown className="w-6 h-6 group-hover:animate-pulse" />
                </button>
                
                <a
                  href="/connect"
                  className="inline-flex items-center space-x-3 px-10 py-5 border-3 border-blue-500 text-blue-300 font-bold rounded-xl hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 text-lg"
                >
                  <Send className="w-6 h-6" />
                  <span>Direct Message</span>
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-400 italic">
                  "The best crews aren't formed by chance - they're brought together by shared dreams and unbreakable bonds!"
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-[#1a1a1a] rounded-3xl border-2 border-orange-500/30 p-8">
              <div className="mb-6 text-center">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Welcome to the Crew Application!
                </h3>
                <p className="text-gray-300">
                  Fill out this form and let's start our legendary adventure together!
                </p>
              </div>
              
              <JoinCrewForm />
              
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                >
                  ← Back to crew info
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OnePieceSection;
