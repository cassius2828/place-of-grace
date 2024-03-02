import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../components/Logo/Logo";
import {
  RoundedButton,
  RoundedButtonTransparent,
} from "../../components/Reusables/Buttons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import FooterButtonContainer from "./FooterButtonContainer";
import FooterLinkGrid from "./FooterLinkGrid";
import FooterOriginLinkLayout from "./FooterOriginLinkLayout";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__logo-container">
        <Logo
          logoNum={`2`}
          imageUrl={`https://placeofgrace.net/NewPoGIcon.svg`}
        />
      </div>
      <h1 className="footer__text--h1">
        Insiprational Quote of your choice here{" "}
      </h1>
      <hr />
      <br />
     <FooterButtonContainer/>
      <hr />
      {/* <FooterLinkGrid/> */}
  
<FooterOriginLinkLayout/>
      <hr />
      <div className="footer__copyright">
        <span className="copyright">
          &copy; copyright 2024 | A Place of Grace Inc | All Rights Reserved
        </span>
        <span className="credits">developed by Cassius Reynolds</span>
      </div>
    </footer>
  );
};
export default Footer;
