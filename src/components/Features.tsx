

const Features = () => {
  const topCards = [
    {
      icon: '/images/icons/Vector.png', 
      iconDark: '/images/icons/white (4).png',
      text: 'Tailor-made technology solutions for companies and demanding private customers.'
    },
    {
      icon: '/images/icons/Group.png', 
      iconDark: '/images/icons/white (3).png',
      text: 'Hardware and software from our own development – reliable and future-proof.'
    },
    {
      icon: '/images/icons/Group 9.png', 
      iconDark: '/images/icons/white (1).png',
      text: 'Planning, development, and support from Austria – To use worldwide.'
    }
  ];

  const bottomCards = [
    {
      icon: '/images/icons/Vector-1.png', 
      iconDark: '/images/icons/white (5).png',
      text: 'Modern cloud and app solutions for simple and secure remote control.'
    },
    {
      icon: '/images/icons/Group 10.png', 
      iconDark: '/images/icons/white (2).png',
      text: 'high-performance retrofitting for existing systems without the complexity.'
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-transparent transition-colors duration-300 py-20 z-10 relative">
      <div className="max-w-[1240px] mx-auto px-5">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">Why Revo-Tec?</h2>
          <span className="text-xl text-gray-600 dark:text-gray-400 md:ml-3 mt-2 md:mt-0 font-normal transition-colors duration-300">
            (The Engineering Excellence)
          </span>
        </div>

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {topCards.map((card, index) => (
            <div key={index} className="bg-white dark:bg-[#111827] rounded-[15px] p-8 border border-[#bac5d6]/60 dark:border-gray-800 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_40px_rgba(153,187,66,0.1)] hover:border-transparent dark:hover:border-transparent">
              <img src={card.icon} alt="Feature Icon" className="h-[46px] w-auto object-contain object-left mb-6 dark:hidden transition-all" style={{ maxWidth: '60px' }} />
              <img src={card.iconDark} alt="Feature Icon Dark" className="h-[46px] w-auto object-contain object-left mb-6 hidden dark:block transition-all" style={{ maxWidth: '60px' }} />
              <p className="text-[#1a202c] dark:text-gray-300 text-[16px] leading-relaxed transition-colors duration-300">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards - Centered */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {bottomCards.map((card, index) => (
            <div key={index} className="w-full md:w-[calc(33.333%-1rem)] bg-white dark:bg-[#111827] rounded-[15px] p-8 border border-[#bac5d6]/60 dark:border-gray-800 shadow-sm flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_40px_rgba(153,187,66,0.1)] hover:border-transparent dark:hover:border-transparent">
              <img src={card.icon} alt="Feature Icon" className="h-[46px] w-auto object-contain object-left mb-6 dark:hidden transition-all" style={{ maxWidth: '60px' }} />
              <img src={card.iconDark} alt="Feature Icon Dark" className="h-[46px] w-auto object-contain object-left mb-6 hidden dark:block transition-all" style={{ maxWidth: '60px' }} />
              <p className="text-[#1a202c] dark:text-gray-300 text-[16px] leading-relaxed transition-colors duration-300">
                {card.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
