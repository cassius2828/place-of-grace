import NavListItem from "./NavListItem"

const NavListDesktop = ({className}) => {
  const isDesktop = true;
  return (
    <ul className={className}>
      <NavListItem isDesktop={isDesktop} link="our_story" text="our story" num="1" />
      <NavListItem isDesktop={isDesktop} link="mission" text="our mission" num="2" />
      <NavListItem isDesktop={isDesktop} link="staff" text="staff" num="3" />
      <NavListItem isDesktop={isDesktop} link="serve" text="who we serve" num="4" />
      <NavListItem isDesktop={isDesktop} link="careers" text="careers" num="5" />
      <NavListItem isDesktop={isDesktop} link="contact" text="contact" num="6" />
    </ul>
  );
}
export default NavListDesktop