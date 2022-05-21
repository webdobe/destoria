import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";
import Header from "components/Header";
import Leaders from 'components/Team/Leaders'
import Footer from 'components/Footer'
import dynamic from "next/dynamic";

const Countdown = dynamic(
  () => import('components/Mint/Countdown'),
  { ssr: false }
)

const MintDescription = dynamic(
  () => import('components/Mint/MintDescription'),
  { ssr: false }
)


const FirstFrame: FunctionComponent = function () {
  return (
    <div {...s.majorContainer} >
      <div {...s.photoLayer}>
      </div>
      <div {...s.contentLayer}>
        <Header />
        <Countdown />
      </div>
    </div>
  );
};

export default FirstFrame;
