import React from 'react';
import Layout from '../components/Layout';
import Entrepreneurship from '../components/Entrepreneurship';

const BusinessPage = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div id="entrepreneurship" className="py-8 lg:py-12">
          <Entrepreneurship />
        </div>
      </div>
    </Layout>
  );
};

export default BusinessPage;