"use client";

import React, { Fragment, useMemo } from "react";

import { DefaultSlidesData } from "./data";
import type { InfinityCarouselProps } from "./types";

export const InfinityCarousel: React.FC<InfinityCarouselProps> = ({
  className,
  backgroundColor = "#f3f2f2",
}) => {
  const generateLoop = (
    slidesData: typeof DefaultSlidesData,
    maxLength: number
  ) => {
    if (slidesData.length > 0) {
      const repeatCount = Math.ceil(maxLength / slidesData.length);
      return Array.from(
        { length: repeatCount * slidesData.length },
        (_, index) => slidesData[index % slidesData.length]
      );
    }
    return [];
  };

  const infiniteLogos = useMemo(() => {
    return generateLoop(DefaultSlidesData, DefaultSlidesData.length);
  }, []);

  return (
    <article
      className={`flex w-full flex-col py-6 ${className}`}
      data-cid="clients-carousel"
      style={{ background: backgroundColor }}
    >
      <div className="carousel">
        <div className="slider relative">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, ${backgroundColor}, transparent)`,
            }}
            className={`absolute left-0 z-20 h-full w-[30%]`}
          />
          <div
            style={{
              backgroundImage: `linear-gradient(to left, ${backgroundColor}, transparent)`,
            }}
            className={`absolute right-0 z-20 h-full w-[30%]`}
          />
          <div className="slide-track gap-x-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Fragment key={`logos-${index}`}>
                {infiniteLogos.map((slideItem: string, index: number) => (
                  <div
                    className="flex flex-wrap justify-center gap-6 md:gap-8 text-[#8d8d8d] text-base md:text-lg font-normal"
                    key={`carousel-item-${index}`}
                  >
                    <span
                      key={index}
                      className="uppercase tracking-wide whitespace-nowrap"
                    >
                      {slideItem}
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
