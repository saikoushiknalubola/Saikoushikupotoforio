
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="mt-8 grid md:grid-cols-5 gap-8">
          {/* Left column for profile info */}
          <div className="md:col-span-2 anime-card">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4 text-anime-amber">Character Profile</h3>
              
              <div className="w-full space-y-4">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Name</span>
                  <span className="text-anime-text font-bold">Saikoushik Nalubola</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Origin</span>
                  <span className="text-anime-text">Warangal, India</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Class</span>
                  <span className="text-anime-teal font-medium">AI Engineer & Entrepreneur</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Education</span>
                  <span className="text-anime-text">Bachelor of Technology in Computer Science & Engineering (AIML)</span>
                  <span className="text-anime-text text-sm">SR University - Warangal, India</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Languages</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="px-2 py-1 bg-anime-midnight/60 border border-anime-teal/30 rounded text-sm">English (Fluent)</span>
                    <span className="px-2 py-1 bg-anime-midnight/60 border border-anime-teal/30 rounded text-sm">Hindi (Intermediate)</span>
                    <span className="px-2 py-1 bg-anime-midnight/60 border border-anime-teal/30 rounded text-sm">Telugu (Native)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column for narrative */}
          <div className="md:col-span-3 space-y-6">
            <div className="anime-card">
              <h3 className="text-xl font-bold mb-4 text-anime-amber">Origin Story</h3>
              <p className="text-gray-300">
                A passionate technologist with a focus on artificial intelligence and entrepreneurship. My journey began with a deep fascination for how technology can solve real-world problems and improve lives.
              </p>
            </div>
            
            <div className="anime-card">
              <h3 className="text-xl font-bold mb-4 text-anime-amber">Mission</h3>
              <p className="text-gray-300 mb-4">
                I build AI-driven solutions that make a meaningful impact. From legal advisory systems to health monitoring applications, my work focuses on creating accessible technology that addresses critical needs.
              </p>
              <p className="text-gray-300">
                As an entrepreneur, I founded Revithalize at Mercedes-Benz Research & Development, developing modular EV retrofitting kits for sustainability. My leadership extends to entrepreneurship communities, where I organize events and hackathons to foster innovation.
              </p>
            </div>
            
            <div className="anime-card">
              <h3 className="text-xl font-bold mb-4 text-anime-amber">Specializations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-colors">
                  <span className="block text-anime-teal">AI Engineering</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-colors">
                  <span className="block text-anime-teal">Entrepreneurship</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-colors">
                  <span className="block text-anime-teal">Deep Learning</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-colors">
                  <span className="block text-anime-teal">Cybersecurity</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-colors">
                  <span className="block text-anime-teal">Cloud Computing</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-colors">
                  <span className="block text-anime-teal">Product Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
