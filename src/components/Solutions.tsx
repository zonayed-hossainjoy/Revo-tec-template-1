
import { useLanguage } from '../context/LanguageContext';

const Solutions = () => {
  const { t } = useLanguage();
  const cards = [
    {
      category: t('solutions.card1.category'),
      title: t('solutions.card1.title'),
      desc: t('solutions.card1.desc'),
      image: 'https://plus.unsplash.com/premium_photo-1661963270682-4b4857b6cda2?q=80&w=800&auto=format&fit=crop'
    },
    {
      category: t('solutions.card2.category'),
      title: t('solutions.card2.title'),
      desc: t('solutions.card2.desc'),
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('solutions.card3.category'),
      title: t('solutions.card3.title'),
      desc: t('solutions.card3.desc'),
      image: 'https://images.unsplash.com/photo-1647427060118-4911c9821b82?auto=format&fit=crop&w=800&q=80'
    },
    {
      category: t('solutions.card4.category'),
      title: t('solutions.card4.title'),
      desc: t('solutions.card4.desc'),
      image: 'https://plus.unsplash.com/premium_photo-1727509754856-dfb3ff9bcbb4?auto=format&fit=crop&w=800&q=80',
      imageClass: 'object-[75%_center]'
    }
  ];

  return (
    <section className="w-full bg-white dark:bg-transparent transition-colors duration-300 py-20 z-10 relative">
      <div className="max-w-[1240px] mx-auto px-5">
        
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[34px] font-bold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">
            {t('solutions.titleP1')} <span className="text-primary">{t('solutions.titleP2')}</span> {t('solutions.titleP3')}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="relative rounded-[15px] overflow-hidden group cursor-pointer h-[460px] bg-gray-900 shadow-sm hover:shadow-2xl transition-shadow duration-500 isolate"
            >
              {/* Background Image (Grayscale normal -> Color hover) */}
              <img 
                src={card.image} 
                alt={card.title} 
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out grayscale-[100%] opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 -z-20 ${card.imageClass || 'object-center'}`}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-transparent transition-opacity duration-500 group-hover:from-[#111827]/90 group-hover:via-[#111827]/50 -z-10"></div>
              
              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                {/* Floating Arrow Button (Fades in and slides up) */}
                <div className="w-12 h-12 rounded-full bg-[#99BB42]/90 backdrop-blur-sm flex items-center justify-center mb-6 opacity-0 transform translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-lg">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5m0 0v10m0-10H9" />
                  </svg>
                </div>
                
                {/* Category Label */}
                <span className="text-[#99BB42] font-semibold text-[11px] tracking-[0.2em] mb-2 uppercase">
                  {card.category}
                </span>
                
                {/* Title */}
                <h3 className="text-white text-[22px] font-bold leading-[1.2] mb-0 group-hover:mb-4 transition-all duration-500 ease-out">
                  {card.title}
                </h3>
                
                {/* Description (Expands height and fades in) */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                  <p className="text-gray-300 text-[15px] leading-relaxed overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {card.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;
