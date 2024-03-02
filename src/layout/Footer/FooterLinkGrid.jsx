import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterLinkGrid = () => {
  return (
    <div className="footer__grid footer__grid--links">
      <ul className="footer__list footer__list1">
        <a href="">
          <li>Our Story</li>
        </a>
        <a href="">
          <li>Our Mission</li>
        </a>
      </ul>
      <ul className="footer__list footer__list2">
        <a href="">
          <li>Jobs</li>
        </a>
        <a href="">
          <li>Staff</li>
        </a>
      </ul>
      <ul className="footer__list footer__list3">
        <a href="">
          <li>North Bay Regional Center </li>
        </a>
        <a href="">
          <li>San Diego Regional Center</li>
        </a>
      </ul>

      <a
        onClick={() => alert("please update facebook company page")}
        // target="_blank"
        // rel="noreferrer"
        href=""
      >
        <FontAwesomeIcon className="icon" size="2x" icon={faFacebook} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/aplaceofgraceinc/"
      >
        <FontAwesomeIcon className="icon" size="2x" icon={faInstagram} />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/company/aplaceofgraceinc"
      >
        <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin} />
      </a>
    </div>
  );
};
export default FooterLinkGrid;
