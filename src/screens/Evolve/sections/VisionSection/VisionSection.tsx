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
    <section className="w-full relative mt-16 md:mt-28 lg:mt-[174px] flex flex-col items-center gap-8 md:gap-12 lg:gap-[72px] px-4 sm:px-6 lg:px-8">
      <div className="w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-[60px] max-w-7xl mx-auto">
        <h2 className="w-full text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-center font-medium font-['Space_Grotesk'] text-white leading-tight md:leading-[1.2] tracking-tight">
          Our Vision
        </h2>

        <p className="w-full text-lg sm:text-xl md:text-2xl text-center font-medium font-['Space_Grotesk'] text-white leading-relaxed max-w-4xl mx-auto px-4">
          To empower the next generation of innovators—turning students into
          skilled creators, thinkers and entrepreneurs who don't just
          learn, but build, compete and launch the startups of tomorrow.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-9 items-center justify-items-center">
          {images.map((image, index) => (
            <div key={index} className="w-full max-w-full overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-auto object-cover aspect-video md:aspect-[702/598] transition-transform duration-300 hover:scale-105"
                alt={image.alt}
                src={image.src}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};