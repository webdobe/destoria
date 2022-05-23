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
        <source src="https://cdn.streamelements.com/uploads/59fda13d-01e4-4948-9e22-27cc46bf9a73.webm" type="video/webm" />
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
        <source src="https://cdn.streamelements.com/uploads/14ddb106-7ab8-497e-aa6a-0cc394fef01c.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default FirstFrame;
