import Hamburger from "../Reusables/Hamburger";
import NavListMobile from "./NavListMobile";
const MobileNav = ({ toggle, setToggle }) => {
  return (
    <>
      <Hamburger toggle={toggle} setToggle={setToggle} />
      <NavListMobile toggle={toggle} />
    </>
  );
};
export default MobileNav;
