import React from 'react';
import ImageMobile from '/assets/images/mobile/image-interactive.jpg';
import ImageDesktop from '/assets/images/desktop/image-interactive.jpg';
export default function SectionInteractive() {
  return (
    <section className="px-6 md:px-40 py-20">
      <div className="relative  h-[530px] md:h-[500px] flex flex-col md:flex-row">
        <picture>
          <source
            srcSet={ImageMobile}
            media="only screen and (max-width : 768px)"
          />
          <img src={ImageDesktop} alt="image man virtual glass game" />
        </picture>
        <div className="p-5 md:p-0  w-full md:w-[540px] h-[320px]">
          <div>
            <h2 className="font-josefin font-light text-3xl text-center uppercase mb-5">
              The leader in interactive VR
            </h2>
            <p className="text-[15px] text-center font-normal opacity-50">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
