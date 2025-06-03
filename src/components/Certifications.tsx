
import React, { useState, useEffect } from 'react';
import { Award, Trophy, Crown, Star, Users, Lightbulb, Target, TrendingUp } from 'lucide-react';

const Certifications = () => {
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

    const element = document.getElementById('certifications');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: "AI/ML Engineering Certification",
      organization: "Google Cloud Platform",
      year: "2024",
      description: "Advanced machine learning and AI model deployment on cloud infrastructure",
      icon: Award,
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Full Stack Development",
      organization: "Meta (Facebook)",
      year: "2023",
      description: "Complete web development stack with React, Node.js, and databases",
      icon: Trophy,
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Entrepreneurship Essentials",
      organization: "Stanford Online",
      year: "2023",
      description: "Business strategy, venture capital, and startup fundamentals",
      icon: Crown,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "AWS Solutions Architect",
      organization: "Amazon Web Services",
      year: "2024",
      description: "Cloud architecture design and implementation best practices",
      icon: Star,
      color: "from-orange-600 to-red-600"
    }
  ];

  const leadershipAchievements = [
    {
      title: "Tech Community Leader",
      description: "Founded and led a developer community of 1000+ members",
      metric: "1000+ Members",
      icon: Users
    },
    {
      title: "Innovation Workshop Facilitator",
      description: "Conducted 15+ workshops on AI and entrepreneurship",
      metric: "15+ Workshops",
      icon: Lightbulb
    },
    {
      title: "Startup Pitch Champion",
      description: "Won multiple pitch competitions with innovative solutions",
      metric: "5+ Wins",
      icon: Target
    },
    {
      title: "Mentorship Program Director",
      description: "Mentored 50+ aspiring developers and entrepreneurs",
      metric: "50+ Mentees",
      icon: TrendingUp
    }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-20 px-4 bg-gradient-to-br from-[#0a1628] via-[#121212] to-[#2d1810] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="absolute top-1/4 right-1/4 opacity-10">
          <Award className="w-16 sm:w-24 h-16 sm:h-24 text-blue-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 animate-pulse-glow" />
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
              Certifications & Leadership
            </h2>
            <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 animate-pulse-glow" />
          </div>
          
          <div className="mb-6">
            <p className="text-xl sm:text-2xl md:text-3xl text-blue-400 jp-text font-bold">
              資格と指導力
            </p>
            <p className="text-gray-400 italic">(Qualifications and Leadership)</p>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Just like every great captain needs to prove their worth through trials and leadership, 
            I've earned my credentials and led crews to victory! These are my badges of honor on the journey to becoming the ultimate tech revolutionary!
          </p>
        </div>

        {/* Certifications Grid */}
        <div className={`mb-12 sm:mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professional Certifications
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              Earned through dedication and countless hours of learning!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-blue-500/50 p-6 sm:p-8 transition-all duration-500 hover:scale-105"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${cert.color} shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400">
                        {cert.title}
                      </h3>
                      <p className="text-sm sm:text-base text-blue-400 font-semibold">{cert.organization}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{cert.year}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {cert.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Achievements */}
        <div className={`mb-12 sm:mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent">
              Leadership & Entrepreneurship
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              Leading crews and inspiring the next generation of innovators!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {leadershipAchievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-[#1a1a1a] rounded-xl border-2 border-gray-700/50 hover:border-purple-500/50 p-4 sm:p-6 transition-all duration-500 hover:scale-105 text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 group-hover:from-purple-500/10 group-hover:to-orange-500/10 transition-all duration-500 rounded-xl" />
                
                <div className="relative z-10">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-2xl sm:text-3xl font-black text-purple-400 mb-2">{achievement.metric}</div>
                  <h4 className="text-lg font-bold text-white mb-3">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-blue-500/20">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Learn and Lead Together?
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-2">
                一緒に学び、導きませんか？
              </p>
              <p className="text-gray-400 italic mb-6">(Shall we learn and lead together?)</p>
            </div>
            
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              Whether you're looking to get certified, develop leadership skills, or start your entrepreneurial journey - 
              let's navigate these challenging waters together and achieve greatness!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/30"
              >
                <Crown className="w-5 h-5" />
                <span>Let's Lead Together!</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
