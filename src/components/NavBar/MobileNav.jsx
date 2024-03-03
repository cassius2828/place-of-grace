import Hamburger from "../Reusables/Hamburger";
import NavListMobile from "./NavListMobile";
const MobileNav = ({ toggle, setToggle }) => {
  return (
    <>
      <Hamburger toggle={toggle} setToggle={setToggle} />
      <NavListMobile className={`mobile-nav-list`} toggle={toggle} />
    </>
  );
};
export default MobileNav;
