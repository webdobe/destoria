import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";

const Marketplace: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapperMarketplace}>
        <li {...s.shortItem}>
          <Image
            src="/headericons-pricetag.svg"
            alt="Whiteper"
            width={64}
            height={64}
          />
        </li>
        <li {...s.whiteTitle}>COMING SOON</li>
        <li {...s.whiteText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
  );
};

export default Marketplace;
