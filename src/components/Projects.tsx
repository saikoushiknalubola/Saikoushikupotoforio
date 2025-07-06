
import React, { useState, useEffect } from 'react';
import { Github, Brain, Globe, Shield, Monitor, Leaf, Heart, Scale, Star, Users, Map, Gift, Crown, ExternalLink } from 'lucide-react';

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

  const realProjects = [
    {
      title: "Nyaayasaathi",
      islandName: "Legal AI Island",
      description: "Revolutionary Legal AI Assistant that democratizes access to justice! This powerful system helps users navigate complex legal processes with AI-powered guidance and document generation.",
      bossDefeated: "Legal Complexity & Access Barriers",
      treasureFound: ["Python", "NLP", "Machine Learning", "React", "FastAPI", "PostgreSQL"],
      crewGrowth: "Legal Tech Innovation & AI Ethics",
      githubUrl: "https://github.com/saikoushiknalubola/nyaayasaathi",
      gradient: "from-blue-600 to-indigo-600",
      icon: Scale,
      category: "Legal AI Adventure",
      bounty: "Justice for All",
      year: "2024"
    },
    {
      title: "Movie Recommendation System",
      islandName: "Entertainment Island",
      description: "Intelligent movie recommendation engine that understands your taste better than you do! Using advanced ML algorithms to suggest the perfect movie for any mood or moment.",
      bossDefeated: "Choice Paralysis & Bad Recommendations",
      treasureFound: ["Python", "Pandas", "Scikit-learn", "Collaborative Filtering", "Content-Based Filtering"],
      crewGrowth: "Recommendation Systems & User Experience",
      githubUrl: "https://github.com/saikoushiknalubola/movie-recommendation",
      gradient: "from-purple-600 to-pink-600",
      icon: Monitor,
      category: "ML Adventure",
      bounty: "Perfect Movie Nights",
      year: "2023"
    },
    {
      title: "Face Recognition using FaceNet",
      islandName: "Computer Vision Island",
      description: "Advanced face recognition system powered by FaceNet architecture! Achieving high accuracy in face detection and recognition with deep learning technologies.",
      bossDefeated: "Identity Verification Challenges",
      treasureFound: ["Python", "TensorFlow", "FaceNet", "OpenCV", "Deep Learning", "Computer Vision"],
      crewGrowth: "Computer Vision & Biometric Security",
      githubUrl: "https://github.com/saikoushiknalubola/face-recognition-facenet",
      gradient: "from-green-600 to-teal-600",
      icon: Brain,
      category: "Computer Vision Adventure",
      bounty: "Secure Authentication",
      year: "2023"
    },
    {
      title: "Credit Card Anomaly Detection",
      islandName: "FinSec Island",
      description: "Protecting treasure from digital pirates! Advanced anomaly detection system that identifies fraudulent credit card transactions using machine learning algorithms.",
      bossDefeated: "Financial Fraud & Security Threats",
      treasureFound: ["Python", "Scikit-learn", "Pandas", "Anomaly Detection", "Data Science", "Security"],
      crewGrowth: "Fraud Detection & Financial Security",
      githubUrl: "https://github.com/saikoushiknalubola/credit-card-anomaly-detection",
      gradient: "from-red-600 to-orange-600",
      icon: Shield,
      category: "Security Adventure",
      bounty: "Financial Safety",
      year: "2023"
    },
    {
      title: "AI-Powered Crop Health Monitoring",
      islandName: "AgriTech Island",
      description: "Helping farmers navigate the treacherous waters of crop diseases! AI system that monitors crop health and provides early disease detection using image analysis.",
      bossDefeated: "Crop Diseases & Agricultural Losses",
      treasureFound: ["Python", "TensorFlow", "Computer Vision", "IoT", "Agriculture AI", "Image Processing"],
      crewGrowth: "Agricultural Technology & Sustainability",
      githubUrl: "https://github.com/saikoushiknalubola/crop-health-monitoring",
      gradient: "from-green-600 to-emerald-600",
      icon: Leaf,
      category: "AgriTech Adventure",
      bounty: "Healthy Harvests",
      year: "2024"
    },
    {
      title: "Carbon Neutrality Pathways",
      islandName: "Climate Island",
      description: "Charting the course to a sustainable future! Comprehensive analysis and modeling system for carbon neutrality pathways using data science and environmental modeling.",
      bossDefeated: "Climate Change & Carbon Emissions",
      treasureFound: ["Python", "Data Analysis", "Environmental Modeling", "Visualization", "Sustainability"],
      crewGrowth: "Climate Tech & Environmental Solutions",
      githubUrl: "https://github.com/saikoushiknalubola/carbon-neutrality-pathways",
      gradient: "from-blue-600 to-green-600",
      icon: Globe,
      category: "Climate Tech Adventure",
      bounty: "Sustainable Future",
      year: "2024"
    },
    {
      title: "Vitalia - Digital Health Companion",
      islandName: "HealthTech Island",
      description: "Your personal health navigator on the journey to wellness! AI-powered digital health companion that provides personalized health insights and recommendations.",
      bossDefeated: "Health Management Complexity",
      treasureFound: ["React Native", "AI/ML", "Healthcare APIs", "Mobile Development", "Health Analytics"],
      crewGrowth: "Healthcare Technology & Wellness Innovation",
      githubUrl: "https://github.com/saikoushiknalubola/vitalia-health-companion",
      gradient: "from-pink-600 to-red-600",
      icon: Heart,
      category: "HealthTech Adventure",
      bounty: "Better Health Outcomes",
      year: "2024"
    }
  ];

  const handleViewCode = (githubUrl: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("=== BUTTON CLICK DEBUG ===");
    console.log("Button clicked! URL:", githubUrl);
    console.log("Event:", e);
    
    try {
      console.log("Attempting to open:", githubUrl);
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
      console.log("Window.open called successfully");
    } catch (error) {
      console.error("Error in handleViewCode:", error);
      // Fallback - try direct navigation
      window.location.href = githubUrl;
    }
  };

  const handleViewAllProjects = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const githubUrl = "https://github.com/saikoushiknalubola";
    console.log("=== VIEW ALL PROJECTS DEBUG ===");
    console.log("Explore All Projects clicked, URL:", githubUrl);
    try {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
      console.log("GitHub profile opened successfully");
    } catch (error) {
      console.error("Error opening GitHub profile:", error);
      window.location.href = githubUrl;
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a2e] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="absolute top-1/4 right-1/4 opacity-10">
          <Map className="w-16 sm:w-24 h-16 sm:h-24 text-yellow-600" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with outline */}
        <div className={`text-center mb-12 sm:mb-16 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-blue-500/30 shadow-2xl">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Map className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent" style={{ fontFamily: "'Pirata One', cursive" }}>
                  Legendary Projects
                </h2>
                <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-500" />
              </div>
              
              <div className="mb-6">
                <p className="text-xl sm:text-2xl md:text-3xl text-blue-400 jp-text font-bold">
                  伝説のプロジェクト
                </p>
                <p className="text-gray-400 italic">(Legendary Projects)</p>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Every great developer has legendary projects! These are the real adventures I've conquered, 
                the technical challenges I've defeated, and the innovative solutions I've built on my journey to become the King of Code!
              </p>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {realProjects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-[#1a1a1a] rounded-2xl border-2 border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 overflow-hidden transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Header */}
              <div className="relative p-4 sm:p-6 border-b border-gray-700/50">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${project.gradient} shadow-lg`}>
                      <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <span className="px-2 sm:px-3 py-1 text-xs font-bold rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">YEAR</div>
                    <div className="text-sm sm:text-base font-black text-yellow-400">{project.year}</div>
                  </div>
                </div>

                <div className="mb-2">
                  <h4 className="text-sm text-blue-400 font-semibold">{project.islandName}</h4>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 relative z-20">
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                    <Crown className="w-4 h-4 mr-2" />
                    Challenge Conquered:
                  </h5>
                  <p className="text-xs text-gray-400">{project.bossDefeated}</p>
                </div>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-yellow-400 mb-2 flex items-center">
                    <Gift className="w-4 h-4 mr-2" />
                    Tech Stack:
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {project.treasureFound.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-gray-800/80 text-gray-300 border border-gray-600/50 hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-green-400 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Skills Gained:
                  </h5>
                  <p className="text-xs text-gray-400">{project.crewGrowth}</p>
                </div>

                <div className="flex space-x-3 relative z-30">
                  <button
                    onClick={(e) => {
                      console.log("=== DIRECT BUTTON CLICK ===");
                      console.log("Button element clicked directly");
                      handleViewCode(project.githubUrl, e);
                    }}
                    className="flex-1 flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30 text-sm font-bold relative z-40"
                    style={{ 
                      minHeight: '44px',
                      position: 'relative',
                      zIndex: 50,
                      pointerEvents: 'auto'
                    }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      console.log("=== DIRECT LINK CLICK ===");
                      console.log("Direct link clicked:", project.githubUrl);
                    }}
                    className="flex items-center justify-center px-3 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 rounded-lg transition-all duration-300 hover:scale-105 relative z-40"
                    style={{ 
                      minHeight: '44px',
                      position: 'relative',
                      zIndex: 50,
                      pointerEvents: 'auto'
                    }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-blue-500/20">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Want to Build Something Epic Together?
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-2">
                次の冒険を一緒に始めませんか？
              </p>
              <p className="text-gray-400 italic mb-6">(Shall we start the next adventure together?)</p>
            </div>
            
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              These projects represent my journey so far, but the best adventures are yet to come! 
              Let's collaborate and create something that'll change the world!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/30"
              >
                <Star className="w-5 h-5" />
                <span>Let's Collaborate!</span>
              </a>
              <button
                onClick={(e) => {
                  console.log("=== EXPLORE ALL PROJECTS BUTTON ===");
                  console.log("Explore All Projects button clicked");
                  handleViewAllProjects(e);
                }}
                className="inline-flex items-center justify-center space-x-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-blue-300 font-bold rounded-lg hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 relative z-40"
                style={{ 
                  position: 'relative',
                  zIndex: 50,
                  pointerEvents: 'auto'
                }}
              >
                <Map className="w-5 h-5" />
                <span>Explore All Projects</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
