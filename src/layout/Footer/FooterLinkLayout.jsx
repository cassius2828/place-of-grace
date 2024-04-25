import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavListItem from "../../components/NavBar/NavListItem";
const FooterLinkLayout = () => {
  let isDesktop = true;
  return (
    <>
      {" "}
      <div className="footer__list-container">
        <ul className="footer__list footer__list1">
          <NavListItem
            isDesktop={isDesktop}
            link="our-story"
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
          <NavListItem
            isRoute={false}
            isDesktop={isDesktop}
            link="https://nbrc.net/client-services/eligibility/"
            text="North Bay Regional Center"
          />
          <NavListItem
            isRoute={false}
            isDesktop={isDesktop}
            link="https://www.sdrc.org/eligible"
            text="San Diego Regional Center"
          />
        </ul>
      </div>
      <hr />
      <div className="footer__list-container--horizontal">
        <div className="footer__list-container--horizontal__social-container">
          <span className="social-media-text">Connect with us here!</span>
        </div>
        <ul className="footer__list--horizontal footer__list4">
          <div className="footer__icon-container">
            <a href="https://www.facebook.com/profile.php?id=100090846635808">
              <FontAwesomeIcon className="icon" size="2x" icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/aplaceofgraceinc/">
              <FontAwesomeIcon className="icon" size="2x" icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/aplaceofgraceinc/?viewAsMember=true">
              <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin} />
            </a>
          </div>
        </ul>
      </div>
    </>
  );
};
export default FooterLinkLayout;
