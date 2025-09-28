import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] justify-start items-center w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-[56px]">
          {/* Contact Section */}
          <div className="flex flex-col gap-[30px] sm:gap-[45px] lg:gap-[60px] justify-start items-center w-full sm:w-[80%] lg:w-[54%]">
            {/* Contact Header */}
            <div className="flex flex-col gap-[2px] sm:gap-[3px] lg:gap-[4px] justify-center items-center w-full">
              <div className="flex justify-center items-center w-full">
                <h2 className="text-[28px] sm:text-[42px] lg:text-3xl font-light leading-[33px] sm:leading-[49px] lg:leading-4xl text-center text-primary-text" style={{ fontFamily: 'Work Sans' }}>
                  <span className="text-text-muted">Get</span>
                  <span className="text-primary-text"> </span>
                  <span className="font-semibold text-primary-text">in Touch.</span>
                </h2>
              </div>
              <p className="text-base font-light leading-base text-center text-primary-text" style={{ fontFamily: 'Work Sans' }}>
                So that we can talk more about...
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-between items-center w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[360px] mx-auto">
              <img 
                src="/images/img_mail.svg" 
                alt="Email" 
                className="w-[36px] sm:w-[42px] lg:w-[48px] h-[36px] sm:h-[42px] lg:h-[48px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src="/images/img_behance.svg" 
                alt="Behance" 
                className="w-[36px] sm:w-[42px] lg:w-[48px] h-[36px] sm:h-[42px] lg:h-[48px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src="/images/img_dribble.svg" 
                alt="Dribbble" 
                className="w-[36px] sm:w-[42px] lg:w-[48px] h-[36px] sm:h-[42px] lg:h-[48px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
              <img 
                src="/images/img_linkedin.svg" 
                alt="LinkedIn" 
                className="w-[36px] sm:w-[42px] lg:w-[48px] h-[36px] sm:h-[42px] lg:h-[48px] object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-center items-center w-auto px-[2px] sm:px-[3px] lg:px-xs py-[2px] sm:py-[3px] lg:py-xs">
            <p className="text-base font-light leading-base text-center text-primary-text" style={{ fontFamily: 'Work Sans' }}>
              <span className="text-text-muted">Made with</span>
              <span className="text-primary-text"> ❣️ </span>
              <span className="text-text-muted">by</span>
              <span className="text-primary-text">  </span>
              <span className="font-semibold text-primary-text"> Lalitha Dara</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;