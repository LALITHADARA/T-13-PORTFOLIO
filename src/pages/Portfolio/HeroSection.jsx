import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-[linear-gradient(180deg,#010208_0%,#010101_50%,#010101_100%)]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[110px] sm:gap-[165px] lg:gap-[220px] justify-start items-center w-full py-8 sm:py-12 lg:py-16">
          {/* Hero Text */}
          <div className="flex flex-col gap-[117px] sm:gap-[175px] lg:gap-[234px] justify-start items-center w-full px-4 sm:px-8 lg:px-[56px]">
            <h1 className="text-[28px] sm:text-[42px] lg:text-[56px] font-light sm:font-normal lg:font-semibold leading-[42px] sm:leading-[63px] lg:leading-5xl text-center text-primary-text w-full" style={{ fontFamily: 'Work Sans' }}>
              <span className="font-light text-text-muted">I am a designer specialising in</span>
              <span className="text-primary-text"> </span>
              <span className="font-semibold text-primary-text">UI/UX</span>
              <span className="font-semibold text-primary-text"> </span>
              <span className="font-light text-text-muted">and</span>
              <span className="text-primary-text"> </span>
              <span className="font-semibold text-primary-text">Interaction Design</span>
            </h1>
            
            {/* Arrow Down */}
            <div className="w-[40px] h-[40px] flex justify-center items-center">
              <img 
                src="/images/img_arrow_down.svg" 
                alt="Scroll down" 
                className="w-[40px] h-[40px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;