import React from 'react';
import Layout from '../components/Layout';
import OnePieceSection from '../components/OnePieceSection';
import OnePieceCharacters from '../components/OnePieceCharacters';
import OnePieceMapSection from '../components/OnePieceMapSection';

const OnePiecePage = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div className="py-8 lg:py-12">
          <OnePieceMapSection />
        </div>
        
        <div className="py-8 lg:py-12">
          <OnePieceCharacters />
        </div>
        
        <div className="py-8 lg:py-12 bg-[#121212]">
          <OnePieceSection />
        </div>
      </div>
    </Layout>
  );
};

export default OnePiecePage;