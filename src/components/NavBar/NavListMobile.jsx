/* eslint-disable react/prop-types */
import NavListItem from "./NavListItem";
const NavListMobile = () => {
  const isDesktop = false;

  return (
    <>
    <ul className={`mobile-nav-list`}>
      <NavListItem isDesktop={isDesktop} link="/" text="our story" num="1" />
      <NavListItem isDesktop={isDesktop} link="mission" text="our mission" num="2" />
      <NavListItem isDesktop={isDesktop} link="staff" text="staff" num="3" />
      <NavListItem isDesktop={isDesktop} link="serve" text="who we serve" num="4" />
      <NavListItem isDesktop={isDesktop} link="careers" text="careers" num="5" />
      <NavListItem isDesktop={isDesktop} link="contact" text="contact" num="6" />
    </ul>
    <div className="screen-dimmer"></div>
    </>
  );
};
export default NavListMobile;
