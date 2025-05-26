
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
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - 60, 
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });
    
    // Simpler intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10px 0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    // Observe all sections immediately
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
      
      sections.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <Layout>
      <div id="hero" className="min-h-screen">
        <Hero />
      </div>
      
      {/* Optimized mobile spacing */}
      <div id="about" className="py-4 sm:py-8 lg:py-12 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <About />
      </div>
      
      <div id="experience" className="py-4 sm:py-8 lg:py-12 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <Experience />
      </div>
      
      <div id="projects" className="py-4 sm:py-8 lg:py-12 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <Projects />
      </div>
      
      <div id="skills" className="py-4 sm:py-8 lg:py-12 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <Skills />
      </div>
      
      <div id="contact" className="py-4 sm:py-8 lg:py-12 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
