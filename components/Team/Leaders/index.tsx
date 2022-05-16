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
        <div {...s.leadersTitle}>
        Meet the team
        </div>
        <div {...s.leadersMembers}>
          <div>
            <Image
              src="/team-placeholder.png"
              alt="Team"
              width={192}
              height={183}
            />
            <div {...s.leadersText}>
              <div {...s.leadersTextTitle}>
                Name Surname
              </div>
              <div {...s.leadersTextDescription}>
                Project Developer
              </div>
              <div {...s.leadersSocialMedia}>
                <Image
                  src="/media-IN.svg"
                  alt="Linkedin"
                  width={26}
                  height={26}
                />
                <Image
                  src="/media-IN.svg"
                  alt="Linkedin"
                  width={26}
                  height={26}
                />
                <Image
                  src="/media-IN.svg"
                  alt="Linkedin"
                  width={26}
                  height={26}
                />
                <Image
                  src="/media-IN.svg"
                  alt="Linkedin"
                  width={26}
                  height={26}
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/team-placeholder.png"
              alt="Team"
              width={192}
              height={183}
            />
            <div {...s.leadersText}>
              <div {...s.leadersTextTitle}>
                Name Surname
              </div>
              <div {...s.leadersTextDescription}>
                Project Developer
              </div>
              <div {...s.leadersSocialMedia}>
                <Image
                    src="/media-IN.svg"
                    alt="Linkedin"
                    width={26}
                    height={26}
                  />
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
