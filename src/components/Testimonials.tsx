import { useState } from 'react';

const baseTestimonials = [
  {
    quote: "Revo-Tec systems stand out for their simple integration and high build quality. We were particularly impressed by how easily we could retrofit our existing setup. It's been running rock-solid since day one.",
    name: 'Julia Mayer',
    role: 'Homeowner',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    quote: "We were looking for a reliable, long-term solution that met professional industrial standards. Revo-Tec delivered exactly that—technically clean implementation and absolute stability in ongoing operations.",
    name: 'Max Schmidt',
    role: 'Technical Director, Schmidt Industries',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e'
  },
  {
    quote: "The systems are well-thought-out, robust, and easy to integrate into existing infrastructures. It's the perfect balance of advanced technology and practical usability.",
    name: 'Alexander Berger',
    role: 'Project Manager, Berger Solutions',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f'
  },
  {
    quote: "Managing multiple residential units became significantly easier with Revo-Tec. The remote monitoring capabilities allow us to handle climate control and energy efficiency across our entire portfolio from a single dashboard. A total game-changer for our operations.",
    name: 'Sarah Jenkins',
    role: 'Property Manager',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704g'
  },
  {
    quote: "As an engineer, I appreciate the transparency of the Revo-Tec architecture. The hardware is incredibly well-engineered, and the API integration is seamless. It's rare to find a system that is this powerful yet so straightforward to deploy.",
    name: 'David Chen',
    role: 'Lead Hardware Engineer',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704h'
  },
  {
    quote: "We integrate Revo-Tec into our green building projects because of their commitment to energy precision. Their sensors provide the exact data needed to optimize building performance, and the minimalist design of the View Series tablets fits perfectly into our modern interiors.",
    name: 'Marcus Thorne',
    role: 'Sustainable Architect',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704i'
  }
];

// Duplicate to provide enough content for "View More" pagination
const allTestimonials = [...baseTestimonials, ...baseTestimonials, ...baseTestimonials];

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  // Manual Masonry Distribution
  const col1: typeof allTestimonials = [];
  const col2: typeof allTestimonials = [];
  const col3: typeof allTestimonials = [];

  allTestimonials.slice(0, visibleCount).forEach((test, i) => {
    if (i % 3 === 0) col1.push(test);
    else if (i % 3 === 1) col2.push(test);
    else col3.push(test);
  });

  const hasMore = visibleCount < allTestimonials.length;

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const TestimonialCard = ({ test }: { test: typeof allTestimonials[0] }) => (
    <div className="bg-[#F9FAFB] dark:bg-[#111827] hover:bg-white dark:hover:bg-[#1f2937] rounded-[24px] p-8 hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_40px_rgba(153,187,66,0.1)] transition-all duration-300 border border-transparent hover:border-gray-100 dark:hover:border-gray-700 flex flex-col relative z-20">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-[#EAB308] fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <p className="text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed mb-8 transition-colors duration-300">
        "{test.quote}"
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-4 mt-auto">
        <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
        <div className="flex flex-col">
          <span className="text-gray-900 dark:text-white font-bold text-[15px] transition-colors duration-300">{test.name}</span>
          <span className="text-gray-500 dark:text-gray-400 text-[13px] transition-colors duration-300">{test.role}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white dark:bg-transparent transition-colors duration-300 pt-20 pb-20 relative">
      <div className="max-w-[1240px] mx-auto px-5 relative">
        
        {/* Header */}
        <div className="text-center mb-16 relative z-30">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">
            Trusted by <span className="text-primary">10,000+</span> Users<br/>Worldwide.
          </h2>
        </div>

        {/* Masonry Layout */}
        <div className="flex flex-col md:flex-row items-start gap-6 relative">
          <div className="flex-1 flex flex-col gap-6 w-full">
            {col1.map((test, i) => <TestimonialCard key={`col1-${i}`} test={test} />)}
          </div>
          <div className="flex-1 flex flex-col gap-6 w-full">
            {col2.map((test, i) => <TestimonialCard key={`col2-${i}`} test={test} />)}
          </div>
          <div className="flex-1 flex flex-col gap-6 w-full">
            {col3.map((test, i) => <TestimonialCard key={`col3-${i}`} test={test} />)}
          </div>

          {/* Fade Overlay connecting to base */}
          {hasMore && (
            <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-t from-white via-white/90 dark:from-[#0a0f18] dark:via-[#0a0f18]/90 to-transparent flex items-end justify-center pb-2 z-30 pointer-events-none transition-colors duration-300">
              {/* View More Button */}
              <button 
                onClick={handleViewMore}
                className="pointer-events-auto flex items-center gap-2 bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-700 shadow-xl dark:shadow-none rounded-full px-8 py-3 mb-4 hover:bg-gray-50 dark:hover:bg-[#1f2937] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">View More</span>
                <svg className="w-5 h-5 text-gray-900 dark:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
