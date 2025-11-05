import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const navigationLinks = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Vision", href: "#vision" },
  { label: "FAQs", href: "#FAQ" },
];

const circularTextLetters = [
    { char: "I", rotate: "93.76deg" },
    { char: "N", rotate: "104.73deg" },
    { char: "N", rotate: "119.31deg" },
    { char: "O", rotate: "134.17deg" },
    { char: "V", rotate: "148.59deg" },
    { char: "A", rotate: "162.02deg" },
    { char: "T", rotate: "175.14deg" },
    { char: "E", rotate: "-172.27deg" },
    { char: " ", rotate: "-162.02deg" },
    { char: " ", rotate: "-154.30deg" },
    { char: " ", rotate: "-146.48deg" },
    { char: "E", rotate: "-136.46deg" },
    { char: "L", rotate: "-124.57deg" },
    { char: "E", rotate: "-112.50deg" },
    { char: "V", rotate: "-99.48deg" },
    { char: "A", rotate: "-85.80deg" },
    { char: "T", rotate: "-72.89deg" },
    { char: "E", rotate: "-60.27deg" },
    { char: " ", rotate: "-50.00deg" },
    { char: " ", rotate: "-42.50deg" },
    { char: "C", rotate: "-31.41deg" },
    { char: "A", rotate: "-17.33deg" },
    { char: "P", rotate: "-4.42deg" },
    { char: "T", rotate: "8.16deg" },
    { char: "I", rotate: "18.41deg" },
    { char: "V", rotate: "29.09deg" },
    { char: "A", rotate: "42.50deg" },
    { char: "T", rotate: "55.43deg" },
    { char: "E", rotate: "67.93deg" },
];

export const MainContentSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="w-full relative flex flex-col items-center px-4 py-7">
      <div className="w-full max-w-[1206px] relative">
        <header className="flex items-center justify-between mb-24 md:mb-[186px]">
          <Link to="/" className="relative w-[101px] h-[65px] z-20">
            <div className="absolute top-0 left-0 w-[97px] opacity-60 [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-2xl tracking-[0] leading-6">
              Evolve Build.ing
            </div>
            <div className="absolute top-0 left-0 [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              Evolve
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-[42px]">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[25.6px] whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </nav>
            <Link to="/form" className="hidden md:inline-flex">
          <Button className="items-center justify-center gap-4 pl-6 pr-4 py-[15px] bg-white rounded-lg overflow-hidden border border-solid border-white hover:bg-[#f0f0f0] h-auto">
            <span className="[font-family:'Manrope',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
              Join Waitlist
            </span>
            <img
              className="w-6 h-6"
              alt="Arrow downward alt"
              src="/arrow-downward-alt-3.png"
            />
          </Button>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-20">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </Button>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-black bg-opacity-90 z-10 flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center gap-8">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Space_Grotesk',Helvetica] font-normal text-white text-2xl text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
                <Link to="/form" className="mt-8">
              <Button className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-4 bg-white rounded-lg text-black">
                Join Waitlist
              </Button>
              </Link>
            </nav>
          </div>
        )}

        <div className="relative flex flex-col items-center text-center">
          <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm tracking-[2.80px] leading-[22.4px] whitespace-nowrap mb-4">
            WELCOME TO EVOLVE
          </div>

          <h1 className="w-full max-w-[1020px] [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-5xl md:text-7xl lg:text-8xl tracking-tight leading-tight md:leading-[110px] mb-12 md:mb-16">
            Where Dreamers Become Doers
          </h1>

          <p className="opacity-60 font-medium text-base leading-[25.6px] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0] mb-12 max-w-lg">
            The global platform empowering Youth, Innovators, entrepreneurs and
            future disruptors
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link to="/form">
              <Button className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-[15px] bg-white rounded-lg overflow-hidden border border-solid border-white hover:bg-[#f0f0f0] h-auto">
                <span className="[font-family:'Manrope',Helvetica] font-medium text-black text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
                  Join the Waitlist
                </span>
                <img
                  className="w-6 h-6"
                  alt="Arrow downward alt"
                  src="/arrow-downward-alt-1.png"
                />
              </Button>
            </Link>
            <Link to="/form">
              <Button className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-[15px] bg-black rounded-lg overflow-hidden border border-solid border-white hover:bg-[#1a1a1a] h-auto">
                <span className="[font-family:'Manrope',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
                  Let&apos;s Talk
                </span>
                <img
                  className="w-6 h-6"
                  alt="Arrow downward alt"
                  src="/arrow-downward-alt-2.png"
                />
              </Button>
            </Link>
          </div>

          <Badge className="hidden md:inline-flex items-center justify-center gap-2.5 px-[26px] py-6 absolute top-[213px] left-[163px] bg-[#00ff95] rounded-2xl rotate-6 hover:bg-[#00ff95] h-auto">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-black text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
              Best in industry
            </span>
          </Badge>

          <img
            className="hidden lg:block absolute top-[-45px] right-[90px] w-[140px] h-[140px]"
            alt="All inclusive icon"
            src="/all-inclusive-icon-container.png"
          />

          <div className="hidden lg:block absolute top-[214px] right-[240px] w-[140px] h-[140px]">
            <div className="relative w-full h-full">
              <div className="absolute w-[140px] h-[140px] bg-yellow rounded-full rotate-[30deg]">
                <div className="absolute top-2.5 left-2.5 w-[119px] h-[119px] bg-yellow rounded-full border-2 border-solid border-black" />
                <img
                  className="absolute top-[25px] left-[25px] w-[89px] h-[89px] rotate-[-30deg]"
                  alt="Icons"
                  src="/icons-484581-1.svg"
                />
              </div>

              <div className="absolute w-[159px] h-[101px] top-[-9.5px] left-[-9.5px]">
                {/* Circular Text */}
                <div className="absolute w-full h-full">
                  {circularTextLetters.map((letter, index) => (
                    <span
                      key={index}
                      className="absolute w-full h-full origin-center text-center [font-family:'Space_Grotesk',Helvetica] font-medium text-black text-[12.4px] tracking-[2.48px]"
                      style={{ transform: `rotate(${letter.rotate})` }}
                    >
                      <span
                        className="inline-block"
                        style={{ transform: `translateY(-50.5px)` }}
                      >
                        {letter.char}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <img
            className="hidden md:block absolute top-[-17px] left-[287px] w-[83px] h-[83px]"
            alt="Smile icon container"
            src="/smile-icon-container.png"
          />
        </div>
      </div>
    </section>
  );
};