import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Move data outside the component to avoid "already declared" errors 
// and improve performance.
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

export const CallToActionSection = (): JSX.Element => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated(true);
    }, 150);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="vision"
      className="w-full max-w-[1200px] mx-auto mt-12 md:mt-[200px] flex flex-col gap-10 md:gap-[102px] px-6 md:px-2"
    >
      <header className="flex flex-col items-start gap-4 md:gap-[60px] w-full max-w-[716px]">
        <div className="text-[10px] md:text-sm tracking-[2.80px] leading-[22.4px] uppercase [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
          REASON TO JOIN EVOLVED
        </div>

        <h2 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-3xl md:text-[64px] tracking-tight leading-tight md:leading-[78px]">
          Why Join Evolved
        </h2>
      </header>

      <div className="relative w-full flex flex-col md:block md:min-h-[1100px]">
        {/* Decorative Backgrounds */}
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

        {/* The Card - No Border, Mobile Optimized */}
        <Card className="relative md:absolute md:top-[440px] left-0 w-full bg-[#141414]/95 backdrop-blur-sm rounded-[20px] border-0 shadow-[0_0_40px_rgba(0,0,0,0.6)] z-20">
          <CardContent className="p-6 md:p-10">
            <div className="w-full">
              <ol className="w-full grid gap-6 md:gap-x-6 md:gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none [font-family:'Space_Grotesk',Helvetica]">
                {reasons.map((reason, index) => (
                  <li
                    key={index}
                    className={`transition-all duration-700 ease-out flex gap-4 ${
                      isAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {/* Number Badge */}
                    <span className="flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gray-400 via-white to-gray-400 text-[10px] font-bold text-black shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                      {index + 1}
                    </span>
                    
                    <div className="flex flex-col gap-1">
                      <div className="font-bold text-white text-sm md:text-[15px] leading-tight">
                        {reason.title}
                      </div>
                      <p className="text-[12px] md:text-xs text-gray-400 leading-snug">
                        {reason.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};