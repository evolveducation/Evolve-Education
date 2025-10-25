import React from "react";

export const VisionSection = (): JSX.Element => {
  const images = [
    {
      src: "/image.png",
      alt: "Image",
    },
    {
      src: "/image-1.png",
      alt: "Image",
    },
  ];

  return (
    <section className="flex w-full relative mt-[174px] flex-col items-center gap-[72px] px-4">
      <div className="inline-flex flex-col items-center gap-[60px] relative">
        <h2 className="relative max-w-[679px] text-[64px] text-center tracking-[0] leading-[78px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
          Our Vision
        </h2>

        <p className="relative max-w-[1154px] font-medium text-2xl text-center leading-[normal] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0]">
          To empower the next generation of innovators—turning students into
          skilled creators, thinkers and entrepreneurs who don&apos;t just
          learn, but build, compete and launch the startups of tomorrow .
        </p>
      </div>

      <div className="flex items-center gap-9 relative w-full max-w-[1440px] justify-center flex-wrap lg:flex-nowrap">
        {images.map((image, index) => (
          <img
            key={index}
            className="relative w-full max-w-[702px] h-auto aspect-[702/598] object-cover animate-marquee "
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>
    </section>
  );
};