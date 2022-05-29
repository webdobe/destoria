import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";
import Faq from "../Faq";
import Footer from 'components/Footer'
const LastFrame: FunctionComponent = function () {
  return (
    <div className="bg-no-repeat bg-last mt-96 pt-28 md:mt-20 lg:mt-0 md:pt-2 lg:pt-0 no-border">
      <Faq />
      <Footer />
    </div>
  );
};
export default LastFrame;

//garagem 412
