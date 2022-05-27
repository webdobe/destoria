// @ts-ignore

import { FunctionComponent, useEffect, useRef, useState } from "react";
import s from "./styles";
import Image from "next/image";
import Header from "components/Header";
import Link from "next/link";
import dynamic from "next/dynamic";
const ShipVideo = dynamic(() => import("./video"), { ssr: false });
const ThreeD = dynamic(() => import("./3d"), { ssr: false });
const FirstFrame: FunctionComponent = function () {
  const myRef = useRef(null);

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
              <ThreeD mtlPath="logo/freedom.mtl" objPath="logo/freedom.obj" />
              {/* <div {...s.destoria}>
                <img
                  {...s.destoriaLogo}
                  src="/large-logo-svg.svg"
                  alt="Burger Menu"
                  width={295}
                  height={170}
                />
              </div> */}
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
                  muted
                  data-setup="{}"
                  autoPlay={false}
                  loop={false}
                >
                  <source
                    src="https://media.milanote.com/p/files/1NUoIT1PgQ7U2i/b30/Webvideo.mp4"
                    type="video/mp4"
                  />
                </video>
              <div className="video-box-frame">
              </div>
              <div className="video-box-frame-bg">
              <img className="video-box-frame-bg-img" src="/frame-video-two.png">
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
