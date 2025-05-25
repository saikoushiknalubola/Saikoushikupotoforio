
import React, { useState } from 'react';
import { Scale, Scroll, Eye, Shield, Leaf, Cloud, Heart, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  technologies: string[];
  link?: string;
  accentColor: string;
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Nyaayasaathi",
      description: "Developed an AI-driven legal advisory assistant to provide affordable and accessible legal guidance.",
      icon: Scale,
      technologies: ["Python", "NLP", "Machine Learning", "Legal Text Analysis"],
      link: "https://github.com/saikoushiknalubola/nyaayasaathi",
      accentColor: "#0f9b8e"
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      description: "Developed an AI-powered movie recommender using collaborative and content-based filtering, achieving 85% accuracy.",
      icon: Scroll,
      technologies: ["Python", "Collaborative Filtering", "Content Analysis", "Recommendation Systems"],
      link: "https://github.com/saikoushiknalubola/movie-recommender",
      accentColor: "#e6af2e"
    },
    {
      id: 3,
      title: "Face Recognition using FaceNet",
      description: "Built a high-precision security system leveraging deep learning-based facial feature extraction.",
      icon: Eye,
      technologies: ["Python", "FaceNet", "Deep Learning", "Computer Vision", "Security"],
      link: "https://github.com/saikoushiknalubola/face-recognition",
      accentColor: "#c4161c"
    },
    {
      id: 4,
      title: "Credit Card Anomaly Detection",
      description: "Implemented an anomaly detection model that identified fraudulent transactions with 92% precision.",
      icon: Shield,
      technologies: ["Python", "Autoencoders", "Anomaly Detection", "Fraud Prevention"],
      link: "https://github.com/saikoushiknalubola/anomaly-detection",
      accentColor: "#4a5568"
    },
    {
      id: 5,
      title: "AI-Powered Crop Health Monitoring",
      description: "Implemented deep learning models to assess crop diseases via drone imagery.",
      icon: Leaf,
      technologies: ["Python", "Computer Vision", "CNN", "Agriculture Tech", "Drone Imagery"],
      link: "https://github.com/saikoushiknalubola/crop-health",
      accentColor: "#48bb78"
    },
    {
      id: 6,
      title: "Carbon Neutrality Pathways",
      description: "Designed a data-driven framework for reducing carbon emissions in coal mining operations.",
      icon: Cloud,
      technologies: ["Python", "Data Analysis", "Sustainability", "Carbon Reduction"],
      link: "https://github.com/saikoushiknalubola/carbon-neutral",
      accentColor: "#2b6cb0"
    },
    {
      id: 7,
      title: "Vitalia - Health Companion",
      description: "A web-based health tracker using ReactJS & Bolt AI, enabling users to monitor water intake, steps, sleep, and mood with personalized feedback.",
      icon: Heart,
      technologies: ["ReactJS", "Bolt AI", "Health Tracking", "Personalization"],
      link: "https://github.com/saikoushiknalubola/vitalia",
      accentColor: "#ed64a6"
    }
  ];

  const handleProjectClick = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  const handleGitHubClick = (e: React.MouseEvent, projectLink?: string) => {
    e.stopPropagation();
    // Always redirect to main GitHub profile as requested
    window.open('https://github.com/saikoushiknalubola', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading font-orbitron text-center lg:text-left">Projects Showcase</h2>
        
        <div className="mt-8 lg:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project) => {
            const isActive = activeProject === project.id;
            
            return (
              <div 
                key={project.id}
                className={cn(
                  "project-card cursor-pointer group transition-all duration-500 hover:scale-[1.02]",
                  isActive ? "sm:col-span-2 lg:col-span-3 sm:row-span-2" : ""
                )}
                onClick={() => handleProjectClick(project.id)}
                style={{
                  borderColor: isActive ? project.accentColor : 'rgba(15, 155, 142, 0.3)'
                }}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <div 
                      className="p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:scale-110" 
                      style={{backgroundColor: `${project.accentColor}20`}}
                    >
                      <project.icon 
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300"
                        style={{color: project.accentColor}}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-anime-text font-rajdhani">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.slice(0, isActive ? project.technologies.length : 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700 transition-colors hover:bg-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {!isActive && project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {isActive && (
                    <>
                      <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                        <h4 className="font-medium text-anime-amber text-sm sm:text-base">Project Details</h4>
                        <p className="text-gray-300 text-sm sm:text-base">
                          {project.description} This project showcases the application of advanced technical skills
                          and demonstrates practical problem-solving in real-world scenarios.
                        </p>
                      </div>
                      
                      <div className="mt-4 sm:mt-6">
                        <button 
                          onClick={(e) => handleGitHubClick(e, project.link)}
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 text-sm sm:text-base"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
