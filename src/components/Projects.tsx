import React, { useState } from 'react';
import { Scale, Scroll, Eye, Shield, Leaf, Cloud, Heart } from 'lucide-react';
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
      link: "https://github.com/link",
      accentColor: "#0f9b8e"
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      description: "Developed an AI-powered movie recommender using collaborative and content-based filtering, achieving 85% accuracy.",
      icon: Scroll,
      technologies: ["Python", "Collaborative Filtering", "Content Analysis", "Recommendation Systems"],
      link: "https://github.com/link",
      accentColor: "#e6af2e"
    },
    {
      id: 3,
      title: "Face Recognition using FaceNet",
      description: "Built a high-precision security system leveraging deep learning-based facial feature extraction.",
      icon: Eye,
      technologies: ["Python", "FaceNet", "Deep Learning", "Computer Vision", "Security"],
      link: "https://github.com/link",
      accentColor: "#c4161c"
    },
    {
      id: 4,
      title: "Credit Card Anomaly Detection",
      description: "Implemented an anomaly detection model that identified fraudulent transactions with 92% precision.",
      icon: Shield,
      technologies: ["Python", "Autoencoders", "Anomaly Detection", "Fraud Prevention"],
      link: "https://github.com/link",
      accentColor: "#4a5568"
    },
    {
      id: 5,
      title: "AI-Powered Crop Health Monitoring",
      description: "Implemented deep learning models to assess crop diseases via drone imagery.",
      icon: Leaf,
      technologies: ["Python", "Computer Vision", "CNN", "Agriculture Tech", "Drone Imagery"],
      link: "https://github.com/link",
      accentColor: "#48bb78"
    },
    {
      id: 6,
      title: "Carbon Neutrality Pathways",
      description: "Designed a data-driven framework for reducing carbon emissions in coal mining operations.",
      icon: Cloud,
      technologies: ["Python", "Data Analysis", "Sustainability", "Carbon Reduction"],
      link: "https://github.com/link",
      accentColor: "#2b6cb0"
    },
    {
      id: 7,
      title: "Vitalia - Health Companion",
      description: "A web-based health tracker using ReactJS & Bolt AI, enabling users to monitor water intake, steps, sleep, and mood with personalized feedback.",
      icon: Heart,
      technologies: ["ReactJS", "Bolt AI", "Health Tracking", "Personalization"],
      link: "https://github.com/link",
      accentColor: "#ed64a6"
    }
  ];

  const handleProjectClick = (id: number) => {
    setActiveProject(activeProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Projects Showcase</h2>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isActive = activeProject === project.id;
            
            return (
              <div 
                key={project.id}
                className={cn(
                  "project-card cursor-pointer group transition-all duration-500",
                  isActive ? "sm:col-span-2 lg:col-span-3 sm:row-span-2" : ""
                )}
                onClick={() => handleProjectClick(project.id)}
                style={{
                  borderColor: isActive ? project.accentColor : 'rgba(15, 155, 142, 0.3)'
                }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div 
                      className="p-3 rounded-full" 
                      style={{backgroundColor: `${project.accentColor}20`}}
                    >
                      <project.icon 
                        className="w-6 h-6"
                        style={{color: project.accentColor}}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-anime-text">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, isActive ? project.technologies.length : 3).map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700"
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
                      <div className="mt-6 space-y-4">
                        <h4 className="font-medium text-anime-amber">Project Details</h4>
                        <p className="text-gray-300">
                          {project.description} This project showcases the application of advanced technical skills
                          and demonstrates practical problem-solving in real-world scenarios.
                        </p>
                      </div>
                      
                      {project.link && (
                        <div className="mt-6">
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 text-anime-teal hover:text-anime-amber transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View on GitHub</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
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
