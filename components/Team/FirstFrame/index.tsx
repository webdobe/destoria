import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";
import Header from "components/Header";
import Leaders from 'components/Team/Leaders'
const FirstFrame: FunctionComponent = function () {
  return (
    <div {...s.majorContainer} >
      <div {...s.photoLayer}>
      </div>
      <div {...s.contentLayer}>
        <Header />
        <Leaders />
      </div>
    </div>
  );
};

export default FirstFrame;
