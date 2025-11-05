import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationLinks = [
  { label: "How it works", column: 1 },
  { label: "Services", column: 1 },
  { label: "Pricing", column: 1 },
  { label: "FAQs", column: 2 },
  { label: "Mission", column: 2 },
  { label: "Contact", column: 2 },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-[90%] relative mt-[200px]">
      <div className="max-w-[2724px] mx-auto px-4">
        <div className="flex items-start justify-between mb-[91px]">
          <div className="flex flex-col gap-[26px]">
            <div className="relative w-[101px] h-[65px]">
              <div className="absolute top-0 left-0 w-[97px] opacity-60 [font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-6">
                Evolve Build.ing
              </div>
              <div className="absolute top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
                Evolve
              </div>
            </div>
            <p className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Where Learners Become Leaders.
            </p>
          </div>

          <div className="flex gap-[179px]">
            <div className="flex flex-col gap-[44px]">
              {navigationLinks
                .filter((link) => link.column === 1)
                .map((link, index) => (
                  <button
                    key={index}
                    className="opacity-60 [font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-[25.6px] whitespace-nowrap text-left hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </button>
                ))}
            </div>
            <div className="flex flex-col gap-[44px]">
              {navigationLinks
                .filter((link) => link.column === 2)
                .map((link, index) => (
                  <button
                    key={index}
                    className="opacity-60 [font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffff] text-base tracking-[0] leading-[25.6px] whitespace-nowrap text-left hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </button>
                ))}
            </div>
          </div>

          {/* <Button
            variant="outline"
            size="icon"
            className="w-[60px] h-28 bg-black rounded-[30px] border border-solid border-[#ffffff] hover:bg-[#ffffff]/10"
          >
            <img className="w-[35px] h-[35px]" alt="East" src="/east.png" />
          </Button> */}
        </div>

        <footer className="flex items-center gap-0 bg-transparent">
          <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-[180px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            evolve build.ing
          </div>

          <div className="opacity-50 [font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-[180px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            evolve build.ing
          </div>
        </footer>
      </div>
    </section>
  );
};
