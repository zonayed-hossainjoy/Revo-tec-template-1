import { useLanguage } from '../context/LanguageContext';

const StartControlling = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#f0f2f5] dark:bg-[#111827] transition-colors duration-300 py-24 relative z-0 mt-32">
      <div className="max-w-[1240px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col relative z-20">
          <h2
            className="text-5xl md:text-[60px] font-normal uppercase tracking-normal text-gray-900 dark:text-white leading-[1.1] mb-6 transition-colors duration-300"
            style={{ fontFamily: '"Anton", sans-serif' }}
          >
            {t('startControlling.titleP1')} <span className="text-primary block">{t('startControlling.titleP2')}</span>
          </h2>

          <p className="text-gray-800 dark:text-gray-300 text-[18px] leading-relaxed mb-10 max-w-[500px] transition-colors duration-300">
            {t('startControlling.desc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#99BB42] hover:bg-[#8AA83A] text-[#111827] font-semibold rounded-full px-8 py-3.5 shadow-md transition-all duration-300">
              {t('startControlling.viewAllProducts')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 border border-gray-400 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white text-[#111827] dark:text-gray-200 dark:hover:text-white font-semibold rounded-full px-8 py-3.5 transition-all duration-300">
              {t('startControlling.howAppWorks')}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image - Escaping the container */}
        <div className="relative w-full h-auto min-h-[300px] md:h-full flex justify-center md:justify-end z-10 pointer-events-none mt-12 md:mt-0">
          <img
            src="/images/Group.png"
            alt="Revo-Tec Products Group"
            className="md:absolute md:-top-48 right-0 md:-right-8 w-full max-w-[500px] md:max-w-[650px] object-contain drop-shadow-2xl dark:drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default StartControlling;
