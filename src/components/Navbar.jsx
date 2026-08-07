import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'categories', 'products', 'features', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the top third of the viewport
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(prev => prev !== current ? current : prev);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getDesktopLinkClass = (section) => {
    return activeSection === section
      ? "bg-[#156d49] text-white px-5 py-1.5 md:px-6 md:py-2 text-xs md:text-sm rounded-full font-bold shadow-lg transition"
      : "bg-white text-[#156d49] px-5 py-1.5 md:px-6 md:py-2 text-xs md:text-sm rounded-full font-medium shadow-lg hover:bg-slate-50 transition";
  };

  const getMobileLinkClass = (section) => {
    return activeSection === section
      ? "bg-[#156d49] text-white font-bold py-2.5 px-4 rounded-lg"
      : "text-[#156d49] font-medium py-2.5 px-4 hover:bg-slate-50 rounded-lg transition-colors";
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'backdrop-blur-md bg-white/90 md:bg-white/30 shadow-md py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between relative">
        
        {/* Desktop Left Links */}
        <div className="hidden md:flex space-x-2 md:space-x-3 w-1/3 justify-start">
          <a href="#home" className={getDesktopLinkClass('home')}>Home</a>
          <a href="#about" className={getDesktopLinkClass('about')}>About</a>
          <a href="#products" className={getDesktopLinkClass('products')}>Products</a>
        </div>

        {/* Logo */}
        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0 mx-auto md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
          <img src="/Sophora Round Logo 1.png" alt="Sophora Logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Right Links */}
        <div className="hidden md:flex space-x-2 md:space-x-3 w-1/3 justify-end">
          <a href="#categories" className={getDesktopLinkClass('categories')}>Categories</a>
          <a href="#features" className={getDesktopLinkClass('features')}>Features</a>
          <a href="#contact" className={getDesktopLinkClass('contact')}>Contact</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-[#156d49] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl flex flex-col py-4 px-6 gap-2 border-t border-gray-100">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('home')}>Home</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('about')}>About</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('products')}>Products</a>
          <a href="#categories" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('categories')}>Categories</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('features')}>Features</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={getMobileLinkClass('contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
