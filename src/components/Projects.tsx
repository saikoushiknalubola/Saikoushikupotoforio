
import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Database, Smartphone, Brain, Globe, Zap, Star, Users } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI-Powered Healthcare Assistant",
      description: "Revolutionary healthcare platform using machine learning to assist medical professionals with accurate diagnosis and treatment recommendations.",
      tech: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL"],
      features: ["Medical Image Analysis", "Symptom Checker", "Drug Interaction Alerts", "Patient Management"],
      githubUrl: "https://github.com/saikoushiknalubola",
      gradient: "from-blue-600 to-cyan-600",
      icon: Brain,
      category: "AI/ML"
    },
    {
      title: "Blockchain Supply Chain Tracker",
      description: "Transparent supply chain management system built on blockchain technology to track products from origin to consumer.",
      tech: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      features: ["Product Provenance", "Smart Contracts", "QR Code Tracking", "Fraud Prevention"],
      githubUrl: "https://github.com/saikoushiknalubola",
      gradient: "from-purple-600 to-pink-600",
      icon: Globe,
      category: "Blockchain"
    },
    {
      title: "Smart Finance Manager",
      description: "Intelligent personal finance application with AI-driven insights, expense tracking, and investment recommendations.",
      tech: ["React Native", "Firebase", "Python", "TensorFlow", "Plaid API"],
      features: ["Expense Analytics", "Investment Insights", "Budget Planning", "Bill Reminders"],
      githubUrl: "https://github.com/saikoushiknalubola",
      gradient: "from-green-600 to-emerald-600",
      icon: Zap,
      category: "FinTech"
    },
    {
      title: "Virtual Reality Learning Platform",
      description: "Immersive VR education platform that transforms traditional learning into engaging virtual experiences for students worldwide.",
      tech: ["Unity", "C#", "WebRTC", "Node.js", "MongoDB"],
      features: ["3D Environments", "Multi-user Sessions", "Progress Tracking", "Interactive Lessons"],
      githubUrl: "https://github.com/saikoushiknalubola",
      gradient: "from-orange-600 to-red-600",
      icon: Star,
      category: "VR/AR"
    },
    {
      title: "Social Impact Community Hub",
      description: "Platform connecting volunteers with NGOs and social causes, facilitating meaningful community engagement and impact measurement.",
      tech: ["React", "Express.js", "MongoDB", "Socket.io", "Stripe"],
      features: ["Volunteer Matching", "Impact Analytics", "Event Management", "Donation Processing"],
      githubUrl: "https://github.com/saikoushiknalubola",
      gradient: "from-indigo-600 to-blue-600",
      icon: Users,
      category: "Social Impact"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-[#121212] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Code className="w-8 h-8 text-blue-500" />
            <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Epic Projects
            </h2>
            <Code className="w-8 h-8 text-cyan-500" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the legendary projects I've crafted on my journey to become the King of Developers!
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 overflow-hidden transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-gray-500/50"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-semibold">Source Code</span>
                  </a>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500/20">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects represent just the beginning of my journey. Let's collaborate and create the next groundbreaking solution together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/30"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Start a Project</span>
              </a>
              <a
                href="https://github.com/saikoushiknalubola"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-blue-500 text-blue-300 font-bold rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
