import { useState } from 'react';

const faqData = [
  {
    id: 1,
    question: "1. Does my heating system need to be completely replaced?",
    answer: "Answer: No. Our systems are designed for retrofitting. Existing systems can usually be made smart without a complete replacement."
  },
  {
    id: 2,
    question: "2. Is the system also suitable for holiday apartments?",
    answer: "Yes, it is perfectly suited for holiday apartments. You can remotely monitor and adjust the climate ensuring optimized energy usage while away."
  },
  {
    id: 3,
    question: "3. Does the system also work without internet?",
    answer: "Local physical controls work continuously without an internet connection. However, remote app access and cloud-based automation features do require active internet."
  },
  {
    id: 4,
    question: "4. How does the remote control of my heating work?",
    answer: "Our intelligent hardware integrates with your existing boiler or thermostat setup. It communicates securely via our cloud infrastructure directly back to your mobile app."
  }
];

const FAQ = () => {
  const [expandedIds, setExpandedIds] = useState<number[]>([1]);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Smart Heating & Remote Control", "App & Control", "Sensors"];

  const toggleFaq = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const col1 = faqData.filter((_, i) => i % 2 === 0);
  const col2 = faqData.filter((_, i) => i % 2 !== 0);

  const renderFaqCard = (faq: typeof faqData[0]) => {
    const isExpanded = expandedIds.includes(faq.id);
    
    return (
      <div 
        key={faq.id} 
        className="bg-white dark:bg-[#111827] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-800 p-6 flex flex-col cursor-pointer hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 w-full"
        onClick={() => toggleFaq(faq.id)}
      >
        <div className="flex items-start justify-between gap-4 w-full">
          <h3 className="text-gray-900 dark:text-white font-bold text-[16px] leading-snug pt-1 transition-colors duration-300">
            {faq.question}
          </h3>
          <button className="flex-shrink-0 text-black dark:text-white transition-colors duration-300">
            {isExpanded ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
              </svg>
            )}
          </button>
        </div>
        
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[200px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
          <p className="text-gray-800 dark:text-gray-300 text-[15px] leading-relaxed transition-colors duration-300">
            {faq.answer}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-white dark:bg-transparent transition-colors duration-300 pb-32 pt-12 relative">
      <div className="max-w-[1240px] mx-auto px-5">
        
        {/* Top border line */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-16 transition-colors duration-300"></div>

        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div>
            <h2 className="text-[32px] text-gray-900 dark:text-white font-normal tracking-tight mb-1 transition-colors duration-300">
              Frequent Questions (<span className="text-primary font-bold">FAQ</span>s)
            </h2>
            <p className="text-gray-900 dark:text-gray-300 text-lg transition-colors duration-300">
              you've got questions, we've got answers.
            </p>
          </div>
          
          <div className="relative w-full lg:w-[450px]">
            <input 
              type="text" 
              placeholder="ARE YOU LOOKING FOR SOMETHING SPECIFIC?"
              className="w-full bg-[#FAFAFA] dark:bg-[#111827] border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-300 text-xs font-semibold tracking-wide rounded-full py-4 pl-14 pr-6 outline-none focus:border-primary transition-colors duration-300"
            />
            <svg className="w-5 h-5 text-gray-400 dark:text-gray-500 absolute left-6 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-10 overflow-x-auto pb-4">
          {tabs.map((tab, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-[15px] transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-[#99BB42] text-gray-900 font-bold shadow-md' 
                  : 'text-gray-700 dark:text-gray-400 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Masonry Grid */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1 w-full flex flex-col gap-6">
            {col1.map(renderFaqCard)}
          </div>
          <div className="flex-1 w-full flex flex-col gap-6">
            {col2.map(renderFaqCard)}
          </div>
        </div>
        
        {/* Bottom border line */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mt-20 transition-colors duration-300"></div>

      </div>
    </section>
  );
};

export default FAQ;
