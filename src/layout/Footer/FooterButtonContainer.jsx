import { NavLink } from "react-router-dom";
import {
  RoundedButton,
  RoundedButtonTransparent,
} from "../../components/Reusables/Buttons";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../customHooks/useGlobalContext";

const FooterButtonContainer = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const { handleFormFocus } = useGlobalContext();

  return (
    <div className="footer__button-container">
      {/* after clicked it stays highlighted / active until you click somewhere else  */}
      <NavLink to={`/contact`}>
        <RoundedButton
          func={handleFormFocus}
          funcParams={pathname}
          text="contact us today"
        />
      </NavLink>

      <NavLink
        to={`https://aplaceofgrace.apscareerportal.com/jobs/2100934/apps/new?embed=1`}
      >
        {" "}
        <RoundedButtonTransparent specialPadding="0 3rem" text="apply now" />
      </NavLink>
    </div>
  );
};
export default FooterButtonContainer;
