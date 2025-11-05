import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const audienceSegments = [
  {
    title: "Young Students 3-12 (School Level)",
    description:
      "Introduce technical and entrepreneurial skills early—learn AI, coding, problem-solving, and startup building. Prepare for future entrepreneurship, because the sooner you plant, the faster your dreams sprout.",
    subtitle: "Elevate Your Personal Skills",
    image: "/image-2.svg",
  },
  {
    title: "Mentors & Educators",
    description:
      "Empower the next generation by sharing your expertise. Our platform provides the tools to guide aspiring innovators, track their progress, and make a lasting impact on their entrepreneurial journey.",
    subtitle: "Shape Future Leaders",
    image: "/image-2.svg",
  },
  {
    title: "Investors & Business-Minded Individuals",
    description:
      "Discover and connect with promising new ventures. Get early access to a curated pipeline of talent and innovative projects, and play a pivotal role in bringing groundbreaking ideas to market.",
    subtitle: "Find the Next Big Thing",
    image: "/image-2.svg",
  },
  {
    title: "College Students & Aspiring Entrepreneurs",
    description:
      "Bridge the gap from theory to practice. Develop in-demand skills, build a strong portfolio, connect with mentors, and get the hands-on experience you need to launch your own startup.",
    subtitle: "Launch Your Career",
    image: "/image-2.svg",
  },
];

export const FeaturesSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="how-it-works"
      className="w-full flex justify-center mt-24 md:mt-[120px]"
    >
      <div className="w-full max-w-[1320px] px-4">
        <Card className="bg-[#141414] rounded-[20px] border-0">
          <CardContent className="p-0">
            <div className="px-6 py-12 md:px-10 lg:px-[60px] lg:py-[95px]">
              <div className="mb-12 md:mb-[70px]">
                <p className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm tracking-[2.80px] leading-[22.4px] mb-8 md:mb-[70px]">
                  WHO THIS PLATFORM IS FOR
                </p>

                <div className="relative">
                  <h2 className="text-4xl md:text-5xl lg:text-[64px] tracking-tight lg:tracking-[0] leading-tight lg:leading-[78px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white max-w-[911px]">
                    Built for Learners, Innovators, and Future Founders
                  </h2>

                  <Badge className="hidden lg:inline-flex absolute top-[46px] left-[603px] bg-yellow text-black hover:bg-yellow px-[26px] py-6 rounded-2xl rotate-6 h-auto">
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      No stone unturned
                    </span>
                  </Badge>
                </div>
              </div>

              <div className="space-y-0">
                {audienceSegments.map((segment, index) => (
                  <div key={index}>
                    {index > 0 && <Separator className="bg-white/10 h-px" />}

                    {/* Mobile Layout */}
                    <div className="lg:hidden py-6">
                      <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => handleToggle(index)}
                        aria-expanded={openIndex === index}
                        aria-controls={`content-${index}`}
                      >
                        <h3 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-lg md:text-xl tracking-tight leading-normal max-w-[80%]">
                          {segment.title}
                        </h3>
                        <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center flex-shrink-0">
                          <ChevronDown
                            className={`w-6 h-6 text-black transition-transform duration-300 ${
                              openIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </div>
                      {openIndex === index && (
                        <div
                          id={`content-${index}`}
                          className="mt-6 flex flex-col gap-6"
                        >
                          <img
                            className="w-full h-auto object-cover rounded-lg"
                            alt={`${segment.title} illustration`}
                            src={segment.image}
                          />
                          <div className="flex flex-col gap-6">
                            <p className="font-normal text-base leading-[25.6px] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0]">
                              {segment.description}
                            </p>
                            <p className="opacity-60 text-lg tracking-[0] leading-[1.5] [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
                              {segment.subtitle}
                            </p>
                            <Link to="/form">
                              <Button
                                variant="outline"
                                className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-3 bg-[#141414] rounded-lg border-white text-white hover:bg-white/10 hover:text-white w-fit h-auto"
                              >
                                <span className="[font-family:'Manrope',Helvetica] font-medium text-sm text-center">
                                  Contact
                                </span>
                                <img
                                  className="w-5 h-5"
                                  alt="Arrow icon"
                                  src="/arrow-downward-alt.png"
                                />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:block py-[47px] relative">
                      <div className="flex items-start justify-between gap-8">
                        <h3 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal] max-w-[184px]">
                          {segment.title}
                        </h3>
                        {openIndex === index && (
                          <>
                            <div className="flex flex-col gap-[72px] w-[360px]">
                              <p className="font-normal text-base leading-[25.6px] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0]">
                                {segment.description}
                              </p>
                              <p className="opacity-60 text-xl tracking-[0] leading-[48.0px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
                                {segment.subtitle}
                              </p>
                              <Link to="/form">
                                <Button
                                  variant="outline"
                                  className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-[15px] bg-[#141414] rounded-lg border-white text-white hover:bg-white/10 hover:text-white w-fit h-auto"
                                >
                                  <span className="[font-family:'Manrope',Helvetica] font-medium text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
                                    Contact
                                  </span>
                                  <img
                                    className="w-6 h-6"
                                    alt="Arrow icon"
                                    src="/arrow-downward-alt.png"
                                  />
                                </Button>
                              </Link>
                            </div>
                            <img
                              className="w-[400px] h-auto object-cover rounded-lg"
                              alt={`${segment.title} illustration`}
                              src={segment.image}
                            />
                          </>
                        )}
                        <button
                          className="w-[60px] h-[60px] bg-white rounded-[30px] flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-colors"
                          aria-label={`Expand ${segment.title}`}
                          onClick={() => handleToggle(index)}
                          aria-expanded={openIndex === index}
                        >
                          <ChevronDown
                            className={`w-6 h-6 text-black transition-transform duration-300 ${
                              openIndex === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};