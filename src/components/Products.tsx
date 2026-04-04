

const Products = () => {
  const products = [
    {
      category: 'CONTROL SERIES',
      title: 'LOGIC CONTROLLER',
      name: 'CONTROL TWO',
      status: 'AVAILABLE GLOBALLY',
      num: '01',
      image: '/images/CONTROL MINI (1) 1.png',
      imgWidth: 'w-[160px]'
    },
    {
      category: 'VIEW SERIES',
      title: 'INTERFACE',
      name: 'CONTROL VIEW',
      status: 'AVAILABLE GLOBALLY',
      num: '02',
      image: '/images/view.png',
      imgWidth: 'w-[200px]'
    },
    {
      category: 'SENSOR SERIES',
      title: 'SENSORS',
      name: 'AF001-PRO',
      status: 'AVAILABLE GLOBALLY',
      num: '03',
      image: '/images/mockup.png',
      imgWidth: 'w-[180px]'
    }
  ];

  return (
    <section className="w-full bg-[#fcfcfd] dark:bg-transparent transition-colors duration-300 py-24 z-10 relative">
      <div className="max-w-[1240px] mx-auto px-5">
        
        {/* Header */}
        <div className="flex flex-col mb-16">
          <h2 className="text-4xl font-bold text-[#111827] dark:text-white tracking-tight mb-2 transition-colors duration-300">
            Our <span className="text-primary">Product</span> Series
          </h2>
          <span className="text-xl text-gray-600 dark:text-gray-400 font-normal transition-colors duration-300">
            (Smart tech for modern living.)
          </span>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col group cursor-pointer w-full">
              
              {/* White Card Box -> Dark Variant */}
              <div className="bg-white dark:bg-[#111827] border border-gray-100/80 dark:border-gray-800 rounded-[32px] p-8 h-[440px] relative transition-all duration-500 ease-out shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_50px_rgba(153,187,66,0.15)] flex flex-col items-center justify-center">
                 
                 {/* Top text inside card */}
                 <div className="absolute top-8 left-8 text-left z-20">
                   <span className="text-[9px] text-gray-400 dark:text-gray-500 font-bold tracking-[0.2em] uppercase block mb-1">
                     {product.category}
                   </span>
                   <span className="text-[14px] text-gray-900 dark:text-gray-100 font-black uppercase tracking-wide block transition-colors duration-300">
                     {product.title}
                   </span>
                 </div>

                 {/* Product Image Wrapper - Rotates on hover */}
                 <div className="relative flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:-rotate-3 mt-4">
                   {/* Background soft shadow blob for device */}
                   <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-[24px] blur-xl opacity-40 dark:opacity-20 scale-90 transition-opacity"></div>
                   <img 
                     src={product.image} 
                     alt={product.title} 
                     className={`${product.imgWidth} h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)] relative z-10 transition-shadow`} 
                   />
                 </div>

                 {/* Hover Arrow Button */}
                 <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#1a1a2e] dark:bg-primary rounded-full flex items-center justify-center opacity-0 transform translate-y-4 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 shadow-lg dark:shadow-primary/30 z-20">
                    <svg className="w-5 h-5 text-white dark:text-[#111827] transform -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                 </div>
              </div>

              {/* Bottom Info Section (Outside the card) */}
              <div className="flex justify-between items-end mt-8 px-2">
                 <div className="flex flex-col">
                    <h3 className="text-[28px] font-black tracking-tight text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold tracking-[0.15em] uppercase mt-1 transition-colors duration-300">
                      {product.status}
                    </span>
                 </div>
                 
                 {/* Large Watermark Number */}
                 <span className="text-6xl font-black italic text-gray-200 dark:text-gray-800 leading-none opacity-60 transition-colors duration-300">
                   {product.num}
                 </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
