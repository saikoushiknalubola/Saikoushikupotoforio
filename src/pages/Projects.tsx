import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div id="projects" className="bg-[#121212]">
          <Projects />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;