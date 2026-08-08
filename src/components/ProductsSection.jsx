import React, { useRef, useEffect } from 'react';

function ProductsSection() {
  const scrollContainerRef = useRef(null);
  const blockRef = useRef(null);

  // Set initial scroll position to the middle block so we can scroll left immediately
  useEffect(() => {
    if (scrollContainerRef.current && blockRef.current) {
      scrollContainerRef.current.scrollLeft = blockRef.current.offsetWidth;
    }
  }, []);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (blockRef.current) {
        const itemWidth = blockRef.current.offsetWidth / 7;
        smoothScrollBy(itemWidth * 2);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const smoothScrollBy = (distance, duration = 600) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    
    const start = container.scrollLeft;
    const startTime = performance.now();
    
    // Smooth ease-out cubic curve
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
    
    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      container.scrollLeft = start + distance * easeOutCubic(progress);
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  };

  const handleNext = () => {
    if (blockRef.current) {
      const itemWidth = blockRef.current.offsetWidth / 7;
      smoothScrollBy(itemWidth * 2);
    }
  };

  const handlePrev = () => {
    if (blockRef.current) {
      const itemWidth = blockRef.current.offsetWidth / 7;
      smoothScrollBy(-itemWidth * 2);
    }
  };

  const handleScroll = (e) => {
    const container = e.target;
    if (!blockRef.current) return;
    const blockWidth = blockRef.current.offsetWidth;
    
    // If we scroll into the first block buffer, snap forward instantly
    if (container.scrollLeft <= blockWidth * 0.1) {
      container.scrollLeft += blockWidth;
    } 
    // If we scroll into the third block buffer, snap backward instantly
    else if (container.scrollLeft >= blockWidth * 2.1) {
      container.scrollLeft -= blockWidth;
    }
  };

  const ProductBlock = React.forwardRef((props, ref) => (
    <div ref={ref} className="flex items-end gap-3 md:gap-6 shrink-0 pr-3 md:pr-6">
      {[1, 2, 3, 4, 5, 6, 7].map((num) => (
        <div 
          key={num} 
          className="w-36 md:w-52 lg:w-60 h-56 md:h-76 lg:h-80 flex justify-center items-end hover:-translate-y-2 transition-transform duration-300 shrink-0 pb-10 md:pb-16 lg:pb-20"
        >
          <img src={`/ChatGPT Image Jul 29, 2026, 11_58_08 AM-Photoroom ${num}.png`} alt={`Product ${num}`} className="w-full h-full object-contain drop-shadow-lg pointer-events-none" />
        </div>
      ))}
    </div>
  ));

  return (
    <section id="products" className="w-full relative z-40 bg-white pt-6 md:pt-10 pb-4 overflow-visible">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <img src="/leafl.png" alt="Leaf Icon Left" className="w-12 md:w-16 h-auto object-contain" />
          <h3 className="text-[#0d6e49] font-bold text-lg tracking-wide">Our Products</h3>
          <img src="/leaf.png" alt="Leaf Icon Right" className="w-12 md:w-16 h-auto object-contain" />
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-[2rem] font-bold mb-4 text-center leading-tight font-marko -mt-4 md:-mt-8 relative z-10 pointer-events-none">
          Innovative Solutions for <span className="text-[#0d6e49]">Healthier Crops</span> &<br />
          Better Harvests
        </h2>

        {/* View All Products Button */}
        <button className="bg-gradient-to-b from-[#84c142] to-[#5a8c27] text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform border border-white/30 mb-4">
          View All Products
        </button>

        {/* Carousel / Bottles Area */}
        <div className="w-full flex items-center justify-between relative mt-2 px-0 md:px-6">
          
          {/* Left Arrow */}
          <div 
            className="absolute md:relative left-1 md:left-auto w-10 h-10 min-w-[40px] min-h-[40px] md:w-16 md:h-16 md:min-w-[64px] md:min-h-[64px] rounded-full bg-gradient-to-b from-[#84c142] to-[#5a8c27] flex items-center justify-center text-white cursor-pointer hover:scale-110 active:scale-95 transition-transform shadow-lg z-30 shrink-0 text-lg md:text-2xl select-none mb-36 md:mb-56 lg:mb-80"
            onClick={handlePrev}
          >
            ←
          </div>

          {/* Bottles Grid - Infinite Scrollable */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="w-full md:flex-1 flex items-end relative z-10 min-h-[350px] overflow-x-auto no-scrollbar mx-0 md:mx-4 px-12 md:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <ProductBlock ref={blockRef} />
            <ProductBlock />
            <ProductBlock />
            <ProductBlock />
            <ProductBlock />
          </div>

          {/* Right Arrow */}
          <div 
            className="absolute md:relative right-1 md:right-auto w-10 h-10 min-w-[40px] min-h-[40px] md:w-16 md:h-16 md:min-w-[64px] md:min-h-[64px] rounded-full bg-gradient-to-b from-[#84c142] to-[#5a8c27] flex items-center justify-center text-white cursor-pointer hover:scale-110 active:scale-95 transition-transform shadow-lg z-30 shrink-0 text-lg md:text-2xl select-none mb-36 md:mb-56 lg:mb-80"
            onClick={handleNext}
          >
            →
          </div>
        </div>

      </div>

      {/* Wooden Table Image */}
      <div className="w-full relative z-0 -mt-20 md:-mt-40 lg:-mt-64 -mb-16 md:-mb-32 lg:-mb-48 pointer-events-none">
        <img src="/table.png" alt="Wooden Table" className="w-full h-auto block scale-105 md:scale-110 origin-bottom drop-shadow-2xl" />
      </div>
    </section>
  );
}

export default ProductsSection;
