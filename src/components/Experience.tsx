
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronRight, Star, Award, Rocket } from 'lucide-react';

interface ExperienceItem {
  company: string;
  companyJp: string;
  role: string;
  period: string;
  description: React.ReactNode;
  achievements: string[];
  isActive?: boolean;
  kanji?: string;
  level?: number;
  skillGain?: string;
}

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    setAnimateIn(true);
    
    // Create particles for decoration
    const createParticles = () => {
      const container = document.querySelector('.experience-section');
      if (!container) return;
      
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('experience-particle');
        
        // Randomize size
        const size = Math.random() * 20 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Randomize position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Randomize animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        
        container.appendChild(particle);
      }
    };
    
    createParticles();
    
    return () => {
      const container = document.querySelector('.experience-section');
      if (container) {
        const particles = container.querySelectorAll('.experience-particle');
        particles.forEach(p => p.remove());
      }
    };
  }, []);
  
  // Transition effect when changing active experience
  const handleExperienceChange = (index: number) => {
    setAnimateIn(false);
    setTimeout(() => {
      setActiveIndex(index);
      setAnimateIn(true);
    }, 300);
  };
  
  const experiences: ExperienceItem[] = [
    {
      company: "Mercedes-Benz Research & Development India",
      companyJp: "メルセデス・ベンツ",
      role: "Cohort Member - Climate Tech Incubator",
      period: "Dec 2024 - Present",
      description: (
        <p>
          Founded <span className="text-anime-amber font-medium">Revithalize</span>, a startup developing modular EV retrofitting kits for sustainability.
        </p>
      ),
      achievements: [
        "Founded Revithalize, a startup developing modular EV retrofitting kits for sustainability.",
        "Secured selection in the Climate Tech Incubator, refining product strategy and business scalability.",
        "Pitched at multiple startup events, securing funding and partnerships for prototype development."
      ],
      isActive: true,
      kanji: "革新",
      level: 4,
      skillGain: "イノベーション力"
    },
    {
      company: "Skillible - Ministry of Education & AICTE",
      companyJp: "スキリブル",
      role: "Generative AI Intern",
      period: "Jul 2024 - Aug 2024",
      description: (
        <p>Developed generative AI solutions to enhance educational content, improving engagement by 25%.</p>
      ),
      achievements: [
        "Developed generative AI solutions to enhance educational content, improving engagement by 25%.",
        "Led AI-driven projects focused on adaptive learning, collaborating with cross-functional teams.",
        "Conducted hands-on projects integrating generative AI, improving user satisfaction with innovative features."
      ],
      kanji: "進化",
      level: 3,
      skillGain: "AI技術"
    },
    {
      company: "Edunet Foundation - IBM SkillsBuild",
      companyJp: "エデュネット",
      role: "AI & Cloud Intern",
      period: "Jun 2024 - Aug 2024",
      description: (
        <p>Implemented cloud-based AI models, optimizing data processing speeds by 20%.</p>
      ),
      achievements: [
        "Cloud-based AI models, optimizing data processing speeds by 20%.",
        "Developed scalable cloud infrastructures, reducing operational costs by 15%.",
        "Integrated ML models into production environments, enhancing AI-driven applications."
      ],
      kanji: "雲智",
      level: 3,
      skillGain: "クラウド技術"
    },
    {
      company: "Indian Institute of Technology Kanpur",
      companyJp: "カーンプルIIT",
      role: "Content Development Intern",
      period: "Dec 2021 - Mar 2022",
      description: (
        <p>Created high-quality educational content, increasing course engagement by 40%.</p>
      ),
      achievements: [
        "Created high-quality educational content, increasing course engagement by 40%.",
        "Designed curriculum modules, improving learning outcomes and content structure."
      ],
      kanji: "知識",
      level: 2,
      skillGain: "教育能力"
    }
  ];

  // Generate stars based on level
  const renderLevelStars = (level: number) => {
    return Array.from({ length: level }).map((_, i) => (
      <Star 
        key={i} 
        className="w-4 h-4 text-anime-amber animate-pulse-glow" 
        fill="currentColor" 
      />
    ));
  };

  // Generate progress nodes
  const renderProgressNodes = () => {
    return experiences.map((_, index) => {
      const isActive = activeIndex === index;
      const isPast = index < activeIndex;
      const isFuture = index > activeIndex;
      
      return (
        <div 
          key={index}
          className={cn(
            "h-3 w-3 rounded-full transition-all duration-500 relative",
            isActive ? "bg-anime-crimson scale-150 animate-pulse-glow" : 
            isPast ? "bg-anime-amber" : "bg-gray-700"
          )}
          onClick={() => handleExperienceChange(index)}
        >
          {isActive && (
            <div className="absolute -inset-4 border border-anime-crimson rounded-full animate-ping opacity-75"></div>
          )}
        </div>
      );
    });
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-anime-midnight to-gray-900 relative experience-section overflow-hidden">
      {/* Japanese Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        {experiences.map((exp, i) => (
          <div 
            key={i}
            className="absolute jp-text text-8xl font-bold text-anime-teal animate-float"
            style={{
              left: `${(i * 25) % 90}%`,
              top: `${((i * 30) + 10) % 80}%`,
              animationDelay: `${i * 1.5}s`
            }}
          >
            {exp.kanji}
          </div>
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading" data-jp="経験タイムライン">
          Experience Timeline
          <span className="block jp-text text-xs text-anime-teal mt-1">キャリアの道</span>
        </h2>
        
        {/* Progress Path Visualization */}
        <div className="mt-8 mb-12 relative">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {renderProgressNodes()}
          </div>
          <div className="h-0.5 bg-gradient-to-r from-gray-700 via-anime-amber to-gray-700 absolute top-1.5 left-0 right-0 max-w-md mx-auto -z-10"></div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-12 gap-8">
          {/* Timeline navigation */}
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-3">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-full transition-all relative group cursor-pointer",
                    activeIndex === index ? "z-10" : ""
                  )}
                  onClick={() => handleExperienceChange(index)}
                >
                  <div className={cn(
                    "p-4 rounded-md transition-all relative overflow-hidden",
                    activeIndex === index 
                      ? "bg-gray-800/80 border-l-4 border-anime-crimson shadow-[0_0_15px_rgba(196,22,28,0.3)]" 
                      : "bg-transparent border-l-4 border-gray-700 hover:border-anime-teal hover:bg-gray-800/40"
                  )}>
                    {/* Background effect */}
                    {activeIndex === index && (
                      <div className="absolute inset-0 bg-gradient-to-br from-anime-teal/10 to-anime-crimson/10 animate-pulse-glow"></div>
                    )}
                    
                    <div className="relative z-10">
                      <span className="block jp-text text-xs text-anime-teal mb-1">{exp.companyJp}</span>
                      <span className={cn(
                        "block font-semibold transition-colors",
                        activeIndex === index ? "text-anime-amber" : "text-gray-300 group-hover:text-anime-teal"
                      )}>
                        {exp.company}
                      </span>
                      <span className="block text-sm text-gray-400 mt-1">{exp.role}</span>
                      <span className="block text-xs text-gray-500 mt-1">{exp.period}</span>
                      
                      {exp.isActive && (
                        <span className="absolute top-4 right-4 flex items-center">
                          <span className="w-2 h-2 bg-anime-teal rounded-full mr-1.5 animate-pulse"></span>
                          <span className="text-xs text-anime-teal">Current</span>
                        </span>
                      )}
                      
                      {/* Level indicator */}
                      <div className="mt-3 flex items-center">
                        <span className="text-xs text-gray-500 mr-2">Lv.{exp.level}</span>
                        <div className="flex items-center">
                          {renderLevelStars(exp.level || 0)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience details */}
          <div className="md:col-span-8">
            <div className={cn(
              "anime-card relative transition-all duration-500",
              animateIn ? "opacity-100 transform-none" : "opacity-0 translate-x-10"
            )}>
              {/* Japanese kanji background */}
              <div className="absolute right-8 bottom-8 opacity-5 jp-text text-9xl font-bold text-anime-teal">
                {experiences[activeIndex].kanji}
              </div>
              
              {/* Period badge - moved to avoid overlap */}
              <div className="inline-block px-4 py-1 bg-anime-crimson text-anime-text text-sm rounded-full mb-6">
                {experiences[activeIndex].period}
              </div>
              
              <h3 className="text-2xl font-bold text-anime-amber mb-1">{experiences[activeIndex].company}</h3>
              <h4 className="text-lg text-anime-teal mb-6">{experiences[activeIndex].role}</h4>
              
              <div className="text-gray-300 mb-6">
                {experiences[activeIndex].description}
              </div>
              
              {/* Skill gain indicator */}
              <div className="jp-text mb-6 inline-block px-3 py-1 bg-anime-midnight/80 border border-anime-amber/30 rounded text-anime-amber text-sm">
                <span className="mr-2">スキル:</span> {experiences[activeIndex].skillGain}
              </div>
              
              <div className="space-y-4">
                <h5 className="font-medium text-anime-text flex items-center">
                  <Award className="w-5 h-5 text-anime-amber mr-2" />
                  Key Achievements
                </h5>
                <ul className="space-y-4">
                  {experiences[activeIndex].achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start animate-fade-in" style={{animationDelay: `${i * 0.2}s`}}>
                      <span className="text-anime-amber mr-3 mt-1">
                        <div className="h-5 w-5 rounded-full bg-anime-amber/20 flex items-center justify-center">
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Achievement visualization */}
              <div className="mt-8 pt-6 border-t border-gray-700/50 relative">
                <h5 className="font-medium text-anime-text mb-4 flex items-center">
                  <Rocket className="w-4 h-4 text-anime-teal mr-2" />
                  Impact Metrics
                </h5>
                <div className="space-y-6">
                  {activeIndex === 0 && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <span className="mr-2 jp-text text-xs">進捗:</span>
                          Prototype Development
                        </span>
                        <span className="text-anime-amber">80%</span>
                      </div>
                      <div className="skill-bar h-4 rounded-full">
                        <div 
                          className="skill-progress rounded-full relative overflow-hidden" 
                          style={{ width: "80%" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-anime-amber/30 to-anime-crimson/30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeIndex === 1 && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <span className="mr-2 jp-text text-xs">向上:</span>
                          Engagement Improvement
                        </span>
                        <span className="text-anime-amber">25%</span>
                      </div>
                      <div className="skill-bar h-4 rounded-full">
                        <div 
                          className="skill-progress rounded-full relative overflow-hidden" 
                          style={{ width: "25%" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-anime-amber/30 to-anime-crimson/30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeIndex === 2 && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <span className="mr-2 jp-text text-xs">最適化:</span>
                          Processing Speed Optimization
                        </span>
                        <span className="text-anime-amber">20%</span>
                      </div>
                      <div className="skill-bar h-4 rounded-full">
                        <div 
                          className="skill-progress rounded-full relative overflow-hidden" 
                          style={{ width: "20%" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-anime-amber/30 to-anime-crimson/30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeIndex === 3 && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center">
                          <span className="mr-2 jp-text text-xs">参加度:</span>
                          Course Engagement Increase
                        </span>
                        <span className="text-anime-amber">40%</span>
                      </div>
                      <div className="skill-bar h-4 rounded-full">
                        <div 
                          className="skill-progress rounded-full relative overflow-hidden" 
                          style={{ width: "40%" }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-anime-amber/30 to-anime-crimson/30 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Collapsible extra information */}
              <div className="mt-6">
                <Collapsible>
                  <CollapsibleTrigger className="flex items-center text-anime-teal text-sm hover:text-anime-amber transition-colors">
                    <ChevronRight className="h-4 w-4 mr-1" />
                    <span>Additional Details</span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 p-4 bg-gray-900/50 border border-anime-teal/20 rounded-md">
                    <p className="text-gray-400 text-sm">
                      {activeIndex === 0 && "Leading climate technology innovation through EV retrofitting solutions, focusing on creating sustainable transportation alternatives."}
                      {activeIndex === 1 && "Exploring the frontiers of generative AI for educational applications, improving content accessibility and engagement."}
                      {activeIndex === 2 && "Implementing cloud infrastructure optimizations for AI model deployment and scaling, creating efficient computational pipelines."}
                      {activeIndex === 3 && "Developing educational content frameworks to maximize engagement and improve learning outcomes across technical subjects."}
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
