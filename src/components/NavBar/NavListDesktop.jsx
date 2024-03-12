
import NavListItem from "./NavListItem";
import {useGlobalContext} from "../../customHooks/useGlobalContext";

const NavListDesktop = ({ className }) => {
  const isDesktop = true;
 
   const { handleFormFocus } = useGlobalContext();
  return (
    <nav id="desktop-nav">
      <ul className={className}>
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
        <NavListItem isDesktop={isDesktop} link="staff" text="staff" num="3" />
        <NavListItem
          isDesktop={isDesktop}
          link="serve"
          text="who we serve"
          num="4"
        />
        <NavListItem
          isDesktop={isDesktop}
          link="careers"
          text="careers"
          num="5"
        />
        <NavListItem
          keepWhite={true}
          isDesktop={isDesktop}
          func={handleFormFocus}
          link="contact"
          text="contact"
          num="6"
        />
      </ul>
    </nav>
  );
};
export default NavListDesktop;
