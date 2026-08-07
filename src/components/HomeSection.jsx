import React from 'react';

function HomeSection() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
    >
      {/* Background Image layer with scale to crop more from top */}
      <div
        className="absolute inset-0 bg-cover pointer-events-none bg-transparent bg-[url('/mobibg.png')] md:bg-[url('/bg.png')]"
        style={{
          backgroundPosition: 'center bottom',
          transform: 'scale(1.2)',
          transformOrigin: 'bottom center'
        }}
      ></div>
      {/* Dark overlay for mobile readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-transparent pointer-events-none z-0"></div>


      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-20 md:pt-0 pb-12 md:pb-0">
        <h2 className="text-white text-[clamp(1.75rem,4vw,3.75rem)] font-bold tracking-wide drop-shadow-lg text-outline-white relative z-0 mb-2 md:mb-6">
          Cultivating Tomorrow's
        </h2>
        <h1 className="font-marko text-[clamp(3.5rem,10vw,10rem)] leading-[1.1] md:leading-tight text-3d-green -mt-2 md:-mt-8 lg:-mt-16 relative z-20 cursor-default pb-4 md:pb-8">
          Agriculture
        </h1>
        <h3 className="text-white text-[clamp(1.25rem,3vw,2.25rem)] font-semibold tracking-wide drop-shadow-lg mb-6 relative z-0 -mt-2 md:-mt-8 lg:-mt-12">
          with Science, Innovation & Nature.
        </h3>
        <p className="text-white max-w-3xl mx-auto text-[clamp(1rem,1.5vw,1.25rem)] font-medium drop-shadow-md mb-8 md:mb-10 leading-relaxed px-4 lg:px-2">
          Sophora Agri Industries Pvt. Ltd. delivers innovative crop nutrition, specialty fertilizers, biostimulants, micronutrients, and sustainable agricultural solutions
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-6 z-30 w-full sm:w-auto px-4 sm:px-0">
          <button className="w-full sm:w-auto bg-gradient-to-b from-[#84c142] to-[#5a8c27] text-white px-[clamp(1.5rem,2.5vw,2.5rem)] py-[clamp(0.75rem,1vw,1rem)] rounded-full font-bold text-[clamp(0.875rem,1.5vw,1.125rem)] shadow-xl hover:scale-105 transition-transform border border-white/30">
            Explore Products
          </button>
          <button className="w-full sm:w-auto bg-white text-[#156d49] px-[clamp(1.5rem,2.5vw,2.5rem)] py-[clamp(0.75rem,1vw,1rem)] rounded-full font-bold text-[clamp(0.875rem,1.5vw,1.125rem)] shadow-xl hover:scale-105 transition-transform border border-transparent">
            Become Dealer
          </button>
        </div>
      </div>

      {/* Floating Characters - using the provided image */}
      <img
        src="/Gemini_Generated_Image_hrg3txhrg3txhrg3-Photoroom 1.png"
        alt="Farmer Left"
        className="hidden md:block absolute bottom-16 left-0 h-[65%] object-contain z-20 pointer-events-none"
      />

      <img
        src="/Gemini_Generated_Image_wqfoq4wqfoq4wqfo-Photoroom 1.png"
        alt="Farmer Right"
        className="hidden md:block absolute bottom-14 right-0 h-[65%] object-contain z-20 pointer-events-none"
      />

    </section>
  );
}

export default HomeSection;
