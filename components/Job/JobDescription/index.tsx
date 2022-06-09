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
import {PrimaryBtn} from "../../../styles";

const JobDescription: FunctionComponent = function ({ job }) {
  const defaultContact = {
    name: '',
    email: '',
    subject: '',
    message: '',
    discord: '',
    social: '',
    social2: '',
    portfolio: '',
  };

  const [contact, setContact] = useState(defaultContact);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleOnChange = (e, field) => {
    let values = {...contact}
    values[field] = e.target.value;
    setContact(values);
  }

  const handleSubmit = () => {
    setSuccess('');
    setError('');

    fetch('/api/careers', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    }).then((res) => {
      if (res.status === 200) {
        setContact(defaultContact);
        setSuccess('Successfully submitted contact!');
      } else {
        setError('Sorry, something went wrong... try again in 5 minutes.');
      }
    })
  }

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
              <p>The team is constantly evolving to meet the market's needs and continually raising the bar
                in innovative ways. We are a group of innovators who are curious and intrigued about new
                things and developments within the Web3, block chain and gaming spaces. We will be
                combining all these elements into a space changing experience, forever passionate about
                creating impactful changes to stay at the forefront of web3.</p>
              <p>Destoria is preparing to deliver property rights digitally to the world of Internet
                users and gamers alike. Helping to create a whole new asset class that will revolutionize
                the play-to-earn experiences, and more passive income opportunities for everyone to
                experience and enter the open source Metaverse.</p>
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
              <ul>
              {typeof job.yourResponsibilities == 'string' ? job.yourResponsibilities : (job.skills.map((item, index) => {
                  return (
                    <li {...s.listStyle} key={index}>
                      {item}
                    </li>
                  );
                }))}
              </ul>
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
          {job.plus.length ? <div {...s.jobDescriptionBoxContent}>
            <div {...s.jobDescriptionBoxContentTitle} >
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
          </div> :  ''}
          <div {...s.jobDescriptionBoxContent}>
            <div {...s.jobDescriptionBoxContentTitle}>Location</div>
            <div {...s.jobDescriptionBoxContentText}>
              {job.locationDescription}
            </div>
          </div>
          <div {...s.jobDescriptionBoxFormContent}>
            <div {...s.jobDescriptionBoxContentTitle}>Send us a sign!</div>
            <div {...s.contactFormMessages}>
              <div {...s.contactFormSuccess}>
                {success}
              </div>
              <div {...s.contactFormError}>
                {error}
              </div>
            </div>
            <div {...s.gridForm}>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Full Name*"
                  value={contact.name}
                  onChange={(e) => handleOnChange(e, 'name')}
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Discord Handle*"
                  value={contact.discord}
                  onChange={(e) => handleOnChange(e, 'discord')}
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Email*"
                  value={contact.email}
                  onChange={(e) => handleOnChange(e, 'email')}
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Social media  (e.g. namesurname/linkedin)"
                  value={contact.social}
                  onChange={(e) => handleOnChange(e, 'social')}
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Portfolio"
                  value={contact.portfolio}
                  onChange={(e) => handleOnChange(e, 'portfolio')}
                  {...s.singleInput} />
              </div>
              <div {...s.gridSingle}>
                <input
                  type="text"
                  placeholder="Social media 2 (e.g. namesurname/linkedin)"
                  value={contact.social2}
                  onChange={(e) => handleOnChange(e, 'social2')}
                  {...s.singleInput}
                />
              </div>
              <div {...s.gridDouble}>
                <textarea
                  type="text"
                  placeholder="Why would you like to be part of the team?"
                  value={contact.message}
                  onChange={(e) => handleOnChange(e, 'message')}
                  {...s.textAreaInput}
                />
              </div>
            </div>
            <div {...s.interactions} >
              <div {...s.interactionsDiv}>
                <PrimaryBtn
                  outline
                  onClick={() => window.location.href = '/team#3'}
                >
                  <span className="btn-bg"></span>
                  <span className="btn-text">Back</span>
                </PrimaryBtn>
                <PrimaryBtn
                  onClick={handleSubmit}
                >
                  <span className="btn-bg"></span>
                  <span className="btn-text">Apply now</span>
                </PrimaryBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default JobDescription;
