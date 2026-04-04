import { FaApple } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <div id="hero" className="relative min-h-screen bg-transparent overflow-hidden pt-28 md:pt-36 pb-12 md:pb-20 flex flex-col items-center transition-colors duration-300">

      {/* Background large text "Revo-Tec" */}
      <div className="absolute top-[80px] md:top-[130px] left-0 w-full flex justify-center pointer-events-none z-0 overflow-hidden">
        <span
          className="font-serif font-bold whitespace-nowrap leading-none tracking-[0.05em] md:tracking-[0.15em] transition-all duration-300 opacity-30 md:opacity-100"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(32px, 12vw, 240px)',
            background: 'linear-gradient(to bottom, rgba(153, 187, 66, 0.25) 0%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '0.2px rgba(153, 187, 66, 0.9)'
          }}
        >
          {t('hero.bgText')}
        </span>
      </div>

      <div className="relative z-10 max-w-[1240px] w-full mx-auto px-5 flex flex-col items-center mt-12 md:mt-32">

        {/* Mobile View: Order: Name (above in bg) -> Mockup -> Cards */}
        <div className="w-full flex flex-col md:grid md:grid-cols-3 gap-8 items-stretch">

          {/* Left Column (Desktop) / Second Section (Mobile) */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            {/* Intro Card */}
            <div className="bg-[#F3F4F6] dark:bg-[#111827] rounded-[24px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800/80 transition-colors duration-300 min-h-[265px] flex flex-col justify-center">
              <p className="text-gray-800 dark:text-gray-300 text-base md:text-lg leading-relaxed flex items-center flex-wrap gap-x-1">
                <strong>Revo-tec GmbH</strong> {t('hero.introP1')} 
                <span className="text-[#F84B4B] font-semibold inline-flex items-center gap-1">
                  <img src="https://flagcdn.com/w40/at.png" alt="Austria Flag" className="w-4 h-auto rounded-[1px]" />
                  {t('hero.introP2')}
                </span> 
                {t('hero.introP3')}
              </p>
            </div>

            {/* Control Series Card */}
            <div className="bg-[#F3F4F6] dark:bg-[#111827] rounded-[24px] p-8 shadow-sm border border-gray-100 dark:border-gray-800/80 flex flex-col items-center justify-center min-h-[300px] transition-colors duration-300 mt-auto">
              <img src="/images/CONTROL MINI (1) 1.png" alt="Control Series" className="w-[160px] md:w-[180px] object-contain drop-shadow-xl mb-6" />
              <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-semibold tracking-wide uppercase">{t('hero.controlSeries')}</p>
            </div>
          </div>

          {/* Center Column (Phone App) - Order 1 on Mobile, but visually stays center on Desktop */}
          <div className="flex flex-col items-center order-1 md:order-2 relative h-full pt-8 md:pt-0">
            {/* Gradient shadow background behind app */}
            <div className="absolute top-0 md:top-[-60px] w-full max-w-[380px] h-[520px] md:h-[620px] bg-gradient-to-t from-[#F3F4F6] via-[#F3F4F6] dark:from-[#111827] dark:via-[#111827] to-transparent rounded-[32px] -z-10"></div>

            <img
              src="/images/app.png"
              alt={t('nav.app')}
              className="w-[90%] max-w-[370px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] rounded-[15px] z-20 mb-6 mt-[-50px]"
            />

            <p className="text-[#99BB42] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-4 z-20">{t('hero.appSubtitle')}</p>

            {/* Store Buttons & Text */}
            <div className="mt-auto z-20 w-full flex flex-col items-center">
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center px-4 md:px-0">
                <button className="flex items-center justify-center gap-3 border border-primary/30 dark:border-gray-700 bg-white/80 dark:bg-[#1f2937] backdrop-blur-sm rounded-2xl px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm flex-1">
                  <FaApple className="text-black dark:text-white text-2xl" />
                  <div className="text-left flex flex-col">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-tight">{t('common.downloadOnThe')}</span>
                    <span className="text-sm font-bold text-black dark:text-white leading-tight">{t('common.appStore')}</span>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-3 border border-primary/30 dark:border-gray-700 bg-white/80 dark:bg-[#1f2937] backdrop-blur-sm rounded-2xl px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm flex-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Play Store" className="w-5 h-5 object-contain" />
                  <div className="text-left flex flex-col">
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium leading-tight">{t('common.getItOn')}</span>
                    <span className="text-sm font-bold text-black dark:text-white leading-tight">{t('common.googlePlay')}</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order 3 on Mobile */}
          <div className="flex flex-col gap-6 order-3 md:order-3">
            {/* View Series Card */}
            <div className="bg-[#F3F4F6] dark:bg-[#111827] rounded-[24px] p-8 shadow-sm border border-gray-100 dark:border-gray-800/80 flex flex-col items-center justify-center min-h-[300px] relative transition-colors duration-300">
              {/* "Made in Austria" Badge overlay - Adjusted for mobile */}
              <div className="absolute -top-10 -right-4 md:-right-8 z-30 pointer-events-none">
                <img src="/images/made in austria.png" alt="Made in Austria" className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl" />
              </div>

              <img src="/images/view.png" alt="View Series" className="w-[180px] md:w-[200px] object-contain drop-shadow-lg mb-4 hover:scale-105 transition-transform duration-300" />
              <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-semibold tracking-wide uppercase mt-auto">{t('hero.viewSeries')}</p>
            </div>

            {/* Sensor Series Card */}
            <div className="bg-[#F3F4F6] dark:bg-[#111827] rounded-[24px] p-8 shadow-sm border border-gray-100 dark:border-gray-800/80 flex flex-col items-center justify-center min-h-[300px] transition-colors duration-300 mt-auto">
              <img src="/images/mockup.png" alt="Sensor Series" className="w-[180px] md:w-[200px] object-contain drop-shadow-xl mb-4 hover:scale-105 transition-transform duration-300" />
              <p className="text-gray-800 dark:text-gray-200 text-sm md:text-base font-semibold tracking-wide uppercase mt-auto">{t('hero.sensorSeries')}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
