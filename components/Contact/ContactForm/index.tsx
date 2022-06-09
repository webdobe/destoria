import s from "./styles";
import {
  FunctionComponent,
  useState,
} from "react";
import {PrimaryBtn} from "../../../styles";

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


