import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialData = {
  quote:
    '"The platform gave me the tools and confidence to pitch my startup idea. I even connected with mentors and potential co-founders!"',
  name: "Rosie Malek",
  role: "Science College Student",
  avatar: "/ellipse-73.svg",
};

const statsData = [
  {
    value: "1k+",
    description: "Already Registered Candidates",
  },
  {
    value: "500K+",
    description: "Expected Reach in 2025",
  },
  {
    value: "2K+",
    description: "Mentors and industry experts",
  },
  // {
  //   value: "30K+",
  //   description: "Active learners worldwide",
  // },
];

export const FooterSection = (): JSX.Element => {
  return (
    <section className="w-full relative mt-[200px] px-4">
      <div className="max-w-[1200px] mx-auto">
        <header className="relative mb-[72px]">
          <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm tracking-[2.80px] leading-[22.4px]">
            TESTIMONIALS
          </div>

          <h2 className="mt-[70px] max-w-[504px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[64px] tracking-[0] leading-[78px]">
            Hear from Our Founders
          </h2>

          <img
            className="absolute top-[15px] left-[401px] w-[117px] h-[117px]"
            alt="Icon container"
            src="/icon-container.png"
          />
        </header>

        <Card className="bg-[#141414] border-0 rounded-[20px] mb-[72px]">
          <CardContent className="p-20">
            <div className="flex items-center justify-between gap-[157px]">
              <Button
                variant="ghost"
                size="icon"
                className="w-[60px] h-[60px] flex-shrink-0 hover:bg-white/10"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </Button>

              <div className="flex flex-col items-center gap-12 max-w-[605px] flex-1">
                <blockquote className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-[normal]">
                  {testimonialData.quote}
                </blockquote>

                <div className="flex flex-col items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={testimonialData.avatar}
                      alt={testimonialData.name}
                    />
                  </Avatar>

                  <div className="flex flex-col items-center gap-3">
                    <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px]">
                      {testimonialData.name}
                    </div>

                    <div className="opacity-60 [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-base tracking-[0] leading-[25.6px]">
                      {testimonialData.role}
                    </div>
                  </div>
                </div>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="w-[60px] h-[60px] flex-shrink-0 hover:bg-white/10"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col gap-9">
              <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-5xl tracking-[0] leading-[78px]">
                {stat.value}
              </div>

              <div className="opacity-60 [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal]">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
