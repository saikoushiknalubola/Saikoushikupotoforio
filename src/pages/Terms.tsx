
import React from 'react';
import Layout from '../components/Layout';
import { Scroll, Handshake, AlertTriangle, Anchor } from 'lucide-react';

const Terms = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-[#121212] pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Scroll className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Terms of Service
            </h1>
            <p className="text-gray-400 text-lg">
              The crew's code for our digital adventure
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <div className="space-y-8">
              <section>
                <div className="flex items-center mb-4">
                  <Handshake className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Our Agreement</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Welcome aboard, nakama! By using this website, you're joining my crew on this epic digital adventure. 
                  These terms ensure we sail together smoothly towards our shared goals of innovation and success.
                </p>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Anchor className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Acceptable Use</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Like any good pirate crew, we have rules! Use this site responsibly, respect others, and don't engage in any activities 
                  that would make even the worst pirates ashamed. Be honorable in your digital adventures.
                </p>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Limitations</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  While I strive to provide the best experience possible, like any adventure on the Grand Line, 
                  there might be unexpected challenges. I'm not liable for any damages, but I'll always do my best to help you navigate through any storms.
                </p>
              </section>

              <section className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Questions About the Code?</h3>
                <p className="text-gray-300">
                  If you need clarification about any of these terms or want to discuss our digital adventure, 
                  don't hesitate to contact the captain at{' '}
                  <a href="mailto:saikoushik42@gmail.com" className="text-orange-400 hover:text-orange-300 underline">
                    saikoushik42@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
