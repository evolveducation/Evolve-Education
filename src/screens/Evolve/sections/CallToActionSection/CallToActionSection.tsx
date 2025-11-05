import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  const navigationDots = [
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <section
      id="vision"
      className="w-full max-w-[1200px] self-center mt-16 md:mt-[200px] flex flex-col gap-12 md:gap-[72px] px-4 md:px-0"
    >
      <header className="flex flex-col items-start gap-8 md:gap-[60px] w-full max-w-[716px]">
        <div className="text-xs md:text-sm text-center tracking-[2.80px] leading-[22.4px] whitespace-nowrap [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
          REASON TO JOIN EVOLVE
        </div>

        <h2 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-4xl md:text-[64px] tracking-tight md:tracking-[0] leading-tight md:leading-[78px]">
          Why Join Evolve
        </h2>
      </header>

      <div className="relative w-full min-h-[600px] md:min-h-[877px]">
        <img
          className="hidden md:block absolute top-[277px] left-[702px] w-[468px] h-[468px]"
          alt="Group"
          src="/group-626239.png"
        />

        <img
          className="hidden md:block absolute top-[102px] left-[69px] w-[468px] h-[468px]"
          alt="Frame"
          src="/frame-626240.svg"
        />

        <img
          className="hidden md:block absolute top-0 left-[355px] w-[842px] h-[531px]"
          alt="Group"
          src="/group-626258.png"
        />

        <Card className="relative md:absolute md:top-[427px] left-0 w-full md:w-[842px] bg-[#141414] rounded-[20px] border-0">
          <CardContent className="flex flex-col w-full md:w-[708px] items-start gap-8 md:gap-[60px] p-6 md:pt-12 md:pl-12 md:pb-12">
            <div className="flex flex-col items-start gap-6 md:gap-10 w-full">
              <img
                className="w-12 h-12 md:w-[60px] md:h-[60px]"
                alt="Frame"
                src="/frame.svg"
              />

              <div className="flex flex-col items-start gap-5 md:gap-7 w-full">
                <h3 className="text-xl md:text-2xl tracking-tight md:tracking-[0] leading-normal [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
                  Master in demand skills
                </h3>

                <p className="w-full font-normal text-sm md:text-base leading-relaxed md:leading-[25.6px] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0]">
                  Gain in-depth knowledge and hands-on experience in AI, coding,
                  machine learning, and problem-solving to build a strong
                  technical foundation. Along the way, develop essential skills
                  such as critical thinking, prompt engineering, and multiple
                  models of structured and creative thinking. Go beyond theory
                  by learning how to ideate and launch.
                </p>
              </div>
            </div>

            <nav
              className="flex items-center gap-2"
              aria-label="Slide navigation"
            >
              {navigationDots.map((dot, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    dot.active ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={dot.active ? "true" : "false"}
                />
              ))}
            </nav>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};