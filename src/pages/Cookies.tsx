
import React from 'react';
import Layout from '../components/Layout';
import { Cookie, Settings, Info, Zap } from 'lucide-react';

const Cookies = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-[#121212] pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Cookie className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Pirata One', 'Creepster', cursive" }}>
              Cookie Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Digital treats that help enhance your adventure
            </p>
          </div>

          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <div className="space-y-8">
              <section>
                <div className="flex items-center mb-4">
                  <Info className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">What Are Cookies?</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Think of cookies as helpful little navigational tools - not the delicious kind Sanji makes! 
                  They're small data files that help our website remember your preferences and provide you with a better sailing experience.
                </p>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Settings className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">How We Use Cookies</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">Essential Cookies</h4>
                    <p className="text-gray-300 text-sm">
                      These are like our ship's compass - absolutely necessary for the website to function properly.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">Analytics Cookies</h4>
                    <p className="text-gray-300 text-sm">
                      Help us understand how you navigate our digital seas so we can improve your adventure experience.
                    </p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="font-bold text-orange-400 mb-2">Preference Cookies</h4>
                    <p className="text-gray-300 text-sm">
                      Remember your choices and settings, like a loyal crew member who knows exactly how you like things.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-orange-500 mr-3" />
                  <h2 className="text-2xl font-bold text-white">Managing Your Cookies</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  You're the captain of your own browser ship! You can control and delete cookies through your browser settings. 
                  However, disabling certain cookies might affect your experience on our site - like trying to navigate without a log pose!
                </p>
              </section>

              <section className="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-orange-400 mb-3">Cookie Questions?</h3>
                <p className="text-gray-300">
                  If you have any questions about our cookie policy or need help managing your preferences, 
                  feel free to contact me at{' '}
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

export default Cookies;
