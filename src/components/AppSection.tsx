import { FaApple } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const AppSection = () => {
  const { t } = useLanguage();
  // Array of new mockup image paths (1.png to 18.png)
  const mockups = Array.from({ length: 18 }, (_, i) => `/images/mockups/${i + 1}.png`);

  // We duplicate the array to create a seamless infinite scrolling effect
  const scrollingMockups = [...mockups, ...mockups];

  return (
    <section className="w-full py-4 md:py-8 bg-white dark:bg-[#0a0f18] transition-colors duration-300">
      <div className="max-w-[1240px] w-full mx-auto px-5">

        {/* Top and Bottom bordered container */}
        <div className="border-t border-b border-gray-200 dark:border-gray-800 py-8 md:py-12 flex flex-col md:flex-row gap-12 lg:gap-20 items-center overflow-hidden">

          {/* Left Text Column */}
          <div className="w-full md:w-[40%] flex flex-col items-start md:pr-4 shrink-0">
            <h3 className="text-xl md:text-2xl font-medium text-gray-900 dark:text-gray-100 mb-1">
              {t('appSection.meet')}
            </h3>

            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#99BB42] leading-none mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
              {t('appSection.appName')}
            </h2>

            <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-8">
              {t('appSection.subtitle')}
            </p>

            <p className="text-lg font-bold text-black dark:text-white mb-2">
              {t('appSection.reimagined')}
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-[15px] max-w-xl">
              {t('appSection.desc')}
            </p>

            {/* Store Buttons */}
            <div className="flex gap-4">
              <button className="group flex items-center justify-center gap-3 border border-primary/30 dark:border-gray-700 bg-white dark:bg-[#1f2937] rounded-xl px-5 py-3 hover:bg-primary hover:border-primary transition-all shadow-sm">
                <FaApple className="text-black dark:text-white text-2xl group-hover:text-white transition-colors" />
                <div className="text-left flex flex-col">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-tight group-hover:text-white/80 transition-colors">{t('common.downloadOnThe')}</span>
                  <span className="text-sm font-bold text-black dark:text-white leading-tight group-hover:text-white transition-colors">{t('common.appStore')}</span>
                </div>
              </button>
              <button className="group flex items-center justify-center gap-3 border border-primary/30 dark:border-gray-700 bg-white dark:bg-[#1f2937] rounded-xl px-5 py-3 hover:bg-primary hover:border-primary transition-all shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Play Store" className="w-5 h-5 object-contain" />
                <div className="text-left flex flex-col">
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-tight group-hover:text-white/80 transition-colors">{t('common.getItOn')}</span>
                  <span className="text-sm font-bold text-black dark:text-white leading-tight group-hover:text-white transition-colors">{t('common.googlePlay')}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Scrolling Mockups Column container */}
          <div className="w-full md:w-[60%] flex flex-col justify-center overflow-hidden pt-8 md:pt-0">

            {/* Auto-scrolling carousel */}
            <div className="relative w-full group overflow-hidden">
              {/* Fade masks for smooth edges (more subtle) */}
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-white dark:from-[#0a0f18] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-white dark:from-[#0a0f18] to-transparent z-10 pointer-events-none"></div>

              {/* Scrolling Track */}
              <div
                className="flex items-center overflow-visible animate-scroll-fast group-hover:[animation-play-state:paused]"
                style={{ width: 'fit-content' }}
              >
                {scrollingMockups.map((mockup, idx) => (
                  <img
                    key={idx}
                    src={mockup}
                    alt={`Revo-Tec App Mockup ${idx}`}
                    className="h-[300px] md:h-[400px] lg:h-[450px] object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-[1.02] cursor-default pr-6 md:pr-10"
                  />
                ))}
              </div>
            </div>

            {/* Bottom Link */}
            <div className="mt-8 text-right w-full pr-4 md:pr-12">
              <a href="#" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors text-sm font-medium">
                {t('appSection.learnMore')}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppSection;
