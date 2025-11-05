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
    <section className="w-full relative mt-24 md:mt-[200px] px-4 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto">
        <header className="relative mb-12 md:mb-[72px]">
          <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm tracking-[2.80px] leading-[22.4px]">
            TESTIMONIALS
          </div>

          <h2 className="mt-8 md:mt-[70px] max-w-full md:max-w-[504px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-4xl md:text-[64px] tracking-tight md:tracking-[0] leading-tight md:leading-[78px]">
            Hear from Our Founders
          </h2>

          <img
            className="hidden lg:block absolute top-[15px] left-[401px] w-[117px] h-[117px]"
            alt="Icon container"
            src="/icon-container.png"
          />
        </header>

        <Card className="bg-[#141414] border-0 rounded-[20px] mb-16 md:mb-[72px]">
          <CardContent className="p-8 md:p-12 lg:p-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
              <Button
                variant="ghost"
                size="icon"
                className="w-[60px] h-[60px] flex-shrink-0 hover:bg-white/10 hidden lg:flex"
              >
                <ChevronLeftIcon className="w-6 h-6 text-white" />
              </Button>

              <div className="flex flex-col items-center gap-8 md:gap-12 max-w-[605px] flex-1">
                <blockquote className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-xl md:text-2xl text-center tracking-tight md:tracking-[0] leading-normal">
                  {testimonialData.quote}
                </blockquote>

                <div className="flex flex-col items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage
                      src={testimonialData.avatar}
                      alt={testimonialData.name}
                    />
                  </Avatar>

                  <div className="flex flex-col items-center gap-3 text-center">
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
                className="w-[60px] h-[60px] flex-shrink-0 hover:bg-white/10 hidden lg:flex"
              >
                <ChevronRightIcon className="w-6 h-6 text-white" />
              </Button>

              {/* Mobile navigation buttons */}
              <div className="flex lg:hidden items-center justify-center gap-8 w-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[60px] h-[60px] flex-shrink-0 hover:bg-white/10"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-white" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[60px] h-[60px] flex-shrink-0 hover:bg-white/10"
                >
                  <ChevronRightIcon className="w-6 h-6 text-white" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">
          {statsData.map((stat, index) => (
            <div key={index} className="flex flex-col items-center sm:items-start gap-4 md:gap-9">
              <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-4xl md:text-5xl tracking-tight md:tracking-[0] leading-tight md:leading-[78px]">
                {stat.value}
              </div>

              <div className="opacity-60 [font-family:'Space_Grotesk',Helvetica] font-medium text-white text-lg md:text-2xl tracking-tight md:tracking-[0] leading-normal max-w-[250px]">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};