
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
      <div className="min-h-screen flex items-center justify-center bg-anime-midnight">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-anime-amber animate-pulse mb-4">
            Saikoushik Nalubola
          </h1>
          <div className="w-16 h-16 border-4 border-anime-teal border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-anime-crimson/80 text-white rounded-full shadow-lg hover:bg-anime-crimson transition-colors"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Layout;
