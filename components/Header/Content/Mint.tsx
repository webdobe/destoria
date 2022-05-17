import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";

const Mint: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapperMarketplace}>
      <li {...s.shortItem}>NFT Drops</li>
      </ul>
    </div>
  );
};

export default Mint;
