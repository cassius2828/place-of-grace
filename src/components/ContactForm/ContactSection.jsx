import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorBoundary from "../../pages/Errors/ErrorBoundary";
import BgVideo from "../BgVideo/BgVideo";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ContactFormSection = () => {
  const [tempState, setTempState] = useState(false);

  return (
    <>
      {" "}
      <section id="contact" className="contact">
        <BgVideo />
        <div className="form-box">
          {tempState ? (
            <div className="contact__success--container">
              <span
                onClick={() => setTempState(false)}
                className="contact__success--close-icon"
              >
                x
              </span>
              <FontAwesomeIcon
                className="contact__success-icon"
                icon={faCheckCircle}
              />
              <h2 className="contact__success-message">
                Message Sent Successfully!
              </h2>
            </div>
          ) : (
            <>
              {" "}
              <div className="contact__text--container">
                <h2 className="contact__text--title">Reach Out</h2>
                <h4 className="contact__text--sub-title">
                  Use the form below to send us any comments, questions, or
                  cencerns
                </h4>
                <hr className="contact__hr" />
              </div>
              <ErrorBoundary
                isForm={true}
                firstMessage="Something went wrong with the form submission"
                secondMessage="Please try again or contact support directly at example@gmail.com to submit an inquiry"
              >
                <ContactForm />
              </ErrorBoundary>{" "}
            </>
          )}
        </div>
      </section>{" "}
      <ContactInfo />
    </>
  );
};
export default ContactFormSection;
