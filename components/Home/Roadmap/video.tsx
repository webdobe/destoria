import { FunctionComponent } from "react";
import s from "./styles";

const FirstFrame: FunctionComponent = function () {

  return (
    <div style={{background: 'transparent'}} {...s.videoScene}>
      <video
        id="my-video-two"
        className="video-roadmap-planet"
        controls={false}
        preload="auto"
        muted={true}
        data-setup="{}"
        autoPlay={true}
        loop={true}
      >
        <source src="https://cdn.streamelements.com/uploads/59fda13d-01e4-4948-9e22-27cc46bf9a73.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default FirstFrame;