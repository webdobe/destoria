import s from "./styles";
import { FunctionComponent, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import dynamic from 'next/dynamic'

const Masonry = dynamic(
  () => import('./Masonry'),
  { ssr: false }
)
const AnimatedGallery: FunctionComponent = function () {
  const containerRef = useRef(null)


  return (
    <section {...s.animatedGallery} ref={containerRef}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerAnimatedGallery}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerAnimatedGalleryBordered}>
            <div {...s.animatedGalleryContent} style={{minHeight: '500px'}}>
              <Masonry/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AnimatedGallery;

//garagem 412
