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
    <>
      {/* this conditional allows the user to click anywhere on the li for the route change on mobile without affecting the styles designed for desktop
    the desktop needs this setup to differentiate the contact button styles
    */}
      {isDesktop ? (
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
      ) : (
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
          <li
            style={{
              textTransform: "capitalize",
            }}
            className={
              keepWhite
                ? `nav-list-item${num} keepWhite`
                : `nav-list-item${num}`
            }
          >
            {text}
          </li>
        </NavLink>
      )}
    </>
  );
};
export default NavListItem;

/*
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
      <li
        style={{
          textTransform: "capitalize",
        }}
        className={
          keepWhite ? `nav-list-item${num} keepWhite` : `nav-list-item${num}`
        }
      >
        {text}
      </li>{" "}
    </NavLink>
*/
