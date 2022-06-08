import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import NavigationTabs from "components/NavigationTabs";
import React, { useState } from "react";
const orderTabs = ["Open World", "Combat", "Customization", "Interoperability"];

const FindMore: FunctionComponent = (props) => {
  const {sectionRef} = props;
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <section {...s.findMore} ref={sectionRef} id="game-specs">
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div
          {...s.containerFindMore}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerFindMoreBordered}>
            <NavigationTabs
              options={orderTabs}
              setTab={setCurrentTab}
              currentTab={currentTab}
            />
            <div {...s.findmoreContent}>
              {currentTab == 0 && (
                <div {...s.findmoreBoxOpenWorld}>
                  <div {...s.findmoreBoxText}>
                    <h3 {...s.titleContent}>Open World</h3>
                    <p {...s.textContent}>With direct interconnected access into the Metaverse you will travel to and from your island straight into the RPG. Hot spots are the only places you can be looted or lose any valuables, so the property you own is your personal safe zone. You can keep it all to yourself or rent out space to others as safehavens while they traverse the metaverse. With many different types of P2E games within the metaverse island ecosystem, you will never run out of things to do or $Stori to earn.</p>
                  </div>
                </div>
              )}
              {currentTab == 1 && (
                <div {...s.findmoreBoxCombat}>
                  <div {...s.findmoreBoxText}>
                    <h3 {...s.titleContent}>Combat</h3>
                    <p {...s.textContent}>Engage in a multitude of PVP and PVE Play to Earn experiences across the Destoria Metaverse. From the Battle Royale shooter to completing side missions in the RPG, to the variety of survival games and mini games that will be available, we are sure to capture the true essence of what it means to fight to win.</p>
                  </div>
                </div>
              )}
              {currentTab == 2 && (
                <div {...s.findmoreBoxCustomization}>
                  <div {...s.findmoreBoxText}>
                    <h3 {...s.titleContent}>Customization</h3>
                    <p {...s.textContent}>Enter the marketplace and pick out the things YOU want. From choices of what material and texture your condo or shop could have, to the clothes and other selections of assets you may hold. Create your own destiny with Destoria.</p>
                  </div>
                </div>
              )}
              {currentTab == 3 && (
                <div {...s.findmoreBoxInteroperability}>
                  <div {...s.findmoreBoxText}>
                    <h3 {...s.titleContent}>Interoperability</h3>
                    <p {...s.textContent}>With the resources and expertise to rig a select group of collection pieces and a team to create your plot or island, Destoria has the ability to mass adopt entire communities to provide an extra outlet of utility and dynamics. Want your favorite project implemented into the Destorian metaverse? Hit the Collab page to find out how.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FindMore;

//garagem 412
