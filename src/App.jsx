import React from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import ProductsSection from './components/ProductsSection';
import WhyWeSection from './components/WhyWeSection';
import ProcessSection from './components/ProcessSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative font-sans flex flex-col bg-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <HomeSection />

      {/* Main Content */}
      <main className="w-full relative">
        <AboutSection />
        <ProductSection />
        <ProductsSection />
        <WhyWeSection />
        <ProcessSection />
        <CertificationsSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
