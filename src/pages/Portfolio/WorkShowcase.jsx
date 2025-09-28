import React from 'react';
import Button from '../../components/ui/Button';

const WorkShowcase = () => {
  const projects = [
    {
      id: 1,
      image: "/images/img_change_this.png",
      title: "Real estate Template",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
      category: "Website Design",
      buttonStyle: "outline"
    },
    {
      id: 2,
      image: "/images/img_change_this_490x594.png",
      title: "Plant identification app",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
      category: "Mobile App",
      buttonStyle: "primary",
      imagePosition: "right"

    },
    {
      id: 3,
      image: "/images/img_change_this_1.png",
      title: "Smart Home App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
      category: "Mobile App",
      buttonStyle: "outline"
    },
    {
      id: 4,
      image: "/images/img_change_this_2.png",
      title: "Logo Animation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices lorem non feugiat egestas amet.",
      category: "Animation",
      buttonStyle: "outline",
      imagePosition: "right"
    }
  ];

  return (
    <section className="w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[48px] sm:gap-[72px] lg:gap-[96px] justify-start items-start w-full py-8 sm:py-12 lg:py-16">
          {/* Section Title */}
          <h2 className="text-[20px] sm:text-[30px] lg:text-2xl font-light leading-[28px] sm:text-xl lg:leading-xl text-left text-primary-text" style={{ fontFamily: 'Work Sans' }}>
            <span className="text-text-muted">Selected</span>
            <span className="text-primary-text"> </span>
            <span className="font-semibold text-primary-text">Works</span>
          </h2>

          {/* Projects Grid */}
          <div className="flex flex-col gap-[48px] sm:gap-[72px] lg:gap-[96px] w-full">
            {projects?.map((project, index) => (
              <div 
                key={project?.id}
                className={`flex flex-col ${project?.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-[16px] sm:gap-[24px] lg:gap-[32px] justify-start items-center w-full`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-[50%]">
                  <img 
                    src={project?.image} 
                    alt={project?.title}
                    className="w-full h-[245px] sm:h-[367px] lg:h-[490px] object-cover rounded-xl lg:rounded-xl"
                  />
                </div>

                {/* Project Content */}
                <div className={`flex flex-col gap-[14px] sm:gap-[21px] lg:gap-[28px] justify-start items-start w-full lg:w-[50%] ${project?.imagePosition === 'right' ? '' : 'lg:self-end'}`}>
                  <div className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] justify-center items-start w-full">
                    <span className="text-xs font-semibold leading-xs text-left uppercase text-primary-text" style={{ fontFamily: 'Work Sans' }}>
                      {project?.title}
                    </span>
                    <p className="text-[16px] sm:text-[24px] lg:text-xl font-normal leading-[24px] sm:leading-[36px] lg:leading-2xl text-left text-primary-text w-full" style={{ fontFamily: 'Work Sans' }}>
                      <span className="font-light text-text-muted">Lorem ipsum dolor sit amet, consectetur</span>
                      <span className="text-primary-text"> </span>
                      <span className="font-semibold text-primary-text">adipiscing elit. Ultrices lorem non feugiat egestas amet.</span>
                    </p>
                  </div>
                  
                  <span className="text-base font-light leading-base text-left text-primary-text" style={{ fontFamily: 'Work Sans' }}>
                    {project?.category}
                  </span>

                  {project?.buttonStyle === 'primary' ? (
                    <Button
                      text="View work"
                      text_font_size="text-sm"
                      text_font_weight="font-semibold"
                      text_color="text-primary-text"
                      border_border="1px solid #e3e4e6"
                      border_border_radius="rounded-lg"
                      fill_background="linear-gradient(99.05deg, #BC3CD8 0.07%, #C54B8C 106.32%)"
                      padding="8px 52px 8px 28px"
                      className="flex items-center gap-[8px]"
                      layout_gap=""
                      layout_width=""
                      margin=""
                      position=""
                      variant="primary"
                      size="medium"
                      onClick={() => {}}
                    >
                      <span>View work</span>
                      <img src="/images/img_icon.svg" alt="" className="w-[24px] h-[24px]" />
                    </Button>
                  ) : (
                    <div className="flex items-center gap-[8px] px-[8px] py-[8px] border border-button-border-muted rounded-lg">
                      <span className="text-sm font-normal leading-sm text-left uppercase text-primary-text" style={{ fontFamily: 'Work Sans' }}>
                        View work
                      </span>
                      <img src="/images/img_arrow_right.svg" alt="" className="w-[24px] h-[24px]" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;