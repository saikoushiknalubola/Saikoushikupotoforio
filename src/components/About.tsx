
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-1/2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-anime-teal">
            <path d="M39.5,-65.1C50.2,-55.9,57.3,-43.5,63.2,-30.8C69,-18.2,73.7,-5.2,72.1,7C70.6,19.2,62.7,30.6,53.4,40.7C44.2,50.8,33.5,59.5,21.3,64.3C9,69.1,-4.9,69.9,-19.1,67.3C-33.3,64.6,-47.7,58.5,-58.1,48.2C-68.5,37.8,-74.9,23.2,-76.8,7.9C-78.7,-7.5,-76,-23.6,-67.5,-35.7C-59,-47.8,-44.5,-56,-30.8,-64.5C-17.1,-73,-8.6,-81.7,2.7,-86C14,-90.3,28.8,-74.3,39.5,-65.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-anime-crimson">
            <path d="M45.2,-77.1C59.2,-69.8,71.7,-58.3,79.1,-44.3C86.5,-30.3,88.9,-13.7,87.3,2.3C85.8,18.3,80.3,33.6,71.7,47.1C63.1,60.5,51.3,72,37.2,78.2C23.1,84.4,6.6,85.3,-10.8,84.5C-28.3,83.7,-46.7,81.2,-56.7,70.1C-66.7,59,-68.3,39.2,-75.2,21.2C-82.1,3.2,-94.3,-13.1,-93.7,-28.3C-93.2,-43.5,-80,-57.7,-64.5,-64.7C-48.9,-71.8,-31,-71.7,-15.1,-70.7C0.8,-69.7,31.1,-84.4,45.2,-77.1Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="section-heading" data-jp="私について">About Me</h2>
        
        <div className="mt-8 grid md:grid-cols-5 gap-8">
          {/* Left column for profile info */}
          <div className="md:col-span-2 anime-card group hover:transform hover:scale-[1.01] transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-anime-teal/5 to-anime-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="flex flex-col items-center md:items-start relative z-10">
              <h3 className="text-xl font-bold mb-4 text-anime-amber jp-text">
                <span className="text-sm block text-anime-teal mb-1">キャラクター プロフィール</span>
                Character Profile
              </h3>
              
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
                    <span className="px-2 py-1 bg-anime-midnight/60 border border-anime-teal/30 rounded text-sm transform hover:scale-105 transition-transform">English (Fluent)</span>
                    <span className="px-2 py-1 bg-anime-midnight/60 border border-anime-teal/30 rounded text-sm transform hover:scale-105 transition-transform">Hindi (Intermediate)</span>
                    <span className="px-2 py-1 bg-anime-midnight/60 border border-anime-teal/30 rounded text-sm transform hover:scale-105 transition-transform">Telugu (Native)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column for narrative */}
          <div className="md:col-span-3 space-y-6">
            <div className="anime-card relative group hover:transform hover:scale-[1.02] transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-anime-teal/5 to-anime-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h3 className="text-xl font-bold mb-4 text-anime-amber jp-text relative z-10">
                <span className="text-sm block text-anime-teal mb-1">起源ストーリー</span>
                Origin Story
              </h3>
              <p className="text-gray-300 relative z-10">
                A passionate technologist with a focus on artificial intelligence and entrepreneurship. My journey began with a deep fascination for how technology can solve real-world problems and improve lives.
              </p>
            </div>
            
            <div className="anime-card relative group hover:transform hover:scale-[1.02] transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-anime-teal/5 to-anime-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h3 className="text-xl font-bold mb-4 text-anime-amber jp-text relative z-10">
                <span className="text-sm block text-anime-teal mb-1">ミッション</span>
                Mission
              </h3>
              <p className="text-gray-300 mb-4 relative z-10">
                I build AI-driven solutions that make a meaningful impact. From legal advisory systems to health monitoring applications, my work focuses on creating accessible technology that addresses critical needs.
              </p>
              <p className="text-gray-300 relative z-10">
                As an entrepreneur, I founded Revithalize at Mercedes-Benz Research & Development, developing modular EV retrofitting kits for sustainability. My leadership extends to entrepreneurship communities, where I organize events and hackathons to foster innovation.
              </p>
            </div>
            
            <div className="anime-card relative group hover:transform hover:scale-[1.02] transition-all">
              <div className="absolute inset-0 bg-gradient-to-br from-anime-teal/5 to-anime-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h3 className="text-xl font-bold mb-4 text-anime-amber jp-text relative z-10">
                <span className="text-sm block text-anime-teal mb-1">専門分野</span>
                Specializations
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 relative z-10">
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(15,155,142,0.2)]">
                  <span className="block text-anime-teal">AI Engineering</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(15,155,142,0.2)]">
                  <span className="block text-anime-teal">Entrepreneurship</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(15,155,142,0.2)]">
                  <span className="block text-anime-teal">Deep Learning</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(15,155,142,0.2)]">
                  <span className="block text-anime-teal">Cybersecurity</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(15,155,142,0.2)]">
                  <span className="block text-anime-teal">Cloud Computing</span>
                </div>
                <div className="bg-anime-midnight/60 border border-anime-teal/20 rounded p-3 text-center hover:border-anime-amber/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(15,155,142,0.2)]">
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
