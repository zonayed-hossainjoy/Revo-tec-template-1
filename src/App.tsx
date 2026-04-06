import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customers from './components/Customers';
import Features from './components/Features';
import Products from './components/Products';
import AppSection from './components/AppSection';
import Solutions from './components/Solutions';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import StartControlling from './components/StartControlling';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const startTransition = () => {
    setIsExiting(true);
    // Remove the video from DOM after transition completes (matching duration-1000)
    setTimeout(() => {
      setShowIntro(false);
    }, 1000);
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="relative w-full min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-[#0a0f18] dark:text-gray-100">
          {/* Intro Video Overlay */}
          {showIntro && (
            <div 
              className={`fixed inset-0 w-full h-full bg-black z-[100] flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <video 
                className="w-full h-full object-cover"
                autoPlay 
                muted 
                playsInline 
                onEnded={startTransition}
              >
                <source src="/images/RENSER MAIN.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button 
                onClick={startTransition}
                className="absolute bottom-8 right-8 text-black/40 border border-black/40 px-6 py-2 rounded-full hover:text-[#99BB42] hover:border-[#99BB42] hover:bg-transparent transition-all duration-300 z-10 backdrop-blur-sm"
              >
                Skip Intro
              </button>
            </div>
          )}

          {/* Main Content with Fade In */}
          <div className={`transition-opacity duration-1000 ease-in-out ${isExiting || !showIntro ? 'opacity-100' : 'opacity-0'}`}>
            <Navbar />
            <Hero />
            <Customers />
            <Features />
            <Products />
            <AppSection />
            <Solutions />
            <Testimonials />
            <CTA />
            <FAQ />
            <Contact />
            <StartControlling />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
