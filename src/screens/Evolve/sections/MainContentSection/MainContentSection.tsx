import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navigationLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Vision", href: "#vision" },
  { label: "FAQs", href: "#FAQ" },
];

const circularTextLetters = [
  {
    char: "I",
    top: "top-[49.01%]",
    left: "left-[59.36%]",
    rotate: "rotate-[93.76deg]",
  },
  {
    char: "N",
    top: "top-[56.63%]",
    left: "left-[57.00%]",
    rotate: "rotate-[104.73deg]",
  },
  {
    char: "N",
    top: "top-[67.31%]",
    left: "left-[54.34%]",
    rotate: "rotate-[119.31deg]",
  },
  {
    char: "O",
    top: "top-[77.83%]",
    left: "left-[49.30%]",
    rotate: "rotate-[134.17deg]",
  },
  {
    char: "V",
    top: "top-[84.43%]",
    left: "left-[44.23%]",
    rotate: "rotate-[148.59deg]",
  },
  {
    char: "A",
    top: "top-[88.83%]",
    left: "left-[38.05%]",
    rotate: "rotate-[162.02deg]",
  },
  {
    char: "T",
    top: "top-[90.78%]",
    left: "left-[31.87%]",
    rotate: "rotate-[175.14deg]",
  },
  {
    char: "E",
    top: "top-[90.50%]",
    left: "left-[25.47%]",
    rotate: "rotate-[-172.27deg]",
  },
  {
    char: "",
    top: "top-[88.60%]",
    left: "left-[21.33%]",
    rotate: "rotate-[-162.02deg]",
  },
  {
    char: "",
    top: "top-[86.27%]",
    left: "left-[17.74%]",
    rotate: "rotate-[-154.30deg]",
  },
  {
    char: "",
    top: "top-[83.19%]",
    left: "left-[14.39%]",
    rotate: "rotate-[-146.48deg]",
  },
  {
    char: "E",
    top: "top-[78.29%]",
    left: "left-[9.59%]",
    rotate: "rotate-[-136.46deg]",
  },
  {
    char: "L",
    top: "top-[70.91%]",
    left: "left-[5.64%]",
    rotate: "rotate-[-124.57deg]",
  },
  {
    char: "E",
    top: "top-[62.66%]",
    left: "left-[2.84%]",
    rotate: "rotate-[-112.50deg]",
  },
  {
    char: "V",
    top: "top-[52.94%]",
    left: "left-0",
    rotate: "rotate-[-99.48deg]",
  },
  {
    char: "A",
    top: "top-[42.05%]",
    left: "left-0",
    rotate: "rotate-[-85.80deg]",
  },
  {
    char: "T",
    top: "top-[32.46%]",
    left: "left-0",
    rotate: "rotate-[-72.89deg]",
  },
  {
    char: "E",
    top: "top-[22.92%]",
    left: "left-[4.55%]",
    rotate: "rotate-[-60.27deg]",
  },
  {
    char: "",
    top: "top-[16.03%]",
    left: "left-[8.59%]",
    rotate: "rotate-[-50.00deg]",
  },
  {
    char: "",
    top: "top-[11.81%]",
    left: "left-[11.20%]",
    rotate: "rotate-[-42.50deg]",
  },
  {
    char: "C",
    top: "top-[6.81%]",
    left: "left-[14.19%]",
    rotate: "rotate-[-31.41deg]",
  },
  {
    char: "A",
    top: "top-[2.16%]",
    left: "left-[20.72%]",
    rotate: "rotate-[-17.33deg]",
  },
  {
    char: "P",
    top: "top-0",
    left: "left-[26.77%]",
    rotate: "rotate-[-4.42deg]",
  },
  {
    char: "T",
    top: "top-0",
    left: "left-[33.16%]",
    rotate: "rotate-[8.16deg]",
  },
  {
    char: "I",
    top: "top-[2.55%]",
    left: "left-[39.89%]",
    rotate: "rotate-[18.41deg]",
  },
  {
    char: "V",
    top: "top-[5.85%]",
    left: "left-[43.34%]",
    rotate: "rotate-[29.09deg]",
  },
  {
    char: "A",
    top: "top-[12.07%]",
    left: "left-[48.82%]",
    rotate: "rotate-[42.50deg]",
  },
  {
    char: "T",
    top: "top-[19.53%]",
    left: "left-[52.98%]",
    rotate: "rotate-[55.43deg]",
  },
  {
    char: "E",
    top: "top-[28.64%]",
    left: "left-[56.43%]",
    rotate: "rotate-[67.93deg]",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full relative flex flex-col items-center px-4 py-7">
      <div className="w-full max-w-[1206px] relative">
        <header className="flex items-center justify-between mb-[186px]">
          <div className="relative w-[101px] h-[65px]">
            <div className="absolute top-0 left-[calc(50.00%_-_50px)] w-[97px] opacity-60 [font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-6">
              Evolve Build.ing
            </div>
            <div className="absolute top-0 left-[calc(50.00%_-_50px)] [font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              Evolve
            </div>
          </div>

          <nav className="flex items-center gap-[42px]">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Space_Grotesk',Helvetica] font-normal text-[#ffffff] text-base text-center tracking-[0] leading-[25.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-[15px] bg-[#ffffff] rounded-lg overflow-hidden border border-solid border-[#ffffff] hover:bg-[#f0f0f0] h-auto">
            <span className="[font-family:'Manrope',Helvetica] font-medium text-[#000000] text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              Join Waitlist
            </span>
            <img
              className="w-6 h-6"
              alt="Arrow downward alt"
              src="/arrow-downward-alt-3.png"
            />
          </Button>
        </header>

        <div className="relative flex flex-col items-center">
          <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[2.80px] leading-[22.4px] whitespace-nowrap mb-[14px]">
            WELCOME TO EVOLVE
          </div>

          <h1 className="w-full max-w-[1020px] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ffffff] text-8xl text-center tracking-[0] leading-[110px] mb-[115px]">
            Where Dreamers Become Doers
          </h1>

          <p className="opacity-60 font-medium text-base text-center leading-[25.6px] [font-family:'Space_Grotesk',Helvetica] text-[#ffffff] tracking-[0] mb-[73px]">
            The global platform empowering Youth, Innovators ,<br />
            entrepreneurs and future disruptors
          </p>

          <div className="flex items-center gap-4">
            <Button className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-[15px] bg-[#ffffff] rounded-lg overflow-hidden border border-solid border-[#ffffff] hover:bg-[#f0f0f0] h-auto">
              <span className="[font-family:'Manrope',Helvetica] font-medium text-[#000000] text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
                Join the Waitlist
              </span>
              <img
                className="w-6 h-6"
                alt="Arrow downward alt"
                src="/arrow-downward-alt-1.png"
              />
            </Button>

            <Button className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-[15px] bg-[#000000] rounded-lg overflow-hidden border border-solid border-[#ffffff] hover:bg-[#1a1a1a] h-auto">
              <span className="[font-family:'Manrope',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
                Let&#39;s Talk
              </span>
              <img
                className="w-6 h-6"
                alt="Arrow downward alt"
                src="/arrow-downward-alt-2.png"
              />
            </Button>
          </div>

          <Badge className="inline-flex items-center justify-center gap-2.5 px-[26px] py-6 absolute top-[213px] left-[163px] bg-green rounded-2xl rotate-6 hover:bg-green h-auto">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#000000] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Best in industry
            </span>
          </Badge>

          <img
            className="absolute top-[-45px] right-[90px] w-[140px] h-[140px]"
            alt="All inclusive icon"
            src="/all-inclusive-icon-container.png"
          />

          <div className="absolute top-[214px] right-[240px] w-[140px] h-[140px] bg-yellow rounded-[70px] rotate-[30deg]">
            <div className="absolute top-2.5 left-2.5 w-[119px] h-[119px] bg-yellow rounded-[59.5px] border-2 border-solid border-[#000000]" />

            <img
              className="absolute top-[25px] left-[25px] w-[89px] h-[89px] rotate-[-30deg]"
              alt="Icons"
              src="/icons-484581-1.svg"
            />

            <div className="absolute top-[19px] left-[19px] w-[159px] h-[101px]">
              {circularTextLetters.map((letter, index) => (
                <div
                  key={index}
                  className={`absolute w-[5.03%] h-[8.90%] ${letter.top} ${letter.left} ${letter.rotate} flex items-center justify-center [font-family:'Space_Grotesk',Helvetica] font-medium text-[#000000] text-[12.4px] text-center tracking-[2.48px] leading-[19.9px] whitespace-nowrap`}
                >
                  {letter.char}
                </div>
              ))}
            </div>
          </div>

          <img
            className="absolute top-[-17px] left-[287px] w-[83px] h-[83px]"
            alt="Smile icon container"
            src="/smile-icon-container.png"
          />
        </div>
      </div>
    </section>
  );
};
