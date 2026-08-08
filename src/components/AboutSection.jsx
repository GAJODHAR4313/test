import React from 'react';

function AboutSection() {
  return (
    <>
      <section id="about" className="relative w-full bg-[#fdfefc] min-h-[750px] overflow-hidden pt-8 pb-32 -mt-8 z-20">

        {/* Decorative Leaf branches */}
        <div className="absolute top-[20%] left-0 z-10 w-24 md:w-32 lg:w-48">
          <img src="/rightl.png" alt="Left Leaf Branch" className="w-full h-auto object-contain drop-shadow-md" />
        </div>
        <div className="absolute top-[30%] right-0 z-10 w-24 md:w-32 lg:w-48">
          <img src="/leftl.png" alt="Right Leaf Branch" className="w-full h-auto object-contain drop-shadow-md" />
        </div>

        {/* Top Center Logo */}
        <div className="flex justify-center w-full relative md:absolute md:top-6 md:left-1/2 md:-translate-x-1/2 z-40 mb-2 md:mb-0">
          <img src="/wbg.png" alt="Sophora Logo" className="h-20 md:h-24 object-contain drop-shadow-sm" />
        </div>

        <div className="max-w-[1300px] mx-auto px-6 w-full relative z-30 pt-8 md:pt-16 flex flex-col lg:flex-row items-center lg:items-start justify-between">

          {/* Left Column: Text Block */}
          <div className="w-full lg:w-4/12 relative mt-0 lg:-mt-16 z-40 flex flex-col items-center lg:items-start">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight font-marko text-[#a4d233] w-full lg:w-[130%] drop-shadow-md text-center lg:text-left">
              Rooted in <br />
              Science. <span className="text-[#0d6e49]">Growing</span><br />
              <span className="text-[#0d6e49]">with Nature.</span>
            </h2>
            <button className="bg-[#0d6e49] text-white px-8 py-3.5 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all">
              Become Dealer
            </button>

            {/* 100% Assured Quality Badge */}
            <div className="absolute top-[110%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[45%] z-30 flex items-center justify-center min-w-[180px] md:min-w-[220px] lg:min-w-[260px]">
              <img src="/bgbt.png" alt="Badge Background" className="absolute inset-0 w-full h-full object-contain drop-shadow-md z-0" />
              <div className="relative z-10 text-white font-bold text-sm md:text-lg lg:text-xl px-6 py-3 md:px-10 md:py-5 whitespace-nowrap">
                100% Assured Quality
              </div>
            </div>
          </div>

          {/* Center Column: Leaf Collage */}
          <div className="w-full lg:w-4/12 flex justify-center items-center relative mt-20 lg:mt-0 z-20">
            <div className="relative w-[360px] flex items-center justify-center">
              <img src="/mid.png" alt="Leaves Collage" className="w-full h-auto object-contain drop-shadow-2xl" />
            </div>
          </div>

          {/* Right Column: Happy Farmers & Dealers text */}
          <div className="w-full lg:w-4/12 flex flex-col items-center lg:items-end relative mt-20 lg:mt-0 z-20 pr-4">

            {/* Top Right: Happy Farmers */}
            <div className="flex flex-col items-center mb-16 lg:mr-12">
              <div className="flex -space-x-3 mb-3">
                <img src="/Ellipse 1.png" alt="Happy Farmer 1" className="w-16 h-16 rounded-full border-[3px] border-white shadow-md object-cover" />
                <img src="/Ellipse 2.png" alt="Happy Farmer 2" className="w-16 h-16 rounded-full border-[3px] border-white shadow-md object-cover" />
                <img src="/Ellipse 3.png" alt="Happy Farmer 3" className="w-16 h-16 rounded-full border-[3px] border-white shadow-md object-cover" />
                <img src="/Ellipse 4.png" alt="Happy Farmer 4" className="w-16 h-16 rounded-full border-[3px] border-white shadow-md object-cover" />
              </div>
              <span className="text-[#0d6e49] font-bold text-sm">10k+ Happy Farmers</span>
            </div>

            {/* Middle Right: Dealers & Text */}
            <div className="w-full max-w-[340px] flex flex-col items-center lg:items-start">
              <div className="relative flex items-center justify-center mb-6 w-fit min-w-[160px] md:min-w-[200px] mt-2 md:-mt-12 ml-0 lg:-ml-24 z-30">
                <img src="/Rectangle 25.png" alt="Dealers Badge" className="absolute inset-0 w-full h-full object-fill drop-shadow-lg z-0 rounded-xl" />
                <div className="relative z-10 text-white font-bold px-6 py-3 md:px-8 md:py-5 text-xs md:text-sm text-center">
                  500+ Dealers Across<br />Maharashtra
                </div>
              </div>
              <p className="text-gray-900 text-sm font-medium leading-relaxed text-center lg:text-left ml-0 lg:ml-16 px-4 lg:px-0">
                We are committed to developing advanced crop nutrition and plant care solutions that help farmers achieve healthier crops, improved productivity, and sustainable agricultural growth.
              </p>
            </div>
          </div>

        </div>

        {/* Background Landscape Image */}
        <div className="absolute bottom-0 w-full z-0 pointer-events-none">
          {/* Rectangle 9 Blur Overlay */}
          <img src="/Rectangle 9.png" alt="Blur Overlay" className="absolute -top-[100px] left-0 w-full h-auto z-10 object-cover" />
          <img src="/bg2.png" alt="Landscape Background" className="w-full h-auto object-cover object-bottom" />
        </div>

      </section>
    </>
  );
}

export default AboutSection;