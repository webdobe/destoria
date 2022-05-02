import { FunctionComponent } from "react";
import s from "./styles";
import Image from "next/image";

const Header: FunctionComponent = function () {
  return (
    <section {...s.exploreTheMetaverse}>
      <div {...s.container} style={{maxWidth: '1375px', width: '100%'}}>
        <div {...s.destoria}>
          <img
            {...s.destoriaLogo}
            src="/large-logo-svg.svg"
            alt="Burger Menu"
            width={295}
            height={170}
          />
        </div>
        <div {...s.exploreTheMetaverseText}>Explore the Metaverse</div>
      </div>
    </section>
  );
};

export default Header;
