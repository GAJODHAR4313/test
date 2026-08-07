import React from 'react';

function WhyWeSection() {
  return (
    <section id="features" className="w-full relative z-10 bg-gradient-to-b from-[#FEF9E2] via-[#FEF9E2] via-[85%] to-white pt-10 md:pt-16 lg:pt-20 pb-8 lg:pb-16 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">

        {/* Top Left Title */}
        <div className="w-full flex justify-start mb-8 pl-4 lg:pl-16">
          <h3 className="text-[#0d6e49] font-bold text-xl md:text-2xl flex items-center gap-3">
            <img src="/leafl.png" alt="Leaf" className="w-6 md:w-8 h-auto object-contain" />
            Why Choose Sophora Agri
          </h3>
        </div>

        {/* Two Column Layout (Image & Points) */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mb-10 lg:-mb-4 px-4 lg:px-16 relative z-10">

          {/* Left: Big Circular Plant Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative mt-10 lg:mt-0 lg:-translate-x-6">
            <img
              src="/bigplant.png"
              alt="Sophora Big Plant"
              className="w-full max-w-[450px] md:max-w-[600px] lg:max-w-[700px] h-auto object-contain relative z-10 scale-105 md:scale-[1.08] lg:scale-110 origin-center"
            />
          </div>

          {/* Right: Text Points */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:gap-14 relative z-20 -mt-10 lg:-mt-20 lg:-ml-12">

            {/* Point 1 */}
            <div className="flex items-start gap-6 lg:-translate-x-32 transition-transform relative z-30">
              <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-[#e8f1d5] flex items-center justify-center shrink-0 shadow-sm border border-[#d6e7b9]">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[#0d6e49] font-bold text-lg md:text-xl mb-1">Science-Driven Innovation</h4>
                <p className="text-black text-xs md:text-sm leading-relaxed font-medium max-w-[450px]">
                  Every product is developed using advanced agricultural research and modern technology to deliver consistent performance in the field.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-start gap-6 lg:-translate-x-4 transition-transform relative z-30">
              <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-[#e8f1d5] flex items-center justify-center shrink-0 shadow-sm border border-[#d6e7b9]">
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[#0d6e49] font-bold text-lg md:text-xl mb-1">Premium Quality Assurance</h4>
                <p className="text-black text-xs md:text-sm leading-relaxed font-medium max-w-[450px]">
                  Manufactured with carefully selected raw materials and strict quality control to ensure safety, reliability, and superior crop performance.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-start gap-6 lg:-translate-x-6 transition-transform relative z-30">
              <div className="w-12 h-12 md:w-[60px] md:h-[60px] rounded-full bg-[#e8f1d5] flex items-center justify-center shrink-0 shadow-sm border border-[#d6e7b9]">
                <span className="text-2xl">🌾</span>
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[#0d6e49] font-bold text-lg md:text-xl mb-1">Complete Agricultural Solutions</h4>
                <p className="text-black text-xs md:text-sm leading-relaxed font-medium max-w-[450px]">
                  From crop nutrition and micronutrients to biostimulants, biofertilizers, and plant protection products, we provide everything farmers need under one trusted brand.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Banner Image */}
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 -mt-1 lg:-mt-2 relative z-30 flex justify-center">
          <div className="relative w-full drop-shadow-2xl rounded-3xl overflow-hidden">
            <img src="/Frame 1.png" alt="Get Started Banner" className="w-full h-auto object-contain rounded-3xl" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-24 lg:px-32 z-10">
              <div className="flex flex-col text-white max-w-lg lg:max-w-2xl md:mb-0 text-center md:text-left items-center md:items-start gap-2 -mt-4 lg:-mt-8 ml-0 md:ml-16 lg:ml-56">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-marko leading-tight drop-shadow-md mb-2">Your Next Successful Harvest <br />Starts Here.</h2>
                <button className="bg-gradient-to-r from-[#b3da2f] to-[#126b48] border border-[#0b543b] text-white px-8 py-3 rounded-full font-semibold shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-black/50 hover:scale-105 transition-all text-sm md:text-base">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyWeSection;
