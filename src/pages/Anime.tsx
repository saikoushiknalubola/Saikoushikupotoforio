
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Star, Heart, Zap, Crown, Compass, Anchor, Sword, Shield, Target, Gift } from 'lucide-react';

const Anime = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeAnime, setActiveAnime] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    document.title = "Anime World | Saikoushik's Epic Journey";
  }, []);

  const epicAnimeJourney = [
    {
      name: "One Piece",
      japaneseName: "ワンピース",
      status: "Eternal Inspiration",
      episodes: "1000+",
      inspiration: "Luffy's unwavering belief in his dreams taught me that no coding challenge is impossible. His 'never give up' spirit powers my development journey!",
      lifeLessons: "Friendship, Dreams, and Perseverance can overcome any obstacle",
      favoriteMoment: "When Luffy declares 'I'm gonna be King of the Pirates!' - that's the energy I bring to every project!",
      icon: Crown,
      gradient: "from-orange-500 to-red-500",
      quote: "A man's dream will never die! - Marshall D. Teach (but Luffy lives it!)"
    },
    {
      name: "Demon Slayer",
      japaneseName: "鬼滅の刃",
      status: "Breathing Mastery",
      episodes: "44",
      inspiration: "Tanjiro's breathing techniques inspire my coding 'breathing' - taking breaks, staying calm under pressure, and maintaining perfect focus during debugging sessions!",
      lifeLessons: "Hard work, family bonds, and never losing your humanity",
      favoriteMoment: "Hinokami Kagura dance - pure art in motion, just like elegant code!",
      icon: Sword,
      gradient: "from-red-500 to-purple-500",
      quote: "All I can do is work hard! That's the story of my life! - Tanjiro Kamado"
    },
    {
      name: "Attack on Titan",
      japaneseName: "進撃の巨人",
      status: "Freedom Fighter",
      episodes: "87",
      inspiration: "Eren's fight for freedom resonates with my battle against buggy code and system limitations. Sometimes you need to break walls to create something better!",
      lifeLessons: "Freedom has a price, and determination can change the world",
      favoriteMoment: "The basement revelation - mind-blowing plot twists like finding the perfect solution to a complex algorithm!",
      icon: Shield,
      gradient: "from-green-500 to-blue-500",
      quote: "I'll keep moving forward... until I destroy my enemies! - Eren Yeager"
    },
    {
      name: "Naruto",
      japaneseName: "ナルト",
      status: "Hokage Level",
      episodes: "720",
      inspiration: "Naruto's shadow clone jutsu is like my ability to multitask multiple projects. His determination to never abandon a teammate mirrors my commitment to never abandon a project!",
      lifeLessons: "Hard work beats talent, and bonds make you stronger",
      favoriteMoment: "Naruto vs Pain - protecting what's important with everything you've got!",
      icon: Star,
      gradient: "from-orange-500 to-yellow-500",
      quote: "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way! - Naruto Uzumaki"
    },
    {
      name: "Dragon Ball Z",
      japaneseName: "ドラゴンボールZ",
      status: "Super Saiyan Developer",
      episodes: "291",
      inspiration: "Goku's constant training to get stronger inspires my continuous learning. Each new technology I master is like achieving a new transformation level!",
      lifeLessons: "Always strive to be better than yesterday",
      favoriteMoment: "First Super Saiyan transformation - the power of breaking through your limits!",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      quote: "I am the hope of the universe! - Goku (and I'm the hope of bug-free code!)"
    },
    {
      name: "My Hero Academia",
      japaneseName: "僕のヒーローアカデミア",
      status: "Plus Ultra Coder",
      episodes: "155+",
      inspiration: "Deku's journey from powerless to powerful mirrors my coding journey. Plus Ultra isn't just a phrase - it's my development philosophy!",
      lifeLessons: "Anyone can be a hero with the right heart and effort",
      favoriteMoment: "Deku's first One For All - the moment potential becomes power!",
      icon: Heart,
      gradient: "from-green-500 to-teal-500",
      quote: "Sometimes I do feel like I'm a failure. But that doesn't mean I give up! - Izuku Midoriya"
    }
  ];

  const animeWisdom = [
    {
      title: "Code with Determination",
      anime: "One Piece",
      wisdom: "Like Luffy pursuing the One Piece, pursue your coding dreams with unwavering determination. Every bug is just another enemy to defeat on your journey to becoming the Pirate King of Programming!",
      icon: Target
    },
    {
      title: "Breathe Through Debugging",
      anime: "Demon Slayer",
      wisdom: "Channel Tanjiro's breathing techniques when debugging. Stay calm, focus your mind, and slice through errors with precision and patience.",
      icon: Sword
    },
    {
      title: "Break Through Limitations",
      anime: "Attack on Titan",
      wisdom: "Like breaking through the walls, don't let system limitations define what's possible. Fight for the freedom to innovate and create without boundaries.",
      icon: Shield
    },
    {
      title: "Never Give Up on Your Code",
      anime: "Naruto",
      wisdom: "Follow Naruto's ninja way - never abandon a project, never give up on finding a solution. Your coding ninja way should be persistence and loyalty to your craft.",
      icon: Star
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#121212] relative overflow-hidden">
        {/* Epic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 pt-24 pb-20 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Epic Hero Section */}
            <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center justify-center space-x-4 mb-8">
                <Star className="w-10 h-10 text-pink-500 animate-pulse-glow" />
                <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Anime World
                </h1>
                <Heart className="w-10 h-10 text-purple-500 animate-pulse-glow" />
              </div>
              
              <div className="mb-8">
                <p className="text-3xl md:text-4xl text-pink-400 jp-text font-bold mb-2">
                  アニメの世界
                </p>
                <p className="text-gray-400 italic mb-6">(The World of Anime)</p>
              </div>
              
              <div className="max-w-4xl mx-auto mb-12">
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                  Yo! Welcome to my epic anime world! Just like how Luffy was inspired by Shanks to become a pirate, 
                  these legendary anime have shaped who I am as a developer and as a person!
                </p>
                
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border-2 border-pink-500/30">
                  <p className="text-lg text-gray-300 italic">
                    "Every anime teaches us something about life, dreams, and never giving up. 
                    These stories fuel my passion for coding and remind me that with enough determination, 
                    any dream is possible - even becoming the King of the Pirates... I mean, King of Code!"
                  </p>
                  <p className="text-pink-400 font-bold mt-4">- Saikoushik, Future Pirate King of Programming</p>
                </div>
              </div>
            </div>

            {/* Legendary Anime Collection */}
            <div className={`mb-16 transform transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  My Legendary Anime Journey
                </h2>
                <p className="text-xl text-gray-300">
                  These are the anime that forged my developer spirit and shaped my coding philosophy!
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {epicAnimeJourney.map((anime, index) => (
                  <div
                    key={index}
                    className={`group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-pink-500/50 p-8 transition-all duration-500 hover:scale-105 cursor-pointer ${
                      activeAnime === index ? 'border-pink-500/70 shadow-2xl shadow-pink-500/20' : ''
                    }`}
                    onClick={() => setActiveAnime(index)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${anime.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative z-10">
                      {/* Anime Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${anime.gradient} shadow-2xl`}>
                            <anime.icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-purple-400">
                              {anime.name}
                            </h3>
                            <p className="text-gray-400 jp-text font-semibold">{anime.japaneseName}</p>
                            <div className="flex items-center space-x-4 mt-2">
                              <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                {anime.status}
                              </span>
                              <span className="text-xs text-gray-500">{anime.episodes} episodes</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Inspiration */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-pink-400 mb-3 flex items-center">
                          <Zap className="w-5 h-5 mr-2" />
                          Developer Inspiration:
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {anime.inspiration}
                        </p>
                      </div>

                      {/* Life Lessons */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
                          <Heart className="w-5 h-5 mr-2" />
                          Life Lessons:
                        </h4>
                        <p className="text-gray-300 text-sm italic">
                          {anime.lifeLessons}
                        </p>
                      </div>

                      {/* Favorite Moment */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
                          <Star className="w-5 h-5 mr-2" />
                          Epic Moment:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          {anime.favoriteMoment}
                        </p>
                      </div>

                      {/* Iconic Quote */}
                      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-600/30">
                        <p className="text-gray-300 italic text-sm mb-2">"{anime.quote}"</p>
                      </div>
                    </div>

                    {/* Hover effect sparkles */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Anime Wisdom Section */}
            <div className={`mb-16 transform transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Anime Coding Wisdom
                </h2>
                <p className="text-xl text-gray-300 mb-2">
                  アニメのコーディング知恵
                </p>
                <p className="text-gray-400 italic mb-6">(Anime Coding Wisdom)</p>
                <p className="text-lg text-gray-300">
                  Life lessons from legendary anime that every developer should know!
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {animeWisdom.map((wisdom, index) => (
                  <div
                    key={index}
                    className="group bg-[#1a1a1a] rounded-xl border-2 border-gray-700/50 hover:border-cyan-500/50 p-6 transition-all duration-500 hover:scale-105"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 shadow-lg">
                        <wisdom.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <h3 className="text-xl font-bold text-white">{wisdom.title}</h3>
                          <span className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                            {wisdom.anime}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {wisdom.wisdom}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Adventure */}
            <div className={`text-center transform transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-pink-500/20">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Join My Anime-Powered Coding Adventure!
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                  Ready to combine the power of anime inspiration with epic coding adventures?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-pink-500/30"
                  >
                    <Crown className="w-5 h-5" />
                    <span>Start Our Adventure!</span>
                  </a>
                  <a
                    href="/"
                    className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-purple-500 text-purple-300 font-bold rounded-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
                  >
                    <Compass className="w-5 h-5" />
                    <span>Back to Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Epic Anime Footer Quote */}
        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 backdrop-blur-sm border-t-2 border-orange-500/30 py-8">
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="mb-4">
              <Anchor className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <p className="text-2xl md:text-3xl text-orange-400 jp-text font-bold mb-2">
                海賊王に俺はなる！
              </p>
              <p className="text-gray-400 italic mb-4">(I'm gonna be King of the Pirates!)</p>
            </div>
            <p className="text-lg text-gray-300 italic leading-relaxed">
              "The journey of a thousand islands begins with a single dream. Just like Luffy's quest for One Piece, 
              my coding adventure is fueled by the belief that any dream is possible with enough determination, 
              friendship, and a heart that never gives up!"
            </p>
            <p className="text-orange-400 font-bold mt-4">
              - Saikoushik Nalubola, Future King of Code 👑
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Anime;
