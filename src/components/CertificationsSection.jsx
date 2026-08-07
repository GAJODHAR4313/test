import React from 'react';

function CertificationsSection() {
  const certifications = [
    { id: 1, image: "/cert1.png", text: "ISO 9001:2015 Certified" },
    { id: 2, image: "/cert2.png", text: "Quality Assured" },
    { id: 3, image: "/cert3.png", text: "Eco-Friendly" },
    { id: 4, image: "/cert4.png", text: "GMP Certified" },
  ];

  return (
    <section className="w-full bg-[#FEF9E2] pt-10 md:pt-16 pb-32 md:pb-48 lg:pb-64 relative overflow-hidden z-10">
      
      {/* Decorative Leaves */}
      <div className="absolute top-0 left-0 w-32 md:w-48 lg:w-64 z-0 pointer-events-none">
        <img src="/rightl.png" alt="Leaf Branch" className="w-full h-auto object-contain drop-shadow-md" />
      </div>
      <div className="absolute bottom-0 right-0 w-24 md:w-32 lg:w-48 z-0 pointer-events-none transform translate-y-4">
        <img src="/leftl.png" alt="Leaf Branch" className="w-full h-auto object-contain drop-shadow-md" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-12 lg:mb-20 -mt-2 md:-mt-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="/leafl.png" alt="Leaf Left" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
            <span className="text-[#136c47] font-semibold text-base md:text-lg tracking-wide">Our Certifications</span>
            <img src="/leaf.png" alt="Leaf Right" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-marko font-bold text-black text-center">
            Certified Excellence. <span className="text-[#156d49]">Trusted Quality.</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 justify-items-center">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col items-center gap-4 lg:gap-6 w-full max-w-[280px]">
              <div className="relative w-[80%] md:w-full aspect-square flex items-center justify-center">
                <img 
                  src={cert.image} 
                  alt={cert.text} 
                  className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-black font-bold text-lg md:text-xl text-center font-marko">
                {cert.text}
              </h4>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default CertificationsSection;
