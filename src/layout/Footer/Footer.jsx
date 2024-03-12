import Logo from "../../components/Logo/Logo";
import FooterButtonContainer from "./FooterButtonContainer";
import FooterLinkLayout from "./FooterLinkLayout";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer__logo-container">
        <Logo logoNum={`2`} imageUrl={`/images/NewPoGIcon.svg`} />
      </div>
      <h1 className="footer__text--h1">
        Insiprational Quote of your choice here{" "}
      </h1>
      <hr />
      <br />
      <FooterButtonContainer />
      <hr />
      <FooterLinkLayout />
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
