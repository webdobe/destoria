import s from "./styles";
import {
  FunctionComponent,
  useEffect,
  useRef,
  useMemo,
  useState,
  useCallback,
} from "react";
import Image from "next/image";
import Link from "next/link";
const NotFound: FunctionComponent = function () {


  return (
    <section {...s.countdown} style={{ maxWidth: "1440px", width: "100%", minHeight: "calc(100vh - 300px)" }}>
      <div {...s.countdownContent} style={{ minHeight: "calc(100vh - 300px)" }}>
        <div {...s.countdownBox}>
          <div {...s.notfound}>
            <Image
              {...s.notfoundLogo}
              src="/404.svg"
              alt="404"
              width={1000}
              height={220}
            />
          </div>
          <div {...s.countdownTitle}>Looks like you got lost</div>
          <div {...s.interactions} >
              <div {...s.interactionsDiv}>
                <Link passHref href="/">
                  <div
                    {...s.applyNowText}
                    style={{
                      whiteSpace: "nowrap",
                      position: "relative",
                      left:  window.innerWidth > 550 ? "75px" : "80px",
                      top: '10px',
                      zIndex: 1,
                    }}
                  >
                    Back to home page
                  </div>
                </Link>
                <div style={{ position: "relative", left: "-0", top: "16px" }}>
                <Image
                  {...s.connectWalletImage}
                  src="/button-one.svg"
                  alt="Apply Now"
                  width={window.innerWidth > 550 ? 350 : 350}
                  height={50}
                  style={{ position: "relative" }}
                />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
