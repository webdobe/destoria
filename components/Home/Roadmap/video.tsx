import { FunctionComponent } from "react";
import s from "./styles";

const PlanetFrame: FunctionComponent = function () {

  return (
    <div style={{background: 'transparent'}} {...s.videoScene}>
      <video
        id="my-video-two"
        className="video-roadmap-planet"
        controls={false}
        preload="auto"
        muted
        data-setup="{}"
        autoPlay={true}
        loop={true}
      >
        <source src="https://cdn.streamelements.com/uploads/b5c30951-b172-48c7-8064-0811e2f20234.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default PlanetFrame;