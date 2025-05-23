
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Saikoushik Nalubola | AI Engineer & Entrepreneur";
    
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80, // Added offset for better UI
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });
    
    // Enhanced scroll animations with better visibility
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          // Access style property safely by casting to HTMLElement
          const htmlElement = entry.target as HTMLElement;
          htmlElement.style.opacity = '1';
        }
      });
    }, observerOptions);
    
    // Ensure all sections are properly observed
    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
      
      // Clean up observer
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <Layout>
      <div id="hero" className="min-h-screen py-20 sm:py-0">
        <Hero />
      </div>
      
      {/* Removed min-h-screen to prevent sections being pushed out of view 
          Increased opacity for better visibility */}
      <div id="about" className="py-16 scroll-animate opacity-0 bg-[#121212] z-10 relative">
        <About />
      </div>
      
      <div id="experience" className="py-16 scroll-animate opacity-0 bg-[#121212] z-10 relative">
        <Experience />
      </div>
      
      <div id="projects" className="py-16 scroll-animate opacity-0 bg-[#121212] z-10 relative">
        <Projects />
      </div>
      
      <div id="skills" className="py-16 scroll-animate opacity-0 bg-[#121212] z-10 relative">
        <Skills />
      </div>
      
      <div id="contact" className="py-16 scroll-animate opacity-0 bg-[#121212] z-10 relative">
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
