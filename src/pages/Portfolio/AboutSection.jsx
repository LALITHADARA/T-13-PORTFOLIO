import React from 'react';

const AboutSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-[17px] sm:gap-[25px] lg:gap-[34px] justify-start items-center w-full py-8 sm:py-12 lg:py-16">
          {/* Text Content */}
          <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-start w-full lg:w-[60%]">
            <h2 className="text-[12px] sm:text-[18px] lg:text-lg font-semibold leading-[14px] sm:leading-[22px] lg:leading-lg tracking-wide text-left uppercase text-primary-text" style={{ fontFamily: 'Work Sans' }}>
              A bit about me
            </h2>
            <p className="text-[16px] sm:text-[24px] lg:text-xl font-normal leading-[24px] sm:leading-[36px] lg:leading-2xl text-left text-primary-text w-full" style={{ fontFamily: 'Work Sans' }}>
              <span className="font-light text-text-muted">I am a UI/UX designer who is passionate about creating </span>
              <span className="font-semibold text-primary-text">beautiful and joyful digital experiences. Besides design, I love</span>
              <span className="font-semibold text-primary-text"> </span>
              <span className="font-semibold text-primary-text">music, games and travelling. </span>
            </p>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] lg:gap-[32px] justify-start items-center w-full lg:w-[40%]">
            {/* Single Image */}
            <div className="flex justify-start items-center w-full sm:w-[65%] lg:w-[62%]">
              <img 
                src="/images/img_change_this_408x282.png" 
                alt="About me" 
                className="w-full h-[200px] sm:h-[250px] lg:h-[408px] object-cover rounded-md"
              />
            </div>

            {/* Two Stacked Images */}
            <div className="flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[32px] justify-start items-center w-full sm:w-[55%] lg:w-[55%]">
              <img 
                src="/images/img_change_this_374x282.png" 
                alt="About me" 
                className="w-full h-[180px] sm:h-[220px] lg:h-[374px] object-cover rounded-md"
              />
              <img 
                src="/images/img_change_this_3.png" 
                alt="About me" 
                className="w-full h-[180px] sm:h-[220px] lg:h-[374px] object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;