import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="w-full bg-white dark:bg-transparent transition-colors duration-300 pt-10 pb-20 relative">
      <div className="max-w-[1240px] mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[36px] md:text-[42px] font-extrabold text-gray-900 dark:text-white tracking-tight mb-3 transition-colors duration-300">
            {t('contact.title')}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-[15px] max-w-[560px] mx-auto transition-colors duration-300">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Left - Send Messages Card */}
          <div className="h-full flex flex-col">
            <h3 className="text-[20px] font-bold text-gray-900 dark:text-white mb-5 transition-colors duration-300">
              {t('contact.sendMessages')}
            </h3>
            <div
              className="flex-grow bg-white dark:bg-[#111827] rounded-[20px] p-7 md:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300"
              style={{
                boxShadow: '8px 8px 40px 0px rgba(153, 187, 66, 0.15), -4px -4px 20px 0px rgba(0,0,0,0.04)'
              }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Full Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <fieldset className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 pt-1 pb-3 transition-colors duration-300">
                    <legend className="text-[12px] text-gray-500 dark:text-gray-400 px-1 transition-colors duration-300">{t('contact.fullName')}</legend>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Zonayed Hossain"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full bg-transparent text-gray-800 dark:text-gray-200 text-[14px] outline-none placeholder:text-gray-400/50 dark:placeholder:text-gray-500/50 transition-colors duration-300"
                    />
                  </fieldset>

                  <fieldset className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 pt-1 pb-3 transition-colors duration-300">
                    <legend className="text-[12px] text-gray-500 dark:text-gray-400 px-1 transition-colors duration-300">{t('contact.emailLabel')}</legend>
                    <input
                      type="email"
                      name="email"
                      placeholder="joyhossain1694@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent text-gray-800 dark:text-gray-200 text-[14px] outline-none placeholder:text-gray-400/50 dark:placeholder:text-gray-500/50 transition-colors duration-300"
                    />
                  </fieldset>
                </div>

                {/* Subject */}
                <fieldset className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 pt-1 pb-3 transition-colors duration-300">
                  <legend className="text-[12px] text-gray-500 dark:text-gray-400 px-1 transition-colors duration-300">{t('contact.subject')}</legend>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Want to know about......."
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-800 dark:text-gray-200 text-[14px] outline-none placeholder:text-gray-400/50 dark:placeholder:text-gray-500/50 transition-colors duration-300"
                  />
                </fieldset>

                {/* Message */}
                <fieldset className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 pt-1 pb-3 transition-colors duration-300">
                  <legend className="text-[12px] text-gray-500 dark:text-gray-400 px-1 transition-colors duration-300">{t('contact.message')}</legend>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Want to know about......."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent text-gray-800 dark:text-gray-200 text-[14px] outline-none resize-none placeholder:text-gray-400/50 dark:placeholder:text-gray-500/50 transition-colors duration-300"
                  />
                </fieldset>

                {/* Submit Button */}
                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-3 bg-[#99BB42] hover:bg-[#8AA83A] text-white font-semibold rounded-full px-10 py-3.5 shadow-md hover:shadow-lg transition-all duration-300 text-[15px]"
                  >
                    {t('contact.sendMessage')}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right - Contact Links Card */}
          <div className="h-full flex flex-col">
            <h3 className="text-[20px] font-bold text-gray-900 dark:text-white mb-5 transition-colors duration-300">
              {t('contact.contactLinks')}
            </h3>
            <div
              className="flex-grow bg-white dark:bg-[#111827] rounded-[20px] p-7 md:p-8 border border-gray-100 dark:border-gray-800 transition-all duration-300"
              style={{
                boxShadow: '8px 8px 40px 0px rgba(153, 187, 66, 0.15), -4px -4px 20px 0px rgba(0,0,0,0.04)'
              }}
            >
              <div className="flex flex-col h-full">

                {/* Social */}
                <div className="flex-1 flex flex-col justify-center border-b border-[#99BB42]/30 dark:border-[#99BB42]/20">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#99BB42]">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z"/>
                        <path d="M12 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 4h8v-.57c0-1.36-2.64-2.14-4-2.14s-4 .78-4 2.14V14z"/>
                      </svg>
                    </span>
                    <span className="text-[#99BB42] font-semibold text-[15px]">{t('contact.social')}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Facebook */}
                    <a href="#" className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-[#99BB42] hover:text-[#99BB42] transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a href="#" className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-[#99BB42] hover:text-[#99BB42] transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    </a>
                    {/* YouTube */}
                    <a href="#" className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-[#99BB42] hover:text-[#99BB42] transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/>
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="#" className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-[#99BB42] hover:text-[#99BB42] transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    {/* X (Twitter) */}
                    <a href="#" className="w-9 h-9 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-[#99BB42] hover:text-[#99BB42] transition-all duration-300">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex-1 flex flex-col justify-center border-b border-[#99BB42]/30 dark:border-[#99BB42]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#99BB42]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
                    <span className="text-[#99BB42] font-semibold text-[15px]">{t('contact.emailTitle')}</span>
                  </div>
                  <p className="text-gray-900 dark:text-white font-bold text-[15px] transition-colors duration-300">
                    Info@Revo-Tec.At
                  </p>
                </div>

                {/* Call */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#99BB42]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    <span className="text-[#99BB42] font-semibold text-[15px]">{t('contact.call')}</span>
                  </div>
                  <p className="text-gray-900 dark:text-white font-bold text-[15px] transition-colors duration-300">
                    +43 Xxxxxxx
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
