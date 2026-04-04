

const Customers = () => {
  // Array of company logos from the Support company folder
  const baseLogos = [
    '/images/Support company/dimenxen_logo_clean.png',
    '/images/Support company/ionia_logo_clean.png',
    '/images/Support company/mico_logo_clean.png',
    '/images/Support company/drolo_logo_clean.png',
    '/images/Support company/topli_logo_clean.png',
  ];
  
  // We double the elements so the CSS translateX(-50%) creates an infinite seamless loop
  const displayLogos = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

  return (
    <section className="relative w-full bg-[#050A10] z-20">
      {/* No gradients - solid background */}
      <div className="max-w-[1240px] mx-auto px-5 py-[40px] flex flex-col md:flex-row items-center justify-between relative z-10 w-full h-full">
        
        {/* Left Side: Text Block */}
        <div className="w-full md:w-[35%] mb-10 md:mb-0 relative z-20 bg-[#050A10]">
          <h2 className="text-white text-[32px] font-bold mb-2 tracking-tight">Our Customers</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-[280px]">
            Trusted by industry leaders to deliver seamless digital experiences.
          </p>
        </div>

        {/* Right Side: Auto Scrolling Marquee */}
        <div className="w-full md:w-[65%] overflow-hidden relative">
          
          {/* Fading overlay to mask the entry/exit points of the logos */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#050A10] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#050A10] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused] items-center gap-16 md:gap-24 pl-12">
            {displayLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center flex-shrink-0 cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <img 
                  src={logo} 
                  alt="Support Company" 
                  className="h-9 md:h-11 object-contain grayscale brightness-125" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Customers;
