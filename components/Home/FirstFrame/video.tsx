import { FunctionComponent } from "react";
import s from "./styles";
import VREPlayer from "videojs-react-enhanced";

const FirstFrame: FunctionComponent = function () {
  const playerOptions = {
    src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    controls: false,
    autoplay: undefined,
    height: 300,
    loop: true,
    muted: true,
    playsinline: true,
    preload: undefined,
    width: 500,
  };

  const videojsOptions = {
    fluid: true,
  };

  return (
    <div style={{background: 'transparent'}} {...s.videoScene}>
      <video
        id="my-video"
        className="video-firstframe-planet"
        controls={false}
        preload="auto"
        muted
        data-setup="{}"
        autoPlay={true}
        loop={true}
      >
        <source src="https://cdn.streamelements.com/uploads/2de557d1-f5cd-4d41-ae8d-4e6c4ad6db73.webm" type="video/webm" />
      </video>

      <video
        id="my-video"
        className="video-firstframe-ship"
        controls={false}
        preload="auto"
        muted
        width="320"
        height="160"
        data-setup="{}"
        autoPlay={true}
        loop={true}
      >
        <source src="https://cdn.streamelements.com/uploads/36891ad6-d100-4d4f-a19e-93eb27f706cc.webm" type="video/webm" />
        <source src="https://storage.googleapis.com/jltech-assets/destoria/spaceship.mov" type="video/mp4" />
      </video>
    </div>
  );
};

export default FirstFrame;
