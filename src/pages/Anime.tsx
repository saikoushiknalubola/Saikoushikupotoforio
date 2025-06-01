
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Sword, Eye, Zap, Flame, Shield, Star, Users, Crown, Target, Heart, Anchor } from 'lucide-react';

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
      subtitle: "海賊王への道 - The Path to Pirate King",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      icon: Crown,
      quotes: [
        {
          japanese: "海賊王に俺はなる！",
          english: "I'm gonna be King of the Pirates!",
          character: "Monkey D. Luffy",
          lesson: "Just like how I declared I'd become Pirate King, every great developer needs an impossible dream to chase! 🍖"
        },
        {
          japanese: "仲間がいるから強くなれる",
          english: "We become stronger because we have friends",
          character: "Roronoa Zoro", 
          lesson: "My crew taught me that coding alone is boring! The best applications are built with nakama who share your dreams! 👒"
        }
      ],
      skills: [
        { name: "Gomu Gomu no Code", description: "My rubber powers let me stretch my code to handle any challenge - just like my body!", mastery: 95 },
        { name: "Conqueror's Architecture", description: "I dominate system design like I dominate battles - with pure willpower!", mastery: 90 },
        { name: "Devil Fruit: Debug-Debug", description: "Ate the Debug-Debug fruit - now I can instantly find any bug and punch it away!", mastery: 88 }
      ]
    },
    jujutsu: {
      title: "Jujutsu Kaisen", 
      subtitle: "呪術と技術 - Cursed Techniques in Tech",
      color: "from-purple-500 to-blue-500",
      bgColor: "from-purple-500/10 to-blue-500/10",
      icon: Eye,
      quotes: [
        {
          japanese: "呪術師は一人で死ぬものだ",
          english: "Jujutsu sorcerers die alone",
          character: "Gojo Satoru",
          lesson: "Sometimes you gotta code alone in the darkness, but that's when you become the strongest! Like Gojo-sensei!"
        },
        {
          japanese: "俺は自分の正しさに確信を持っている",
          english: "I'm confident in my own righteousness",
          character: "Yuji Itadori",
          lesson: "Stand by your code like Yuji stands by his friends - even if everyone thinks you're crazy!"
        }
      ],
      skills: [
        { name: "Domain Expansion: Code Review", description: "Create perfect debugging environments where no bug can escape", mastery: 92 },
        { name: "Six Eyes: Bug Detection", description: "See through any code issue like Gojo sees through cursed energy", mastery: 89 },
        { name: "Cursed Energy: AI Implementation", description: "Channel machine learning power like cursed techniques", mastery: 87 }
      ]
    },
    aot: {
      title: "Attack on Titan",
      subtitle: "自由への戦い - Fighting for Freedom", 
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      icon: Shield,
      quotes: [
        {
          japanese: "自由のために戦う",
          english: "Fighting for freedom",
          character: "Eren Yeager",
          lesson: "Break free from bad legacy code like Eren breaks free from the walls! Fight for coding freedom!"
        },
        {
          japanese: "人類の勝利だ！",
          english: "Victory for humanity!",
          character: "Levi Ackerman",
          lesson: "Clean code with the precision of Levi's blade work - every line matters in the fight against bugs!"
        }
      ],
      skills: [
        { name: "Titan Form: Full-Stack", description: "Transform into a massive development force that can build anything", mastery: 91 },
        { name: "ODM Gear: DevOps", description: "Swift deployment like flying through the air with ODM gear", mastery: 86 },
        { name: "Thunder Spear: Performance", description: "Explosive optimization that destroys performance bottlenecks", mastery: 89 }
      ]
    },
    naruto: {
      title: "Naruto",
      subtitle: "忍の道 - The Way of the Code Ninja",
      color: "from-orange-400 to-yellow-500", 
      bgColor: "from-orange-400/10 to-yellow-500/10",
      icon: Star,
      quotes: [
        {
          japanese: "火影になってやる！",
          english: "I'm gonna be Hokage!",
          character: "Naruto Uzumaki", 
          lesson: "Lead your development team like the Hokage leads the village - with unwavering determination!"
        },
        {
          japanese: "仲間を守るためなら何でもする",
          english: "I'll do anything to protect my friends",
          character: "Sasuke Uchiha",
          lesson: "Protect your codebase and team like you'd protect your precious people - that's the ninja way!"
        }
      ],
      skills: [
        { name: "Shadow Clone Jutsu", description: "Parallel processing like creating multiple shadow clones to code faster", mastery: 88 },
        { name: "Rasengan Algorithm", description: "Spiral development methodology that concentrates power in small iterations", mastery: 85 },
        { name: "Sage Mode: Architecture", description: "Balanced system design that harmonizes with natural coding patterns", mastery: 90 }
      ]
    },
    demonslayer: {
      title: "Demon Slayer",
      subtitle: "呼吸法とコード - Breathing Techniques for Clean Code",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-500/10 to-pink-500/10", 
      icon: Sword,
      quotes: [
        {
          japanese: "諦めるんじゃない！",
          english: "Don't give up!",
          character: "Tanjiro Kamado",
          lesson: "Never give up during those long debugging sessions - persistence is the key to victory!"
        },
        {
          japanese: "心を燃やせ",
          english: "Set your heart ablaze",
          character: "Kyojuro Rengoku",
          lesson: "Code with the burning passion of Rengoku - let your enthusiasm fuel your development!"
        }
      ],
      skills: [
        { name: "Water Breathing: Clean Code", description: "Flowing, readable code that moves like water through any system", mastery: 93 },
        { name: "Thunder Breathing: Fast Execution", description: "Lightning-quick algorithm optimization in a single breath", mastery: 87 },
        { name: "Flame Breathing: Passionate Development", description: "Energetic coding that burns through challenges", mastery: 91 }
      ]
    },
    mha: {
      title: "My Hero Academia", 
      subtitle: "プラスウルトラ開発 - Plus Ultra Development",
      color: "from-blue-500 to-green-500",
      bgColor: "from-blue-500/10 to-green-500/10",
      icon: Zap,
      quotes: [
        {
          japanese: "プルスウルトラ！",
          english: "Plus Ultra!",
          character: "All Might",
          lesson: "Always push beyond your coding limits - that's what it means to be a true hero developer!"
        },
        {
          japanese: "君はヒーローになれる",
          english: "You can become a hero",
          character: "Izuku Midoriya",
          lesson: "Anyone can become a legendary developer with enough training and heart - just like Deku!"
        }
      ],
      skills: [
        { name: "One For All: Leadership", description: "Inherit knowledge from mentors and pass it on to the next generation", mastery: 89 },
        { name: "Detroit Smash: Problem Solving", description: "Powerful solutions that smash through the toughest coding challenges", mastery: 92 },
        { name: "Hero Analysis: Code Review", description: "Detailed understanding of code strengths and weaknesses", mastery: 88 }
      ]
    }
  };

  const animeList = Object.keys(animeContent);

  return (
    <Layout>
      <div className="min-h-screen bg-[#121212] pt-24 pb-16">
        {/* Hero Section with Luffy's perspective */}
        <section className="px-4 py-16 text-center relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className={`max-w-4xl mx-auto relative z-10 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Anchor className="w-8 h-8 text-orange-500 animate-pulse" />
              <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                俺のアニメ道場
              </h1>
              <Anchor className="w-8 h-8 text-orange-500 animate-pulse scale-x-[-1]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              My Anime Developer Dojo
            </h2>
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6 mb-8">
              <p className="text-xl text-gray-300 leading-relaxed italic">
                "Yosh! Welcome to my dojo, nakama! 🍖 I'm Monkey D. Luffy, and this is where I learned all my coding techniques! 
                Every great pirate... I mean developer... needs legendary inspiration from the best anime! 
                These shows taught me that with enough guts, meat, and friendship, you can code anything! 
                <span className="text-orange-400 font-bold"> Let's set sail through the Grand Line of Programming together!</span>"
              </p>
              <p className="text-orange-400 text-lg mt-4 font-bold">
                — 船長ルフィ (Captain Luffy) 👒
              </p>
            </div>
            <p className="text-lg text-gray-400">
              各アニメの教えでコーディングの技を磨いた道場 <br/>
              <span className="text-sm">(The dojo where I honed my coding skills through anime teachings)</span>
            </p>
          </div>
        </section>

        {/* Anime Navigation */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-orange-400 mb-2">選択してください！(Choose your anime!)</h3>
              <p className="text-gray-400">Each anime taught me different coding techniques!</p>
            </div>
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
                        : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 hover:scale-105'
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
                  <div className={`text-center p-8 rounded-3xl bg-gradient-to-r ${content.bgColor} border-2 border-opacity-30 backdrop-blur-sm`}>
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <content.icon className={`w-12 h-12 text-orange-500`} />
                      <div>
                        <h2 className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${content.color} bg-clip-text text-transparent`}>
                          {content.title}
                        </h2>
                        <p className="text-lg text-gray-300 mt-2">{content.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quotes Section with Luffy's commentary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.quotes.map((quote, index) => (
                      <div key={index} className="bg-[#1a1a1a] rounded-2xl p-6 border-2 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                        <div className="text-center mb-4">
                          <div className={`text-2xl font-bold mb-2 font-mono text-orange-400`}>
                            {quote.japanese}
                          </div>
                          <div className="text-lg text-gray-300 italic mb-2">
                            "{quote.english}"
                          </div>
                          <div className="text-orange-400 font-semibold">
                            — {quote.character}
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20">
                          <p className="text-sm text-gray-300">
                            <span className="font-semibold text-orange-400">Luffy's Lesson:</span> {quote.lesson}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Skills Section */}
                  <div className="bg-[#1a1a1a] rounded-3xl p-8 border-2 border-gray-700/50">
                    <h3 className={`text-3xl font-bold text-center mb-2 bg-gradient-to-r ${content.color} bg-clip-text text-transparent`}>
                      俺の必殺技！(My Special Techniques!)
                    </h3>
                    <p className="text-center text-gray-400 mb-8">The coding powers I learned from this anime!</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {content.skills.map((skill, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300">
                          <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                          <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                          
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-gray-300">習得レベル (Mastery)</span>
                            <span className="text-lg font-bold text-orange-400">{skill.mastery}%</span>
                          </div>
                          
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${content.color} transition-all duration-1000 ease-out rounded-full shadow-lg`}
                              style={{ 
                                width: `${skill.mastery}%`,
                                boxShadow: `0 0 10px rgba(249, 115, 22, 0.5)`
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
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl p-8 border-2 border-orange-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-4">仲間になろう！(Join My Crew!)</h3>
              <p className="text-gray-300 mb-6 text-lg">
                "Hey! Want to join my coding crew? We'll sail the Grand Line of Programming together and find the One Piece of perfect code! 
                With friendship, determination, and lots of meat, we can build anything! 🍖👒"
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/30"
                >
                  <Heart className="w-5 h-5" />
                  <span>Join the Adventure!</span>
                </a>
                <a
                  href="/#projects"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-orange-500 text-orange-300 font-bold rounded-xl hover:bg-orange-500/10 transition-all duration-300 hover:scale-105"
                >
                  <Target className="w-5 h-5" />
                  <span>View My Treasures</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Anime Footer Quote */}
        <footer className="px-4 py-8 border-t border-orange-500/20 bg-gradient-to-r from-orange-500/5 to-red-500/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-[#1a1a1a]/80 rounded-2xl p-6 border border-orange-500/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-orange-400 mb-2 font-mono">
                "夢は叶えるもんじゃない。叶うものなんだ。"
              </div>
              <div className="text-lg text-gray-300 italic mb-3">
                "Dreams don't come true by themselves. You make them come true."
              </div>
              <div className="text-orange-400 font-semibold mb-4">
                — ワンピース (One Piece)
              </div>
              <p className="text-sm text-gray-400">
                The ultimate lesson from the Grand Line: <span className="text-orange-400">Never stop chasing your dreams, nakama!</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Anime;
