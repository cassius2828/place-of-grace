import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ErrorBoundary from "../../pages/Errors/ErrorBoundary";
import BgVideo from "../BgVideo/BgVideo";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import {
  faCheckCircle,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import { useGlobalContext } from "../../customHooks/useGlobalContext";

const ContactFormSection = () => {
  const {
    successSubmission,
    handleHideSuccessMessage,
    failedSubmission,
    handleHideFailedMessage,
  } = useGlobalContext();

  return (
    <>
      {" "}
      <section id="contact" className="contact">
        <BgVideo />
        <div className="form-box">
          {successSubmission ? (
            <div className="contact__result--container">
              <span
                onClick={handleHideSuccessMessage}
                className="contact__result--close-icon"
              >
                x
              </span>
              <FontAwesomeIcon
                className="contact__result-icon"
                icon={faCheckCircle}
              />
              <h2 className="contact__result-message">
                Message Sent Successfully!
              </h2>
            </div>
          ) : failedSubmission ? (
            <div className="contact__result--container">
              <span
                onClick={handleHideFailedMessage}
                className="contact__result--close-icon"
              >
                x
              </span>
              <FontAwesomeIcon
                className="contact__result-icon"
                icon={faCircleXmark}
                style={{ color: "red" }}
              />
              <div>
                <h2
                  style={{ marginBottom: "1rem" }}
                  className="contact__result-message"
                >
                  Message Failed to Send
                </h2>
                <h3
                  style={{ textAlign: "center" }}
                  className="contact__result-message--h3"
                >
                  If issue persists, please reach out to example@gmail.com
                  directly with your inquiry
                </h3>
              </div>
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
