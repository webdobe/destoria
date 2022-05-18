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

const ContactForm: FunctionComponent = function () {
  return (
    <section {...s.contactForm} style={{ maxWidth: "1440px", width: "100%" }}>
      <div {...s.contactFormContent}>
        <div {...s.contactFormBox}>
          <div {...s.contactFormTitle}>CONTACT US</div>
          <div {...s.contactFormRegularText}>
            Destoria is always looking for new friends and opportunities in this
            space!
          </div>
          <div {...s.contactFormBoxTitle}>Whitelist for new projects</div>
          <div {...s.contactFormRegularText}>
            To invite Destoria to take part in your NFT project's Whitelist ,
            please contact <span {...s.highlight}>support@destoria.io</span>
          </div>
          <div {...s.contactFormBoxTitle}>Collaborations</div>
          <div {...s.contactFormRegularText}>
            If you are a founder or part of a project and would like to discuss
            implementation of your collection, or the development of an Unreal
            Engine island or P2E game please contact{" "}
            <span {...s.highlight}>support@destoria.io</span>
          </div>
          <div {...s.contactFormRegularText}>
            <br />
            <br />
            For any other inquiries please contact{" "}
            <span {...s.highlight}>support@destoria.io</span>
          </div>
          <div {...s.contactFormBoxInfoText}>
            *To be considered you must provide complete information and
            documentation, as well as the correct title in Subject.
          </div>
          <div {...s.contactFormGrid}>
            <div {...s.gridSingle}>
              <input type="text" placeholder="Full Name*" {...s.singleInput} />
            </div>
            <div {...s.gridSingle}>
              <input
                type="text"
                placeholder="Email*"
                {...s.singleInput}
              />
            </div>
            <div {...s.gridSingle}>
              <input type="text" placeholder="Subject*" {...s.singleInput} />
            </div>
            <div {...s.gridDouble}>
              <textarea
                type="text"
                placeholder="Message"
                {...s.textAreaInput}
              />
            </div>
          </div>
          <div {...s.interactions} >
              <div {...s.interactionsDiv}>
                <div
                  {...s.connectWalletText}
                  onClick={() => window.location.href = '/team#3'}
                  style={{
                    whiteSpace: "nowrap",
                    position: "relative",
                    left: window.innerWidth > 550 ? "65px" : "40px",
                    top: '10px'
                  }}
                >
                  Back
                </div>
                <div {...s.connectWalletSpan}
                  style={{ position: "relative", left: "0", top: "16px" }}
                  onClick={() => window.location.href = '/team#3'}
                >
                  <Image
                    {...s.connectWalletImage}
                    src="/connect-wallet.svg"
                    alt="Apply now"
                    width={window.innerWidth > 550 ? 160 : 130}
                    height={45}
                    style={{ position: "relative", left: "0" }}
                  />
                </div>
                <Link href="/lore">
                  <div
                    {...s.applyNowText}
                    style={{
                      whiteSpace: "nowrap",
                      position: "relative",
                      left:  window.innerWidth > 550 ? "32.5px" : "20px",
                      top: '10px',
                      zIndex: 1,
                    }}
                  >
                    Send message
                  </div>
                </Link>
                <div style={{ position: "relative", left: "-0", top: "16px" }}>
                <Image
                  {...s.connectWalletImage}
                  src="/button-one.svg"
                  alt="Apply Now"
                  width={window.innerWidth > 550 ? 200 : 165}
                  height={45}
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
export default ContactForm;
