import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import dynamic from "next/dynamic";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";
import content from "components/Carousel/CarouselOne";

const Carousel = dynamic(() => import("components/Carousel"), { ssr: false });

const CardsCarousel: FunctionComponent = function () {
  return (
    <section {...s.cardsCarousel}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerCardsCarousel}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerCardsCarouselBordered}>
            <div style={{ maxWidth: "950px", margin: "auto" }}>
              <Carousel content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardsCarousel;

//garagem 412
