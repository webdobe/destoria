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

const TeamList: FunctionComponent = function () {
  return (
    <section {...s.faq}>
      <div {...s.photoLayer}></div>
      <div {...s.contentLayer}>
        <div {...s.containerFaq} style={{ maxWidth: "1440px", width: "100%" }}>
          <div {...s.containerFaqBordered}>
            <div {...s.faqContent}>
              <div {...s.flexTeamsBox}>
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
                <div>
                  <Image
                    src="/team-placeholder.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Name Surname</div>
                    <div {...s.leadersTextDescription}>Project Developer</div>
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamList;
