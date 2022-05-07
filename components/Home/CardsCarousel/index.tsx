import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const CardsCarousel: FunctionComponent = function () {
  return (
    <section {...s.cardsCarousel}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
      <div
        {...s.containerCardsCarousel}
        style={{ maxWidth: "1440px", width: "100%" }}
      >
        <div {...s.containerCardsCarouselBordered} >
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            autoplay={true}
            followFinger={true}
            autoHeight={true}
            spaceBetween={-130}
            height={600}
            style={{maxWidth: '1400px', margin: 'auto', height: '600px'}}
            initialSlide={1}
            breakpoints={{
              845: {
                slidesPerView: 1,
              },
              846: {
                slidesPerView: 3,
              }
            }}
            lazy={true}
            {...s.swiper}
          >
            <SwiperSlide>
              <div className="cards-carousel cards-carousel-left flex flex-col pt-10 md:pt-20 items-center">
                <div className="flex flex-col items-center w-full pl-14 pr-20 md:pl-16 md:pr-44">
                  <h4 {...s.cardTitle}>
                    MMORPG
                  </h4>
                  <p  {...s.cardContent}>
                  Freely roam the Destorian multiverse and complete one of the many storylines and side quests. Focusing on combat and P2E, explore a variety of biomes and opportunities. All while engaging with enemies within the environment and other players. And remember, every action has an equal and opposite reaction. Play wisely. 
                  </p>
                  <h4 {...s.cardBottom} style={{color: "#F0F0F0", filter: 'blur(1px)'}}>
                    coming soon...
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="cards-carousel cards-carousel-middle flex flex-col pt-10 md:pt-20 items-center">
                <div className="flex flex-col items-center w-full pl-14 pr-20 md:pl-20 md:pr-48">
                  <h4 {...s.cardTitle}>
                    Metaverse
                  </h4>
                  <p  {...s.cardContent}  style={{marginBottom: '20px'}}>
                  Users can set up an island with a passive income shop, or host a P2E experience. Be the Destorian Mechanic or a Landlord and rent out housing. Use this space as not only a safe spot within our ecosystem, but also a place for you to grow with us.
                  </p>
                  <h4 {...s.cardBottom} style={{color: "#F0F0F0", filter: 'blur(1px)'}}>
                    coming soon...
                  </h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="cards-carousel cards-carousel-right flex flex-col pt-10 md:pt-20 items-center">
                <div className="flex flex-col items-center w-full pl-14 pr-20 md:pl-20 md:pr-48">
                  <h4 {...s.cardTitle}>
                    Battle Royale
                  </h4>
                  <p  {...s.cardContent}>
                  This game will be like most other last man or last team standing blueprints, except with a few twists of our own. Create an account on our site to be able to trade in your XP and minerals for our $STORI token and be able to play to earn like you never have before on console. 
                  </p>
                  <h4 {...s.cardBottom} style={{color: "#F0F0F0", filter: 'blur(1px)'}}>
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
export default CardsCarousel;

//garagem 412