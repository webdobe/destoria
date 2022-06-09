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
import styled from "@emotion/styled";
import {motion} from "framer-motion";

const ContactForm: FunctionComponent = () => {

  const defaultContact = {
    name: '',
    email: '',
    subject: '',
    message: '',
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

    fetch('/api/contact', {
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
            please contact <span {...s.highlight}>contact@destoria.io</span>
          </div>
          <div {...s.contactFormBoxTitle}>Collaborations</div>
          <div {...s.contactFormRegularText}>
            If you are a founder or part of a project and would like to discuss
            implementation of your collection, or the development of an Unreal
            Engine island or P2E game please contact{" "}
            <span {...s.highlight}>collabs@destoria.io</span>
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

          <div {...s.contactFormMessages}>
            <div {...s.contactFormSuccess}>
              {success}
            </div>
            <div {...s.contactFormError}>
              {error}
            </div>
          </div>

          <div {...s.contactFormGrid}>
            <div {...s.gridSingle}>
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={contact.name}
                onChange={(e) => handleOnChange(e, 'name')}
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
                placeholder="Subject*"
                value={contact.subject}
                onChange={(e) => handleOnChange(e, 'subject')}
                {...s.singleInput}
              />
            </div>
            <div {...s.gridDouble}>
              <textarea
                type="text"
                placeholder="Message"
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
                  <span className="btn-text">Send message</span>
                </PrimaryBtn>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};
export default ContactForm;

const PrimaryBtn = styled.button`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family: sans-serif;
  position: relative;
  overflow: hidden;
  padding: 0 14px;
  transform: scale(1);
  
  &,
  &:before,
  &:after,
  .btn-text,
  .btn-text:before,
  .btn-text:after {
    transition: 
      border-color 0.6s ease, 
      color 0.1s ease, 
      transform 0.3s ease,
      width 0.3s ease, 
      height 0.3s ease, 
      top 0.3s ease, 
      left 0.3s ease, 
      bottom 0.3s ease, 
      right 0.3s ease;
  }
  
  &:before,
  &:after {
    content: "";
    width: 16px;
    height: 16px;
    display: block;
    position: absolute;
    transform: rotate(45deg);
    z-index: 3;
  }
  
  &:before {
    border-right: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    top: -8px;
    left: -4px;
  }
  
  &:after {
    border-left: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    bottom: -8px;
    right: -4px;
  }
  
  .btn-bg {
    background-color: ${({outline}) => outline ? '' : '#F83600'};
    position: absolute;
    display: block;
    height: 100%;
    width: calc(100% - 7px);
    top: 0;
    left: 4px;
    opacity: 1;
    transition: background-color 0.3s ease;
    z-index: -1;
    clip-path: polygon( 
      0 10px, 
      10px 0, 
      100% 0, 
      100% 10px, 
      100% calc(100% - 10px), 
      calc(100% - 10px) 100%, 
      10px 100%, 0% 100%, 
      0% 10px 
    );
  }
  
  .btn-text {
    font-family: "Chakra Petch", sans-serif;
    padding: 6px 10px;
    display: block;
    position: relative;
    border-top: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    border-bottom: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    z-index: 3;
  
    &:before,
    &:after {
      content: "";
      width: 20px;
      height: calc(100% - 9px);
      display: block;
      position: absolute;
      z-index: 3;
    }
    
    &:before {
      top: -1px;
      right: -11px;
      border-top: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
      border-right: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    }
    
    &:after {
      bottom: -1px;
      left: -11px;
      border-bottom: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
      border-left: solid 1px ${({outline}) => outline ? '#F83600' : '#FF7C1E'};
    }
  }
  
  &:hover {
    & {
      transform: scale(1.05);
    }
    
    &:before,
    &:after {
      border-color: transparent;
    }
    
    &:before {
      top: -7px;
      left: -6px;
    }
    
    &:after {
      bottom: -7px;
      right: -6px;
    }
    
    .btn-text {
      border-color: transparent;
      transform: scale(1.03);
      
      &:before, 
      &:after {
        border-color: transparent;
      }
    }
    
    .btn-text:before,
    .btn-text:after {
      
    }
  
    .btn-bg {
      transform: scale(1.05);
    }
  }
`
