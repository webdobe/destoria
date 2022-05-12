import s from "./styles";
import { FunctionComponent, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

const Footer: FunctionComponent = function () {
  const containerRef = useRef(null)


  return (
    <section {...s.footer} ref={containerRef}>
      <div {...s.contentLayer}>
        <div
          {...s.containerFooter}
          style={{ maxWidth: "1440px", width: "100%"}}
        >
          <div {...s.containerFooterBordered}>
            <div {...s.footerContent}>
              <div {...s.mediaBox}>
                <Image
                  src="/media-TT.svg"
                  alt="Twitter"
                  width={27.98}
                  height={27.98}
                />
                <Image
                  src="/media-IG.svg"
                  alt="Instagram"
                  width={27.98}
                  height={27.98}
                />
                <Image
                  src="/media-DS.svg"
                  alt="Discord"
                  width={27.98}
                  height={27.98}
                />
                <Image
                  src="/media-YT.svg"
                  alt="Youtube"
                  width={27.98}
                  height={27.98}
                />
                <Image
                  src="/media-MD.svg"
                  alt="Medium"
                  width={27.98}
                  height={27.98}
                />
              </div>
              <div {...s.destoria}>
                <Image
                  src="/media-footer-destoria.svg"
                  alt="Destoria"
                  width={168}
                  height={32}
                />
              </div>
              <div {...s.contactUs}>
                Contact Us
              </div>
            </div>
            <div {...s.footerLower}>
              <div {...s.policyConditions}>
                <div> 
                  Privacy & Policy
                </div>
                <div> 
                  Terms & Conditions
                </div>
              </div>
              <div {...s.contactUs}>
              © 2021  Destoria, LLC. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;

