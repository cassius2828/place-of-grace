import ErrorBoundary from "../../pages/Errors/ErrorBoundary";
import BgVideo from "../BgVideo/BgVideo";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactFormSection = () => {
  return (
    <>
      {" "}
      <section id="contact" className="contact">
        <BgVideo />
        <div className="form-box">
          <div className="contact__text--container">
            <h2 className="contact__text--title">Reach Out</h2>
            <h4 className="contact__text--sub-title">
              Use the form below to send us any comments, questions, or cencerns
            </h4>
            <hr className="contact__hr" />
          </div>
          <ErrorBoundary
          isForm={true}
            firstMessage="Something went wrong with the form submission"
            secondMessage="Please try again or contact support directly at example@gmail.com to submit an inquiry"
          >
            <ContactForm />
          </ErrorBoundary>
        </div>
      </section>{" "}
      <ContactInfo />
    </>
  );
};
export default ContactFormSection;
