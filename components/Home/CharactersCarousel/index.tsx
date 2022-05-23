import s from "./styles";
import { FunctionComponent, useEffect, useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const CharactersCarousel: FunctionComponent = function () {
  const containerRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if (containerRef.current.querySelector('.bg-characters .swiper-button-prev').classList.contains('swiper-button-disabled')) {
        containerRef.current.querySelector('.bg-characters .charac-cursor-left').classList.add('charac-button-disabled')
      }
      containerRef.current
        .querySelector(".charac-cursor-left")
        ?.addEventListener("click", () => {
          if (containerRef.current.querySelector(".bg-characters .swiper-button-prev")) {
            containerRef.current.querySelector('.bg-characters .charac-cursor-right').classList.remove('charac-button-disabled')
            containerRef.current
              .querySelector(".bg-characters .swiper-button-prev")
              .click();
          }
          if (containerRef.current.querySelector('.bg-characters .swiper-button-prev').classList.contains('swiper-button-disabled')) {
            containerRef.current.querySelector('.bg-characters .charac-cursor-left').classList.add('charac-button-disabled')
          }
        });
      containerRef.current
        .querySelector(".charac-cursor-right")
        ?.addEventListener("click", () => {
          containerRef.current.querySelector('.bg-characters .charac-cursor-left').classList.remove('charac-button-disabled')
          if (containerRef.current.querySelector(".bg-characters .swiper-button-next")) {
            containerRef.current
              .querySelector(".bg-characters .swiper-button-next")
              .click();
          }
          setTimeout(() => {
            if (containerRef.current.querySelector('.bg-characters .swiper-button-next').classList.contains('swiper-button-disabled')) {
              containerRef.current.querySelector('.bg-characters .charac-cursor-right').classList.add('charac-button-disabled')
            }
          }, 100);
        });
    }, 500);
  }, []);

  return (
    <section {...s.charactersCarousel} ref={containerRef}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerCharactersCarousel}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerCharactersCarouselBordered}>
            <div {...s.swiperAndControls}>
              <div {...s.controlLeft}>
                <Image
                  {...s.buttonImage}
                  src="/arrow-left.svg"
                  alt="Click-left"
                  width={35}
                  height={48}
                />
              </div>
              <Swiper
                lazy={true}
                navigation
                height={1000}
                modules={[Navigation]}
                {...s.swiper}
              >
                <SwiperSlide>
                  <div className="flex flex-col items-center">
                    <div {...s.charactersContent}>
                      <div
                        {...s.charactersImageContent}
                        style={{ minWidth: "360px" }}
                      >
                        <Image
                          {...s.characterImage}
                          src="/characters-cowboy.png"
                          alt="Cowboy"
                          width={360}
                          height={360}
                          style={{ position: "absolute", minWidth: "360px" }}
                        />
                      </div>
                      <div {...s.charactersTextContent}>
                        <h5 {...s.charactersTextContentTitle}>Faction</h5>
                        <h4 {...s.charactersTextContentSubtitle}>Outrider</h4>
                        <p {...s.charactersTextContentText}>
                          The Destorian Outriders are an organization of rangers
                          that keep the peace in all the southern and central
                          territories of Ordos Prime. They are characterized by
                          their pneumatic weaponry, tactical armor and gas
                          masks. Alongside the long coats and hats they wear as
                          part of their uniform. They are often seen patrolling
                          Ordos Prime on their newly developed hover bikes.
                        </p>
                        <div {...s.characterImage}>
                          <Image
                            src="/characters-outrider-status.svg"
                            alt="Burger Menu"
                            width={360}
                            height={71}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center  w-full">
                    <div {...s.charactersContent}>
                      <div
                        {...s.charactersImageContent}
                        style={{ minWidth: "360px" }}
                      >
                        <Image
                          {...s.characterImage}
                          src="/characters-outrider-1.png"
                          alt="Burger Menu"
                          width={360}
                          height={360}
                          style={{ position: "absolute", minWidth: "360px" }}
                        />
                      </div>
                      <div {...s.charactersTextContent}>
                        <h5 {...s.charactersTextContentTitle}>Faction</h5>
                        <h4 {...s.charactersTextContentSubtitle}>Outrider</h4>
                        <p {...s.charactersTextContentText}>
                          The Destorian Outriders are an organization of rangers
                          that keep the peace in all the southern and central
                          territories of Ordos Prime. They are characterized by
                          their pneumatic weaponry, tactical armor and gas
                          masks. Alongside the long coats and hats they wear as
                          part of their uniform. They are often seen patrolling
                          Ordos Prime on their newly developed hover bikes.
                        </p>
                        <div>
                        <div {...s.characterImage}>
                          <Image
                            src="/characters-outrider-status.svg"
                            alt="Burger Menu"
                            width={360}
                            height={71}
                          />
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div {...s.controlRight}>
                {" "}
                <Image
                  {...s.buttonImage}
                  src="/arrow-right.svg"
                  alt="Click-left"
                  width={35}
                  height={48}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CharactersCarousel;

//garagem 412
