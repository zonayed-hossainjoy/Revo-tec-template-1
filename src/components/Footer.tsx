const Footer = () => {
  const quickLinks = ["Home", "Products", "Case Studies", "About Us", "Support", "Contact Us"];
  const productInfo = ["Revo-Tec App", "CONTROL SERIE", "VIEW SERIE", "SENSOR SERIE", "Product Catalog"];

  const renderChevronList = (items: string[]) => {
    return (
      <ul className="flex flex-col gap-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors cursor-pointer group font-medium text-[15px]">
            <svg className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="w-full bg-[#EAF1E1] dark:bg-[#070b12] pt-20 pb-10 transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-6">
            <img src="/images/Logo_farbe_edited 2.png" alt="Revo-Tec Logo" className="w-[140px] object-contain drop-shadow-sm mb-2 dark:brightness-[100]" />
            <p className="text-[#1a202c] dark:text-gray-300 text-sm leading-relaxed font-medium transition-colors duration-300">
              The Most Reliable Automation Platform For Rapidly Scaling Your Building's Energy Efficiency On Planet Earth From
              <br />
              <span className="inline-flex items-center gap-1 mt-1 font-bold">
                🇦🇹 Austria
              </span>
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-sm text-gray-800 dark:text-gray-400 leading-snug transition-colors duration-300">
                <span className="block font-semibold">Contact Details:</span>
                Address: Zeller Straße 14, 5730<br/>Mittersill,
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-400 transition-colors duration-300">
                Austria Phone: +43 Xxxxxxx
              </p>
              <p className="text-sm text-gray-800 dark:text-gray-400 transition-colors duration-300">
                Email: Info@Revo-Tec.At Location
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">Quick Links</h3>
            {renderChevronList(quickLinks)}
          </div>

          {/* Column 3: Product Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors duration-300">Product Info</h3>
            {renderChevronList(productInfo)}
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col relative z-20">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-300">Want To Optimize Faster?</h3>
            <p className="text-gray-900 dark:text-gray-300 text-[15px] font-medium leading-relaxed mb-6 transition-colors duration-300">
              Get The Latest Firmware Updates And Energy-Saving Strategies Sent Straight To Your Inbox.
            </p>
            
            <div className="relative w-full mb-2">
              <input 
                type="email" 
                placeholder="Enter Your Email"
                className="w-full bg-transparent border border-gray-400 dark:border-gray-700 focus:border-primary dark:focus:border-primary focus:bg-white dark:focus:bg-[#111827] transition-all outline-none rounded-xl py-3.5 px-4 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 shadow-sm"
              />
            </div>
            
            <p className="text-[12px] text-gray-400 dark:text-gray-500 mb-6 transition-colors duration-300">
              **No Spam — Only Valuable Updates From Our Team.**
            </p>

            <button className="self-end bg-[#99BB42] hover:bg-[#8AA83A] text-gray-900 font-bold rounded-full px-8 py-2.5 shadow-md hover:shadow-lg transition-all duration-300">
              Let's Go
            </button>
          </div>
          
        </div>

        {/* Bottom Border Line */}
        <div className="w-full h-px bg-[#c2d3b2] dark:bg-gray-800 mb-6 transition-colors duration-300"></div>

        {/* Bottom Bar Options */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500 dark:text-gray-600 font-medium pb-2 transition-colors duration-300">
          <a href="#" className="text-[#99BB42] hover:underline">Privacy Policy</a>
          <p>© 2026 REVO-Tec GmbH | All Rights Reserved</p>
          <a href="#" className="text-[#99BB42] hover:underline">Terms Of Service</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
