import React, { FunctionComponent } from "react";
import s from "./styles";
import Video from './video'
const Roadmap: FunctionComponent = function () {
  return (
    <section {...s.roadmap} id="faq">
      <div {...s.photoLayer}>
        <Video />
      </div>
      <div {...s.contentLayer}>
        <div
          {...s.containerRoadmap}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerRoadmapBordered}>
            <div {...s.containerRoadmapContent}>
      
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
