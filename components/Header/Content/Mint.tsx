import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";

const Mint: FunctionComponent = function () {
  return (
    <div {...s.wrapper}>
      <ul {...s.wrapperMarketplace}>
        <li {...s.shortItem}>
        <Image
              src="/headericons-tool.svg"
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

export default Mint;
