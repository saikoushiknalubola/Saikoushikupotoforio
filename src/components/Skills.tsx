
import React, { useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    // Technical Skills
    { name: "Python", level: 90, category: "technical" },
    { name: "C++", level: 80, category: "technical" },
    { name: "Java", level: 75, category: "technical" },
    { name: "Machine Learning", level: 85, category: "technical" },
    { name: "Deep Learning", level: 80, category: "technical" },
    { name: "Generative AI", level: 85, category: "technical" },
    { name: "Cybersecurity", level: 75, category: "technical" },
    { name: "Cloud Computing", level: 70, category: "technical" },
    { name: "Front-End Development", level: 65, category: "technical" },
    
    // Entrepreneurial Skills
    { name: "Business Model Validation", level: 85, category: "entrepreneurial" },
    { name: "Fundraising Strategies", level: 80, category: "entrepreneurial" },
    { name: "Go-to-Market Strategy", level: 75, category: "entrepreneurial" },
    { name: "Product Development", level: 85, category: "entrepreneurial" },
    { name: "Pitching & Negotiation", level: 90, category: "entrepreneurial" },
  ];

  // Function to animate skill bars
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillBars = entry.target.querySelectorAll('.skill-progress');
          
          skillBars.forEach((bar: Element) => {
            const htmlBar = bar as HTMLElement;
            const width = htmlBar.dataset.width;
            htmlBar.style.width = width || '0%';
          });
        }
      });
    }, { threshold: 0.1 });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Group skills by category
  const technicalSkills = skills.filter(skill => skill.category === "technical");
  const entrepreneurialSkills = skills.filter(skill => skill.category === "entrepreneurial");
  
  // Certifications data
  const certifications = [
    "IBM AI Engineering Professional Certificate",
    "Google AI Essentials",
    "IBM Machine Learning Professional Certificate",
    "Programming with Generative AI (IIT-Guwahati)",
    "Machine Learning (Internshala & IITM Pravartak)",
    "Google Cybersecurity Professional Certificate"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-anime-midnight">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Skills & Abilities</h2>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div className="anime-card">
            <h3 className="text-xl font-bold mb-6 text-anime-amber flex items-center">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Technical Skills
            </h3>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-anime-teal">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-width={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Entrepreneurial Skills */}
          <div className="anime-card">
            <h3 className="text-xl font-bold mb-6 text-anime-amber flex items-center">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Entrepreneurial Skills
            </h3>
            
            <div className="space-y-4">
              {entrepreneurialSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-anime-amber">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      data-width={`${skill.level}%`}
                      style={{ width: '0%', backgroundImage: 'linear-gradient(to right, #e6af2e, #c4161c)' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-anime-amber flex items-center">
            <span className="mr-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </span>
            Certifications & Training
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="p-4 bg-gray-900/70 border border-anime-teal/20 rounded-md hover:border-anime-amber/50 transition-colors"
              >
                <div className="flex items-start">
                  <span className="text-anime-teal mr-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </span>
                  <span className="text-gray-300">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Leadership */}
        <div className="mt-12 anime-card">
          <h3 className="text-xl font-bold mb-6 text-anime-amber">Leadership & Entrepreneurship</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-anime-midnight rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-anime-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-anime-teal">SRU E-Cell, SR University</h4>
                  <p className="text-sm text-gray-400 mb-2">Chairperson • Jul 2024 - Present</p>
                  <p className="text-gray-300 text-sm">Led strategic planning for entrepreneurship events, boosting student participation by 60%.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-2 bg-anime-midnight rounded-full mr-3 mt-1">
                  <svg className="w-5 h-5 text-anime-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-anime-teal">SRU Cyber Security Club</h4>
                  <p className="text-sm text-gray-400 mb-2">Vice-Chairperson • Jul 2024 - Present</p>
                  <p className="text-gray-300 text-sm">Spearheaded cybersecurity initiatives, workshops, and awareness campaigns for 200+ students.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
