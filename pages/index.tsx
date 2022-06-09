import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import s from 'styles'
import FirstFrame from 'components/Home/FirstFrame'
import dynamic from 'next/dynamic'
import content from 'components/Carousel/CarouselOne'
import Script from 'next/script'
import {useRef} from "react";


const CharactersCarousel = dynamic(
  () => import('components/Home/CharactersCarousel'),
  { ssr: false }
)

const CardCarousel = dynamic(
  () => import('components/Home/CardsCarousel'),
  { ssr: false }
)

const AnimatedGallery = dynamic(
  () => import('components/Home/AnimatedGallery'),
  { ssr: false }
)

const LastFrame = dynamic(
  () => import('components/Home/LastFrame'),
  { ssr: false }
)

const Roadmap = dynamic(
  () => import('components/Home/Roadmap'),
  { ssr: false }
)

const FindMore = dynamic(
  () => import('components/Home/FindMore'),
  { ssr: false }
)

const FAQ = dynamic(
  () => import('components/Home/Faq'),
  { ssr: false }
)

const Followup = dynamic(
  () => import('components/Home/Followup'),
  { ssr: false }
)

const Home: NextPage = () => {
  const sectionRefs = useRef([]);
  sectionRefs.current = [];

  const addToSectionRefs = el => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div>
      <Head>
        <title>Destoria Metaverse / Crypto P2E & Battle Royale Video Game</title>
        <meta name="description" content="Destoria is so much more than a brand, it’s a destination, a family, an event, a community hub, an incubator, metaverse and real P2E opportunities all rolled into one." />
        <link href="https://vjs.zencdn.net/7.19.2/video-js.css" rel="stylesheet" />
        <link rel="icon" href="/dest-favicon.svg" />
        <link rel="alternate" hrefLang="x-default" href="https://www.destoria.io"/>
        <link rel="alternate" hrefLang="en-us" href="https://www.destoria.io"/>
      </Head>
      <FirstFrame sectionRef={addToSectionRefs} />
      <CardCarousel sectionRef={addToSectionRefs} />
      <CharactersCarousel sectionRef={addToSectionRefs} />
      <Roadmap sectionRef={addToSectionRefs} />
      <FindMore sectionRef={addToSectionRefs} />
      <AnimatedGallery sectionRef={addToSectionRefs} />
      <LastFrame sectionRef={addToSectionRefs} />
      <Followup sectionRefs={sectionRefs} />
      <main>
      </main>
      <Script src="https://vjs.zencdn.net/7.19.2/video.min.js"></Script>
    </div>
  )
}

export default Home
