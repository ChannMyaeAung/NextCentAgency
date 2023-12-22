import React, { Fragment, useEffect, useState } from "react";
import { heroInfo } from "../data/hero";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const Hero = () => {
  const [heroData, setHeroData] = useState(heroInfo);

  const [index, setIndex] = useState(0);

  /* Infinite sliding */
  useEffect(() => {
    const lastIndex = heroData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [heroData, index]);

  /* Sliding every 3 seconds automatically */
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slideTimer);
  }, [index]);

  /* Function to render hero section */
  function renderHeroSection() {
    return (
      <section id="home" className="mt-20 overflow-hidden">
        <div className="relative flex h-[800px] md:h-[600px] bg-neutralSilver w-full">
          {heroData.map((item, heroIndex) => {
            const { id, img, heading, paragraph, button } = item;

            /* Custom CSS Classes for positioning elements */
            let position = "nextSlide";

            if (heroIndex === index) {
              position = "activeSlide";
            }

            if (
              heroIndex === index - 1 ||
              (index === 0 && heroIndex === heroData.length - 1)
            ) {
              position = "lastSlide";
            }

            /* Hero section */
            return (
              <div
                key={id}
                className={`${position} px-4 cursorTransition absolute top-0 left-0 flex flex-col items-center h-full md:flex-row-reverse md:items-center`}
              >
                <figure>
                  <img src={img} alt="illustration" />
                </figure>
                <div className="md:w-1/2">
                  <h1 className="mb-4 text-5xl font-semibold leading-snug md:w-3/4 text-neutralDGray">
                    {heading.h1}{" "}
                    <span className="text-brandPrimary">{heading.span}</span>
                  </h1>
                  <p className="mb-8 text-neutralGray">{paragraph}</p>
                  <button className="btn-primary">{button}</button>
                </div>
              </div>
            );
          })}

          {/* Prev and Next Btns */}
          <button
            onClick={() => setIndex(index - 1)}
            className="absolute z-10 left-5 top-5 text-brandPrimary hover:text-neutralGray"
          >
            <ArrowLeftCircle />
          </button>
          <button
            onClick={() => setIndex(index + 1)}
            className="absolute z-10 right-5 top-5 text-brandPrimary hover:text-neutralGray"
          >
            <ArrowRightCircle />
          </button>

          {/* Carousel pagination */}
          <div className="absolute flex gap-2 bottom-3 left-1/2 right-1/2">
            {heroData.map((_, itemIndex) => (
              <button key={itemIndex} onClick={() => setIndex(itemIndex)}>
                {itemIndex === index ? (
                  <div className="w-3 h-3 rounded-full bg-brandPrimary" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-brandPrimary/50" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }
  /* End of renderHeroSection Function */

  return <Fragment>{renderHeroSection()}</Fragment>;
};

export default Hero;
