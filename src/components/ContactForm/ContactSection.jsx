import { useState } from "react";
import BgVideo from "../BgVideo/BgVideo";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const initialState = {
  firstName: "",
  firstNameValid: false,
  lastName: "",
  lastNameValid: false,
  email: "",
  emailValid: false,
  message: "",
  messageValid: false,
};

const ContactFormSection = () => {
  // useEffect(() => {
  //   // each of these conditional if else statements are for the outline of the form input when it is complete vs incomplete
  //   // 1 first name
  //   if (firstName === true && firstName !== " " && firstName !== "  ") {
  //     setFormData({ ...formData, firstNameValid: true });
  //   } else {
  //     setFormData({ ...formData, firstNameValid: false });
  //   }
  //   // 2 last name
  //   if (lastName === true && lastName !== " " && lastName !== "  ") {
  //     setFormData({ ...formData, lastNameValid: true });
  //   } else {
  //     setFormData({ ...formData, lastNameValid: false });
  //   }
  //   // 3 message
  //   if (message.length > 5) {
  //     setFormData({ ...formData, messageValid: true });
  //   } else {
  //     setFormData({ ...formData, messageValid: false });
  //   }
  //   // 4 email
  //   if (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
  //     setFormData({ ...formData, emailValid: true });
  //   } else {
  //     setFormData({ ...formData, emailValid: false });
  //   }
  // }, []);

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

          <ContactForm />
        </div>
      </section>{" "}
     <ContactInfo/>
    </>
  );
};
export default ContactFormSection;
