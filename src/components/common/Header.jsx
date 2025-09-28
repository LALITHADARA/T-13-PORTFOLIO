import React, { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center pt-[12px] pb-[12px] md:pt-[24px] md:pb-[24px]">
          <div className="flex justify-between items-center w-full lg:w-[86%]">
            {/* Logo */}
            <div className="w-[60px] sm:w-[80px] lg:w-[8%]">
              <img 
                src="/images/img_logo.png" 
                alt="Logo" 
                className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] lg:w-[96px] lg:h-[48px] object-contain"
              />
            </div>
            {/* Hamburger Menu Icon (Mobile only) */}
            <button 
              className="block lg:hidden p-2" 
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6 text-primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Navigation Menu */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} lg:block absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-gray-900 lg:bg-transparent z-50 lg:z-auto`}>
              <div className="flex flex-col lg:flex-row gap-4 lg:gap-[32px] p-4 lg:p-0 justify-center items-start lg:items-center w-full lg:w-auto">
                {/* HOME - Active/Selected State */}
                <div 
                  className="flex flex-col gap-[4px] lg:gap-[8px] justify-start items-center w-auto"
                  role="menuitem"
                >
                  <span 
                    className="text-xs font-semibold leading-xs text-left uppercase bg-gradient-to-r from-[#bc3cd8] to-[#c54b8c] bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    HOME
                  </span>
                  <div className="w-[8px] h-[2px] bg-primary-text"></div>
                </div>

                {/* Work */}
                <button 
                  className="text-xs font-semibold leading-xs text-left uppercase text-primary-text hover:bg-gradient-to-r hover:from-[#bc3cd8] hover:to-[#c54b8c] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                  style={{ fontFamily: 'Work Sans' }}
                  role="menuitem"
                >
                  Work
                </button>

                {/* About */}
                <button 
                  className="text-xs font-semibold leading-xs text-left uppercase text-primary-text hover:bg-gradient-to-r hover:from-[#bc3cd8] hover:to-[#c54b8c] hover:bg-clip-text hover:text-transparent transition-all duration-300"
                  style={{ fontFamily: 'Work Sans' }}
                  role="menuitem"
                >
                  About
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;