import s from "./styles";
import { FunctionComponent } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import dynamic from 'next/dynamic'

const Masonry = dynamic(
  () => import('./Masonry'),
  { ssr: false }
)
const AnimatedGallery: FunctionComponent = (props) => {
  const {sectionRef} = props;

  return (
    <section {...s.animatedGallery} id="gallery" ref={sectionRef} data-label="Gallery">
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerAnimatedGallery}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerAnimatedGalleryBordered}>
            <div {...s.animatedGalleryContent}>
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
