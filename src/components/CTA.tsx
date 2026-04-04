import { useLanguage } from '../context/LanguageContext';

const CTA = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-white dark:bg-transparent transition-colors duration-300 py-24 relative">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Headlines */}
        <h2 
          className="text-5xl md:text-6xl lg:text-[72px] font-normal uppercase tracking-normal text-gray-900 dark:text-white leading-[1.1] mb-2 transition-colors duration-300"
          style={{ fontFamily: '"Anton", sans-serif' }}
        >
          {t('cta.titleP1')}
        </h2>
        <h2 
          className="text-5xl md:text-6xl lg:text-[72px] font-normal uppercase tracking-normal text-primary leading-[1.1] mb-8"
          style={{ fontFamily: '"Anton", sans-serif' }}
        >
          {t('cta.titleP2')}
        </h2>

        {/* Paragraph */}
        <p className="text-gray-900 dark:text-gray-300 text-[18px] md:text-[20px] font-medium leading-relaxed max-w-3xl mb-12 transition-colors duration-300" style={{ fontFamily: '"Oswald", sans-serif' }}>
          {t('cta.desc')}
        </p>

        {/* CTA Button */}
        <button className="bg-[#99BB42] hover:bg-[#8AA83A] text-white dark:text-[#111827] rounded-[32px] px-6 md:px-12 py-5 shadow-[0_8px_30px_rgba(153,187,66,0.4)] hover:shadow-[0_12px_40px_rgba(153,187,66,0.6)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center w-full max-w-[420px]">
          <span className="text-[14px] min-[400px]:text-[16px] sm:text-lg md:text-2xl font-bold tracking-wide mb-1 whitespace-nowrap">{t('cta.btnTitle')}</span>
          <span className="text-[10px] min-[400px]:text-xs sm:text-sm md:text-[15px] font-light tracking-wide opacity-90">{t('cta.btnSubtitle')}</span>
        </button>

      </div>
    </section>
  );
};

export default CTA;
