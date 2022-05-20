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
import Faqbox from "./FaqBox";

const Leaders: FunctionComponent = function () {
  const containerRef = useRef(null);
  return (
    <section {...s.leaders} style={{ maxWidth: "1440px", width: "100%" }}>
      <div {...s.leadersContent}>
        <div {...s.leadersTitle}>Meet the team</div>
        <div {...s.leadersMembers}>
          <div>
            <Image
              src="/group-brianporter.png"
              alt="Team"
              width={192}
              height={183}
            />
            <div {...s.leadersText}>
              <div {...s.leadersTextTitle}>Brian Porter</div>
              <div {...s.leadersTextDescription}>Founder</div>
              <div {...s.leadersSocialMedia}>
                <a
                  {...s.socialMedia}
                  href="https://twitter.com/DestorianSOLO"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/media-whiteTT.svg"
                    alt="Linkedin"
                    width={26}
                    height={26}
                  />
                </a>
                <a
                  {...s.socialMedia}
                  href="https://www.linkedin.com/in/brian-porter-39bbb8226/</div>"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/media-IN.svg"
                    alt="Linkedin"
                    width={26}
                    height={26}
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/group-austinpoulin.png"
              alt="Team"
              width={192}
              height={183}
            />
            <div {...s.leadersText}>
              <div {...s.leadersTextTitle}>Austin Poulin</div>
              <div {...s.leadersTextDescription}>Project Manager</div>
              <div {...s.leadersSocialMedia}>
                <a
                  {...s.socialMedia}
                  href="https://twitter.com/apoulin07"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/media-whiteTT.svg"
                    alt="Linkedin"
                    width={26}
                    height={26}
                  />
                </a>
                <a 
                  {...s.socialMedia}
                  href="https://www.linkedin.com/in/austin-poulin-654b52a2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/media-IN.svg"
                    alt="Linkedin"
                    width={26}
                    height={26}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Leaders;

//garagem 412
