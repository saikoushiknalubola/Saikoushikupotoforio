
import React, { useState } from 'react';
import { Scale, Scroll, Eye, Shield, Leaf, Cloud, Heart, Brain, Zap, Database, ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  accentColor: string;
  category: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Nyaayasaathi",
      description: "Developed an AI-driven legal advisory assistant to provide affordable and accessible legal guidance using advanced NLP and legal text analysis.",
      icon: Scale,
      technologies: ["Python", "NLP", "Machine Learning", "Legal Text Analysis", "FastAPI"],
      githubLink: "https://github.com/saikoushiknalubola/nyaayasaathi",
      liveLink: "https://nyaayasaathi.netlify.app/",
      accentColor: "#0f9b8e",
      category: "AI/Legal Tech"
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      description: "Built an intelligent movie recommender using collaborative and content-based filtering algorithms, achieving 85% accuracy with personalized suggestions.",
      icon: Scroll,
      technologies: ["Python", "Collaborative Filtering", "Content Analysis", "Pandas", "Scikit-learn"],
      githubLink: "https://github.com/saikoushiknalubola/movie-recommender",
      liveLink: "https://movie-rec-system.netlify.app/",
      accentColor: "#e6af2e",
      category: "Recommendation System"
    },
    {
      id: 3,
      title: "Face Recognition Security System",
      description: "Built a high-precision security system leveraging FaceNet deep learning architecture for real-time facial recognition and authentication.",
      icon: Eye,
      technologies: ["Python", "FaceNet", "Deep Learning", "Computer Vision", "OpenCV", "TensorFlow"],
      githubLink: "https://github.com/saikoushiknalubola/face-recognition",
      accentColor: "#c4161c",
      category: "Computer Vision"
    },
    {
      id: 4,
      title: "Credit Card Fraud Detection",
      description: "Implemented an advanced anomaly detection model using autoencoders that identified fraudulent transactions with 92% precision and real-time monitoring.",
      icon: Shield,
      technologies: ["Python", "Autoencoders", "Anomaly Detection", "Neural Networks", "Fraud Prevention"],
      githubLink: "https://github.com/saikoushiknalubola/fraud-detection",
      accentColor: "#4a5568",
      category: "Cybersecurity"
    },
    {
      id: 5,
      title: "AI Crop Health Monitor",
      description: "Developed deep learning models to assess crop diseases via drone imagery, helping farmers optimize yield and reduce crop loss by 30%.",
      icon: Leaf,
      technologies: ["Python", "Computer Vision", "CNN", "Agriculture Tech", "Drone Imagery", "IoT"],
      githubLink: "https://github.com/saikoushiknalubola/crop-health",
      accentColor: "#48bb78",
      category: "AgriTech"
    },
    {
      id: 6,
      title: "Carbon Neutrality Analytics",
      description: "Designed a comprehensive data-driven framework for reducing carbon emissions in coal mining operations using predictive analytics.",
      icon: Cloud,
      technologies: ["Python", "Data Analysis", "Sustainability", "Carbon Reduction", "Predictive Analytics"],
      githubLink: "https://github.com/saikoushiknalubola/carbon-neutral",
      accentColor: "#2b6cb0",
      category: "Environmental Tech"
    },
    {
      id: 7,
      title: "Vitalia - Health Companion",
      description: "A comprehensive web-based health tracker using ReactJS & AI, enabling users to monitor vitals, fitness, sleep patterns with personalized insights.",
      icon: Heart,
      technologies: ["ReactJS", "AI Integration", "Health Analytics", "Real-time Monitoring", "Progressive Web App"],
      githubLink: "https://github.com/saikoushiknalubola/vitalia",
      liveLink: "https://vitalia-health.netlify.app/",
      accentColor: "#ed64a6",
      category: "HealthTech"
    },
    {
      id: 8,
      title: "Neural Style Transfer",
      description: "Created an artistic AI application that applies famous painting styles to photos using convolutional neural networks and style transfer algorithms.",
      icon: Brain,
      technologies: ["Python", "Neural Networks", "Style Transfer", "Computer Vision", "TensorFlow", "Art Generation"],
      githubLink: "https://github.com/saikoushiknalubola/neural-style-transfer",
      accentColor: "#9f7aea",
      category: "Creative AI"
    },
    {
      id: 9,
      title: "Real-time Chat Analytics",
      description: "Built a scalable real-time chat application with sentiment analysis, user behavior tracking, and intelligent moderation using WebSocket technology.",
      icon: Zap,
      technologies: ["Node.js", "WebSocket", "Sentiment Analysis", "Real-time Processing", "MongoDB", "React"],
      githubLink: "https://github.com/saikoushiknalubola/chat-analytics",
      liveLink: "https://chat-analytics-demo.netlify.app/",
      accentColor: "#f6ad55",
      category: "Real-time Systems"
    },
    {
      id: 10,
      title: "Blockchain Voting System",
      description: "Developed a secure, transparent voting system using blockchain technology to ensure election integrity and prevent tampering.",
      icon: Database,
      technologies: ["Solidity", "Blockchain", "Smart Contracts", "Web3", "Ethereum", "Security"],
      githubLink: "https://github.com/saikoushiknalubola/blockchain-voting",
      accentColor: "#4fd1c7",
      category: "Blockchain"
    }
  ];

  const handleProjectClick = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  const handleGitHubClick = (e: React.MouseEvent, projectLink?: string) => {
    e.stopPropagation();
    const url = projectLink || 'https://github.com/saikoushiknalubola';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = (e: React.MouseEvent, liveLink?: string) => {
    e.stopPropagation();
    if (liveLink) {
      window.open(liveLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-16 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Treasure Map of Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore the digital treasures I've discovered on my coding adventures across the seven seas of technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isActive = activeProject === project.id;
            
            return (
              <div 
                key={project.id}
                className={cn(
                  "relative cursor-pointer group transition-all duration-500 bg-[#1a1a1a] rounded-2xl overflow-hidden border-2 min-h-[280px]",
                  isActive 
                    ? "md:col-span-2 lg:col-span-3 border-orange-500/60 shadow-2xl shadow-orange-500/20" 
                    : "border-gray-700/50 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10"
                )}
                onClick={() => handleProjectClick(project.id)}
                style={{
                  background: isActive 
                    ? `linear-gradient(135deg, ${project.accentColor}10, #1a1a1a)` 
                    : '#1a1a1a'
                }}
              >
                {/* Project content */}
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 flex-1">
                      <div 
                        className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0" 
                        style={{backgroundColor: `${project.accentColor}20`, border: `2px solid ${project.accentColor}40`}}
                      >
                        <project.icon 
                          className="w-6 h-6 transition-all duration-300"
                          style={{color: project.accentColor}}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
                        <span 
                          className="text-sm font-semibold px-2 py-1 rounded-full"
                          style={{backgroundColor: `${project.accentColor}20`, color: project.accentColor}}
                        >
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 text-sm flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, isActive ? project.technologies.length : 4).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50 hover:border-gray-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {!isActive && project.technologies.length > 4 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex gap-3 mt-auto">
                    <button 
                      onClick={(e) => handleGitHubClick(e, project.githubLink)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm flex-1 justify-center border border-gray-600/50 hover:border-gray-500/50"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source</span>
                    </button>
                    
                    {project.liveLink && (
                      <button 
                        onClick={(e) => handleLiveClick(e, project.liveLink)}
                        className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm flex-1 justify-center border-2"
                        style={{
                          backgroundColor: `${project.accentColor}20`,
                          color: project.accentColor,
                          borderColor: `${project.accentColor}60`
                        }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </button>
                    )}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>
        
        {/* View All Projects CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={(e) => handleGitHubClick(e)}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-orange-500/30 text-lg"
          >
            <Github className="w-6 h-6" />
            <span>Explore All Treasures on GitHub</span>
            <ExternalLink className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
