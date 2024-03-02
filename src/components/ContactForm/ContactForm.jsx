import { useEffect, useState } from "react";
import BgVideo from "../BgVideo/BgVideo";
const BASE_URL = "http://localhost:3030";

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

const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const { firstName, lastName, email, message } = formData;

  // the brackets allow dynamic chosing of the state object key :)
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormValidatorUI = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const submitForm = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (!firstName || !lastName || !email || !message) {
      alert("incorrect form submission");
      return false;
    }

    if (
      firstName === " " ||
      firstName === "  " ||
      lastName === " " ||
      lastName === "  "
    ) {
      alert("incorrect form submission");
      return false;
    }
    if (/(.+)@(.+){2,}\.(.+){2,}/.test(email) == false) {
      alert("incorrect form submission");
      return false;
    }

    const params = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };

    try {
      await fetch(BASE_URL + "/form_submission", options);
    } catch (error) {
      console.log("error sending data");
    } finally {
      setFormData(initialState);
    }
  };
  return (
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
        <form action="" className="contact__form">
          <label htmlFor="firstName">First Name:</label>
          <input
            required
            value={firstName}
            onChange={(e) => handleFormChange(e)}
            id="firstName"
            type="text"
            name="firstName"
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            required
            value={lastName}
            onChange={(e) => handleFormChange(e)}
            id="lastName"
            type="text"
            name="lastName"
          />
          <label htmlFor="email">Email:</label>
          <input
            required
            value={email}
            onChange={(e) => handleFormChange(e)}
            id="email"
            type="email"
            name="email"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            required
            minLength={5}
            value={message}
            onChange={(e) => handleFormChange(e)}
            id="message"
            type="text"
            name="message"
          />
          <button onClick={submitForm} className=" form__button" type="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default ContactForm;
