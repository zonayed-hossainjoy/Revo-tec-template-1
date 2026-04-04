import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Solutions', hasDropdown: true },
    { name: 'Projects', hasDropdown: true },
    { name: 'Products', hasDropdown: true },
    { name: 'RevoTec App', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Resources', href: '#' },
  ];

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <nav 
        className={`w-full max-w-[1240px] flex items-center justify-between px-6 md:px-8 py-3 rounded-full 
                   ${theme === 'dark' ? 'bg-[#111827]/80 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]' : 'bg-white/40 border-white/20 shadow-[0_8px_32px_0_rgba(153,187,66,0.1)]'}
                   backdrop-blur-xl border 
                   transition-all duration-300`}
      >
        {/* Logo */}
        <button 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
          className="flex items-center hover:opacity-80 transition-opacity z-50"
        >
          <img 
            src="/images/Logo_farbe_edited 2.png" 
            alt="RevoTec Logo" 
            className="h-8 md:h-10 w-auto object-contain" 
          />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <div key={link.name} className="flex items-center space-x-1 cursor-pointer group">
              <a 
                href={link.href || '#'} 
                className={`text-sm xl:text-base font-medium transition-colors ${
                  link.name === 'Home' ? 'text-primary font-bold' : 'text-gray-800 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary'
                }`}
              >
                {link.name}
              </a>
              {link.hasDropdown && <FaChevronDown className="text-[10px] mt-[2px] text-gray-400 group-hover:text-primary" />}
            </div>
          ))}
        </div>

        {/* Right side Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-black transition-all"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button className="bg-[#111827] text-white px-5 xl:px-6 py-2 rounded-full font-medium text-sm hover:bg-black transition-colors shadow-lg shadow-black/20">
            Get a Quote
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/50 dark:bg-black/50 border border-gray-200 dark:border-gray-700"
          >
            {theme === 'light' ? (
              <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-800 dark:text-white z-50"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white dark:bg-[#0a0f18] lg:hidden transition-all duration-500 ease-in-out z-[100] ${
            isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
        >
          <div className="flex flex-col h-full pt-28 px-8 space-y-6">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 dark:border-gray-800 pb-4">
                <a 
                  href={link.href || '#'}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between text-2xl font-bold text-gray-900 dark:text-white"
                >
                  {link.name}
                  {link.hasDropdown && <FaChevronDown size={14} className="text-gray-400" />}
                </a>
              </div>
            ))}
            <div className="pt-4">
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
