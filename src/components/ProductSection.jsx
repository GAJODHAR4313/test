import React from 'react';

function ProductSection() {
  return (
    <section id="categories" className="w-full relative z-50 pt-10">
      {/* Background Image */}
      <img src="/Rectangle 12.png" alt="Product Section Background" className="absolute -top-[5%] md:-top-[8%] left-0 w-full h-[110%] object-cover z-0 pointer-events-none" />
      
      {/* Blur Overlay between sections */}
      <img src="/Rectangle 9.png" alt="Blur Overlay" className="absolute -top-[40px] md:-top-[80px] left-0 w-full h-auto z-10 object-cover pointer-events-none" />
      
      {/* Overlapping Tractors */}
      <div className="hidden md:block absolute -top-[120px] md:-top-[160px] left-0 z-50 pointer-events-none transform-gpu">
        <img src="/tracL.png" alt="Tractor Left" className="w-[160px] md:w-[240px] object-contain transform-gpu will-change-transform" />
      </div>
      <div className="hidden md:block absolute -top-[140px] md:-top-[190px] right-0 z-50 pointer-events-none transform-gpu">
        <img src="/tracR.png" alt="Tractor Right" className="w-[130px] md:w-[200px] object-contain transform-gpu will-change-transform" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-0 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex justify-center items-center gap-1 mb-4">
          <img src="/leafl.png" alt="Leaf Icon Left" className="w-12 md:w-16 h-auto object-contain" />
          <h3 className="text-[#0d6e49] font-bold text-lg tracking-wide">Our Product Categories</h3>
          <img src="/leaf.png" alt="Leaf Icon Right" className="w-12 md:w-16 h-auto object-contain" />
        </div>

        <h2 className="text-2xl md:text-[2rem] font-bold mb-20 text-center leading-tight font-marko">
          Complete <span className="text-[#0d6e49]">Agricultural Solutions</span> for Every<br />
          Stage of Crop Growth
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 justify-items-center">
          {[11, 12, 13, 14, 15, 16, 17, 18].map((num) => (
            <div key={num} className="flex flex-col items-center w-full max-w-[140px] hover:-translate-y-2 transition-transform duration-300 transform-gpu">
              <img src={`/Group ${num}.png`} alt={`Product Category ${num}`} className="w-full h-auto object-contain transition-all transform-gpu will-change-transform" />
            </div>
          ))}
        </div>
      </div>

      {/* Wood Divider Image below the section */}
      <div className="w-full mt-4 lg:mt-6 relative z-10 flex justify-center">
        <img src="/wood.png" alt="Wood Divider" className="w-full h-auto max-w-[1920px] object-cover pointer-events-none" />
      </div>
    </section>
  );
}

export default ProductSection;
