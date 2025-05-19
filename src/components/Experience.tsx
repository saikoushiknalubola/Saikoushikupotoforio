
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: React.ReactNode;
  achievements: string[];
  isActive?: boolean;
}

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const experiences: ExperienceItem[] = [
    {
      company: "Mercedes-Benz Research & Development India",
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
      isActive: true
    },
    {
      company: "Skillible - Ministry of Education & AICTE",
      role: "Generative AI Intern",
      period: "Jul 2024 - Aug 2024",
      description: (
        <p>Developed generative AI solutions to enhance educational content, improving engagement by 25%.</p>
      ),
      achievements: [
        "Developed generative AI solutions to enhance educational content, improving engagement by 25%.",
        "Led AI-driven projects focused on adaptive learning, collaborating with cross-functional teams.",
        "Conducted hands-on projects integrating generative AI, improving user satisfaction with innovative features."
      ]
    },
    {
      company: "Edunet Foundation - IBM SkillsBuild",
      role: "AI & Cloud Intern",
      period: "Jun 2024 - Aug 2024",
      description: (
        <p>Implemented cloud-based AI models, optimizing data processing speeds by 20%.</p>
      ),
      achievements: [
        "Cloud-based AI models, optimizing data processing speeds by 20%.",
        "Developed scalable cloud infrastructures, reducing operational costs by 15%.",
        "Integrated ML models into production environments, enhancing AI-driven applications."
      ]
    },
    {
      company: "Indian Institute of Technology Kanpur",
      role: "Content Development Intern",
      period: "Dec 2021 - Mar 2022",
      description: (
        <p>Created high-quality educational content, increasing course engagement by 40%.</p>
      ),
      achievements: [
        "Created high-quality educational content, increasing course engagement by 40%.",
        "Designed curriculum modules, improving learning outcomes and content structure."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-anime-midnight to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Experience Timeline</h2>
        
        <div className="mt-12 grid md:grid-cols-12 gap-8">
          {/* Timeline navigation */}
          <div className="md:col-span-4">
            <div className="sticky top-24 space-y-1">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-full text-left p-4 transition-all relative group",
                    activeIndex === index 
                      ? "bg-gray-800/50 border-l-4 border-anime-crimson" 
                      : "bg-transparent border-l-4 border-gray-700 hover:border-anime-teal hover:bg-gray-800/20"
                  )}
                >
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
                </button>
              ))}
            </div>
          </div>
          
          {/* Experience details */}
          <div className="md:col-span-8">
            <div className="anime-card relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 px-4 py-1 bg-anime-crimson text-anime-text text-sm rounded-full">
                {experiences[activeIndex].period}
              </div>
              
              <h3 className="text-2xl font-bold text-anime-amber mb-1">{experiences[activeIndex].company}</h3>
              <h4 className="text-lg text-anime-teal mb-6">{experiences[activeIndex].role}</h4>
              
              <div className="text-gray-300 mb-6">
                {experiences[activeIndex].description}
              </div>
              
              <div className="space-y-4">
                <h5 className="font-medium text-anime-text">Key Achievements:</h5>
                <ul className="space-y-3">
                  {experiences[activeIndex].achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-anime-amber mr-2">⬢</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Achievement visualization */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h5 className="font-medium text-anime-text mb-4">Impact Metrics</h5>
                <div className="space-y-4">
                  {activeIndex === 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Prototype Development</span>
                        <span className="text-anime-amber">80%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "80%" }}></div>
                      </div>
                    </div>
                  )}
                  
                  {activeIndex === 1 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Engagement Improvement</span>
                        <span className="text-anime-amber">25%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                  )}
                  
                  {activeIndex === 2 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Processing Speed Optimization</span>
                        <span className="text-anime-amber">20%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "20%" }}></div>
                      </div>
                    </div>
                  )}
                  
                  {activeIndex === 3 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Course Engagement Increase</span>
                        <span className="text-anime-amber">40%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
