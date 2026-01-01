import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  const reasons = [
    { title: "Master in-demand skills:", description: "Learn cutting-edge skills in AI, coding, and entrepreneurship." },
    { title: "Gamified Learning & Rewards:", description: "Learn like a game—earn points and redeem rewards." },
    { title: "Build your professional profile:", description: "Showcase verified skills to stand out in the real world." },
    { title: "Join a vibrant community:", description: "Connect and grow with ambitious students and innovators." },
    { title: "Discover opportunities & network:", description: "Meet co-founders, mentors, and early supporters." },
    { title: "Launch your own startup:", description: "Turn ideas into reality with mentorship and funding." },
    { title: "Experience real growth & rewards:", description: "Convert progress into real-world impact and recognition." },
    { title: "Continuous growth:", description: "Progress through learning, networking, and competitions." },
    { title: "Competitions & engagement:", description: "Join quizzes, hackathons, and pitch battles." },
  ];

  const reasons = [
    {
      title: "Master in-demand skills:",
      description:
        "Learn cutting-edge skills in AI, coding, and entrepreneurship to stay future-ready.",
    },
    {
      title: "Gamified Learning & Rewards:",
      description:
        "Learn like a game—earn points, unlock levels, and redeem real rewards.",
    },
    {
      title: "Build your professional profile:",
      description:
        "Showcase verified skills and achievements to stand out in the real world.",
    },
    {
      title: "Join a vibrant community:",
      description:
        "Connect, collaborate, and grow with ambitious students and innovators.",
    },
    {
      title: "Discover opportunities & network:",
      description:
        "Meet co-founders, mentors, and early supporters to fuel your journey.",
    },
    {
      title: "Launch your own startup:",
      description:
        "Turn ideas into reality with mentorship, funding, and launch support.",
    },
    {
      title: "Experience real growth & rewards:",
      description:
        "Convert your learning progress into real-world impact and recognition.",
    },
    {
      title: "Continuous growth:",
      description:
        "Keep progressing through learning, networking, competitions, and rewards.",
    },
    {
      title: "Competitions & engagement:",
      description:
        "Join quizzes, hackathons, and pitch battles—and get feedback that counts.",
    },
  ];

  const [isAnimated, setIsAnimated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerPage) % reasons.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerPage, reasons.length]);

  return (
    <section
      id="vision"
      className="w-full h-full max-w-[1200px] mx-auto mt-12 md:mt-[20px] flex flex-col gap-10 md:gap-[15px] px-6 md:px-2"
    >
      <header className="flex flex-col items-start gap-4 md:gap-[60px] w-full max-w-[716px]">
        <div className="text-[10px] md:text-sm tracking-[2.80px] leading-[22.4px] uppercase [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
          REASON TO JOIN EVOLVED
        </div>

        <h2 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-3xl md:text-[64px] tracking-tight leading-tight md:leading-[78px]">
          Why Join Evolved
        </h2>
      </header>

      <div className="relative w-full min-h-[420px] md:min-h-[780px]">
        <img
          className="hidden md:block absolute top-[277px] left-[702px] w-[468px] h-[468px] pointer-events-none"
          alt="Decoration"
          src="/group-626239.png"
        />
        <img
          className="hidden md:block absolute top-[102px] left-[69px] w-[468px] h-[468px] pointer-events-none"
          alt="Decoration"
          src="/frame-626240.svg"
        />

        {/* Main Image */}
        <img
          className="relative md:absolute md:top-0 md:left-[355px] w-full max-w-[300px] md:max-w-none md:w-[842px] h-auto md:h-[531px] mx-auto z-10 mb-8 md:mb-0"
          alt="Join Evolved"
          src="/joinus.png"
        />

        <Card className="relative md:absolute md:top-[520px] left-0 w-full md:w-[842px] bg-[#141414] rounded-[20px] border-0 gap-2 shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-transform transition-shadow duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,0,0,0.9)] md:h-[290px]">
          <CardContent className="flex flex-col w-full md:w-[708px] items-start gap-6 md:gap-[40px] p-5 md:pt-8 md:pl-8 md:pb-8 h-full">
            <div className="flex flex-col items-start gap-6 md:gap-10 w-full">
              {/* <img
                className="w-12 h-12 md:w-[60px] md:h-[60px]"
                alt="Frame"
                src="/frame.svg"
              /> */}
              <div className="flex flex-col items-start gap-5 md:gap-7 w-full">
                <ol className="w-full grid gap-4 md:gap-6 md:grid-cols-3 list-none font-normal text-sm md:text-base leading-relaxed md:leading-[25.6px] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0]">
                  {Array.from({ length: itemsPerPage }).map((_, localIndex) => {
                    const reasonIndex = (currentIndex + localIndex) % reasons.length;
                    const reason = reasons[reasonIndex];
                    return (
                      <li
                        key={reason.title}
                        className={`transition-all duration-500 ease-out rounded-2xl bg-white/5/0 border border-white/5 hover:border-white/20 px-4 py-4 md:py-5 flex flex-col gap-3 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.55)] ${
                          isAnimated
                            ? "opacity-100 animate-[pulse_5s_ease-in-out_infinite]"
                            : "opacity-0"
                        }`}
                        style={{ transitionDelay: `${localIndex * 80}ms` }}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#4ADE80] via-[#22D3EE] to-[#6366F1] text-xs font-semibold text-black shadow-[0_0_25px_rgba(99,102,241,0.8)]">
                            {reasonIndex + 1}
                          </span>
                          
                        </div>

                        <div className="flex flex-col gap-1">
                          <div className="font-semibold text-sm md:text-[15px]">
                            {reason.title}
                          </div>
                          <p className="text-xs md:text-sm text-white/80">
                            {reason.description}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
{/* 
            <nav
              className="flex items-center gap-1"
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
            </nav> */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
