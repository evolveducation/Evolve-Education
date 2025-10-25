import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    title: "Explore & Learn",
    description:
      "Learn in-depth skills: AI, Coding, Machine Learning, \nProblem-Solving & Startup Building.",
    icon: "/calendar-today.png",
    opacity: "opacity-30",
    border: "border-[#ffffff33]",
  },
  {
    title: "Earn Points & Rewards",
    description:
      "Complete courses, earn points, and redeem real rewards\n—gift cards, coupons, merchandise, and more.",
    icon: "/design-services.png",
    opacity: "",
    border: "border-[#ffffff66]",
  },
  {
    title: "Compete & Win",
    description:
      "Join interactive battles—1v1, 3v3, or group challenges. \nWin rewards & recognition.",
    icon: "/comment.png",
    opacity: "opacity-30",
    border: "border-[#ffffff33]",
  },
  {
    title: "Join Communities",
    description: "Connect with peers, share knowledge, and expand your skills.",
    icon: "/rocket-launch.png",
    opacity: "opacity-30",
    border: "border-[#ffffff33]",
  },
];

export const FAQSection = (): JSX.Element => {
  return (
    <section  id="how-it-works" className="relative w-full flex justify-center mt-40">
      <div className="relative w-full max-w-[1202px] px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="flex-shrink-0 lg:w-[476px]">
            <div className="mb-8">
              <p className="text-sm text-center lg:text-left tracking-[2.80px] leading-[22.4px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white mb-8">
                HOW IT WORKS
              </p>
              <h2 className="text-[64px] tracking-[0] leading-[78px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
                Our streamlined process
              </h2>
            </div>
            <div className="inline-flex items-center justify-center gap-2.5 px-[26px] py-6 bg-red rounded-2xl rotate-[-8deg] ml-32">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                For best results
              </span>
            </div>
          </div>

          <div className="relative flex-1">
            <div className="absolute -top-1 right-0 w-[648px] h-[656px] rotate-90 bg-[linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%,rgba(0,0,0,1)_100%)] pointer-events-none" />

            <div className="flex flex-col gap-4">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className={`bg-[#141414] rounded-[20px] border border-solid ${card.border} ${card.opacity} transition-opacity hover:opacity-100`}
                >
                  <CardContent className="p-0">
                    <div className="flex items-start gap-6 p-8">
                      <div className="relative flex-shrink-0">
                        <div className="w-[86px] h-[86px] bg-white rounded-lg opacity-20" />
                        <img
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[46px] h-[46px]"
                          alt={card.title}
                          src={card.icon}
                        />
                      </div>
                      <div className="flex flex-col gap-6 flex-1 pt-1">
                        <h3 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
                          {card.title}
                        </h3>
                        <p className="opacity-60 [font-family:'Space_Grotesk',Helvetica] font-normal text-white text-base tracking-[0] leading-[25.6px] whitespace-pre-line">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
