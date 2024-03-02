/* eslint-disable react/prop-types */
import NavListDesktop from "./NavListDesktop";
import Logo from "../Logo/Logo";



const NavigationBar = ({openMobileMenu}) => {
  return (
    <>
      <nav className="navbar">
        <div
          className={
            openMobileMenu
              ? `navbar-container mobile-nav--active `
              : `navbar-container`
          }
        >
          <Logo logoNum={'1'} imageUrl="https://placeofgrace.net/NewPoGLogo.svg" />
          <NavListDesktop />
        </div>{" "}
      </nav>{" "}
    </>
  );
};
export default NavigationBar;
