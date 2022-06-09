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
                    src="/group-marcos-palante.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Marcos Palante</div>
                    <div {...s.leadersTextDescription}>Development Manager</div>
                    <div {...s.leadersSocialMedia}>
                    <a
                        {...s.socialMedia}
                        href="https://www.artstation.com/mspalante"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/media-AT.svg"
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
                    src="/group-hossein-nafisinia.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Hossein Nafisinia</div>
                    <div {...s.leadersTextDescription}>3D Artist</div>
                    <div {...s.leadersSocialMedia}>
                      <a
                        {...s.socialMedia}
                        href="https://www.linkedin.com/in/honfs/"
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
                    src="/group-hori-mahina.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Hori Mahina</div>
                    <div {...s.leadersTextDescription}>2D Artist</div>
                    <div {...s.leadersSocialMedia}>
                    <a
                        {...s.socialMedia}
                        href="https://www.instagram.com/horimahina/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/media-whiteIG.svg"
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
                    src="/group-martin-liu.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Martin Liu</div>
                    <div {...s.leadersTextDescription}>Lead Game Developer</div>
                    <div {...s.leadersSocialMedia}>
                    <a
                        {...s.socialMedia}
                        href="https://www.linkedin.com/in/martin-liu-58301918/"
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
                    src="/group-karan-kumar.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Karan Kumar</div>
                    <div {...s.leadersTextDescription}>3D Artist</div>
                    <div {...s.leadersSocialMedia}>
                    <a
                        {...s.socialMedia}
                        href="https://karankumar123d.wixsite.com/artbox"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/media-whiteWEB.svg"
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
                    src="/group-frank-williams.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Frank Williams</div>
                    <div {...s.leadersTextDescription}>Concept Artist</div>
                    <div {...s.leadersSocialMedia}>
                    <a
                        {...s.socialMedia}
                        href="https://www.artstation.com/frankwilliam/albums/all"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/media-AT.svg"
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
                    src="/group-rui-passos.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Rui Passos</div>
                    <div {...s.leadersTextDescription}>Game Developer</div>
                    <div {...s.leadersSocialMedia}>
                      <a
                        {...s.socialMedia}
                        href="https://www.linkedin.com/in/rui-bronze-038ab7237/"
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
                    src="/group-emmanuel-vallardes.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Emmanuel Vallardes</div>
                    <div {...s.leadersTextDescription}>3D Artist</div>
                    <div {...s.leadersSocialMedia}>
                    <a
                        {...s.socialMedia}
                        href="https://www.linkedin.com/in/joas-valladares-78bba5154/"
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
                    src="/group-monyse-narriman.png"
                    alt="Team"
                    width={145}
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Monyse Narriman</div>
                    <div {...s.leadersTextDescription}>Digital Designer / UI</div>
                    <div {...s.leadersSocialMedia}>
                    <a
                        {...s.socialMedia}
                        href="https://www.behance.net/monyse_narriman"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/media-whiteBE.svg"
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
                    src="/group-murilo-araujo.png"
                    alt="Team"
                    width={145} 
                    height={140}
                  />
                  <div {...s.leadersText}>
                    <div {...s.leadersTextTitle}>Murilo Araujo</div>
                    <div {...s.leadersTextDescription}>Concept Artist</div>
                    <div {...s.leadersSocialMedia}>
                    <a
                        {...s.socialMedia}
                        href="https://www.artstation.com/murich"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/media-whiteMD.svg"
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamList;
