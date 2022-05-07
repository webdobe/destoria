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
                  <div className="flex flex-col items-center w-full lg:px-40">
                    <div {...s.charactersContent}>
                      <Image
                        {...s.characterImage}
                        src="/characters-outrider-1.png"
                        alt="Burger Menu"
                        width={200}
                        height={45}
                        style={{ position: "absolute" }}
                      />
                    </div>
                    <div>
                      <h5>Faction</h5>
                      <h4>Outrider</h4>
                      <p>
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
              <SwiperSlide>
                <div className="cards-carousel cards-carousel-left flex flex-col pt-10 md:pt-20 items-center">
                  <div className="flex flex-col items-center w-full pl-14 pr-20 md:pl-20 md:pr-48">
                    <h4 {...s.cardTitle}>Metaverse</h4>
                    <p {...s.cardContent} style={{ marginBottom: "20px" }}>
                      Users can set up an island with a passive income shop, or
                      host a P2E experience. Be the Destorian Mechanic or a
                      Landlord and rent out housing. Use this space as not only
                      a safe spot within our ecosystem, but also a place for you
                      to grow with us.
                    </p>
                    <h4
                      {...s.cardBottom}
                      style={{ color: "#F0F0F0", filter: "blur(1px)" }}
                    >
                      coming soon...
                    </h4>
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
