
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
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 80, 
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });
    
    // Intersection Observer for scroll animations - simplified for reliability
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ensure immediate visibility when in view
          entry.target.classList.add('animate-fade-in');
          const htmlElement = entry.target as HTMLElement;
          htmlElement.style.opacity = '1';
        }
      });
    }, observerOptions);
    
    // Observe all sections with slight delay to ensure proper loading
    setTimeout(() => {
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
      });
    }, 100);
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
      
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
      
      {/* Initial opacity-0 but making sure z-index and positioning is correct */}
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
