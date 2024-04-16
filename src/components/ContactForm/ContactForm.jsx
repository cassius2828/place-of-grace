import { useEffect, useState } from "react";
import { useGlobalContext } from "../../customHooks/useGlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_URL2 = import.meta.env.VITE_BASE_URL2;
const EMAIL_FUNC_URL = import.meta.env.VITE_EMAIL_FUNC
const HELLO_WORLD_URL = import.meta.env.VITE_HELLO_WORLD


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
  const { formRef } = useGlobalContext();

  // the brackets allow dynamic chosing of the state object key :)
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleFormValidatorUI = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
useEffect(() => {
  console.log("hello")
  console.log('ENV VARS: ' + import.meta.env.VITE_HELLO_WORLD)

},[])
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
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };

    try {
      await fetch(`/${HELLO_WORLD_URL}` , options);
      console.log(HELLO_WORLD_URL)
    } catch (error) {
      console.log("error sending data");
    } finally {
      setFormData(initialState);
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
      <button
        // onClick={() =>
        //   alert(
        //     "in production this will send an email to the designated staff and send a confirmation email to the user. The form will also automatically be reset in production"
        //   )
        // }
        onClick={submitForm}
        className=" form__button"
        type="button"
      >
        Submit
      </button>
    </form>
  );
};
export default ContactForm;
