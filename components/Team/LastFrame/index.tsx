import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";
import Hire from "components/Team/Hire";
import Footer from 'components/Footer'
const LastFrame: FunctionComponent = function () {
  return (
    <div className="bg-no-repeat bg-hire" id="3">
      <Hire />
      <Footer />
    </div>
  );
};
export default LastFrame;