import { useState } from "react";
import { useGlobalContext } from "../../customHooks/useGlobalContext";

const URL = "/api/outlookAPI";

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
  const [isLoading, setIsLoading] = useState(false);
  const { firstName, lastName, email, message } = formData;
  const {
    formRef,
    handleShowSuccessMessage,
    handleShowFailedMessage,

    handleFormDoneLoading,
  } = useGlobalContext();

  // the brackets allow dynamic chosing of the state object key :)
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
    setIsLoading(true);

    const params = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };

    try {
      const response = await fetch(`${URL}`, options);
      console.log(response);
      if (response.ok) handleShowSuccessMessage();
      else handleShowFailedMessage();
    } catch (error) {
      console.log("error sending data: cannot fetch");
      handleShowFailedMessage();
    } finally {
      setFormData(initialState);
      setIsLoading(false);
      handleFormDoneLoading();
    }
  };

  return (
    <form action="" className="contact__form">
      <label htmlFor="firstName">First Name:</label>
      <input
        ref={formRef}
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
        {isLoading ? (
          <span>
            Processing <span className="loading-dot loading-dot--1">.</span>
            <span className="loading-dot loading-dot--2">.</span>
            <span className="loading-dot loading-dot--3">.</span>
          </span>
        ) : (
          <span>Submit</span>
        )}
      </button>
    </form>
  );
};
export default ContactForm;
