import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import NavigationTabs from "components/NavigationTabs";
import React, {useState} from 'react'
const orderTabs = ["Open World", "Combat", "Customization", "Interoperability"]


const FindMore: FunctionComponent = function () {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section {...s.findMore}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
      <div
        {...s.containerFindMore}
        style={{ maxWidth: "1440px", width: "100%" }}
      >
        <div {...s.containerFindMoreBordered} >
            <NavigationTabs
              options={orderTabs}
              setTab={setCurrentTab}
              currentTab={currentTab}
            />
          </div>
          <div {...s.findmoreContent}>

          </div>
      </div>
      </div>
    </section>
  );
};
export default FindMore;

//garagem 412