
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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            window.scrollTo({
              top: target.getBoundingClientRect().top + window.pageYOffset,
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default Index;
