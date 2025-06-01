
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import OnePieceSection from '../components/OnePieceSection';
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
          const navbarHeight = 100; // Increased for better spacing
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight, 
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });
    
    // Intersection observer for scroll animations
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
    
    // Observe all sections
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
      <div id="hero" className="relative">
        <Hero />
      </div>
      
      {/* Fixed spacing to prevent overlap */}
      <div id="about" className="py-12 lg:py-20 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <About />
      </div>
      
      <div id="experience" className="py-12 lg:py-20 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <Experience />
      </div>
      
      <div id="projects" className="scroll-animate bg-[#121212] relative transition-all duration-700 pt-8" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <Projects />
      </div>
      
      {/* One Piece themed section with form */}
      <div className="scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <OnePieceSection />
      </div>
      
      <div id="skills" className="py-12 lg:py-20 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <Skills />
      </div>
      
      <div id="contact" className="py-12 lg:py-20 scroll-animate bg-[#121212] relative transition-all duration-700" style={{ opacity: 1, transform: 'translateY(0)' }}>
        <Contact />
      </div>
    </Layout>
  );
};

export default Index;
