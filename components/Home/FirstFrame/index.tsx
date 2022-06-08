// @ts-ignore

import {
  FunctionComponent,
  useEffect,
  useCallback,
  useRef,
  useState,
} from "react";
import s from "./styles";
import Image from "next/image";
import Header from "components/Header";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const ShipVideo = dynamic(() => import("./video"), { ssr: false });
const ThreeD = dynamic(() => import("./3d"), { ssr: false });

const FirstFrame: FunctionComponent = (props) => {
  const {sectionRef} = props;
  const myRef = useRef(null);
  const myVideo = useRef(null);
  const [myHeight, setMyHeight] = useState(0);
  const [count, setCount] = useState(0);

  const cardVariants = {
    hover: {
      scale: 1.05,
    },
    initial: {
      scale: 1,
    },
  };

  const glowVariants = {
    hover: {
      opacity: 0.8,
    },
    initial: {
      scale: 1.05,
      opacity: 0,
    },
  };

  useEffect(() => {
    getFinalHeight();
  }, []);

  const getFinalHeight = useCallback(() => {
    if (!myVideo.current?.clientHeight || count < 4) {
      setTimeout(() => {
        setCount(count + 1);
        return getFinalHeight();
      }, 2000);
    }
    setMyHeight(myVideo.current?.clientHeight);
  }, [count]);

  return (
    <div {...s.majorContainer} ref={sectionRef} id="about">
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
                wrapperClassName="mb-7"
                mtlPath="logo/logo.mtl"
                objPath="logo/logo.obj"
                texturePath="logo/logo_Textures/mesh_emissive.png"
              />
              <img
                {...s.destoriaLetter}
                src="/destoria-letter.svg"
                alt="DESTORIA"
              />
              <div {...s.exploreTheMetaverseText}>Explore the Metaverse</div>
              <motion.div
                {...s.connectWalletWrapper}
                initial="initial"
                whileHover="hover"
              >
                <motion.div
                  {...s.connectWalletNeon}
                  variants={glowVariants}
                  transition={{
                    ease: "easeOut",
                    delay: 0.15,
                  }}
                >
                </motion.div>
                  <motion.div
                    {...s.connectWallet}
                    variants={cardVariants}
                    transition={{
                      ease: "easeOut",
                      delay: 0.15,
                      duration: 0.5,
                    }}
                  >
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
                  </motion.div>
              </motion.div>
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
                  Destoria is so much more than a brand, it’s a destination,
                  a family, an event, a community hub, an incubator, metaverse
                  and real P2E opportunities all rolled into one.
                </p>
                <p>
                  It's the next level, the change we all want, the evolution of what is to come.
                  With a Battle Royale and MMORPG in differing stages near completion, Destoria
                  aims to deliver for the first time real P2E mechanics through its use of Unreal Engine.
                  Destoria is developing the largest open world metaverse on the Ethereum blockchain
                  with the ability to host experiences for entire projects both start-ups or established,
                  making this a perfect launchpad for all communities.
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
                <div
                  className="video-box-frame"
                  style={{ height: myHeight + 2 + "px" }}
                ></div>
                <div
                  className="video-box-frame-bg"
                  style={{ height: myHeight + 2 + "px" }}
                >
                  <img
                    className="video-box-frame-bg-img"
                    src="/frame-video-two.png"
                    alt="video-frame"
                  ></img>
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
