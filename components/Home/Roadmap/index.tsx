import React, { FunctionComponent, useState } from "react";
import s from "./styles";
import Video from './video'
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from "next/image";
const Roadmap: FunctionComponent = function () {
  const [selected, setSelected] = useState(0)
  const [showModal, setShowModal] = useState(false)
  return (
    <section {...s.roadmap}>
      <div {...s.photoLayer}>
        <Video />
      </div>
      <div {...s.photoLayer}>
        <div {...s.circleContainer}>
        </div>
      </div>
      <div {...s.photoLayer}>
        <motion.div
          animate={{ scale: selected === 0 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(0)}
          {...s.ballOne}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 1 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(1)}
          {...s.ballTwo}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 2 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(2)}
          {...s.ballThree}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 3 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(3)}
          {...s.ballFour}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 4 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(4)}
          {...s.ballFive}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 5 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(5)}
          {...s.ballSix}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 6 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(6)}
          {...s.ballSeven}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 7 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(7)}
          {...s.ballEight}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 8 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(8)}
          {...s.ballNine}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 9 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(9)}
          {...s.ballTen}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 10 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(10)}
          {...s.ballEleven}>
        </motion.div>
        <motion.div
          animate={{ scale: selected === 11 ? 1.5 : 1 }}
          onMouseEnter={() => setSelected(11)}
          {...s.ballTwelve}>
        </motion.div>
      </div>
      <div {...s.photoLayer}>
        <div
          style={{
            filter: selected !== 0 ? 'blur(3px)' : '',
            opacity: selected !== 0 ? '0.1' : '0.3',
            transition: '0.6s'
          }}
          {...s.labelOne}>
        </div>
        <div
          style={{
            filter: selected !== 1 ? 'blur(3px)' : '',
            opacity: selected !== 1 ? '0.1' : '0.3',
            transition: '0.6s'
          }}
          {...s.labelTwo}>
        </div>
        <div
          style={{
            filter: selected !== 2 ? 'blur(3px)' : '',
            opacity: selected !== 2 ? '0.1' : '0.3',
            transition: '0.6s'
          }}
          {...s.labelThree}>
        </div>
        <div
          style={{
            filter: selected !== 3 ? 'blur(3px)' : '',
            opacity: selected !== 3 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelFour}>
        </div>
        <div
          style={{
            filter: selected !== 4 ? 'blur(3px)' : '',
            opacity: selected !== 4 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelFive}>
        </div>
        <div
          style={{
            filter: selected !== 5 ? 'blur(3px)' : '',
            opacity: selected !== 5 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelSix}>
        </div>
        <div
          style={{
            filter: selected !== 6 ? 'blur(3px)' : '',
            opacity: selected !== 6 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelSeven}>
        </div>
        <div
          style={{
            filter: selected !== 7 ? 'blur(3px)' : '',
            opacity: selected !== 7 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelEight}>
        </div>
        <div
          style={{
            filter: selected !== 8 ? 'blur(3px)' : '',
            opacity: selected !== 8 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelNine}>
        </div>
        <div
          style={{
            filter: selected !== 9 ? 'blur(3px)' : '',
            opacity: selected !== 9 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelTen}>
        </div>
        <div
          style={{
            filter: selected !== 10 ? 'blur(3px)' : '',
            opacity: selected !== 10 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelEleven}>
        </div>
        <div
          style={{
            filter: selected !== 11 ? 'blur(3px)' : '',
            opacity: selected !== 11 ? '0.1' : '0.3',
            transition: '0.6s'
          }}

          {...s.labelTwelve}>
        </div>
      </div>
      <div {...s.photoLayer}>
        <div
          {...s.containerRoadmap}
          style={{ maxWidth: "1440px", width: "100%" }}
        >
          <div {...s.containerRoadmapContent}>
            <div
              {...s.contentOne}
              style={{
                filter: selected !== 0 ? 'blur(3px)' : '',
                opacity: selected !== 0 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(0)}>
              <div>
                <div>
                  Mini Game released to iOS App Store, Playstore and Steam
                </div>
              </div>
            </div>
            <div
              {...s.contentTwo}
              style={{
                filter: selected !== 1 ? 'blur(3px)' : '',
                opacity: selected !== 1 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(1)}>
              <div>
                <div>
                  Post withering Roadmap Launch
                </div>
              </div>
            </div>
            <div
              {...s.contentThree}
              style={{
                filter: selected !== 2 ? 'blur(3px)' : '',
                opacity: selected !== 2 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(2)}>
              <div>
                <div>
                  NFT Holder Airdrop
                </div>
              </div>
            </div>
            <div
              {...s.contentFour}
              style={{
                filter: selected !== 3 ? 'blur(3px)' : '',
                opacity: selected !== 3 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(3)}>
              <div>
                <div>
                  Presale $Stori Token/
                  $Stori Token Sale
                </div>
              </div>
            </div>
            <div
              {...s.contentFive}
              style={{
                filter: selected !== 4 ? 'blur(3px)' : '',
                opacity: selected !== 4 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(4)}>
              <div>
                <div>
                  Cut and Sew Online Merch Store
                </div>
              </div>
            </div>
            <div
              {...s.contentSix}
              style={{
                filter: selected !== 5 ? 'blur(3px)' : '',
                opacity: selected !== 5 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(5)}>
              <div>
                <div>
                  Alpha Collaboration
                </div>
              </div>
            </div>
            <div
              {...s.contentSeven}
              style={{
                filter: selected !== 6 ? 'blur(3px)' : '',
                opacity: selected !== 6 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(6)}>
              <div>
                <div>
                  Tokenomics AMA
                </div>
              </div>
            </div>
            <div
              {...s.contentEight}
              style={{
                filter: selected !== 7 ? 'blur(3px)' : '',
                opacity: selected !== 7 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(7)}>
              <div>
                <div>
                  Introduction to Project Destiny
                </div>
              </div>
            </div>
            <div
              {...s.contentNine}
              style={{
                filter: selected !== 8 ? 'blur(3px)' : '',
                opacity: selected !== 8 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(8)}>
              <div>
                <div>
                  Tegrakian Treasure Hunt
                </div>
              </div>
            </div>
            <div
              {...s.contentTen}
              style={{
                filter: selected !== 9 ? 'blur(3px)' : '',
                opacity: selected !== 9 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(9)}>
              <div>
                <div>
                  Tesla or Eth equivalent holder giveaway
                </div>
              </div>
            </div>
            <div
              {...s.contentEleven}
              style={{
                filter: selected !== 10 ? 'blur(3px)' : '',
                opacity: selected !== 10 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(10)}>
              <div>
                <div>
                  Donation to American Heart and Stroke Association
                </div>
              </div>
            </div>
            <div
              {...s.contentTwelve}
              style={{
                filter: selected !== 11 ? 'blur(3px)' : '',
                opacity: selected !== 11 ? '0.3' : '1',
                transition: '0.6s'
              }}
              onMouseEnter={() => setSelected(11)}>
              <div>
                <div>
                  Mini Game Tournament for top ten scores
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div {...s.contentLayer}>
        <div {...s.containerRoadmapBordered}>
          <motion.div
            whileHover={{ scale: 1.4 }}
            onClick={() => setShowModal(true)}
            animate={{
              cursor: "pointer",
              position: 'absolute',
              right: 'calc(50% - 439px)',
              bottom: '39px',
              pointerEvents: 'all'
            }}>
            <Image
              src="/treasure-button.svg"
              width={115}
              height={115}
            />
          </motion.div>
          <div style={{opacity: showModal ? "1" : "0", pointerEvents: showModal ? 'all' : 'none', transition: '0.6'}} className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full w-full" onClick={() => setShowModal(false)}>
            <div className="relative p-4 w-full max-w-4xl m-auto h-full md:h-auto" onClick={() => console.log(true)} >
              <div style={{background: '#070D31', border: "2px solid #F0F0F0"}} className="relative text-sm md:p-8 shadow text-center text-dhwhite w-full max-w-4xl">
              There are 6 out of place items in this map, hidden as a ticket to enter in the Tegrakian Treasure Hunt. Enter our discord  for the full resolution file to be able to zoom in and and find the them. Goodluck Destorians! <br/>
              <div style={{cursor: "pointer"}}>
                <Link
                  passHref href="https://discord.com/invite/Y7QSJcWqFH"
                  target="_blank"
                >
              <Image 
                src="/destoria-banner-discord.png"
                width={800}
                height={440}
                />
                </Link>
              </div>
              Hints: Something that opens doors - Sword and... - Brand Loyalty? - Gas Fees - Date of Discord - All Destorians Gonna Make it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
