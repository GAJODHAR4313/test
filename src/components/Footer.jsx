import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="w-full relative z-30 bg-transparent -mt-16 md:-mt-32 lg:-mt-64 flex flex-col items-center">
      
      {/* Top section: Tea Garden Image & Form Overlay */}
      <div className="w-full max-w-[1920px] relative flex flex-col lg:block min-h-[800px] lg:min-h-0 justify-end pt-32 pb-8 lg:pt-0 lg:pb-0">
        
        {/* Background image: absolute on mobile (to cover), relative on desktop (to dictate height) */}
        <img src="/Desktop - 3.png" alt="Sophora Footer Background" className="hidden lg:block w-full h-auto" />
        <img src="/Desktop - 3.png" alt="Sophora Footer Background" className="lg:hidden absolute inset-0 w-full h-full object-cover object-center" />
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Contact Form Overlay */}
        <div className="relative lg:absolute lg:top-[12%] xl:top-[18%] lg:right-[5%] xl:right-[12%] w-[90%] md:w-[60%] mx-auto lg:mx-0 lg:w-[40%] xl:w-[35%] max-w-[420px] mb-12 lg:mb-0 z-10 self-center lg:self-auto">
          <div className="bg-[#f8f4e6]/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl md:rounded-3xl shadow-2xl border-2 md:border-4 border-white/50">
            
            <div className="text-center mb-5 lg:mb-6">
              <h2 className="text-[#0d6e49] font-marko text-xl md:text-2xl font-bold mb-2">
                Let's Grow Together
              </h2>
              <p className="text-black font-semibold text-xs md:text-sm leading-snug px-2">
                Connect with Sophora Agri and let us support your farming journey
              </p>
            </div>

            <form className="flex flex-col gap-3">
              <div className="flex flex-col xl:flex-row gap-3">
                <input 
                  type="text" 
                  placeholder="Enter Name" 
                  className="w-full bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#84c142] text-[#84c142] placeholder-[#b5cf95]"
                />
                <input 
                  type="text" 
                  placeholder="Mobile no / Email ID" 
                  className="w-full bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#84c142] text-[#84c142] placeholder-[#b5cf95]"
                />
              </div>
              
              <textarea 
                placeholder="Type your message....." 
                rows="3"
                className="w-full bg-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#84c142] text-[#84c142] placeholder-[#b5cf95] resize-none"
              ></textarea>

              <div className="flex justify-center mt-2">
                <button 
                  type="submit" 
                  className="bg-gradient-to-b from-[#208358] to-[#0a4a2f] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-sm"
                >
                  Get In Touch
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Text Overlay */}
        <div className="relative lg:absolute lg:bottom-[7%] xl:bottom-[8%] left-0 w-full px-6 md:px-12 xl:px-24 z-10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-[#a0c58a]">
            
            {/* Column 1: Logo & Email */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center mb-1">
                <img src="/Sophora Round Logo 1.png" alt="Sophora Logo" className="w-full h-full object-contain drop-shadow-md" />
              </div>
              <p className="font-semibold text-[10px] md:text-xs tracking-widest uppercase text-[#96b47c] mt-2">
                // SHOT US AN EMAIL
              </p>
              <a href="mailto:sophora@gmail.com" className="text-white hover:text-[#d5ebc6] transition-colors font-semibold text-sm md:text-base">
                sophora@gmail.com
              </a>
            </div>

            {/* Column 2: Navigation */}
            <div className="flex flex-col items-start gap-4">
              <h4 className="font-semibold text-[10px] md:text-xs tracking-widest uppercase text-[#96b47c] flex items-center gap-2 whitespace-nowrap pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#96b47c]"></span> NAVIGATION
              </h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white hover:text-[#d5ebc6] transition-colors font-medium text-sm">Home</a>
                <a href="#" className="text-white hover:text-[#d5ebc6] transition-colors font-medium text-sm">About</a>
                <a href="#" className="text-white hover:text-[#d5ebc6] transition-colors font-medium text-sm">Products</a>
                <a href="#" className="text-white hover:text-[#d5ebc6] transition-colors font-medium text-sm">Contact</a>
              </div>
            </div>

            {/* Column 3: Contact */}
            <div className="flex flex-col items-start gap-4">
              <h4 className="font-semibold text-[10px] md:text-xs tracking-widest uppercase text-[#96b47c] flex items-center gap-2 whitespace-nowrap pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#96b47c]"></span> CONTACT
              </h4>
              <div className="flex flex-col gap-3">
                <p className="text-white font-medium text-sm leading-none pt-0.5">+91 85858 55555</p>
                <p className="text-white font-medium leading-relaxed max-w-[250px] text-xs md:text-sm">
                  Golden city center, Chhatrapati Sambhajinagar, 431001 Maharashtra, India
                </p>
              </div>
            </div>

            {/* Column 4: Socials */}
            <div className="flex flex-col items-start gap-4">
              <h4 className="font-semibold text-[10px] md:text-xs tracking-widest uppercase text-[#96b47c] flex items-center gap-2 whitespace-nowrap pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#96b47c]"></span> SOCIALS
              </h4>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white hover:text-[#d5ebc6] transition-colors font-medium text-sm">Whatsapp</a>
                <a href="#" className="text-white hover:text-[#d5ebc6] transition-colors font-medium text-sm">Facebook</a>
                <a href="#" className="text-white hover:text-[#d5ebc6] transition-colors font-medium text-sm">Instagram</a>
                <a href="#" className="text-white hover:text-[#d5ebc6] transition-colors font-medium text-sm">Youtube</a>
              </div>
            </div>
            
          </div>
        </div>

        {/* Copyright Text Overlay */}
        <div className="relative lg:absolute lg:bottom-[1.5%] left-0 w-full px-6 md:px-12 xl:px-24 mt-12 lg:mt-0 pb-6 lg:pb-0 z-10 border-t border-white/20 lg:border-t-0 pt-4 lg:pt-0">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between text-[#e0e0e0] text-[10px] md:text-xs font-medium gap-2 text-center md:text-left">
             <p>@2026 Sophora Agro industries pvt ltd. All copyrights Reserved.</p>
             <p>Developed & Design By Techsurya It Solution</p>
          </div>
        </div>

      </div>
      
    </footer>
  );
}

export default Footer;
