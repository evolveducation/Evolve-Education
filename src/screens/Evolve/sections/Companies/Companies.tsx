import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// --- DATA ---

const audienceSegments = [
  // {
  //   title: "Young Students 3-12 (School Level)",
  //   description:
  //     "Introduce technical and entrepreneurial skills early—learn AI, coding, problem-solving, and startup building.",
  //   subtitle: "Elevate Your Personal Skills",
  //   image: "/young.png",
  // },
  // {
  //   title: "Mentors & Educators",
  //   description:
  //     "Empower the next generation by sharing your expertise. Our platform provides the tools to guide aspiring innovators.",
  //   subtitle: "Shape Future Leaders",
  //   image: "/mentor.png",
  // },
  // {
  //   title: "Investors & Business-Minded Individuals",
  //   description:
  //     "Discover and connect with promising new ventures. Get early access to a curated pipeline of talent.",
  //   subtitle: "Find the Next Big Thing",
  //   image: "/investor.png",
  // },
  // {
  //   title: "College Students & Aspiring Entrepreneurs",
  //   description:
  //     "Bridge the gap from theory to practice. Develop in-demand skills and build a strong portfolio.",
  //   subtitle: "Launch Your Career",
  //   image: "/entrepreneur.png",
  // },
];

const companies = [
  { name: "Notion", logo: "/notion-logo-fill.svg" },
  { name: "Vercel", logo: "/triangle-fill.svg" },
  { name: "Figma", logo: "/figma-logo-fill.svg" },
  { name: "Stripe", logo: "/stripe-logo-fill.svg" },
  { name: "Angular", logo: "/angular-logo-fill.svg" },
  { name: "Framer", logo: "/framer-logo-fill.svg" },
];

// --- COMPONENTS ---

const LogoSection = () => {
  return (
    <div className="w-full bg-black pt-20">
      {/* 1. Centered Header exactly like the image */}
      <div className="flex justify-center mb-8">
        <h2 className="text-white text-[15px] font-medium tracking-[0.5em] uppercase opacity-80">
            Enviornments we will collaborate with
        </h2>
      </div>

      {/* 2. Top Fading Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* 3. Auto-Scrolling Logo Strip */}
      <div className="relative overflow-hidden py-14">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .logo-track {
            display: flex;
            width: max-content;
            animation: scroll 25s linear infinite;
          }
          .fade-mask {
            mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          }
        `}} />
        
        <div className="fade-mask">
          <div className="logo-track grayscale opacity-60">
            {/* We duplicate the list to make the scroll infinite */}
            {[...companies, ...companies, ...companies].map((company, i) => (
              <div key={i} className="flex items-center justify-center px-10 md:px-20">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 md:h-12 w-auto brightness-150"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Fading Line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export const MainLandingSection = (): JSX.Element => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-black w-full overflow-hidden">
      {/* Integrated Logo Section */}
      <LogoSection />

      
    </div>
  );
};