import React from 'react';

function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "Research & Development",
      description: "Developing innovative agricultural solutions through advanced research and scientific expertise.",
      image: "/Ellipse 1.png",
      yOffset: "lg:translate-y-32"
    },
    {
      id: "02",
      title: "Quality Manufacturing",
      description: "Manufactured with premium ingredients under strict quality standards for consistent performance.",
      image: "/Ellipse 2.png",
      yOffset: "lg:-translate-y-8"
    },
    {
      id: "03",
      title: "Product Testing",
      description: "Every product is carefully tested to ensure safety, reliability, and effective field results.",
      image: "/Ellipse 3.png",
      yOffset: "lg:translate-y-24"
    },
    {
      id: "04",
      title: "Farmer Success",
      description: "Delivering trusted solutions that help farmers achieve healthier crops and better harvests.",
      image: "/Ellipse 4.png",
      yOffset: "lg:-translate-y-48"
    }
  ];

  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-16 md:pb-24 lg:pb-32 relative z-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end relative z-20">
          <div className="max-w-3xl -mt-8 lg:-mt-12">
            <div className="flex items-center gap-2 mb-3">
              <img src="/leaf.png" alt="Leaf" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
              <span className="text-[#136c47] font-semibold text-lg tracking-wide uppercase">Our Process</span>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-marko font-light leading-tight text-black mb-4">
              From Research to Results <span className="text-[#156d49]">Every Step is <br />Driven</span> by Excellence
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl font-['Hanken_Grotesk',sans-serif] leading-relaxed relative z-20">
              At Sophora Agri, every product follows a carefully designed process to ensure superior quality, consistent performance, and maximum value<br /> for farmers.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative w-full -mt-12 lg:-mt-56 flex justify-start lg:justify-center z-10 overflow-x-auto no-scrollbar pb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <img src="/Group 19.png" alt="Our Process Timeline" className="w-full h-auto object-contain max-w-none min-w-[800px] lg:min-w-0 lg:max-w-full drop-shadow-xl" />
        </div>
      </div>

      {/* Wood Divider Image exactly on the boundary */}
      <div className="absolute top-full left-0 w-full z-20 flex justify-center pointer-events-none transform -translate-y-1/2">
        <img src="/wood.png" alt="Wood Divider" className="w-full h-auto max-w-[1920px] object-cover pointer-events-none drop-shadow-lg" />
      </div>
    </section>
  );
}

export default ProcessSection;
