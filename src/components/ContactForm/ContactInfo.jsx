import {
  faEnvelope,
  faLocationPin,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="contact__info">
      <div className="contact__info-container">
        {/* test this later for mobile and desktop */}
        <span className="contact__text contact__text--phone">
         Office:{" "}
          <a href="tel:7074477634">
            (707) 447-7634
            <FontAwesomeIcon className="contact__icon" icon={faPhoneFlip} />
          </a>
        </span>
        <span className="contact__text contact__text--email">
          Email: example@placeofgrace.net{" "}
          <a href="mailto:example@placeofgrace.net">
            <FontAwesomeIcon className="contact__icon" icon={faEnvelope} />
          </a>
        </span>{" "}
        <span className="contact__text contact__text--address">
          Office Location: 918 Merchant St, Vacaville CA, 95688
          <NavLink
            to={`https://www.google.com/maps/dir/38.3395002,-121.9941041/placeofgrace/@38.3440404,-121.9994852,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x808517fcb7661cc3:0x5f09e122ba7971c3!2m2!1d-121.9972024!2d38.3484197?entry=ttu`}
          >
            {" "}
            <FontAwesomeIcon className="contact__icon" icon={faLocationPin} />{" "}
          </NavLink>{" "}
        </span>{" "}
      </div>
    </div>
  );
};
export default ContactInfo;
