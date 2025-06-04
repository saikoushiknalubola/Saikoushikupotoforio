
import React from 'react';
import Layout from '../components/Layout';
import { Shield, Eye, Lock, Users } from 'lucide-react';

const Privacy = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-[#121212] pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Your privacy is as sacred as the One Piece treasure
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <div className="space-y-8">
              <section>
                <div className="flex items-center mb-4">
                  <Eye className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Like a careful navigator charting unknown waters, we only collect information necessary for our digital adventure. 
                  This includes contact information you provide through forms, usage analytics to improve our services, and technical data to ensure smooth sailing.
                </p>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">How We Protect Your Data</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Your data is protected with the same determination I have for becoming the Pirate King! We use industry-standard encryption, 
                  secure servers, and follow best practices to ensure your information remains safe from digital sea monsters.
                </p>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Data Sharing</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Just like I'd never betray my crew, we never sell or share your personal information with third parties without your consent. 
                  Your data stays with our trusted crew unless required by law or necessary for service functionality.
                </p>
              </section>

              <section className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Contact the Captain</h3>
                <p className="text-gray-300">
                  If you have any questions about this privacy policy or how we handle your data, 
                  feel free to reach out to me directly at{' '}
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

export default Privacy;
