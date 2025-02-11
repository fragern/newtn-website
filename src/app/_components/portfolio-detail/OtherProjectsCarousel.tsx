"use client";

import React from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import type { Portfolio } from "@/types/Portfolio";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./OtherProjectsCarouselArrowButtons";
import PortfolioCard from "./PortfolioCard";

type PropType = {
  projects: Portfolio[];
  options?: EmblaOptionsType;
};

const OtherProjectsCarousel: React.FC<PropType> = (props) => {
  const { projects, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla m-auto w-full">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container -ml-8 flex touch-pan-y touch-pinch-zoom">
          {projects.map((p) => (
            <div
              className="embla__slide w-[300px] flex-none pl-8 sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
              key={p.id}
            >
              <PortfolioCard portfolio={p} category="web-development" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls mt-8 flex w-full justify-center px-10">
        <div className="embla__buttons grid grid-cols-2 items-center gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default OtherProjectsCarousel;
