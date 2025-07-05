import React from 'react';
import Layout from '../components/Layout';
import About from '../components/About';
import Experience from '../components/Experience';

const AboutPage = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div id="about" className="py-8 lg:py-12 bg-[#121212]">
          <About />
        </div>
        
        <div id="experience" className="py-8 lg:py-12 bg-[#121212]">
          <Experience />
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;