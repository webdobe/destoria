// @ts-ignore

import { FunctionComponent, useEffect, useCallback, useRef, useState } from "react";
import s from "./styles";
import Image from "next/image";
import Header from "components/Header";
import Link from "next/link";
import dynamic from "next/dynamic";
const ShipVideo = dynamic(() => import("./video"), { ssr: false });
const ThreeD = dynamic(() => import("./3d"), { ssr: false });
const FirstFrame: FunctionComponent = function () {
  const myRef = useRef(null);
  const myVideo = useRef(null);
  const [myHeight, setMyHeight] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => { 
    getFinalHeight()
  }, [])

  const getFinalHeight = useCallback(() => {
    console.log('updating?,', !myVideo.current?.clientHeight)
    console.log('updating?,', count)
    if (!myVideo.current?.clientHeight || count < 4) {
      setTimeout(() => {
        console.log('updating')
        setCount(count + 1)
        return getFinalHeight()
      }, 1000);
    }
    setMyHeight(myVideo.current?.clientHeight)
  }, [count])

  return (
    <div {...s.majorContainer} ref={myRef}>
      <div {...s.photoLayer}>
        <ShipVideo />
      </div>
      <div {...s.contentLayer}>
        <Header />
        <section {...s.exploreTheMetaverse}>
          <div
            {...s.containerExploreTheMetaverse}
            style={{ maxWidth: "1440px", width: "100%" }}
          >
            <div {...s.containerExploreTheMetaverseBordered}>
              <ThreeD
                mtlPath="logo/logo.mtl"
                objPath="logo/logo.obj"
                texturePath="logo/logo_Textures/mesh_roughness.png"
              />
              <div {...s.exploreTheMetaverseText}>Explore the Metaverse</div>
              <div {...s.connectWallet}>
                <Link href="/lore">
                  <span
                    {...s.connectWalletText}
                    style={{
                      whiteSpace: "nowrap",
                      position: "relative",
                      left: "18px",
                      zIndex: 1,
                    }}
                  >

                    Discover the Lore
                  </span>
                </Link>
                <Image
                  {...s.connectWalletImage}
                  src="/button-one.svg"
                  alt="Burger Menu"
                  width={200}
                  height={45}
                  style={{ position: "absolute" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section {...s.destoriaTheVideo}>
          <div
            {...s.containerDestoriaTheVideo}
            style={{ maxWidth: "1440px", width: "100%" }}
          >
            <div {...s.textBoxDestoriaTheVideoBordered}>
              <div {...s.textBoxDestoriaTheVideo}>
                <p>
                  Destoria is more than just a brand, it’s a destination. With a
                  battle royale and MMORPG in development, Destoria aims to
                  deliver real P2E mechanics through Unreal Engine.

                </p>
                <p>
                  Destoria is developing the largest open world metaverse on the
                  Ethereum blockchain. This metaverse has the ability to host
                  experiences for entire projects, making this a launchpad for
                  other communities and businesses.
                </p>
              </div>
              <div {...s.destoriaHeroVideo}>
                <video
                  id="video-hero"
                  className="video-js"
                  controls={true}
                  preload="auto"
                  data-setup="{}"
                  autoPlay={false}
                  loop={false}
                  ref={myVideo}
                >
                  <source
                    src="https://media.milanote.com/p/files/1NV33s1yu5lx4F/u2K/webvideo2.mp4"
                    type="video/mp4"
                  />
                </video>
              <div className="video-box-frame" style={{height: myHeight + 2 + 'px'}}>
              </div>
              <div className="video-box-frame-bg" style={{height: myHeight + 2 + 'px'}}>
                <img className="video-box-frame-bg-img" src="/frame-video-two.png" alt="video-frame">
              </img>
              </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FirstFrame;
