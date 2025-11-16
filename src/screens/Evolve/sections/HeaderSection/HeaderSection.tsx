import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-full mt-20 md:mt-40 overflow-hidden">
      {/* The parent container for the animation */}
      <div className="flex items-center animate-marquee">
        {/* Original text elements */}
        <div className="flex-shrink-0 text-6xl md:text-9xl lg:text-[180px] text-center tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
          evolved build.ing
        </div>
        <div className="flex-shrink-0 text-6xl md:text-9xl lg:text-[180px] text-center tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Space_Grotesk',Helvetica] font-medium text-white opacity-50">
          evolved build.ing
        </div>

        {/* Duplicated text elements for a seamless loop */}
        <div
          className="flex-shrink-0 text-6xl md:text-9xl lg:text-[180px] text-center tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Space_Grotesk',Helvetica] font-medium text-white"
          aria-hidden="true"
        >
          evolved build.ing
        </div>
        <div
          className="flex-shrink-0 text-6xl md:text-9xl lg:text-[180px] text-center tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Space_Grotesk',Helvetica] font-medium text-white opacity-50"
          aria-hidden="true"
        >
          evolved build.ing
        </div>
      </div>
    </header>
  );
};