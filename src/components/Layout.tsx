
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for animation purposes
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212]">
        <div className="text-center relative">
          <div className="absolute -inset-32 rounded-full bg-pink-600/10 blur-3xl animate-pulse"></div>
          <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6 relative z-10 font-heading tracking-wider">
            Saikoushik Nalubola
          </h1>
          <div className="relative">
            <div className="w-16 h-16 border-4 border-t-transparent border-pink-500 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-pink-500/20 blur-sm"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-gray-100">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">{children}</main>
      <Footer />
      
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-pink-600/80 text-white rounded-full shadow-lg shadow-pink-500/30 hover:bg-pink-500 transition-colors z-40 group backdrop-blur-sm"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Layout;
