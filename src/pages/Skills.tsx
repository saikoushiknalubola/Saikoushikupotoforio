import React from 'react';
import Layout from '../components/Layout';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';

const SkillsPage = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div id="skills" className="py-8 lg:py-12 bg-[#121212]">
          <Skills />
        </div>
        
        <div id="certifications" className="py-8 lg:py-12">
          <Certifications />
        </div>
      </div>
    </Layout>
  );
};

export default SkillsPage;