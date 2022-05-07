import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const CharactersCarousel: FunctionComponent = function () {
  return (
    <section {...s.charactersCarousel}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerCharactersCarousel}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerCharactersCarouselBordered}>
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              autoplay={true}
              followFinger={true}
              autoHeight={true}
              spaceBetween={-130}
              height={600}
              style={{ maxWidth: "1400px", margin: "auto", height: "600px" }}
              {...s.swiper}
            >
              <SwiperSlide>
                <div className="flex flex-col items-center  w-full">
                  <div {...s.charactersContent}>
                    <div {...s.charactersImageContent} style={{minWidth: '360px'}}>
                      <Image
                        {...s.characterImage}
                        src="/characters-outrider-1.png"
                        alt="Burger Menu"
                        width={360}
                        height={360}
                        style={{ position: "absolute", minWidth: '360px' }}
                      />
                    </div>
                    <div {...s.charactersTextContent}>
                      <h5 {...s.charactersTextContentTitle}>Faction</h5>
                      <h4 {...s.charactersTextContentSubtitle}>Outrider</h4>
                      <p  {...s.charactersTextContentText}>
                        The Destorian Outriders are an organization of rangers
                        that keep the peace in all the southern and central
                        territories of Ordos Prime. They are characterized by
                        their pneumatic weaponry, tactical armor and gas masks.
                        Alongside the long coats and hats they wear as part of
                        their uniform. They are often seen patrolling Ordos
                        Prime on their newly developed hover bikes.
                      </p>
                      <Image
                        {...s.characterImage}
                        src="/characters-outrider-status.svg"
                        alt="Burger Menu"
                        width={360}
                        height={71}
                        style={{ position: "absolute" }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="flex flex-col items-center  w-full">
                  <div {...s.charactersContent}>
                    <div {...s.charactersImageContent} style={{minWidth: '360px'}}>
                      <Image
                        {...s.characterImage}
                        src="/characters-outrider-1.png"
                        alt="Burger Menu"
                        width={360}
                        height={360}
                        style={{ position: "absolute", minWidth: '360px' }}
                      />
                    </div>
                    <div {...s.charactersTextContent}>
                      <h5 {...s.charactersTextContentTitle}>Faction</h5>
                      <h4 {...s.charactersTextContentSubtitle}>Outrider</h4>
                      <p  {...s.charactersTextContentText}>
                        The Destorian Outriders are an organization of rangers
                        that keep the peace in all the southern and central
                        territories of Ordos Prime. They are characterized by
                        their pneumatic weaponry, tactical armor and gas masks.
                        Alongside the long coats and hats they wear as part of
                        their uniform. They are often seen patrolling Ordos
                        Prime on their newly developed hover bikes.
                      </p>
                      <Image
                        {...s.characterImage}
                        src="/characters-outrider-status.svg"
                        alt="Burger Menu"
                        width={200}
                        height={45}
                        style={{ position: "absolute" }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CharactersCarousel;

//garagem 412
