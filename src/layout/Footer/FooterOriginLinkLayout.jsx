import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavListItem from "../../components/NavBar/NavListItem";
const FooterOriginLinkLayout = () => {
  let isDesktop = true;
  return (
    <>
      {" "}
      <div className="footer__list-container">
        <ul className="footer__list footer__list1">
          <NavListItem
            isDesktop={isDesktop}
            link="/"
            text="our story"
            num="1"
          />
          <NavListItem
            isDesktop={isDesktop}
            link="mission"
            text="our mission"
            num="2"
          />
        </ul>
        <ul className="footer__list footer__list2">
          <NavListItem
            isDesktop={isDesktop}
            link="staff"
            text="staff"
            num="3"
          />
          <NavListItem
            isDesktop={isDesktop}
            link="careers"
            text="careers"
            num="4"
          />
        </ul>
        <ul className="footer__list footer__list3">
          <a href="https://nbrc.net/client-services/eligibility/">
            <li>North Bay Regional Center </li>
          </a>{" "}
          <a href="https://www.sdrc.org/eligible">
            <li>San Diego Regional Center</li>
          </a>
        </ul>
      </div>
      <hr />
      <div className="footer__list-container--horizontal">
        <div className="footer__list-container--horizontal__social-container">
          <span className="social-media-text">Connect with us here!</span>
        </div>
        <ul className="footer__list--horizontal footer__list4">
          <div className="footer__icon-container">
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
        </ul>
      </div>
    </>
  );
};
export default FooterOriginLinkLayout;

/*

 
     
      <NavListItem isDesktop={isDesktop} link="careers" text="careers" num="5" />
      <NavListItem isDesktop={isDesktop} link="contact" text="contact" num="6" />*/
