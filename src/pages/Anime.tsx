import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Sword, Eye, Zap, Flame, Shield, Star, Users, Crown, Target, Heart } from 'lucide-react';

const Anime = () => {
  const [activeAnime, setActiveAnime] = useState('onepiece');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "Anime World | Saikoushik Nalubola";
    setIsVisible(true);
  }, []);

  const animeContent = {
    onepiece: {
      title: "One Piece",
      subtitle: "The Pirate's Code of Development",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      icon: Crown,
      quotes: [
        {
          japanese: "海賊王に俺はなる！",
          english: "I'm gonna be King of the Pirates!",
          character: "Monkey D. Luffy",
          lesson: "Dream big and never give up on your goals"
        },
        {
          japanese: "仲間がいるから強くなれる",
          english: "We become stronger because we have friends",
          character: "Roronoa Zoro", 
          lesson: "Teamwork makes the dream work"
        }
      ],
      skills: [
        { name: "Gomu Gomu no Code", description: "Flexible programming that adapts to any challenge", mastery: 95 },
        { name: "Conqueror's Architecture", description: "Dominating system design with leadership", mastery: 90 },
        { name: "Devil Fruit: Debug-Debug", description: "Instantly finding and fixing any bug", mastery: 88 }
      ]
    },
    jujutsu: {
      title: "Jujutsu Kaisen", 
      subtitle: "Cursed Techniques in Tech",
      color: "from-purple-500 to-blue-500",
      bgColor: "from-purple-500/10 to-blue-500/10",
      icon: Eye,
      quotes: [
        {
          japanese: "呪術師は一人で死ぬものだ",
          english: "Jujutsu sorcerers die alone",
          character: "Gojo Satoru",
          lesson: "Individual excellence drives collective success"
        },
        {
          japanese: "俺は自分の正しさに確信を持っている",
          english: "I'm confident in my own righteousness",
          character: "Yuji Itadori",
          lesson: "Stand by your principles and code ethics"
        }
      ],
      skills: [
        { name: "Domain Expansion: Code Review", description: "Creating perfect debugging environments", mastery: 92 },
        { name: "Six Eyes: Bug Detection", description: "Seeing through any code issue instantly", mastery: 89 },
        { name: "Cursed Energy: AI Implementation", description: "Channeling machine learning power", mastery: 87 }
      ]
    },
    aot: {
      title: "Attack on Titan",
      subtitle: "Breaking Through Programming Barriers", 
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      icon: Shield,
      quotes: [
        {
          japanese: "自由のために戦う",
          english: "Fighting for freedom",
          character: "Eren Yeager",
          lesson: "Break free from limitations and legacy code"
        },
        {
          japanese: "人類の勝利だ！",
          english: "Victory for humanity!",
          character: "Levi Ackerman",
          lesson: "Precision and dedication lead to success"
        }
      ],
      skills: [
        { name: "Titan Form: Full-Stack", description: "Massive scalable application development", mastery: 91 },
        { name: "ODM Gear: DevOps", description: "Swift deployment and infrastructure management", mastery: 86 },
        { name: "Thunder Spear: Performance", description: "Explosive optimization techniques", mastery: 89 }
      ]
    },
    naruto: {
      title: "Naruto",
      subtitle: "The Way of the Code Ninja",
      color: "from-orange-400 to-yellow-500", 
      bgColor: "from-orange-400/10 to-yellow-500/10",
      icon: Star,
      quotes: [
        {
          japanese: "火影になってやる！",
          english: "I'm gonna be Hokage!",
          character: "Naruto Uzumaki", 
          lesson: "Lead by example and inspire your team"
        },
        {
          japanese: "仲間を守るためなら何でもする",
          english: "I'll do anything to protect my friends",
          character: "Sasuke Uchiha",
          lesson: "Protect your code and team members"
        }
      ],
      skills: [
        { name: "Shadow Clone Jutsu", description: "Parallel processing and multitasking", mastery: 88 },
        { name: "Rasengan Algorithm", description: "Spiral development methodology", mastery: 85 },
        { name: "Sage Mode: Architecture", description: "Balanced and natural system design", mastery: 90 }
      ]
    },
    demonslayer: {
      title: "Demon Slayer",
      subtitle: "Breathing Techniques for Clean Code",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10", 
      icon: Sword,
      quotes: [
        {
          japanese: "諦めるんじゃない！",
          english: "Don't give up!",
          character: "Tanjiro Kamado",
          lesson: "Persistence through debugging sessions"
        },
        {
          japanese: "心を燃やせ",
          english: "Set your heart ablaze",
          character: "Kyojuro Rengoku",
          lesson: "Code with passion and enthusiasm"
        }
      ],
      skills: [
        { name: "Water Breathing: Clean Code", description: "Flowing, readable, and efficient programming", mastery: 93 },
        { name: "Thunder Breathing: Fast Execution", description: "Lightning-quick algorithm optimization", mastery: 87 },
        { name: "Flame Breathing: Passionate Development", description: "Energetic and dedicated coding", mastery: 91 }
      ]
    },
    mha: {
      title: "My Hero Academia", 
      subtitle: "Plus Ultra Programming",
      color: "from-blue-500 to-green-500",
      bgColor: "from-blue-500/10 to-green-500/10",
      icon: Zap,
      quotes: [
        {
          japanese: "プルスウルトラ！",
          english: "Plus Ultra!",
          character: "All Might",
          lesson: "Always go beyond your limits"
        },
        {
          japanese: "君はヒーローになれる",
          english: "You can become a hero",
          character: "Izuku Midoriya",
          lesson: "Anyone can become a great developer with effort"
        }
      ],
      skills: [
        { name: "One For All: Leadership", description: "Inheriting and passing on knowledge", mastery: 89 },
        { name: "Detroit Smash: Problem Solving", description: "Powerful solutions to complex problems", mastery: 92 },
        { name: "Hero Analysis: Code Review", description: "Detailed understanding of strengths and weaknesses", mastery: 88 }
      ]
    }
  };

  const animeList = Object.keys(animeContent);

  return (
    <Layout>
      <div className="min-h-screen bg-[#121212] pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 py-16 text-center">
          <div className={`max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Anime Developer Dojo
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Where legendary anime wisdom meets modern programming mastery. Discover how iconic characters and their philosophies shape my approach to technology.
            </p>
          </div>
        </section>

        {/* Anime Navigation */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {animeList.map((anime) => {
                const content = animeContent[anime as keyof typeof animeContent];
                return (
                  <button
                    key={anime}
                    onClick={() => setActiveAnime(anime)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                      activeAnime === anime
                        ? `bg-gradient-to-r ${content.color} text-white shadow-xl transform scale-105`
                        : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <content.icon className="w-5 h-5" />
                    <span>{content.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active Anime Content */}
        <section className="px-4">
          <div className="max-w-6xl mx-auto">
            {animeList.map((anime) => {
              const content = animeContent[anime as keyof typeof animeContent];
              if (activeAnime !== anime) return null;

              return (
                <div key={anime} className="space-y-12">
                  {/* Anime Header */}
                  <div className={`text-center p-8 rounded-3xl bg-gradient-to-r ${content.bgColor} border-2 border-opacity-30`} style={{ borderColor: content.color.split(' ')[1] }}>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <content.icon className="w-12 h-12" style={{ color: content.color.split(' ')[1] }} />
                      <h2 className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${content.color} bg-clip-text text-transparent`}>
                        {content.title}
                      </h2>
                    </div>
                    <p className="text-xl text-gray-300">{content.subtitle}</p>
                  </div>

                  {/* Quotes Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.quotes.map((quote, index) => (
                      <div key={index} className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                        <div className="text-center mb-4">
                          <div className="text-2xl font-bold mb-2 font-mono" style={{ color: content.color.split(' ')[1] }}>
                            {quote.japanese}
                          </div>
                          <div className="text-lg text-gray-300 italic mb-2">
                            "{quote.english}"
                          </div>
                          <div className="text-orange-400 font-semibold">
                            — {quote.character}
                          </div>
                        </div>
                        <div className="bg-gray-800/50 rounded-lg p-4">
                          <p className="text-sm text-gray-400">
                            <span className="font-semibold text-gray-300">Programming Lesson:</span> {quote.lesson}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skills Section */}
                  <div className="bg-[#1a1a1a] rounded-3xl p-8 border-2 border-gray-700/50">
                    <h3 className={`text-3xl font-bold text-center mb-8 bg-gradient-to-r ${content.color} bg-clip-text text-transparent`}>
                      Special Abilities & Techniques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {content.skills.map((skill, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30">
                          <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                          <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                          
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-gray-300">Mastery Level</span>
                            <span className="text-lg font-bold text-white">{skill.mastery}%</span>
                          </div>
                          
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${content.color} transition-all duration-1000 ease-out rounded-full shadow-lg`}
                              style={{ 
                                width: `${skill.mastery}%`,
                                boxShadow: `0 0 10px ${content.color.split(' ')[1]}50`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border-2 border-purple-500/30">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Own Anime Journey?</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Let's combine the power of anime wisdom with cutting-edge technology to create something legendary!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-purple-500/30"
                >
                  <Heart className="w-5 h-5" />
                  <span>Join the Adventure</span>
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-purple-500 text-purple-300 font-bold rounded-xl hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                >
                  <Target className="w-5 h-5" />
                  <span>View Projects</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Anime;
