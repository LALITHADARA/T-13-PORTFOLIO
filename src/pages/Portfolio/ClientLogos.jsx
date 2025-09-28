import React from 'react';

const ClientLogos = () => {
  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[40px] sm:gap-[60px] lg:gap-[80px] justify-start items-center w-full py-8 sm:py-12 lg:py-16">
          {/* Section Title */}
          <h2 className="text-[20px] sm:text-[30px] lg:text-2xl font-light leading-[30px] sm:leading-[45px] lg:leading-3xl text-left text-primary-text" style={{ fontFamily: 'Work Sans' }}>
            <span className="text-text-muted">Some of</span>
            <span className="text-primary-text"> </span>
            <span className="font-semibold text-primary-text">the clients I have{'\n'}designed for</span>
          </h2>

          {/* Client Logos */}
          <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[40px] lg:gap-[134px] w-full justify-center items-center py-[8px] sm:py-[12px] lg:py-[16px]">
            <img 
              src="/images/img_airbnb_logo.svg" 
              alt="Airbnb" 
              className="w-[120px] sm:w-[150px] lg:w-[194px] h-[37px] sm:h-[46px] lg:h-[60px] object-contain"
            />
            <img 
              src="/images/img_google_logo.svg" 
              alt="Google" 
              className="w-[110px] sm:w-[140px] lg:w-[180px] h-[37px] sm:h-[46px] lg:h-[60px] object-contain"
            />
            <img 
              src="/images/img_microsoft_logo.svg" 
              alt="Microsoft" 
              className="w-[160px] sm:w-[200px] lg:w-[262px] h-[34px] sm:h-[43px] lg:h-[56px] object-contain"
            />
            <div className="flex gap-[8px] sm:gap-[12px] lg:gap-[0px] items-center">
              <img 
                src="/images/img_path23.svg" 
                alt="FedEx" 
                className="w-[60px] sm:w-[80px] lg:w-[100px] h-[31px] sm:h-[40px] lg:h-[52px] object-contain"
              />
              <img 
                src="/images/img_g17.svg" 
                alt="FedEx Logo" 
                className="w-[43px] sm:w-[56px] lg:w-[72px] h-[30px] sm:h-[38px] lg:h-[50px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;