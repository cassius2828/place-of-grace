import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../customHooks/useGlobalContext";

const NavListItem = ({ num, link, text, isDesktop, keepWhite }) => {
  const { dispatch } = useGlobalContext();

  return (
    // I remeoved the a tag here
    <li
      style={{
        textTransform: "capitalize",
      }}
      className={
        keepWhite ? `nav-list-item${num} keepWhite` : `nav-list-item${num}`
      }
    >
      <NavLink
        // :) this allows the mobile screen to be toggled if the mobile nav is pressed
        // but if it is the desktop then nothing will happen so it does not disrupt the
        // state of the mobile nav if scaled down to a hamburger menu size for UI
        onClick={
          isDesktop ? () => {} : () => dispatch({ type: "toggleMobileMenu" })
        }
        to={link}
      >
        {text}
      </NavLink>
    </li>
  );
};
export default NavListItem;
