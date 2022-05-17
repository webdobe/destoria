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
const JobDescription: FunctionComponent = function ({ job }) {
  return (
    <section
      {...s.jobDescription}
      style={{ maxWidth: "1440px", width: "100%" }}
    >
      <div {...s.jobDescriptionContent}>
        <div {...s.jobDescriptionTitle}>Apply for this role</div>
        <div {...s.jobDescriptionBox}>
          <div {...s.jobDescriptionBoxTitle}>{job.name}</div>
          <div {...s.jobDescriptionBoxSubtitle}>{job.field}</div>
          <div {...s.jobDescriptionGrid}>
            <div>
              <div {...s.jobDescriptionBoxTitle}>{job.location}</div>
              <div {...s.jobDescriptionGridSubtitle}>Location</div>
            </div>
            <div>
              <div {...s.jobDescriptionBoxTitle}>{job.contractType}</div>
              <div {...s.jobDescriptionGridSubtitle}>Contract</div>
            </div>
            <div>
              <div {...s.jobDescriptionBoxTitle}>{job.experience}</div>
              <div {...s.jobDescriptionGridSubtitle}>Experience</div>
            </div>
          </div>
          <div {...s.jobDescriptionBoxContent}>
            <div {...s.jobDescriptionBoxContentTitle}>About Destoria</div>
            <div {...s.jobDescriptionBoxContentText}>
              Job description lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
              dignissim, metus nec fringilla accumsan, risus sem sollicitudin
              lacus, ut interdum tellus elit sed risus. Maecenas eget
              condimentum velit, sit amet feugiat lectus. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar.
            </div>
          </div>
          <div {...s.jobDescriptionBoxContent}>
            <div {...s.jobDescriptionBoxContentTitle}>Job description</div>
            <div {...s.jobDescriptionBoxContentText}>{job.jobDescription}</div>
          </div>
          <div {...s.jobDescriptionBoxContent}>
            <div {...s.jobDescriptionBoxContentTitle}>
              Your responsibilities
            </div>
            <div {...s.jobDescriptionBoxContentText}>
              {job.yourResponsibilities}
            </div>
          </div>
          <div {...s.jobDescriptionBoxContent}>
            <div {...s.jobDescriptionBoxContentTitle}>Skills you must have</div>
            <div {...s.jobDescriptionBoxContentText}>
              <ul>
                {job.skills.map((item, index) => {
                  return (
                    <li {...s.listStyle} key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div {...s.jobDescriptionBoxContent}>
            <div {...s.jobDescriptionBoxContentTitle}>
              Will be a plus if you
            </div>
            <div {...s.jobDescriptionBoxContentText}>
              <ul>
                {job.plus.map((item, index) => {
                  return (
                    <li {...s.listStyle} key={index}>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div {...s.jobDescriptionBoxContent}>
            <div {...s.jobDescriptionBoxContentTitle}>Location</div>
            <div {...s.jobDescriptionBoxContentText}>
              {job.locationDescription}
            </div>
          </div>
          <div {...s.jobDescriptionBoxFormContent}>
            <div {...s.jobDescriptionBoxContentTitle}>Send us a sign!</div>
            <div {...s.gridForm}>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Full Name*"
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Discord Handle*"
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridSingle}>
                <input type="text" placeholder="Email*" {...s.singleInput} />
              </div>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Social media  (e.g. namesurname/linkedin)"
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridSingle}>
                <input type="text" placeholder="Portfolio" {...s.singleInput} />
              </div>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Social media 2 (e.g. namesurname/linkedin)"
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridDouble}>
                <textarea
                  type="text"
                  placeholder="Why would you like to be part of the team?"
                  {...s.textAreaInput}
                />
              </div>
            </div>
            <div {...s.interactions} style={{minWidth: '600px'}}>
              <div {...s.connectWallet} onClick={() => window.location.href = '/team#3'}>
                <span
                  {...s.connectWalletText}
                  style={{
                    whiteSpace: "nowrap",
                    position: "relative",
                    left: "115px",
                  }}
                >
                  Back
                </span>
                <span
                  {...s.connectWalletSpan}
                  style={{ position: "relative", left: "15px", top: "16px" }}
                >
                  <Image
                    {...s.connectWalletImage}
                    src="/connect-wallet.svg"
                    alt="Apply now"
                    width={160}
                    height={45}
                    style={{ position: "absolute", left: "100px" }}
                  />
                </span>
                <Link href="/lore">
                  <span
                    {...s.applyNowText}
                    style={{
                      whiteSpace: "nowrap",
                      position: "relative",
                      left: "65px",
                      zIndex: 1,
                    }}
                  >
                    Apply now
                  </span>
                </Link>
                <span style={{ position: "relative", left: "-95px", top: "16px" }}>
                <Image
                  {...s.connectWalletImage}
                  src="/button-one.svg"
                  alt="Apply Now"
                  width={200}
                  height={45}
                  style={{ position: "absolute" }}
                />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default JobDescription;
