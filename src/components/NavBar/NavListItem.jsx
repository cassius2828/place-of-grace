import { NavLink, useLocation } from "react-router-dom";
import { useGlobalContext } from "../../customHooks/useGlobalContext";

const NavListItem = ({
  isRoute = true,
  num,
  link,
  text,
  isDesktop,
  keepWhite,
  func = null,
}) => {
  const { dispatch } = useGlobalContext();
  const location = useLocation();
  const pathname = location.pathname;
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
        // * also it focuses the input if already on contact route
        onClick={
          isDesktop
            ? () => func(pathname)
            : () => {
                dispatch({ type: "toggleMobileMenu" });
              }
        }
        // i changed this to keep the vite prefix in prod but it isnt working
        to={isRoute ? `/${link}` : `${link}`}
      >
        {text}
      </NavLink>
    </li>
  );
};
export default NavListItem;
