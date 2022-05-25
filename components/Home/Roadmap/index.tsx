import React, { FunctionComponent, useEffect, useState } from "react";
import s from "./styles";
import Video from "./video";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
const Roadmap: FunctionComponent = function () {
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => setShowModal(false))
    return () => {
      window.removeEventListener('scroll', () => setShowModal(false))
    }
  })
  return (
    <section {...s.roadmap}>
      <div {...s.containerRoadmapBordered} style={{ maxWidth: "1400px" }}>
        <div {...s.photoLayer}>
          <Video />
        </div>
        <div {...s.photolayerDesktop}>
          <div {...s.circleContainer}></div>
        </div>
        <div {...s.photolayerDesktop}>
          <motion.div
            animate={{ scale: selected === 0 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(0)}
            {...s.ballOne}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 1 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(1)}
            {...s.ballTwo}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 2 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(2)}
            {...s.ballThree}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 3 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(3)}
            {...s.ballFour}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 4 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(4)}
            {...s.ballFive}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 5 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(5)}
            {...s.ballSix}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 6 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(6)}
            {...s.ballSeven}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 7 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(7)}
            {...s.ballEight}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 8 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(8)}
            {...s.ballNine}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 9 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(9)}
            {...s.ballTen}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 10 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(10)}
            {...s.ballEleven}
          ></motion.div>
          <motion.div
            animate={{ scale: selected === 11 ? 1.5 : 1 }}
            onMouseEnter={() => setSelected(11)}
            {...s.ballTwelve}
          ></motion.div>
        </div>
        <div {...s.photolayerDesktop}>
          <div
            style={{
              filter: selected !== 0 ? "blur(3px)" : "",
              opacity: selected !== 0 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelOne}
          ></div>
          <div
            style={{
              filter: selected !== 1 ? "blur(3px)" : "",
              opacity: selected !== 1 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelTwo}
          ></div>
          <div
            style={{
              filter: selected !== 2 ? "blur(3px)" : "",
              opacity: selected !== 2 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelThree}
          ></div>
          <div
            style={{
              filter: selected !== 3 ? "blur(3px)" : "",
              opacity: selected !== 3 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelFour}
          ></div>
          <div
            style={{
              filter: selected !== 4 ? "blur(3px)" : "",
              opacity: selected !== 4 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelFive}
          ></div>
          <div
            style={{
              filter: selected !== 5 ? "blur(3px)" : "",
              opacity: selected !== 5 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelSix}
          ></div>
          <div
            style={{
              filter: selected !== 6 ? "blur(3px)" : "",
              opacity: selected !== 6 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelSeven}
          ></div>
          <div
            style={{
              filter: selected !== 7 ? "blur(3px)" : "",
              opacity: selected !== 7 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelEight}
          ></div>
          <div
            style={{
              filter: selected !== 8 ? "blur(3px)" : "",
              opacity: selected !== 8 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelNine}
          ></div>
          <div
            style={{
              filter: selected !== 9 ? "blur(3px)" : "",
              opacity: selected !== 9 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelTen}
          ></div>
          <div
            style={{
              filter: selected !== 10 ? "blur(3px)" : "",
              opacity: selected !== 10 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelEleven}
          ></div>
          <div
            style={{
              filter: selected !== 11 ? "blur(3px)" : "",
              opacity: selected !== 11 ? "0.1" : "0.3",
              transition: "0.6s",
            }}
            {...s.labelTwelve}
          ></div>
        </div>
        <div {...s.photolayerDesktopActualPhoto}>
          <div {...s.photolayerDesktop}>
            <div
              {...s.contentOne}
              style={{
                filter: selected !== 0 ? "blur(3px)" : "",
                opacity: selected !== 0 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(0)}
            >
              <div>
                <div>
                  Mini Game released to iOS App Store, Playstore and Steam
                </div>
              </div>
            </div>
            <div
              {...s.contentTwo}
              style={{
                filter: selected !== 1 ? "blur(3px)" : "",
                opacity: selected !== 1 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(1)}
            >
              <div>
                <div>Post withering Roadmap Launch</div>
              </div>
            </div>
            <div
              {...s.contentThree}
              style={{
                filter: selected !== 2 ? "blur(3px)" : "",
                opacity: selected !== 2 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(2)}
            >
              <div>
                <div>NFT Holder Airdrop</div>
              </div>
            </div>
            <div
              {...s.contentFour}
              style={{
                filter: selected !== 3 ? "blur(3px)" : "",
                opacity: selected !== 3 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(3)}
            >
              <div>
                <div>Presale $Stori Token/ $Stori Token Sale</div>
              </div>
            </div>
            <div
              {...s.contentFive}
              style={{
                filter: selected !== 4 ? "blur(3px)" : "",
                opacity: selected !== 4 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(4)}
            >
              <div>
                <div>Cut and Sew Online Merch Store</div>
              </div>
            </div>
            <div
              {...s.contentSix}
              style={{
                filter: selected !== 5 ? "blur(3px)" : "",
                opacity: selected !== 5 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(5)}
            >
              <div>
                <div>Alpha Collaboration</div>
              </div>
            </div>
            <div
              {...s.contentSeven}
              style={{
                filter: selected !== 6 ? "blur(3px)" : "",
                opacity: selected !== 6 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(6)}
            >
              <div>
                <div>Tokenomics AMA</div>
              </div>
            </div>
            <div
              {...s.contentEight}
              style={{
                filter: selected !== 7 ? "blur(3px)" : "",
                opacity: selected !== 7 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(7)}
            >
              <div>
                <div>Introduction to Project Destiny</div>
              </div>
            </div>
            <div
              {...s.contentNine}
              style={{
                filter: selected !== 8 ? "blur(3px)" : "",
                opacity: selected !== 8 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(8)}
            >
              <div>
                <div>Tegrakian Treasure Hunt</div>
              </div>
            </div>
            <div
              {...s.contentTen}
              style={{
                filter: selected !== 9 ? "blur(3px)" : "",
                opacity: selected !== 9 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(9)}
            >
              <div>
                <div>Tesla or Eth equivalent holder giveaway</div>
              </div>
            </div>
            <div
              {...s.contentEleven}
              style={{
                filter: selected !== 10 ? "blur(3px)" : "",
                opacity: selected !== 10 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(10)}
            >
              <div>
                <div>Donation to American Heart and Stroke Association</div>
              </div>
            </div>
            <div
              {...s.contentTwelve}
              style={{
                filter: selected !== 11 ? "blur(3px)" : "",
                opacity: selected !== 11 ? "0.3" : "1",
                transition: "0.6s",
              }}
              onMouseEnter={() => setSelected(11)}
            >
              <div>
                <div>Mini Game Tournament for top ten scores</div>
              </div>
            </div>
          </div>
        </div>
        <div {...s.contentLayer} style={{ maxWidth: "1400px" }}>
          <div {...s.containerRoadmapBordered}>
            <div className="treasure-hunt-text">TREASURE HUNT</div>
            <motion.div
              whileHover={{ scale: 1.4 }}
              onClick={() => setShowModal(true)}
              className="treasure-element"
            >
              <Image
                src="/treasure-button.svg"
                width={window.innerWidth > 950 ? 145 : 250}
                height={window.innerWidth > 950 ? 145 : 250}
              />
            </motion.div>
            <div
              {...s.roadmapMobileContent}
              onClick={() => setShowModal(false)}
            >
              <div className="roadmap-title">
                <svg
                  width="205"
                  height="62"
                  viewBox="0 0 205 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 61.3754H65.2679L79.4397 47.2412H157.217L204.585 0H0V61.3754Z"
                    fill="#F0F0F0"
                  />
                  <path
                    d="M41.0429 26.0798V31H38.1586V26.7372L36.8861 25.3163H32.2628V31H29.3785V16.1545H38.6888L40.958 18.4449V22.941L39.5159 24.4043L41.0429 26.0798ZM32.2628 22.941H37.3739L38.1162 22.1987V19.3144L37.3739 18.5722H32.2628V22.941ZM43.4776 28.5611V18.5934L45.9166 16.1545H53.5514L55.9903 18.5934V28.5611L53.5514 31H45.9166L43.4776 28.5611ZM52.0244 28.5399L53.106 27.4583V19.6962L52.0244 18.6146H47.4435L46.3619 19.6962V27.4583L47.4435 28.5399H52.0244ZM62.3855 16.1545H65.0153L70.4445 31H67.5178L66.309 27.7128H61.0918L59.883 31H56.9563L62.3855 16.1545ZM65.6727 25.3375L63.7004 19.6962H63.658L61.7493 25.3375H65.6727ZM71.9393 16.1545H81.4405L83.9854 18.6994V28.455L81.4405 31H71.9393V16.1545ZM80.0196 28.5399L81.1012 27.4583V19.6962L80.0196 18.6146H74.8236V28.5399H80.0196ZM86.5405 16.1545H89.2127L93.6239 25.7404H93.6664L98.0988 16.1545H100.771V31H97.9928V21.9654H97.9504L94.5359 28.9216H92.7544L89.3611 21.9654H89.3187V31H86.5405V16.1545ZM107.68 16.1545H110.31L115.739 31H112.812L111.604 27.7128H106.386L105.178 31H102.251L107.68 16.1545ZM110.967 25.3375L108.995 19.6962H108.953L107.044 25.3375H110.967ZM117.234 16.1545H126.544L128.814 18.4449V23.6409L126.523 25.9525H120.118V31H117.234V16.1545ZM125.229 23.5348L125.972 22.7925V19.3144L125.229 18.5722H120.118V23.5348H125.229Z"
                    fill="#050D1D"
                  />
                </svg>
              </div>
              <ul className="px-10">
                <li {...s.roadmapList}>
                  Mini Game released to iOS App Store, Playstore and Steam
                </li>
                <li {...s.roadmapList}>
                  Mini Game Tournament for top ten scores
                </li>
                <li {...s.roadmapList}>
                  Tesla or Eth equivalent holder giveaway
                </li>
                <li {...s.roadmapList}>Tegrakian Treasure Hunt</li>
                <li {...s.roadmapList}>Introduction to Project Destiny</li>
                <li {...s.roadmapList}>Tokenomics AMA</li>
                <li {...s.roadmapList}>Alpha Collaboration</li>
                <li {...s.roadmapList}>Cut and Sew Online Merch Store</li>
                <li {...s.roadmapList}>
                  Presale $Stori Token/$Stori Token Sale
                </li>
                <li {...s.roadmapList}>NFT holder Airdrop</li>
                <li {...s.roadmapList}>Post withering Roadmap Launch</li>
              </ul>
            </div>
            <div
              className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full w-full align-middle hidden md:flex ${
                showModal ? "backdrop-show" : "backdrop-hide"
              }`}
              onClick={() => setShowModal(false)}
            >
              <div
                className={`relative p-4 md:p-0 w-full max-w-7xl m-auto h-full md:h-auto ${
                  showModal ? "modal-show" : "modal-hide"
                }`}
                onClick={() => console.log(true)}
              >
                <div
                  style={{ background: "rgba(5, 13, 29, 0.9)", border: "2px solid #F0F0F0" }}
                  className="relative text-sm md:p-8 shadow text-center text-dhwhite w-full  max-w-7xl"
                >
                  <p className="py-3">
                  There are 6 out of place items in this map, hidden as a ticket
                  to enter in the Tegrakian Treasure Hunt. Enter our discord for
                  the full resolution file to be able to zoom in and and find
                  the them. Goodluck Destorians!
                  </p>
                  <div
                    style={{ cursor: "pointer", minHeight: "50vh" }}
                    className="custom-modal-image"
                  >
                    <Link passHref href="https://discord.com/invite/Y7QSJcWqFH">
                      <Image
                        src="/destoria-banner-discord.png"
                        width={4096}
                        height={2181}
                        // layout="fill"
                      />
                    </Link>
                  </div>
                  Hints: Something that opens doors - Sword and... - Brand
                  Loyalty? - Gas Fees - Date of Discord - All Destorians Gonna
                  Make it.
                </div>
              </div>
            </div>
            <div
              className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full w-full flex align-middle md:hidden ${
                showModal ? "backdrop-show" : "backdrop-hide"
              }`}
              onClick={() => setShowModal(false)}
            >
              <div
                className={`relative p-4 md:p-0 w-full max-w-7xl m-auto h-full md:h-auto ${
                  showModal ? "modal-show" : "modal-hide"
                }`}
                onClick={() => console.log(true)}
              >
                <div className="absolute head-image-withering">
                  <Image
                    src="/pre-withering-roadmap.svg"
                    width={320}
                    height={62}
                  />
                </div>
                <div className="absolute head-image-withering-text">
                  PRE WITHERING ROADMAP
                </div>
                <div
                  style={{ background: "rgba(5, 13, 29, 0.9)", border: "2px solid #F0F0F0" }}
                  className="relative text-sm md:p-8 shadow text-center text-dhwhite w-full  max-w-7xl p-4"
                >
                  <p className="py-3 mt-14">
                  There are 6 out of place items in this map, hidden as a ticket
                  to enter in the Tegrakian Treasure Hunt. Enter our discord for
                  the full resolution file to be able to zoom in and and find
                  the them. Goodluck Destorians!
                  </p>
                  <div
                    style={{ cursor: "pointer" }}
                    className="custom-modal-image pb-5"
                  >
                    <Link passHref href="https://discord.com/invite/Y7QSJcWqFH">
                      <Image
                        src="/destoria-banner-discord.png"
                        width={4096}
                        height={2181}
                        // layout="fill"
                      />
                    </Link>
                  </div>
                  Hints: Something that opens doors - Sword and... - Brand
                  Loyalty? - Gas Fees - Date of Discord - All Destorians Gonna
                  Make it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
