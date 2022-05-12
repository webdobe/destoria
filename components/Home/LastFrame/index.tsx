import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";
import Faq from "../Faq";
import Footer from 'components/Footer'
const LastFrame: FunctionComponent = function () {
  return (
    <div className="bg-no-repeat bg-last">
      <Faq />
      <Footer />
    </div>
  );
};
export default LastFrame;

//garagem 412
