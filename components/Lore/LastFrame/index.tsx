import s from "./styles";
import { FunctionComponent } from "react";
import Image from "next/image";
import History from "components/Lore/History";
import Footer from 'components/Footer'
const LastFrame: FunctionComponent = function () {
  return (
    <div className="bg-no-repeat bg-characters">
      <History />
      <Footer />
    </div>
  );
};
export default LastFrame;